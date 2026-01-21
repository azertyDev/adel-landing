# ProductCard Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign ProductCard with interactive color selection that changes the product image.

**Architecture:** Color variants with linked images, state management for selection, image preloading on hover, accessible keyboard navigation, share functionality.

**Tech Stack:** React 19, TypeScript, Framer Motion, next/image, next-intl

**Design Doc:** `docs/plans/2025-01-21-product-card-redesign.md`

---

## Task 1: Update Product Types

**Files:**
- Modify: `src/shared/api/strapi/types.ts`

**Step 1: Add ColorVariant interface**

```typescript
// Add after existing interfaces
export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  image: string;
}
```

**Step 2: Update Product interface**

Replace `colors` and update `images`:

```typescript
export interface Product {
  id: string;
  documentId: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: 'USD' | 'TRY';
  model: string;
  size: string;
  colorVariants: ColorVariant[];
  thumbnail: string;
  categoryId?: string;
  brandId?: string;
  // Remove: colors: string[];
  // Remove: images: string[];
}
```

**Step 3: Commit**

```bash
git add src/shared/api/strapi/types.ts
git commit -m "refactor: update Product type with ColorVariant"
```

---

## Task 2: Update Mock Data

**Files:**
- Modify: `src/shared/mocks/products.ts`

**Step 1: Update mock products with colorVariants**

```typescript
export const mockProducts: Product[] = [
  {
    id: '1',
    documentId: 'prod-001',
    slug: 'premium-coffee-machine',
    name: 'Premium Coffee Machine',
    description: 'A premium coffee machine with advanced features.',
    price: 299,
    currency: 'USD',
    model: 'PCM-2000',
    size: '35x25x40 cm',
    thumbnail: '/image/general-img-square.png',
    colorVariants: [
      {
        id: 'cv-1-1',
        name: 'Black',
        hex: '#2D2D2D',
        image: '/image/general-img-square.png',
      },
      {
        id: 'cv-1-2',
        name: 'White',
        hex: '#FFFFFF',
        image: '/image/general-img-square.png',
      },
      {
        id: 'cv-1-3',
        name: 'Red',
        hex: '#C41E3A',
        image: '/image/general-img-square.png',
      },
    ],
  },
  // ... update other products similarly
];
```

**Step 2: Commit**

```bash
git add src/shared/mocks/products.ts
git commit -m "refactor: update mock products with colorVariants"
```

---

## Task 3: Create formatPrice Utility

**Files:**
- Create: `src/widgets/product-card/lib/formatPrice.ts`

**Step 1: Create the utility**

```typescript
type Currency = 'USD' | 'TRY';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  TRY: '₺',
};

export function formatPrice(price: number, currency: Currency): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  const formatted = price.toLocaleString('en-US');
  return `${symbol}${formatted}`;
}
```

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 3: Commit**

```bash
git add src/widgets/product-card/lib/formatPrice.ts
git commit -m "feat(product-card): add formatPrice utility"
```

---

## Task 4: Create useImagePreload Hook

**Files:**
- Create: `src/widgets/product-card/lib/useImagePreload.ts`

**Step 1: Create the hook**

```typescript
'use client';

import { useCallback } from 'react';

export function useImagePreload() {
  const preload = useCallback((src: string) => {
    const img = new Image();
    img.src = src;
  }, []);

  return { preload };
}
```

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 3: Commit**

```bash
git add src/widgets/product-card/lib/useImagePreload.ts
git commit -m "feat(product-card): add useImagePreload hook"
```

---

## Task 5: Create lib/index.ts Export

**Files:**
- Create: `src/widgets/product-card/lib/index.ts`

**Step 1: Create barrel export**

```typescript
export { formatPrice } from './formatPrice';
export { useImagePreload } from './useImagePreload';
```

**Step 2: Commit**

```bash
git add src/widgets/product-card/lib/index.ts
git commit -m "feat(product-card): add lib barrel export"
```

---

## Task 6: Create ColorSelector Component

**Files:**
- Create: `src/widgets/product-card/ui/ColorSelector.tsx`

**Step 1: Create the component**

