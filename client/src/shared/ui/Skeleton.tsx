import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/lib';

export function Skeleton({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('animate-pulse rounded-lg bg-gray-200', className)} {...props} />;
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4">
      <Skeleton className="mb-4 aspect-square w-full rounded-xl" />
      <Skeleton className="mb-2 h-5 w-3/4" />
      <Skeleton className="mb-4 h-4 w-1/2" />
      <Skeleton className="h-6 w-1/3" />
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={`skeleton-${i}`} />
      ))}
    </div>
  );
}
