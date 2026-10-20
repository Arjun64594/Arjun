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
    name: "Arjun M",
    title: "Cyber Security and Software Engineer",
    subtitle: "React Specialist • Java & Spring Boot • MERN Stack • Generative AI",
    bio: "Passionate software developer with proven expertise across the full stack—from responsive, pixel-perfect React & modern UI architectures to resilient Java/Spring Boot microservices, MERN stack solutions, and cutting-edge Generative AI workflows. University Rank Holder in MCA and certified Meta developer dedicated to delivering high-impact, performant digital solutions.",
    email: "arjun.m0204@gmail.com",
    phone: "+91 9342960627",
    location: "Tamil Nadu India",
    availability: "Available for Full-time Roles & High-Impact Contracts",
    github: "https://github.com/Arjun64594",
    linkedin: "https://www.linkedin.com/in/arjun2604/",
    stats: [
      { label: "Core Stacks", value: "React • Java • MERN • Gen AI" },
    
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
    { name: "Tamil", proficiency: "Full Professional Fluency" }
  ],

  certifications: [
    
    {
      title: "III Prize in the Code Quiz",
      issuer: "Code Blitz 2024",
      focus: "Cyber Security",
      date: "Certified"
    }
  ],

  experience: [
  
    {
      company: "Pantech e Learning Pvt. Ltd.",
      role: "Internship",
      location: "Chennai, Tamil Nadu",
      type: "Remote Internship",
      current: true,
      description: "Cyber Security and Software Engineering Internship focused on cloud computing, web application security, and aws cloud services.",
      responsibilities: [
        "Completed hands-on projects on AWS cloud services, including EC2, S3, and Lambda functions."
      ],
      technologies: ["React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Material-UI", "REST APIs", "Git", "Gen AI Integration"]
    },
    
  ],

  education: [
    {
      degree: "BE in Computer Science & Engineering in Cyber Security",
      institution: "CIET College of Engineering",
      period: "Sep 2023 - Pursuing",
      location: "Coimbatore, Tamil Nadu",
     
      highlights: [
        "Specialized in Cyber Security, focusing on network security, cryptography, and ethical hacking.",
        "Engaged in hands-on labs and projects to apply theoretical knowledge in real-world scenarios.",
        "Participated in cybersecurity competitions and workshops to enhance practical skills." 
      ]
    },
   
  ],

  projects: [
    {
      id: "FoodieHub - Full-Stack Food Ordering Web Application",
      title: "FoodieHub - Full-Stack Food Ordering Web Application",
      category: "Full Stack",
      tagline: "Next-gen context-aware assistant for engineering teams",
      description: "An AI-powered developer copilot that parses complex codebases, explains architectural decisions, writes test cases, and performs semantic code search using state-of-the-art LLMs.",
      highlights: [
        "Real-time streaming responses with syntax-highlighted code generation.",
        "Grounding pipeline that mitigates hallucinations by referencing verified project repositories.",
        "Interactive prompt presets for rapid code refactoring, bug triage, and documentation creation."
      ],
      technologies: ["React.js", "Generative AI", "TypeScript", "Tailwind CSS", "Node.js", "Prompt Engineering"],
      githubUrl: "https://github.com/Arjun64594/FoodieHub",
      featured: true,
      metrics: "Sub-second token streaming & 98% prompt accuracy"
    }
  ] as Project[]
};
