import PageLayout from "@/components/PageLayout";

const currentGrad = [
  { name: "Bushra Alowaiid", degree: "PhD", research: "Distributed Quantum Computing", since: "2025" },
  { name: "Hind Baagel", degree: "PhD", research: "Post-Quantum Cryptography", since: "2024" },
  { name: "Lina Alharbi", degree: "PhD", research: "Practical Private Set Intersection", since: "2024" },
  { name: "Soha Sandoukah", degree: "PhD", research: "Robust and Secure Federated Learning", since: "2023" },
  { name: "Ekhlas Zaid", degree: "MSc", research: "Backdoor Attack on Federated Learning", since: "2025" },
  { name: "Abdulmjeed Al-Othman", degree: "MSc", research: "Secure Neural Network Inference", since: "2024" },
  { name: "Maram Al-Qahtani", degree: "MSc", research: "Machine Unlearning", since: "2024" },
  { name: "Eid AlDawsari", degree: "MSc", research: "Quantum Computing", since: "2024" },
  { name: "Mustafa Al-Ghafli", degree: "MSc", research: "Private Set Intersection in Mobile Crowdsensing", since: "2021" },
];

const recentGrads = [
  { name: "Nourah Al-Otaibi", degree: "PhD", year: "2025", thesis: "Edge-Assisted Detection and Mitigation of Label-Flipping Attacks in Federated Learning Systems" },
  { name: "Abdulmunim Sa'ad", degree: "MSc", year: "2023–2024", thesis: "Federated Learning based Mobile Application" },
  { name: "Shurooq Al-Oqbi", degree: "MSc", year: "2023–2024", thesis: "Quantum Algorithms for Solving Partial Differential Equations" },
  { name: "Sani Umar", degree: "MSc", year: "2021", thesis: "Modeling and Detecting False Data Injection Attacks in Smart Grids" },
  { name: "Mohammad AlAkhras", degree: "MEng", year: "2021", thesis: "Efficient Network Coding in Wireless Sensor Network" },
];

const mxStudents = [
  { name: "Tariq AlMuqbil", program: "QIC MX", year: "2024", research: "Quantum Circuit Generator using Evolutionary Algorithms" },
  { name: "Maha Al-Otaibi", program: "QIC MX", year: "2024", research: "Battery Revenue Optimization using Quantum Computing" },
  { name: "Abdulrahman Alajmi", program: "QIC MX", year: "2024", research: "Quantum Random Number Generator" },
  { name: "Abdulhadi Alzaidy", program: "QIC MX", year: "2024", research: "Quantum Random Number Generator" },
  { name: "Ahoud Alhawash", program: "QIC MX", year: "2024", research: "Quantum Algorithms for PDEs" },
  { name: "Mohammad Al-Saiyari", program: "QIC MX", year: "2022", research: "Quantum Optimization for Vehicle Routing Problem" },
  { name: "Rokiya Ghandour", program: "QIC MX", year: "2022", research: "Quantum Computing Application in Finance" },
  { name: "Mays Miajan", program: "QIC MX", year: "2022", research: "Quantum Computing Application in Finance" },
  { name: "Joud Awadh", program: "QIC MX", year: "2022", research: "Quantum Computing Application in Finance" },
  { name: "Shuroog Al-Ogbi", program: "QIC MX", year: "2022", research: "Quantum Support Vector Machines" },
  { name: "Bashayer Al-Nahdi", program: "QIC MX", year: "2022", research: "Quantum Random Number Generator" },
  { name: "Maryam Baabdullah", program: "QIC MX", year: "2021", research: "Quantum Support Vector Machines" },
  { name: "Sarah Al-Wadaah", program: "QIC MX", year: "2021", research: "Feasibility of using Quantum Computing in Seismic Image Processing" },
];

