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
      className={cn('flex items-center gap-2', className)}
    >
      {variants.map((variant) => {
        const isSelected = variant.id === selectedId;

        return (
          <label
            key={variant.id}
            title={variant.name}
            className="relative cursor-pointer"
            onMouseEnter={() => onHover?.(variant)}
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
                'block size-3 sm:size-3.5 lg:size-4 rounded-full transition-all duration-200',
                'ring-1 ring-black/10',
                'hover:scale-110',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-gray-400',
                isSelected && 'ring-2 ring-offset-2 ring-gray-400'
              )}
              style={{ backgroundColor: variant.hex }}
            />
          </label>
        );
      })}
    </div>
  );
}
