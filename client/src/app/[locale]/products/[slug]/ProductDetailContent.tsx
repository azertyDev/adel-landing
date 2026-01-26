'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Brand, Category, Product } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';
import { Breadcrumbs, Button, Card, Container, Heading, Section } from '@/shared/ui';
import { ProductGallery, ProductGrid } from '@/widgets';

interface ProductDetailContentProps {
  product: Product;
  category: Category | null;
  brand: Brand | null;
  relatedProducts: Product[];
}

export function ProductDetailContent({ product, relatedProducts }: ProductDetailContentProps) {
  const t = useTranslations('product');
  const navT = useTranslations('navigation');

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const displayPrice = product.price;

  // Get images from selected color variant for the gallery
  const galleryImages = useMemo(
    () => product.colorVariants[selectedColorIndex]?.images || [],
    [product.colorVariants, selectedColorIndex]
  );

  const selectedVariant = product.colorVariants[selectedColorIndex];

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    }).format(price);
  };

  const breadcrumbs = [
    { label: navT('home'), href: '/' },
    { label: navT('products'), href: '/products' },
    { label: product.name },
  ];

  return (
    <Container className="py-4 sm:py-6 lg:py-8">
      <Breadcrumbs items={breadcrumbs} className="mb-4 sm:mb-6 lg:mb-8" />

      {/* Title */}
      <Heading
        as="h1"
        className="mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-3xl text-main font-semibold"
      >
        {product.name}
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 rounded-3xl md:rounded-[60px] lg:rounded-[80px] bg-white/40 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Gallery */}
        <ProductGallery
          key={selectedColorIndex}
          images={galleryImages}
          productName={product.name}
        />

        {/* Product Info */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Size & Model Row */}
          <div className="flex  gap-8 sm:gap-12 flex-wrap ">
            {product.size && (
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-500 mb-1 font-medium">{t('size')}:</p>
                <p className="font-semibold text-main text-sm sm:text-base lg:text-lg">
                  {product.size}
                </p>
              </div>
            )}
            {product.brand?.name && (
              <div>
                <p className="text-sm sm:text-base text-gray-500 mb-1 font-medium">{t('brand')}:</p>
                <p className="font-semibold text-main text-sm sm:text-base lg:text-lg">
                  {product.brand.name}
                </p>
              </div>
            )}
            {product.model && (
              <div>
                <p className="text-sm sm:text-base text-gray-500 mb-1 font-medium">{t('model')}:</p>
                <p className="font-semibold text-main text-sm sm:text-base lg:text-lg">
                  {product.model}
                </p>
              </div>
            )}
          </div>

          {/* Colors */}
          {product.colorVariants.length > 0 && (
            <div>
              <p className="text-sm sm:text-base text-gray-500 mb-1">{t('color')}:</p>
              <p className="font-semibold text-main text-sm sm:text-base mb-2 sm:mb-3">
                {selectedVariant?.name}
              </p>
              <div className="flex gap-3 sm:gap-4">
                {product.colorVariants.map((variant, index) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedColorIndex(index)}
                    className={cn(
                      'size-6 sm:size-7 lg:size-8 rounded-full transition-all cursor-pointer',
                      selectedColorIndex !== index &&
                        'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
                    )}
                    style={{
                      backgroundColor: variant.hex,
                      boxShadow:
                        selectedColorIndex === index
                          ? `0 0 0 3px white, 0 0 0 5px ${variant.hex}`
                          : undefined,
                    }}
                    aria-label={`Select color ${variant.name}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <p className="text-sm sm:text-base text-gray-500 mb-1 sm:mb-2">{t('description')}:</p>
            <div className="prose prose-sm max-w-none text-xs sm:text-sm leading-relaxed">
              <ReactMarkdown>{product.description}</ReactMarkdown>
            </div>
          </div>

          {/* Price */}
          {displayPrice !== null && (
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
              {formatPrice(displayPrice, product.currency)}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex gap-2 sm:gap-3 lg:gap-4">
            <Button
              size="lg"
              variant="glass"
              className="flex-1 rounded-full border-gray-300 py-2 sm:py-3 lg:py-4 text-sm sm:text-base text-main hover:bg-gray-50"
              disabled={!product.inStock}
            >
              {t('orderNow')}
            </Button>
            <Button
              size="lg"
              variant="primary"
              className="flex-1 rounded-full bg-[#4A4A4A] py-2 sm:py-3 lg:py-4 text-sm sm:text-base text-white hover:bg-[#3A3A3A]"
            >
              {t('discoverMore')}
            </Button>
          </div>
        </div>
      </div>

      {/* Specifications */}
      {product.specs.length > 0 && (
        <Section>
          <Heading as="h2" className="mb-6">
            {t('specifications')}
          </Heading>
          <Card className="overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr key={spec.label} className={cn(index % 2 === 0 ? 'bg-gray-50' : 'bg-white')}>
                    <td className="px-6 py-4 font-medium text-gray-900">{spec.label}</td>
                    <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Section>
      )}

      {/* Product Features */}
      {product.features.length > 0 && (
        <Section className="py-4 sm:py-6 md:py-10 lg:py-14 xl:py-16">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {product.features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {feature.icon && (
                  <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 relative">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      unoptimized={feature.icon.endsWith('.svg')}
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold  text-sm sm:text-base md:text-lg lg:text-lg text-main-2 mb-1 sm:mb-2 underline underline-offset-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section className="py-4 sm:py-6 md:py-10 lg:py-14 xl:py-16">
          <Heading as="h2" className="mb-8">
            {t('relatedProducts')}
          </Heading>
          <ProductGrid products={relatedProducts} />
        </Section>
      )}
    </Container>
  );
}
