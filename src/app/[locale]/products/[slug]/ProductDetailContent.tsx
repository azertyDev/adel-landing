'use client';

import { Check, Package, RefreshCw, Shield, Truck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import type { Brand, Category, Product } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';
import { Badge, Breadcrumbs, Button, Card, Container, Heading, Section, Text } from '@/shared/ui';
import { ProductGallery, ProductGrid } from '@/widgets';

interface ProductDetailContentProps {
  product: Product;
  category: Category | null;
  brand: Brand | null;
  relatedProducts: Product[];
}

const trustBadges = [
  { key: 'warranty', icon: Shield },
  { key: 'shipping', icon: Truck },
  { key: 'support', icon: Package },
  { key: 'returns', icon: RefreshCw },
] as const;

export function ProductDetailContent({
  product,
  category,
  brand,
  relatedProducts,
}: ProductDetailContentProps) {
  const t = useTranslations('product');
  const navT = useTranslations('navigation');

  const defaultVariant = useMemo(() => product.colorVariants[0], [product.colorVariants]);

  const [selectedColorId, setSelectedColorId] = useState<string | null>(defaultVariant?.id || null);

  const displayPrice = product.price;

  // Get images from colorVariants for the gallery
  const galleryImages = useMemo(
    () => product.colorVariants.map((v) => v.image),
    [product.colorVariants]
  );

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  const breadcrumbs = [
    { label: navT('home'), href: '/' },
    { label: navT('products'), href: '/products' },
    { label: product.name },
  ];

  return (
    <Container className="py-8">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <ProductGallery images={galleryImages} productName={product.name} />

        {/* Product Info */}
        <div>
          {/* Brand & Category */}
          <div className="mb-4 flex items-center gap-3">
            {brand && <Badge variant="secondary">{brand.name}</Badge>}
            {category && <Badge variant="outline">{category.name}</Badge>}
          </div>

          {/* Title */}
          <Heading as="h1" className="mb-4">
            {product.name}
          </Heading>

          {/* Price */}
          <p className="mb-6 text-3xl font-bold">{formatPrice(displayPrice, product.currency)}</p>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <Badge variant="success" className="gap-1">
                <Check className="h-3 w-3" />
                {t('inStock')}
              </Badge>
            ) : (
              <Badge variant="error">{t('outOfStock')}</Badge>
            )}
          </div>

          {/* Description */}
          <Text className="mb-8 text-gray-600">{product.description}</Text>

          {/* Colors */}
          {product.colorVariants.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-3 font-medium">{t('colors')}</h3>
              <div className="flex gap-3">
                {product.colorVariants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedColorId(variant.id)}
                    className={cn(
                      'h-10 w-10 rounded-full border-2 transition-all',
                      selectedColorId === variant.id
                        ? 'border-black ring-2 ring-black ring-offset-2'
                        : 'border-gray-200 hover:border-gray-400'
                    )}
                    style={{ backgroundColor: variant.hex }}
                    aria-label={`Select color ${variant.name}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="flex-1" disabled={!product.inStock}>
              {t('orderNow')}
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              {t('discoverMore')}
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.key} className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                <badge.icon className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium">{t(`trustBadges.${badge.key}`)}</span>
              </div>
            ))}
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section>
          <Heading as="h2" className="mb-8">
            {t('relatedProducts')}
          </Heading>
          <ProductGrid products={relatedProducts} />
        </Section>
      )}
    </Container>
  );
}
