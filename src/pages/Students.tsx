import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Mail } from "lucide-react";

const Students = () => {
  const currentGraduateStudents = [
    {
      name: "Hind Baagel",
      degree: "PhD",
      department: "ICS, KFUPM",
      research: "Post-Quantum Cryptography (PQC)",
      role: "Advisor",
      status: "Active"
    },
    {
      name: "Eid Al-Dawsari", 
      degree: "MSc",
      department: "ICS, KFUPM",
      research: "Quantum Computing",
      role: "Advisor",
      status: "Active"
    },
    {
      name: "Maram Al-Qahtani",
      degree: "MSc", 
      department: "ICS, KFUPM",
      research: "Federated Unlearning",
      role: "Advisor",
      status: "Active"
    },
    {
      name: "Soha Sandoukah",
      degree: "PhD",
      department: "COE, KFUPM", 
      research: "Secure and Privacy-Preserving FL using GAN",
      role: "Advisor",
      status: "Active"
    },
    {
      name: "Nourah Alotaibi",
      degree: "PhD",
      department: "ICS, KFUPM",
      research: "LFAs on Federated Learning",
      role: "Co-advisor",
      status: "Active"
    },
    {
      name: "Mustafa Alghafli",
      degree: "MS",
      department: "COE, KFUPM",
      research: "Updatable Multi-party Private Set Intersection", 
      role: "Advisor",
      status: "Active"
    }
  ];

  const recentGraduates = [
    {
      name: "Dr. Nourah Al-Otaibi",
      degree: "PhD",
      graduationYear: "2025",
      thesis: "Edge-based Detection and Mitigation of Label Flipping Attacks in Federated Learning Systems",
      achievement: "First PhD student to graduate from SPQ group! Published 1 journal and 2 A* conference papers."
    },
    {
      name: "Abdulmumin Saad",
      degree: "MSc",
      graduationYear: "2024",
      department: "COE, KFUPM",
      thesis: "Communication-Efficient FL for Personal Assistant Applications"
    },
    {
      name: "Shuroog Al-Ogbi", 
      degree: "MSc",
      graduationYear: "2024",
      department: "COE, KFUPM", 
      thesis: "Accelerating Non-Linear PDEs using Quantum Computing"
    },
    {
      name: "Sani Umar",
      degree: "MS",
      graduationYear: "2020",
      department: "COE, KFUPM",
      thesis: "Cybersecurity of Power Grids"
    }
  ];

  const undergraduateStudents = [
    {
      name: "Mohammed Al-Bejadi",
      department: "COE, KFUPM",
      research: "Collaborative Video Streaming",
      status: "Graduated Fall 2019"
    },
    {
      name: "Asaad Alghamdi",
      department: "ICS, KFUPM", 
      research: "Collaborative Video Streaming",
      status: "Graduated Spring 2020, Now MS student at KAUST"
    },
    {
      name: "Abdulkarim Alaweet",
      department: "COE, KFUPM",
      research: "File Fragment Classification Using Deep Learning", 
      status: "Graduated Fall 2019, Now at Saudi Aramco"
    },
    {
      name: "Mohammad Khiami",
      department: "COE, KFUPM",
      research: "Write Efficient LSM-based Merkle Tree",
      status: "Graduated Spring 2020"
    },
    {
      name: "Kunwar Saaim",
      department: "Aligarh Muslim University",
      research: "File Fragment Classification Using Deep Learning",
      status: "Directed research collaboration"
    }
  ];

  return (
    <PageLayout 
      title="Students"
      subtitle="Security, Privacy, and Quantum (SPQ) Group - Mentoring the next generation of researchers"
    >
      {/* Current Graduate Students */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Current Graduate Students</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {currentGraduateStudents.map((student, index) => (
            <AcademicCard key={index} variant="highlighted">
              <AcademicCardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <AcademicCardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      {student.name}
                    </AcademicCardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="default">{student.degree}</Badge>
                      <Badge variant="secondary">{student.role}</Badge>
                    </div>
                  </div>
                </div>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Research Area</h4>
                    <p className="text-sm text-muted-foreground">{student.research}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Department</h4>
                    <p className="text-sm text-muted-foreground">{student.department}</p>
                  </div>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Recent Graduates */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Recent Graduates</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {recentGraduates.map((grad, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  {grad.name}
                </AcademicCardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">{grad.degree}</Badge>
                  <Badge variant="outline">{grad.graduationYear}</Badge>
                </div>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Thesis</h4>
                    <p className="text-sm text-muted-foreground">{grad.thesis}</p>
                  </div>
                  {grad.achievement && (
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Achievement</h4>
                      <p className="text-sm text-muted-foreground">{grad.achievement}</p>
                    </div>
                  )}
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Undergraduate Research Students */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Undergraduate Research Alumni</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {undergraduateStudents.map((student, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle className="text-base">{student.name}</AcademicCardTitle>
                <AcademicCardDescription className="text-sm">{student.department}</AcademicCardDescription>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Research</h4>
                    <p className="text-xs text-muted-foreground">{student.research}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Status</h4>
                    <p className="text-xs text-muted-foreground">{student.status}</p>
                  </div>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Research Opportunities */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Research Opportunities</h2>
        <div className="space-y-6">
          <AcademicCard>
            <AcademicCardHeader>
              <AcademicCardTitle>PhD & MSc Positions</AcademicCardTitle>
              <AcademicCardDescription>
                Join the SPQ group to work on cutting-edge research in cybersecurity, quantum computing, and privacy-preserving technologies.
              </AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <h4 className="font-medium text-foreground mb-2">Current Research Areas</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
                <li>Post-Quantum Cryptography and Quantum-Resistant Systems</li>
                <li>Privacy-Preserving Machine Learning and Federated Learning Security</li>
                <li>Quantum Computing Algorithms and Applications</li>
                <li>Digital Forensics and File Fragment Classification</li>
                <li>Cybersecurity for Critical Infrastructure</li>
              </ul>
              <h4 className="font-medium text-foreground mb-2">Requirements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Strong background in computer science, electrical engineering, or related field</li>
                <li>Programming experience in Python, C++, or similar languages</li>
                <li>Interest in cybersecurity, quantum computing, or machine learning</li>
                <li>Strong mathematical foundation</li>
              </ul>
            </AcademicCardContent>
          </AcademicCard>

          <AcademicCard>
            <AcademicCardHeader>
              <AcademicCardTitle>Undergraduate Research</AcademicCardTitle>
              <AcademicCardDescription>
                Opportunities for KFUPM undergraduate students to gain research experience in the SPQ group.
              </AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <h4 className="font-medium text-foreground mb-2">Requirements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>GPA 3.5+ in Computer Engineering or related field</li>
                <li>Completed fundamental CS courses (data structures, algorithms)</li>
                <li>Available 10+ hours/week for research</li>
                <li>Strong motivation for research and learning</li>
              </ul>
            </AcademicCardContent>
          </AcademicCard>
        </div>
      </div>

      {/* Mentoring Philosophy */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Mentoring Philosophy
        </h2>
        <AcademicCard>
          <AcademicCardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As the director of the SPQ group, I believe in fostering an environment where students 
                can explore the fascinating intersections of security, privacy, and quantum computing. 
                My mentoring approach emphasizes both theoretical depth and practical applications, 
                ensuring students develop strong foundations while working on real-world problems.
              </p>
              <p>
                I work closely with each student to identify their interests and career goals, whether 
                in academia or industry. Through regular meetings, collaborative projects, and 
                interdisciplinary research, students gain not only technical expertise but also 
                critical thinking and leadership skills essential for their future careers.
              </p>
              <p>
                Our group values collaboration, innovation, and the pursuit of knowledge that makes 
                a real impact. Students are encouraged to publish their work, present at conferences, 
                and collaborate with industry partners like Saudi Aramco to ensure their research 
                has both academic merit and practical relevance.
              </p>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Students;