import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/shared/lib';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex h-11 w-full rounded-xl border bg-white px-4 py-2 text-base',
          'placeholder:text-gray-400 placeholder:text-sm',
          'outline-none',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'transition-colors duration-200',
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
