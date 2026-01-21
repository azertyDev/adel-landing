# ADEL Landing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a premium home appliances website for ADEL brand with full responsive design, i18n support (EN/TR), and SEO optimization.

**Architecture:** Feature-Sliced Design (FSD) with Next.js 15 App Router. Server Components by default, Client Components only where interactivity needed. Mock API layer ready for real backend integration.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, next-intl, Sonner, Zod, Biome, pnpm

---

## Phase 1: Project Setup

### Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`

**Step 1: Create Next.js project with pnpm**

Run:
```bash
cd /Users/umidjonkhikmatov/WebstormProjects/adel-landing
pnpm create next-app@latest . --typescript --tailwind --eslint=false --app --src-dir --import-alias "@/*" --use-pnpm
```

Expected: Project initialized with Next.js 15, TypeScript, Tailwind CSS

**Step 2: Remove default ESLint (we use Biome)**

Run:
```bash
rm -f .eslintrc.json eslint.config.mjs
```

**Step 3: Verify project runs**

Run:
```bash
pnpm dev
```

Expected: Dev server starts at http://localhost:3000

**Step 4: Commit**

```bash
git add .
git commit -m "chore: initialize next.js project with typescript and tailwind"
```

---

### Task 2: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install production dependencies**

Run:
```bash
pnpm add next-intl framer-motion lucide-react sonner zod clsx tailwind-merge
```

**Step 2: Install development dependencies**

Run:
```bash
pnpm add -D @biomejs/biome husky lint-staged @commitlint/cli @commitlint/config-conventional next-sitemap @types/node
```

**Step 3: Verify installation**

Run:
```bash
pnpm list --depth=0
```

Expected: All packages listed

**Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add project dependencies"
```

---

### Task 3: Configure Biome

**Files:**
- Create: `biome.json`

**Step 1: Create biome.json**

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "complexity": {
        "noExcessiveCognitiveComplexity": "warn"
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
    "ignore": ["node_modules", ".next", "dist", "build", "coverage", "*.config.js", "*.config.ts", "*.config.mjs"]
  },
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  }
}
```

**Step 2: Add scripts to package.json**

Modify `package.json` scripts section:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome lint .",
    "lint:fix": "biome lint --write .",
    "format": "biome format --write .",
    "check": "biome check .",
    "check:fix": "biome check --write .",
    "typecheck": "tsc --noEmit"
  }
}
```

**Step 3: Run biome check**

Run:
```bash
pnpm check
```

Expected: No errors (or fixable warnings)

**Step 4: Commit**

```bash
git add biome.json package.json
git commit -m "chore: configure biome for linting and formatting"
```

---

### Task 4: Configure Git Hooks

**Files:**
- Create: `.husky/pre-commit`
- Create: `.husky/commit-msg`
- Create: `commitlint.config.js`

**Step 1: Initialize husky**

Run:
```bash
pnpm exec husky init
```

**Step 2: Create pre-commit hook**

```bash
echo 'pnpm lint-staged' > .husky/pre-commit
```

**Step 3: Create commit-msg hook**

```bash
echo 'pnpm exec commitlint --edit $1' > .husky/commit-msg
```

**Step 4: Create commitlint.config.js**

```javascript
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

**Step 5: Add lint-staged config to package.json**

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["biome check --write --no-errors-on-unmatched"],
    "*.{json,md,yml,yaml}": ["biome format --write --no-errors-on-unmatched"]
  }
}
```

**Step 6: Commit**

```bash
git add .husky commitlint.config.js package.json
git commit -m "chore: configure husky and commitlint for git hooks"
```

---

### Task 5: Configure TypeScript Path Aliases

**Files:**
- Modify: `tsconfig.json`

**Step 1: Update tsconfig.json with FSD path aliases**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
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
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Step 2: Verify TypeScript compilation**

Run:
```bash
pnpm typecheck
```

Expected: No errors

**Step 3: Commit**

```bash
git add tsconfig.json
git commit -m "chore: configure typescript path aliases for fsd"
```

---

### Task 6: Create FSD Folder Structure

**Files:**
- Create: Multiple directories

**Step 1: Create FSD directories**

Run:
```bash
mkdir -p src/app/\[locale\]
mkdir -p src/pages/home
mkdir -p src/widgets/{header,footer,hero-section,categories-section,why-adel-section,about-preview,product-grid,product-card,product-detail,product-carousel,filters-sidebar,trust-blocks,faq-accordion,contact-blocks}
mkdir -p src/features/{filter-products,change-language}
mkdir -p src/entities/{product,category,brand}/{model,api,ui}
mkdir -p src/shared/{api,config,lib,ui,i18n/dictionaries,seo,mocks}
```

**Step 2: Create index.ts placeholders**

Run:
```bash
touch src/widgets/header/index.ts
touch src/widgets/footer/index.ts
touch src/features/filter-products/index.ts
touch src/features/change-language/index.ts
touch src/entities/product/index.ts
touch src/entities/category/index.ts
touch src/entities/brand/index.ts
touch src/shared/api/index.ts
touch src/shared/config/index.ts
touch src/shared/lib/index.ts
touch src/shared/ui/index.ts
touch src/shared/i18n/index.ts
touch src/shared/seo/index.ts
touch src/shared/mocks/index.ts
```

**Step 3: Commit**

```bash
git add src/
git commit -m "chore: create fsd folder structure"
```

---

### Task 7: Configure Environment Variables

**Files:**
- Create: `.env.example`
- Create: `.env.local`
- Create: `src/shared/config/env.ts`

**Step 1: Create .env.example**

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_USE_MOCKS=true

# Analytics (optional)
NEXT_PUBLIC_GA_ID=

# Error Tracking (optional)
SENTRY_DSN=
```

