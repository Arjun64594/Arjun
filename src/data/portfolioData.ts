export interface Project {
  id: string;
  title: string;
  category: 'Gen AI' | 'Full Stack' | 'Frontend' | 'Java & Spring Boot';
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  architectureNotes?: string;
  demoType?: 'interactive-quiz' | 'ticket-kanban' | 'ai-prompt' | 'metrics-dashboard';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  impactBadge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gradeOrHonor?: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Devika E.K.S",
    title: "Software & Gen AI Developer",
    subtitle: "React Specialist • Java & Spring Boot • MERN Stack • Generative AI",
    bio: "Passionate software developer with proven expertise across the full stack—from responsive, pixel-perfect React & modern UI architectures to resilient Java/Spring Boot microservices, MERN stack solutions, and cutting-edge Generative AI workflows. University Rank Holder in MCA and certified Meta developer dedicated to delivering high-impact, performant digital solutions.",
    email: "devikasatheesan489@gmail.com",
    phone: "+91 8681995349",
    location: "Tamil Nadu / Kerala, India",
    availability: "Available for Full-time Roles & High-Impact Contracts",
    github: "https://github.com/DevikaEKS",
    linkedin: "https://www.linkedin.com/in/devika-e-k-s-8ba583242/?isSelfProfile=true",
    yearsExperience: "2+ Years",
    stats: [
      { label: "Core Stacks", value: "React • Java • MERN • Gen AI" },
      { label: "Students Trained", value: "500+ across India" },
      { label: "Academic Standing", value: "University Rank Holder" },
      { label: "Production Apps", value: "8+ Delivered" }
    ]
  },

  skills: {
    genAi: [
      { name: "Generative AI & LLMs", level: 90, desc: "Prompt Engineering, Gemini API, OpenAI, AI Agents, Tool Calling" },
      { name: "RAG & Knowledge Retrieval", level: 85, desc: "Vector embeddings, context synthesis, document Q&A pipelines" },
      { name: "AI Web Integrations", level: 92, desc: "Streaming completions, structured JSON outputs, multimodal reasoning" }
    ],
    frontend: [
      { name: "React.js & Hooks", level: 95, desc: "SPA, Custom Hooks, State Management, Performance Optimization" },
      { name: "JavaScript (ES6+) & TypeScript", level: 92, desc: "Async/Await, Strict Typing, Modular architecture" },
      { name: "Tailwind CSS & Material-UI", level: 95, desc: "Modern UI systems, responsive mobile-first layouts, Design tokens" },
      { name: "HTML5, CSS3 & Bootstrap", level: 95, desc: "Semantic web standards, CSS animations, Cross-browser compatibility" }
    ],
    backend: [
      { name: "Java & Spring Boot", level: 88, desc: "RESTful APIs, Spring Security, Hibernate/JPA, Microservices" },
      { name: "MERN Stack (Node.js & Express)", level: 90, desc: "Full-stack JavaScript, JWT auth, middleware, asynchronous I/O" },
      { name: "API Architecture & Integration", level: 90, desc: "REST, JSON payloads, Third-party integrations, Webhooks" }
    ],
    databaseDevOps: [
      { name: "SQL & Relational Databases", level: 88, desc: "PostgreSQL, MySQL, schema design, complex joins, indexing" },
      { name: "MongoDB & NoSQL", level: 88, desc: "Document modeling, aggregation pipelines, Mongoose ODM" },
      { name: "Git, GitHub & CI/CD", level: 92, desc: "Version control, GitHub Actions, Pages deployment, Branch workflows" }
    ]
  },

  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Malayalam", proficiency: "Native / Bilingual" },
    { name: "Tamil", proficiency: "Full Professional Fluency" }
  ],

  certifications: [
    {
      title: "Meta Certified Front-End Developer",
      issuer: "Meta",
      focus: "React, JavaScript, Web Architecture, Responsive UI/UX",
      date: "Certified"
    },
    {
      title: "React JS Specialized Certification",
      issuer: "Meta",
      focus: "Component Lifecycle, State Management, Custom Hooks, Performance",
      date: "Certified"
    },
    {
      title: "University Rank in Master of Computer Applications (MCA)",
      issuer: "Anna University / Directorate of Technical Education",
      focus: "Top Academic Distinction across MCA Program",
      date: "Honors"
    }
  ],

  experience: [
    {
      company: "KG Genius Labs",
      role: "Frontend Developer",
      period: "Nov 2023 - Present",
      location: "Coimbatore, Tamil Nadu",
      type: "Full-time",
      current: true,
      impactBadge: "Active Role",
      description: "Driving the development and optimization of enterprise-grade web applications with a focus on modern React architecture, responsiveness, and seamless user experiences.",
      responsibilities: [
        "Architect and develop responsive, user-centric web applications utilizing modern React.js, TypeScript, and state management techniques.",
        "Partner closely with UI/UX designers to translate intricate Figma designs into accessible, pixel-perfect, interactive frontend components.",
        "Profile and optimize application performance, slashing bundle load times and ensuring WCAG accessibility standards compliance.",
        "Collaborate with backend teams to integrate REST APIs built on Java Spring Boot and Node.js microservices.",
        "Pioneer Generative AI feature integrations, implementing smart document assistance and automated workflow enhancements."
      ],
      technologies: ["React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Material-UI", "REST APIs", "Git", "Gen AI Integration"]
    },
    {
      company: "KG Microcollege",
      role: "Technical Trainer",
      period: "June 2023 - Nov 2023",
      location: "Tamil Nadu & Kerala",
      type: "Full-time",
      current: false,
      impactBadge: "500+ Trained",
      description: "Mentored aspiring engineers and university graduates across India in full frontend engineering, leading both high-energy virtual bootcamps and intensive in-person workshops.",
      responsibilities: [
        "Conducted comprehensive online training sessions for students across India focusing on modern Frontend development with React, JS, and CSS3.",
        "Delivered dynamic offline workshops and bootcamps across campuses in Tamil Nadu and Kerala.",
        "Mentored students through 30+ hands-on real-world capstone projects and guided them in clean coding standards and Git workflows.",
        "Assessed code quality, conducted live debugging sessions, and authored customized interactive learning modules."
      ],
      technologies: ["React.js", "JavaScript", "HTML5/CSS3", "Bootstrap", "Git/GitHub", "Mentorship", "Pedagogy"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "KGISL Institute of Information Management",
      period: "Sep 2021 - Apr 2023",
      location: "Coimbatore, Tamil Nadu",
      gradeOrHonor: "University Rank Holder",
      highlights: [
        "Earned prestigious University Rank recognition for outstanding academic and practical technical excellence.",
        "Specialized in Software Engineering, Advanced Database Systems, Web Technologies, and Java Enterprise Architectures.",
        "Led multiple academic capstone initiatives involving full-stack web and database development."
      ]
    },
    {
      degree: "B.Sc. Mathematics",
      institution: "Sri Krishna Arts and Science College",
      period: "June 2018 - Apr 2021",
      location: "Coimbatore, Tamil Nadu",
      highlights: [
        "Strong quantitative, algorithmic, and mathematical logic foundation directly applicable to software problem-solving and AI models.",
        "Completed rigorous coursework in Discrete Mathematics, Linear Algebra, Probability, and Numerical Methods."
      ]
    }
  ],

  projects: [
    {
      id: "gen-ai-assistant",
      title: "Gen AI Code & Knowledge Assistant",
      category: "Gen AI",
      tagline: "Next-gen context-aware assistant for engineering teams",
      description: "An AI-powered developer copilot that parses complex codebases, explains architectural decisions, writes test cases, and performs semantic code search using state-of-the-art LLMs.",
      highlights: [
        "Real-time streaming responses with syntax-highlighted code generation.",
        "Grounding pipeline that mitigates hallucinations by referencing verified project repositories.",
        "Interactive prompt presets for rapid code refactoring, bug triage, and documentation creation."
      ],
      technologies: ["React.js", "Generative AI", "TypeScript", "Tailwind CSS", "Node.js", "Prompt Engineering"],
      githubUrl: "https://github.com/DevikaEKS",
      featured: true,
      metrics: "Sub-second token streaming & 98% prompt accuracy",
      architectureNotes: "Client-side React interface communicating with streaming LLM completion endpoints with dynamic system prompt injection.",
      demoType: "ai-prompt"
    },
    {
      id: "lms-platform",
      title: "Enterprise Learning Management System",
      category: "Full Stack",
      tagline: "Scalable educational portal with student tracking and course modules",
      description: "A comprehensive LMS platform engineered to host interactive courses, handle student enrollments, administer timed exams, and provide analytics dashboards for educators.",
      highlights: [
        "Role-based access control (Admin, Instructor, Student) with secure tokenized sessions.",
        "Interactive course player with chapter bookmarking, downloadable assets, and notes.",
        "Educator analytics dashboard rendering completion rates, quiz percentiles, and attendance."
      ],
      technologies: ["React.js", "MERN Stack", "Express.js", "MongoDB", "Material UI", "REST APIs"],
      githubUrl: "https://github.com/DevikaEKS",
      featured: true,
      metrics: "500+ active student sessions tested",
      architectureNotes: "MERN stack architecture with JWT authentication and modular REST controllers.",
      demoType: "interactive-quiz"
    },
    {
      id: "ticketing-service-desk",
      title: "Intelligent IT Ticketing & Service Tool",
      category: "Full Stack",
      tagline: "High-concurrency issue tracker with automated triage and SLA monitors",
      description: "Streamlined enterprise support desk facilitating real-time ticket creation, status progression, priority scoring, and department assignment to eliminate customer resolution bottlenecks.",
      highlights: [
        "Visual Kanban board with drag-and-drop ticket status transitions.",
        "Configurable SLA countdown timers with automated warnings upon breach risk.",
        "Audit trail tracking ticket history, reassignments, internal notes, and attachments."
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs", "Socket.io"],
      githubUrl: "https://github.com/DevikaEKS",
      featured: true,
      metrics: "40% reduction in resolution lag during testing",
      architectureNotes: "Event-driven ticket state transitions with optimistic UI updates in React.",
      demoType: "ticket-kanban"
    },
    {
      id: "spring-boot-assessment",
      title: "Automated Assessment & Code Testing Platform",
      category: "Java & Spring Boot",
      tagline: "Developer candidate evaluation engine with automated test runners",
      description: "A secure testing platform allowing organizations to evaluate software candidates through algorithmic questions, automated unit-test validation, and anti-cheat tracking.",
      highlights: [
        "Java Spring Boot microservice verifying code execution against hidden unit test cases.",
        "Secure candidate session with full-screen enforcement, tab-switch detection, and timed countdowns.",
        "Comprehensive scoring matrix evaluating execution time, memory usage, and test pass rates."
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React.js", "REST APIs", "Docker Sandboxing"],
      githubUrl: "https://github.com/DevikaEKS",
      featured: true,
      metrics: "Automated grading within 1.2 seconds",
      architectureNotes: "Spring Boot backend running isolated execution containers and streaming result telemetry back to the React UI.",
      demoType: "metrics-dashboard"
    },
    {
      id: "corporate-websites",
      title: "High-Performance Corporate Portals & Web Apps",
      category: "Frontend",
      tagline: "SEO-optimized, ultra-responsive digital presence for enterprises",
      description: "A suite of modern, responsive websites and client-facing web portals engineered with focus on sub-second load times, fluid micro-interactions, and conversion-optimized forms.",
      highlights: [
        "Achieved 98+ Google Lighthouse scores across Performance, Accessibility, and SEO.",
        "Pixel-perfect responsive layouts adapted across mobile, tablet, desktop, and ultra-wide screens.",
        "Clean component design system with reusable typography, buttons, cards, and modal sheets."
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion", "Vite", "SEO"],
      githubUrl: "https://github.com/DevikaEKS",
      featured: false,
      metrics: "98+ Lighthouse scores across all metrics",
      architectureNotes: "Static site generation & code-splitting architecture for instant first contentful paint."
    },
    {
      id: "spring-microservices-backend",
      title: "Java Spring Boot & MERN Microservices Suite",
      category: "Java & Spring Boot",
      tagline: "Robust backend services with JWT authentication and relational databases",
      description: "Enterprise backend architecture connecting distributed services, relational data persistence with Hibernate/JPA, and reactive endpoints serving high-traffic consumer frontends.",
      highlights: [
        "Spring Security integration with role-based JWT bearer authentication.",
        "Optimized SQL schema with indexed foreign keys and connection pooling.",
        "Swagger/OpenAPI documentation and automated Postman regression test suites."
      ],
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "JWT", "Swagger"],
      githubUrl: "https://github.com/DevikaEKS",
      featured: false,
      metrics: "99.9% uptime simulation under concurrent load",
      architectureNotes: "Layered Spring Boot architecture (Controller -> Service -> Repository -> Database) with global exception handling."
    }
  ] as Project[]
};
