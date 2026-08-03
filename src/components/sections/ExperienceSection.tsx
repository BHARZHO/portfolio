import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experience } from '@/data/experience';

export const ExperienceSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle title="Work Experience" subtitle="A timeline of my professional journey." />
        
        <div className="mx-auto max-w-3xl space-y-8">
          {experience.map((exp) => (
            <Card key={exp.id} className="p-6">
              {/* Responsive Header Row */}
              <div className="flex flex-col justify-between md:flex-row mb-4 border-b border-border-custom/40 pb-3 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-brand-primary font-semibold text-sm">{exp.company}</span>
                    <span className="text-xs text-text-muted select-none">&bull;</span>
                    <span className="text-xs text-text-muted font-medium">{exp.location}</span>
                  </div>
                </div>
                <div className="text-sm font-semibold text-text-muted mt-1 md:mt-0 whitespace-nowrap bg-bg-primary px-3 py-1 rounded-full border border-border-custom/50 self-start md:self-center">
                  {exp.startDate} &mdash; {exp.endDate}
                </div>
              </div>
              
              {/* Role Bulleted Highlights */}
              <ul className="list-disc pl-5 space-y-2 text-sm text-text-secondary">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
              
              {/* Technologies Badge List */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border-custom/30 pt-4">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default ExperienceSection;
