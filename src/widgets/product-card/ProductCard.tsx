'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n';
import type { Product } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className={cn('block', className)}>
      <motion.article
        className={cn(
          'group relative flex items-stretch overflow-hidden px-14 py-8',
          // Скругления: mobile 20px → tablet 30px → laptop 80px
          'rounded-[20px] sm:rounded-[24px] md:rounded-[30px] lg:rounded-[80px]',
          // Фон
          'bg-[#FFF]/40 backdrop-filter: blur(22px)',
          // Высота: mobile ~110px → tablet ~140px → laptop ~160px → desktop ~180px
          // 'h-[110px] sm:h-[130px] md:h-[150px] lg:h-[170px] xl:h-[190px]',
          // Эффекты
          'shadow-sm transition-shadow duration-300 hover:shadow-md'
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {/* Content - левая часть */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
          {/* Name - жирный, адаптивный размер */}
          <h3 className="font-semibold text-main leading-tight text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {product.name}
          </h3>

          {/* Price - под названием */}
          <p className="text-main/80 text-xs sm:text-sm md:text-base lg:text-lg">
            ${product.price}
          </p>

          {/* Color Dots - внизу слева */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
              {product.colors.slice(0, 3).map((colorHex, index) => (
                <span
                  key={`${product.id}-color-${index}`}
                  className={cn(
                    // Размер точек: mobile 8px → desktop 14px
                    'size-2 sm:size-2.5 md:size-3 lg:size-3.5',
                    'rounded-full',
                    'ring-1 ring-black/10'
                  )}
                  style={{ backgroundColor: colorHex }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Image Container - правая часть ~45-50% */}
        <div className="relative w-2/5 shrink-0 h-72">
          <Image
            src={product.images[0] || '/image/general-img-square.png'}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 42vw, (max-width: 768px) 45vw, (max-width: 1024px) 35vw, 30vw"
            className="object-contain object-right p-1 sm:p-2 md:p-3 drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </motion.article>
    </Link>
  );
}
