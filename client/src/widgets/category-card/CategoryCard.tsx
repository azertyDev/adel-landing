'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n';
import type { Category } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  const t = useTranslations('common');

  return (
    <Link href={`/products?category=${category.slug}`} className={cn('block', className)}>
      <motion.div
        className="group overflow-hidden rounded-[20px] bg-[#FFF]/70 bg-cover bg-center p-4 transition-shadow hover:shadow-lg sm:rounded-[40px] sm:p-6 lg:rounded-[80px] lg:p-8"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {/* Mobile: vertical layout (title → image → button) */}
        <div className="flex flex-col items-center gap-4 sm:hidden">
          <h3 className="text-lg font-medium text-main">{category.name}</h3>

          <div className="relative h-32 w-32">
            <Image
              src={category.image || '/image/general-img-square.png'}
              alt={category.name}
              fill
              sizes="128px"
              className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <Button variant="glass" size="md">
            {t('learnMore')}
          </Button>
        </div>

        {/* Desktop: horizontal layout (image left, content right) */}
        <div className="hidden sm:flex sm:items-center sm:gap-6 lg:gap-8">
          <div className="relative h-40 w-40 shrink-0 lg:h-52 lg:w-96">
            <Image
              src={category.image || '/image/general-img-square.png'}
              alt={category.name}
              fill
              sizes="(max-width: 1024px) 160px, 208px"
              className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col items-start gap-4 py-6 lg:py-12">
            <h3 className="text-xl font-medium text-main lg:text-4xl">{category.name}</h3>

            <Button variant="glass" size="md">
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
