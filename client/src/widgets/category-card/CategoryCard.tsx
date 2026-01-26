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
    <Link href={`/products?categories=${category.id}`} className={cn('block', className)}>
      <motion.div
        className={cn(
          'group overflow-hidden bg-[#FFF]/70 bg-cover bg-center transition-shadow hover:shadow-lg',
          // Padding: mobile → tablet → laptop → desktop
          'p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8',
          // Border radius: mobile → tablet → laptop → desktop
          'rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[60px] xl:rounded-[80px]'
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {/* Mobile: vertical layout (title → image → button) */}
        <div className="flex flex-col items-center gap-3 sm:hidden">
          <h3 className="text-base font-medium text-main">{category.name}</h3>

          <div className="relative h-32 w-28">
            <Image
              src={category.image || '/image/placeholder.png'}
              alt={category.name}
              fill
              sizes="112px"
              className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <Button variant="glass" size="sm">
            {t('learnMore')}
          </Button>
        </div>

        {/* Tablet & Desktop: horizontal layout (image left, content right) */}
        <div className="hidden sm:flex sm:items-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {/* Image container - responsive sizes */}
          <div
            className={cn(
              'relative shrink-0',
              // Height: tablet → laptop → desktop
              'h-28 sm:h-32 md:h-40 lg:h-48 xl:h-56',
              // Width: tablet → laptop → desktop
              'w-28 sm:w-32 md:w-40 lg:w-72 xl:w-96'
            )}
          >
            <Image
              src={category.image || '/image/placeholder.png'}
              alt={category.name}
              fill
              sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 288px, 384px"
              className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div
            className={cn(
              'flex flex-1 flex-col items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5',
              'py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10'
            )}
          >
            <h3
              className={cn(
                'font-medium text-main',
                // Font size: tablet → laptop → desktop
                'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'
              )}
            >
              {category.name}
            </h3>

            {/* Description - hidden on small screens, shown on larger */}
            {category.description && (
              <p className="hidden md:block text-main/60 text-sm lg:text-base xl:text-lg line-clamp-2">
                {category.description}
              </p>
            )}

            <Button
              variant="glass"
              size="sm"
              className="sm:text-sm md:text-base lg:text-lg md:px-5 lg:px-6 md:py-2 lg:py-2.5"
            >
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
