export const portfolioData = {
  personalInfo: {
    firstName: "Pratik",
    lastName: "Patil",
    fullName: "Pratik Patil",
    title: "AI & Full-Stack Developer",
    tagline: "I build responsive, user-centric web applications and integrate AI capabilities to deliver smart web solutions.",
    bio: "I am a Computer Science & Engineering student and Junior Software Intern specializing in React, Tailwind CSS, and AI technologies. I focus on developing clean, responsive frontend interfaces, integrating LLMs/RAG systems, and designing deep learning workflows to solve real-world problems.",
    email: "pratikarjunpatil2863@gmail.com",
    location: "Sangli, Maharashtra, India",
    resumeUrl: "/PratikPatil.pdf", // Path to the resume PDF in public folder
    web3formsKey: "dc19f409-e5b8-4eb5-97ae-be46f051af0d",
    socials: {
      github: "https://github.com/PratikPatil156",
      linkedin: "https://www.linkedin.com/in/pratik-patil-p5656",
      whatsapp: "https://wa.me/918767182863", 
    }
  },
  skillCategories: [
    {
      title: "Languages & Databases",
      skills: [
        { name: "Python", iconName: "Code" },
        { name: "JavaScript", iconName: "FileCode" },
        { name: "Java", iconName: "FileCode" },
        { name: "SQL", iconName: "Database" },
        { name: "MySQL", iconName: "Database" },
        { name: "PostgreSQL", iconName: "Database" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", iconName: "React" },
        { name: "Tailwind CSS", iconName: "Palette" },
        { name: "HTML / CSS", iconName: "Layers" }
      ]
    },
    {
      title: "Backend, AI & Tools",
      skills: [
        { name: "FastAPI", iconName: "Server" },
        { name: "LangChain", iconName: "Zap" },
        { name: "RAG Applications", iconName: "Database" },
        { name: "LLM Integration", iconName: "Cpu" },
        { name: "Pandas", iconName: "Box" },
        { name: "NumPy", iconName: "Cpu" },
        { name: "Matplotlib", iconName: "Palette" },
        { name: "Seaborn", iconName: "Palette" },
        { name: "OpenCV", iconName: "Eye" },
        { name: "Git", iconName: "GitBranch" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "SmartHire Enterprise – AI-Powered Recruitment Platform",
      description: "A production-ready AI-powered recruitment platform designed to streamline hiring workflows. Features AI-driven resume parsing, real-time ATS/Match Score generation, interactive recruiter dashboards, secure FastAPI REST APIs with JWT, automated passcode-based interview scheduling, and a responsive glassmorphic React/Vite/Tailwind UI with Recharts visualizations.",
      category: "fullstack",
      tags: ["React.js", "Vite", "Tailwind CSS", "FastAPI", "Python", "MySQL", "JWT", "Bcrypt", "REST APIs", "Recharts", "SMTP"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?fit=crop&w=600&h=400&q=80",
      liveUrl: "https://github.com/PratikPatil156",
      githubUrl: "https://github.com/PratikPatil156"
    },
    {
      id: "proj-2",
      title: "NovaQuest AI – RAG-Based Document Question Answering System",
      description: "An AI-powered document question-answering platform utilizing Retrieval-Augmented Generation (RAG). Built a responsive React.js interface for document upload and chat-based query interactions, powered by FastAPI REST APIs, LangChain, OpenAI APIs, and ChromaDB vector database for semantic search.",
      category: "fullstack",
      tags: ["React.js", "Python", "FastAPI", "LangChain", "OpenAI API", "ChromaDB", "RAG", "PyPDF", "Vector Embeddings"],
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?fit=crop&w=600&h=400&q=80",
      liveUrl: "https://github.com/PratikPatil156",
      githubUrl: "https://github.com/PratikPatil156"
    },
    {
      id: "proj-3",
      title: "GreenClassify: Vegetable Image Classification (Deep Learning)",
      description: "A CNN-based deep learning computer vision model for automated vegetable classification using TensorFlow and Python. Features image preprocessing, data augmentation, and model training pipelines with a responsive Flask web interface.",
      category: "fullstack",
      tags: ["Python", "Flask", "TensorFlow", "CNN", "Deep Learning", "Computer Vision", "NumPy", "Pillow", "HTML", "CSS", "JavaScript"],
      imageUrl: "/vegetables.jpg",
      liveUrl: "https://github.com/PratikPatil156",
      githubUrl: "https://github.com/PratikPatil156"
    },
    {
      id: "proj-4",
      title: "Restaurant Recommendation System",
      description: "A content-based restaurant recommendation system using TF-IDF Vectorization and Cosine Similarity to suggest similar restaurants. Features data cleaning on large-scale Zomato datasets, user query review text-processing, and a Flask web UI.",
      category: "fullstack",
      tags: ["Python", "Flask", "Scikit-learn", "Pandas", "TF-IDF Vectorization", "Cosine Similarity", "HTML", "CSS"],
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=600&h=400&q=80",
      liveUrl: "https://github.com/PratikPatil156",
      githubUrl: "https://github.com/PratikPatil156"
    },
    {
      id: "proj-5",
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website developed using React.js and Tailwind CSS to showcase my projects, skills, education, and professional certifications. Built with reusable UI components and a modern interface optimized for desktop, tablet, and mobile devices.",
      category: "frontend",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Web Design"],
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?fit=crop&w=600&h=400&q=80",
      liveUrl: "https://github.com/PratikPatil156",
      githubUrl: "https://github.com/PratikPatil156"
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Junior Software Intern",
      company: "StarSoftech",
      location: "Hubli, Karnataka, India",
      period: "2025 - Present",
      description: [
        "Developed 10+ responsive and reusable UI components using React.js, JavaScript, HTML5, and Tailwind CSS.",
        "Contributed to the development of the Aanchal Jewellery web application by implementing modern frontend features and user interfaces.",
        "Enhanced application responsiveness and user experience across desktop and mobile devices.",
        "Collaborated with developers to build scalable and maintainable web solutions following industry best practices.",
        "Gained hands-on experience with backend development concepts using Java and Spring Boot.",
        "Worked with database management concepts and software architecture fundamentals."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      role: "B.Tech in Computer Science and Engineering",
      company: "D. Y. Patil Agriculture & Technical University Talsande",
      location: "Kolhapur, Maharashtra, India",
      period: "Expected 2026",
      description: [
        "Specializing in Computer Science engineering and modern web technologies.",
        "Academic performance: Cumulative Grade Point Average (CGPA) of 7.6 / 10."
      ]
    },
    {
      id: "edu-2",
      role: "Higher Secondary Education (12th)",
      company: "VNM Science College",
      location: "Sangli, Maharashtra, India",
      period: "2022",
      description: [
        "Completed higher secondary school under Kolhapur Divisional Board, Maharashtra State Board.",
        "Academic performance: 63.50%."
      ]
    },
    {
      id: "edu-3",
      role: "Secondary Education (10th)",
      company: "KNPV Bhavaninagar",
      location: "Sangli, Maharashtra, India",
      period: "2020",
      description: [
        "Completed secondary school under Kolhapur Divisional Board, Maharashtra State Board.",
        "Academic performance: 75.60%."
      ]
    }
  ],
  certificates: [
    {
      id: "cert-1",
      title: "Data Science Credit Course",
      issuer: "Google for Developers & SmartBridge",
      date: "May 2026",
      description: "Completed comprehensive Data Science credit course learning data mining, analytics workflows, and developer API implementations."
    },
    {
      id: "cert-2",
      title: "Artificial Intelligence Credit Course",
      issuer: "Google for Developers & SmartBridge",
      date: "Mar 2026",
      description: "Completed comprehensive AI credit course exploring neural network frameworks, AI pipelines, and model deployments."
    },
    {
      id: "cert-3",
      title: "Google Skill Badges - Generative AI for Developers",
      issuer: "Google Cloud",
      date: "Mar 2026",
      description: "Successfully earned 22 skill badges covering Generative AI architectures, foundation model tuning, and Prompt Engineering on Google Cloud."
    },
    {
      id: "cert-4",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      date: "Mar 2026",
      description: "Completed practical simulation tasks focused on modern Data Analysis practices, visual dashboards, and Forensic Technology analytics."
    },
    {
      id: "cert-5",
      title: "TATA Cybersecurity Analyst Job Simulation",
      issuer: "TATA Group (Forage)",
      date: "Mar 2026",
      description: "Completed interactive cybersecurity analyst tasks covering Identity & Access Management (IAM) configurations, system security compliance, and vulnerability assessments."
    },
    {
      id: "cert-6",
      title: "Quantium Data Analytics Job Simulation",
      issuer: "Quantium (Forage)",
      date: "Mar 2026",
      description: "Completed data analytics simulation involving intensive customer retail analytics, dataset cleaning, data preparation, and actionable visualization insights."
    },
    {
      id: "cert-7",
      title: "Introduction to Generative AI",
      issuer: "IBM",
      date: "Feb 2026",
      description: "Completed specialized course covering foundational Generative AI concepts, LLM capabilities, prompt tuning, and enterprise use cases."
    }
  ]
};