**Step 2: Create .env.local**

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_USE_MOCKS=true
```

**Step 3: Create src/shared/config/env.ts**

```typescript
import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:3000/api'),
  NEXT_PUBLIC_USE_MOCKS: z
    .string()
    .transform((v) => v === 'true')
    .default('true'),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  SENTRY_DSN: z.string().url().optional(),
});

const parsed = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_USE_MOCKS: process.env.NEXT_PUBLIC_USE_MOCKS,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  SENTRY_DSN: process.env.SENTRY_DSN,
});

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

export const env = parsed.data;
export type Env = z.infer<typeof envSchema>;
```

**Step 4: Update .gitignore**

Add to `.gitignore`:
```
.env.local
.env.*.local
```

**Step 5: Verify env loads**

Run:
```bash
pnpm typecheck
```

Expected: No errors

**Step 6: Commit**

```bash
git add .env.example src/shared/config/env.ts .gitignore
git commit -m "chore: configure environment variables with zod validation"
```

---

### Task 8: Configure Tailwind with Design Tokens

**Files:**
- Modify: `tailwind.config.ts`
- Create: `src/app/globals.css`

**Step 1: Update tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAFA',
          secondary: '#F5F5F5',
          card: '#FFFFFF',
          dark: '#1A1A1A',
        },
        text: {
          primary: '#2D2D2D',
          secondary: '#757575',
          muted: '#9E9E9E',
          inverse: '#FFFFFF',
        },
        accent: {
          brown: '#8B5A2B',
          blue: '#2563EB',
        },
        product: {
          black: '#2D2D2D',
          red: '#C41E3A',
          gold: '#C9A86C',
          white: '#FFFFFF',
          gray: '#6B7280',
        },
        border: {
          light: '#E5E5E5',
          DEFAULT: '#D4D4D4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT: '0 4px 12px rgba(0,0,0,0.08)',
        lg: '0 8px 24px rgba(0,0,0,0.12)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 2: Update src/app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-inter: 'Inter', system-ui, sans-serif;
    --font-montserrat: 'Montserrat', system-ui, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-bg-primary text-text-primary antialiased;
  }
}

@layer components {
  .focus-ring {
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2;
  }

  .container {
    @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

**Step 3: Commit**

```bash
git add tailwind.config.ts src/app/globals.css
git commit -m "style: configure tailwind with design tokens"
```

---

### Task 9: Configure Fonts

**Files:**
- Create: `src/app/fonts.ts`

**Step 1: Create src/app/fonts.ts**

```typescript
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

**Step 2: Commit**

```bash
git add src/app/fonts.ts
git commit -m "style: configure google fonts (montserrat, inter)"
```

---

## Phase 2: Shared Layer

### Task 10: Create Utility Functions

**Files:**
- Create: `src/shared/lib/utils.ts`

