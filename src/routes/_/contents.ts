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
      {label: "Education", href: "#education"},
      {label: "Research", href: "#research"},
      {label: "Projects", href: "#projects"},
      {label: "Publications", href: "#publications"},
      {label: "Field Notes", href: "#notes"},
      {label: "Teaching", href: "#teaching"},
      {label: "Contact", href: "#contact"},
    ],
  },

  hero: {
    eyebrow: "Assistant Professor · Informatics",
    name: "Moch. Nafkhan Alzamzami",
    role: "I work at the intersection of natural language processing, privacy-preserving machine learning, and the software systems that put them to use — cross-lingual parsing, federated learning, homomorphic inference, and the tooling that carries research into production.",
    quoteLatin: '"Non unum, sed multa."',
    quoteEnglish: "Not one thing, but many.",
    primaryCta: {label: "View Publications", href: "#publications"},
    secondaryCta: {label: "Download CV", href: "https://storage.nafkhanzam.com/cv.pdf"},
    portraitInitials: "NZ",
  },

  about: {
    marginalia: "On steady work",
    paragraphs: [
      "I am an Assistant Professor in the Department of Informatics at Institut Teknologi Sepuluh Nopember. My work sits at the intersection of natural language processing, privacy-preserving machine learning, and the software systems that put them to use.",
      "I hold a bachelor's (S.T.) and master's (M.T.) from Institut Teknologi Bandung and joined the faculty straight from my master's. What draws me to engineering is the problem-solving itself: breaking a hard, ambiguous problem down until it has an honest solution.",
      "Alongside research, I teach introductory and undergraduate courses and still compete in competitive programming — the same discipline of solving hard problems under constraints, just for its own sake.",
    ],
    stats: [
      {num: "7+", label: "Publications"},
      {num: "7+", label: "Projects"},
      {num: "10+", label: "Courses Taught"},
    ],
  },

  education: {
    marginalia: "On the way to Ph.D.",
    items: [
      {
        logo: "/education/itb.svg",
        institution: "Institut Teknologi Bandung",
        degree: "Master's Degree in Informatics",
        gpa: {score: "3.89", scale: "4.00"},
        period: "2022 - 2023",
        details: [
          {label: "Submajor", value: "Intelligent System"},
          {
            label: "Focuses",
            value: "Artificial Intelligence, Deep Learning, Natural Language Processing",
          },
          {
            label: "Thesis",
            value:
              "Abstract Meaning Representation Parser Development for Cross-lingual Indonesian-English with BART, Input Concatenation, and Dataset Augmentation",
          },
        ],
      },
      {
        logo: "/education/itb.svg",
        institution: "Institut Teknologi Bandung",
        degree: "Bachelor's Degree in Informatics Engineering",
        gpa: {score: "3.74", scale: "4.00"},
        period: "2018 - 2022",
        details: [
          {
            label: "Focuses",
            value: "Artificial Intelligence, Database, Software Development",
          },
          {
            label: "Final Project",
            value:
              "GraphQL-based Backend Service Development Tool for CRUD Operations, Authentication, and Authorization",
          },
        ],
      },
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
        index: "02 / PRIVACY-PRESERVING ML",
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

  projects: {
    marginalia: "Selected builds",
    items: [
      {
        thumb: "/projects/NZXam.png",
        year: "2026",
        tags: ["Web", "Education"],
        title: "NZXam",
        summary:
          "A classroom platform for managing classes, assignments, quizzes, and grades in one place.",
        description: [
          "NZXam is a classroom platform that brings class management, assignments, quizzes, and grading into a single system.",
          "It gives instructors a consistent workflow for running a course end to end, from posting assignments and quizzes to tracking and recording student grades.",
        ],
      },
      {
        thumb: "/projects/myif-monev.png",
        year: "2025",
        tags: ["Web", "Monitoring"],
        title: "MyIF Monev",
        summary:
          "A monitoring system for student internship and enrichment programs at the Department of Informatics, ITS.",
        description: [
          "MyIF Monev is a monitoring system built for the Department of Informatics at Institut Teknologi Sepuluh Nopember, tracking students through internship (magang) and independent-study enrichment programs.",
          "It gives program coordinators visibility into student progress and status across placements, replacing scattered manual tracking with a single system of record.",
        ],
        href: "https://myif-monev.nafkhan.id/",
      },
      {
        thumb: "/projects/omr-exam.png",
        year: "2024",
        tags: ["Web", "Computer Vision"],
        title: "OMR Exam",
        summary:
          "A web application that automates the grading of multiple-choice exams using a camera.",
        description: [
          "OMR Exam is a web application for automated grading of multiple-choice exams via optical mark recognition, using a camera to capture answer sheets instead of a dedicated scanner.",
          "It detects and reads filled-in answer bubbles from the captured image, scores each sheet against an answer key, and removes the manual work of correcting exams by hand.",
        ],
      },
      {
        thumb: "/projects/aotnorequiem.png",
        year: "2022",
        tags: ["Fiction", "Fanfiction"],
        title: "AoT no Requiem",
        summary:
          "A work of Attack on Titan fanfiction that departs from the original story enough to stand on its own.",
        description: [
          "AoT no Requiem is a fanfiction project set in the world of Attack on Titan, appropriating only the concept of the original characters and plot — no direct asset-borrowing — and diverging enough from the source story to be its own work rather than a redraw.",
          "It is non-commercial and made under fair use.",
        ],
        href: "https://www.aotnorequiem.com/",
      },
    ],
  },

  publications: {
    marginalia: "Ordered by year",
    viewAllHref: "https://scholar.google.com/citations?user=G4Fe6dYAAAAJ&hl=en",
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
    marginalia: "Borrowed wisdom",
    intro:
      "The Stoics wrote to steady their own thinking before acting, not to be quoted centuries later. These are the lines I return to most, in research and in teaching alike.",
    items: [
      {
        mark: "I",
        text: "Happiness is possible even in a palace.",
        gloss: "Marcus Aurelius, Meditations",
      },
      {
        mark: "II",
        text: "It's not what happens to you, but how you react to it that matters.",
        gloss: "Epictetus, Enchiridion",
      },
      {
        mark: "III",
        text: "The impediment to action advances action. What stands in the way becomes the way.",
        gloss: "Marcus Aurelius, Meditations",
      },
      {
        mark: "IV",
        text: "We suffer more often in imagination than in reality.",
        gloss: "Seneca, Letters from a Stoic",
      },
      {
        mark: "V",
        text: "Waste no more time arguing what a good man should be. Be one.",
        gloss: "Marcus Aurelius, Meditations",
      },
      {
        mark: "VI",
        text: "The best revenge is not to be like your enemy.",
        gloss: "Marcus Aurelius, Meditations",
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
      {
        code: "AP CSA",
        term: "2024",
        title: "AP Computer Science A",
        body: "Advanced Placement course covering Java-based object-oriented programming, data structures, and algorithms at the college level.",
      },
    ],
  },

  contact: {
    quoteLatin:
      "\"Stop complaining, because there are only two kinds of things: those you can control and those you can't. If you can't control it, complaining about it is just a waste of time — what is there to discuss about something you can't control? If you can control it — like your intentions, your attitude, and your actions — who else are you expecting to help you but yourself? Stop complaining about that too.\"",
    quoteAttribution: "Prof. Michael Sugrue, Marcus Aurelius' Meditations: The Stoic Ideal",
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
    tagline: "NZ",
  },
};
