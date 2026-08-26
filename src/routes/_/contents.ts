export const CONTENT = {
  site: {
    title: "Moch. Nafkhan Alzamzami, S.T., M.T. — Assistant Professor of Informatics",
    description:
      "Moch. Nafkhan Alzamzami, Assistant Professor of Informatics. Research in distributed systems, discipline in practice.",
  },

  nav: {
    mark: "Nafkhan",
    markSuffix: "— NZ",
    links: [
      {label: "About", href: "#about"},
      {label: "Research", href: "#research"},
      {label: "Publications", href: "#publications"},
      {label: "Field Notes", href: "#notes"},
      {label: "Teaching", href: "#teaching"},
      {label: "Contact", href: "#contact"},
    ],
  },

  hero: {
    eyebrow: "Assistant Professor · Informatics",
    name: "Moch. Nafkhan Alzamzami",
    role: "I work at the intersection of natural language processing, privacy-preserving machine learning, and the software systems that put them to use — cross-lingual parsing, federated learning, and the tooling that carries research into production.",
    quoteLatin: '"Non multa, sed multum."',
    quoteEnglish: "Not many things, but much of one thing.",
    primaryCta: {label: "View Publications", href: "#publications"},
    secondaryCta: {label: "Download CV", href: "https://storage.nafkhanzam.com/cv.pdf"},
    portraitInitials: "NZ",
  },

  about: {
    marginalia: "On steady work",
    paragraphs: [
      "I am an Assistant Professor in the Department of Informatics at Institut Teknologi Sepuluh Nopember. My work sits at the intersection of natural language processing, applied machine learning, and the software systems that put them to use.",
      "I hold a bachelor's (S.T.) and master's (M.T.) from Institut Teknologi Bandung and joined the faculty straight from my master's. I've always been drawn to the unglamorous middle of engineering: not the launch, but the years of maintenance and judgment that follow it.",
      "Alongside research, I teach introductory and advanced undergraduate courses, and I try to bring the same principle to both: build things that are honest about their limits.",
    ],
    stats: [
      {num: "7+", label: "Publications"},
      {num: "3+", label: "Active Grants"},
      {num: "0", label: "Graduate Students"},
      {num: "10+", label: "Courses Taught"},
    ],
  },

  research: {
    marginalia: "Three lines of inquiry",
    items: [
      {
        index: "01 / NLP & IMAGE PROCESSING",
        title: "Text & Visual Understanding",
        body: "Cross-lingual Abstract Meaning Representation parsing, aspect-based sentiment and sarcasm detection in text, and vision-transformer approaches to image steganography.",
      },
      {
        index: "02 / FEDERATED LEARNING & HOMOMORPHIC ENCRYPTION",
        title: "Privacy-Preserving Machine Learning",
        body: "Training and evaluating models without centralizing raw data — federated learning across distributed clients, and computation over encrypted data via homomorphic encryption.",
      },
      {
        index: "03 / SOFTWARE & INFORMATION SYSTEMS",
        title: "Tooling, Retrieval & Forensics",
        body: "Systems-facing work: a GraphQL code-generation tool for CRUD and access control, a contextual researcher-recommender system, Android forensic timeline extraction, and optimization for supply selection.",
      },
    ],
  },

  publications: {
    marginalia: "Ordered by year",
    items: [
      {
        year: "2025",
        title:
          "Findme-scholar: A Contextual Researcher Recommender System for Enhancing Research Collaboration Using Adaptive Topic Interest Area Modelling",
        venue: "MethodsX, vol. 15, p. 103583",
        tag: "Journal",
        href: "https://doi.org/10.1016/j.mex.2025.103583",
      },
      {
        year: "2024",
        title:
          "Abstract Meaning Representation Parser Development for Cross-lingual Indonesian-English with BART, Input Concatenation, and Dataset Augmentation",
        venue:
          "International Journal on Electrical Engineering and Informatics, vol. 16, no. 4, pp. 584–603",
        tag: "Journal",
        href: "https://doi.org/10.15676/ijeei.2024.16.4.5",
      },
      {
        year: "2022",
        title:
          "GraphQL-based Backend Service Development Tool for CRUD Operations, Authentication, and Authorization",
        venue: "2022 International Conference on Data and Software Engineering (ICoDSE), pp. 77–82",
        tag: "Conference",
        href: "https://doi.org/10.1109/ICoDSE56892.2022.9971818",
      },
    ],
  },

  notes: {
    marginalia: "Private reflections, made public",
    intro:
      "Marcus Aurelius wrote the Meditations to no one but himself — a discipline of thinking clearly before acting. These are shorter versions of the same habit, kept in the course of research and teaching.",
    items: [
      {
        mark: "I",
        text: "A system that cannot say how it fails has not really been designed — it has only been assembled.",
        gloss: "On reviewing a student's thesis draft that had no failure-mode section.",
      },
      {
        mark: "II",
        text: "The paper you are proudest of is rarely the one that was easiest to write.",
        gloss: "After a third revision of the OSDI submission.",
      },
      {
        mark: "III",
        text: "Teach the failure before the success. Students remember what breaks longer than what works.",
        gloss: "Lecture note, Systems Design, Week 4.",
      },
      {
        mark: "IV",
        text: "Peer review is not an obstacle to the work. It is, inconveniently, part of the work.",
        gloss: "On receiving reviewer #2.",
      },
    ],
  },

  teaching: {
    marginalia: "Fall 2024 – present",
    courses: [
      {
        code: "PBKK",
        term: "SINCE FALL 2025",
        title: "Framework-Based Programming",
        body: "Undergraduate course on modern web application frameworks — architecture patterns, routing, and state management — taught each fall since 2025.",
      },
      {
        code: "SISJAR",
        term: "SINCE FALL 2025",
        title: "Operating Systems & Computer Networks",
        body: "Combined undergraduate course spanning OS internals and the networking fundamentals that connect them, taught each fall since 2025.",
      },
      {
        code: "JARKOM",
        term: "SINCE FALL 2024",
        title: "Computer Networks",
        body: "Undergraduate course on network architecture and protocols, with an emphasis on how machines actually talk to each other. Taught every fall since 2024.",
      },
      {
        code: "SISDIG",
        term: "SINCE FALL 2024",
        title: "Digital Systems",
        body: "First-year foundations course on logic gates, combinational and sequential circuits, and the hardware basis of computation. Taught every fall since 2024.",
      },
      {
        code: "PROGJAR",
        term: "SPRING 2025 – 2026",
        title: "Network Programming",
        body: "Undergraduate course on socket programming and network application design, taught each spring since 2025.",
      },
      {
        code: "ORKOM",
        term: "SPRING 2025 – 2026",
        title: "Computer Organization",
        body: "Undergraduate course on processor architecture and the hardware-software boundary, taught each spring since 2025.",
      },
      {
        code: "SISOP",
        term: "FALL 2024 – SPRING 2026",
        title: "Operating Systems",
        body: "Core undergraduate course on processes, memory management, and scheduling, taught across six sections between 2024 and 2026.",
      },
      {
        code: "PWEB",
        term: "FALL 2024",
        title: "Web Programming",
        body: "Undergraduate course on the fundamentals of web application development.",
      },
      {
        code: "DASPRO",
        term: "FALL 2024",
        title: "Introduction to Programming",
        body: "First-year foundations course introducing programming logic and syntax.",
      },
      {
        code: "PBO",
        term: "FALL 2024",
        title: "Object-Oriented Programming",
        body: "Undergraduate course on object-oriented design principles and patterns.",
      },
    ],
  },

  contact: {
    quoteLatin:
      '"You have power over your mind — not outside events. Realize this, and you will find strength."',
    quoteAttribution: "Marcus Aurelius, Meditations",
    links: [
      {label: "Email", href: "mailto:nafkhan@its.ac.id"},
      {label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=58044883300"},
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=G4Fe6dYAAAAJ&hl=en",
      },
      {label: "GitHub", href: "https://github.com/nafkhanzam"},
      {label: "LinkedIn", href: "https://www.linkedin.com/in/nafkhanzam/"},
      {label: "Curriculum Vitae", href: "https://storage.nafkhanzam.com/cv.pdf"},
    ],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Moch. Nafkhan Alzamzami. Department of Informatics, Institut Teknologi Sepuluh Nopember.`,
    tagline: "Built with discipline.",
  },
};
