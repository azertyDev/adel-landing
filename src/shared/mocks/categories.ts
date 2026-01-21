import type { Category } from '@/entities/category';

export const mockCategories: Category[] = [
  {
    id: '1',
    slug: 'coffee-machines',
    name: 'Coffee Machines',
    description: 'Premium coffee machines for the perfect brew',
    image: '/image/category-1.png',
  },
  {
    id: '2',
    slug: 'kitchen-appliances',
    name: 'Kitchen Appliances',
    description: 'Essential appliances for your kitchen',
    image: '/image/category-2.png',
  },
  {
    id: '3',
    slug: 'air-purifiers',
    name: 'Air Purifiers',
    description: 'Clean and fresh air for your home',
    image: '/image/category-3.png',
  },
];
