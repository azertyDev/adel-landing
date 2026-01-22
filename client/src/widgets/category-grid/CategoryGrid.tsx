'use client';

import { motion } from 'framer-motion';
import type { Category } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';
import { CategoryCard } from '@/widgets/category-card';

interface CategoryGridProps {
  categories: Category[];
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
};

export function CategoryGrid({ categories, loading, className }: CategoryGridProps) {
  if (loading) {
    return null;
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <motion.div
      className={cn('grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8', className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category) => (
        <motion.div key={category.id} variants={itemVariants}>
          <CategoryCard category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
}
