import { Link } from "react-router-dom";
import { BookOpen, Users, FlaskConical, GraduationCap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";

const Index = () => {
  const highlights = [
    {
      icon: <FlaskConical className="h-8 w-8 text-primary" />,
      title: "Research",
      description: "Exploring cutting-edge topics in computational science and data analysis.",
      link: "/research"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Courses",
      description: "Teaching advanced courses in computer science and mathematics.",
      link: "/courses"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Projects",
      description: "Leading innovative research projects with real-world applications.",
      link: "/projects"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Students",
      description: "Mentoring the next generation of researchers and scholars.",
      link: "/students"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mb-6">
            Dr. [Your Name]
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Professor of Computer Science at [University Name]
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to my academic homepage. I am a researcher passionate about 
            computational methods, data science, and their applications to solving 
            complex real-world problems. Explore my work, courses, and research projects.
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {highlights.map((highlight, index) => (
          <Link key={index} to={highlight.link} className="group">
            <AcademicCard className="h-full hover:border-primary/30 transition-smooth">
              <AcademicCardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-accent w-fit group-hover:bg-primary/10 transition-smooth">
                  {highlight.icon}
                </div>
                <AcademicCardTitle className="group-hover:text-primary transition-smooth">
                  {highlight.title}
                </AcademicCardTitle>
              </AcademicCardHeader>
              <AcademicCardContent>
                <AcademicCardDescription className="text-center">
                  {highlight.description}
                </AcademicCardDescription>
              </AcademicCardContent>
            </AcademicCard>
          </Link>
        ))}
      </div>

      {/* Recent News/Updates Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Recent Updates
        </h2>
        <div className="space-y-6">
          <AcademicCard variant="highlighted">
            <AcademicCardHeader>
              <AcademicCardTitle>New Paper Published</AcademicCardTitle>
              <AcademicCardDescription>March 2024</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground">
                Our latest research on machine learning applications in computational biology 
                has been accepted for publication in the Journal of Computational Science.
              </p>
            </AcademicCardContent>
          </AcademicCard>

          <AcademicCard>
            <AcademicCardHeader>
              <AcademicCardTitle>Conference Presentation</AcademicCardTitle>
              <AcademicCardDescription>February 2024</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground">
                Presented our work on distributed computing algorithms at the International 
                Conference on High Performance Computing.
              </p>
            </AcademicCardContent>
          </AcademicCard>

          <AcademicCard>
            <AcademicCardHeader>
              <AcademicCardTitle>New Course Launch</AcademicCardTitle>
              <AcademicCardDescription>January 2024</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground">
                Launched a new graduate course on Advanced Data Structures and Algorithms 
                with a focus on modern computational challenges.
              </p>
            </AcademicCardContent>
          </AcademicCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
