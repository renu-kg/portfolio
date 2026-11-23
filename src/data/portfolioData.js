// Centralized Verified Portfolio Data for Renu K G

export const personalInfo = {
  name: "Renu K G",
  degree: "B.E. Computer Science & Engineering",
  college: "Bapuji Institute of Engineering and Technology, Davanagere",
  semester: "7th Semester",
  graduationYear: "2027",
  cgpa: "9.41",
  pucPercentage: "94.33%",
  sslcPercentage: "96.16%",
  location: "Davanagere, Karnataka, India",
  availabilityStatus: "Software Development Intern @ Atlas Systems",
  tagline: "Computer Science Engineering Student — Building with Java, software and AI.",
  aboutBrief: "Computer Science Engineering student focused on software development, Java systems, and data-driven applications, currently interning at Atlas Systems.",
  email: "kgrenu1@gmail.com",
  github: "https://github.com/renu-kg",
  linkedin: "https://www.linkedin.com/in/renu-k-g-9aaa152a/",
  leetcode: "https://leetcode.com/u/Renu_K_G/",
  artPortfolio: "https://renu-art-portfolio.netlify.app/",
  profileImage: "/images/profile.jpeg",
  resumePath: "/resume.pdf"
};

export const heroPositioning = {
  headline: "Computer Science Engineering Student",
  supportingLine: "Building with Java, software and AI.",
  description: "7th Semester student at Bapuji Institute of Engineering and Technology, Davanagere (CGPA 9.41) and Software Development Intern at Atlas Systems. Focused on software development, Java systems, BI/ETL workflows, and practical AI applications.",
  primaryCTA: { label: "View Selected Work", target: "#projects" },
  secondaryCTA: { label: "Download Resume", href: "/resume.pdf" }
};

export const aboutContent = {
  sectionTitle: "About Me",
  paragraphs: [
    "I’m a Computer Science Engineering student interested in building practical software systems across Java, web development, AI/ML, and data-driven applications.",
    "I enjoy turning ideas into working systems — from AI-powered study tools and database applications to algorithmic optimization projects. Alongside development, I explore drawing and visual storytelling through pencil and ink."
  ]
};