**Step 1: Create src/shared/lib/utils.ts**

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}
```

**Step 2: Export from index**

Create `src/shared/lib/index.ts`:
```typescript
export * from './utils';
```

**Step 3: Commit**

```bash
git add src/shared/lib/
git commit -m "feat: add shared utility functions"
```

---

### Task 11: Create Button Component

**Files:**
- Create: `src/shared/ui/button/Button.tsx`
- Create: `src/shared/ui/button/index.ts`

**Step 1: Create src/shared/ui/button/Button.tsx**

```typescript
import { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const variantStyles = {
  primary: 'bg-text-primary text-text-inverse hover:opacity-90',
  secondary: 'bg-transparent border-[1.5px] border-text-primary text-text-primary hover:bg-text-primary hover:text-text-inverse',
  ghost: 'bg-transparent text-text-primary hover:text-accent-blue',
  light: 'bg-bg-card border border-border-light text-text-primary hover:bg-bg-secondary',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

**Step 2: Create src/shared/ui/button/index.ts**

```typescript
export { Button, type ButtonProps } from './Button';
```

**Step 3: Commit**

```bash
git add src/shared/ui/button/
git commit -m "feat: add button component with variants"
```

---

### Task 12: Create Skeleton Component

**Files:**
- Create: `src/shared/ui/skeleton/Skeleton.tsx`
- Create: `src/shared/ui/skeleton/index.ts`

**Step 1: Create src/shared/ui/skeleton/Skeleton.tsx**

```typescript
import { cn } from '@/shared/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-lg bg-gray-200', className)} />;
}

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

**Step 2: Create src/shared/ui/skeleton/index.ts**

```typescript
export { Skeleton, ProductCardSkeleton, ProductDetailSkeleton, ProductGridSkeleton } from './Skeleton';
```

**Step 3: Commit**

```bash
git add src/shared/ui/skeleton/
git commit -m "feat: add skeleton loading components"
```

---

### Task 13: Create UI Index Export

**Files:**
- Modify: `src/shared/ui/index.ts`

**Step 1: Update src/shared/ui/index.ts**

```typescript
export * from './button';
export * from './skeleton';
```

**Step 2: Commit**

```bash
git add src/shared/ui/index.ts
git commit -m "chore: export shared ui components"
```

---

### Task 14: Create Animation Variants

**Files:**
- Create: `src/shared/lib/animations/variants.ts`
- Create: `src/shared/lib/animations/transitions.ts`
- Create: `src/shared/lib/animations/index.ts`

**Step 1: Create src/shared/lib/animations/transitions.ts**

```typescript
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
} as const;
```

**Step 2: Create src/shared/lib/animations/variants.ts**

```typescript
import type { Variants } from 'framer-motion';

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

export const cardHover: Variants = {
  initial: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: { duration: 0.3, ease: 'easeOut' },
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

**Step 3: Create src/shared/lib/animations/index.ts**

```typescript
export * from './variants';
export * from './transitions';
```

**Step 4: Update src/shared/lib/index.ts**

```typescript
export * from './utils';
export * from './animations';
```

**Step 5: Commit**

```bash
git add src/shared/lib/animations/
git commit -m "feat: add framer motion animation variants"
```

---

### Task 15: Create Toast Utilities

**Files:**
- Create: `src/shared/lib/toast.ts`
- Create: `src/app/providers/ToastProvider.tsx`

**Step 1: Create src/shared/lib/toast.ts**

```typescript
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

**Step 2: Create src/app/providers directory and ToastProvider.tsx**

```bash
mkdir -p src/app/providers
```

```typescript
// src/app/providers/ToastProvider.tsx
'use client';

import { Toaster } from 'sonner';

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      expand={false}
      richColors
      closeButton
      duration={4000}
      toastOptions={{
        classNames: {
          toast: 'rounded-xl shadow-lg',
          title: 'font-medium',
          description: 'text-sm text-text-secondary',
        },
      }}
    />
  );
}
```

**Step 3: Update src/shared/lib/index.ts**

```typescript
export * from './utils';
export * from './animations';
export * from './toast';
```

**Step 4: Commit**

```bash
git add src/shared/lib/toast.ts src/app/providers/
git commit -m "feat: add toast notifications with sonner"
```

---

### Task 16: Create i18n Configuration

**Files:**
- Create: `src/shared/i18n/config.ts`
- Create: `src/shared/i18n/request.ts`
- Create: `src/shared/i18n/dictionaries/en.json`
- Create: `src/shared/i18n/dictionaries/tr.json`
- Create: `src/middleware.ts`

**Step 1: Create src/shared/i18n/config.ts**

```typescript
export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
};
```

**Step 2: Create src/shared/i18n/request.ts**

```typescript
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  };
});
```

**Step 3: Create src/shared/i18n/dictionaries/en.json**

```json
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
    "description": "Description"
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
      "description": "All our products come with 1 year warranty"
    }
  },
  "errors": {
    "somethingWrong": "Oops! Something went wrong",
    "errorDescription": "Please try again or return to the homepage.",
    "tryAgain": "Try again",
    "goHome": "Go to Homepage",
    "pageNotFound": "Page not found",
    "pageNotFoundDescription": "The page you're looking for doesn't exist."
  }
}
```

**Step 4: Create src/shared/i18n/dictionaries/tr.json**

```json
{
  "common": {
    "learnMore": "Daha fazla",
    "orderNow": "Siparis Ver",
    "discoverMore": "Kesfet",
    "exploreProducts": "Urunleri Kesfet",
    "showResults": "Sonuclari Goster",
    "discardChanges": "Degisiklikleri Iptal Et",
    "filters": "Filtreler"
  },
  "nav": {
    "products": "Urunler",
    "aboutUs": "Hakkimizda",
    "contactUs": "Iletisim",
    "privacyPolicy": "Gizlilik Politikasi",
    "faq": "SSS"
  },
  "hero": {
    "title": "SADELIK",
    "subtitle": "performansla bulusuyor"
  },
  "sections": {
    "products": "Urunler",
    "whyAdel": "Neden ADEL?",
    "aboutUs": "Hakkimizda"
  },
  "categories": {
    "coffeeMachines": "Kahve Makineleri",
    "kitchenAppliances": "Mutfak Aletleri",
    "airPurifiers": "Hava Temizleyiciler"
  },
  "features": {
    "innovative": {
      "title": "Yenilikci Teknoloji",
      "description": "En son ozellikler"
    },
    "quality": {
      "title": "Premium Kalite",
      "description": "Dayanikli uretim"
    },
    "easyToUse": {
      "title": "Kolay Kullanim",
      "description": "Sezgisel kontroller"
    }
  },
  "product": {
    "size": "Boyut",
    "model": "Model",
    "color": "Renk",
    "description": "Aciklama"
  },
  "trust": {
    "delivery": {
      "title": "Hizli ve Ucretsiz Teslimat",
      "description": "3-7 is gunu icinde ucretsiz kargo"
    },
    "returns": {
      "title": "Kolay Iade",
      "description": "30 gun iade politikasi"
    },
    "warranty": {
      "title": "1 Yil Garanti",
      "description": "Tum urunlerimiz 1 yil garantilidir"
    }
  },
  "errors": {
    "somethingWrong": "Bir seyler yanlis gitti",
    "errorDescription": "Lutfen tekrar deneyin veya ana sayfaya donun.",
    "tryAgain": "Tekrar dene",
    "goHome": "Ana Sayfaya Don",
    "pageNotFound": "Sayfa bulunamadi",
    "pageNotFoundDescription": "Aradiginiz sayfa mevcut degil."
  }
}
```

**Step 5: Create src/middleware.ts**

```typescript
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

