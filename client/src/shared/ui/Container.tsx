import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/lib';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  as?: 'div' | 'section' | 'article' | 'main';
}

export function Container({
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn('mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-16', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
