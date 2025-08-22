import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

// Import research images
import quantumComputingLab from "@/assets/quantum-computing-lab.jpg";
import cybersecurityPrivacy from "@/assets/cybersecurity-privacy.jpg";
import federatedLearning from "@/assets/federated-learning.jpg";
import digitalForensics from "@/assets/digital-forensics.jpg";
import postQuantumCrypto from "@/assets/post-quantum-crypto.jpg";

const Research = () => {
  const researchAreas = [
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
    },
    {
      title: "Quantum-Resistant Systems",
      description: "Post-quantum cryptography, quantum-safe security protocols, and quantum-resistant system design.",
      keywords: ["Post-Quantum Cryptography", "Quantum-Safe Protocols", "PQC", "Quantum-Resistant Security"],
      image: postQuantumCrypto
    },
    {
      title: "Quantum Computing",
      description: "Quantum algorithms, quantum architecture, quantum communication, and quantum applications for real-world problems.",
      keywords: ["Quantum Algorithms", "Quantum Architecture", "Quantum Communication", "Quantum Applications"],
      image: quantumComputingLab
    },
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

  const publications = [
    {
      title: "File Fragment Type Classification using Light-Weight Convolutional Neural Networks",
      authors: "K. Azaim, M. Ghaleb, S. Al-Saleh, A. Al-Mulhem, M. Felemban",
      journal: "IEEE Access",
      year: "2024",
      link: "#"
    },
    {
      title: "Edge-Assisted Label-Flipping Attack Detection in Federated Learning",
      authors: "N. Al-Otaibi, M. Felemban",
      journal: "IEEE Open Journal for Communication Society",
      year: "2024",
      link: "#"
    },
    {
      title: "A Systematic Literature Review on Vulnerabilities, Mitigation Techniques, and Attacks in Field-Programmable Gate Arrays",
      authors: "A. Al-Suwiyan, A. Azim, A. Tabakh, M. Felemban",
      journal: "Arabian Journal for Science and Engineering",
      year: "2024",
      link: "#"
    },
    {
      title: "Guard: Attack-Resilient Adaptive Load Balancing in Distributed Streaming Systems",
      authors: "A. Daghistani, M. Khayat, M. Felemban, W. G. Aref, A. Ghafoor",
      journal: "IEEE Transactions on Dependable and Secure Computing",
      year: "2021",
      link: "#"
    }
  ];

  return (
    <PageLayout 
      title="Research"
      subtitle="Security, Privacy, and Quantum (SPQ) Group - Leading research in cybersecurity and quantum computing"
    >
      {/* Research Areas */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Research Thrusts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <AcademicCard key={index} className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
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

      {/* Research Center */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Interdisciplinary Research Center for Intelligent Secure Systems (IRC-ISS)
        </h2>
        <AcademicCard variant="highlighted">
          <AcademicCardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              As the director of the Interdisciplinary Research Center for Intelligent Secure Systems (IRC-ISS) 
              at KFUPM, I lead cutting-edge research in cybersecurity, data privacy, and quantum computing. 
              Our research focuses on developing innovative solutions that bridge theoretical computer science 
              with practical applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our work particularly emphasizes the intersection of security, privacy, and emerging technologies 
              like quantum computing. We collaborate with industry partners including Saudi Aramco and work on 
              projects that have real-world impact in critical infrastructure protection and next-generation 
              computing systems.
            </p>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Research;