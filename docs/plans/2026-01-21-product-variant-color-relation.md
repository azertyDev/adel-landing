# Product Variant Color Relation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace inline color fields in product variants with a relation to the colors collection.

**Architecture:** Product variants will reference colors via Strapi relation instead of storing colorName/colorHex directly. Frontend ColorVariant interface stays flat (mapped from nested structure in client.ts).

**Tech Stack:** Strapi v5, Next.js, TypeScript

---

## Task 1: Update Product Variant Schema

**Files:**
- Modify: `cms/src/components/product/product-variant.json`

**Step 1: Replace schema with new structure**

```json
{
  "collectionName": "components_product_product_variants",
  "info": {
    "displayName": "Product Variant",
    "description": "Product color variant with image"
  },
  "options": {},
  "attributes": {
    "color": {
      "type": "relation",
      "relation": "oneToOne",
      "target": "api::color.color"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    }
  }
}
```

**Step 2: Restart Strapi to apply schema changes**

Run: `cd cms && pnpm develop`

---

## Task 2: Update Strapi Types

**Files:**
- Modify: `src/shared/api/strapi/types.ts`

**Step 1: Update StrapiProductVariant interface**

Find:
```typescript
export interface StrapiProductVariant {
  id: number;
  colorName: string;
  colorHex: string;
  image: StrapiMedia;
  price: number | null;
  isDefault: boolean | null;
}
```

Replace with:
```typescript
export interface StrapiProductVariant {
  id: number;
  color: StrapiColor | null;
  image: StrapiMedia | null;
}
```

**Step 2: Simplify ColorVariant interface**

Find:
```typescript
export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  image: string;
  price: number | null;
  isDefault: boolean;
}
```

Replace with:
```typescript
export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  image: string;
}
```

---

## Task 3: Update API Client Mapper

**Files:**
- Modify: `src/shared/api/strapi/client.ts`

**Step 1: Update populate in getProducts**

Find:
```typescript
populate: {
  variants: { populate: ['image'] },
```

Replace with:
```typescript
populate: {
  variants: { populate: ['image', 'color'] },
```

**Step 2: Update populate in getProduct**

Same change as Step 1.

**Step 3: Update populate in getProductBySlug**

Same change as Step 1.

**Step 4: Update populate in getProductsByCategory**

Same change as Step 1.

**Step 5: Update mapProduct function**

Find:
```typescript
const colorVariants = (entity.variants || []).map((variant) => ({
  id: `cv-${entity.id}-${variant.id}`,
  name: variant.colorName,
  hex: variant.colorHex,
  image: getMediaUrl(variant.image) || '/image/general-img-square.png',
  price: variant.price,
  isDefault: Boolean(variant.isDefault),
}));
```

Replace with:
```typescript
const colorVariants = (entity.variants || [])
  .filter((variant) => variant.color)
  .map((variant) => ({
    id: `cv-${entity.id}-${variant.id}`,
    name: variant.color!.name,
    hex: variant.color!.hex,
    image: getMediaUrl(variant.image) || '/image/placeholder_6398266.png',
  }));
```

**Step 6: Update defaultVariant logic**

Find:
```typescript
const defaultVariant = colorVariants.find((v) => v.isDefault) || colorVariants[0];
```

Replace with:
```typescript
const defaultVariant = colorVariants[0];
```

**Step 7: Remove variant price from effective price calculation**

Find:
```typescript
const effectivePrice = defaultVariant?.price ?? entity.price;
```

Replace with:
```typescript
const effectivePrice = entity.price;
```

---

## Task 4: Update ProductCard Component

**Files:**
- Modify: `src/widgets/product-card/ProductCard.tsx`

**Step 1: Remove isDefault from defaultVariant logic**

Find:
```typescript
const defaultVariant = useMemo(
  () => product.colorVariants.find((v) => v.isDefault) || product.colorVariants[0],
  [product.colorVariants]
);
```

Replace with:
```typescript
const defaultVariant = useMemo(
  () => product.colorVariants[0],
  [product.colorVariants]
);
```

