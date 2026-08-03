import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { Skill } from '@/types';
import { Card } from './Card';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  const IconComponent = skill.iconName
    ? (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[skill.iconName] || LucideIcons.Code
    : LucideIcons.Code;

  return (
    <Card className="flex items-center space-x-4 p-4 hover:shadow-md transition-shadow">
      {/* Dynamic Theme Bound Icon wrapper */}
      <div className="p-2.5 rounded-xl bg-brand-primary-light/60 text-brand-primary dark:bg-brand-primary-light/10 border border-brand-primary/10">
        <IconComponent className="h-5 w-5" />
      </div>
      
      {/* Skill details and progress bar */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-text-primary text-sm truncate">{skill.name}</h4>
        {skill.level !== undefined && (
          <div className="mt-2.5">
            <div className="h-1.5 w-full bg-bg-primary rounded-full overflow-hidden border border-border-custom/30">
              <div
                className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <div className="flex justify-between mt-1 text-[10px] font-medium text-text-muted">
              <span>Expertise</span>
              <span>{skill.level}%</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
export default SkillCard;
