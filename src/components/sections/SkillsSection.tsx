import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SkillCard } from '@/components/ui/SkillCard';
import { skills } from '@/data/skills';

export const SkillsSection = () => {
  // Define categories to group skills
  const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

  const groupedSkills = categories.reduce((acc, category) => {
    acc[category] = skills.filter((skill) => skill.category === category);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies, libraries, and tools I use to build scalable software."
        />

        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = groupedSkills[category];
            if (!categorySkills || categorySkills.length === 0) return null;

            return (
              <div key={category} className="space-y-6">
                {/* Category Heading Accent */}
                <h3 className="text-sm font-bold tracking-wider text-text-primary uppercase border-l-4 border-brand-primary pl-3 select-none">
                  {category}
                </h3>
                
                {/* Responsive Grid list of SkillCards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default SkillsSection;
