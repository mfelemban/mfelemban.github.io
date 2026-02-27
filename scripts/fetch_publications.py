#!/usr/bin/env python3
"""
Fetch publications from Google Scholar and update src/data/publications.json.

Usage:
    cd website-kfupm
    pip install -r scripts/requirements.txt
    python scripts/fetch_publications.py

The script fetches the author profile for Muhamad Felemban (ZyC2dJ8AAAAJ),
fills in all publication details, categorises each entry, and writes the
result to src/data/publications.json.
"""

import json
import os
import sys
from datetime import date

try:
    from scholarly import scholarly
except ImportError:
    print("Error: 'scholarly' is not installed.")
    print("Run: pip install -r scripts/requirements.txt")
    sys.exit(1)

AUTHOR_ID = "ZyC2dJ8AAAAJ"
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "..", "src", "data", "publications.json")


def build_link(author_pub_id: str) -> str:
    """Build a Google Scholar citation link from an author_pub_id."""
    if not author_pub_id or ":" not in author_pub_id:
        return "#"
    parts = author_pub_id.split(":")
    if len(parts) < 2:
        return "#"
    return (
        f"https://scholar.google.com/citations?view_op=view_citation"
        f"&hl=en&user={AUTHOR_ID}&citation_for_view={author_pub_id}"
    )


def classify_publication(pub: dict) -> str:
    """Return one of: journal | conference | preprint | thesis."""
    bib = pub.get("bib", {})
    venue = (
        bib.get("journal", "")
        or bib.get("conference", "")
        or bib.get("booktitle", "")
        or bib.get("venue", "")
    ).lower()

    if bib.get("journal"):
        return "journal"
    if bib.get("conference") or bib.get("booktitle"):
        return "conference"
    if "arxiv" in venue or "preprint" in venue:
        return "preprint"
    if "thesis" in venue or "dissertation" in venue:
        return "thesis"
    # Fall back to ENTRYTYPE when available
    entry_type = bib.get("ENTRYTYPE", "").lower()
    if entry_type in ("article",):
        return "journal"
    if entry_type in ("inproceedings", "proceedings"):
        return "conference"
    return "journal"  # default


def venue_string(pub: dict) -> str:
    """Build a human-readable venue string."""
    bib = pub.get("bib", {})
    parts = []
    venue = bib.get("journal") or bib.get("conference") or bib.get("booktitle") or bib.get("venue", "")
    if venue:
        parts.append(venue)
    volume = bib.get("volume", "")
    number = bib.get("number", "")
    pages = bib.get("pages", "")
    if volume:
        parts.append(str(volume))
    if number:
        parts[-1] = parts[-1] + f"({number})"
    if pages:
        parts.append(pages)
    return ", ".join(parts)


def main():
    print(f"Fetching author profile for ID: {AUTHOR_ID} ...")
    author = scholarly.search_author_id(AUTHOR_ID)
    scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])

    h_index = author.get("hindex", 0)
    i10_index = author.get("i10index", 0)
    total_citations = author.get("citedby", 0)

    print(f"Author: {author.get('name')}")
    print(f"h-index: {h_index}, i10-index: {i10_index}, citations: {total_citations}")
    print(f"Total publications found: {len(author.get('publications', []))}")
    print("Filling publication details (this may take a while)...")

    publications = []
    for i, pub in enumerate(author.get("publications", []), 1):
        try:
            scholarly.fill(pub)
        except Exception as e:
            print(f"  Warning: could not fill pub {i}: {e}")

        bib = pub.get("bib", {})
        title = bib.get("title", "").strip()
        if not title:
            continue

        authors = bib.get("author", "").strip()
        year = str(bib.get("pub_year", "")).strip()
        citations = pub.get("num_citations", 0)
        link = build_link(pub.get("author_pub_id", ""))
        pub_type = classify_publication(pub)
        venue = venue_string(pub)

        publications.append({
            "title": title,
            "authors": authors,
            "year": year,
            "venue": venue,
            "type": pub_type,
            "citations": citations,
            "link": link,
        })
        print(f"  [{i}/{len(author['publications'])}] {title[:60]}...")

    output = {
        "h_index": h_index,
        "i10_index": i10_index,
        "total_citations": total_citations,
        "last_updated": date.today().isoformat(),
        "publications": publications,
    }

    output_path = os.path.normpath(OUTPUT_PATH)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    counts = {t: sum(1 for p in publications if p["type"] == t) for t in ("journal", "conference", "preprint", "thesis")}
    print(f"\nDone! Wrote {len(publications)} publications to {output_path}")
    print(f"  Journals: {counts['journal']}, Conferences: {counts['conference']}, "
          f"Preprints: {counts['preprint']}, Theses: {counts['thesis']}")


if __name__ == "__main__":
    main()