**Step 2: Remove variant price logic**

Find:
```typescript
const displayPrice = selectedVariant?.price ?? product.price;
```

Replace with:
```typescript
const displayPrice = product.price;
```

---

## Task 5: Update ProductDetailContent Component

**Files:**
- Modify: `src/app/[locale]/products/[slug]/ProductDetailContent.tsx`

**Step 1: Remove isDefault from defaultVariant logic**

Find:
```typescript
const defaultVariant = useMemo(
  () => product.colorVariants.find((v) => v.isDefault) || product.colorVariants[0],
  [product.colorVariants]
);
```

Replace with:
```typescript
const defaultVariant = useMemo(
  () => product.colorVariants[0],
  [product.colorVariants]
);
```

**Step 2: Remove variant price logic**

Find:
```typescript
const displayPrice = selectedVariant?.price ?? product.price;
```

Replace with:
```typescript
const displayPrice = product.price;
```

---

## Task 6: Update Seed Script

**Files:**
- Modify: `cms/src/seed/index.ts`

**Step 1: Add color seeding before products**

After FAQ seeding section, add colors seeding. Find the products seeding section and add before it:

```typescript
// Seed Colors
strapi.log.info('Seeding colors...');
const colorMap = new Map<string, string>();

const colorData = [
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'Copper', hex: '#B87333' },
  { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Pink', hex: '#FFB6C1' },
];

for (const color of colorData) {
  const existing = await strapi.documents('api::color.color').findMany({
    filters: { hex: color.hex },
  });

  if (existing.length > 0) {
    colorMap.set(color.hex, existing[0].documentId);
    strapi.log.info(`Color already exists: ${color.name}`);
  } else {
    const created = await strapi.documents('api::color.color').create({
      data: {
        name: color.name,
        hex: color.hex,
        locale: 'en',
        publishedAt: new Date(),
      },
    });
    colorMap.set(color.hex, created.documentId);
    strapi.log.info(`Created color: ${color.name}`);
  }
}
```

**Step 2: Update variants creation in products section**

Find:
```typescript
const variants = product.colors.map((hex, index) => ({
  colorName: getColorName(hex),
  colorHex: hex,
  isDefault: index === 0,
}));
```

Replace with:
```typescript
const variants = product.colors
  .map((hex) => {
    const colorId = colorMap.get(hex);
    if (!colorId) return null;
    return { color: colorId };
  })
  .filter(Boolean);
```

**Step 3: Remove getColorName helper function**

Delete:
```typescript
function getColorName(hex: string): string {
  const colorMap: Record<string, string> = {
    '#C0C0C0': 'Silver',
    '#000000': 'Black',
    '#FFFFFF': 'White',
    '#FF0000': 'Red',
    '#B87333': 'Copper',
    '#87CEEB': 'Sky Blue',
    '#FFB6C1': 'Pink',
  };
  return colorMap[hex.toUpperCase()] || hex;
}
```

---

## Task 7: Delete Mock Data

**Files:**
- Delete: `src/shared/mocks/` (entire directory)

**Step 1: Delete mocks directory**

Run: `rm -rf src/shared/mocks`

---

## Task 8: Run Type Check and Fix Issues

**Step 1: Run typecheck**

Run: `pnpm typecheck`

**Step 2: Fix any type errors that appear**

---

## Task 9: Test the Changes

**Step 1: Ensure CMS is running**

**Step 2: Create test colors in Strapi admin**

Navigate to Content Manager → Colors → Create new colors if needed.

**Step 3: Update existing products to use color relations**

Edit products in admin panel to select colors from the relation field.

**Step 4: Verify frontend displays correctly**

Check that product cards and detail pages show colors correctly.

---

## Task 10: Commit Changes

**Step 1: Stage and commit**

```bash
git add -A
git commit -m "feat: replace inline color fields with color relation

- Update product-variant schema to use relation to colors
- Update frontend types and mappers
- Remove price and isDefault from variants
- Update seed script to create colors first
- Delete mock data files"
```
