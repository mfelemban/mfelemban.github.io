import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

const Courses = () => {
  const currentCourses = [
    {
      code: "CS 6890",
      title: "Advanced Algorithms and Data Structures",
      semester: "Spring 2024",
      level: "Graduate",
      students: 45,
      schedule: "MW 2:00-3:30 PM",
      description: "In-depth study of advanced algorithmic techniques including dynamic programming, graph algorithms, and computational complexity theory."
    },
    {
      code: "CS 4820",
      title: "Machine Learning Fundamentals",
      semester: "Spring 2024",
      level: "Undergraduate",
      students: 78,
      schedule: "TTh 10:00-11:30 AM",
      description: "Introduction to machine learning concepts, algorithms, and applications with hands-on programming assignments."
    }
  ];

  const pastCourses = [
    {
      code: "CS 7850",
      title: "Computational Biology",
      semester: "Fall 2023",
      level: "Graduate"
    },
    {
      code: "CS 3410",
      title: "Data Structures and Algorithms",
      semester: "Fall 2023",
      level: "Undergraduate"
    },
    {
      code: "CS 6810",
      title: "High Performance Computing",
      semester: "Spring 2023",
      level: "Graduate"
    },
    {
      code: "CS 2110",
      title: "Introduction to Programming",
      semester: "Fall 2022",
      level: "Undergraduate"
    }
  ];

  return (
    <PageLayout 
      title="Courses"
      subtitle="Teaching the next generation of computer scientists and researchers"
    >
      {/* Current Courses */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Current Courses</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {currentCourses.map((course, index) => (
            <AcademicCard key={index} variant="highlighted" className="h-full">
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.schedule}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {course.students} students
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

      {/* Past Courses */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">Previously Taught</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pastCourses.map((course, index) => (
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

      {/* Teaching Philosophy */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Teaching Philosophy
        </h2>
        <AcademicCard>
          <AcademicCardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I believe in creating an inclusive and engaging learning environment where students 
                are encouraged to think critically, ask questions, and explore the fascinating 
                world of computer science through both theoretical understanding and practical application.
              </p>
              <p>
                My courses emphasize problem-solving skills, collaborative learning, and the 
                development of computational thinking. I strive to connect abstract concepts 
                to real-world applications, helping students understand the relevance and 
                impact of their studies.
              </p>
              <p>
                Through a combination of lectures, hands-on programming assignments, and 
                research projects, I aim to prepare students not just for their next course, 
                but for successful careers in technology and research.
              </p>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Courses;