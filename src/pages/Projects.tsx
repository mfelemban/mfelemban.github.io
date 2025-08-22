import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const activeProjects = [
    {
      title: "Climate Prediction using Deep Learning",
      description: "Developing advanced neural network models to improve long-term climate predictions and understand climate change patterns.",
      status: "Active",
      funding: "NSF Grant #2023-456",
      duration: "2023-2026",
      collaborators: ["Climate Science Institute", "Atmospheric Research Lab"],
      technologies: ["Python", "TensorFlow", "CUDA", "HPC"],
      link: "#",
      github: "#"
    },
    {
      title: "Distributed Algorithms for Genomic Analysis",
      description: "Creating scalable algorithms for processing large genomic datasets using distributed computing frameworks.",
      status: "Active",
      funding: "NIH Grant #R01-789",
      duration: "2022-2025",
      collaborators: ["Genomics Research Center", "Bioinformatics Lab"],
      technologies: ["Scala", "Apache Spark", "Hadoop", "Kubernetes"],
      link: "#",
      github: "#"
    }
  ];

  const completedProjects = [
    {
      title: "Real-time Traffic Optimization",
      description: "Machine learning system for optimizing traffic flow in urban environments using real-time sensor data.",
      status: "Completed",
      duration: "2021-2023",
      collaborators: ["City Transportation Dept", "Smart City Initiative"],
      technologies: ["Python", "React", "PostgreSQL", "AWS"],
      outcome: "Deployed in 3 major cities, reducing traffic congestion by 15%"
    },
    {
      title: "Protein Folding Prediction Platform",
      description: "Web-based platform for predicting protein structures using advanced computational methods.",
      status: "Completed",
      duration: "2020-2022",
      collaborators: ["Structural Biology Lab"],
      technologies: ["Python", "Django", "Docker", "MySQL"],
      outcome: "Used by over 500 researchers worldwide"
    }
  ];

  return (
    <PageLayout 
      title="Research Projects"
      subtitle="Collaborative research initiatives addressing real-world challenges"
    >
      {/* Active Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Active Projects</h2>
        <div className="space-y-8">
          {activeProjects.map((project, index) => (
            <AcademicCard key={index} variant="highlighted">
              <AcademicCardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <AcademicCardTitle>{project.title}</AcademicCardTitle>
                      <Badge variant="default">{project.status}</Badge>
                    </div>
                    <AcademicCardDescription className="mb-4">
                      {project.description}
                    </AcademicCardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <a 
                      href={project.link} 
                      className="text-primary hover:text-primary-glow transition-smooth"
                      aria-label="View project"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.github} 
                      className="text-primary hover:text-primary-glow transition-smooth"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Project Details</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="font-medium">Funding:</span> {project.funding}</p>
                      <p><span className="font-medium">Duration:</span> {project.duration}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Collaborators</h4>
                    <div className="space-y-1">
                      {project.collaborators.map((collab, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">{collab}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Completed Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Completed Projects</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {completedProjects.map((project, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AcademicCardTitle>{project.title}</AcademicCardTitle>
                  <Badge variant="secondary">{project.status}</Badge>
                </div>
                <AcademicCardDescription className="mb-4">
                  {project.description}
                </AcademicCardDescription>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Duration:</span> {project.duration}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Collaborators</h4>
                    <div className="space-y-1">
                      {project.collaborators.map((collab, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">{collab}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-3">
                    <h4 className="font-medium text-foreground mb-2">Outcome</h4>
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Research Impact */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Research Impact
        </h2>
        <AcademicCard>
          <AcademicCardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Our research projects focus on developing computational solutions that address 
              pressing societal challenges. From climate prediction to genomic analysis, 
              our work bridges the gap between theoretical computer science and practical 
              applications that benefit communities worldwide. We prioritize open-source 
              development and collaborative partnerships to maximize the impact and 
              accessibility of our research outcomes.
            </p>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Projects;