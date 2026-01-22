'use client';

import { Share2 } from 'lucide-react';
import { useCallback } from 'react';
import { toast } from 'sonner';
import { cn } from '@/shared/lib';

interface ShareButtonProps {
  productSlug: string;
  productName: string;
  className?: string;
}

export function ShareButton({ productSlug, productName, className }: ShareButtonProps) {
  const handleShare = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const url = `${window.location.origin}/products/${productSlug}`;

      try {
        await navigator.clipboard.writeText(url);
        toast.success('Link copied!', {
          description: `${productName} link copied to clipboard`,
        });
      } catch {
        toast.error('Failed to copy link');
      }
    },
    [productSlug, productName]
  );

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={`Share ${productName}`}
      className={cn(
        'p-2 rounded-full bg-white/80 backdrop-blur-sm',
        'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
        'hover:bg-white hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400',
        'sm:opacity-100 sm:group-hover:opacity-100',
        className
      )}
    >
      <Share2 className="size-4 text-main" />
    </button>
  );
}
