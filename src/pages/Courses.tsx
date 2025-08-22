import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

// Import course images
import classroomAiSecurity from "@/assets/classroom-ai-security.jpg";
import quantumComputingLab from "@/assets/quantum-computing-lab.jpg";
import cybersecurityPrivacy from "@/assets/cybersecurity-privacy.jpg";

const Courses = () => {
  const currentCourses = [
    {
      code: "SEC 595",
      title: "Special Topics in Information Assurance and Security (Encrypted Computing)",
      semester: "Fall 2024",
      level: "Graduate",
      schedule: "TBD",
      description: "Advanced topics in encrypted computing, homomorphic encryption, and secure multiparty computation."
    },
    {
      code: "COE 466",
      title: "Quantum Architecture and Algorithms",
      semester: "Fall 2024",
      level: "Graduate", 
      schedule: "TBD",
      description: "Introduction to quantum computing architectures, quantum algorithms, and quantum programming."
    }
  ];

  const recentCourses = [
    {
      code: "COE 531",
      title: "Quantum Communication",
      semester: "Spring 2024",
      level: "Graduate"
    },
    {
      code: "COE 292",
      title: "Introduction to AI",
      semester: "Spring 2024",
      level: "Undergraduate"
    },
    {
      code: "COE 520",
      title: "Queueing Theory and Network Applications", 
      semester: "Fall 2023",
      level: "Graduate"
    },
    {
      code: "COE 530",
      title: "Quantum Computer & Architecture",
      semester: "Spring 2023",
      level: "Graduate"
    }
  ];

  const pastCourses = [
    {
      code: "COE 426",
      title: "Data Privacy",
      semesters: ["Fall 2022", "Fall 2020", "Fall 2019"]
    },
    {
      code: "COE 526", 
      title: "Data Privacy",
      semesters: ["Fall 2020"]
    },
    {
      code: "COE 523",
      title: "Distributed Computing",
      semesters: ["Fall 2021"]
    },
    {
      code: "COE 445",
      title: "Internet Information Services",
      semesters: ["Spring 2019", "Spring 2020"]
    },
    {
      code: "ISE 361",
      title: "Fundamentals of Database Systems",
      semesters: ["Fall 2018", "Spring 2019"]
    },
    {
      code: "ICS 103",
      title: "Computer Programming",
      semesters: ["Spring 2011", "Fall 2019", "Spring 2020"]
    }
  ];

  return (
    <PageLayout 
      title="Courses"
      subtitle="Teaching cybersecurity, quantum computing, and data privacy at KFUPM"
    >
      {/* Current Courses */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Current Courses (Fall 2024)</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {currentCourses.map((course, index) => (
            <AcademicCard key={index} variant="highlighted" className="h-full overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={index === 0 ? cybersecurityPrivacy : quantumComputingLab} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <AcademicCardHeader>
                <div className="flex items-start justify-between mb-2">
                  <AcademicCardTitle>{course.code}</AcademicCardTitle>
                  <Badge variant={course.level === "Graduate" ? "default" : "secondary"}>
                    {course.level}
                  </Badge>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">{course.title}</h3>
                <AcademicCardDescription>{course.semester}</AcademicCardDescription>
              </AcademicCardHeader>
              <AcademicCardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.schedule}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {course.semester}
                  </div>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Recent Courses */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Recently Taught</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentCourses.map((course, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <div className="flex items-start justify-between mb-2">
                  <AcademicCardTitle className="text-base">{course.code}</AcademicCardTitle>
                  <Badge variant={course.level === "Graduate" ? "default" : "secondary"} className="text-xs">
                    {course.level}
                  </Badge>
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1">{course.title}</h3>
                <AcademicCardDescription className="text-xs">{course.semester}</AcademicCardDescription>
              </AcademicCardHeader>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Course History */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Course History</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pastCourses.map((course, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <AcademicCardTitle className="text-lg">{course.code}</AcademicCardTitle>
                <h3 className="text-base font-medium text-foreground mb-2">{course.title}</h3>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="flex flex-wrap gap-2">
                  {course.semesters.map((semester, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {semester}
                    </Badge>
                  ))}
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Hero Image for Teaching */}
      <div className="mb-16">
        <div className="relative h-64 rounded-lg overflow-hidden">
          <img 
            src={classroomAiSecurity} 
            alt="Modern classroom with AI and cybersecurity focus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
            <div className="p-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                Teaching Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Bridging theory and practice in cybersecurity and quantum computing education
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Philosophy Content */}
      <div className="max-w-4xl mx-auto">
        <AcademicCard>
          <AcademicCardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My teaching philosophy centers on making complex topics in cybersecurity, quantum computing, 
                and data privacy accessible and engaging for students. I believe in bridging theoretical 
                concepts with practical applications, helping students understand not just the "how" but 
                also the "why" behind security and privacy technologies.
              </p>
              <p>
                Through hands-on projects, real-world case studies, and collaborative learning, I encourage 
                students to think critically about emerging challenges in cybersecurity and quantum computing. 
                My courses emphasize both technical skills and ethical considerations, preparing students 
                for responsible leadership in the rapidly evolving fields of security and quantum technologies.
              </p>
              <p>
                I particularly focus on interdisciplinary approaches, showing how cybersecurity and quantum 
                computing intersect with other fields. This perspective helps students develop a holistic 
                understanding that will serve them well in research and industry careers.
              </p>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Courses;