import React, { forwardRef } from 'react';
import { cn } from '@/utils/helpers';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-lg border border-border-custom bg-white px-3 py-2 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-900 dark:border-slate-800',
          error && 'border-error focus:border-error focus:ring-error',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextArea.displayName = 'TextArea';
export default TextArea;