```typescript
'use client';

import { useCallback } from 'react';
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
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      const lastIndex = variants.length - 1;

      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp': {
          e.preventDefault();
          const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
          onSelect(variants[prevIndex].id);
          break;
        }
        case 'ArrowRight':
        case 'ArrowDown': {
          e.preventDefault();
          const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
          onSelect(variants[nextIndex].id);
          break;
        }
      }
    },
    [variants, onSelect]
  );

  if (variants.length === 0) return null;

  return (
    <div
      role="radiogroup"
      aria-label="Select color"
      className={cn('flex items-center gap-2', className)}
    >
      {variants.map((variant, index) => {
        const isSelected = variant.id === selectedId;

        return (
          <button
            key={variant.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={variant.name}
            title={variant.name}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelect(variant.id);
            }}
            onMouseEnter={() => onHover?.(variant)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              'size-3 sm:size-3.5 lg:size-4 rounded-full transition-all duration-200',
              'ring-1 ring-black/10',
              'hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400',
              isSelected && 'ring-2 ring-offset-2 ring-gray-400'
            )}
            style={{ backgroundColor: variant.hex }}
          />
        );
      })}
    </div>
  );
}
```

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 3: Commit**

```bash
git add src/widgets/product-card/ui/ColorSelector.tsx
git commit -m "feat(product-card): add ColorSelector component with a11y"
```

---

## Task 7: Create ProductImage Component

**Files:**
- Create: `src/widgets/product-card/ui/ProductImage.tsx`

**Step 1: Create the component**

```typescript
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/shared/lib';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FALLBACK_IMAGE = '/image/general-img-square.png';

export function ProductImage({ src, alt, className }: ProductImageProps) {
  const [imgError, setImgError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Reset error state when src changes
  if (src !== currentSrc) {
    setCurrentSrc(src);
    setImgError(false);
  }

  const imageSrc = imgError ? FALLBACK_IMAGE : src;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={imageSrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn('relative', className)}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 45vw, 35vw"
          className="object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      </motion.div>
    </AnimatePresence>
  );
}
```

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 3: Commit**

```bash
git add src/widgets/product-card/ui/ProductImage.tsx
git commit -m "feat(product-card): add ProductImage with animation and fallback"
```

---

## Task 8: Create ShareButton Component

**Files:**
- Create: `src/widgets/product-card/ui/ShareButton.tsx`

**Step 1: Create the component**

```typescript
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
```

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 3: Commit**

```bash
git add src/widgets/product-card/ui/ShareButton.tsx
git commit -m "feat(product-card): add ShareButton component"
```

---

## Task 9: Create ui/index.ts Export

**Files:**
- Create: `src/widgets/product-card/ui/index.ts`

**Step 1: Create barrel export**

```typescript
export { ColorSelector } from './ColorSelector';
export { ProductImage } from './ProductImage';
export { ShareButton } from './ShareButton';
```

**Step 2: Commit**

```bash
git add src/widgets/product-card/ui/index.ts
git commit -m "feat(product-card): add ui barrel export"
```

---

## Task 10: Refactor ProductCard Component

**Files:**
- Modify: `src/widgets/product-card/ProductCard.tsx`

**Step 1: Rewrite the component**

