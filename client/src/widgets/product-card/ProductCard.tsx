'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Link } from '@/i18n';
import type { Product } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';
import { formatPrice, useImagePreload } from './lib';
import { ColorSelector, ProductImage } from './ui';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { preload } = useImagePreload();

  // Find default variant (first in array)
  // Note: if no variants exist, defaultVariant will be undefined and fallbacks are used
  const defaultVariant = useMemo(() => product.colorVariants[0], [product.colorVariants]);

  const [selectedColorId, setSelectedColorId] = useState(defaultVariant?.id ?? '');

  const selectedVariant = useMemo(
    () => product.colorVariants.find((v) => v.id === selectedColorId),
    [product.colorVariants, selectedColorId]
  );

  const displayPrice = product.price;

  const currentImage = selectedVariant?.images[0] ?? product.thumbnail;
  const altText = `${product.name}${selectedVariant ? ` - ${selectedVariant.name}` : ''}`;

  const handleColorHover = (variant: { images: string[] }) => {
    if (variant.images[0]) {
      preload(variant.images[0]);
    }
  };

  return (
    <Link href={`/products/${product.slug}`} className={cn('block', className)}>
      <motion.article
        className={cn(
          'group relative flex overflow-hidden gap-4',
          // Horizontal layout
          'flex-row items-stretch',
          // Padding - responsive (mobile → sm → md → lg → xl)
          'p-2 sm:p-4 md:p-5 lg:p-8 xl:p-10',
          // Border radius - responsive
          'rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[48px] xl:rounded-[60px]',
          // Background
          'bg-[#EDEDED]'
        )}
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.2 }}
      >
        {/* Content - left side */}
        <div className="flex flex-1 flex-col justify-between min-w-0 py-1 sm:py-2">
          {/* Name - responsive */}
          <h3 className="font-bold text-main leading-tight text-[10px] sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
            {product.name}
          </h3>

          {/* Price - hidden on mobile */}
          {displayPrice !== null && (
            <p className="hidden font-medium sm:block text-main text-xs md:text-sm lg:text-base xl:text-lg mt-1 lg:mt-2">
              {formatPrice(displayPrice, product.currency)}
            </p>
          )}

          {/* Color Selector */}
          {product.colorVariants.length > 0 && (
            <ColorSelector
              variants={product.colorVariants}
              selectedId={selectedColorId}
              onSelect={setSelectedColorId}
              onHover={handleColorHover}
              className="mt-auto pt-1 sm:pt-2 w-fit"
            />
          )}
        </div>

        {/* Image - responsive size */}
        <div className="relative flex items-center justify-end w-[45%] sm:w-[48%] md:w-[50%] lg:w-[52%] xl:w-[55%]">
          <ProductImage
            src={currentImage}
            alt={altText}
            className="relative h-24 w-full sm:h-32 md:h-40 lg:h-52 xl:h-64"
          />
        </div>
      </motion.article>
    </Link>
  );
}
