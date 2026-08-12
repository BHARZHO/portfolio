import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: 'exp-hackathon',
    role: 'AI Hackathon & Art Fair (1st Place Winner)',
    company: 'The 234Project',
    location: 'Nigeria',
    startDate: 'Aug 2025',
    endDate: 'Aug 2025',
    current: false,
    description: [
      'Competed in the AI Hackathon as part of Team Code, where our solution earned 1st place among all participating teams.',
      'Collaborated with a cross-functional team of 4 developers to design and develop a fully functional web solution under strict time constraints.',
      'Translated client ideas into high-fidelity prototypes and implemented feedback to improve UI/UX design.',
      'Gained hands-on experience in team collaboration, problem-solving, and rapid prototyping while leveraging creativity and technical expertise.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI APIs', 'Figma', 'Vite']
  },
  {
    id: 'exp-freelance',
    role: 'Web Developer & UI/UX Designer',
    company: 'Freelance',
    location: 'Nigeria',
    startDate: 'May 2023',
    endDate: 'Present',
    current: true,
    description: [
      'Create visually appealing and responsive UI designs that meet high modern standards.',
      'Develop web solutions tailored to client specifications and user requirements.',
      'Design high-fidelity wireframes, interactive prototypes, and modern user interfaces.'
    ],
    technologies: ['React', 'TypeScript', 'UI/UX Design', 'Figma', 'Wireframing', 'Prototyping']
  },
  {
    id: 'exp-fullstack',
    role: 'Full Stack Engineer',
    company: 'Mirza Gulam Qadir Shaheed (MGQS)',
    location: 'Nigeria',
    startDate: 'Jul 2023',
    endDate: 'Jul 2024',
    current: false,
    description: [
      'Worked with experienced developers and solutions providers in resolving technical challenges and creating modern, responsive sites.',
      'Created visually appealing and highly responsive websites meeting industry standards.'
    ],
    technologies: ['C#', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
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
      'Collaborated with other interns in designing and developing a fully functional website using HTML, CSS, and JavaScript.',
      'Worked closely with developers and designers to iterate client feedback on UI/UX designs.',
      'Worked with the team to convert client ideas into high-fidelity interactive prototypes.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Prototyping']
  }
];
