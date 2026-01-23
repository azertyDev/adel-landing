'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useCallback, useMemo } from 'react';
import type { PaginationMeta, Product } from '@/shared/api/strapi';
import { Breadcrumbs, Button, Container, Heading, Text } from '@/shared/ui';
import { ActiveFilters, ProductGrid } from '@/widgets';
import { PageSizeSelector } from './PageSizeSelector';
import { ServerPagination } from './ServerPagination';

interface ProductsPageClientProps {
  products: Product[];
  meta: PaginationMeta;
  initialColors: string[];
}

export function ProductsPageClient({ products, meta, initialColors }: ProductsPageClientProps) {
  const t = useTranslations('products');
  const navT = useTranslations('navigation');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Client-side color filtering only
  const filteredProducts = useMemo(() => {
    if (initialColors.length === 0) return products;

    return products.filter((product) =>
      initialColors.some((color) =>
        product.colorVariants.some((v) => v.hex === color || v.name === color)
      )
    );
  }, [products, initialColors]);

  // Helper to build URL with preserved params
  const buildUrl = useCallback(
    (newParams: Record<string, string | number | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(newParams)) {
        if (value === undefined || value === '') {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      }

      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams]
  );

  const clearAllFilters = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  const breadcrumbs = [{ label: navT('home'), href: '/' }, { label: navT('products') }];

  return (
    <Container className="py-8">
      <Breadcrumbs items={breadcrumbs} className="mb-6" />

      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <Heading as="h1" className="mb-2">
              {t('title')}
            </Heading>
            <Text variant="muted">
              {meta.total} {meta.total === 1 ? 'product' : 'products'}
            </Text>
          </div>
          <PageSizeSelector current={meta.pageSize} buildUrl={buildUrl} />
        </div>
        <ActiveFilters />
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <ProductGrid products={filteredProducts} />
          {meta.pageCount > 1 && <ServerPagination meta={meta} buildUrl={buildUrl} />}
        </>
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
