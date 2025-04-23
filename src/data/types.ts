export interface ProductVariant {
  size: string;
  price: number;
  sku?: string;
  inStock?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  inStock?: boolean;
  oldPrice?: number;
  brand?: string;
  specs?: { label: string; value: string }[];
  sku?: string;
  features?: string[];
  specifications?: Record<string, string | number>;
  variants?: ProductVariant[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
