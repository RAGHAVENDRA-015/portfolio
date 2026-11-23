export interface Project {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  objectives: string[];
  technologies: string[];
  features: string[];
  challenges: string;
  results: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface PersonInfo {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}
