import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Award } from "lucide-react";
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

const allPublications: Publication[] = publicationsData.publications as Publication[];

const journalPublications = allPublications.filter(p => p.type === "journal");
const conferencePublications = allPublications.filter(p => p.type === "conference");
const thesesAndOther = allPublications.filter(p => p.type === "thesis");
const preprints = allPublications.filter(p => p.type === "preprint");

const Publications = () => {
  const academicProfiles = [
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=ZyC2dJ8AAAAJ&hl=en&oi=ao",
      icon: "🎓"
    },
    {
      name: "DBLP",
      url: "https://dblp.org/pid/135/7413.html",
      icon: "📚"
    },
    {
      name: "PURE at KFUPM",
      url: "https://pure.kfupm.edu.sa/en/persons/mohammad-felemban",
      icon: "🏛️"
    },
    {
      name: "ResearchGate",
      url: "#",
      icon: "🔬"
    }
  ];

  const renderPublicationCard = (pub: Publication, index: number) => (
    <AcademicCard key={index} className="hover:shadow-lg transition-all duration-300">
      <AcademicCardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <AcademicCardTitle className="mb-3 leading-relaxed">
              {pub.title}
            </AcademicCardTitle>
            <AcademicCardDescription className="mb-3">
              {pub.authors}
            </AcademicCardDescription>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                {pub.venue ? `${pub.venue}, ${pub.year}` : pub.year}
              </p>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-xs">
                  <Award className="h-3 w-3 mr-1" />
                  {pub.citations} citations
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {pub.year}
                </Badge>
              </div>
            </div>
          </div>
          {pub.link !== "#" && (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-primary hover:text-primary-glow transition-smooth"
              aria-label="View publication"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </AcademicCardHeader>
    </AcademicCard>
  );

  const renderSection = (title: string, pubs: Publication[]) => {
    if (pubs.length === 0) return null;
    return (
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">{title}</h2>
          <Badge variant="default">{pubs.length}</Badge>
        </div>
        <div className="space-y-6">
          {[...pubs]
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((pub, index) => renderPublicationCard(pub, index))}
        </div>
      </div>
    );
  };

  return (
    <PageLayout
      title="Publications"
      subtitle="Research publications in cybersecurity, privacy, and quantum computing"
    >
      {/* Academic Profiles */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Academic Profiles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <AcademicCard className="h-full text-center hover:border-primary/30 transition-smooth">
                <AcademicCardContent className="pt-6">
                  <div className="text-4xl mb-3">{profile.icon}</div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                    {profile.name}
                  </h3>
                </AcademicCardContent>
              </AcademicCard>
            </a>
          ))}
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="mb-8">
        <div className="grid md:grid-cols-4 gap-6">
          <AcademicCard className="text-center">
            <AcademicCardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{publicationsData.total_citations}</div>
              <p className="text-sm text-muted-foreground">Total Citations</p>
            </AcademicCardContent>
          </AcademicCard>
          <AcademicCard className="text-center">
            <AcademicCardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{publicationsData.h_index}</div>
              <p className="text-sm text-muted-foreground">h-index</p>
            </AcademicCardContent>
          </AcademicCard>
          <AcademicCard className="text-center">
            <AcademicCardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{publicationsData.i10_index}</div>
              <p className="text-sm text-muted-foreground">i10-index</p>
            </AcademicCardContent>
          </AcademicCard>
          <AcademicCard className="text-center">
            <AcademicCardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {journalPublications.length + conferencePublications.length + thesesAndOther.length}
              </div>
              <p className="text-sm text-muted-foreground">Publications</p>
            </AcademicCardContent>
          </AcademicCard>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">
          Last updated: {publicationsData.last_updated}
        </p>
      </div>

      {renderSection("Journal Publications", journalPublications)}
      {renderSection("Conference Publications", conferencePublications)}
      {renderSection("Theses & Other Publications", thesesAndOther)}
      {renderSection("Preprints & Working Papers", preprints)}

      {/* Research Impact */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Research Impact
        </h2>
        <AcademicCard variant="highlighted">
          <AcademicCardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My research spans three critical areas in modern computing: cybersecurity, privacy-preserving
                technologies, and quantum computing. With over {publicationsData.total_citations} citations and
                an h-index of {publicationsData.h_index}, my work has made significant contributions to these
                rapidly evolving fields.
              </p>
              <p>
                Key research achievements include pioneering work in underwater sensor networks, developing
                privacy-preserving federated learning systems, and advancing quantum algorithms for practical
                applications. My publications appear in top-tier venues including IEEE Transactions, ACM
                Transactions, and premier international conferences.
              </p>
              <p>
                Recent focus areas include post-quantum cryptography, secure machine learning, and quantum
                computing applications for real-world problems in collaboration with industry partners like
                Saudi Aramco.
              </p>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Publications;
