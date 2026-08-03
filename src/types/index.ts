export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  iconName?: string; // Reference to Lucide icon name
  level?: number;    // Proficiency percentage (0-100)
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string; // E.g., "Present" or "Dec 2024"
  current: boolean;
  description: string[];
  technologies?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string; // Reference to Lucide icon name
}

export interface NavigationItem {
  label: string;
  path: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  github?: string;
  linkedin?: string;
}