const undergradAdvising = [
  { name: "Mohammad Serag", dept: "COE, KFUPM", year: "2025", research: "Current Research" },
  { name: "Abdullah Emad Felemban", dept: "CS, OSU", year: "2025", research: "Current Research" },
  { name: "Joud Zamzami", dept: "CS, UMASS", year: "2025", research: "Current Research" },
  { name: "Mariam Alsowaidan", dept: "Kuwait", year: "2025", research: "Current Research" },
  { name: "Talal Al-Towaijri", dept: "CS, IAU", year: "2024", research: "Quantum Algorithms for VRP" },
  { name: "Zahra Homoud", dept: "EE, Leeds University", year: "2024", research: "Light-Weight Deep Learning" },
  { name: "Osamah Al-Karnawi", dept: "COE, KFUPM", year: "2024", research: "DGA-based domains detection" },
  { name: "Amer Mosalli", dept: "COE, KFUPM", year: "2023", research: "Event-Detection Using Edge-based Vehicle Dashcams" },
  { name: "Khaled AlShehri", dept: "Math, KFUPM", year: "2022", research: "Private Set Intersection using Lattice-based Cryptography" },
  { name: "Khaled Al-Butainy", dept: "COE, KFUPM", year: "2022", research: "Masking Unmasked Faces Using GANs Based Models" },
  { name: "Khaled Al-Zahrani", dept: "Phys, KFUPM", year: "2021", research: "Increasing Fidelity of IBM Q Swap Gates" },
  { name: "Othman Kisha", dept: "COE, KFUPM", year: "2021", research: "Privacy Requirement for Contact Tracing Applications" },
  { name: "Kunwar Saaim", dept: "COE, Aligarh Muslim University", year: "2022", research: "File Fragment Classification Using Deep Learning" },
  { name: "Mohammad Khiami", dept: "COE, KFUPM", year: "2020", research: "Write-Efficient LSM-based Merkle Trees" },
  { name: "Abdulkarim Al-Alweet", dept: "COE, KFUPM", year: "2020", research: "File Fragment Classification Using Deep Learning" },
  { name: "Asaad Al-Ghamdi", dept: "ICS, KFUPM", year: "2020", research: "BeeCast: A Collaborative Video Streaming System", achievement: "1st runner-up, ACM SRC Undergraduate 2021" },
  { name: "Mohammad Al-Bejadi", dept: "COE, KFUPM", year: "2020", research: "Collaborative Video Streaming", achievement: "1st runner-up, KAUST WEP 2021" },
];

const undergradMentoring = [
  { name: "Ghanima Boutaiban", dept: "CS, GUST", program: "Summer 2023" },
  { name: "Yousef AbuShabaan", dept: "CS, GUST", program: "Summer 2023" },
  { name: "Abduljawad Mohammad", dept: "ICS, KFUPM", program: "SURE 2021", research: "Masking Unmasked Faces Using GANs" },
  { name: "Amaan Izhar", dept: "ICS, KFUPM", program: "SURE 2021", research: "Emotional Interpretation using Voice Recognition" },
  { name: "Mujtaba Siddiqui", dept: "ISE, KFUPM", program: "SURE 2021", research: "Simulation of COVID-19 in KFUPM Campus" },
  { name: "Sultan Al-Garbi", dept: "ICS, KFUPM", program: "SURE 2021", research: "Federated Learning" },
  { name: "Mahmoud Ellouh", dept: "COE, KFUPM", program: "SURE 2021", research: "ZeroJar: IoT Honeypot for Zero-day Attacks Detection" },
  { name: "Murtada Al-Hasan", dept: "ISE, KFUPM", program: "SURE 2021", research: "Dynamic Class Scheduling with COVID-19 Constraints" },
  { name: "Hassan Al-Saffar", dept: "EE, KFUPM", program: "SURE 2021", research: "Emotional Recognition Using Thermal Pictures" },
];

const highSchool = [
  { name: "Hussain AlSaif", location: "Dhahran", year: "2022", achievement: "Ibdaa 2022 Finalist", research: "Using Reinforcement Learning in Quantum Error Correction Codes" },
  { name: "Tala Al-Mulla", location: "Dhahran", year: "2021", achievement: "Ibdaa 2021 Finalist", research: "Modeling and Simulation of University Class Schedules with COVID-19 Constraints" },
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
    {children}
  </h2>
);

