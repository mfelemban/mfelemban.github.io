import PageLayout from "@/components/PageLayout";

const educationalPrograms = [
  { title: "Cybersecurity and Blockchain MX", description: "Master's extension program on advanced cybersecurity and blockchain technologies." },
  { title: "High-Performance and Cloud Computing MX", description: "Master's extension program covering HPC and cloud infrastructure." },
  { title: "Quantum Information and Computing MX", description: "Master's extension program in quantum computing and quantum information sciences." },
  { title: "Wireless Communication and Networking MX", description: "Master's extension program in wireless communications and network technologies." },
];

const editorial = [
  { role: "Guest Editor", title: "Enhanced Cyber-Physical Security in IoT", journal: "Information, MDPI", year: "2022", type: "Special Issue" },
];

const presentations = [
  { title: "Blockchain: Fundamentals and Applications", venue: "Wasla Tech @ Saudi Aramco EXPEC", date: "February 2020" },
  { title: "Introduction to Cybersecurity: Workshop", venue: "IEEE Saudi Arabia Section", date: "November 2019" },
  { title: "Adaptive Intrusion Management for Database Management Systems", venue: "KAUST", date: "May 2019" },
  { title: "Cybersecurity", venue: "Culture and Arts Association in Dammam", date: "April 2019" },
  { title: "Data Driven Security", venue: "IEEE Saudi Arabia Section", date: "December 2018" },
  { title: "Machine Learning for Cyber Security", venue: "Wasla Tech @ Saudi Aramco EXPEC", date: "October 2018" },
  { title: "Data Protection and Data Science", venue: "Sharqiya Data Geeks", date: "October 2018" },
];

const committees = {
  Department: ["Publicity Committee", "Industrial Relation Committee", "Research Committee"],
  College: ["Teaching and Advising Award Committee (Chair)", "Cybersecurity and Blockchain CX/MS Committee"],
  University: ["Textbook Committee", "Honors Program Committee", "University Ranking Committee", "Undergraduate Research Committee"],
};

const reviewerServices = [
  "IEEE Transactions on Dependable and Secure Computing (TDSC)",
  "IEEE Sensors",
  "IEEE Communication Letters",
  "Journal of Sensors",
  "ACM Computing Survey",
  "Computer and Security",
  "IEEE Computer",
  "Doctoral Symposium, MIDDLEWARE 2019",
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
    {children}
  </h2>
);

const Services = () => (
  <PageLayout
    title="Services"
    subtitle="Educational programs, editorial activities, and professional service"
  >
    {/* Educational Programs */}
    <section className="mb-12">
      <SectionHeading>Educational Programs Development</SectionHeading>
      <div className="grid md:grid-cols-2 gap-3">
        {educationalPrograms.map((p, i) => (
          <div key={i} className="border border-border border-l-[3px] border-l-primary p-4">
            <p className="font-semibold text-sm text-foreground mb-1">{p.title}</p>
            <p className="text-xs text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Guest Editor */}
    <section className="mb-12">
      <SectionHeading>Guest Editor</SectionHeading>
      <div className="space-y-3">
        {editorial.map((e, i) => (
          <div key={i} className="border border-border p-4 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="font-semibold text-sm text-foreground">{e.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {e.journal} · {e.type}
              </p>
            </div>
            <span className="text-xs border border-border px-2 py-0.5 text-muted-foreground shrink-0">{e.year}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Reviewer Services */}
    <section className="mb-12">
      <SectionHeading>Reviewer Services</SectionHeading>
      <div className="grid md:grid-cols-2 gap-1.5">
        {reviewerServices.map((r, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground py-1 border-b border-border last:border-0">
            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
            {r}
          </div>
        ))}
      </div>
    </section>

    {/* Invited Presentations */}
    <section className="mb-12">
      <SectionHeading>Invited Presentations</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-6 font-semibold text-foreground">Title</th>
              <th className="py-2 pr-6 font-semibold text-foreground">Venue</th>
              <th className="py-2 font-semibold text-foreground w-32">Date</th>
            </tr>
          </thead>
          <tbody>
            {presentations.map((p, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-6 text-foreground">{p.title}</td>
                <td className="py-2.5 pr-6 text-muted-foreground">{p.venue}</td>
                <td className="py-2.5 text-muted-foreground">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Committees */}
    <section>
      <SectionHeading>Committee Service</SectionHeading>
      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(committees).map(([level, items]) => (
          <div key={level} className="border border-border p-4">
            <p className="font-semibold text-sm text-foreground mb-3">{level} Level</p>
            <ul className="space-y-1.5">
              {items.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Services;
