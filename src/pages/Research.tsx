import { FileText } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import fileFragClassPdf from "@/papers/file fragment/File_Fragment_Classification.pdf?url";
import lightWeightDscPdf from "@/papers/file fragment/Light_Weight_File_Fragments_Classification_Using_Depthwise_Separable_Convolutions_final.pdf?url";

const securityThrusts = [
  {
    title: "Cybersecurity",
    description: "Intrusion detection, attack-resilient systems, digital forensics, and cybersecurity for critical infrastructure.",
    keywords: ["Intrusion Detection", "Attack-Resilient Systems", "Digital Forensics", "Critical Infrastructure"],
  },
  {
    title: "Digital Forensics",
    description: "File fragment classification, deep learning for forensics, and advanced digital investigation techniques.",
    keywords: ["File Fragment Classification", "Deep Learning Forensics", "Digital Investigation"],
  },
];

const privacyThrusts = [
  {
    title: "Data Security and Privacy",
    description: "Privacy-preserving technologies, data protection methods, and secure data management systems.",
    keywords: ["Data Privacy", "Privacy Enhancing Technologies", "Secure Data Management"],
  },
  {
    title: "Secure and Privacy-Preserving ML",
    description: "Federated learning security, privacy-preserving machine learning, and defense against adversarial attacks.",
    keywords: ["Federated Learning", "Privacy-Preserving ML", "Adversarial Defense", "Label Flipping Attacks"],
  },
];

const quantumThrusts = [
  {
    title: "Quantum Computing",
    description: "Quantum algorithms, quantum architecture, quantum communication, and quantum applications for real-world problems.",
    keywords: ["Quantum Algorithms", "Quantum Architecture", "Quantum Communication"],
  },
  {
    title: "Quantum-Resistant Systems",
    description: "Post-quantum cryptography, quantum-safe security protocols, and quantum-resistant system design.",
    keywords: ["Post-Quantum Cryptography", "Quantum-Safe Protocols", "PQC"],
  },
];

const activeProjects = [
  {
    title: "Using Quantum Computing for Reservoir Simulation",
    description: "Research collaboration with Saudi Aramco to develop quantum algorithms for oil reservoir simulation and optimization.",
    funding: "Saudi Aramco Research Grant",
    duration: "2025–2028",
    collaborators: ["Saudi Aramco", "KFUPM Petroleum Engineering"],
    keywords: ["Quantum Computing", "Reservoir Simulation", "Optimization"],
  },
  {
    title: "Post-Quantum Cryptography Research",
    description: "Developing quantum-resistant cryptographic protocols and evaluating their security against both classical and quantum attacks.",
    funding: "KFUPM Internal Grant",
    duration: "2024–2027",
    collaborators: ["SPQ Group"],
    keywords: ["Post-Quantum Cryptography", "Lattice-based Cryptography", "Security Analysis"],
  },
  {
    title: "Privacy-Preserving Federated Learning",
    description: "Secure aggregation methods and defense mechanisms against adversarial attacks in federated learning systems.",
    funding: "KFUPM Internal Grant",
    duration: "2023–2026",
    collaborators: ["SPQ Group"],
    keywords: ["Federated Learning", "Differential Privacy", "Adversarial Defense"],
  },
];

const completedProjects = [
  {
    title: "Robust, Privacy Preserving Surveillance System for COVID-19",
    duration: "2020",
    funding: "KACST COVID-19 Response Grant",
    outcome: "Successfully deployed privacy-preserving surveillance system",
    keywords: ["Privacy-Preserving Analytics", "Contact Tracing"],
  },
  {
    title: "BeeCast: Device-to-Device Collaborative Video Streaming",
    duration: "2019–2021",
    funding: "DSR-KFUPM Grant",
    outcome: "Won 2nd place in 2021 ACM Student Research Competition; published at MobiCom 2020",
    keywords: ["P2P Networks", "Video Streaming", "Mobile Computing"],
  },
];

type Thrust = { title: string; description: string; keywords: string[] };