const Students = () => (
  <PageLayout
    title="Students"
    subtitle="SPQ Group — Mentoring the next generation of researchers"
  >
    {/* Current Graduate Students */}
    <section className="mb-12">
      <SectionHeading>Current Graduate Students</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-4 font-semibold text-foreground">Name</th>
              <th className="py-2 pr-4 font-semibold text-foreground w-16">Degree</th>
              <th className="py-2 pr-4 font-semibold text-foreground">Research Topic</th>
              <th className="py-2 font-semibold text-foreground w-20">Since</th>
            </tr>
          </thead>
          <tbody>
            {currentGrad.map((s, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-4 font-medium text-foreground">{s.name}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.degree}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.research}</td>
                <td className="py-2.5 text-muted-foreground">{s.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Recent Graduates */}
    <section className="mb-12">
      <SectionHeading>Recent Graduates</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-4 font-semibold text-foreground">Name</th>
              <th className="py-2 pr-4 font-semibold text-foreground w-16">Degree</th>
              <th className="py-2 pr-4 font-semibold text-foreground w-24">Year</th>
              <th className="py-2 font-semibold text-foreground">Thesis / Project</th>
            </tr>
          </thead>
          <tbody>
            {recentGrads.map((s, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-4 font-medium text-foreground">{s.name}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.degree}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.year}</td>
                <td className="py-2.5 text-muted-foreground">{s.thesis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* MX Students */}
    <section className="mb-12">
      <SectionHeading>QIC MX Graduate Students</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-4 font-semibold text-foreground">Name</th>
              <th className="py-2 pr-4 font-semibold text-foreground w-24">Year</th>
              <th className="py-2 font-semibold text-foreground">Research / Project</th>
            </tr>
          </thead>
          <tbody>
            {mxStudents.map((s, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-4 font-medium text-foreground">{s.name}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.year}</td>
                <td className="py-2.5 text-muted-foreground">{s.research}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Undergrad Advising */}
    <section className="mb-12">
      <SectionHeading>Undergraduate Research Advising</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-4 font-semibold text-foreground">Name</th>
              <th className="py-2 pr-4 font-semibold text-foreground">Department</th>
              <th className="py-2 pr-4 font-semibold text-foreground w-16">Year</th>
              <th className="py-2 font-semibold text-foreground">Project</th>
            </tr>
          </thead>
          <tbody>
            {undergradAdvising.map((s, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-4 font-medium text-foreground">{s.name}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.dept}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.year}</td>
                <td className="py-2.5 text-muted-foreground">
                  {s.research}
                  {s.achievement && (
                    <span className="block text-xs text-primary mt-0.5">{s.achievement}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Undergrad Mentoring */}
    <section className="mb-12">
      <SectionHeading>Undergraduate Mentoring</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-4 font-semibold text-foreground">Name</th>
              <th className="py-2 pr-4 font-semibold text-foreground">Department</th>
              <th className="py-2 pr-4 font-semibold text-foreground">Program</th>
              <th className="py-2 font-semibold text-foreground">Project</th>
            </tr>
          </thead>
          <tbody>
            {undergradMentoring.map((s, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-4 font-medium text-foreground">{s.name}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.dept}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.program}</td>
                <td className="py-2.5 text-muted-foreground">{s.research ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* High School */}
    <section className="mb-12">
      <SectionHeading>High School Mentoring</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground text-left">
              <th className="py-2 pr-4 font-semibold text-foreground">Name</th>
              <th className="py-2 pr-4 font-semibold text-foreground">Location</th>
              <th className="py-2 pr-4 font-semibold text-foreground">Achievement</th>
              <th className="py-2 font-semibold text-foreground">Project</th>
            </tr>
          </thead>
          <tbody>
            {highSchool.map((s, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 pr-4 font-medium text-foreground">{s.name}</td>
                <td className="py-2.5 pr-4 text-muted-foreground">{s.location}</td>
                <td className="py-2.5 pr-4 text-primary text-xs">{s.achievement}</td>
                <td className="py-2.5 text-muted-foreground">{s.research}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Opportunities */}
    <section>
      <SectionHeading>Research Opportunities</SectionHeading>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-border border-l-[3px] border-l-primary p-5">
          <p className="font-semibold text-sm text-foreground mb-2">PhD &amp; MSc Positions</p>
          <p className="text-xs text-muted-foreground mb-3">
            Join the SPQ group to work on cutting-edge research in cybersecurity, quantum computing,
            and privacy-preserving technologies.
          </p>
          <p className="text-xs font-medium text-foreground mb-1">Open research areas:</p>
          <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
            <li>Post-Quantum Cryptography and Quantum-Resistant Systems</li>
            <li>Privacy-Preserving Machine Learning and Federated Learning Security</li>
            <li>Quantum Computing Algorithms and Applications</li>
            <li>Digital Forensics and File Fragment Classification</li>
          </ul>
        </div>
        <div className="border border-border p-5">
          <p className="font-semibold text-sm text-foreground mb-2">Undergraduate Research</p>
          <p className="text-xs text-muted-foreground mb-3">
            Opportunities for KFUPM undergraduate students to gain research experience in the SPQ group.
          </p>
          <p className="text-xs font-medium text-foreground mb-1">Requirements:</p>
          <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
            <li>GPA 3.5+ in Computer Engineering or related field</li>
            <li>Completed fundamental CS courses</li>
            <li>Available 10+ hours/week for research</li>
          </ul>
          <p className="text-xs text-muted-foreground mt-3">
            Contact:{" "}
            <a href="mailto:felemban@kfupm.edu.sa" className="text-primary hover:underline">
              felemban@kfupm.edu.sa
            </a>
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Students;
