import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { getProducts, type Product } from '@/shared/api/strapi';
import { ProductsPageClient } from './ProductsPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  let products: Product[] = [];

  try {
    products = await getProducts(locale);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }

  return (
    <Suspense>
      <ProductsPageClient products={products} />
    </Suspense>
  );
}
