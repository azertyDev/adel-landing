'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/shared/lib';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, checked, onChange, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <label
        htmlFor={checkboxId}
        className={cn('flex cursor-pointer items-center gap-3', className)}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            onChange={onChange}
            className="sr-only"
            {...props}
          />
          <motion.div
            className={cn(
              'flex h-4 sm:h-6 w-4 sm:w-6 items-center justify-center rounded-md border-2 transition-colors',
              checked
                ? 'border-main bg-main'
                : 'border-gray-300 bg-white/60 backdrop-blur-sm hover:border-gray-400'
            )}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              initial={false}
              animate={{
                scale: checked ? 1 : 0,
                opacity: checked ? 1 : 0,
              }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
            </motion.div>
          </motion.div>
        </div>
        {label && <span className="text-sm sm:text-xl text-main select-none">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, type CheckboxProps };
