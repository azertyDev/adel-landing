import { env } from '@/shared/config/env';
import type {
  AboutUsSection,
  Brand,
  Category,
  Color,
  FAQItem,
  HeaderAboutSection,
  HeaderContactSection,
  HeroSection,
  PaginatedProducts,
  PaginationMeta,
  Product,
  ProductFeature,
  ProductSpec,
  SiteSettings,
  StrapiAboutUs,
  StrapiBrand,
  StrapiCategory,
  StrapiColor,
  StrapiFAQ,
  StrapiHeaderAbout,
  StrapiHeaderContact,
  StrapiHero,
  StrapiMedia,
  StrapiProduct,
  StrapiProductFeature,
  StrapiProductVariant,
  StrapiResponse,
  StrapiSiteSettings,
  StrapiWhyUs,
  StrapiWhyUsFeature,
  WhyUsFeature,
  WhyUsSection,
} from './types';

const STRAPI_URL = env.STRAPI_URL;
const API_URL = env.API_URL;

function getMediaUrl(media: StrapiMedia | undefined): string | null {
  if (!media) return null;
  // If URL is relative, prepend Strapi URL
  if (media.url.startsWith('/')) {
    return `${STRAPI_URL}${media.url}`;
  }
  return media.url;
}

// Map product feature
function mapProductFeature(feature: StrapiProductFeature): ProductFeature {
  return {
    id: feature.id,
    icon: getMediaUrl(feature.icon ?? undefined),
    title: feature.title,
    description: feature.description,
  };
}

// Strapi v5 mappers - fields are directly on entity (no attributes nesting)
function mapProduct(entity: StrapiProduct): Product {
  // Map variants from Strapi component - extract color from nested relation
  const colorVariants = (entity.variants || [])
    .filter(
      (variant): variant is StrapiProductVariant & { color: StrapiColor } => variant.color !== null
    )
    .map((variant) => ({
      id: `cv-${entity.id}-${variant.id}`,
      name: variant.color.name,
      hex: variant.color.hex,
      image: getMediaUrl(variant.image ?? undefined) || '/image/placeholder.png',
    }));

  // Use first variant as default
  const defaultVariant = colorVariants[0];

  // Use base product price
  const effectivePrice = entity.price;

  return {
    id: entity.documentId,
    documentId: entity.documentId,
    slug: entity.slug,
    name: entity.name,
    description: entity.description,
    price: effectivePrice,
    originalPrice: entity.originalPrice,
    currency: entity.currency || 'USD',
    model: entity.model || null,
    size: entity.size || null,
    colorVariants,
    thumbnail: defaultVariant?.image || '/image/placeholder.png',
    specs: (entity.specs as ProductSpec[]) || [],
    features: (entity.features || []).map(mapProductFeature),
    inStock: entity.inStock,
    categoryId: entity.category?.documentId || '',
    brandId: entity.brand?.documentId || '',
    category: entity.category ? mapCategory(entity.category) : undefined,
    brand: entity.brand ? mapBrand(entity.brand) : undefined,
  };
}

function mapCategory(entity: StrapiCategory): Category {
  return {
    id: entity.documentId,
    name: entity.name,
    slug: entity.slug,
    description: entity.description || null,
    image: getMediaUrl(entity.image),
  };
}

function mapBrand(entity: StrapiBrand): Brand {
  return {
    id: entity.documentId,
    name: entity.name,
    slug: entity.slug,
    logo: getMediaUrl(entity.logo),
  };
}

function mapFAQ(entity: StrapiFAQ): FAQItem {
  return {
    id: entity.documentId,
    question: entity.question,
    answer: entity.answer,
    order: entity.order,
  };
}

function mapWhyUsFeature(feature: StrapiWhyUsFeature): WhyUsFeature {
  return {
    id: feature.id,
    icon: getMediaUrl(feature.icon),
    title: feature.title,
    description: feature.description,
  };
}

