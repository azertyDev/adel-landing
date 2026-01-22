'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { type HTMLMotionProps, motion } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/shared/lib';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-black text-white shadow-md hover:shadow-xl active:bg-gray-800 active:shadow-sm focus:bg-gray-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none',
        secondary:
          'bg-white text-main shadow-md hover:shadow-xl active:bg-gray-100 active:shadow-sm focus:bg-bg focus:shadow-none disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none',
        glass:
          'bg-white/60 text-main backdrop-blur-[8.8px] shadow-[0px_4px_12px_rgba(0,0,0,0.03),inset_0px_2px_0px_rgba(255,255,255,0.25)] hover:bg-white/80 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.06),inset_0px_2px_0px_rgba(255,255,255,0.25)] active:bg-white/50 active:shadow-[0px_2px_8px_rgba(0,0,0,0.02)] focus:bg-bg/60 focus:shadow-none disabled:bg-gray-100/60 disabled:text-gray-400 disabled:shadow-none disabled:backdrop-blur-none',
        outline:
          'border border-black text-black hover:bg-black hover:text-white active:bg-gray-800 active:text-white focus:bg-gray-800 focus:text-white disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent',
        ghost:
          'text-black hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-100 disabled:text-gray-400 disabled:hover:bg-transparent',
        link: 'text-black underline-offset-4 hover:underline focus:underline disabled:text-gray-400 disabled:no-underline',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-[12px] sm:h-9 sm:px-4 sm:text-sm sm:rounded-[16px]',
        md: 'h-10 px-5 text-sm rounded-[16px] sm:h-12 sm:px-9 sm:text-base sm:rounded-[20px]',
        lg: 'h-11 px-6 text-base rounded-[18px] sm:h-14 sm:px-11 sm:text-lg sm:rounded-[20px]',
        icon: 'h-9 w-9 rounded-[16px] sm:h-11 sm:w-11 sm:rounded-[20px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