export const selectedProjects = [
  {
    id: "project-1",
    title: "Goal-Oriented Virtual Study Assistant",
    subtitle: "AI-Powered Learning & Study Assistant",
    type: "Academic Mini Project / Team Project",
    status: "Completed",
    featured: true,
    accentColor: "blue",
    badgeText: "Featured Project · AI / RAG",
    description: "AI study assistant using RAG over uploaded documents to explain concepts, generate quizzes, and track study milestones.",
    keyCapabilities: [
      "Personalized study plan creation based on goals, deadlines, and study time",
      "Concept explanations using RAG on user-uploaded document materials",
      "Automated quiz generation and interactive performance tracking",
      "Weak area identification with smart revision and task reminders"
    ],
    techStack: ["Python", "Streamlit", "LangChain", "FAISS", "Groq LLM", "JSON Storage"],
    coreConcepts: ["Document Processing", "Vector Search", "RAG", "LLM Grounding", "End-to-End AI Application"],
    images: [
      {
        src: "/images/projects/study_assistant_1.jpg",
        alt: "AI Study Assistant interactive Q&A and concept explanation interface",
        caption: "AI Assistant Q&A Interface"
      },
      {
        src: "/images/projects/study_assistant_2.jpg",
        alt: "Study material document upload, RAG vector chunking, and quiz generation",
        caption: "RAG Document Processing & Quiz Hub"
      }
    ],
    links: {
      github: "https://github.com/renu-kg/study-assistant",
      linkedin: "",
      demo: ""
    }
  },
  {
    id: "project-2",
    title: "Personal Budget & Expense Tracker",
    subtitle: "Web-Based Personal Finance & Expense Management",
    type: "DBMS Mini Project",
    status: "Completed",
    featured: false,
    accentColor: "sage",
    badgeText: "DBMS Mini Project",
    description: "Web-based personal finance tracker for logging transactions, monitoring category spending, and managing budget limits using MySQL.",
    keyCapabilities: [
      "Record daily expenses and manage budget limits",
      "Structured database connectivity and form handling",
      "Store and retrieve financial data using MySQL"
    ],
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
    coreConcepts: ["Web Development", "Database Management", "Form Handling"],
    images: [
      {
        src: "/images/projects/expense_tracker_1.jpg",
        alt: "Expense management dashboard displaying transaction records and categories",
        caption: "Expense Records & Category Management"
      },
      {
        src: "/images/projects/expense_tracker_2.jpg",
        alt: "Budget limits and monthly financial allocation tracking",
        caption: "Monthly Budget Tracking & Allocations"
      }
    ],
    links: {
      github: "https://github.com/renu-kg/budget-expense-tracker",
      linkedin: "",
      demo: ""
    }
  },
  {
    id: "project-3",
    title: "Global Debt Settlement Optimizer",
    subtitle: "Algorithmic Transaction Minimization System",
    type: "Personal Project / Training Assignment",
    status: "Completed",
    featured: false,
    accentColor: "lavender",
    badgeText: "Algorithms & DSA",
    description: "Algorithmic cashflow settlement system built during Visa / TOP training, using greedy optimization to minimize peer-to-peer transactions.",
    keyCapabilities: [
      "Creditor and debtor settlement optimization logic",
      "Greedy algorithm approach to minimize transaction count",
      "Multi-currency support and transaction fee handling"
    ],
    techStack: ["C", "Data Structures", "Greedy Algorithms"],
    coreConcepts: ["Algorithmic Problem Solving", "Greedy Logic", "Data Structures"],
    images: [
      {
        src: "/images/projects/debt_optimizer_1.png",
        alt: "Algorithmic greedy cashflow minimization terminal execution",
        caption: "Greedy Cashflow Minimization Execution"
      },
      {
        src: "/images/projects/debt_optimizer_2.png",
        alt: "Multi-currency debt settlement with transaction fee handling",
        caption: "Multi-Currency Settlement & Fee Handling"
      }
    ],
    links: {
      github: "https://github.com/renu-kg/global-debt-settlement-optimizer",
      linkedin: "",
      demo: ""
    }
  },
  {
    id: "project-4",
    title: "Edge-AI Enabled Chest X-ray Classification",
    subtitle: "Deep Learning Pathology Detection on Resource-Constrained Devices",
    type: "Academic Major Project",
    status: "Currently Building",
    featured: false,
    accentColor: "peach",
    badgeText: "In Progress · Major Project",
    description: "Deep learning system using CNN transfer learning to detect pneumonia in chest X-rays, optimized for local offline inference on edge hardware.",
    keyCapabilities: [
      "CNN-based classification & transfer learning architecture comparison",
      "Model selection and optimization for resource-constrained edge devices",
      "Local offline inference addressing latency and patient privacy considerations"
    ],
    techStack: ["Python", "PyTorch / TensorFlow", "CNNs", "Transfer Learning", "Edge AI"],
    coreConcepts: ["Deep Learning", "Edge AI", "Computer Vision", "Model Optimization"],
    images: [
      {
        src: "/images/projects/edge_ai_1.jpg",
        alt: "Edge-AI chest X-ray classification architecture and transfer learning pipeline",
        caption: "Edge-AI Architecture & Quantization Pipeline",
        objectFit: "contain"
      },
      {
        src: "/images/projects/edge_ai_2.jpg",
        alt: "Offline edge inference UI detecting pneumonia with confidence metrics",
        caption: "Edge Inference UI & Diagnostic Confidence",
        objectFit: "contain"
      }
    ],
    links: {
      github: "",
      linkedin: "",
      demo: ""
    }
  }
];

