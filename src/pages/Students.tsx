import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Mail } from "lucide-react";

const Students = () => {
  const currentStudents = [
    {
      name: "Sarah Johnson",
      degree: "PhD",
      year: "4th Year",
      research: "Machine Learning for Climate Modeling",
      email: "sarah.j@university.edu",
      expectedGraduation: "2024"
    },
    {
      name: "Michael Chen",
      degree: "PhD",
      year: "2nd Year",
      research: "Distributed Algorithms for Bioinformatics",
      email: "m.chen@university.edu",
      expectedGraduation: "2027"
    },
    {
      name: "Emily Rodriguez",
      degree: "MS",
      year: "1st Year", 
      research: "Graph Neural Networks for Social Network Analysis",
      email: "e.rodriguez@university.edu",
      expectedGraduation: "2025"
    },
    {
      name: "David Kim",
      degree: "MS",
      year: "2nd Year",
      research: "Optimization Algorithms for Resource Allocation",
      email: "d.kim@university.edu",
      expectedGraduation: "2024"
    }
  ];

  const alumni = [
    {
      name: "Dr. Jennifer Liu",
      degree: "PhD",
      graduationYear: "2023",
      thesis: "Deep Learning Approaches to Protein Structure Prediction",
      currentPosition: "Research Scientist at Google DeepMind"
    },
    {
      name: "Dr. Alex Thompson",
      degree: "PhD", 
      graduationYear: "2022",
      thesis: "Scalable Graph Algorithms for Large-Scale Networks",
      currentPosition: "Assistant Professor at Stanford University"
    },
    {
      name: "Maria Gonzalez",
      degree: "MS",
      graduationYear: "2023",
      thesis: "Machine Learning for Traffic Optimization",
      currentPosition: "Senior Data Scientist at Tesla"
    },
    {
      name: "James Wilson",
      degree: "MS",
      graduationYear: "2022",
      thesis: "Distributed Computing in Genomics",
      currentPosition: "Software Engineer at Microsoft Research"
    }
  ];

  const opportunities = [
    {
      position: "PhD Student",
      description: "Seeking motivated PhD students interested in machine learning, computational biology, or distributed systems.",
      requirements: ["Strong programming skills", "Background in mathematics/computer science", "Research experience preferred"]
    },
    {
      position: "Research Assistant",
      description: "Undergraduate research opportunities available for students interested in gaining research experience.",
      requirements: ["GPA 3.5+", "Completed CS algorithms course", "Available 10+ hours/week"]
    }
  ];

  return (
    <PageLayout 
      title="Students"
      subtitle="Mentoring the next generation of computational researchers"
    >
      {/* Current Students */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Current Students</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {currentStudents.map((student, index) => (
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
                    <h4 className="font-medium text-foreground mb-1">Research Area</h4>
                    <p className="text-sm text-muted-foreground">{student.research}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    {student.email}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Expected graduation: {student.expectedGraduation}
                  </div>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Alumni */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Alumni</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {alumni.map((alum, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {alum.name}
                </AcademicCardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">{alum.degree}</Badge>
                  <Badge variant="outline">{alum.graduationYear}</Badge>
                </div>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Thesis</h4>
                    <p className="text-sm text-muted-foreground">{alum.thesis}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Current Position</h4>
                    <p className="text-sm text-muted-foreground">{alum.currentPosition}</p>
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
          {opportunities.map((opp, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle>{opp.position}</AcademicCardTitle>
                <AcademicCardDescription>{opp.description}</AcademicCardDescription>
              </AcademicCardHeader>
              <AcademicCardContent>
                <h4 className="font-medium text-foreground mb-2">Requirements</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {opp.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </AcademicCardContent>
            </AcademicCard>
          ))}
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
                I believe that successful mentoring involves creating an environment where 
                students can develop both technical expertise and critical thinking skills. 
                My approach emphasizes collaborative learning, where students are encouraged 
                to pursue their own research interests while contributing to broader project goals.
              </p>
              <p>
                Each student brings unique perspectives and strengths to our research group. 
                I work closely with each individual to identify their career goals and provide 
                the guidance, resources, and opportunities needed to achieve them, whether in 
                academia, industry, or entrepreneurship.
              </p>
              <p>
                Regular one-on-one meetings, group seminars, and collaborative projects ensure 
                that students receive comprehensive support throughout their academic journey. 
                I'm committed to helping students develop not just as researchers, but as 
                future leaders in their chosen fields.
              </p>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Students;