import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import kfupmLogo from "@/assets/logos/kfupm-logo.png";
import purdueLogo from "@/assets/logos/purdue-logo.png";
import kaustLogo from "@/assets/logos/kaust-logo.png";
import aramcoLogo from "@/assets/logos/aramco-logo.png";
import ibmLogo from "@/assets/logos/ibm-logo.png";
import sabicLogo from "@/assets/logos/sabic-logo.png";

const About = () => {
  const employment = [
    {
      position: "Director, Interdisciplinary Research Center for Intelligent Secure Systems",
      company: "KFUPM",
      location: "Dhahran, Saudi Arabia",
      period: "September 2022 - Present",
      logo: kfupmLogo,
      current: true
    },
    {
      position: "Assistant Professor, Information and Computer Science Department",
      company: "KFUPM",
      location: "Dhahran, Saudi Arabia", 
      period: "November 2023 - Present",
      logo: kfupmLogo,
      current: true
    },
    {
      position: "Assistant Professor, Computer Engineering Department",
      company: "KFUPM",
      location: "Dhahran, Saudi Arabia",
      period: "April 2018 - Present",
      logo: kfupmLogo,
      current: true
    },
    {
      position: "Director (A), Interdisciplinary Research Center for Intelligent Secure Systems",
      company: "KFUPM",
      location: "Dhahran, Saudi Arabia",
      period: "February 2021 - September 2022",
      logo: kfupmLogo,
      current: false
    },
    {
      position: "Information Security Division, ECC",
      company: "Saudi Aramco",
      location: "Dhahran, Saudi Arabia",
      period: "June 2018 - August 2018",
      logo: aramcoLogo,
      current: false
    },
    {
      position: "Research Intern",
      company: "IBM T.J Watson",
      location: "Yorktown Heights, NY",
      period: "May 2010 - July 2010",
      logo: ibmLogo,
      current: false
    },
    {
      position: "Network Administrator",
      company: "SABIC",
      location: "Al-Jubail, Saudi Arabia",
      period: "September 2008 - March 2009",
      logo: sabicLogo,
      current: false
    }
  ];

  const education = [
    {
      degree: "Ph.D., Electrical & Computer Engineering",
      institution: "Purdue University",
      location: "West Lafayette, IN, USA",
      period: "August 2012 - March 2018",
      thesis: "Designing and Development of Adaptive Intrusion Management for Cyber-Based Systems",
      logo: purdueLogo
    },
    {
      degree: "MS, Computer Science",
      institution: "KAUST",
      location: "Thuwal, Saudi Arabia",
      period: "September 2009 - November 2011",
      thesis: "Optimal Node Placement in Underwater Acoustic Sensor Networks",
      logo: kaustLogo
    },
    {
      degree: "B.S., Computer Engineering",
      institution: "KFUPM",
      location: "Dhahran, Saudi Arabia",
      period: "September 2003 - May 2008",
      logo: kfupmLogo
    }
  ];

  return (
    <PageLayout 
      title="About Me"
      subtitle="Academic and professional journey in cybersecurity, privacy, and quantum computing"
    >
      {/* Employment Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Employment</h2>
        </div>
        <div className="space-y-6">
          {employment.map((job, index) => (
            <AcademicCard key={index} variant={job.current ? "highlighted" : "default"}>
              <AcademicCardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={job.logo} 
                      alt={`${job.company} logo`}
                      className="w-16 h-16 object-contain rounded-lg bg-white p-2 border border-border"
                    />
                  </div>
                  <div className="flex-1">
                    <AcademicCardTitle className="mb-2">{job.position}</AcademicCardTitle>
                    <AcademicCardDescription className="text-lg font-medium text-foreground mb-2">
                      {job.company}
                    </AcademicCardDescription>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>
                  {job.current && (
                    <Badge variant="default" className="ml-2">Current</Badge>
                  )}
                </div>
              </AcademicCardHeader>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <AcademicCard key={index} variant="highlighted">
              <AcademicCardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      className="w-16 h-16 object-contain rounded-lg bg-white p-2 border border-border"
                    />
                  </div>
                  <div className="flex-1">
                    <AcademicCardTitle className="mb-2">{edu.degree}</AcademicCardTitle>
                    <AcademicCardDescription className="text-lg font-medium text-foreground mb-2">
                      {edu.institution}
                    </AcademicCardDescription>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    {edu.thesis && (
                      <div className="mt-3">
                        <h4 className="font-medium text-foreground mb-1">
                          {edu.degree.includes("Ph.D") ? "Dissertation:" : "Thesis:"}
                        </h4>
                        <p className="text-sm text-muted-foreground italic">"{edu.thesis}"</p>
                      </div>
                    )}
                  </div>
                </div>
              </AcademicCardHeader>
            </AcademicCard>
          ))}
        </div>
      </div>

      {/* Career Summary */}
      <div className="max-w-4xl mx-auto">
        <AcademicCard variant="highlighted">
          <AcademicCardHeader>
            <AcademicCardTitle className="text-center">Academic Journey Summary</AcademicCardTitle>
          </AcademicCardHeader>
          <AcademicCardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years in Academia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Degrees Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </div>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default About;