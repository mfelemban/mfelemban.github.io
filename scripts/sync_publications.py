#!/usr/bin/env python3
"""Sync _data/publications.yml with OpenAlex.

Fetches works for the configured OpenAlex author ID and appends any that
aren't already listed. Existing entries are never modified or reordered
away from their hand-edited fields — the script only adds what's missing,
so manual corrections survive every run.

Papers listed in _data/publications_ignore.yml are never added. Use that
file to suppress false-positive author matches.

Usage:
    python3 scripts/sync_publications.py            # apply changes
    python3 scripts/sync_publications.py --check    # report only, exit 1 if stale
"""

import argparse
import json
import re
import sys
import urllib.parse
import urllib.request
from difflib import SequenceMatcher
from pathlib import Path

import yaml

OPENALEX_AUTHOR_ID = "A5037740657"
CONTACT_EMAIL = "mfelemban@kfupm.edu.sa"  # OpenAlex "polite pool" — faster, and they can reach you

# OpenAlex occasionally attributes another author's work to you. Nothing before
# your first publication year can be yours, so drop it without bothering to ask.
MIN_YEAR = 2011

# Titles this similar to one already listed are treated as the same paper. Catches
# preprint-vs-published variants and small wording drift ("Injections"/"Injection").
TITLE_MATCH_THRESHOLD = 0.90

ROOT = Path(__file__).resolve().parent.parent
PUBS_FILE = ROOT / "_data" / "publications.yml"
IGNORE_FILE = ROOT / "_data" / "publications_ignore.yml"

HEADER = """\
# Publications, grouped by type, newest first.
#
# New papers are appended automatically from OpenAlex by
# scripts/sync_publications.py (see .github/workflows/sync-publications.yml).
# Hand-edits to existing entries are preserved across syncs, so feel free to
# fix an author list or a venue name here — the script will not overwrite it.
#
# Fields: authors, title, venue, details, year, url, award, doi.
# Occurrences of the name in _config.yml `me:` are bolded automatically.
"""

# OpenAlex work types that belong in each section of publications.yml.
SECTION_BY_TYPE = {
    "article": "journals",
    "review": "journals",
    "preprint": "reports",
    "dissertation": "theses",
    "book-chapter": "conferences",
    "paratext": None,  # front matter, tables of contents — never a real paper
    "editorial": None,
    "erratum": None,
    "letter": None,
}


def clean_title(title):
    """Strip the inline markup OpenAlex sometimes carries in titles.

    Publisher XML marks up dropped capitals, so a title arrives as
    "CEFEEL: <u>C</u> ommunication- <u>E</u> fficient ...". Removing the tags
    leaves the capital stranded from its word, so rejoin those too.
    """
    text = re.sub(r"<[^>]+>", "", title or "")
    text = re.sub(r"\b([A-Za-z]) ([a-z])", r"\1\2", text)  # "C ommunication" -> "Communication"
    text = re.sub(r"- ([A-Z])", r"-\1", text)  # "Communication- Efficient" -> "Communication-Efficient"
    return re.sub(r"\s+", " ", text).strip().rstrip(".")


def normalize_title(title):
    """Collapse a title to a comparison key: lowercase, alphanumerics only."""
    return re.sub(r"[^a-z0-9]+", "", clean_title(title).lower())


def matches_known(tkey, known_titles):
    """True if this title is already listed, allowing for small wording drift."""
    if tkey in known_titles:
        return True
    for known in known_titles:
        # Cheap length guard before the expensive comparison.
        if abs(len(known) - len(tkey)) > 0.2 * max(len(known), len(tkey), 1):
            continue
        if SequenceMatcher(None, tkey, known).ratio() >= TITLE_MATCH_THRESHOLD:
            return True
    return False


def format_authors(authorships):
    """OpenAlex gives full names; the site style is 'M. Felemban'."""
    names = []
    for a in authorships:
        full = (a.get("author") or {}).get("display_name") or ""
        parts = [p for p in full.split() if p]
        if not parts:
            continue
        surname = parts[-1]
        initials = " ".join(f"{p[0]}." for p in parts[:-1] if p[0].isalpha())
        names.append(f"{initials} {surname}".strip())
    return ", ".join(names)