export const categorizedOtherProjects = [
  {
    categoryTitle: "AI, Deep Learning & Generative Models",
    categoryKey: "ai-dl-generative",
    projects: [
      {
        id: "deeplearn-1",
        title: "AI Skill Analyzer — UptoSkills",
        description: "FastAPI backend evaluating intern CSV data with Gemini AI to generate automated feedback reports.",
        techStack: ["Python", "FastAPI", "Gemini AI", "MongoDB Atlas"],
        links: {
          github: "https://github.com/renu-kg/AI-Skill-Analyzer-UptoSkills",
          demo: "",
          linkedin: ""
        }
      },
      {
        id: "genai-group",
        title: "Prodigy InfoTech — Generative AI Tasks",
        description: "Hands-on generative tasks exploring Markov chains, GPT-2 fine-tuning, SDXL, and style transfer.",
        techStack: ["Python", "PyTorch", "Diffusers", "Transformers"],
        taskLinks: [
          { label: "Task 01 ↗", url: "https://github.com/renu-kg/PRODIGY_GA_01" },
          { label: "Task 02 ↗", url: "https://github.com/renu-kg/PRODIGY_GA_02" },
          { label: "Task 03 ↗", url: "https://github.com/renu-kg/PRODIGY_GA_03" },
          { label: "Task 05 ↗", url: "https://github.com/renu-kg/PRODIGY_GA_05" }
        ]
      }
    ]
  },
  {
    categoryTitle: "Algorithms & Systems",
    categoryKey: "algorithms-systems",
    projects: [
      {
        id: "algo-1",
        title: "Dynamic Video Streaming Optimizer",
        description: "Algorithmic chunk delivery using dynamic bitrate allocation strategies.",
        techStack: ["C", "DSA", "Optimization"],
        links: {
          github: "https://github.com/renu-kg/dynamic-video-streaming-optimizer",
          demo: "",
          linkedin: ""
        }
      },
      {
        id: "algo-2",
        title: "Distributed Server Load Balancer",
        description: "System load balancer distributing incoming traffic across server clusters.",
        techStack: ["C", "DSA", "Load Balancing"],
        links: {
          github: "https://github.com/renu-kg/distributed-server-load-balancer-optimizer",
          demo: "",
          linkedin: ""
        }
      },
      {
        id: "algo-3",
        title: "Heap Parking Allocator",
        description: "Memory-efficient parking allocation system using min/max heaps.",
        techStack: ["C", "DSA", "Heaps"],
        links: {
          github: "https://github.com/renu-kg/heap-parking-allocator",
          demo: "",
          linkedin: ""
        }
      }
    ]
  },
  {
    categoryTitle: "Web & Interactive Utilities",
    categoryKey: "web-interactive",
    projects: [
      {
        id: "web-1",
        title: "Register Validation Form",
        description: "Responsive registration interface with real-time input validation.",
        techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        links: {
          github: "https://github.com/renu-kg/Register-validation-form",
          demo: "https://register-validation-form.netlify.app/",
          linkedin: ""
        }
      },
      {
        id: "web-2",
        title: "My Todo List",
        description: "Task manager with local persistence and status toggling.",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: {
          github: "https://github.com/renu-kg/My-Todo-List",
          demo: "https://renu-todo-list.netlify.app/",
          linkedin: ""
        }
      },
      {
        id: "web-3",
        title: "Simple Calculator",
        description: "Responsive calculator for arithmetic and percentage calculations.",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: {
          github: "https://github.com/renu-kg/Simple-Calculator",
          demo: "https://calculator-renukg.netlify.app/",
          linkedin: ""
        }
      },
      {
        id: "web-4",
        title: "Login Page Practice",
        description: "Clean responsive authentication form layout and input styling.",
        techStack: ["HTML", "CSS"],
        links: {
          github: "https://github.com/renu-kg/loginPagePractice",
          demo: "",
          linkedin: ""
        }
      },
      {
        id: "web-5",
        title: "Tic-Tac-Toe",
        description: "Two-player browser game with turn and win detection logic.",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: {
          github: "https://github.com/renu-kg/Tic-Tac-Toe",
          demo: "https://renu-kg.github.io/Tic-Tac-Toe/",
          linkedin: ""
        }
      },
      {
        id: "web-6",
        title: "Rock Paper Scissors",
        description: "Interactive browser game with computer move selection and score tracker.",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: {
          github: "https://github.com/renu-kg/Rock-Paper-Scissors",
          demo: "https://renu-kg.github.io/Rock-Paper-Scissors/",
          linkedin: ""
        }
      },
      {
        id: "web-7",
        title: "Currency Converter",
        description: "Real-time exchange rate calculation utility for foreign currencies.",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: {
          github: "https://github.com/renu-kg/Currency-converter",
          demo: "",
          linkedin: ""
        }
      }
    ]
  }
];

