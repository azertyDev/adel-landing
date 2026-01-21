'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/shared/api/strapi';
import { Breadcrumbs, Button, Container, Heading, Text } from '@/shared/ui';
import { ActiveFilters, defaultFilters, type FilterState, ProductGrid } from '@/widgets';

interface ProductsPageClientProps {
  products: Product[];
}

export function ProductsPageClient({ products }: ProductsPageClientProps) {
  const t = useTranslations('products');
  const navT = useTranslations('navigation');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  // Read filters from URL on mount
  useEffect(() => {
    const categoriesParam = searchParams.get('categories');
    const brandsParam = searchParams.get('brands');
    const priceMinParam = searchParams.get('priceMin');
    const priceMaxParam = searchParams.get('priceMax');
    const colorsParam = searchParams.get('colors');

    setFilters({
      categories: categoriesParam ? categoriesParam.split(',') : [],
      brands: brandsParam ? brandsParam.split(',') : [],
      priceMin: priceMinParam ? Number(priceMinParam) : null,
      priceMax: priceMaxParam ? Number(priceMaxParam) : null,
      colors: colorsParam ? colorsParam.split(',') : [],
    });
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        filters.categories.length === 0 ||
        (product.categoryId && filters.categories.includes(product.categoryId));
      const matchesBrand =
        filters.brands.length === 0 ||
        (product.brandId && filters.brands.includes(product.brandId));
      const matchesPriceMin = filters.priceMin === null || product.price >= filters.priceMin;
      const matchesPriceMax = filters.priceMax === null || product.price <= filters.priceMax;
      const matchesColor =
        filters.colors.length === 0 ||
        filters.colors.some((color) =>
          product.colorVariants.some((v) => v.hex === color || v.name === color)
        );

      return matchesCategory && matchesBrand && matchesPriceMin && matchesPriceMax && matchesColor;
    });
  }, [products, filters]);

  const clearAllFilters = useCallback(() => {
    setFilters(defaultFilters);
    router.push(pathname);
  }, [router, pathname]);

  const breadcrumbs = [{ label: navT('home'), href: '/' }, { label: navT('products') }];

  return (
    <Container className="py-8">
      <Breadcrumbs items={breadcrumbs} className="mb-6" />

      <div className="mb-8">
        <Heading as="h1" className="mb-2">
          {t('title')}
        </Heading>
        <Text variant="muted" className="mb-4">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </Text>
        <ActiveFilters />
      </div>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Heading as="h3" className="mb-2">
            {t('noResults.title')}
          </Heading>
          <Text variant="muted" className="mb-6">
            {t('noResults.description')}
          </Text>
          <Button variant="primary" onClick={clearAllFilters}>
            {t('filters.clearAll')}
          </Button>
        </div>
      )}
    </Container>
  );
}
