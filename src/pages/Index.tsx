import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import kfupmCampus from "@/assets/kfupm-campus.jpg";

const news = [
  {
    date: "Apr 2025",
    title: "First PhD Graduate from SPQ Group",
    body: "Dr. Nourah Al-Otaibi successfully defended her PhD thesis on \"Edge-based Detection and Mitigation of Label Flipping Attacks in Federated Learning Systems\".",
  },
  {
    date: "Feb 2025",
    title: "Research Grant from Saudi Aramco",
    body: "SPQ group was awarded a Research Grant titled \"Using Quantum Computing for Reservoir Simulation\" by Saudi Aramco.",
  },
  {
    date: "Feb 2025",
    title: "Quantum Computing Symposium",
    body: "Chaired the organization committee of the 1st Symposium on Quantum Computing and Technology, held at KFUPM on February 17–18, 2025.",
  },
];

const researchInterests = [
  "Cybersecurity and Intrusion Detection Systems",
  "Privacy-Preserving Machine Learning and Federated Learning",
  "Post-Quantum Cryptography",
  "Quantum Computing Algorithms and Applications",
  "Digital Forensics",
];

const Index = () => (
  <PageLayout>
    {/* ── Profile section ── */}
    <div className="grid md:grid-cols-3 gap-10 mb-14">
      {/* Left column */}
      <div className="md:col-span-1">
        <img
          src={kfupmCampus}
          alt="KFUPM campus"
          className="w-full object-cover border border-border mb-5"
          style={{ height: "180px" }}
        />
        <h1 className="font-serif text-2xl font-bold text-foreground leading-tight mb-1">
          Dr. Muhamad Felemban
        </h1>
        <p className="text-sm text-muted-foreground mb-4">Assistant Professor</p>

        <div className="border-t border-border pt-4 space-y-0.5 text-sm text-muted-foreground">
          <p>Computer Engineering Dept.</p>
          <p>Information &amp; Computer Science Dept.</p>
          <p>
            <abbr title="King Fahd University of Petroleum &amp; Minerals">KFUPM</abbr>
            , Dhahran, Saudi Arabia
          </p>
        </div>

        <div className="border-t border-border pt-4 mt-4 text-sm">
          <p>
            <span className="font-medium text-foreground">Email: </span>
            <a
              href="mailto:felemban@kfupm.edu.sa"
              className="text-primary hover:underline"
            >
              felemban@kfupm.edu.sa
            </a>
          </p>
        </div>

        <div className="border-t border-border pt-4 mt-4 space-y-1 text-sm">
          <p className="font-medium text-foreground mb-2">Academic Profiles</p>
          {[
            { label: "Google Scholar", href: "https://scholar.google.com/citations?user=ZyC2dJ8AAAAJ&hl=en" },
            { label: "DBLP", href: "https://dblp.org/pid/135/7413.html" },
            { label: "PURE at KFUPM", href: "https://pure.kfupm.edu.sa/en/persons/mohammad-felemban" },
          ].map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:underline"
            >
              {p.label}
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-4 mt-4 space-y-1 text-sm">
          <p className="font-medium text-foreground mb-2">Quick Links</p>
          {[
            { label: "SPQ Research Group", to: "/research" },
            { label: "Publications", to: "/publications" },
            { label: "Courses", to: "/courses" },
            { label: "Students", to: "/students" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block text-primary hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="md:col-span-2">
        <h2 className="font-serif text-xl font-semibold text-primary border-b border-border pb-2 mb-4">
          Biography
        </h2>
        <p className="text-sm text-foreground leading-relaxed mb-6">
          I am an assistant professor with the Computer Engineering Department and the
          Information and Computer Science Department at KFUPM, and the director of the
          Interdisciplinary Research Center for Intelligent Secure Systems. My research
          focuses on Cybersecurity—particularly data privacy, post-quantum cryptography,
          and privacy-preserving machine learning—through my{" "}
          <Link to="/research" className="text-primary hover:underline">
            Security, Privacy, and Quantum (SPQ) Research Group
          </Link>
          . I also work on quantum computing algorithms and their practical applications
          in collaboration with industry partners including Saudi Aramco.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary border-b border-border pb-2 mb-4">
          Research Interests
        </h2>
        <ul className="mb-6 space-y-1">
          {researchInterests.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-foreground">
              <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
              {r}
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-xl font-semibold text-primary border-b border-border pb-2 mb-4">
          Education
        </h2>
        <div className="space-y-2 text-sm text-foreground mb-6">
          <p><span className="font-medium">Ph.D.</span>, Electrical &amp; Computer Engineering — Purdue University, 2018</p>
          <p><span className="font-medium">M.S.</span>, Computer Science — KAUST, 2011</p>
          <p><span className="font-medium">B.S.</span>, Computer Engineering — KFUPM, 2008</p>
        </div>

        <div className="grid grid-cols-3 gap-4 border border-border p-4 text-center">
          {[
            { value: "297+", label: "Citations" },
            { value: "9", label: "h-index" },
            { value: "34+", label: "Publications" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif font-bold text-2xl text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── News section ── */}
    <div>
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Recent News
      </h2>
      <div className="divide-y divide-border">
        {news.map((item) => (
          <div key={item.title} className="flex gap-6 py-4">
            <span className="text-xs text-muted-foreground whitespace-nowrap w-20 pt-0.5 shrink-0">
              {item.date}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Index;
