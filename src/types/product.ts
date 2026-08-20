export type ProductCategory = 
  | 'oversized-tees'
  | 'heavyweight-hoodies'
  | 'relaxed-trousers'
  | 'baggy-denim'
  | 'resort-shirts'
  | 'jackets-overshirts';

export type ProductFit = 'Oversized' | 'Relaxed Fit' | 'Boxy Fit' | 'Straight Fit';

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  fit: ProductFit;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isLootpaatSale?: boolean;
  tags: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  images: string[];
  description: string;
  fabricDetails: string;
  careInstructions: string[];
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
  quantity: number;
}
