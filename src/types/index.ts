export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Individual price
  pairPrice: number; // Bundle price for two
  category: string;
  images: string[];
  features: string[];
  sizes: string[];
  colors: string[];
}

export type Category = 
  | 'Kids & Youth' 
  | 'Loungewear & Sleepwear' 
  | 'Accessories & Jewelry' 
  | 'Gifts & Keepsakes';
