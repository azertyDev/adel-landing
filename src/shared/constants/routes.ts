export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT: (slug: string) => `/products/${slug}`,
  CATEGORY: (slug: string) => `/categories/${slug}`,
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
} as const;
