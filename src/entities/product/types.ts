export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  categoryId: string;
  brandId: string;
  colors: string[];
  specs: ProductSpec[];
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}
