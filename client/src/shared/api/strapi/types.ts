// Strapi v5 API response types

export interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: StrapiMeta;
}

// In Strapi v5, attributes are flattened directly on the entity
export interface StrapiEntity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

// Media types
export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  url: string;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

// Spec type
export interface ProductSpec {
  label: string;
  value: string;
}

// Strapi product variant component
export interface StrapiProductVariant {
  id: number;
  color: StrapiColor | null;
  image: StrapiMedia | null;
}

// Strapi product feature component
export interface StrapiProductFeature {
  id: number;
  icon: StrapiMedia | null;
  title: string;
  description: string;
}

// Strapi v5 entity types (attributes are flattened)
export interface StrapiProduct extends StrapiEntity {
  name: string;
  slug: string;
  description: string;
  model: string | null;
  size: string | null;
  price: number;
  currency: 'USD' | 'EUR' | 'TRY' | 'RUB' | null;
  originalPrice: number | null;
  variants: StrapiProductVariant[];
  specs: ProductSpec[];
  features: StrapiProductFeature[];
  inStock: boolean;
  category?: StrapiCategory;
  brand?: StrapiBrand;
}

export interface StrapiCategory extends StrapiEntity {
  name: string;
  slug: string;
  description?: string;
  image?: StrapiMedia;
}

export interface StrapiBrand extends StrapiEntity {
  name: string;
  slug: string;
  logo?: StrapiMedia;
}

export interface StrapiFAQ extends StrapiEntity {
  question: string;
  answer: string;
  order: number;
}

// Mapped types for frontend use
export interface Product {
  id: string;
  documentId: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  currency: 'USD' | 'EUR' | 'TRY' | 'RUB';
  model: string | null;
  size: string | null;
  colorVariants: ColorVariant[];
  thumbnail: string;
  specs: ProductSpec[];
  features: ProductFeature[];
  inStock: boolean;
  categoryId?: string;
  brandId?: string;
  category?: Category;
  brand?: Brand;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

// Why Us types
export interface StrapiWhyUsFeature {
  id: number;
  icon: StrapiMedia;
  title: string;
  description: string;
}

export interface StrapiWhyUs extends StrapiEntity {
  sectionTitle: string;
  features: StrapiWhyUsFeature[];
}

export interface WhyUsFeature {
  id: number;
  icon: string | null;
  title: string;
  description: string;
}

export interface WhyUsSection {
  sectionTitle: string;
  features: WhyUsFeature[];
}

// About Us types
export interface StrapiAboutUs extends StrapiEntity {
  sectionTitle: string;
  heading: string;
  backgroundImage: StrapiMedia;
  buttonText: string;
  buttonLink: string;
}

export interface AboutUsSection {
  sectionTitle: string;
  heading: string;
  backgroundImage: string | null;
  buttonText: string;
  buttonLink: string;
}

// Hero types
export interface StrapiHero extends StrapiEntity {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundVideo: StrapiMedia;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundVideo: string | null;
}

// Color types
export interface StrapiColor extends StrapiEntity {
  name: string;
  hex: string;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
}

// ColorVariant for product color selection with linked images
export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  image: string;
}

// ProductFeature for product page highlights
export interface ProductFeature {
  id: number;
  icon: string | null;
  title: string;
  description: string;
}

// Header About Dropdown types
export interface StrapiHeaderAbout extends StrapiEntity {
  paragraph1: string;
  paragraph2: string;
}

export interface HeaderAboutSection {
  paragraph1: string;
  paragraph2: string;
}

// Header Contact Dropdown types
export interface StrapiSocialLink {
  id: number;
  platform: string;
  url: string;
  label: string;
}

export interface StrapiHeaderContact extends StrapiEntity {
  chatTitle: string;
  chatLink: string;
  chatUrl: string | null;
  socialTitle: string;
  socialLinks: StrapiSocialLink[];
  phoneTitle: string;
  phoneNumber: string;
  deliveryTitle: string;
  deliverySupportLink: string;
  deliverySupportUrl: string | null;
  deliveryReturnsLink: string;
  deliveryReturnsUrl: string | null;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  label: string;
}

export interface HeaderContactSection {
  chatTitle: string;
  chatLink: string;
  chatUrl: string | null;
  socialTitle: string;
  socialLinks: SocialLink[];
  phoneTitle: string;
  phoneNumber: string;
  deliveryTitle: string;
  deliverySupportLink: string;
  deliverySupportUrl: string | null;
  deliveryReturnsLink: string;
  deliveryReturnsUrl: string | null;
}
