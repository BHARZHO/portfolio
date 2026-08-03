import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: 'exp-freelance',
    role: 'Freelance Web Developer & UI/UX Designer',
    company: 'Freelance',
    location: 'Remote',
    startDate: 'May 2023',
    endDate: 'Present',
    current: true,
    description: [
      'Design and develop modern, responsive websites for clients and personal projects.',
      'Create intuitive UI/UX designs, wireframes, and interactive prototypes in Figma.',
      'Translate business requirements into clean, user-centered digital experiences.',
      'Continuously improve designs through feedback and usability best practices.'
    ],
    technologies: ['React', 'TypeScript', 'Figma', 'Tailwind CSS', 'UI/UX Design']
  },
  {
    id: 'exp-president',
    role: 'President',
    company: 'Ahmadiyyah Muslim Students Association (AMSA), Lagos State University',
    location: 'Lagos, Nigeria',
    startDate: 'Jul 2025',
    endDate: 'Jul 2027',
    current: false,
    description: [
      'Led the executive team in planning and coordinating student-focused initiatives.',
      'Organized educational seminars, leadership programs, and community outreach activities.',
      'Represented the association in engagements with university bodies and external organizations.',
      'Strengthened leadership, public speaking, team coordination, and organizational management skills.'
    ],
    technologies: ['Leadership', 'Project Management', 'Public Speaking', 'Team Coordination']
  },
  {
    id: 'exp-hackathon',
    role: 'AI Hackathon Winner (1st Place)',
    company: 'The 234Project',
    location: 'Nigeria',
    startDate: 'Aug 2025',
    endDate: 'Aug 2025',
    current: false,
    description: [
      'Collaborated with a team of four developers to design and build a functional AI-powered web solution.',
      'Delivered the project under strict hackathon deadlines using effective teamwork and rapid problem-solving.',
      'Won 1st Place among participating teams for innovation and execution.',
      'Gained practical experience in rapid prototyping, collaboration, and product delivery.'
    ],
    technologies: ['React', 'Vite', 'AI APIs Integration', 'Rapid Prototyping']
  },
  {
    id: 'exp-fullstack',
    role: 'Full Stack Engineer',
    company: 'Mirza Ghulam Qadir Shaheed (MGQS)',
    location: 'Nigeria',
    startDate: 'Jul 2023',
    endDate: 'Jul 2024',
    current: false,
    description: [
      'Built and maintained responsive web applications alongside experienced developers.',
      'Collaborated with the development team to deliver scalable, user-friendly solutions.',
      'Improved website responsiveness, usability, and overall user experience.',
      'Contributed to solving technical challenges while following modern web development practices.'
    ],
    technologies: ['C#', 'ASP.NET Core MVC', 'MySQL', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    id: 'exp-intern',
    role: 'Web Developer Intern',
    company: 'United Way Greater Nigeria',
    location: 'Nigeria',
    startDate: 'Sep 2023',
    endDate: 'Nov 2023',
    current: false,
    description: [
      'Collaborated with a multidisciplinary team to build a fully functional website using HTML, CSS, and JavaScript.',
      'Worked closely with designers to refine UI/UX based on client feedback.',
      'Converted design concepts into high-fidelity, responsive web interfaces.',
      'Strengthened teamwork, communication, and agile development skills.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Prototyping', 'Git']
  }
];
