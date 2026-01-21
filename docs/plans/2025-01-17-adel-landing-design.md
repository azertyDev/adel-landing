# ADEL Landing - Design Document

**Date:** 2025-01-17
**Project:** adel-landing
**Stack:** Next.js 14+, Tailwind CSS, TypeScript, Framer Motion
**Deployment:** Vercel

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [FSD Architecture](#2-fsd-architecture)
3. [SEO Strategy](#3-seo-strategy)
4. [Pages & Components Map](#4-pages--components-map)
5. [Design System](#5-design-system)
6. [TypeScript Types](#6-typescript-types)
7. [API Layer](#7-api-layer)
8. [i18n (Internationalization)](#8-i18n-internationalization)
9. [Animations](#9-animations)
10. [Loading States](#10-loading-states)
11. [Error Handling](#11-error-handling)
12. [Mobile Navigation](#12-mobile-navigation)
13. [Accessibility](#13-accessibility)
14. [JSON-LD Schema](#14-json-ld-schema)
15. [Image & Font Optimization](#15-image--font-optimization)
16. [Environment Variables](#16-environment-variables)
17. [CI/CD Pipeline](#17-cicd-pipeline)
18. [Biome Configuration](#18-biome-configuration)
19. [Git Hooks](#19-git-hooks)
20. [Mock Data](#20-mock-data)
21. [Sitemap & robots.txt](#21-sitemap--robotstxt)
22. [Toast System](#22-toast-system)
23. [Favicons & App Icons](#23-favicons--app-icons)

---

## 1. Project Overview

### Description

ADEL is a premium home appliances brand website featuring:
- Landing page with hero, product categories, features, and about section
- Product catalog with filtering
- Product detail pages
- About, Contact, and FAQ pages
- Multi-language support (EN, TR)

### Key Features

- Full responsive design (mobile-first)
- SEO optimized with SSG/ISR
- OpenGraph and structured data
- Rich animations with Framer Motion
- i18n ready (English + Turkish)
- API-ready architecture (mocks for development)

### Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/[locale]` | Landing with all sections |
| Products List | `/[locale]/products` | All products catalog |
| Category | `/[locale]/category/[slug]` | Products by category |
| Product Detail | `/[locale]/products/[slug]` | Single product page |
| About | `/[locale]/about` | Company information |
| Contact | `/[locale]/contact` | Contact links and info |
| FAQ | `/[locale]/faq` | Questions and answers |

---

## 2. FSD Architecture

```
adel-landing/
├── src/
│   ├── app/                      # Layer: App initialization
│   │   ├── [locale]/             # i18n routing
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── products/
│   │   │   ├── category/[slug]/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── faq/
│   │   ├── providers/
│   │   └── styles/
│   │
│   ├── pages/                    # Layer: Page compositions
│   │   ├── home/
│   │   ├── product-detail/
│   │   ├── category/
│   │   └── ...
│   │
│   ├── widgets/                  # Layer: Complex UI blocks
│   │   ├── header/
│   │   ├── footer/
│   │   ├── hero-section/
│   │   ├── categories-section/
│   │   ├── product-grid/
│   │   ├── product-card/
│   │   ├── filters-sidebar/
│   │   └── ...
│   │
│   ├── features/                 # Layer: User interactions
│   │   ├── filter-products/
│   │   ├── change-language/
│   │   └── search-products/
│   │
│   ├── entities/                 # Layer: Business entities
│   │   ├── product/
│   │   │   ├── model/
│   │   │   ├── api/
│   │   │   └── ui/
│   │   ├── category/
│   │   └── brand/
│   │
│   └── shared/                   # Layer: Reusable code
│       ├── api/
│       ├── config/
│       ├── lib/
│       ├── ui/
│       ├── i18n/
│       ├── seo/
│       └── mocks/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── favicon.ico
│   └── manifest.json
│
├── docs/
│   └── plans/
│
└── package.json
```

### FSD Principles

- Layers depend only on lower layers (widgets → features → entities → shared)
- Each slice contains `model/`, `api/`, `ui/` as needed
- Public API through `index.ts` in each module

---

## 3. SEO Strategy

### Rendering Strategy

| Page | Rendering | Reason |
|------|-----------|--------|
| Homepage | SSG | Static content, max speed |
| Categories | SSG + ISR | Rarely changes, revalidate: 3600 |
| Product Detail | SSG + ISR | generateStaticParams + revalidate |
| About, Contact, FAQ | SSG | Fully static |
| Catalog with filters | SSR | Dynamic query params |

### Metadata API

```typescript
// shared/seo/metadata.ts

export function generateProductMetadata(product: Product, locale: string): Metadata {
  return {
    title: product.name,
    description: product.description.slice(0, 160),
    alternates: {
      canonical: `/${locale}/products/${product.slug}`,
      languages: {
        en: `/en/products/${product.slug}`,
        tr: `/tr/products/${product.slug}`
      }
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 1200, height: 630 }],
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US'
    }
  }
}
```

### SEO Checklist

- [x] Semantic HTML (`<main>`, `<article>`, `<section>`, `<nav>`)
- [x] JSON-LD structured data (Product, Organization, BreadcrumbList, FAQ)
- [x] Canonical URLs + hreflang for i18n
- [x] Auto-generated sitemap.xml via next-sitemap
- [x] robots.txt with crawler rules
- [x] Image optimization via next/image (WebP, lazy loading)
- [x] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 4. Pages & Components Map

### Widgets

```
widgets/
├── header/                 # Logo, nav, Filters, Lang
├── footer/                 # Nav, social links
├── hero-section/           # Banner "SIMPLICITY meets performance"
├── categories-section/     # 3 category cards with waves
├── why-adel-section/       # 3 feature cards (icons)
├── about-preview/          # "Bringing smart design..."
├── product-grid/           # Product grid on category page
├── product-card/           # Card: image, name, price, colors
├── product-detail/         # Main product page block
├── product-carousel/       # Image carousel
├── trust-blocks/           # Delivery, Returns, Warranty
├── filters-sidebar/        # Filter panel
├── faq-accordion/          # Accordion with questions
└── contact-blocks/         # 4 contact blocks
```

---

## 5. Design System

### Typography

| Element | Font | Weight | Size | Style |
|---------|------|--------|------|-------|
| Logo "adel" | Custom/Montserrat | 400 | — | Ligature, lowercase, ® |
| Hero "SIMPLICITY" | Montserrat | 800 | 56-72px | ALL CAPS |
| Hero "meets performance" | Montserrat | 300 | 32-40px | Italic |
| Section titles | Montserrat | 500 | 24px | + underline accent |
| Category title | Montserrat | 700 | 40-48px | ALL CAPS, brown |
| Product name | Montserrat | 800 | 48-56px | ALL CAPS |
| Card titles | Inter | 600 | 20-24px | Sentence case |
| Body text | Inter | 400 | 14-16px | — |
| Labels | Inter | 400 | 14px | Gray |
| Price | Montserrat | 700 | 36-40px | — |
| Buttons | Inter | 500 | 14-16px | — |
| Nav links | Inter | 400 | 14px | — |

### Color Palette

```typescript
colors: {
  // Backgrounds
  bg: {
    primary: '#FAFAFA',
    secondary: '#F5F5F5',
    card: '#FFFFFF',
    dark: '#1A1A1A',
  },

  // Text
  text: {
    primary: '#2D2D2D',
    secondary: '#757575',
    muted: '#9E9E9E',
    inverse: '#FFFFFF',
  },

  // Accent
  accent: {
    brown: '#8B5A2B',
    blue: '#2563EB',
  },

  // Product colors
  product: {
    black: '#2D2D2D',
    red: '#C41E3A',
    gold: '#C9A86C',
    white: '#FFFFFF',
    gray: '#6B7280',
  },

  // UI
  border: {
    light: '#E5E5E5',
    DEFAULT: '#D4D4D4',
  }
}
```

### Buttons

| Variant | Background | Border | Text | Example |
|---------|------------|--------|------|---------|
| primary | `#2D2D2D` | none | white | "Discover more" |
| secondary | transparent | 1.5px `#2D2D2D` | `#2D2D2D` | "Learn more" |
| ghost | transparent | none | `#2D2D2D` | Text links |
| light | `#FFFFFF` | 1px `#E5E5E5` | `#2D2D2D` | "Explore Products" |

```typescript
// Common properties
borderRadius: '9999px',  // pill shape
padding: '12px 32px',
fontSize: '14px',
fontWeight: 500,
transition: 'all 0.2s ease',
```

### Cards

**Category Card (Homepage)**
```typescript
{
  background: '#FFFFFF',
  borderRadius: '24px',
  padding: '32px',
}
```

**Product Card (List)**
```typescript
{
  background: '#F5F5F5',
  borderRadius: '20px',
  padding: '24px',
}
```

**Feature Card (Why ADEL?)**
```typescript
{
  background: '#F5F5F5',
  borderRadius: '16px',
  padding: '24px',
  textAlign: 'center',
}
```

**Filter Panel**
```typescript
{
  background: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  padding: '24px',
}
```

### Forms (Filters)

**Radio (Categories):**
```typescript
{
  size: '20px',
  borderColor: '#D4D4D4',
  checkedColor: '#2D2D2D',
}
```

**Input (Price):**
```typescript
{
  background: '#FFFFFF',
  border: '1px solid #E5E5E5',
  borderRadius: '12px',
  padding: '12px 16px',
}
```

**Color Selector:**
```typescript
{
  size: '36px',
  borderRadius: '50%',
  // Selected: ring-2 ring-offset-2 ring-gray-400
}
```

### Icons

- **Style:** Outline/Line, stroke: 1.5-2px
- **Sizes:** 20px (nav), 24px (cards), 32px (features)
- **Library:** Lucide React + custom SVG from Figma

```
Header:      SlidersHorizontal, X, ChevronDown
Why ADEL:    Lightbulb, Shield, Hand
Trust:       Truck, RotateCcw, Award
Contact:     MessageCircle, Globe, Phone, Package
Navigation:  ChevronRight, ChevronLeft, ArrowRight
```

### Spacing Scale

```typescript
spacing: {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '80px',
}
```

### Shadows

```typescript
boxShadow: {
  none: 'none',
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  DEFAULT: '0 4px 12px rgba(0,0,0,0.08)',
  lg: '0 8px 24px rgba(0,0,0,0.12)',
}
```

### Border Radius

```typescript
borderRadius: {
  sm: '8px',
  DEFAULT: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
}
```

---

## 6. TypeScript Types

```typescript
// entities/product/model/types.ts

export interface Product {
  id: string;
  slug: string;
  name: string;
  model: string;
  description: string;
  price: number;
  currency: 'USD' | 'TRY';
  size: string;
  colors: ProductColor[];
  images: string[];
  thumbnail: string;
  categoryId: string;
  brandId: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

// entities/category/model/types.ts

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image: string;
  productsCount: number;
  metaTitle?: string;
  metaDescription?: string;
}

// entities/brand/model/types.ts

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo?: string;
}

// features/filter-products/model/types.ts

export interface ProductFilters {
  categoryId?: string;
  brandId?: string;
  priceMin?: number;
  priceMax?: number;
  colors?: string[];
}

export interface ProductsResponse {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
```

---

## 7. API Layer

### API Client

```typescript
// shared/api/client.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | undefined>;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private buildUrl(endpoint: string, params?: Record<string, string | number | undefined>): string {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    return url.toString();
  }

  async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    const { params, ...fetchConfig } = config || {};
    const response = await fetch(this.buildUrl(endpoint, params), {
      ...fetchConfig,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...fetchConfig?.headers,
      },
    });

    if (!response.ok) {
      throw new ApiError(response.status, await response.text());
    }

    return response.json();
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
```

### Entity API

```typescript
// entities/product/api/productApi.ts

import { apiClient } from '@/shared/api';
import { Product, ProductsResponse } from '../model/types';
import { ProductFilters } from '@/features/filter-products';
import { mockProducts } from '@/shared/mocks/products';

const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === 'true';

export const productApi = {
  async getAll(filters?: ProductFilters, page = 1): Promise<ProductsResponse> {
    if (USE_MOCKS) {
      return mockProductsResponse(filters, page);
    }
    return apiClient.get<ProductsResponse>('/products', {
      params: { ...filters, page },
    });
  },

  async getBySlug(slug: string): Promise<Product> {
    if (USE_MOCKS) {
      return mockProducts.find(p => p.slug === slug)!;
    }
    return apiClient.get<Product>(`/products/${slug}`);
  },

  async getByCategory(categorySlug: string, page = 1): Promise<ProductsResponse> {
    if (USE_MOCKS) {
      return mockProductsResponse({ categoryId: categorySlug }, page);
    }
    return apiClient.get<ProductsResponse>(`/categories/${categorySlug}/products`, {
      params: { page },
    });
  },
};
```

### Server Actions

```typescript
// entities/product/api/actions.ts
'use server';

import { productApi } from './productApi';
import { ProductFilters } from '@/features/filter-products';

export async function getProducts(filters?: ProductFilters, page?: number) {
  return productApi.getAll(filters, page);
}

export async function getProductBySlug(slug: string) {
  return productApi.getBySlug(slug);
}
```

---

## 8. i18n (Internationalization)

### Configuration

```typescript
// shared/i18n/config.ts

export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
};
```

### Middleware

```typescript
// middleware.ts

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/shared/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

### Dictionary Structure

```json
// shared/i18n/dictionaries/en.json
{
  "common": {
    "learnMore": "Learn more",
    "orderNow": "Order Now",
    "discoverMore": "Discover more",
    "exploreProducts": "Explore Products",
    "showResults": "Show results",
    "discardChanges": "Discard changes",
    "filters": "Filters"
  },
  "nav": {
    "products": "Products",
    "aboutUs": "About us",
    "contactUs": "Contact us",
    "privacyPolicy": "Privacy Policy",
    "faq": "FAQ"
  },
  "hero": {
    "title": "SIMPLICITY",
    "subtitle": "meets performance"
  },
  "sections": {
    "products": "Products",
    "whyAdel": "Why ADEL?",
    "aboutUs": "About us"
  },
  "categories": {
    "coffeeMachines": "Coffee Machines",
    "kitchenAppliances": "Kitchen Appliances",
    "airPurifiers": "Air Purifiers"
  },
  "features": {
    "innovative": {
      "title": "Innovative Technology",
      "description": "Cutting edge features"
    },
    "quality": {
      "title": "Premium Quality",
      "description": "Built to last"
    },
    "easyToUse": {
      "title": "Easy to use",
      "description": "Intuitive controls"
    }
  },
  "product": {
    "size": "Size",
    "model": "Model",
    "color": "Color",
    "description": "Description",
    "price": "Price"
  },
  "trust": {
    "delivery": {
      "title": "Fast and Free Delivery",
      "description": "Free shipping on all orders within 3-7 business days"
    },
    "returns": {
      "title": "Easy Returns",
      "description": "30 day return policy means you can buy with confidence"
    },
    "warranty": {
      "title": "1 year Warranty",
      "description": "All our products come with 1 year warranty to keep you covered longer"
    }
  },
  "filters": {
    "categories": "Categories",
    "brand": "Brand",
    "price": "Price",
    "minPrice": "Min price",
    "maxPrice": "Max price",
    "colors": "Colors"
  },
  "faq": {
    "title": "Question and answer"
  },
  "contact": {
    "chatSupport": "Chat support",
    "support247": "Support 24/7",
    "socialMedia": "Social media",
    "phone": "Phone",
    "deliveryReturns": "Delivery and returns",
    "onlineSupport": "Online support for your order",
    "returnPolicy": "Return policy"
  },
  "about": {
    "tagline": "Bringing smart design to your home",
    "description": "At ADEL, we design small home appliances that combine refined aesthetics with everyday performance.",
    "mission": "We believe technology should feel simple, elegant, and reliable."
  },
  "errors": {
    "somethingWrong": "Oops! Something went wrong",
    "errorDescription": "We encountered an unexpected error. Please try again.",
    "tryAgain": "Try again",
    "goHome": "Go to Homepage",
    "pageNotFound": "Page not found",
    "pageNotFoundDescription": "The page you're looking for doesn't exist."
  },
  "toast": {
    "filterApplied": "Filters applied",
    "filterCleared": "Filters cleared",
    "linkCopied": "Link copied!",
    "linkCopiedDesc": "Product link copied to clipboard",
    "error": "Something went wrong"
  }
}
```

### Usage

```typescript
// Server Component
import { getTranslations } from 'next-intl/server';

export default async function HeroSection() {
  const t = await getTranslations('hero');
  return (
    <section>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </section>
  );
}

// Client Component
'use client';
import { useTranslations } from 'next-intl';

export function Button() {
  const t = useTranslations('common');
  return <button>{t('learnMore')}</button>;
}
```

---

## 9. Animations

### Transitions

```typescript
// shared/lib/animations/transitions.ts

export const transitions = {
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
  springSmooth: {
    type: 'spring',
    stiffness: 200,
    damping: 25,
  },
  fast: {
    duration: 0.15,
    ease: 'easeOut',
  },
  default: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  },
  slow: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  },
  stagger: {
    staggerChildren: 0.1,
    delayChildren: 0.1,
  },
} as const;
```

### Variants

```typescript
// shared/lib/animations/variants.ts

import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const heroText: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

export const heroLetter: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

export const cardHover: Variants = {
  initial: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const imageHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const accordionContent: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { height: { duration: 0.3 }, opacity: { duration: 0.3, delay: 0.1 } },
  },
};

export const slideIn: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.2 } },
};

export const overlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
```

### Animation Hooks

```typescript
// shared/lib/animations/hooks.ts

'use client';

import { useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(options?: {
  once?: boolean;
  margin?: string;
  amount?: 'some' | 'all' | number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '-100px',
    amount: options?.amount ?? 0.3,
  });

  return { ref, isInView };
}

export function useParallax(offset: number = 50) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return { ref, y };
}
```

---

## 10. Loading States

### Skeleton Components

```typescript
// shared/ui/skeleton/Skeleton.tsx

import { cn } from '@/shared/lib/utils';

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn('animate-pulse rounded-lg bg-gray-200', className)} />
  );
}

// ProductCardSkeleton.tsx
export function ProductCardSkeleton() {
  return (
    <div className="bg-bg-secondary rounded-2xl p-6">
      <div className="flex gap-6">
        <Skeleton className="w-40 h-40 rounded-xl" />
        <div className="flex-1 space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-1/4" />
          <div className="flex gap-2 mt-4">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ProductDetailSkeleton.tsx
export function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <Skeleton className="aspect-square rounded-3xl" />
      <div className="space-y-6">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-12 w-64" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Skeleton className="h-4 w-12 mb-2" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div>
            <Skeleton className="h-4 w-12 mb-2" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <Skeleton className="h-10 w-32" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-36 rounded-full" />
          <Skeleton className="h-12 w-36 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// ProductGridSkeleton.tsx
export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
```

### Loading Pages

```typescript
// app/[locale]/products/[slug]/loading.tsx

import { ProductDetailSkeleton } from '@/shared/ui/skeleton';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ProductDetailSkeleton />
    </div>
  );
}
```

---

## 11. Error Handling

### Error Page

```typescript
// app/[locale]/error.tsx

'use client';

import { useEffect } from 'react';
import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  const t = useTranslations('errors');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-text-primary mb-4">
        {t('somethingWrong')}
      </h1>
      <p className="text-text-secondary text-lg mb-8 text-center max-w-md">
        {t('errorDescription')}
      </p>
      <div className="flex gap-4">
        <Button variant="primary" onClick={reset}>
          {t('tryAgain')}
        </Button>
        <Button variant="secondary" href="/">
          {t('goHome')}
        </Button>
      </div>
    </div>
  );
}
```

### Not Found Page

```typescript
// app/[locale]/not-found.tsx

import { Button } from '@/shared/ui/button';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('errors');

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-8xl font-extrabold text-text-primary mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-text-primary mb-4">
        {t('pageNotFound')}
      </h2>
      <p className="text-text-secondary text-lg mb-8 text-center max-w-md">
        {t('pageNotFoundDescription')}
      </p>
      <Button variant="primary" href="/">
        {t('goHome')}
      </Button>
    </div>
  );
}
```

---

## 12. Mobile Navigation

```typescript
// widgets/header/ui/MobileNav.tsx

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from '@/shared/i18n/navigation';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/features/change-language';
import { slideIn, overlay } from '@/shared/lib/animations';

const navItems = [
  { href: '/products', key: 'products' },
  { href: '/about', key: 'aboutUs' },
  { href: '/contact', key: 'contactUs' },
  { href: '/faq', key: 'faq' },
] as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-text-primary"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={overlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            <motion.div
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-80 bg-bg-primary z-50 shadow-xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-border-light">
                <span className="text-xl font-semibold">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>

              <nav className="p-6">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-lg font-medium text-text-primary hover:text-accent-blue transition-colors"
                      >
                        {t(item.key)}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border-light">
                <LanguageSwitcher />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## 13. Accessibility

### Skip Link

```typescript
// shared/ui/skip-link/SkipLink.tsx

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-black focus:text-white focus:rounded-lg"
    >
      Skip to main content
    </a>
  );
}
```

### Accessible Components

- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus-visible states
- Screen reader friendly content
- Semantic HTML structure

---

## 14. JSON-LD Schema

```typescript
// shared/seo/schemas.ts

export function generateProductSchema(product: Product, locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.model,
    brand: { '@type': 'Brand', name: 'ADEL' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: 'https://schema.org/InStock',
      url: `https://adel.com/${locale}/products/${product.slug}`,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ADEL',
    url: 'https://adel.com',
    logo: 'https://adel.com/logo.png',
    description: 'Premium small home appliances',
    sameAs: [
      'https://facebook.com/adel',
      'https://instagram.com/adel',
      'https://twitter.com/adel',
    ],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
```

---

## 15. Image & Font Optimization

### Next.js Image Config

```typescript
// next.config.ts

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.adel.com', pathname: '/image/**' },
      { protocol: 'https', hostname: 'cdn.adel.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

### Font Loading

```typescript
// app/fonts.ts

import { Montserrat, Inter } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});
```

---

## 16. Environment Variables

```typescript
// shared/config/env.ts

import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_APP_ENV: z.enum(['development', 'staging', 'production']),
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_USE_MOCKS: z.string().transform((v) => v === 'true'),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  SENTRY_DSN: z.string().url().optional(),
  VERCEL_URL: z.string().optional(),
  VERCEL_ENV: z.enum(['development', 'preview', 'production']).optional(),
});

const parsed = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_USE_MOCKS: process.env.NEXT_PUBLIC_USE_MOCKS,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  SENTRY_DSN: process.env.SENTRY_DSN,
  VERCEL_URL: process.env.VERCEL_URL,
  VERCEL_ENV: process.env.VERCEL_ENV,
});

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

export const env = parsed.data;
```

### .env Files

```bash
# .env.example
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_USE_MOCKS=true
NEXT_PUBLIC_GA_ID=
SENTRY_DSN=

# .env.production
NEXT_PUBLIC_APP_URL=https://adel.com
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_API_URL=https://api.adel.com
NEXT_PUBLIC_USE_MOCKS=false
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SENTRY_DSN=https://xxx@sentry.io/xxx
```

---

## 17. CI/CD Pipeline

```yaml
# .github/workflows/ci.yml

name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  NODE_VERSION: '20'
  PNPM_VERSION: '9'

jobs:
  lint:
    name: Lint & Format
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: ${{ env.PNPM_VERSION }}
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - name: Biome CI
        run: pnpm biome ci .

  typecheck:
    name: Type Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: ${{ env.PNPM_VERSION }}
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm typecheck

  test:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: ${{ env.PNPM_VERSION }}
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm test:ci

  build:
    name: Build
    runs-on: ubuntu-latest
    needs: [lint, typecheck, test]
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: ${{ env.PNPM_VERSION }}
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - name: Build
        run: pnpm build
        env:
          NEXT_PUBLIC_APP_URL: https://adel.com
          NEXT_PUBLIC_APP_ENV: production
          NEXT_PUBLIC_API_URL: https://api.adel.com
          NEXT_PUBLIC_USE_MOCKS: false

  deploy-preview:
    name: Deploy Preview
    runs-on: ubuntu-latest
    needs: [build]
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          github-comment: true

  deploy-production:
    name: Deploy Production
    runs-on: ubuntu-latest
    needs: [build]
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

---

## 18. Biome Configuration

```json
// biome.json

{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "complexity": {
        "noExcessiveCognitiveComplexity": "warn",
        "useSimplifiedLogicExpression": "warn"
      },
      "correctness": {
        "noUnusedImports": "error",
        "noUnusedVariables": "error",
        "useExhaustiveDependencies": "warn"
      },
      "style": {
        "noNonNullAssertion": "warn",
        "useConst": "error",
        "useImportType": "error"
      },
      "suspicious": {
        "noExplicitAny": "error",
        "noArrayIndexKey": "warn"
      },
      "a11y": {
        "noSvgWithoutTitle": "warn",
        "useAltText": "error",
        "useButtonType": "error"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "jsxQuoteStyle": "double",
      "semicolons": "always",
      "trailingCommas": "es5"
    }
  },
  "files": {
    "ignore": ["node_modules", ".next", "dist", "build", "coverage"]
  }
}
```

---

## 19. Git Hooks

### Husky + lint-staged

```bash
# .husky/pre-commit
pnpm lint-staged
```

```bash
# .husky/commit-msg
pnpm exec commitlint --edit $1
```

### lint-staged config

```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["biome check --write --no-errors-on-unmatched"],
    "*.{json,md,yml,yaml}": ["biome format --write --no-errors-on-unmatched"]
  }
}
```

### Commitlint config

```javascript
// commitlint.config.js

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 72],
  },
};
```

---

## 20. Mock Data

See `shared/mocks/` directory for complete mock data:
- `products.ts` - 7 sample products
- `categories.ts` - 3 categories
- `brands.ts` - ADEL brand
- `faqs.ts` - 5 FAQ items
- `helpers.ts` - filtering and pagination helpers

---

## 21. Sitemap & robots.txt

```javascript
// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://adel.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/*/404', '/*/500'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/', '/static/'] },
    ],
  },
  alternateRefs: [
    { href: 'https://adel.com/en', hreflang: 'en' },
    { href: 'https://adel.com/tr', hreflang: 'tr' },
  ],
};

export default config;
```

---

## 22. Toast System

Using **Sonner** for toast notifications.

```typescript
// shared/lib/toast.ts

import { toast } from 'sonner';

export const showToast = {
  success: (message: string, description?: string) => {
    toast.success(message, { description });
  },
  error: (message: string, description?: string) => {
    toast.error(message, { description });
  },
  warning: (message: string, description?: string) => {
    toast.warning(message, { description });
  },
  info: (message: string, description?: string) => {
    toast.info(message, { description });
  },
  loading: (message: string) => {
    return toast.loading(message);
  },
  promise: <T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string }
  ) => {
    return toast.promise(promise, messages);
  },
  dismiss: (id?: string | number) => {
    toast.dismiss(id);
  },
};
```

---

## 23. Favicons & App Icons

### Files

```
public/
├── favicon.ico              # 32x32
├── favicon.svg              # Scalable
├── apple-touch-icon.png     # 180x180
├── icon-192.png             # 192x192
├── icon-512.png             # 512x512
├── og-image.png             # 1200x630
└── manifest.json
```

### Web Manifest

```json
{
  "name": "ADEL - Premium Home Appliances",
  "short_name": "ADEL",
  "description": "Simplicity meets performance",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAFAFA",
  "theme_color": "#1A1A1A",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## TypeScript Path Aliases

```json
// tsconfig.json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/app/*": ["./src/app/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/widgets/*": ["./src/widgets/*"],
      "@/features/*": ["./src/features/*"],
      "@/entities/*": ["./src/entities/*"],
      "@/shared/*": ["./src/shared/*"]
    }
  }
}
```

---

## Package Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "postbuild": "next-sitemap",
    "start": "next start",
    "lint": "biome lint .",
    "lint:fix": "biome lint --write .",
    "format": "biome format --write .",
    "check": "biome check .",
    "check:fix": "biome check --write .",
    "typecheck": "tsc --noEmit",
    "test": "vitest",
    "test:ci": "vitest run --coverage",
    "prepare": "husky"
  }
}
```

---

## Dependencies

### Production

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next-intl": "^3.0.0",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.400.0",
  "sonner": "^1.5.0",
  "zod": "^3.23.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.3.0"
}
```

### Development

```json
{
  "typescript": "^5.5.0",
  "tailwindcss": "^3.4.0",
  "@biomejs/biome": "^1.9.0",
  "husky": "^9.0.0",
  "lint-staged": "^15.0.0",
  "@commitlint/cli": "^19.0.0",
  "@commitlint/config-conventional": "^19.0.0",
  "next-sitemap": "^4.2.0",
  "vitest": "^2.0.0",
  "@testing-library/react": "^16.0.0"
}
```

---

## Next Steps

1. Initialize project with `pnpm create next-app`
2. Set up FSD folder structure
3. Configure Tailwind with design tokens
4. Implement shared UI components
5. Build page layouts
6. Connect mock data
7. Add animations
8. Test and optimize

---

*Document generated: 2025-01-17*
