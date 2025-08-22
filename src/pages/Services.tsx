import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Eye, GraduationCap } from "lucide-react";

const Services = () => {
  const educationalPrograms = [
    {
      title: "Cybersecurity and Blockchain MX",
      institution: "KFUPM",
      description: "Master's extension program focusing on advanced cybersecurity and blockchain technologies"
    },
    {
      title: "High-Performance and Cloud Computing MX",
      institution: "KFUPM", 
      description: "Master's extension program covering high-performance computing and cloud infrastructure"
    },
    {
      title: "Quantum Information and Computing MX",
      institution: "KFUPM",
      description: "Master's extension program in quantum computing and quantum information sciences"
    },
    {
      title: "Wireless Communication and Networking MX",
      institution: "KFUPM",
      description: "Master's extension program in wireless communications and network technologies"
    }
  ];

  const editorialServices = [
    {
      role: "Guest Editor",
      title: "Enhanced Cyber-Physical Security in IoT",
      journal: "Information, MDPI",
      year: "2022",
      type: "Special Issue"
    }
  ];

  const reviewerServices = [
    "IEEE Transactions on Dependable and Secure Computing (TDSC)",
    "IEEE Sensors",
    "IEEE Communication Letters", 
    "Journal of Sensors",
    "ACM Computing Survey",
    "Computer and Security",
    "IEEE Computer",
    "Doctoral Symposium Workshop MIDDLEWARE 2019"
  ];

  return (
    <PageLayout 
      title="Services"
      subtitle="Educational programs, editorial activities, and professional service contributions"
    >
      {/* Educational Programs Development */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Educational Programs Development</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {educationalPrograms.map((program, index) => (
            <AcademicCard key={index} variant="highlighted">
              <AcademicCardHeader>
                <AcademicCardTitle className="flex items-start justify-between">
                  <span className="flex-1">{program.title}</span>
                  <Badge variant="secondary" className="ml-2">{program.institution}</Badge>
                </AcademicCardTitle>
              </AcademicCardHeader>
              <AcademicCardContent>
                <AcademicCardDescription>
                  {program.description}
                </AcademicCardDescription>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Guest Editor */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Guest Editor</h2>
        </div>
        <div className="grid gap-6">
          {editorialServices.map((service, index) => (
            <AcademicCard key={index}>
              <AcademicCardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <AcademicCardTitle>{service.title}</AcademicCardTitle>
                    <AcademicCardDescription className="mt-2">
                      {service.journal}
                    </AcademicCardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Badge variant="outline">{service.type}</Badge>
                    <Badge variant="secondary">{service.year}</Badge>
                  </div>
                </div>
              </AcademicCardHeader>
              <AcademicCardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Role: {service.role}</span>
                </div>
              </AcademicCardContent>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Reviewer Services */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Eye className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Reviewer Services</h2>
        </div>
        <AcademicCard>
          <AcademicCardHeader>
            <AcademicCardTitle>Peer Review Activities</AcademicCardTitle>
            <AcademicCardDescription>
              Providing expert peer review for leading journals and conferences in cybersecurity, computing, and networking
            </AcademicCardDescription>
          </AcademicCardHeader>
          <AcademicCardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {reviewerServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-accent/20 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>

      {/* Professional Service Summary */}
      <div className="max-w-4xl mx-auto">
        <AcademicCard variant="highlighted">
          <AcademicCardHeader>
            <AcademicCardTitle className="text-center">Professional Service Impact</AcademicCardTitle>
          </AcademicCardHeader>
          <AcademicCardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Educational Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-muted-foreground">Guest Editorships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Reviewer Services</div>
              </div>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Services;