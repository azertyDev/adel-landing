import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/lib';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps extends ComponentPropsWithoutRef<'nav'> {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center', className)} {...props}>
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-gray-500 transition-colors hover:text-black">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast ? 'font-medium text-black' : 'text-gray-500')}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="h-4 w-4 text-gray-400" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