export const experienceEntries = [
  {
    id: "exp-atlas",
    role: "Software Development Intern",
    organization: "Atlas Systems",
    duration: "05 Oct 2026 – Present",
    location: "Bengaluru, Karnataka, India",
    status: "Ongoing",
    badgeColor: "blue",
    responsibilities: [
      "Working on enterprise software development and understanding real-world application architecture.",
      "Exploring Business Intelligence (BI) and ETL (Extract, Transform, Load) workflows for enterprise data processing and analytics.",
      "Learning about data engineering technologies, including StarRocks, and their potential applications in enterprise systems.",
      "Collaborating with mentors and team members to understand requirements, investigate technical solutions, and contribute to assigned development tasks."
    ],
    links: {
      github: "",
      linkedin: "",
      demo: ""
    }
  },
  {
    id: "exp-1",
    role: "Team Lead — Deep Learning / AI/ML Domain",
    organization: "UptoSkills",
    duration: "18 Apr 2026 – 18 Jul 2026",
    badgeColor: "sage",
    responsibilities: [
      "Mentoring AI/ML interns across technical tasks and project workflows",
      "Coordinating project work, reviewing submissions, and conducting technical discussions",
      "Guiding interns on RAG-based applications, APIs, databases, and AI workflows",
      "Evaluating project presentations and providing constructive feedback with mentors"
    ],
    certificateImage: "/images/certificates/uptoskills-certificate.jpg",
    certificateTitle: "UptoSkills Certificate of Internship Completion (Deep Learning Team Lead)",
    links: {
      github: "",
      linkedin: "https://lnkd.in/p/gaQ4753u",
      demo: ""
    }
  },
  {
    id: "exp-2",
    role: "Generative AI Intern",
    organization: "Prodigy InfoTech",
    duration: "15 Sep 2025 – 15 Oct 2025",
    badgeColor: "blue",
    responsibilities: [
      "Text Generation with Markov Chains: Statistical text generation trained on Shakespeare texts",
      "Fine-Tuning GPT-2: Fine-tuned GPT-2 on the literary works of H.P. Lovecraft",
      "Image Generation with Stable Diffusion XL: Explored text-to-image generation and prompting",
      "Neural Style Transfer: Combined image content representations with artistic styles"
    ],
    certificateImage: "/images/certificates/prodigy-generative-ai.jpg",
    certificateTitle: "Prodigy InfoTech Certificate of Completion (Generative AI)",
    links: {
      github: "",
      linkedin: "https://lnkd.in/p/g_QQcd8t",
      demo: ""
    }
  },
  {
    id: "exp-3",
    role: "Web Development Intern",
    organization: "Placemantra",
    duration: "01 Apr 2025 – 01 Jun 2025",
    badgeColor: "lavender",
    responsibilities: [
      "Built and deployed responsive web projects using HTML, CSS, JavaScript, and Bootstrap",
      "Form Validation project: Built responsive registration form with real-time validation",
      "Calculator Web App: Built responsive calculator for basic calculations and percentages",
      "Earned Internship Certificate, Industrial Training Certificate, and Letter of Recommendation"
    ],
    certificateImage: "/images/certificates/placemantra-web-development.png",
    certificateTitle: "Placemantra Certificate of Internship (Web Development)",
    links: {
      github: "",
      linkedin: "https://lnkd.in/p/gKFwHDDQ",
      demo: ""
    }
  }
];

