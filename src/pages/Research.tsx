import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

// Import images
import quantumComputingLab from "@/assets/quantum-computing-lab.jpg";
import cybersecurityPrivacy from "@/assets/cybersecurity-privacy.jpg";
import federatedLearning from "@/assets/federated-learning.jpg";
import digitalForensics from "@/assets/digital-forensics.jpg";
import postQuantumCrypto from "@/assets/post-quantum-crypto.jpg";
import quantumReservoir from "@/assets/quantum-reservoir.jpg";
import beeCastStreaming from "@/assets/beecast-streaming.jpg";

const Research = () => {
  const securityThrusts = [
    {
      title: "Cybersecurity",
      description: "Intrusion detection, attack-resilient systems, digital forensics, and cybersecurity for critical infrastructure.",
      keywords: ["Intrusion Detection", "Attack-Resilient Systems", "Digital Forensics", "Cybersecurity"],
      image: cybersecurityPrivacy
    },
    {
      title: "Digital Forensics",
      description: "File fragment classification, deep learning for forensics, and advanced digital investigation techniques.",
      keywords: ["File Fragment Classification", "Deep Learning Forensics", "Digital Investigation", "Forensic Analysis"],
      image: digitalForensics
    }
  ];

  const privacyThrusts = [
    {
      title: "Data Security and Privacy",
      description: "Research on privacy-preserving technologies, data protection methods, and secure data management systems.",
      keywords: ["Data Privacy", "Privacy Enhancing Technologies", "Secure Data Management", "Privacy-Preserving Analytics"],
      image: cybersecurityPrivacy
    },
    {
      title: "Secure and Privacy-Preserving ML",
      description: "Federated learning security, privacy-preserving machine learning, and defense against adversarial attacks.",
      keywords: ["Federated Learning", "Privacy-Preserving ML", "Adversarial Defense", "Label Flipping Attacks"],
      image: federatedLearning
    }
  ];

  const quantumThrusts = [
    {
      title: "Quantum Computing",
      description: "Quantum algorithms, quantum architecture, quantum communication, and quantum applications for real-world problems.",
      keywords: ["Quantum Algorithms", "Quantum Architecture", "Quantum Communication", "Quantum Applications"],
      image: quantumComputingLab
    },
    {
      title: "Quantum-Resistant Systems",
      description: "Post-quantum cryptography, quantum-safe security protocols, and quantum-resistant system design.",
      keywords: ["Post-Quantum Cryptography", "Quantum-Safe Protocols", "PQC", "Quantum-Resistant Security"],
      image: postQuantumCrypto
    }
  ];

  const activeProjects = [
    {
      title: "Using Quantum Computing for Reservoir Simulation",
      description: "Research collaboration with Saudi Aramco to develop quantum algorithms for oil reservoir simulation and optimization.",
      status: "Active",
      funding: "Saudi Aramco Research Grant",
      duration: "2025-2028",
      collaborators: ["Saudi Aramco", "KFUPM Petroleum Engineering"],
      technologies: ["Quantum Computing", "Reservoir Simulation", "Optimization Algorithms"],
      type: "Industry Collaboration",
      image: quantumReservoir
    },
    {
      title: "Post-Quantum Cryptography Research",
      description: "Developing quantum-resistant cryptographic protocols and evaluating their security against both classical and quantum attacks.",
      status: "Active", 
      funding: "KFUPM Internal Grant",
      duration: "2024-2027",
      collaborators: ["SPQ Group", "Cryptography Lab"],
      technologies: ["Post-Quantum Cryptography", "Lattice-based Cryptography", "Security Analysis"],
      type: "Fundamental Research",
      image: postQuantumCrypto
    },
    {
      title: "Privacy-Preserving Federated Learning",
      description: "Research on secure aggregation methods and defense mechanisms against adversarial attacks in federated learning systems.",
      status: "Active",
      funding: "KFUPM Internal Grant",
      duration: "2023-2026", 
      collaborators: ["SPQ Group", "ML Research Lab"],
      technologies: ["Federated Learning", "Differential Privacy", "Adversarial Defense"],
      type: "Machine Learning Security",
      image: federatedLearning
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
      outcome: "Successfully deployed privacy-preserving surveillance system",
      image: cybersecurityPrivacy
    },
    {
      title: "BeeCast: Device-to-Device Collaborative Video Streaming",
      description: "Innovative video streaming system using device-to-device communication for improved bandwidth utilization.",
      status: "Completed",
      duration: "2019-2021",
      funding: "DSR-KFUPM Grant",
      collaborators: ["Undergraduate Research Team", "Networking Lab"],
      technologies: ["P2P Networks", "Video Streaming", "Mobile Computing"],
      outcome: "Won 2nd place in 2021 ACM Student Research Competition, Published in MobiCom 2020",
      image: beeCastStreaming
    },
    {
      title: "File Fragment Classification using Deep Learning",
      description: "Advanced machine learning techniques for digital forensics and file fragment type classification.",
      status: "Completed",
      duration: "2020-2024",
      funding: "KFUPM Research Grant",
      collaborators: ["Digital Forensics Lab", "International Collaborators"],
      technologies: ["Deep Learning", "Digital Forensics", "CNN", "Lightweight Models"],
      outcome: "Published in IEEE Access 2024 and IFIP SEC 2022",
      image: digitalForensics
    }
  ];


  const renderThrustCategory = (title: string, thrusts: any[], bgColor: string) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <div className={`inline-block px-6 py-3 rounded-full ${bgColor} mb-4`}>
          <h3 className="text-2xl font-serif font-semibold text-foreground">{title}</h3>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {thrusts.map((thrust, index) => (
          <AcademicCard key={index} className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={thrust.image} 
                alt={thrust.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <AcademicCardHeader>
              <AcademicCardTitle>{thrust.title}</AcademicCardTitle>
            </AcademicCardHeader>
            <AcademicCardContent>
              <AcademicCardDescription className="mb-4">
                {thrust.description}
              </AcademicCardDescription>
              <div className="flex flex-wrap gap-2">
                {thrust.keywords.map((keyword: string, kidx: number) => (
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
  );

  return (
    <PageLayout 
      title="SPQ Group"
      subtitle="Security, Privacy, and Quantum Research Group - Advancing cybersecurity and quantum computing"
    >
      {/* Research Thrusts organized by categories */}
      <div className="mb-20">
        <h2 className="text-4xl font-serif font-semibold text-foreground mb-12 text-center">Research Thrusts</h2>
        
        {renderThrustCategory("Security", securityThrusts, "bg-red-100 dark:bg-red-900/20")}
        {renderThrustCategory("Privacy", privacyThrusts, "bg-blue-100 dark:bg-blue-900/20")}
        {renderThrustCategory("Quantum", quantumThrusts, "bg-purple-100 dark:bg-purple-900/20")}
      </div>

      {/* Active Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Active Projects</h2>
        <div className="space-y-8">
          {activeProjects.map((project, index) => (
            <AcademicCard key={index} variant="highlighted" className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </div>
                <div className="lg:col-span-2 p-6">
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
                </div>
              </div>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Completed Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Completed Projects</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {completedProjects.map((project, index) => (
            <AcademicCard key={index} className="overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
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


      {/* SPQ Group Overview */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          About SPQ Group
        </h2>
        <AcademicCard variant="highlighted">
          <AcademicCardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Security, Privacy, and Quantum (SPQ) Group focuses on cutting-edge research at the intersection 
              of cybersecurity, data privacy, and quantum computing. Our interdisciplinary approach combines 
              theoretical foundations with practical applications to address real-world challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We collaborate with industry partners including Saudi Aramco and work on projects that have 
              significant impact in critical infrastructure protection, next-generation computing systems, 
              and privacy-preserving technologies. Our research contributes to both academic knowledge and 
              practical solutions for emerging security and quantum computing challenges.
            </p>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Research;