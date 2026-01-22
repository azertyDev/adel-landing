'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/shared/lib';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function getVisiblePages(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
  const pages: (number | 'ellipsis')[] = [];

  if (totalPages <= 7) {
    // Show all pages if 7 or less
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push('ellipsis');
    }

    // Pages around current
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('ellipsis');
    }

    // Always show last page
    pages.push(totalPages);
  }

  return pages;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages(currentPage, totalPages);

  const buttonBase =
    'flex items-center justify-center rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer';
  const pageButton =
    'size-8 sm:size-10 text-sm sm:text-base font-medium hover:bg-gray-100 active:bg-gray-200 cursor-pointer';
  const navButton = 'size-8 sm:size-10 hover:bg-gray-100 active:bg-gray-200 cursor-pointer';

  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center justify-center gap-1 sm:gap-2 mt-8', className)}
    >
      {/* Previous */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(buttonBase, navButton)}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 cursor-pointer">
        {/* biome-ignore lint/suspicious/noArrayIndexKey: ellipsis items are stable */}
        {visiblePages.map((page, index) =>
          page === 'ellipsis' ? (
            <span
              key={`ellipsis-${index}`}
              className="size-8 sm:size-10 flex items-center justify-center text-gray-400"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={cn(
                buttonBase,
                pageButton,
                currentPage === page && 'bg-main text-white hover:bg-main/90 active:bg-main/80'
              )}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(buttonBase, navButton)}
        aria-label="Next page"
      >
        <ChevronRight className="size-5" />
      </button>
    </nav>
  );
}
