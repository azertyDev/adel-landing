import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { getProducts, type PaginatedProducts, type PaginationMeta } from '@/shared/api/strapi';
import { ProductsPageClient } from './ProductsPageClient';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    page?: string;
    pageSize?: string;
    categories?: string;
    brands?: string;
    priceMin?: string;
    priceMax?: string;
    colors?: string;
  }>;
};

const DEFAULT_META: PaginationMeta = {
  page: 1,
  pageSize: 24,
  pageCount: 1,
  total: 0,
};

export default async function ProductsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const search = await searchParams;
  setRequestLocale(locale);

  const page = Number(search.page) || 1;
  const pageSize = Number(search.pageSize) || 24;
  const categories = search.categories?.split(',').filter(Boolean);
  const brands = search.brands?.split(',').filter(Boolean);
  const priceMin = search.priceMin ? Number(search.priceMin) : undefined;
  const priceMax = search.priceMax ? Number(search.priceMax) : undefined;
  const colors = search.colors?.split(',').filter(Boolean) || [];

  let result: PaginatedProducts = { products: [], meta: DEFAULT_META };

  try {
    result = await getProducts(locale, {
      page,
      pageSize,
      categories,
      brands,
      priceMin,
      priceMax,
    });
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }

  return (
    <Suspense>
      <ProductsPageClient products={result.products} meta={result.meta} initialColors={colors} />
    </Suspense>
  );
}
