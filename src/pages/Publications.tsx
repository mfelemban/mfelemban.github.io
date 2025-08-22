import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Award } from "lucide-react";

const Publications = () => {
  const journalPublications = [
    {
      title: "Lightweight and Efficient Post Quantum Key Encapsulation Mechanism Based on Q-Problem",
      authors: "Kara, Mostefa, Konstantinos Karampidis, Spyros Panagiotakis, Mohammad Hammoudeh, Muhamad Felemban, and Giorgos Papadourakis",
      journal: "Electronics",
      year: "2025",
      citations: 5,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:Tiz5es2fbqcC"
    },
    {
      title: "Unbounded Depth ElGamal-Based Asymmetric Updatable Encryption Technique",
      authors: "Kara, Mostefa, Ammar Boukrara, Mohammad Hammoudeh, Muhamad Felemban, and Samir Guediri",
      journal: "IEEE Open Journal of the Computer Society",
      year: "2025",
      citations: 0,
      link: "#"
    },
    {
      title: "An encrypted and signed plaintext symmetric cryptosystem",
      authors: "Kara, Mostefa, Mohammad Hammoudeh, Muhamad Felemban, and Konstantinos Karampidis",
      journal: "Computers and Electrical Engineering",
      volume: "123",
      year: "2025",
      citations: 0,
      link: "#"
    },
    {
      title: "Mitigation of oxide growth on aluminum thin films: The role of self-assembled monolayers in superconducting quantum circuits",
      authors: "Saleh, Omar A., Saleem G. Rao, Khan Alam, and Muhamad Felemban",
      journal: "AVS Quantum Science",
      volume: "7",
      issue: "2",
      year: "2025",
      citations: 0,
      link: "#"
    },
    {
      title: "Dynamic spectrum sharing in heterogeneous wireless networks using deep reinforcement learning",
      authors: "Adebayo, Sulaimon Oyeniyi, Abdulaziz Barnawi, Tarek Sheltami, and Muhamad Felemban",
      journal: "Internet of Things",
      volume: "32",
      year: "2025",
      citations: 0,
      link: "#"
    },
    {
      title: "Edge-Assisted Label-Flipping Attack Detection in Federated Learning",
      authors: "AlOtaibi, Nourah S., Muhamad Felemban, and Sajjad Mahmood",
      journal: "IEEE Open Journal of the Communications Society",
      year: "2024",
      citations: 0,
      link: "#"
    },
    {
      title: "File Fragment Type Classification using Light-Weight Convolutional Neural Networks",
      authors: "Felemban, Muhamad, Mustafa Ghaleb, Kunwar Saaim, Saleh Al-Saleh, and Ahmad Almulhem",
      journal: "IEEE Access",
      year: "2024",
      citations: 0,
      link: "#"
    },
    {
      title: "A Systematic Literature Review on Vulnerabilities, Mitigation Techniques, and Attacks in Field-Programmable Gate Arrays",
      authors: "Alsuwaiyan, Ali, Aliyu Abubakar Habib, Ali Bello Imoukhuede, Mohamed Osman Omar, Md Al Maruf, Mansour Alqarni, Aiman El-Maleh, Abdulaziz Tabbakh, Muhamad Felemban, and Akramul Azim",
      journal: "Arabian Journal for Science and Engineering",
      pages: "1-31",
      year: "2024",
      citations: 0,
      link: "#"
    },
    {
      title: "Exploring The Human Response To Anger: Uncovering Insights Through Infrared Thermography And Experimental Psychology",
      authors: "Mohamed, Tarik N., Hassan Alsafar, and Muhamad Felemban",
      journal: "Acta Neuropsychologica",
      volume: "22",
      issue: "3",
      year: "2024",
      citations: 0,
      link: "#"
    },
    {
      title: "Guard: Attack-Resilient Adaptive Load Balancing in Distributed Streaming Systems",
      authors: "Daghistani, Anas, Musab Khayat, Muhamad Felemban, Walid Aref and Arif Ghafoor",
      journal: "IEEE Transactions on Dependable and Secure Computing",
      year: "2022",
      citations: 0,
      link: "#"
    },
    {
      title: "A Modelling and Scheduling Tool for Crowd Movement in Complex Network",
      authors: "Felemban, Emad, Faizan Ur Rehman, Akhlaq Ahmad, and Muhamad Felemban",
      journal: "Intelligent Automation and Soft Computing",
      year: "2022",
      citations: 3,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:D03iK_w7-QYC"
    },
    {
      title: "Rule-Based Detection of False Data Injections Attacks against Optimal Power Flow in Power Systems",
      authors: "Umer, Sani, Muhamad Felemban",
      journal: "Sensors",
      year: "2021",
      citations: 19,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:cFHS6HbyZ2cC"
    },
    {
      title: "A Partition-Driven Integrated Security Architecture for Cyber-Physical Systems",
      authors: "Javed, Y., Muhamad Felemban, Tawfeq Shawly, Jason Kobes, and Arif Ghafoor",
      journal: "Computer",
      volume: "53",
      issue: "3",
      pages: "47-56",
      year: "2020",
      citations: 21,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:HoB7MX3m0LUC"
    },
    {
      title: "Threat Management in Data-centric IoT-Based Collaborative Systems",
      authors: "Felemban, Muhamad, Emad Felemban, Jason Kobes, and Arif Ghafoor",
      journal: "ACM Transactions on Internet Technology (TOIT)",
      volume: "19",
      issue: "3",
      year: "2019",
      citations: 6,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:ZHo1McVdvXMC"
    },
    {
      title: "GroupCast: Preference-aware cooperative video streaming with scalable video coding",
      authors: "Elgabli, Anis, Muhamad Felemban, and Vaneet Aggarwal",
      journal: "IEEE/ACM Transactions on Networking",
      year: "2019",
      citations: 17,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:SeFeTyx0c_EC"
    },
    {
      title: "GiantClient: Video hotspot for multi-user streaming",
      authors: "Elgabli, Anis, Muhamad Felemban, and Vaneet Aggarwal",
      journal: "IEEE Transactions on Circuits and Systems for Video Technology",
      year: "2018",
      citations: 9,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:M05iB0D1s5AC"
    },
    {
      title: "A Privacy Mechanism for Access Controlled Graph Data",
      authors: "Arshad, M.U., Muhamad Felemban, Pervaiz, Z., Ghafoor, A. and Aref, W.G.",
      journal: "IEEE Transactions on Dependable and Secure Computing",
      year: "2018",
      citations: 3,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:70eg2SAEIzsC"
    },
    {
      title: "A Distributed Cloud Architecture for Mobile Multimedia Services",
      authors: "Muhamad Felemban, S. Basalamah, Arif Ghafoor",
      journal: "IEEE Network",
      year: "2013",
      citations: 53,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:9yKSN-GCB0IC"
    }
  ];

  const conferencePublications = [
    {
      title: "Discovery of Quantum Algorithms Using Genetic Algorithms: Exponential Speedup via Random Sampling",
      authors: "Almuqbil, Tariq, and Muhamad Felemban",
      conference: "2024 IEEE International Conference on Quantum Computing and Engineering (QCE)",
      volume: "2",
      pages: "444-445",
      year: "2024",
      citations: 0,
      link: "#"
    },
    {
      title: "Enhancing Arabic Information Retrieval for Question Answering",
      authors: "Alghamdi, Muath, Mohammed Abushawarib, Mahmoud Ellouh, Mustafa Ghaleb, and Muhamad Felemban",
      conference: "Proceedings of the 7th International Conference on Future Networks and Distributed Systems",
      pages: "366-371",
      year: "2023",
      citations: 0,
      link: "#"
    },
    {
      title: "Variational Quantum Algorithms for Solving Vehicle Routing Problem",
      authors: "Mohammad Alsaiyari and Muhamad Felemban",
      conference: "2023 International Conference on Smart Computing and Application (ICSCA)",
      pages: "1-4",
      year: "2023",
      citations: 6,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:abG-DnoFyZgC"
    },
    {
      title: "Quantum Image Classification on NISQ Devices",
      authors: "Shuroog Al-Ogbi, Abdulrahman Ashour and Muhamad Felemban",
      conference: "2022 14th International Conference on Computational Intelligence and Communication Networks (CICN)",
      pages: "1-7",
      year: "2022",
      citations: 4,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:b0M2c_1WBrUC"
    },
    {
      title: "Realistic Face Masks Generation Using Generative Adversarial Networks",
      authors: "Khaled Butainy, Muhamad Felemban and Hamzah Luqman",
      conference: "2022 14th International Conference on Computational Intelligence and Communication Networks (CICN)",
      pages: "90-95",
      year: "2022",
      citations: 0,
      link: "#"
    },
    {
      title: "IoTZeroJar: Towards a Honeypot Architecture for Detection of Zero-Day Attacks in IoT",
      authors: "Mahmoud Ellouh, Mustafa Ghaleb and Muhamad Felemban",
      conference: "2022 14th International Conference on Computational Intelligence and Communication Networks (CICN)",
      pages: "765-771",
      year: "2022",
      citations: 9,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:_xSYboBqXhAC"
    },
    {
      title: "Lightweight File Fragments Classification using Depthwise Separable Convolution",
      authors: "Kunwar Saaim, Muhamad Felemban, Saleh Al-Saleh, Ahmed Al-Mulhem",
      conference: "37th International Conference on ICT Systems Security and Privacy Protection, IFIP SEC 2022",
      year: "2022",
      citations: 16,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:pyW8ca7W8N0C"
    },
    {
      title: "BeeCast: A Device-to-Device Collaborative Video Streaming System",
      authors: "Asaad Al-Ghamdi, Younes Balah, Mohammad Al-Bejadi, Muhamad Felemban and Y. Osais",
      conference: "2022 International Wireless Communications and Mobile Computing (IWCMC)",
      year: "2022",
      citations: 0,
      link: "#"
    },
    {
      title: "Advanced Persistent False Data Injection Attacks Against Optimal Power Flow in Power Systems",
      authors: "S. Umar, Muhamad Felemban and Y. Osais",
      conference: "2021 International Wireless Communications and Mobile Computing (IWCMC)",
      year: "2021",
      citations: 3,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:yD5IFk8b50cC"
    },
    {
      title: "BeeCast: a collaborative video streaming system",
      authors: "Asaad Alghamdi, Younes Balah, Mohammad Albejadi, and Muhamad Felemban",
      conference: "Proceedings of the 26th Annual International Conference on Mobile Computing and Networking (MobiCom 2021)",
      pages: "Article 63, 1–3",
      year: "2020",
      citations: 0,
      link: "#"
    },
    {
      title: "Challenges and opportunities for underwater sensor networks",
      authors: "AA Sheikh, E Felemban, M Felemban, SB Qaisar",
      conference: "2016 12th International Conference on Innovations in Information Technology (IIT)",
      year: "2016",
      citations: 29,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:35N4QoGY0k4C"
    },
    {
      title: "Optimal node placement in underwater wireless sensor networks",
      authors: "M Felamban, B Shihada, K Jamshaid",
      conference: "2013 IEEE 27th International Conference on Advanced Information Networking and Applications (AINA)",
      year: "2013",
      citations: 54,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:u-x6o8ySG0sC"
    },
    {
      title: "Energy-delay tradeoffs for underwater acoustic sensor networks",
      authors: "M Felemban, E Felemban",
      conference: "2013 First International Black Sea Conference on Communications and Networking (BlackSeaCom)",
      year: "2013",
      citations: 41,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:d1gkVwhDpl0C"
    }
  ];

  const thesesAndOther = [
    {
      title: "Optimal node placement in underwater acoustic sensor network",
      authors: "M Felemban",
      venue: "PhD Thesis/Research",
      year: "2011",
      citations: 14,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:u5HHmVD_uO8C"
    }
  ];

  const preprints = [
    {
      title: "File fragment classification using light-weight convolutional neural networks",
      authors: "M Ghaleb, K Saaim, M Felemban, S Al-Saleh, A Al-Mulhem",
      venue: "arXiv preprint arXiv:2305.00656",
      year: "2023",
      citations: 7,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:NhqRSupF_l8C"
    },
    {
      title: "Design and evaluation of a data partitioning-based intrusion management architecture for database systems",
      authors: "M Felemban, Y Javeed, J Kobes, T Qadah, A Ghafoor, W Aref",
      venue: "arXiv preprint arXiv:1810.02061",
      year: "2018",
      citations: 3,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:g5m5HwL7SMYC"
    }
  ];

  const renderPublicationCard = (pub: any, index: number, isJournal: boolean = true) => (
    <AcademicCard key={index} className="hover:shadow-lg transition-all duration-300">
      <AcademicCardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <AcademicCardTitle className="mb-3 leading-relaxed">
              {pub.title}
            </AcademicCardTitle>
            <AcademicCardDescription className="mb-3">
              {pub.authors}
            </AcademicCardDescription>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                {isJournal ? pub.journal : pub.conference || pub.venue}
                {pub.volume && ` ${pub.volume}`}
                {pub.issue && `(${pub.issue})`}
                {pub.pages && `, ${pub.pages}`}
                {`, ${pub.year}`}
              </p>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-xs">
                  <Award className="h-3 w-3 mr-1" />
                  {pub.citations} citations
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {pub.year}
                </Badge>
              </div>
            </div>
          </div>
          <a 
            href={pub.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-primary hover:text-primary-glow transition-smooth"
            aria-label="View publication"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </AcademicCardHeader>
    </AcademicCard>
  );

  const totalCitations = [...journalPublications, ...conferencePublications, ...preprints, ...thesesAndOther]
    .reduce((sum, pub) => sum + pub.citations, 0);

  const academicProfiles = [
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=ZyC2dJ8AAAAJ&hl=en&oi=ao",
      icon: "🎓"
    },
    {
      name: "DBLP",
      url: "https://dblp.org/pid/135/7413.html",
      icon: "📚"
    },
    {
      name: "PURE at KFUPM",
      url: "https://pure.kfupm.edu.sa/en/persons/mohammad-felemban",
      icon: "🏛️"
    },
    {
      name: "ResearchGate",
      url: "#",
      icon: "🔬"
    }
  ];

  return (
    <PageLayout 
      title="Publications"
      subtitle="Research publications in cybersecurity, privacy, and quantum computing"
    >
      {/* Academic Profiles */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Academic Profiles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <AcademicCard className="h-full text-center hover:border-primary/30 transition-smooth">
                <AcademicCardContent className="pt-6">
                  <div className="text-4xl mb-3">{profile.icon}</div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                    {profile.name}
                  </h3>
                </AcademicCardContent>
              </AcademicCard>
            </a>
          ))}
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          <AcademicCard className="text-center">
            <AcademicCardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{totalCitations}</div>
              <p className="text-sm text-muted-foreground">Total Citations</p>
            </AcademicCardContent>
          </AcademicCard>
          <AcademicCard className="text-center">
            <AcademicCardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">9</div>
              <p className="text-sm text-muted-foreground">h-index</p>
            </AcademicCardContent>
          </AcademicCard>
          <AcademicCard className="text-center">
            <AcademicCardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">9</div>
              <p className="text-sm text-muted-foreground">i10-index</p>
            </AcademicCardContent>
          </AcademicCard>
          <AcademicCard className="text-center">
            <AcademicCardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{journalPublications.length + conferencePublications.length + thesesAndOther.length}</div>
              <p className="text-sm text-muted-foreground">Publications</p>
            </AcademicCardContent>
          </AcademicCard>
        </div>
      </div>

      {/* Journal Publications */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Journal Publications</h2>
          <Badge variant="default">{journalPublications.length}</Badge>
        </div>
        <div className="space-y-6">
          {journalPublications
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((pub, index) => renderPublicationCard(pub, index, true))}
        </div>
      </div>

      {/* Conference Publications */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Conference Publications</h2>
          <Badge variant="default">{conferencePublications.length}</Badge>
        </div>
        <div className="space-y-6">
          {conferencePublications
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((pub, index) => renderPublicationCard(pub, index, false))}
        </div>
      </div>

      {/* Theses & Other Publications */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Theses & Other Publications</h2>
          <Badge variant="default">{thesesAndOther.length}</Badge>
        </div>
        <div className="space-y-6">
          {thesesAndOther
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((pub, index) => renderPublicationCard(pub, index, false))}
        </div>
      </div>

      {/* Preprints & Working Papers */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-serif font-semibold text-foreground">Preprints & Working Papers</h2>
          <Badge variant="default">{preprints.length}</Badge>
        </div>
        <div className="space-y-6">
          {preprints
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((pub, index) => renderPublicationCard(pub, index, false))}
        </div>
      </div>

      {/* Research Impact */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
          Research Impact
        </h2>
        <AcademicCard variant="highlighted">
          <AcademicCardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My research spans three critical areas in modern computing: cybersecurity, privacy-preserving 
                technologies, and quantum computing. With over {totalCitations} citations and an h-index of 9, 
                my work has made significant contributions to these rapidly evolving fields.
              </p>
              <p>
                Key research achievements include pioneering work in underwater sensor networks, developing 
                privacy-preserving federated learning systems, and advancing quantum algorithms for practical 
                applications. My publications appear in top-tier venues including IEEE Transactions, ACM 
                Transactions, and premier international conferences.
              </p>
              <p>
                Recent focus areas include post-quantum cryptography, secure machine learning, and quantum 
                computing applications for real-world problems in collaboration with industry partners like 
                Saudi Aramco.
              </p>
            </div>
          </AcademicCardContent>
        </AcademicCard>
      </div>
    </PageLayout>
  );
};

export default Publications;