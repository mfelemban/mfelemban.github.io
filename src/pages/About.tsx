import PageLayout from "@/components/PageLayout";
import { MapPin, Calendar } from "lucide-react";
import kfupmLogo from "@/assets/logos/kfupm-logo.png";
import purdueLogo from "@/assets/logos/purdue-logo.png";
import kaustLogo from "@/assets/logos/kaust-logo.png";
import aramcoLogo from "@/assets/logos/aramco-logo.png";
import ibmLogo from "@/assets/logos/ibm-logo.png";
import sabicLogo from "@/assets/logos/sabic-logo.png";

const employment = [
  {
    position: "Director, Interdisciplinary Research Center for Intelligent Secure Systems",
    company: "KFUPM",
    location: "Dhahran, Saudi Arabia",
    period: "September 2022 – Present",
    logo: kfupmLogo,
    current: true,
  },
  {
    position: "Assistant Professor, Information and Computer Science Department",
    company: "KFUPM",
    location: "Dhahran, Saudi Arabia",
    period: "November 2023 – Present",
    logo: kfupmLogo,
    current: true,
  },
  {
    position: "Assistant Professor, Computer Engineering Department",
    company: "KFUPM",
    location: "Dhahran, Saudi Arabia",
    period: "April 2018 – Present",
    logo: kfupmLogo,
    current: true,
  },
  {
    position: "Director (Acting), Interdisciplinary Research Center for Intelligent Secure Systems",
    company: "KFUPM",
    location: "Dhahran, Saudi Arabia",
    period: "February 2021 – September 2022",
    logo: kfupmLogo,
    current: false,
  },
  {
    position: "Information Security Division, ECC",
    company: "Saudi Aramco",
    location: "Dhahran, Saudi Arabia",
    period: "June 2018 – August 2018",
    logo: aramcoLogo,
    current: false,
  },
  {
    position: "Research Intern",
    company: "IBM T.J. Watson Research Center",
    location: "Yorktown Heights, NY, USA",
    period: "May 2010 – July 2010",
    logo: ibmLogo,
    current: false,
  },
  {
    position: "Network Administrator",
    company: "SABIC",
    location: "Al-Jubail, Saudi Arabia",
    period: "September 2008 – March 2009",
    logo: sabicLogo,
    current: false,
  },
];

const education = [
  {
    degree: "Ph.D., Electrical & Computer Engineering",
    institution: "Purdue University",
    location: "West Lafayette, IN, USA",
    period: "August 2012 – March 2018",
    thesis: "Designing and Development of Adaptive Intrusion Management for Cyber-Based Systems",
    logo: purdueLogo,
  },
  {
    degree: "M.S., Computer Science",
    institution: "KAUST",
    location: "Thuwal, Saudi Arabia",
    period: "September 2009 – November 2011",
    thesis: "Optimal Node Placement in Underwater Acoustic Sensor Networks",
    logo: kaustLogo,
  },
  {
    degree: "B.S., Computer Engineering",
    institution: "KFUPM",
    location: "Dhahran, Saudi Arabia",
    period: "September 2003 – May 2008",
    logo: kfupmLogo,
  },
];

const About = () => (
  <PageLayout
    title="About"
    subtitle="Academic and professional background of Dr. Muhamad Felemban"
  >
    {/* Employment */}
    <section className="mb-14">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Employment
      </h2>
      <div className="space-y-3">
        {employment.map((job, i) => (
          <div
            key={i}
            className={`flex gap-4 border border-border p-4 ${
              job.current ? "border-l-[3px] border-l-primary" : ""
            }`}
          >
            <img
              src={job.logo}
              alt={job.company}
              className="w-12 h-12 object-contain shrink-0 bg-white border border-border p-1"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <p className="font-semibold text-sm text-foreground">{job.position}</p>
                {job.current && (
                  <span className="text-xs border border-primary text-primary px-2 py-0.5 shrink-0">
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-primary mt-0.5">{job.company}</p>
              <div className="flex flex-wrap gap-4 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />{job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />{job.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Education */}
    <section className="mb-14">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Education
      </h2>
      <div className="space-y-3">
        {education.map((edu, i) => (
          <div
            key={i}
            className="flex gap-4 border border-border border-l-[3px] border-l-primary p-4"
          >
            <img
              src={edu.logo}
              alt={edu.institution}
              className="w-12 h-12 object-contain shrink-0 bg-white border border-border p-1"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-foreground">{edu.degree}</p>
              <p className="text-sm font-medium text-primary mt-0.5">{edu.institution}</p>
              <div className="flex flex-wrap gap-4 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />{edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />{edu.period}
                </span>
              </div>
              {edu.thesis && (
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="font-medium text-foreground">
                    {edu.degree.includes("Ph.D") ? "Dissertation: " : "Thesis: "}
                  </span>
                  <em>{edu.thesis}</em>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Summary stats */}
    <section>
      <div className="grid grid-cols-3 gap-4 border border-border p-6 text-center">
        {[
          { value: "15+", label: "Years in Academia & Research" },
          { value: "3", label: "Degrees Earned" },
          { value: "6", label: "Organizations" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-serif font-bold text-3xl text-primary">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default About;
