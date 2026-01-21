'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Link } from '@/i18n';
import type { Product } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';
import { formatPrice, useImagePreload } from './lib';
import { ColorSelector, ProductImage, ShareButton } from './ui';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { preload } = useImagePreload();

  const [selectedColorId, setSelectedColorId] = useState(product.colorVariants[0]?.id ?? '');

  const selectedVariant = useMemo(
    () => product.colorVariants.find((v) => v.id === selectedColorId),
    [product.colorVariants, selectedColorId]
  );

  const currentImage = selectedVariant?.image ?? product.thumbnail;
  const altText = `${product.name}${selectedVariant ? ` - ${selectedVariant.name}` : ''}`;

  const handleColorHover = (variant: { image: string }) => {
    preload(variant.image);
  };

  return (
    <Link href={`/products/${product.slug}`} className={cn('block', className)}>
      <motion.article
        className={cn(
          'group relative flex overflow-hidden',
          // Mobile: vertical layout
          'flex-col sm:flex-row sm:items-stretch',
          // Padding
          'p-4 sm:p-6 lg:p-8',
          // Border radius
          'rounded-3xl sm:rounded-[40px]',
          // Background
          'bg-white/60 backdrop-blur-xl',
          // Shadow
          'shadow-sm transition-shadow duration-300 hover:shadow-lg'
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {/* Share Button - absolute positioned */}
        <div className="absolute top-4 right-4 z-10 sm:top-6 sm:right-6">
          <ShareButton productSlug={product.slug} productName={product.name} />
        </div>

        {/* Mobile: Image on top */}
        <div className="relative aspect-square w-full sm:hidden mb-4">
          <ProductImage src={currentImage} alt={altText} className="h-full w-full" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between sm:py-2">
          {/* Name */}
          <h3 className="font-semibold text-main leading-tight text-base sm:text-lg lg:text-xl xl:text-2xl">
            {product.name}
          </h3>

          {/* Price */}
          <p className="text-main/80 text-sm sm:text-base lg:text-lg mt-2">
            {formatPrice(product.price, product.currency)}
          </p>

          {/* Color Selector */}
          {product.colorVariants.length > 0 && (
            <ColorSelector
              variants={product.colorVariants}
              selectedId={selectedColorId}
              onSelect={setSelectedColorId}
              onHover={handleColorHover}
              className="mt-4"
            />
          )}
        </div>

        {/* Desktop: Image on right */}
        <div className="relative hidden sm:block w-2/5 shrink-0">
          <ProductImage src={currentImage} alt={altText} className="h-full w-full" />
        </div>
      </motion.article>
    </Link>
  );
}