const ThrustList = ({ label, thrusts }: { label: string; thrusts: Thrust[] }) => (
  <div className="mb-8">
    <h3 className="font-serif text-lg font-semibold text-foreground border-l-[3px] border-l-primary pl-3 mb-4">
      {label}
    </h3>
    <div className="grid md:grid-cols-2 gap-4">
      {thrusts.map((t, i) => (
        <div key={i} className="border border-border p-4">
          <p className="font-semibold text-sm text-foreground mb-1">{t.title}</p>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{t.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {t.keywords.map((k) => (
              <span key={k} className="text-xs border border-border px-2 py-0.5 text-muted-foreground">
                {k}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Research = () => (
  <PageLayout
    title="SPQ Group"
    subtitle="Security, Privacy, and Quantum Research Group at KFUPM"
  >
    {/* About the group */}
    <section className="mb-12 border border-border border-l-[3px] border-l-primary p-5">
      <p className="text-sm text-foreground leading-relaxed mb-3">
        The <strong>Security, Privacy, and Quantum (SPQ) Group</strong> focuses on cutting-edge research
        at the intersection of cybersecurity, data privacy, and quantum computing. Our interdisciplinary
        approach combines theoretical foundations with practical applications to address real-world challenges.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        We collaborate with industry partners including Saudi Aramco and work on projects with significant
        impact in critical infrastructure protection, next-generation computing systems, and
        privacy-preserving technologies.
      </p>
    </section>

    {/* Research Thrusts */}
    <section className="mb-14">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-8">
        Research Thrusts
      </h2>
      <ThrustList label="Security" thrusts={securityThrusts} />
      <ThrustList label="Privacy" thrusts={privacyThrusts} />
      <ThrustList label="Quantum" thrusts={quantumThrusts} />
    </section>

    {/* Active Projects */}
    <section className="mb-14">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Active Projects
      </h2>
      <div className="space-y-4">
        {activeProjects.map((p, i) => (
          <div key={i} className="border border-border border-l-[3px] border-l-primary p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <p className="font-serif font-semibold text-base text-foreground">{p.title}</p>
              <span className="text-xs border border-primary text-primary px-2 py-0.5 shrink-0">Active</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.description}</p>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
              <p><span className="font-medium text-foreground">Funding: </span>{p.funding}</p>
              <p><span className="font-medium text-foreground">Duration: </span>{p.duration}</p>
              <p><span className="font-medium text-foreground">Collaborators: </span>{p.collaborators.join(", ")}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.keywords.map((k) => (
                <span key={k} className="text-xs border border-border px-2 py-0.5 text-muted-foreground">
                  {k}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Completed Projects */}
    <section className="mb-14">
      <h2 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
        Completed Projects
      </h2>

      {/* ── Featured: File Fragment Classification ── */}
      <div className="border border-border border-l-[3px] border-l-primary p-6 mb-6">
        <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
          <h3 className="font-serif text-lg font-semibold text-foreground">
            File Fragment Classification using Deep Learning
          </h3>
          <span className="text-xs border border-border px-2 py-0.5 text-muted-foreground shrink-0">
            2020–2024 · KFUPM Research Grant
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Digital forensic investigators routinely encounter storage media where the file system is
          damaged, partially overwritten, or deliberately wiped. In such scenarios, file type
          identification cannot rely on extensions or metadata — the raw byte content of each fragment
          is the only available evidence. This project developed a family of lightweight convolutional
          neural network (CNN) models that classify file fragments solely from their binary content,
          achieving high accuracy while remaining efficient enough for deployment on resource-constrained
          forensic hardware.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-4 text-sm">
          <div>
            <p className="font-medium text-foreground mb-2">Key Contributions</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Byte-level CNN feature extraction without file headers or metadata
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Depthwise separable convolutions (DSC) for significant parameter reduction
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Evaluated on standard forensic benchmark datasets (FFT-75, govdocs1)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                State-of-the-art accuracy with substantially lower model complexity
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-foreground mb-2">Team</p>
            <p className="text-sm text-muted-foreground">
              Muhamad Felemban, Mustafa Ghaleb, Kunwar Saaim, Saleh Al-Saleh, Ahmad Almulhem
            </p>
            <p className="font-medium text-foreground mt-4 mb-2">Keywords</p>
            <div className="flex flex-wrap gap-1.5">
              {["Digital Forensics", "CNN", "Deep Learning", "File Carving",
                "Depthwise Separable Convolution", "Lightweight Models"].map((k) => (
                <span key={k} className="text-xs border border-border px-2 py-0.5 text-muted-foreground">
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Papers */}
        <div className="border-t border-border pt-4">
          <p className="font-medium text-sm text-foreground mb-3">Publications</p>
          <div className="space-y-2">
            <a
              href={fileFragClassPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 border border-border hover:border-primary hover:bg-primary/[0.02] transition-smooth group"
            >
              <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                  File Fragment Type Classification using Light-Weight Convolutional Neural Networks
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Felemban et al. · <em>IEEE Access</em>, 2024
                </p>
              </div>
            </a>

            <a
              href={lightWeightDscPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 border border-border hover:border-primary hover:bg-primary/[0.02] transition-smooth group"
            >
              <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                  Lightweight File Fragments Classification using Depthwise Separable Convolution
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Saaim, Felemban et al. · <em>IFIP SEC 2022</em> · 16 citations
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Remaining completed projects */}
      <div className="grid md:grid-cols-2 gap-4">
        {completedProjects.map((p, i) => (
          <div key={i} className="border border-border p-4">
            <p className="font-semibold text-sm text-foreground mb-1">{p.title}</p>
            <p className="text-xs text-muted-foreground mb-1">
              <span className="font-medium text-foreground">Duration: </span>{p.duration}
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              <span className="font-medium text-foreground">Funding: </span>{p.funding}
            </p>
            <p className="text-xs text-muted-foreground border-t border-border pt-2 italic">{p.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Research;
