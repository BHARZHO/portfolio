import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/helpers';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glass?: boolean;
}

export const Card = ({ children, hoverEffect = false, glass = false, className = '', ...props }: CardProps) => {
  const baseStyle = 'rounded-xl border border-border-custom shadow-sm transition-colors duration-300';
  const glassStyle = 'bg-bg-glass backdrop-blur-md border-white/20 dark:border-white/10 shadow-glass';
  const normalStyle = 'bg-bg-secondary';

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const MotionDiv = motion.div as any;

  return (
    <MotionDiv
      whileHover={hoverEffect ? { y: -4, boxShadow: 'var(--shadow-md)' } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(baseStyle, glass ? glassStyle : normalStyle, className)}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

export const CardHeader = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 p-6 pb-4', className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-lg font-semibold leading-none tracking-tight text-text-primary', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-sm text-text-secondary', className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center p-6 pt-0 border-t border-border-custom/50 mt-4', className)} {...props}>
    {children}
  </div>
);

export default Card;