```typescript
'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n';
import type { Product } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';
import { formatPrice, useImagePreload } from './lib';
import { ColorSelector, ProductImage, ShareButton } from './ui';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { preload } = useImagePreload();

  const [selectedColorId, setSelectedColorId] = useState(
    product.colorVariants[0]?.id ?? ''
  );

  const selectedVariant = useMemo(
    () => product.colorVariants.find((v) => v.id === selectedColorId),
    [product.colorVariants, selectedColorId]
  );

  const currentImage = selectedVariant?.image ?? product.thumbnail;
  const altText = `${product.name}${selectedVariant ? ` - ${selectedVariant.name}` : ''}`;

  const handleColorHover = (variant: { image: string }) => {
    preload(variant.image);
  };

  return (
    <Link href={`/products/${product.slug}`} className={cn('block', className)}>
      <motion.article
        className={cn(
          'group relative flex overflow-hidden',
          // Mobile: vertical layout
          'flex-col sm:flex-row sm:items-stretch',
          // Padding
          'p-4 sm:p-6 lg:p-8',
          // Border radius
          'rounded-3xl sm:rounded-[40px]',
          // Background
          'bg-white/60 backdrop-blur-xl',
          // Shadow
          'shadow-sm transition-shadow duration-300 hover:shadow-lg'
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {/* Share Button - absolute positioned */}
        <div className="absolute top-4 right-4 z-10 sm:top-6 sm:right-6">
          <ShareButton productSlug={product.slug} productName={product.name} />
        </div>

        {/* Mobile: Image on top */}
        <div className="relative aspect-square w-full sm:hidden mb-4">
          <ProductImage src={currentImage} alt={altText} className="h-full w-full" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between sm:py-2">
          {/* Name */}
          <h3 className="font-semibold text-main leading-tight text-base sm:text-lg lg:text-xl xl:text-2xl">
            {product.name}
          </h3>

          {/* Price */}
          <p className="text-main/80 text-sm sm:text-base lg:text-lg mt-2">
            {formatPrice(product.price, product.currency)}
          </p>

          {/* Color Selector */}
          {product.colorVariants.length > 0 && (
            <ColorSelector
              variants={product.colorVariants}
              selectedId={selectedColorId}
              onSelect={setSelectedColorId}
              onHover={handleColorHover}
              className="mt-4"
            />
          )}
        </div>

        {/* Desktop: Image on right */}
        <div className="relative hidden sm:block w-2/5 shrink-0">
          <ProductImage src={currentImage} alt={altText} className="h-full w-full" />
        </div>
      </motion.article>
    </Link>
  );
}
```

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 3: Commit**

```bash
git add src/widgets/product-card/ProductCard.tsx
git commit -m "feat(product-card): refactor with color selection and new design"
```

---

## Task 11: Create ProductCardSkeleton Component

**Files:**
- Create: `src/widgets/product-card/ProductCardSkeleton.tsx`

**Step 1: Create the skeleton**

```typescript
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
```

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 3: Commit**

```bash
git add src/widgets/product-card/ProductCardSkeleton.tsx
git commit -m "feat(product-card): add ProductCardSkeleton component"
```

---

## Task 12: Update Widget Index Export

**Files:**
- Modify: `src/widgets/product-card/index.ts`

**Step 1: Update exports**

```typescript
export { ProductCard } from './ProductCard';
export { ProductCardSkeleton } from './ProductCardSkeleton';
```

**Step 2: Commit**

```bash
git add src/widgets/product-card/index.ts
git commit -m "feat(product-card): export ProductCardSkeleton"
```

---

## Task 13: Update Strapi API Types Export

**Files:**
- Modify: `src/shared/api/strapi/index.ts`

**Step 1: Add ColorVariant to exports**

Verify that `ColorVariant` is exported from types.ts. If the barrel file doesn't export it, add:

```typescript
export type { ColorVariant } from './types';
```

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 3: Commit (if changes made)**

```bash
git add src/shared/api/strapi/index.ts
git commit -m "chore: export ColorVariant type"
```

---

## Task 14: Final Verification

**Step 1: Run full typecheck**

```bash
pnpm typecheck
```

Expected: PASS

**Step 2: Run lint**

```bash
pnpm biome check src/widgets/product-card/
```

Expected: PASS (or only warnings)

**Step 3: Visual test (dev server)**

```bash
pnpm dev
```

Open http://localhost:3000/en/products and verify:
- [ ] Cards render with new design
- [ ] Color dots are clickable
- [ ] Image changes when selecting color
- [ ] Hover preloads images
- [ ] Share button copies link
- [ ] Keyboard navigation works on color selector
- [ ] Mobile layout is vertical
- [ ] Desktop layout is horizontal

**Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix(product-card): address visual/lint issues"
```

---

## Summary

| Task | Component | Status |
|------|-----------|--------|
| 1 | Update Product types | ⬜ |
| 2 | Update mock data | ⬜ |
| 3 | formatPrice utility | ⬜ |
| 4 | useImagePreload hook | ⬜ |
| 5 | lib/index.ts export | ⬜ |
| 6 | ColorSelector | ⬜ |
| 7 | ProductImage | ⬜ |
| 8 | ShareButton | ⬜ |
| 9 | ui/index.ts export | ⬜ |
| 10 | Refactor ProductCard | ⬜ |
| 11 | ProductCardSkeleton | ⬜ |
| 12 | Widget index export | ⬜ |
| 13 | API types export | ⬜ |
| 14 | Final verification | ⬜ |

**Estimated commits:** 13-14
**Estimated time:** 45-60 minutes
