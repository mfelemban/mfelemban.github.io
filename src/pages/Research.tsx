import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      title: "Machine Learning & AI",
      description: "Developing novel algorithms for deep learning, natural language processing, and computer vision applications.",
      keywords: ["Deep Learning", "NLP", "Computer Vision", "Neural Networks"]
    },
    {
      title: "Computational Biology",
      description: "Applying computational methods to understand biological systems and processes.",
      keywords: ["Bioinformatics", "Genomics", "Protein Folding", "Systems Biology"]
    },
    {
      title: "Data Science & Analytics",
      description: "Creating scalable methods for large-scale data analysis and visualization.",
      keywords: ["Big Data", "Data Mining", "Visualization", "Statistics"]
    }
  ];

  const publications = [
    {
      title: "Advanced Neural Networks for Protein Structure Prediction",
      authors: "Your Name, J. Smith, M. Johnson",
      journal: "Nature Computational Biology",
      year: "2024",
      link: "#"
    },
    {
      title: "Scalable Algorithms for Large-Scale Graph Analysis",
      authors: "Your Name, A. Davis, K. Wilson",
      journal: "ACM Transactions on Algorithms",
      year: "2023",
      link: "#"
    },
    {
      title: "Machine Learning Approaches to Climate Modeling",
      authors: "Your Name, R. Brown, S. Lee",
      journal: "Journal of Climate Science",
      year: "2023",
      link: "#"
    },
    {
      title: "Distributed Computing in Computational Genomics",
      authors: "Your Name, T. Martinez, L. Zhang",
      journal: "IEEE Transactions on Parallel Computing",
      year: "2022",
      link: "#"
    }
  ];

  return (
    <PageLayout 
      title="Research"
      subtitle="Exploring the frontiers of computational science and its applications"
    >
      {/* Research Areas */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Research Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <AcademicCard key={index} className="h-full">
              <AcademicCardHeader>
                <AcademicCardTitle>{area.title}</AcademicCardTitle>
              </AcademicCardHeader>
              <AcademicCardContent>
                <AcademicCardDescription className="mb-4">
                  {area.description}
                </AcademicCardDescription>
                <div className="flex flex-wrap gap-2">
                  {area.keywords.map((keyword, kidx) => (
                    <Badge key={kidx} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Recent Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <AcademicCardTitle className="mb-2">{pub.title}</AcademicCardTitle>
                    <AcademicCardDescription>
                      {pub.authors} • {pub.journal} • {pub.year}
                    </AcademicCardDescription>
                  </div>
                  <a 
                    href={pub.link} 
                    className="ml-4 text-primary hover:text-primary-glow transition-smooth"
                    aria-label="View publication"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </AcademicCardHeader>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Research Interests */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Current Research Interests
        </h2>
        <AcademicCard variant="highlighted">
          <AcademicCardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              My current research focuses on developing innovative computational methods that bridge 
              the gap between theoretical computer science and practical applications in biology, 
              climate science, and data analytics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am particularly interested in creating scalable algorithms that can handle the 
              increasing complexity and size of modern datasets, while maintaining theoretical 
              rigor and practical efficiency. My work involves collaboration with researchers 
              across multiple disciplines to ensure real-world impact.
            </p>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Research;