'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo } from 'react';
import type { Product } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';
import { ProductGridSkeleton } from '@/shared/ui';
import { ProductCard } from '../product-card';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

export function ProductGrid({ products, loading, className }: ProductGridProps) {
  // Create a stable key based on product IDs to force re-animation on filter change
  const gridKey = useMemo(() => products.map((p) => p.id).join('-'), [products]);

  if (loading) {
    return <ProductGridSkeleton count={8} />;
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={gridKey}
        className={cn('grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8', className)}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
