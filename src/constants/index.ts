import type { NavigationItem, SocialLink } from '../types';

export const NAVIGATION_LINKS: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/BHARZHO', iconName: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdul-salam-abdul-basit-ba9170265/', iconName: 'Linkedin' },
  { name: 'Twitter', url: 'https://x.com/Abdulsa68600496', iconName: 'Twitter' },
];

export const SKILL_CATEGORIES = [
  'Frontend',
  'Backend',
  'Mobile',
  'Cloud / DevOps',
  'Tools / Design',
] as const;

export const TECHNOLOGIES = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'Next.js',
  'Node.js',
  'Express',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Git',
] as const;

export const PROJECT_CATEGORIES = [
  'All',
  'Web App',
  'Mobile',
  'Open Source',
  'Design',
] as const;
