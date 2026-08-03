import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export const ProjectSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle title="Projects" subtitle="A showcase of some of my works and projects." />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default ProjectSection;