export const certificatesData = [
  {
    id: "cert-uptoskills",
    title: "Certificate of Internship Completion — Deep Learning Team Lead",
    organization: "UptoSkills",
    date: "18 Apr 2026 – 18 Jul 2026",
    year: "2026",
    credentialId: "US-INT-2026-KD24S2X",
    image: "/images/certificates/uptoskills-certificate.jpg",
    badgeColor: "sage"
  },
  {
    id: "cert-prodigy",
    title: "Certificate of Completion — Generative AI Intern",
    organization: "Prodigy InfoTech",
    date: "15 Sep 2025 – 15 Oct 2025",
    year: "2025",
    credentialId: "CIN: PIT/SEP25/10422",
    image: "/images/certificates/prodigy-generative-ai.jpg",
    badgeColor: "blue"
  },
  {
    id: "cert-placemantra",
    title: "Certificate of Internship — Web Development",
    organization: "Placemantra",
    date: "01 Apr 2025 – 01 Jun 2025",
    year: "2025",
    credentialId: "042025CWB1078",
    image: "/images/certificates/placemantra-web-development.png",
    badgeColor: "lavender"
  },
  {
    id: "cert-oracle",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    organization: "Oracle University",
    date: "30 Oct 2025",
    year: "2025",
    credentialId: "323482188OCI25AICFA",
    image: "/images/certificates/oracle-ai-foundations.jpg",
    badgeColor: "peach"
  },
  {
    id: "cert-nxtwave",
    title: "Certificate of Participation — Generative AI Workshop",
    organization: "NxtWave",
    date: "13 Mar 2025",
    year: "2025",
    credentialId: "Workshop by Mr. Abhinav Devaguptapu",
    image: "/images/certificates/nxtwave-generative-ai.png",
    badgeColor: "blue"
  }
];

