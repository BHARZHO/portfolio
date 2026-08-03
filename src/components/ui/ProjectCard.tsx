import type { Project } from '@/types';
import { Card } from './Card';
import { Badge } from './Badge';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden group hover:shadow-md transition-shadow">
      {/* Project Image Card Header */}
      <div className="relative aspect-video w-full overflow-hidden bg-bg-primary border-b border-border-custom/40">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-primary/10 via-indigo-500/5 to-brand-secondary/10 group-hover:scale-103 transition-transform duration-500">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted select-none">
              Project Preview
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant="primary" className="shadow-sm">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Project details */}
      <div className="flex-grow p-5 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Link Triggers */}
        <div className="flex items-center space-x-6 text-xs font-semibold mt-6 pt-4 border-t border-border-custom/40">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-brand-primary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Source Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-hover transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
export default ProjectCard;
