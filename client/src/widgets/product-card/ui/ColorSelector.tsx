'use client';

import type { ColorVariant } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';

interface ColorSelectorProps {
  variants: ColorVariant[];
  selectedId: string;
  onSelect: (id: string) => void;
  onHover?: (variant: ColorVariant) => void;
  className?: string;
}

export function ColorSelector({
  variants,
  selectedId,
  onSelect,
  onHover,
  className,
}: ColorSelectorProps) {
  if (variants.length === 0) return null;

  return (
    <div
      role="radiogroup"
      aria-label="Select color"
      className={cn(
        // White pill container as in design
        'inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3',
        'bg-white rounded-full',
        'px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5',
        'shadow-md',
        className
      )}
    >
      {variants.map((variant) => {
        const isSelected = variant.id === selectedId;

        return (
          <label
            key={variant.id}
            title={variant.name}
            className="relative cursor-pointer"
            onMouseEnter={() => onHover?.(variant)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <input
              type="radio"
              name="color-selector"
              value={variant.id}
              checked={isSelected}
              onChange={(e) => {
                e.stopPropagation();
                onSelect(variant.id);
              }}
              onClick={(e) => e.stopPropagation()}
              className="sr-only peer"
              aria-label={variant.name}
            />
            <span
              className={cn(
                // Responsive dot sizes
                'block size-3 sm:size-4 md:size-5 lg:size-6 rounded-full transition-all duration-200',
                'ring-1 ring-black/10',
                'hover:scale-110',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-gray-400',
                isSelected && 'ring-2 ring-offset-1 sm:ring-offset-2 ring-gray-400'
              )}
              style={{ backgroundColor: variant.hex }}
            />
          </label>
        );
      })}
    </div>
  );
}
