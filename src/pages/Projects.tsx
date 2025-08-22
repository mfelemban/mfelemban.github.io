import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const activeProjects = [
    {
      title: "Using Quantum Computing for Reservoir Simulation",
      description: "Research collaboration with Saudi Aramco to develop quantum algorithms for oil reservoir simulation and optimization.",
      status: "Active",
      funding: "Saudi Aramco Research Grant",
      duration: "2025-2028",
      collaborators: ["Saudi Aramco", "KFUPM Petroleum Engineering"],
      technologies: ["Quantum Computing", "Reservoir Simulation", "Optimization Algorithms"],
      type: "Industry Collaboration"
    },
    {
      title: "Post-Quantum Cryptography Research",
      description: "Developing quantum-resistant cryptographic protocols and evaluating their security against both classical and quantum attacks.",
      status: "Active", 
      funding: "IRC-ISS Internal Grant",
      duration: "2024-2027",
      collaborators: ["SPQ Group", "Cryptography Lab"],
      technologies: ["Post-Quantum Cryptography", "Lattice-based Cryptography", "Security Analysis"],
      type: "Fundamental Research"
    },
    {
      title: "Privacy-Preserving Federated Learning",
      description: "Research on secure aggregation methods and defense mechanisms against adversarial attacks in federated learning systems.",
      status: "Active",
      funding: "KFUPM Internal Grant",
      duration: "2023-2026", 
      collaborators: ["SPQ Group", "ML Research Lab"],
      technologies: ["Federated Learning", "Differential Privacy", "Adversarial Defense"],
      type: "Machine Learning Security"
    }
  ];

  const completedProjects = [
    {
      title: "Robust, Privacy Preserving Surveillance System for COVID-19",
      description: "Developed privacy-preserving contact tracing and surveillance systems during the COVID-19 pandemic.",
      status: "Completed",
      duration: "2020",
      funding: "KACST COVID-19 Response Grant",
      collaborators: ["DSSL Lab", "Public Health Authorities"],
      technologies: ["Privacy-Preserving Analytics", "Contact Tracing", "Surveillance Systems"],
      outcome: "Successfully deployed privacy-preserving surveillance system"
    },
    {
      title: "BeeCast: Device-to-Device Collaborative Video Streaming",
      description: "Innovative video streaming system using device-to-device communication for improved bandwidth utilization.",
      status: "Completed",
      duration: "2019-2021",
      funding: "DSR-KFUPM Grant",
      collaborators: ["Undergraduate Research Team", "Networking Lab"],
      technologies: ["P2P Networks", "Video Streaming", "Mobile Computing"],
      outcome: "Won 2nd place in 2021 ACM Student Research Competition, Published in MobiCom 2020"
    },
    {
      title: "Adaptive Intrusion Management System (AIMS)",
      description: "Attack-resilient database management system with adaptive intrusion detection and response capabilities.",
      status: "Completed",
      duration: "2015-2018",
      funding: "Northrop Grumman Research Grant",
      collaborators: ["Purdue University DMSL", "Northrop Grumman"],
      technologies: ["Intrusion Detection", "Database Security", "Adaptive Systems"],
      outcome: "Published multiple papers in top-tier security conferences"
    },
    {
      title: "File Fragment Classification using Deep Learning",
      description: "Advanced machine learning techniques for digital forensics and file fragment type classification.",
      status: "Completed",
      duration: "2020-2024",
      funding: "KFUPM Research Grant",
      collaborators: ["Digital Forensics Lab", "International Collaborators"],
      technologies: ["Deep Learning", "Digital Forensics", "CNN", "Lightweight Models"],
      outcome: "Published in IEEE Access 2024 and IFIP SEC 2022"
    }
  ];

  return (
    <PageLayout 
      title="Research Projects"
      subtitle="Security, Privacy, and Quantum (SPQ) Group - Innovative research with real-world impact"
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
                      <Badge variant="secondary">{project.type}</Badge>
                    </div>
                    <AcademicCardDescription className="mb-4">
                      {project.description}
                    </AcademicCardDescription>
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
                  <h4 className="font-medium text-foreground mb-2">Technologies & Keywords</h4>
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
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Funding:</span> {project.funding}
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

      {/* Research Centers */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Research Centers & Labs</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <AcademicCard variant="highlighted">
            <AcademicCardHeader>
              <AcademicCardTitle>Interdisciplinary Research Center for Intelligent Secure Systems (IRC-ISS)</AcademicCardTitle>
              <AcademicCardDescription>Director (Founding)</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground mb-4">
                Leading interdisciplinary research in cybersecurity, quantum computing, and intelligent systems. 
                Established to bridge academic research with industry needs and real-world applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Cybersecurity Research</Badge>
                <Badge variant="secondary" className="text-xs">Quantum Computing</Badge>
                <Badge variant="secondary" className="text-xs">AI Security</Badge>
                <Badge variant="secondary" className="text-xs">Industry Collaboration</Badge>
              </div>
            </AcademicCardContent>
          </AcademicCard>

          <AcademicCard>
            <AcademicCardHeader>
              <AcademicCardTitle>Dependable and Secure System Lab (DSSL)</AcademicCardTitle>
              <AcademicCardDescription>Member</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground mb-4">
                Collaborative research lab at KFUPM focusing on building dependable and secure computing systems 
                for critical applications and infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">System Security</Badge>
                <Badge variant="secondary" className="text-xs">Distributed Systems</Badge>
                <Badge variant="secondary" className="text-xs">Critical Infrastructure</Badge>
              </div>
            </AcademicCardContent>
          </AcademicCard>
        </div>
      </div>

      {/* Research Impact */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Research Impact & Vision
        </h2>
        <AcademicCard>
          <AcademicCardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our research projects in the SPQ group focus on addressing critical challenges at the intersection 
                of cybersecurity, privacy, and quantum computing. We prioritize research that has both theoretical 
                significance and practical impact, working closely with industry partners like Saudi Aramco to 
                ensure our innovations address real-world problems.
              </p>
              <p>
                The interdisciplinary nature of our work, spanning from quantum algorithms to digital forensics, 
                positions us at the forefront of emerging technologies. Our projects contribute to national 
                security, critical infrastructure protection, and the development of next-generation computing 
                systems that are both powerful and secure.
              </p>
              <p>
                Through our research center IRC-ISS, we foster collaboration between academia and industry, 
                ensuring that our research outcomes translate into practical solutions that benefit society 
                and advance the state of knowledge in cybersecurity and quantum technologies.
              </p>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Projects;