**Step 6: Create src/shared/i18n/index.ts**

```typescript
export * from './config';
```

**Step 7: Commit**

```bash
git add src/shared/i18n/ src/middleware.ts
git commit -m "feat: configure i18n with next-intl (en, tr)"
```

---

### Task 17: Create TypeScript Types for Entities

**Files:**
- Create: `src/entities/product/model/types.ts`
- Create: `src/entities/category/model/types.ts`
- Create: `src/entities/brand/model/types.ts`

**Step 1: Create src/entities/product/model/types.ts**

```typescript
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

export interface ProductsResponse {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ProductFilters {
  categoryId?: string;
  brandId?: string;
  priceMin?: number;
  priceMax?: number;
  colors?: string[];
}
```

**Step 2: Create src/entities/category/model/types.ts**

```typescript
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
```

**Step 3: Create src/entities/brand/model/types.ts**

```typescript
export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo?: string;
}
```

**Step 4: Create index exports**

```typescript
// src/entities/product/index.ts
export * from './model/types';

// src/entities/category/index.ts
export * from './model/types';

// src/entities/brand/index.ts
export * from './model/types';
```

**Step 5: Commit**

```bash
git add src/entities/
git commit -m "feat: add typescript types for entities"
```

---

### Task 18: Create Mock Data

**Files:**
- Create: `src/shared/mocks/products.ts`
- Create: `src/shared/mocks/categories.ts`
- Create: `src/shared/mocks/index.ts`

**Step 1: Create src/shared/mocks/products.ts**

