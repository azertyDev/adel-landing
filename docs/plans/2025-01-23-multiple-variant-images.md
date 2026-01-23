# Multiple Images per Product Variant - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Allow each product color variant to have multiple images instead of one.

**Architecture:** Change `image` (single) → `images` (array) across Strapi schema, TypeScript types, and mapper. The frontend ProductGallery already accepts an array, so UI changes are minimal.

**Tech Stack:** Strapi 5, Next.js, TypeScript

---

## Task 1: Update Strapi Schema

**Files:**
- Modify: `admin/src/components/product/product-variant.json`

**Step 1: Change image field to multiple**

```json
{
  "collectionName": "components_product_product_variants",
  "info": {
    "displayName": "Product Variant",
    "description": "Product color variant with images"
  },
  "options": {},
  "attributes": {
    "color": {
      "type": "relation",
      "relation": "oneToOne",
      "target": "api::color.color"
    },
    "images": {
      "type": "media",
      "multiple": true,
      "required": false,
      "allowedTypes": ["images"]
    }
  }
}
```

**Step 2: Restart Strapi to apply schema changes**

Run: `cd admin && pnpm develop`

**Step 3: Commit**

```bash
git add admin/src/components/product/product-variant.json
git commit -m "feat(cms): allow multiple images per product variant"
```

---

## Task 2: Update Strapi TypeScript Types

**Files:**
- Modify: `client/src/shared/api/strapi/types.ts`

**Step 1: Update StrapiProductVariant interface**

Find:
```typescript
export interface StrapiProductVariant {
  id: number;
  color: StrapiColor | null;
  image: StrapiMedia | null;
}
```

Replace with:
```typescript
export interface StrapiProductVariant {
  id: number;
  color: StrapiColor | null;
  images: StrapiMedia[];
}
```

**Step 2: Update ColorVariant interface**

Find:
```typescript
export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  image: string;
}
```

Replace with:
```typescript
export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  images: string[];
}
```

**Step 3: Run typecheck to identify dependent files**

Run: `cd client && pnpm typecheck`

Expected: Errors in `client.ts`, `ProductCard.tsx`, `ProductDetailContent.tsx`

**Step 4: Commit**

```bash
git add client/src/shared/api/strapi/types.ts
git commit -m "feat(types): update variant types for multiple images"
```

---

## Task 3: Update Product Mapper

**Files:**
- Modify: `client/src/shared/api/strapi/client.ts`

**Step 1: Update mapProduct function**

Find the colorVariants mapping (lines 62-71):
```typescript
const colorVariants = (entity.variants || [])
  .filter(
    (variant): variant is StrapiProductVariant & { color: StrapiColor } => variant.color !== null
  )
  .map((variant) => ({
    id: `cv-${entity.id}-${variant.id}`,
    name: variant.color.name,
    hex: variant.color.hex,
    image: getMediaUrl(variant.image ?? undefined) || '/image/placeholder.png',
  }));
```

Replace with:
```typescript
const colorVariants = (entity.variants || [])
  .filter(
    (variant): variant is StrapiProductVariant & { color: StrapiColor } => variant.color !== null
  )
  .map((variant) => {
    const images = (variant.images || [])
      .map((img) => getMediaUrl(img))
      .filter((url): url is string => url !== null);

    return {
      id: `cv-${entity.id}-${variant.id}`,
      name: variant.color.name,
      hex: variant.color.hex,
      images: images.length > 0 ? images : ['/image/placeholder.png'],
    };
  });
```

**Step 2: Update thumbnail extraction (line 91)**

Find:
```typescript
thumbnail: defaultVariant?.image || '/image/placeholder.png',
```

Replace with:
```typescript
thumbnail: defaultVariant?.images[0] || '/image/placeholder.png',
```

**Step 3: Run typecheck**

Run: `cd client && pnpm typecheck`

Expected: Errors only in component files now

**Step 4: Commit**

```bash
git add client/src/shared/api/strapi/client.ts
git commit -m "feat(api): map multiple images per variant"
```

---

## Task 4: Update ProductCard Component

**Files:**
- Modify: `client/src/widgets/product-card/ProductCard.tsx`

**Step 1: Find image references and update**

Search for `.image` usage in ProductCard and replace with `.images[0]`.

Typical patterns to find and replace:
- `variant.image` → `variant.images[0]`
- `colorVariants[index].image` → `colorVariants[index].images[0]`

**Step 2: Run typecheck**

Run: `cd client && pnpm typecheck`

**Step 3: Commit**

```bash
git add client/src/widgets/product-card/ProductCard.tsx
git commit -m "fix(product-card): use first image from variant images array"
```

---

## Task 5: Update ProductDetailContent Component

**Files:**
- Modify: `client/src/app/[locale]/products/[slug]/ProductDetailContent.tsx`

**Step 1: Update gallery images source**

Find where images are passed to ProductGallery. Currently it likely maps `colorVariants` to single images.

Change from:
```typescript
images={product.colorVariants.map(v => v.image)}
```

To pass all images of the selected variant:
```typescript
images={product.colorVariants[selectedColorIndex]?.images || []}
```

This way, when user selects a color, gallery shows ALL images of that color variant.

**Step 2: Run typecheck**

Run: `cd client && pnpm typecheck`

Expected: PASS

**Step 3: Commit**

```bash
git add client/src/app/[locale]/products/[slug]/ProductDetailContent.tsx
git commit -m "feat(product-detail): show all images for selected color variant"
```

---

## Task 6: Update Seed Data (Optional)

**Files:**
- Modify: `admin/src/seed/data.ts` or `admin/src/seed/index.ts`

**Step 1: Update seed data structure**

Change variant image references from single to array:

From:
```typescript
{
  color: colorRef,
  image: mediaRef
}
```

To:
```typescript
{
  color: colorRef,
  images: [mediaRef1, mediaRef2]
}
```

**Step 2: Commit**

```bash
git add admin/src/seed/
git commit -m "chore(seed): update seed data for multiple variant images"
```

---

## Task 7: Verify and Test

**Step 1: Start Strapi**

Run: `cd admin && pnpm develop`

**Step 2: Add test product with multiple images per variant**

In Strapi admin:
1. Create/edit a product
2. Add a variant with 3+ images
3. Save and publish

**Step 3: Start Next.js**

Run: `cd client && pnpm dev`

**Step 4: Verify on frontend**

1. Open product listing page - thumbnails should work
2. Open product detail page - gallery should show multiple images
3. Switch colors - gallery should update to show that color's images

**Step 5: Final commit**

```bash
git add .
git commit -m "feat: complete multiple images per variant implementation"
```

---

## Summary of Changes

| File | Change |
|------|--------|
| `admin/.../product-variant.json` | `image` → `images`, `multiple: true` |
| `client/.../types.ts` | `StrapiProductVariant.image` → `.images[]` |
| `client/.../types.ts` | `ColorVariant.image` → `.images[]` |
| `client/.../client.ts` | Map array of images, thumbnail from `[0]` |
| `client/.../ProductCard.tsx` | Use `.images[0]` for thumbnail |
| `client/.../ProductDetailContent.tsx` | Pass selected variant's all images to gallery |

## Notes

- **Breaking change**: Existing products in CMS will need images re-added after schema change
- **Migration**: Consider running a data migration script if there are many products
- **Backwards compatibility**: None needed — this is a schema redesign