export const skillsGrouped = [
  {
    category: "Programming Languages",
    icon: "💻",
    isPrimary: true,
    accent: "lavender",
    skills: [
      { name: "Java", isPrimary: true, icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "C", icon: "⚡" },
      { name: "JavaScript", icon: "🌐" }
    ]
  },
  {
    category: "AI, ML & Deep Learning",
    icon: "🧠",
    accent: "peach",
    skills: [
      { name: "LangChain", icon: "🤖" },
      { name: "RAG Architecture", icon: "⚡" },
      { name: "FAISS Vector Search", icon: "🔍" },
      { name: "PyTorch & CNNs", icon: "🔥" },
      { name: "Google Gemini AI", icon: "✨" },
      { name: "Groq LLM", icon: "💬" },
      { name: "Stable Diffusion XL", icon: "🎨" },
      { name: "GPT-2", icon: "📝" }
    ]
  },
  {
    category: "Web Technologies",
    icon: "🌐",
    accent: "blue",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript (ES6+)", icon: "⚡" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "PHP", icon: "🐘" },
      { name: "FastAPI / REST APIs", icon: "🚀" }
    ]
  },
  {
    category: "Databases & Data Engineering",
    icon: "🗄️",
    accent: "sage",
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "SQL", icon: "📊" },
      { name: "MongoDB Atlas", icon: "🍃" },
      { name: "StarRocks (ETL/BI)", icon: "⭐" },
      { name: "PostgreSQL", icon: "🐘" }
    ]
  },
  {
    category: "Developer Tools & Cloud",
    icon: "🛠️",
    accent: "yellow",
    skills: [
      { name: "Git", icon: "🐙" },
      { name: "GitHub", icon: "🐙" },
      { name: "Streamlit", icon: "⚡" },
      { name: "AWS (Basics)", icon: "☁️" },
      { name: "VS Code", icon: "💻" },
      { name: "Linux", icon: "🐧" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "📚",
    accent: "mint",
    skills: [
      { name: "OOP (Object-Oriented Design)", icon: "🧩" },
      { name: "Data Structures & Algorithms", icon: "⚡" },
      { name: "DBMS", icon: "🗄️" },
      { name: "Operating Systems", icon: "💻" },
      { name: "Computer Networks", icon: "🌐" }
    ]
  }
];

export const educationData = {
  degree: "B.E. Computer Science & Engineering",
  institution: "Bapuji Institute of Engineering and Technology, Davanagere",
  period: "2023 – 2027",
  semester: "7th Semester",
  cgpa: "9.41",
  cgpaLabel: "CGPA",
  pucScore: "94.33%",
  sslcScore: "96.16%",
  certifications: [
    { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", year: "2025" },
    { title: "MongoDB Basics for Students", issuer: "MongoDB", year: "2024" },
    { title: "Java, Python and Cloud Fundamentals", issuer: "Infosys Springboard", year: "2024" }
  ],
  activities: [
    { type: "Hackathons & Activities", items: ["Smart India Hackathon", "EY Hackathon", "Generative AI Hackathons"] },
    { type: "Workshops & Bootcamps", items: ["Computer Networks Bootcamp", "Generative AI Workshop"] }
  ]
};

export const currentlyLearning = [
  {
    id: "focus-atlas",
    topic: "Business Intelligence & Enterprise ETL",
    icon: "📊",
    badgeText: "Atlas Systems Focus",
    badgeColor: "sage",
    featured: true,
    description: "Enterprise data pipelines, ETL architectures, and high-performance analytics data warehousing with StarRocks at Atlas Systems.",
    tags: ["StarRocks", "ETL Pipelines", "Enterprise Analytics"]
  },
  {
    id: "focus-java",
    topic: "Java & Enterprise Systems",
    icon: "☕",
    badgeText: "Primary Focus",
    badgeColor: "lavender",
    featured: false,
    description: "Deepening core Java ecosystem knowledge, OOP design principles, Collections framework, and scalable backend architecture.",
    tags: ["Core Java", "OOP", "Backend Design"]
  },
  {
    id: "focus-aiml",
    topic: "AI/ML & Agentic Architectures",
    icon: "✨",
    badgeText: "Generative AI",
    badgeColor: "blue",
    featured: false,
    description: "Exploring RAG systems, vector embeddings, LangChain pipelines, and emerging LLM agentic patterns.",
    tags: ["RAG Systems", "LangChain", "Agentic AI"]
  },
  {
    id: "focus-edge",
    topic: "Deep Learning & Edge AI",
    icon: "🧠",
    badgeText: "Edge Computing",
    badgeColor: "peach",
    featured: false,
    description: "Investigating CNN transfer learning, model quantization, and low-latency offline inference on resource-constrained devices.",
    tags: ["PyTorch", "CNNs", "Model Optimization"]
  },
  {
    id: "focus-dsa",
    topic: "Data Structures & Algorithms",
    icon: "⚡",
    badgeText: "Problem Solving",
    badgeColor: "yellow",
    featured: false,
    description: "Continuous problem-solving on LeetCode focusing on algorithmic efficiency, optimization logic, and core DSA patterns.",
    tags: ["LeetCode", "DSA", "Optimization"]
  }
];

export const artSectionData = {
  title: "Off the Screen",
  subtitle: "The Sketchbook",
  description: "Outside of code and algorithms, I explore form, line, and composition through sketching.",
  quote: "A single pencil can build worlds no camera has ever seen.",
  externalLink: "https://renu-art-portfolio.netlify.app/",
  artworks: [
    {
      id: "art-1",
      title: "Sketching Study I",
      medium: "Pencil & Fine Line Sketch",
      image: "/images/artwork1.jpeg"
    },
    {
      id: "art-2",
      title: "Sketching Study II",
      medium: "Charcoal & Contour Study",
      image: "/images/artwork2.jpeg"
    }
  ]
};
