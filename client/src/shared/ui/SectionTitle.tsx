import { cn } from '@/shared/lib';
import { Heading } from '@/shared/ui';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div className={cn('w-full', className)}>
      <Heading
        as="h3"
        className="mb-4 text-xl font-bold text-2nd sm:text-2xl lg:text-3xl text-left"
      >
        {title}
      </Heading>
      <div className="h-px w-full bg-black" />
    </div>
  );
}
