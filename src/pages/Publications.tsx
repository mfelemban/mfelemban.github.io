import PageLayout from "@/components/PageLayout";
import { AcademicCard, AcademicCardContent, AcademicCardDescription, AcademicCardHeader, AcademicCardTitle } from "@/components/ui/academic-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Award } from "lucide-react";

const Publications = () => {
  const journalPublications = [
    {
      title: "Lightweight and Efficient Post Quantum Key Encapsulation Mechanism Based on Q-Problem",
      authors: "M Kara, K Karampidis, S Panagiotakis, M Hammoudeh, M Felemban, et al.",
      journal: "Electronics",
      volume: "14",
      issue: "4",
      pages: "728",
      year: "2025",
      citations: 5,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:Tiz5es2fbqcC"
    },
    {
      title: "A modelling and scheduling tool for crowd movement in complex network",
      authors: "E Felemban, FU Rehman, A Ahmad, M Felemban",
      journal: "Intelligent Automation & Soft Computing",
      volume: "31",
      issue: "3",
      year: "2022",
      citations: 3,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:D03iK_w7-QYC"
    },
    {
      title: "Rule-based detection of false data injections attacks against optimal power flow in power systems",
      authors: "S Umar, M Felemban",
      journal: "Sensors",
      volume: "21",
      issue: "7",
      pages: "2478",
      year: "2021",
      citations: 19,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:cFHS6HbyZ2cC"
    },
    {
      title: "A partition-driven integrated security architecture for cyberphysical systems",
      authors: "Y Javed, M Felemban, T Shawly, J Kobes, A Ghafoor",
      journal: "Computer",
      volume: "53",
      issue: "3",
      pages: "47-56",
      year: "2020",
      citations: 21,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:HoB7MX3m0LUC"
    },
    {
      title: "GroupCast: Preference-aware cooperative video streaming with scalable video coding",
      authors: "A Elgabli, M Felemban, V Aggarwal",
      journal: "IEEE/ACM Transactions on Networking",
      volume: "27",
      issue: "3",
      pages: "1138-1150",
      year: "2019",
      citations: 17,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:SeFeTyx0c_EC"
    },
    {
      title: "Threat management in data-centric IoT-based collaborative systems",
      authors: "M Felemban, E Felemban, J Kobes, A Ghafoor",
      journal: "ACM Transactions on Internet Technology (TOIT)",
      volume: "19",
      issue: "3",
      pages: "1-19",
      year: "2019",
      citations: 6,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:ZHo1McVdvXMC"
    },
    {
      title: "GiantClient: Video hotspot for multi-user streaming",
      authors: "A Elgabli, M Felemban, V Aggarwal",
      journal: "IEEE Transactions on Circuits and Systems for Video Technology",
      volume: "29",
      issue: "9",
      pages: "2833-2843",
      year: "2018",
      citations: 9,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:M05iB0D1s5AC"
    },
    {
      title: "A privacy mechanism for access controlled graph data",
      authors: "MU Arshad, M Felemban, Z Pervaiz, A Ghafoor, WG Aref",
      journal: "IEEE Transactions on Dependable and Secure Computing",
      volume: "16",
      issue: "5",
      pages: "819-832",
      year: "2017",
      citations: 3,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:70eg2SAEIzsC"
    },
    {
      title: "A distributed cloud architecture for mobile multimedia services",
      authors: "M Felemban, S Basalamah, A Ghafoor",
      journal: "IEEE Network",
      volume: "27",
      issue: "5",
      pages: "20-27",
      year: "2013",
      citations: 53,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:9yKSN-GCB0IC"
    }
  ];

  const conferencePublications = [
    {
      title: "Variational quantum algorithms for solving vehicle routing problem",
      authors: "M Alsaiyari, M Felemban",
      conference: "2023 International Conference on Smart Computing and Application (ICSCA)",
      pages: "1-4",
      year: "2023",
      citations: 6,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:abG-DnoFyZgC"
    },
    {
      title: "Light-weight file fragments classification using depthwise separable convolutions",
      authors: "KM Saaim, M Felemban, S Alsaleh, A Almulhem",
      conference: "IFIP International Conference on ICT Systems Security and Privacy Protection",
      year: "2022",
      citations: 16,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:pyW8ca7W8N0C"
    },
    {
      title: "IoTZeroJar: Towards a honeypot architecture for detection of zero-day attacks in IoT",
      authors: "M Ellouh, M Ghaleb, M Felemban",
      conference: "2022 14th international conference on computational intelligence and communication networks (CICN)",
      year: "2022",
      citations: 9,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:_xSYboBqXhAC"
    },
    {
      title: "Quantum image classification on NISQ devices",
      authors: "S Al-Ogbi, A Ashour, M Felemban",
      conference: "2022 14th International Conference on Computational Intelligence and Communication Networks (CICN)",
      year: "2022",
      citations: 4,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:b0M2c_1WBrUC"
    },
    {
      title: "Advanced persistent false data injection attacks against optimal power flow in power systems",
      authors: "S Umar, M Felemban, Y Osais",
      conference: "2021 International Wireless Communications and Mobile Computing (IWCMC)",
      pages: "469-474",
      year: "2021",
      citations: 3,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZyC2dJ8AAAAJ&citation_for_view=ZyC2dJ8AAAAJ:yD5IFk8b50cC"
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

  return (
    <PageLayout 
      title="Publications"
      subtitle="Research publications in cybersecurity, privacy, and quantum computing"
    >
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