import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/lib';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {
  as?: HeadingLevel;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
  h2: 'text-3xl sm:text-4xl font-bold tracking-tight',
  h3: 'text-2xl sm:text-3xl font-semibold tracking-tight',
  h4: 'text-xl sm:text-2xl font-semibold',
  h5: 'text-lg sm:text-xl font-medium',
  h6: 'text-base sm:text-lg font-medium',
};

export function Heading({ as: Component = 'h2', className, children, ...props }: HeadingProps) {
  return (
    <Component className={cn(headingStyles[Component], 'text-black', className)} {...props}>
      {children}
    </Component>
  );
}

interface TextProps extends ComponentPropsWithoutRef<'p'> {
  variant?: 'body' | 'lead' | 'small' | 'muted';
}

const textStyles: Record<string, string> = {
  body: 'text-base leading-relaxed',
  lead: 'text-lg sm:text-xl leading-relaxed',
  small: 'text-sm leading-normal',
  muted: 'text-base leading-relaxed text-gray-500',
};

export function Text({ variant = 'body', className, children, ...props }: TextProps) {
  return (
    <p className={cn(textStyles[variant], className)} {...props}>
      {children}
    </p>
  );
}
