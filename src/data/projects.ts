import type { Project } from '../types';
import amatAtelierImg from '@/assets/images/amat_atelier.png';
import blogAppImg from '@/assets/images/blog_app.png';
import quizzifyImg from '@/assets/images/quizzify.png';
import edutrackImg from '@/assets/images/edutrack.png';

export const projects: Project[] = [
  {
    id: 'project-edutrack',
    title: 'EduTrack',
    description: 'An AI-powered educational analytics platform designed to predict academic risk, identify performance patterns, and provide personalized intervention strategies. This project won 1st Place in the AI Hackathon by The 234Project.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI APIs', 'Vite'],
    imageUrl: edutrackImg,
    liveUrl: 'https://v0-landing-page-design-amber-beta.vercel.app/',
    category: 'Full Stack',
    featured: true
  },
  {
    id: 'project-amat-atelier',
    title: 'Amat Atelier',
    description: 'A professional, full-stack web application designed for a luxury fashion designer atelier. Features catalog showcasing, custom order tracking, consultations scheduling, and client management pipelines.',
    technologies: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'JavaScript'],
    imageUrl: amatAtelierImg,
    githubUrl: 'https://github.com/BHARZHO/AmatAtelier',
    category: 'Full Stack',
    featured: true
  },
  {
    id: 'project-blog-app',
    title: 'BlogApp',
    description: 'A modern, robust content publishing platform built to ensure high data integrity, reliability, and maintenance. Supports secure author authentication, content categorization, rich text management, and commenting systems.',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    imageUrl: blogAppImg,
    githubUrl: 'https://github.com/BHARZHO/Blog-App',
    category: 'Backend',
    featured: true
  },
  {
    id: 'project-quizzify',
    title: 'Quizzify',
    description: 'An interactive, gamified assessment web application designed to evaluate students. Includes a real-time question engine, customizable quiz templates, automatic score calculating, and gifting rewards integrations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    imageUrl: quizzifyImg,
    githubUrl: 'https://github.com/BHARZHO/Quizzify',
    category: 'Frontend',
    featured: true
  }
];
