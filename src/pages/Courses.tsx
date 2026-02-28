import PageLayout from "@/components/PageLayout";

const currentCourses = [
  {
    code: "SEC 595",
    title: "Special Topics in Information Assurance and Security (Encrypted Computing)",
    semester: "Fall 2024",
    level: "Graduate",
    description: "Advanced topics in encrypted computing, homomorphic encryption, and secure multiparty computation.",
  },
  {
    code: "COE 466",
    title: "Quantum Architecture and Algorithms",
    semester: "Fall 2024",
    level: "Graduate",
    description: "Introduction to quantum computing architectures, quantum algorithms, and quantum programming.",
  },
];

const recentCourses = [
  { code: "COE 531", title: "Quantum Communication", semester: "Spring 2024", level: "Graduate" },
  { code: "COE 292", title: "Introduction to AI", semester: "Spring 2024", level: "Undergraduate" },
  { code: "COE 520", title: "Queueing Theory and Network Applications", semester: "Fall 2023", level: "Graduate" },
  { code: "COE 530", title: "Quantum Computer & Architecture", semester: "Spring 2023", level: "Graduate" },
];

const pastCourses = [
  { code: "COE 426", title: "Data Privacy", semesters: ["Fall 2022", "Fall 2020", "Fall 2019"] },
  { code: "COE 526", title: "Data Privacy (Graduate)", semesters: ["Fall 2020"] },
  { code: "COE 523", title: "Distributed Computing", semesters: ["Fall 2021"] },
  { code: "COE 445", title: "Internet Information Services", semesters: ["Spring 2019", "Spring 2020"] },
  { code: "ISE 361", title: "Fundamentals of Database Systems", semesters: ["Fall 2018", "Spring 2019"] },
  { code: "ICS 103", title: "Computer Programming", semesters: ["Spring 2011", "Fall 2019", "Spring 2020"] },
];

const Courses = () => (
  <PageLayout
    title="Courses"
    subtitle="Teaching cybersecurity, quantum computing, and data privacy at KFUPM"
  >
    {/* Current */}
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Current Courses — Fall 2024
      </h2>
      <div className="space-y-4">
        {currentCourses.map((c, i) => (
          <div key={i} className="border border-border border-l-[3px] border-l-primary p-5">
            <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
              <p className="font-serif font-semibold text-base text-foreground">
                {c.code} — {c.title}
              </p>
              <span className="text-xs border border-border px-2 py-0.5 text-muted-foreground shrink-0">
                {c.level}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{c.semester}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Recent */}
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Recently Taught
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-6 font-semibold text-foreground w-24">Code</th>
              <th className="py-2 pr-6 font-semibold text-foreground">Course Title</th>
              <th className="py-2 pr-6 font-semibold text-foreground">Semester</th>
              <th className="py-2 font-semibold text-foreground">Level</th>
            </tr>
          </thead>
          <tbody>
            {recentCourses.map((c, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-6 font-mono text-xs text-primary">{c.code}</td>
                <td className="py-2.5 pr-6 text-foreground">{c.title}</td>
                <td className="py-2.5 pr-6 text-muted-foreground">{c.semester}</td>
                <td className="py-2.5 text-muted-foreground">{c.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* History */}
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Course History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-6 font-semibold text-foreground w-24">Code</th>
              <th className="py-2 pr-6 font-semibold text-foreground">Course Title</th>
              <th className="py-2 font-semibold text-foreground">Semesters Taught</th>
            </tr>
          </thead>
          <tbody>
            {pastCourses.map((c, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-6 font-mono text-xs text-primary">{c.code}</td>
                <td className="py-2.5 pr-6 text-foreground">{c.title}</td>
                <td className="py-2.5 text-muted-foreground">{c.semesters.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Teaching Philosophy */}
    <section>
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Teaching Philosophy
      </h2>
      <div className="border border-border border-l-[3px] border-l-primary p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          My teaching philosophy centers on making complex topics in cybersecurity, quantum computing,
          and data privacy accessible and engaging. I believe in bridging theoretical concepts with
          practical applications, helping students understand not just the "how" but also the "why"
          behind security and privacy technologies.
        </p>
        <p>
          Through hands-on projects, real-world case studies, and collaborative learning, I encourage
          students to think critically about emerging challenges. My courses emphasize both technical
          skills and ethical considerations, preparing students for responsible leadership in rapidly
          evolving fields.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default Courses;
