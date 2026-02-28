import { ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import publicationsData from "@/data/publications.json";

type Publication = {
  title: string;
  authors: string;
  year: string;
  venue: string;
  type: "journal" | "conference" | "thesis" | "preprint";
  citations: number;
  link: string;
};

const all = publicationsData.publications as Publication[];

const journals = [...all.filter((p) => p.type === "journal")].sort(
  (a, b) => parseInt(b.year) - parseInt(a.year)
);
const conferences = [...all.filter((p) => p.type === "conference")].sort(
  (a, b) => parseInt(b.year) - parseInt(a.year)
);
const theses = all.filter((p) => p.type === "thesis");
const preprints = all.filter((p) => p.type === "preprint");

const PubEntry = ({
  pub,
  num,
}: {
  pub: Publication;
  num: number;
}) => (
  <li className="flex gap-4 border-b border-border pb-4 last:border-0">
    <span className="text-xs text-muted-foreground w-7 shrink-0 pt-0.5 text-right">[{num}]</span>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-foreground leading-relaxed">
        {pub.authors}.{" "}
        {pub.link !== "#" ? (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            {pub.title}
            <ExternalLink className="h-3 w-3 shrink-0" />
          </a>
        ) : (
          <span className="font-medium">{pub.title}</span>
        )}
        {pub.venue && (
          <>
            . <em className="text-muted-foreground">{pub.venue}</em>
          </>
        )}
        {", "}{pub.year}.
        {pub.citations > 0 && (
          <span className="ml-2 text-xs text-muted-foreground">
            ({pub.citations} citations)
          </span>
        )}
      </p>
    </div>
  </li>
);

type SectionProps = { title: string; pubs: Publication[]; offset?: number };

const PubSection = ({ title, pubs, offset = 0 }: SectionProps) => {
  if (!pubs.length) return null;
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6 flex items-center gap-3">
        {title}
        <span className="text-base font-normal text-muted-foreground">({pubs.length})</span>
      </h2>
      <ol className="space-y-4">
        {pubs.map((p, i) => (
          <PubEntry key={i} pub={p} num={offset + i + 1} />
        ))}
      </ol>
    </section>
  );
};

const Publications = () => (
  <PageLayout
    title="Publications"
    subtitle="Research publications in cybersecurity, privacy, and quantum computing"
  >
    {/* Stats row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border mb-12 bg-border">
      {[
        { value: publicationsData.total_citations, label: "Total Citations" },
        { value: publicationsData.h_index, label: "h-index" },
        { value: publicationsData.i10_index, label: "i10-index" },
        { value: journals.length + conferences.length + theses.length, label: "Publications" },
      ].map((s) => (
        <div key={s.label} className="bg-background text-center py-5 px-4">
          <p className="font-serif font-bold text-3xl text-primary">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
        </div>
      ))}
    </div>
    <p className="text-xs text-muted-foreground mb-10 -mt-8 text-right">
      Source: Google Scholar · Last updated: {publicationsData.last_updated}
    </p>

    {/* Academic Profiles */}
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-5">
        Academic Profiles
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {[
          { label: "Google Scholar", href: "https://scholar.google.com/citations?user=ZyC2dJ8AAAAJ&hl=en&oi=ao" },
          { label: "DBLP", href: "https://dblp.org/pid/135/7413.html" },
          { label: "PURE at KFUPM", href: "https://pure.kfupm.edu.sa/en/persons/mohammad-felemban" },
        ].map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:underline"
          >
            {p.label} <ExternalLink className="h-3 w-3" />
          </a>
        ))}
      </div>
    </section>

    <PubSection title="Journal Publications" pubs={journals} />
    <PubSection title="Conference Publications" pubs={conferences} offset={journals.length} />
    <PubSection title="Theses" pubs={theses} offset={journals.length + conferences.length} />
    <PubSection title="Preprints & Working Papers" pubs={preprints} offset={journals.length + conferences.length + theses.length} />
  </PageLayout>
);

export default Publications;
