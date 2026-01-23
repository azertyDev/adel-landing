import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { PaginationMeta } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';

interface ServerPaginationProps {
  meta: PaginationMeta;
  buildUrl: (params: Record<string, string | number | undefined>) => string;
  className?: string;
}

function getVisiblePages(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
  const pages: (number | 'ellipsis')[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push('ellipsis');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('ellipsis');
    }

    pages.push(totalPages);
  }

  return pages;
}

export function ServerPagination({ meta, buildUrl, className }: ServerPaginationProps) {
  const { page, pageCount } = meta;

  if (pageCount <= 1) return null;

  const visiblePages = getVisiblePages(page, pageCount);

  const buttonBase =
    'flex items-center justify-center rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed';
  const pageButton =
    'size-8 sm:size-10 text-sm sm:text-base font-medium hover:bg-gray-100 active:bg-gray-200';
  const navButton = 'size-8 sm:size-10 hover:bg-gray-100 active:bg-gray-200';
  const disabledStyles = 'opacity-40 cursor-not-allowed pointer-events-none';

  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center justify-center gap-1 sm:gap-2 mt-8', className)}
    >
      {/* Previous */}
      {page > 1 ? (
        <Link
          href={buildUrl({ page: page - 1 })}
          className={cn(buttonBase, navButton)}
          aria-label="Previous page"
        >
          <ChevronLeft className="size-5" />
        </Link>
      ) : (
        <span className={cn(buttonBase, navButton, disabledStyles)} aria-disabled="true">
          <ChevronLeft className="size-5" />
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {/* biome-ignore lint/suspicious/noArrayIndexKey: ellipsis items are stable */}
        {visiblePages.map((p, index) =>
          p === 'ellipsis' ? (
            <span
              key={`ellipsis-${index}`}
              className="size-8 sm:size-10 flex items-center justify-center text-gray-400"
            >
              ...
            </span>
          ) : (
            <Link
              key={p}
              href={buildUrl({ page: p })}
              className={cn(
                buttonBase,
                pageButton,
                page === p && 'bg-main text-white hover:bg-main/90 active:bg-main/80'
              )}
              aria-label={`Page ${p}`}
              aria-current={page === p ? 'page' : undefined}
            >
              {p}
            </Link>
          )
        )}
      </div>

      {/* Next */}
      {page < pageCount ? (
        <Link
          href={buildUrl({ page: page + 1 })}
          className={cn(buttonBase, navButton)}
          aria-label="Next page"
        >
          <ChevronRight className="size-5" />
        </Link>
      ) : (
        <span className={cn(buttonBase, navButton, disabledStyles)} aria-disabled="true">
          <ChevronRight className="size-5" />
        </span>
      )}
    </nav>
  );
}
