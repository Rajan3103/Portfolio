
export const portfolioData = {
  personal: {
    name: "Karthig Rajan S",
    title: "Software Developer | AI Engineer | Data Analyst",
    location: "Sivagangai, Tamil Nadu, India",
    email: "rajankarthig@gmail.com",
    phone: "+91 82485 81022",
    github: "https://github.com/Rajan3103",
    linkedin: "https://www.linkedin.com/in/karthig-rajan-417ab0297/",
    // To change your photo:
    // 1. Place your photo in the `public` folder
    // 2. Update the filename below (e.g., "/my-photo.jpg")
    profileImage: "Karthi.png",
    tagline: "I build full-stack systems with Java/Spring Boot, React and Flask, and ship AI features powered by LLMs, NLP and data analytics.",
  },

  about: {
    description: [
      "I'm a Computer Science undergraduate at SRM Institute of Science and Technology (CGPA 9.09) working across software development, AI engineering and data analytics.",
      "I've shipped full-stack apps and REST APIs with React, Flask, Spring Boot and SQL, cut API response times by ~30% through query optimisation and caching, and built LLM-powered tools like DocDrift that keep documentation in sync with code."
    ],
    highlights: [
      "AI Product Development",
      "LLM & NLP Applications",
      "Full-Stack Development",
      "REST API Design",
      "Database Design",
      "Data Analytics & BI"
    ],
    educationBrief: {
      degree: "B.Tech",
      field: "CSE Student",
      university: "SRM IST"
    }
  },

  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java"]
    },
    {
      category: "Generative AI",
      items: ["LLMs", "Prompt Engineering", "Google Gemini", "Explainable AI (XAI)"]
    },
    {
      category: "Data Science",
      items: ["Machine Learning", "Deep Learning", "NLP", "Data Visualization", "Power BI", "Excel"]
    },
    {
      category: "Frameworks",
      items: ["Spring Boot", "Spring WebFlux", "Flask", "React", "Vite"]
    },
    {
      category: "Backend & Databases",
      items: ["REST APIs", "PostgreSQL", "MySQL", "SQLite", "HTML", "CSS"]
    },
    {
      category: "Tools & Others",
      items: ["Git & GitHub", "Linux", "DSA", "OOP", "System Design", "Agile"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "DocDrift — AI-Assisted Documentation Drift Detector",
      description: "Detects outdated docs automatically by having Google Gemini semantically compare git diffs against codebase documentation. A non-blocking Spring WebFlux + PostgreSQL pipeline drives a human-in-the-loop review flow with auditable reports and text replacement patches, surfaced in a React + Vite dashboard with repo health tracking and side-by-side markdown diffs.",
      tags: ["Java 21", "Spring Boot", "LLM", "PostgreSQL", "React"],
      type: "ai",
      github: "https://github.com/Rajan3103",
      demo: ""
    },
    {
      id: 2,
      title: "NLP-Based Log Processor & Bug Prioritisation System",
      description: "End-to-end NLP pipeline (tokenization, TF-IDF, Naive Bayes) that parses .log/.csv/.pcap files and auto-classifies bugs from Low to Critical, served via Flask REST APIs with MySQL storage and an interactive React dashboard of bug trends and priority distribution.",
      tags: ["NLP", "ML", "Flask", "React", "MySQL"],
      type: "app",
      github: "https://github.com/Rajan3103",
      demo: ""
    },
    {
      id: 3,
      title: "AI-BI-Bkups — AI-Powered Business Intelligence Platform",
      description: "Owned the database and DBMS layer of an AI-powered BI platform: designed and managed PostgreSQL schemas and built reliable, structured data persistence for AI analytics and reporting workflows.",
      tags: ["PostgreSQL", "AI", "Data Modeling", "BI"],
      type: "data",
      github: "https://github.com/Rajan3103",
      demo: ""
    },
    {
      id: 4,
      title: "PhishGuard AI",
      description: "A multi-layer phishing detection system that analyzes URLs, email content, and webpage content. Uses Explainable AI (XAI) for interpretable predictions and NLP to classify phishing emails.",
      tags: ["Python", "XAI", "NLP", "React"],
      type: "auth",
      github: "https://github.com/Rajan3103",
      demo: ""
    },
  ],

  experience: [
    {
      title: "AI Product Development Intern",
      company: "3rd Ain Smart Infotech",
      period: "Mar 2026 – May 2026",
      location: "India",
      responsibilities: [
        "Contributed to the full AI product lifecycle — design, development and deployment — for customer-facing AI solutions.",
        "Authored preprocessing scripts with input validation that eliminated pipeline crashes during QA.",
        "Worked in a cross-functional Agile team, translating business requirements into functional specs and supporting sprint-based delivery."
      ]
    },
    {
      title: "Machine Learning / Full-Stack Intern",
      company: "Zilogic Systems",
      period: "Jun 2025 – Jul 2025",
      location: "Chennai, India",
      responsibilities: [
        "Built and deployed full-stack applications using React, Flask and SQL.",
        "Designed scalable REST APIs on MySQL and SQLite supporting high-concurrency workloads.",
        "Optimised backend services with query optimisation and caching, reducing API response time by ~30%.",
        "Gained hands-on experience with Java and Spring Boot."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Tech Maven",
      period: "Feb 2025 – Mar 2025",
      location: "Bangalore, India",
      responsibilities: [
        "Completed hands-on training in front-end and back-end web development.",
        "Built full-stack applications and developed RESTful APIs with responsive interfaces.",
        "Used Git for version control and collaborated with mentors on best practices."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) — CGPA 9.09 / 10",
      field: "Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology",
      period: "2023 – Present",
      location: "Tiruchirappalli, India"
    }
  ],

  certifications: [
    { title: "Oracle Cloud Infrastructure AI Foundations Associate", issuer: "Oracle (2025)" },
    { title: "Lean Six Sigma Yellow Belt", issuer: "ANEXAS (2025)" },
    { title: "IBM Certified Data Analyst", issuer: "IBM (2024)" },
    { title: "Microsoft Power BI", issuer: "Microsoft (2024)" },
    { title: "Snowflake SnowPro Core", issuer: "Snowflake (2024)" }
  ],

  activities: {
    title: "Leadership & Community",
    description: "Leading teams on stage, on the field and in the classroom — organising events, mentoring juniors and giving back to the community.",
    bullets: [
      "President, Theatrical Club — organised events for 100+ students",
      "Peer Mentor — AI development, system design & career prep",
      "Captain, College Kabaddi Team",
      "Community Connect — volunteered with an NGO for one month"
    ]
  },
  hobbies: [
    { name: "Coding", icon: "Code" },
    { name: "Theatre", icon: "Drama" },
    { name: "Kabaddi", icon: "Trophy" },
    { name: "Traveling", icon: "Plane" },
    { name: "Music", icon: "Music" }
  ]
};

/**
 * 💡 WANT TO ADD MORE?
 * 
 * To add a new PROJECT:
 * Copy this block and paste it inside the `projects: [...]` array above:
 * {
 *   id: 3,
 *   title: "New Project Name",
 *   description: "Write a short description here.",
 *   tags: ["React", "Tailwind", "Firebase"],
 *   type: "app", 
 *   github: "https://github.com/your-username",
 *   demo: ""
 * },
 * 
 * To add a new EXPERIENCE:
 * Copy this block and paste it inside the `experience: [...]` array above:
 * {
 *   title: "Job Title",
 *   company: "Company Name",
 *   period: "Start Date – End Date",
 *   location: "City, Country",
 *   responsibilities: [
 *     "Responsibility one",
 *     "Responsibility two"
 *   ]
 * },
 */

