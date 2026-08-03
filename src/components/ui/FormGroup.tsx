import React from 'react';
import { cn } from '@/utils/helpers';

interface FormGroupProps {
  children: React.ReactNode;
  label?: string;
  htmlFor?: string;
  errorText?: string;
  descriptionText?: string;
  className?: string;
}

export const FormGroup = ({
  children,
  label,
  htmlFor,
  errorText,
  descriptionText,
  className = '',
}: FormGroupProps) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-xs font-semibold uppercase tracking-wider text-text-secondary select-none"
        >
          {label}
        </label>
      )}
      {children}
      {errorText && (
        <p className="text-xs text-error font-medium" role="alert">
          {errorText}
        </p>
      )}
      {!errorText && descriptionText && (
        <p className="text-xs text-text-muted">
          {descriptionText}
        </p>
      )}
    </div>
  );
};
export default FormGroup;
