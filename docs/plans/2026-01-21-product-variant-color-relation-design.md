# Product Variant Color Relation Design

## Problem

Product variants duplicate color data (`colorName`, `colorHex`) instead of referencing the centralized `colors` collection.

## Solution

Replace inline color fields with a relation to `api::color.color`.

## Schema Changes

### Product Variant Component

**Before (`cms/src/components/product/product-variant.json`):**
```json
{
  "attributes": {
    "colorName": { "type": "string", "required": true },
    "colorHex": { "type": "string", "required": true },
    "image": { "type": "media" },
    "price": { "type": "decimal" },
    "isDefault": { "type": "boolean", "default": false }
  }
}
```

**After:**
```json
{
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

### Removed Fields

| Field | Reason |
|-------|--------|
| `colorName` | Replaced by `color.name` |
| `colorHex` | Replaced by `color.hex` |
| `price` | Use product base price |
| `isDefault` | First variant = default |

## Frontend Changes

### Types (`src/shared/api/strapi/types.ts`)

```typescript
interface ProductVariant {
  color: {
    id: number;
    name: string;
    hex: string;
  };
  image?: StrapiMedia;
}
```

### Component Updates

| File | Change |
|------|--------|
| `ColorSelector.tsx` | `variant.colorHex` → `variant.color.hex` |
| `ProductCard.tsx` | Update color access |
| `ProductDetailContent.tsx` | Update variant logic |

### Default Variant

```typescript
// Before
const defaultVariant = variants.find(v => v.isDefault) || variants[0];

// After
const defaultVariant = variants[0];
```

## API Changes

### Populate Query

```typescript
populate: {
  variants: {
    populate: {
      color: true,
      image: true,
    }
  }
}
```

## Seed Updates

```typescript
// 1. Get colors
const colors = await strapi.entityService.findMany('api::color.color');
const colorMap = new Map(colors.map(c => [c.hex, c.id]));

// 2. Create product with variant referencing color
await strapi.entityService.create('api::product.product', {
  data: {
    name: 'Product',
    variants: [
      {
        color: colorMap.get('#FF0000'),
        image: imageId,
      }
    ]
  }
});
```

## Cleanup

Delete `src/shared/mocks/` directory — all data comes from Strapi.

## Files to Modify

1. `cms/src/components/product/product-variant.json`
2. `cms/src/seed/index.ts`
3. `src/shared/api/strapi/types.ts`
4. `src/widgets/product-card/ui/ColorSelector.tsx`
5. `src/widgets/product-card/ProductCard.tsx`
6. `src/app/[locale]/products/[slug]/ProductDetailContent.tsx`
7. `src/shared/mocks/` (delete)