def fetch_works():
    """Page through every work OpenAlex attributes to the author."""
    works, cursor = [], "*"
    while cursor:
        params = urllib.parse.urlencode(
            {
                "filter": f"author.id:{OPENALEX_AUTHOR_ID}",
                "per-page": "200",
                "cursor": cursor,
                "mailto": CONTACT_EMAIL,
            }
        )
        url = f"https://api.openalex.org/works?{params}"
        req = urllib.request.Request(url, headers={"User-Agent": f"mfelemban.github.io ({CONTACT_EMAIL})"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            page = json.load(resp)
        works.extend(page["results"])
        cursor = page["meta"].get("next_cursor")
        if not page["results"]:
            break
    return works


def classify(work):
    """Which section of publications.yml this work belongs in, or None to skip."""
    wtype = work.get("type")
    if wtype in SECTION_BY_TYPE:
        section = SECTION_BY_TYPE[wtype]
        if section is None:
            return None
    else:
        section = "journals"

    source = (work.get("primary_location") or {}).get("source") or {}
    source_type = source.get("type")

    # A journal-typed article published in a proceedings is a conference paper.
    if source_type == "conference":
        return "conferences"
    if source_type == "repository" or wtype == "preprint":
        return "reports"
    return section


def to_entry(work):
    """Map an OpenAlex work onto the site's publication schema."""
    source = (work.get("primary_location") or {}).get("source") or {}
    biblio = work.get("biblio") or {}

    details = []
    if biblio.get("volume"):
        vol = biblio["volume"]
        if biblio.get("issue"):
            vol += f", no. {biblio['issue']}"
        details.append(vol)
    first, last = biblio.get("first_page"), biblio.get("last_page")
    if first and last and first != last:
        details.append(f"pp. {first}–{last}")
    elif first:
        details.append(f"p. {first}")

    doi = (work.get("doi") or "").replace("https://doi.org/", "") or None

    entry = {
        "authors": format_authors(work.get("authorships") or []),
        "title": clean_title(work.get("display_name")),
        "venue": source.get("display_name"),
        "year": work.get("publication_year"),
    }
    if details:
        entry["details"] = ", ".join(details)
    if work.get("doi"):
        entry["url"] = work["doi"]
    if doi:
        entry["doi"] = doi
    return {k: v for k, v in entry.items() if v}


def existing_keys(pubs):
    """Every DOI and normalized title already present, across all sections."""
    dois, titles = set(), set()
    for section in pubs.values():
        for entry in section or []:
            if entry.get("doi"):
                dois.add(entry["doi"].lower())
            url = entry.get("url") or ""
            if "doi.org/" in url:
                dois.add(url.split("doi.org/", 1)[1].lower())
            titles.add(normalize_title(entry.get("title")))
    return dois, titles


def load_ignore():
    if not IGNORE_FILE.exists():
        return set(), set()
    data = yaml.safe_load(IGNORE_FILE.read_text()) or {}
    dois = {d.lower() for d in (data.get("dois") or [])}
    titles = {normalize_title(t) for t in (data.get("titles") or [])}
    return dois, titles


def sort_key(entry):
    """Newest first; entries without a year sink to the bottom."""
    return (-(entry.get("year") or 0), entry.get("title") or "")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="report only; exit 1 if new papers exist")
    args = parser.parse_args()

    pubs = yaml.safe_load(PUBS_FILE.read_text())
    known_dois, known_titles = existing_keys(pubs)
    ignore_dois, ignore_titles = load_ignore()

    added, skipped_old = [], 0
    for work in fetch_works():
        if work.get("is_retracted"):
            continue
        section = classify(work)
        if not section:
            continue

        entry = to_entry(work)
        if not entry.get("title"):
            continue

        if (entry.get("year") or 0) < MIN_YEAR:
            skipped_old += 1
            continue

        doi = (entry.get("doi") or "").lower()
        tkey = normalize_title(entry["title"])

        if doi and doi in known_dois:
            continue
        if matches_known(tkey, known_titles):
            continue
        if (doi and doi in ignore_dois) or tkey in ignore_titles:
            continue

        pubs.setdefault(section, []).append(entry)
        known_titles.add(tkey)
        if doi:
            known_dois.add(doi)
        added.append((section, entry))

    if skipped_old:
        print(f"Skipped {skipped_old} work(s) dated before {MIN_YEAR} (misattributed by OpenAlex).\n")

    if not added:
        print("Up to date — no new publications on OpenAlex.")
        return 0

    print(f"{len(added)} new publication(s):\n")
    for section, entry in sorted(added, key=lambda x: sort_key(x[1])):
        print(f"  [{section:12}] {entry.get('year', '????')}  {entry['title'][:70]}")
    print()

    if args.check:
        print("Run without --check to add them, or add false matches to _data/publications_ignore.yml")
        return 1

    for section in pubs:
        if pubs[section]:
            pubs[section].sort(key=sort_key)

    body = yaml.dump(pubs, sort_keys=False, allow_unicode=True, width=100, default_flow_style=False)
    PUBS_FILE.write_text(HEADER + "\n" + body)
    print(f"Wrote {PUBS_FILE.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