function mapWhyUs(entity: StrapiWhyUs): WhyUsSection {
  return {
    sectionTitle: entity.sectionTitle,
    features: entity.features?.map(mapWhyUsFeature) || [],
  };
}

type PopulateValue = string | string[] | Record<string, boolean | { populate: string[] }>;

type FetchOptions = {
  locale?: string;
  populate?: PopulateValue;
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
};

// Helper to build nested filter params for Strapi
function buildFilterParams(
  params: URLSearchParams,
  filters: Record<string, unknown>,
  prefix = 'filters'
): void {
  for (const [key, value] of Object.entries(filters)) {
    const paramKey = `${prefix}[${key}]`;

    if (Array.isArray(value)) {
      // Handle arrays for $in operator: filters[category][documentId][$in][0]=id1
      for (let i = 0; i < value.length; i++) {
        params.set(`${paramKey}[${i}]`, String(value[i]));
      }
    } else if (typeof value === 'object' && value !== null) {
      // Recursively handle nested objects
      buildFilterParams(params, value as Record<string, unknown>, paramKey);
    } else {
      params.set(paramKey, String(value));
    }
  }
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: complex URL building logic
async function fetchStrapi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<StrapiResponse<T>> {
  const { locale = 'ru', populate, filters, sort, pagination } = options;

  const params = new URLSearchParams();
  params.set('locale', locale);

  if (populate) {
    if (Array.isArray(populate)) {
      for (let i = 0; i < populate.length; i++) {
        params.set(`populate[${i}]`, populate[i]);
      }
    } else if (typeof populate === 'object') {
      // Handle nested populate: { variants: { populate: ['image'] }, category: true }
      for (const [key, value] of Object.entries(populate)) {
        if (value === true) {
          // Simple populate: category: true
          params.set(`populate[${key}]`, 'true');
        } else if (typeof value === 'object' && value !== null && 'populate' in value) {
          // Nested populate: variants: { populate: ['image', 'color'] }
          const nestedPopulate = value.populate as string[];
          for (let i = 0; i < nestedPopulate.length; i++) {
            params.set(`populate[${key}][populate][${i}]`, nestedPopulate[i]);
          }
        }
      }
    } else {
      params.set('populate', populate);
    }
  }

  if (filters) {
    buildFilterParams(params, filters);
  }

  if (sort) {
    if (Array.isArray(sort)) {
      for (let i = 0; i < sort.length; i++) {
        params.set(`sort[${i}]`, sort[i]);
      }
    } else {
      params.set('sort', sort);
    }
  }

  if (pagination) {
    if (pagination.page) params.set('pagination[page]', String(pagination.page));
    if (pagination.pageSize) params.set('pagination[pageSize]', String(pagination.pageSize));
  }

  const response = await fetch(`${API_URL}${endpoint}?${params.toString()}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Strapi API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Products API
export interface GetProductsOptions {
  page?: number;
  pageSize?: number;
  categories?: string[];
  brands?: string[];
  priceMin?: number;
  priceMax?: number;
}

export async function getProducts(
  locale = 'ru',
  options: GetProductsOptions = {}
): Promise<PaginatedProducts> {
  const { page = 1, pageSize = 24, categories, brands, priceMin, priceMax } = options;

  // Build filters for Strapi
  const filters: Record<string, unknown> = {};

  if (categories?.length) {
    filters.category = { documentId: { $in: categories } };
  }

  if (brands?.length) {
    filters.brand = { documentId: { $in: brands } };
  }

  if (priceMin !== undefined || priceMax !== undefined) {
    const priceFilter: Record<string, number> = {};
    if (priceMin !== undefined) priceFilter.$gte = priceMin;
    if (priceMax !== undefined) priceFilter.$lte = priceMax;
    filters.price = priceFilter;
  }

  const response = await fetchStrapi<StrapiProduct[]>('/products', {
    locale,
    populate: {
      variants: { populate: ['image', 'color'] },
      category: true,
      brand: true,
      features: { populate: ['icon'] },
    },
    filters: Object.keys(filters).length > 0 ? filters : undefined,
    pagination: { page, pageSize },
  });

  const defaultMeta: PaginationMeta = {
    page,
    pageSize,
    pageCount: 1,
    total: response.data.length,
  };

  return {
    products: response.data.map(mapProduct),
    meta: response.meta.pagination ?? defaultMeta,
  };
}

export async function getProduct(documentId: string, locale = 'ru'): Promise<Product | null> {
  try {
    const response = await fetchStrapi<StrapiProduct>(`/products/${documentId}`, {
      locale,
      populate: {
        variants: { populate: ['image', 'color'] },
        category: true,
        brand: true,
        features: { populate: ['icon'] },
      },
    });

    return mapProduct(response.data);
  } catch {
    return null;
  }
}

export async function getProductBySlug(slug: string, locale = 'ru'): Promise<Product | null> {
  try {
    const response = await fetchStrapi<StrapiProduct[]>('/products', {
      locale,
      populate: {
        variants: { populate: ['image', 'color'] },
        category: true,
        brand: true,
        features: { populate: ['icon'] },
      },
      filters: { slug: { $eq: slug } },
    });

    if (response.data.length === 0) return null;
    return mapProduct(response.data[0]);
  } catch {
    return null;
  }
}

export async function getProductsByCategory(
  categorySlug: string,
  locale = 'ru'
): Promise<Product[]> {
  const response = await fetchStrapi<StrapiProduct[]>('/products', {
    locale,
    populate: {
      variants: { populate: ['image', 'color'] },
      category: true,
      brand: true,
      features: { populate: ['icon'] },
    },
    filters: { 'category.slug': { $eq: categorySlug } },
  });

  return response.data.map(mapProduct);
}

// Categories API
export async function getCategories(locale = 'ru'): Promise<Category[]> {
  const response = await fetchStrapi<StrapiCategory[]>('/categories', {
    locale,
    populate: '*',
  });

  return response.data.map(mapCategory);
}

export async function getCategory(documentId: string, locale = 'ru'): Promise<Category | null> {
  try {
    const response = await fetchStrapi<StrapiCategory>(`/categories/${documentId}`, {
      locale,
      populate: '*',
    });

    return mapCategory(response.data);
  } catch {
    return null;
  }
}

// Brands API
export async function getBrands(locale = 'ru'): Promise<Brand[]> {
  const response = await fetchStrapi<StrapiBrand[]>('/brands', {
    locale,
    populate: 'logo',
  });

  return response.data.map(mapBrand);
}

export async function getBrand(documentId: string, locale = 'ru'): Promise<Brand | null> {
  try {
    const response = await fetchStrapi<StrapiBrand>(`/brands/${documentId}`, {
      locale,
      populate: 'logo',
    });

    return mapBrand(response.data);
  } catch {
    return null;
  }
}

// FAQ API
export async function getFAQs(locale = 'ru'): Promise<FAQItem[]> {
  const response = await fetchStrapi<StrapiFAQ[]>('/faqs', {
    locale,
    sort: 'order:asc',
  });

  return response.data.map(mapFAQ);
}

// Why Us API (Single-Type)
export async function getWhyUs(locale = 'ru'): Promise<WhyUsSection | null> {
  try {
    const response = await fetchStrapi<StrapiWhyUs>('/why-us', {
      locale,
      populate: {
        features: {
          populate: ['icon'],
        },
      },
    });

    return mapWhyUs(response.data);
  } catch {
    return null;
  }
}

// About Us mapper
function mapAboutUs(entity: StrapiAboutUs): AboutUsSection {
  return {
    sectionTitle: entity.sectionTitle,
    heading: entity.heading,
    backgroundImage: getMediaUrl(entity.backgroundImage),
    buttonText: entity.buttonText,
    buttonLink: entity.buttonLink,
  };
}

// About Us API (Single-Type)
export async function getAboutUs(locale = 'ru'): Promise<AboutUsSection | null> {
  try {
    const response = await fetchStrapi<StrapiAboutUs>('/about-us', {
      locale,
      populate: 'backgroundImage',
    });

    return mapAboutUs(response.data);
  } catch {
    return null;
  }
}

// Hero mapper
function mapHero(entity: StrapiHero): HeroSection {
  return {
    title: entity.title,
    subtitle: entity.subtitle,
    ctaText: entity.ctaText,
    ctaLink: entity.ctaLink,
    backgroundVideo: getMediaUrl(entity.backgroundVideo),
  };
}

// Hero API (Single-Type)
export async function getHero(locale = 'ru'): Promise<HeroSection | null> {
  try {
    const response = await fetchStrapi<StrapiHero>('/hero', {
      locale,
      populate: 'backgroundVideo',
    });

    return mapHero(response.data);
  } catch {
    return null;
  }
}

// Color mapper
function mapColor(entity: StrapiColor): Color {
  return {
    id: entity.documentId,
    name: entity.name,
    hex: entity.hex,
  };
}

// Colors API
export async function getColors(locale = 'ru'): Promise<Color[]> {
  const response = await fetchStrapi<StrapiColor[]>('/colors', {
    locale,
  });

  return response.data.map(mapColor);
}

// Header About mapper
function mapHeaderAbout(entity: StrapiHeaderAbout): HeaderAboutSection {
  return {
    paragraph1: entity.paragraph1,
    paragraph2: entity.paragraph2,
  };
}

// Header About API (Single-Type)
export async function getHeaderAbout(locale = 'ru'): Promise<HeaderAboutSection | null> {
  try {
    const response = await fetchStrapi<StrapiHeaderAbout>('/header-about', {
      locale,
    });

    return mapHeaderAbout(response.data);
  } catch {
    return null;
  }
}

// Header Contact mapper
function mapHeaderContact(entity: StrapiHeaderContact): HeaderContactSection {
  return {
    chatTitle: entity.chatTitle,
    chatLink: entity.chatLink,
    chatUrl: entity.chatUrl,
    socialTitle: entity.socialTitle,
    socialLinks: entity.socialLinks || [],
    phoneTitle: entity.phoneTitle,
    phoneNumber: entity.phoneNumber,
    deliveryTitle: entity.deliveryTitle,
    deliverySupportLink: entity.deliverySupportLink,
    deliverySupportUrl: entity.deliverySupportUrl,
    deliveryReturnsLink: entity.deliveryReturnsLink,
    deliveryReturnsUrl: entity.deliveryReturnsUrl,
  };
}

// Header Contact API (Single-Type)
export async function getHeaderContact(locale = 'ru'): Promise<HeaderContactSection | null> {
  try {
    const response = await fetchStrapi<StrapiHeaderContact>('/header-contact', {
      locale,
      populate: 'socialLinks',
    });

    return mapHeaderContact(response.data);
  } catch {
    return null;
  }
}

// Site Settings mapper
function mapSiteSettings(entity: StrapiSiteSettings): SiteSettings {
  return {
    siteName: entity.siteName,
    siteTitle: entity.siteTitle,
    siteDescription: entity.siteDescription,
    keywords: entity.keywords ? entity.keywords.split(',').map((k) => k.trim()) : [],
    ogImage: getMediaUrl(entity.ogImage ?? undefined),
    favicon: getMediaUrl(entity.favicon ?? undefined),
    twitterHandle: entity.twitterHandle,
  };
}

// Site Settings API (Single-Type)
export async function getSiteSettings(locale = 'en'): Promise<SiteSettings | null> {
  try {
    const response = await fetchStrapi<StrapiSiteSettings>('/site-setting', {
      locale,
      populate: ['ogImage', 'favicon'],
    });

    return mapSiteSettings(response.data);
  } catch {
    return null;
  }
}
