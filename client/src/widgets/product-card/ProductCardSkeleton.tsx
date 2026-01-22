import { cn } from '@/shared/lib';

interface ProductCardSkeletonProps {
  className?: string;
}

export function ProductCardSkeleton({ className }: ProductCardSkeletonProps) {
  return (
    <div
      className={cn(
        'flex overflow-hidden animate-pulse',
        // Mobile: vertical layout
        'flex-col sm:flex-row sm:items-stretch',
        // Padding
        'p-4 sm:p-6 lg:p-8',
        // Border radius
        'rounded-3xl sm:rounded-[40px]',
        // Background
        'bg-white/60 backdrop-blur-xl',
        className
      )}
    >
      {/* Mobile: Image placeholder on top */}
      <div className="aspect-square w-full sm:hidden mb-4 bg-gray-200 rounded-2xl" />

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between sm:py-2">
        {/* Name placeholder */}
        <div className="h-6 bg-gray-200 rounded w-3/4" />

        {/* Price placeholder */}
        <div className="h-5 bg-gray-200 rounded w-1/4 mt-2" />

        {/* Color dots placeholder */}
        <div className="flex gap-2 mt-4">
          <div className="size-4 bg-gray-200 rounded-full" />
          <div className="size-4 bg-gray-200 rounded-full" />
          <div className="size-4 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Desktop: Image placeholder on right */}
      <div className="hidden sm:block w-2/5 shrink-0 bg-gray-200 rounded-2xl" />
    </div>
  );
}
