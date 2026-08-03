import React from 'react';
import { cn } from '@/utils/helpers';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
}

export const Badge = ({ children, variant = 'primary', className = '', ...props }: BadgeProps) => {
  const baseStyle =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold select-none border transition-colors duration-200';

  const variants = {
    primary:
      'bg-brand-primary-light/80 dark:bg-brand-primary-light/10 text-brand-primary border-brand-primary/20 dark:border-brand-primary/30',
    secondary:
      'bg-brand-secondary-light/80 dark:bg-brand-secondary-light/10 text-brand-secondary border-brand-secondary/20 dark:border-brand-secondary/30',
    success: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 border-emerald-200 dark:border-emerald-900/30',
    warning: 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-450 border-amber-200 dark:border-amber-900/30',
    error: 'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-450 border-rose-200 dark:border-rose-900/30',
    outline: 'border-border-custom bg-transparent text-text-secondary hover:text-text-primary',
  };

  return (
    <span className={cn(baseStyle, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
export default Badge;
