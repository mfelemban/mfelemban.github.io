import { Link } from "react-router-dom";
import { BookOpen, Users, FlaskConical, GraduationCap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import kfupmCampus from "@/assets/kfupm-campus.jpg";

const Index = () => {
  const highlights = [
    {
      icon: <FlaskConical className="h-8 w-8 text-primary" />,
      title: "SPQ Group",
      description: "Security, Privacy, and Quantum research group with cutting-edge projects and publications.",
      link: "/research"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Publications",
      description: "Research publications in cybersecurity, privacy, and quantum computing.",
      link: "/publications"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Courses",
      description: "Data Privacy, Quantum Computing, AI, and Cybersecurity courses.",
      link: "/courses"
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
            Dr. Muhamad Felemban
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Assistant Professor at KFUPM
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am an assistant professor with the Computer Engineering Department and the Information and 
            Computer Science Department at KFUPM. My research focuses on Cybersecurity, particularly data privacy, 
            quantum computing, and privacy-preserving machine learning through my Security, Privacy, and Quantum (SPQ) research group.
          </p>
        </div>
        
        {/* KFUPM Campus Image */}
        <div className="mt-12 mb-8 max-w-4xl mx-auto">
          <img 
            src={kfupmCampus}
            alt="KFUPM campus at night with iconic water tower" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              <AcademicCardTitle>Research Grant from Saudi Aramco</AcademicCardTitle>
              <AcademicCardDescription>February 2025</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground">
                SPQ group was awarded a Research Grant titled "Using Quantum Computing for Reservoir Simulation" 
                by Saudi Aramco. Looking forward to a fruitful collaboration.
              </p>
            </AcademicCardContent>
          </AcademicCard>

            <AcademicCard>
            <AcademicCardHeader>
              <AcademicCardTitle>First PhD Graduate from SPQ Group</AcademicCardTitle>
              <AcademicCardDescription>April 2025</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground">
                Dr. Nourah Al-Otaibi successfully defended her PhD thesis on "Edge-based Detection and 
                Mitigation of Label Flipping Attacks in Federated Learning Systems".
              </p>
            </AcademicCardContent>
          </AcademicCard>

            <AcademicCard>
            <AcademicCardHeader>
              <AcademicCardTitle>Quantum Computing Symposium</AcademicCardTitle>
              <AcademicCardDescription>February 2025</AcademicCardDescription>
            </AcademicCardHeader>
            <AcademicCardContent>
              <p className="text-muted-foreground">
                Chaired the organization committee of the 1st Symposium of Quantum Computing and Technology, 
                held at KFUPM on February 17-18, 2025.
              </p>
            </AcademicCardContent>
          </AcademicCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
