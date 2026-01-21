import { env } from '@/shared/config/env';
import type {
  AboutUsSection,
  Brand,
  Category,
  Color,
  FAQItem,
  HeroSection,
  Product,
  ProductSpec,
  StrapiAboutUs,
  StrapiBrand,
  StrapiCategory,
  StrapiColor,
  StrapiFAQ,
  StrapiHero,
  StrapiMedia,
  StrapiProduct,
  StrapiResponse,
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

// Strapi v5 mappers - fields are directly on entity (no attributes nesting)
function mapProduct(entity: StrapiProduct): Product {
  return {
    id: entity.documentId,
    slug: entity.slug,
    name: entity.name,
    description: entity.description,
    price: entity.price,
    originalPrice: entity.originalPrice,
    currency: 'USD',
    colors: entity.colors || [],
    specs: (entity.specs as ProductSpec[]) || [],
    inStock: entity.inStock,
    images: entity.images?.map((img) => getMediaUrl(img) || '') || [],
    categoryId: entity.category?.documentId || '',
    brandId: entity.brand?.documentId || '',
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

type PopulateValue = string | string[] | Record<string, { populate: string[] }>;

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
      // Handle nested populate: { features: { populate: ['icon'] } }
      for (const [key, value] of Object.entries(populate)) {
        if (value.populate) {
          for (let i = 0; i < value.populate.length; i++) {
            params.set(`populate[${key}][populate][${i}]`, value.populate[i]);
          }
        }
      }
    } else {
      params.set('populate', populate);
    }
  }

  if (filters) {
    for (const [key, value] of Object.entries(filters)) {
      params.set(`filters[${key}]`, String(value));
    }
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
export async function getProducts(locale = 'ru'): Promise<Product[]> {
  const response = await fetchStrapi<StrapiProduct[]>('/products', {
    locale,
    populate: ['images', 'category', 'brand'],
  });

  return response.data.map(mapProduct);
}

export async function getProduct(documentId: string, locale = 'ru'): Promise<Product | null> {
  try {
    const response = await fetchStrapi<StrapiProduct>(`/products/${documentId}`, {
      locale,
      populate: ['images', 'category', 'brand'],
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
      populate: ['images', 'category', 'brand'],
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
    populate: ['images', 'category', 'brand'],
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
