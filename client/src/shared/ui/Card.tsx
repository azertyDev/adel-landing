'use client';

import { type HTMLMotionProps, motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/shared/lib';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  hoverable?: boolean;
  children?: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, children, ...props }, ref) => {
    if (hoverable) {
      return (
        <motion.div
          ref={ref}
          className={cn(
            'rounded-2xl bg-white border border-gray-100 overflow-hidden',
            'shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
            className
          )}
          whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
          transition={{ duration: 0.2 }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl bg-white border border-gray-100 overflow-hidden',
          'shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-6', className)} {...props} />
);

CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
);

CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardFooter, CardHeader };