```typescript
import type { Product } from '@/entities/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'maggie',
    name: 'Maggie',
    model: 'Maggie',
    description: 'Premium espresso machine with advanced brewing technology for the perfect cup every time.',
    price: 56.0,
    currency: 'USD',
    size: '15.7×11.1×1.0 inches',
    colors: [
      { id: 'black', name: 'Black', hex: '#2D2D2D' },
      { id: 'red', name: 'Red', hex: '#C41E3A' },
      { id: 'gold', name: 'Gold', hex: '#C9A86C' },
      { id: 'white', name: 'White', hex: '#FFFFFF' },
    ],
    images: ['/image/products/maggie-1.png'],
    thumbnail: '/image/products/maggie-thumb.png',
    categoryId: 'coffee-machines',
    brandId: 'adel',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    slug: 'ad6628t',
    name: 'AD6628T',
    model: 'AD6628T',
    description: 'Professional grade coffee machine with built-in grinder.',
    price: 60.99,
    currency: 'USD',
    size: '14.2×10.5×1.2 inches',
    colors: [
      { id: 'black', name: 'Black', hex: '#2D2D2D' },
      { id: 'silver', name: 'Silver', hex: '#C0C0C0' },
    ],
    images: ['/image/products/ad6628t-1.png'],
    thumbnail: '/image/products/ad6628t-thumb.png',
    categoryId: 'coffee-machines',
    brandId: 'adel',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    slug: 'cg301',
    name: 'CG301',
    model: 'CG301',
    description: 'Professional burr grinder for coffee enthusiasts.',
    price: 75.0,
    currency: 'USD',
    size: '6.0×4.0×14.0 inches',
    colors: [{ id: 'black', name: 'Black', hex: '#2D2D2D' }],
    images: ['/image/products/cg301-1.png'],
    thumbnail: '/image/products/cg301-thumb.png',
    categoryId: 'coffee-machines',
    brandId: 'adel',
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z',
  },
];
```

**Step 2: Create src/shared/mocks/categories.ts**

```typescript
import type { Category } from '@/entities/category';

export const mockCategories: Category[] = [
  {
    id: 'coffee-machines',
    slug: 'coffee-machines',
    name: 'Coffee Machines',
    description: 'Premium coffee machines for the perfect brew',
    image: '/image/categories/coffee-machines.png',
    productsCount: 7,
  },
  {
    id: 'kitchen-appliances',
    slug: 'kitchen-appliances',
    name: 'Kitchen Appliances',
    description: 'Smart kitchen appliances for modern homes',
    image: '/image/categories/kitchen-appliances.png',
    productsCount: 5,
  },
  {
    id: 'air-purifiers',
    slug: 'air-purifiers',
    name: 'Air Purifiers',
    description: 'Clean air solutions for healthier living',
    image: '/image/categories/air-purifiers.png',
    productsCount: 3,
  },
];
```

**Step 3: Create src/shared/mocks/index.ts**

```typescript
export * from './products';
export * from './categories';
```

**Step 4: Commit**

```bash
git add src/shared/mocks/
git commit -m "feat: add mock data for products and categories"
```

---

## Phase 3: App Layout

### Task 19: Create Root Layout

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/[locale]/layout.tsx`

**Step 1: Update src/app/layout.tsx**

```typescript
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'ADEL - Premium Home Appliances',
    template: '%s | ADEL',
  },
  description: 'Simplicity meets performance. Premium small home appliances.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

**Step 2: Create src/app/[locale]/layout.tsx**

```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { montserrat, inter } from '../fonts';
import { ToastProvider } from '../providers/ToastProvider';
import { locales, type Locale } from '@/shared/i18n/config';

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans bg-bg-primary text-text-primary antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <ToastProvider />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**Step 3: Create src/app/[locale]/page.tsx (placeholder)**

```typescript
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-display font-bold">ADEL</h1>
    </main>
  );
}
```

**Step 4: Delete old src/app/page.tsx if exists**

```bash
rm -f src/app/page.tsx
```

**Step 5: Verify app runs**

Run:
```bash
pnpm dev
```

Expected: App runs at http://localhost:3000/en

**Step 6: Commit**

```bash
git add src/app/
git commit -m "feat: configure app layout with i18n and providers"
```

---

## Phase 4: Widgets (Continue in next tasks...)

The remaining tasks follow the same pattern:

- Task 20-25: Header, Footer, Logo components
- Task 26-30: Hero Section with animations
- Task 31-35: Categories Section
- Task 36-40: Why ADEL Section
- Task 41-45: About Preview Section
- Task 46-50: Product Grid, Product Card
- Task 51-55: Product Detail Page
- Task 56-60: Filters Sidebar
- Task 61-65: FAQ Accordion
- Task 66-70: Contact Blocks
- Task 71-75: Error Pages (404, 500)
- Task 76-80: SEO (sitemap, robots.txt, JSON-LD)

---

## Summary

**Total Tasks:** ~80 tasks (Phase 1-4 complete setup, Phase 5+ for all widgets)

**Estimated Time:** 8-12 hours for full implementation

**Key Principles:**
- TDD approach where applicable
- Frequent commits (every 2-5 tasks)
- DRY - reuse shared components
- YAGNI - only build what's needed

---

*Plan created: 2025-01-17*
