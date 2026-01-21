import { cn } from '@/shared/lib';

interface GlassLineProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function GlassLine({ className, orientation = 'horizontal' }: GlassLineProps) {
  return (
    <div
      className={cn(
        'bg-white/5 backdrop-blur-[20px]',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
    />
  );
}
