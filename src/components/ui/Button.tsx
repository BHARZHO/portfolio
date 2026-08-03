import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/helpers';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none';

  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm shadow-brand-primary/10',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary-hover shadow-sm shadow-brand-secondary/10',
    outline:
      'border border-border-custom bg-transparent text-text-primary hover:bg-bg-secondary dark:hover:bg-slate-900',
    ghost:
      'bg-transparent text-text-primary hover:bg-bg-secondary dark:hover:bg-slate-900',
    glass:
      'bg-white/10 dark:bg-slate-950/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-text-primary hover:bg-white/20 dark:hover:bg-slate-950/20 shadow-glass',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  const isDisabled = disabled || isLoading;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const MotionButton = motion.button as any;

  return (
    <MotionButton
      whileHover={isDisabled ? undefined : { scale: 1.02 }}
      whileTap={isDisabled ? undefined : { scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
      {!isLoading && leftIcon && <span className="flex items-center justify-center">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="flex items-center justify-center">{rightIcon}</span>}
    </MotionButton>
  );
};
export default Button;
