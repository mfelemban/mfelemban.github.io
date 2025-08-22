import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Mail } from "lucide-react";

const Students = () => {
  const currentGraduateStudents = [
    {
      name: "Bushra Alowaiid",
      degree: "PhD",
      department: "KFUPM",
      research: "Distributed Quantum Computing",
      year: "2025 - now",
      role: "Advisor"
    },
    {
      name: "Hind Baagel",
      degree: "PhD", 
      department: "KFUPM",
      research: "Post-Quantum Cryptography",
      year: "2024 - now",
      role: "Advisor"
    },
    {
      name: "Lina Alharbi",
      degree: "PhD",
      department: "KFUPM", 
      research: "Practical Private Set Intersection",
      year: "2024 - now",
      role: "Advisor"
    },
    {
      name: "Soha Sandoukah",
      degree: "PhD",
      department: "KFUPM",
      research: "Robust and Secure Federated Learning",
      year: "2023 - now",
      role: "Advisor"
    },
    {
      name: "Ekhlas Zaid",
      degree: "MSc",
      department: "KFUPM",
      research: "Backdoor Attack on Federated Learning",
      year: "2025 - now",
      role: "Advisor"
    },
    {
      name: "Abdulmjeed Al-Othman",
      degree: "MSc",
      department: "KFUPM",
      research: "Secure Neural Network Inference",
      year: "2024 - now",
      role: "Advisor"
    },
    {
      name: "Maram Al-Qahtani",
      degree: "MSc",
      department: "KFUPM",
      research: "Machine Unlearning",
      year: "2024 - now",
      role: "Advisor"
    },
    {
      name: "Eid AlDawsari",
      degree: "MSc",
      department: "KFUPM",
      research: "Quantum Computing",
      year: "2024 - now",
      role: "Advisor"
    },
    {
      name: "Mustafa Al-Ghafli",
      degree: "MSc",
      department: "KFUPM",
      research: "Private Set Intersection in Mobile Crowdsensing",
      year: "2021 - now",
      role: "Advisor"
    }
  ];

  const recentGraduates = [
    {
      name: "Nourah Al-Otaibi",
      degree: "PhD",
      department: "KFUPM",
      graduationYear: "2025",
      thesis: "Edge-Assisted Detection and Mitigation of Label-Flipping Attacks in Federated Learning Systems"
    },
    {
      name: "Abdulmunim Sa'ad",
      degree: "MSc",
      department: "KFUPM",
      graduationYear: "2023-2024",
      thesis: "Federated Learning based Mobile Application"
    },
    {
      name: "Shurooq Al-Oqbi",
      degree: "MSc", 
      department: "KFUPM",
      graduationYear: "2023-2024",
      thesis: "Quantum Algorithms for Solving Partial Differential Equations"
    },
    {
      name: "Sani Umar",
      degree: "MSc",
      department: "KFUPM",
      graduationYear: "2021",
      thesis: "Modeling and Detecting False Data Injection Attacks in Smart Grids"
    },
    {
      name: "Mohammad AlAkhras",
      degree: "MEng",
      department: "KFUPM", 
      graduationYear: "2021",
      thesis: "Efficient Network Coding in Wireless Sensor Network"
    }
  ];

  const mxGraduateStudents = [
    {
      name: "Tariq AlMuqbil",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Circuit Generator using Evolutionary Algorithms",
      year: "2024"
    },
    {
      name: "Maha Al-Otaibi",
      program: "QIC MX",
      department: "KFUPM", 
      research: "Battery Revenue Optimization using Quantum Computing",
      year: "2024"
    },
    {
      name: "Abdulrahman Alajmi",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Random Number Generator",
      year: "2024"
    },
    {
      name: "Abdulhadi Alzaidy",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Random Number Generator", 
      year: "2024"
    },
    {
      name: "Ahoud Alhawash",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Algorithms for PDEs",
      year: "2024"
    },
    {
      name: "Mohammad Al-Saiyari",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Optimization for Vehicle Routing Problem",
      year: "2022"
    },
    {
      name: "Rokiya Ghandour",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Computing Application in Finance",
      year: "2022"
    },
    {
      name: "Mays Miajan",
      program: "QIC MX", 
      department: "KFUPM",
      research: "Quantum Computing Application in Finance",
      year: "2022"
    },
    {
      name: "Joud Awadh",
      program: "QIC MX",
      department: "KFUPM", 
      research: "Quantum Computing Application in Finance",
      year: "2022"
    },
    {
      name: "Shuroog Al-Ogbi",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Support Vector Machines",
      year: "2022"
    },
    {
      name: "Bashayer Al-Nahdi",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Random Number Generator",
      year: "2022"
    },
    {
      name: "Maryam Baabdullah",
      program: "QIC MX",
      department: "KFUPM",
      research: "Quantum Support Vector Machines",
      year: "2021"
    },
    {
      name: "Sarah Al-Wadaah",
      program: "QIC MX",
      department: "KFUPM",
      research: "Feasibility of using Quantum Computing in Seismic Image Processing",
      year: "2021"
    }
  ];


  const undergraduateAdvisingStudents = [
    {
      name: "Mohammad Serag",
      department: "COE, KFUPM",
      research: "Current Research",
      year: "2025"
    },
    {
      name: "Abdullah Emad Felemban",
      department: "CS, OSU", 
      research: "Current Research",
      year: "2025"
    },
    {
      name: "Joud Zamzami",
      department: "CS, UMASS",
      research: "Current Research",
      year: "2025"
    },
    {
      name: "Mariam Alsowaidan",
      department: "Kuwait",
      research: "Current Research",
      year: "2025"
    },
    {
      name: "Talal Al-Towaijri",
      department: "CS, IAU",
      research: "Quantum Algorithms for VRP",
      year: "2024"
    },
    {
      name: "Zahra Homoud",
      department: "EE, Leeds University",
      research: "Light-Weight Deep Learning",
      year: "2024"
    },
    {
      name: "Osamah Al-Karnawi",
      department: "COE, KFUPM",
      research: "DGA-based domains detection",
      year: "2024"
    },
    {
      name: "Amer Mosalli",
      department: "COE, KFUPM",
      research: "Event-Detection Using Edge-base Vehicle Dashcams",
      year: "2023"
    },
    {
      name: "Khaled AlShehri",
      department: "Math, KFUPM",
      research: "Private Set Intersection using Lattice-based Cryptography",
      year: "2022"
    },
    {
      name: "Khaled Al-Butainy",
      department: "COE, KFUPM",
      research: "Masking Unmasked Faces Using GANs Based Models",
      year: "2022"
    },
    {
      name: "Khaled Al-Zahrani",
      department: "Phys, KFUPM",
      research: "Increasing Fidelity of IBM Q Swap Gates",
      year: "2021"
    },
    {
      name: "Othman Kisha",
      department: "COE, KFUPM", 
      research: "Privacy Requirement for Contact Tracing Applications",
      year: "2021"
    },
    {
      name: "Kunwar Saaim",
      department: "COE, Aligarh Muslim University, India",
      research: "File Fragment Classification Using Deep Learning",
      year: "2022"
    },
    {
      name: "Mohammad Khiami",
      department: "COE, KFUPM",
      research: "Write-Efficient LSM-based Merkle Trees",
      year: "2020"
    },
    {
      name: "Abdulkarim Al-Alweet",
      department: "COE, KFUPM",
      research: "File Fragment Classification Using Deep Learning",
      year: "2020"
    },
    {
      name: "Asaad Al-Ghamdi",
      department: "ICS, KFUPM",
      research: "BeeCast: A Collaborative Video Streaming System",
      year: "2020",
      achievement: "1st runner up: ACM SRC - Undergraduate track 2021"
    },
    {
      name: "Mohammad Al-Bejadi",
      department: "COE, KFUPM",
      research: "Collaborative Video Streaming",
      year: "2020",
      achievement: "1st runner up: KAUST WEP Undergraduate Research Competition 2021"
    }
  ];

  const undergraduateMentoringStudents = [
    {
      name: "Ghanima Boutaiban",
      department: "CS, GUST",
      year: "Summer 2023"
    },
    {
      name: "Yousef AbuShabaan",
      department: "CS, GUST",
      year: "Summer 2023"
    },
    {
      name: "Abduljawad Mohammad",
      department: "ICS, KFUPM",
      research: "Masking Unmasked Faces Using GANs Based Models",
      program: "SURE 2021"
    },
    {
      name: "Amaan Izhar",
      department: "ICS, KFUPM",
      research: "Emotional Interpretation using Voice Recognition",
      program: "SURE 2021"
    },
    {
      name: "Mujtaba Siddiqui",
      department: "ISE, KFUPM",
      research: "Simulation of COVID-19 in KFUPM Campus",
      program: "SURE 2021"
    },
    {
      name: "Sultan Al-Garbi",
      department: "ICS, KFUPM",
      research: "Federated Learning",
      program: "SURE 2021"
    },
    {
      name: "Mahmoud Ellouh",
      department: "COE, KFUPM",
      research: "ZeroJar: IoT Honeypot for Zero-day Attacks Detection",
      program: "SURE 2021"
    },
    {
      name: "Murtada Al-Hasan",
      department: "ISE, KFUPM",
      research: "Dynamic Class Scheduling with COVID-19 Constraints",
      program: "SURE 2021"
    },
    {
      name: "Hassan Al-Saffar",
      department: "EE, KFUPM",
      research: "Emotional Recognition Using Thermal Pictures",
      program: "SURE 2021"
    }
  ];

  const highSchoolStudents = [
    {
      name: "Tala Al-Mulla",
      location: "Dhahran",
      research: "Modeling and Simulation of University Class Schedules with COVID-19 Constraints",
      achievement: "Ibdaa 2021 Finalist"
    },
    {
      name: "Hussain AlSaif",
      location: "Dhahran",
      research: "Using Reinforcement Learning in Quantum Error Correction Codes",
      achievement: "Ibdaa 2022 Finalist"
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
                      <Badge variant="secondary">{student.year}</Badge>
                    </div>
                  </div>
                </div>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Research Project</h4>
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
                    <h4 className="font-medium text-foreground mb-1">Project/Thesis</h4>
                    <p className="text-sm text-muted-foreground">{grad.thesis}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Department</h4>
                    <p className="text-sm text-muted-foreground">{grad.department}</p>
                  </div>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* MX Graduate Students */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">QIC MX Graduate Students</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mxGraduateStudents.map((student, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle className="text-base">{student.name}</AcademicCardTitle>
                <AcademicCardDescription className="text-sm">{student.department}</AcademicCardDescription>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">{student.program}</Badge>
                  <Badge variant="secondary" className="text-xs">{student.year}</Badge>
                </div>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div>
                  <h4 className="font-medium text-foreground mb-1 text-sm">Project</h4>
                  <p className="text-xs text-muted-foreground">{student.research}</p>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Undergraduate Advising Students */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Undergraduate Students Advising</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {undergraduateAdvisingStudents.map((student, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle className="text-base">{student.name}</AcademicCardTitle>
                <AcademicCardDescription className="text-sm">{student.department}</AcademicCardDescription>
                <Badge variant="outline" className="text-xs mt-1">{student.year}</Badge>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Project</h4>
                    <p className="text-xs text-muted-foreground">{student.research}</p>
                  </div>
                  {student.achievement && (
                    <div>
                      <h4 className="font-medium text-foreground mb-1 text-sm">Achievement</h4>
                      <p className="text-xs text-muted-foreground">{student.achievement}</p>
                    </div>
                  )}
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Undergraduate Mentoring Students */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Undergraduate Students Mentoring</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {undergraduateMentoringStudents.map((student, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle className="text-base">{student.name}</AcademicCardTitle>
                <AcademicCardDescription className="text-sm">{student.department}</AcademicCardDescription>
                {student.program && (
                  <Badge variant="secondary" className="text-xs mt-1">{student.program}</Badge>
                )}
                {student.year && !student.program && (
                  <Badge variant="outline" className="text-xs mt-1">{student.year}</Badge>
                )}
              </AcademicCardHeader>
              <AcademicCardContent>
                {student.research && (
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Project</h4>
                    <p className="text-xs text-muted-foreground">{student.research}</p>
                  </div>
                )}
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* High School Students */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">High School Students Mentoring</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {highSchoolStudents.map((student, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle className="text-base">{student.name}</AcademicCardTitle>
                <AcademicCardDescription className="text-sm">{student.location}</AcademicCardDescription>
                <Badge variant="default" className="text-xs mt-1">{student.achievement}</Badge>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div>
                  <h4 className="font-medium text-foreground mb-1 text-sm">Project</h4>
                  <p className="text-xs text-muted-foreground">{student.research}</p>
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