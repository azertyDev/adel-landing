import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import {
  type Brand,
  type Category,
  getBrand,
  getCategory,
  getProductBySlug,
  getProducts,
  type Product,
} from '@/shared/api/strapi';
import { ProductDetailContent } from './ProductDetailContent';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  try {
    const products = await getProducts('ru');
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const product = await getProductBySlug(slug, locale);

    if (!product) {
      return { title: 'Product Not Found' };
    }

    return {
      title: product.name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: product.images[0] ? [{ url: product.images[0] }] : [],
      },
    };
  } catch {
    return { title: 'Product Not Found' };
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = await getProductBySlug(slug, locale);

  if (!product) {
    notFound();
  }

  let category: Category | null = null;
  let brand: Brand | null = null;
  let relatedProducts: Product[] = [];

  try {
    // Fetch category and brand in parallel
    const [categoryData, brandData, allProducts] = await Promise.all([
      product.categoryId ? getCategory(product.categoryId, locale) : null,
      product.brandId ? getBrand(product.brandId, locale) : null,
      getProducts(locale),
    ]);

    category = categoryData;
    brand = brandData;

    // Get related products from same category
    relatedProducts = allProducts
      .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
      .slice(0, 4);
  } catch (error) {
    console.error('Failed to fetch related data:', error);
  }

  return (
    <ProductDetailContent
      product={product}
      category={category}
      brand={brand}
      relatedProducts={relatedProducts}
    />
  );
}
