# ProductCard Redesign

**Date:** 2025-01-21
**Component:** `src/widgets/product-card/ProductCard.tsx`
**Status:** Design approved

---

## Overview

Redesign the ProductCard component to support interactive color selection with linked images, improved accessibility, and better responsive behavior.

---

## Current Issues

1. **CSS bug** — Invalid `backdrop-filter: blur(22px)` syntax in Tailwind class
2. **Fixed image height** — `h-72` doesn't adapt to screen sizes
3. **Hardcoded currency** — `$` symbol ignores `product.currency`
4. **No color-image linking** — Colors and images are separate, unlinked arrays
5. **Missing accessibility** — No keyboard navigation or screen reader support for colors

---

## Data Structure Changes

### Before

```typescript
interface Product {
  colors: ProductColor[];  // [{id, name, hex}]
  images: string[];        // Separate array
}
```

### After

```typescript
interface ColorVariant {
  id: string;
  name: string;      // "Red", "White" — for accessibility
  hex: string;       // "#C41E3A"
  image: string;     // Image URL for this color
}

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: 'USD' | 'TRY';
  colorVariants: ColorVariant[];
  thumbnail: string;  // Default image for SEO/previews
  // ... other fields unchanged
}
```

### Strapi Changes

Update `Product` content-type:
- Remove: `colors` (relation), `images` (media)
- Add: `colorVariants` (repeatable component with fields: `name`, `hex`, `image`)

---

## Component Architecture

```
src/widgets/product-card/
├── ProductCard.tsx           # Main component
├── ProductCardSkeleton.tsx   # Loading state
├── index.ts                  # Public API
├── ui/
│   ├── ColorSelector.tsx     # Color dots with a11y
│   ├── ProductImage.tsx      # Image with animation and fallback
│   └── ShareButton.tsx       # Share button (copies link)
└── lib/
    ├── formatPrice.ts        # Price formatting by currency
    └── useImagePreload.ts    # Image preload hook
```

---

## Visual Specification

### Layout

| Breakpoint | Layout | Image Position |
|------------|--------|----------------|
| Mobile (< 640px) | Vertical stack | Top, `aspect-square` |
| Desktop (≥ 640px) | Horizontal | Right, `w-2/5` |

### Styling

| Property | Value |
|----------|-------|
| Background | `bg-white/60 backdrop-blur-xl` |
| Border radius | `rounded-3xl sm:rounded-[40px]` |
| Padding | `p-4 sm:p-6 lg:p-8` |
| Shadow | `shadow-sm`, `shadow-lg` on hover |
| Hover scale | `1.01` |

### Color Selector

| State | Style |
|-------|-------|
| Default | Circle with `ring-1 ring-black/10` |
| Selected | `ring-2 ring-offset-2 ring-gray-400` |
| Hover | `scale-110` |

---

## Functionality

### Color Selection

1. User clicks/taps a color dot
2. Selected color gets visual indicator (ring)
3. Image animates to the selected color variant (crossfade)
4. Click on color dot does NOT navigate to product page (`stopPropagation`)

### Image Preloading

```typescript
const handleColorHover = (variant: ColorVariant) => {
  const img = new Image();
  img.src = variant.image;
};
```

### Image Animation

```typescript
<AnimatePresence mode="wait">
  <motion.div
    key={selectedColorId}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <Image ... />
  </motion.div>
</AnimatePresence>
```

### Fallback Image

```typescript
const [imgError, setImgError] = useState(false);

<Image
  src={imgError ? '/image/product-placeholder.png' : currentImage}
  onError={() => setImgError(true)}
/>
```

### Price Formatting

```typescript
function formatPrice(price: number, currency: 'USD' | 'TRY'): string {
  const symbols = { USD: '$', TRY: '₺' };
  return `${symbols[currency]}${price.toLocaleString()}`;
}
```

### Share Button

- Appears on hover (desktop) or always visible (mobile)
- Copies product URL to clipboard
- Shows toast notification on success

---

## Accessibility

### Color Selector

```tsx
<div role="radiogroup" aria-label="Select color">
  {colorVariants.map((variant) => (
    <button
      key={variant.id}
      role="radio"
      aria-checked={selectedColorId === variant.id}
      aria-label={variant.name}
      title={variant.name}
      onClick={() => setSelectedColorId(variant.id)}
      onKeyDown={handleKeyNavigation}
    />
  ))}
</div>
```

### Keyboard Navigation

- Arrow keys (← →) to navigate between colors
- Enter/Space to select
- Tab to move focus in/out of color selector

### Dynamic Alt Text

```typescript
const altText = `${product.name} - ${selectedVariant?.name ?? 'Product image'}`;
```

---

## Component Props

```typescript
interface ProductCardProps {
  product: Product;
  className?: string;
}
```

---

## Skeleton Component

`ProductCardSkeleton` matches the geometry of `ProductCard`:

- Mobile: vertical layout with image placeholder on top
- Desktop: horizontal layout with image placeholder on right
- Animated pulse effect on all placeholder areas

---

## Implementation Checklist

- [ ] Update `Product` type in `src/shared/api/strapi/types.ts`
- [ ] Update Strapi content-type and migrate data
- [ ] Create `formatPrice` utility
- [ ] Create `useImagePreload` hook
- [ ] Create `ColorSelector` component
- [ ] Create `ProductImage` component
- [ ] Create `ShareButton` component
- [ ] Refactor `ProductCard` with new structure
- [ ] Create `ProductCardSkeleton`
- [ ] Update mock data in `src/shared/mocks/products.ts`
- [ ] Test accessibility with keyboard and screen reader
- [ ] Test responsive behavior on all breakpoints

---

*Document created: 2025-01-21*