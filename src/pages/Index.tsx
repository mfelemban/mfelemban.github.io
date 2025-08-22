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
      <div className="bg-gradient-to-b from-muted/20 to-transparent py-20 mb-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-foreground mb-6 tracking-tight">
            Dr. Alex Morgan
          </h1>
          <p className="text-2xl text-primary font-crimson mb-8 italic">
            Professor of Computer Science
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-crimson">
            Advancing computational research at the intersection of machine learning, 
            distributed systems, and computational biology. Dedicated to fostering 
            innovation through rigorous scientific inquiry and collaborative research.
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {highlights.map((highlight, index) => (
          <Link key={index} to={highlight.link} className="group">
            <AcademicCard className="h-full hover:border-primary/50 transition-smooth border-l-4 border-l-primary/30 hover:border-l-primary">
              <AcademicCardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-accent/20 w-fit group-hover:bg-primary/10 transition-smooth">
                  {highlight.icon}
                </div>
                <AcademicCardTitle className="group-hover:text-primary transition-smooth text-xl">
                  {highlight.title}
                </AcademicCardTitle>
              </AcademicCardHeader>
              <AcademicCardContent>
                <AcademicCardDescription className="text-center font-crimson leading-relaxed">
                  {highlight.description}
                </AcademicCardDescription>
              </AcademicCardContent>
            </AcademicCard>
          </Link>
        ))}
      </div>

      {/* Recent News/Updates Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-playfair font-semibold text-foreground mb-12 text-center">
          Recent Updates
        </h2>
        <div className="space-y-8">
          <AcademicCard variant="highlighted" className="border-l-4 border-l-primary">
            <AcademicCardHeader>
              <AcademicCardTitle className="text-xl">New Paper Published</AcademicCardTitle>
              <AcademicCardDescription className="font-crimson">March 2024</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground font-crimson leading-relaxed">
                Our latest research on machine learning applications in computational biology 
                has been accepted for publication in the Journal of Computational Science.
              </p>
            </AcademicCardContent>
          </AcademicCard>

          <AcademicCard className="border-l-4 border-l-secondary">
            <AcademicCardHeader>
              <AcademicCardTitle className="text-xl">Conference Presentation</AcademicCardTitle>
              <AcademicCardDescription className="font-crimson">February 2024</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground font-crimson leading-relaxed">
                Presented our work on distributed computing algorithms at the International 
                Conference on High Performance Computing.
              </p>
            </AcademicCardContent>
          </AcademicCard>

          <AcademicCard className="border-l-4 border-l-accent">
            <AcademicCardHeader>
              <AcademicCardTitle className="text-xl">New Course Launch</AcademicCardTitle>
              <AcademicCardDescription className="font-crimson">January 2024</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground font-crimson leading-relaxed">
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
