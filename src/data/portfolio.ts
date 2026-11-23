import type { PersonInfo, Project, SkillCategory, Education, Certification } from "@/types/portfolio";

export const person: PersonInfo = {
  name: "K. Sai Raghavendra Gupta",
  fullName: "K. SAI RAGHAVENDRA GUPTA",
  title: "Full Stack Developer",
  tagline: "Building AI-powered web & mobile applications",
  summary:
    "Computer Science student skilled in full-stack development with React.js, Node.js, Express.js and MongoDB, building AI-powered applications and full-stack projects.",
  email: "sairaghavendra0015@gmail.com",
  phone: "+91 95426 21926",
  location: "Andhra Pradesh, India",
  github: "https://github.com/raghavendragupta0015",
  linkedin: "https://linkedin.com/in/sai-raghavendra-gupta-29b8b13a7",
  resumeUrl: "/documents/resume.pdf",
};

export const projects: Project[] = [
  {
    slug: "omni-ai",
    title: "Omni AI",
    tagline: "Multi-Model AI Application",
    overview:
      "A unified AI application that brings multiple AI models together in a single, cohesive interface — letting users switch between models without juggling separate apps.",
    problem:
      "Users who work with multiple AI models face context-switching friction, inconsistent UIs, and difficulty comparing outputs side-by-side.",
    solution:
      "Built a Flutter-based cross-platform app that integrates multiple AI models under one roof, using Firebase for auth and hosting, with a consistent, clean interface.",
    objectives: [
      "Provide a single entry point for multiple AI models",
      "Deliver a consistent cross-platform UI on Android, iOS, and web",
      "Leverage Firebase for seamless authentication and hosting",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Google Sign-In", "Firebase Hosting"],
    features: [
      "Multi-model AI interface under one app",
      "Google Sign-In authentication",
      "Cross-platform support (Android, iOS, Web)",
      "Firebase-hosted progressive web app",
      "Clean, responsive UI",
    ],
    challenges:
      "Integrating multiple AI APIs with different response formats required building a unified adapter layer, and maintaining consistent UI states across asynchronous model calls.",
    results:
      "Deployed on Firebase Hosting as a live progressive web application accessible at omni-ai-39e13.web.app.",
    liveUrl: "https://omni-ai-39e13.web.app",
    featured: true,
    year: "2024",
  },
  {
    slug: "ai-grievance-portal",
    title: "AI-Powered Grievance Portal",
    tagline: "Civic Ticketing System",
    overview:
      "An AI-powered ticketing system for citizens to raise, track, and resolve civic grievances with intelligent department routing.",
    problem:
      "Citizens often struggle to reach the right government department when reporting civic issues, leading to unresolved complaints and poor service delivery.",
    solution:
      "Built a full-stack grievance portal with AI-driven intelligent routing that automatically directs complaints to the appropriate department.",
    objectives: [
      "Simplify the citizen grievance submission process",
      "Use AI to intelligently route complaints to relevant departments",
      "Enable real-time ticket tracking and status updates",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AI/ML", "Vercel"],
    features: [
      "AI-powered complaint routing to right department",
      "Citizen ticket submission and tracking",
      "Real-time status updates",
      "Admin dashboard for department officials",
      "Vercel deployment",
    ],
    challenges:
      "Training the classification model to accurately route diverse complaint types to the correct department while handling edge cases and ambiguous submissions.",
    results:
      "Deployed as a live web application on Vercel, accessible at greviance-portal-kappa.vercel.app.",
    liveUrl: "https://greviance-portal-kappa.vercel.app",
    featured: true,
    year: "2024",
  },
  {
    slug: "health-saathi",
    title: "HealthSaathi AI",
    tagline: "Personal Health Copilot",
    overview:
      "An AI health copilot that helps users organize medical records, understand lab reports, and track their overall well-being.",
    problem:
      "Patients often struggle to manage scattered medical records, interpret complex lab reports, and maintain a coherent picture of their health history.",
    solution:
      "Built a web application that acts as a personal health assistant, allowing users to upload and organize records, get plain-language explanations of lab results, and track health trends.",
    objectives: [
      "Organize and centralize personal medical records",
      "Provide AI-powered explanations for lab reports",
      "Enable personal health tracking and insights",
    ],
    technologies: ["React.js", "Node.js", "AI/ML", "Vercel"],
    features: [
      "Medical record organization and storage",
      "AI-powered lab report interpretation",
      "Health tracking and trend visualization",
      "Responsive web design",
      "Vercel deployment",
    ],
    challenges:
      "Ensuring accurate and responsible AI explanations for medical data while keeping the interface approachable for non-technical users.",
    results:
      "Deployed as a responsive web application on Vercel, accessible at health-saathi-xi.vercel.app.",
    liveUrl: "https://health-saathi-xi.vercel.app",
    featured: false,
    year: "2024",
  },
  {
    slug: "revenue-spot",
    title: "WanderLust",
    tagline: "Full-Stack Airbnb Clone",
    overview:
      "A full-stack property listing and booking platform inspired by Airbnb, with authentication, complete CRUD operations, and secure cloud image upload.",
    problem:
      "Learning full-stack web development requires building a real-world application with authentication, database management, file uploads, and CRUD operations working end-to-end.",
    solution:
      "Built a complete Airbnb clone featuring user authentication, property listings with CRUD operations, secure image upload to cloud storage, and responsive design.",
    objectives: [
      "Implement full-stack CRUD with authentication",
      "Integrate cloud storage for image uploads",
      "Build a responsive, production-quality UI",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Passport.js"],
    features: [
      "User authentication with Passport.js",
      "Property listing creation and management (CRUD)",
      "Secure image upload with Cloudinary",
      "Reviews and ratings system",
      "Responsive and mobile-friendly UI",
    ],
    challenges:
      "Implementing secure image upload workflows and managing session-based authentication across the full CRUD lifecycle.",
    results:
      "Open-source full-stack project available on GitHub demonstrating complete web application development skills.",
    githubUrl: "https://github.com/raghavendragupta0015/wanderlust-project",
    featured: false,
    year: "2024",
  },
  {
    slug: "zerodha-clone",
    title: "Zerodha Clone",
    tagline: "Stock Trading Platform",
    overview:
      "A stock trading platform clone with dashboard, portfolio management features, responsive frontend, and backend API integration.",
    problem:
      "Understanding how modern financial platforms handle real-time data, complex dashboards, and backend API integration requires hands-on implementation.",
    solution:
      "Built a full-stack Zerodha clone with a React.js frontend, Node.js/Express.js backend, MongoDB database, and responsive portfolio management UI.",
    objectives: [
      "Replicate a complex financial dashboard UI",
      "Implement backend API integration for trading data",
      "Build a responsive, feature-rich React application",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Stock trading dashboard",
      "Portfolio tracking and management",
      "Responsive frontend design",
      "Backend API integration",
      "Real-time-style data display",
    ],
    challenges:
      "Designing a complex, information-dense trading dashboard that remains usable on smaller screens without sacrificing key functionality.",
    results:
      "Completed full-stack project demonstrating proficiency in the MERN stack and complex UI implementation.",
    featured: false,
    year: "2024",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "Dart"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Flutter"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Databases",
    skills: ["MongoDB"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["AI Integration", "Gemini API", "AI-powered applications"],
  },
  {
    category: "Cloud & Deployment",
    skills: ["Firebase", "Vercel", "Firebase Hosting"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Narasaraopeta Engineering College",
    period: "2024 – 2028",
    cgpa: "8.5",
    details: "Currently pursuing, with focus on full-stack development and AI-powered applications.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Full Stack Web Development",
    issuer: "Apna College",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
