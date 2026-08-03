import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Skills } from '@/pages/Skills';
import { Experience } from '@/pages/Experience';
import { Projects } from '@/pages/Projects';
import { Certifications } from '@/pages/Certifications';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: <Projects /> },
      { path: 'certifications', element: <Certifications /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
