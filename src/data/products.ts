import { Product } from '../types';

export const products: Product[] = [
  // Kids & Youth
  {
    id: 'kids-partner-in-crime',
    name: 'Partner in Crime T-Shirt Set',
    description: 'Playful matching T-shirts for best friends or siblings. Made with 100% organic cotton.',
    price: 18,
    pairPrice: 30,
    category: 'Kids & Youth',
    images: ['https://placehold.co/600x600/FF5A5F/white?text=Partner+In+Crime'],
    features: ['100% Organic Cotton', 'Durable Print', 'Unisex Fit'],
    sizes: ['2T', '3T', '4T', '5T', 'S', 'M', 'L'],
    colors: ['White', 'Navy', 'Grey']
  },
  {
    id: 'kids-dino-duo',
    name: 'Dino Duo Hoodie Set',
    description: 'Coordinated dinosaur hoodies for the ultimate playdate adventure.',
    price: 32,
    pairPrice: 55,
    category: 'Kids & Youth',
    images: ['https://placehold.co/600x600/00A699/white?text=Dino+Duo'],
    features: ['Fleece Lining', '3D Dino Spikes', 'Warm & Cozy'],
    sizes: ['4T', '5T', 'S', 'M', 'L'],
    colors: ['Green', 'Orange']
  },
  {
    id: 'kids-bestie-bracelets',
    name: 'Bestie Friendship Bands',
    description: 'Colorful hand-woven friendship bands for young pairs.',
    price: 12,
    pairPrice: 20,
    category: 'Kids & Youth',
    images: ['https://placehold.co/600x600/FFB400/white?text=Bestie+Bands'],
    features: ['Hand-woven', 'Adjustable', 'Waterproof'],
    sizes: ['Standard'],
    colors: ['Rainbow', 'Ocean', 'Sunset']
  },

  // Loungewear & Sleepwear
  {
    id: 'cozy-night-pjs',
    name: 'Midnight Snuggle Pajama Set',
    description: 'Ultra-soft flannel pajamas for the perfect night in. Available in coordinated patterns.',
    price: 45,
    pairPrice: 80,
    category: 'Loungewear & Sleepwear',
    images: ['https://placehold.co/600x600/2C333A/white?text=Midnight+Snuggle'],
    features: ['Premium Flannel', 'Elastic Waistband', 'Coordinated Design'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Plaid Red', 'Navy Stripe', 'Forest Green']
  },
  {
    id: 'silk-dream-robes',
    name: 'Silk Dream Luxury Robes',
    description: 'Premium mulberry silk robes for a touch of elegance at home.',
    price: 85,
    pairPrice: 150,
    category: 'Loungewear & Sleepwear',
    images: ['https://placehold.co/600x600/FF5A5F/white?text=Silk+Robes'],
    features: ['Mulberry Silk', 'Custom Monogram Available', 'Deep Pockets'],
    sizes: ['S/M', 'L/XL'],
    colors: ['Champagne', 'Midnight Blue', 'Burgundy']
  },
  {
    id: 'cloud-joggers',
    name: 'Cloud-Soft Jogger Set',
    description: 'The ultimate coordinated loungewear for lazy Sundays.',
    price: 55,
    pairPrice: 95,
    category: 'Loungewear & Sleepwear',
    images: ['https://placehold.co/600x600/00A699/white?text=Cloud+Joggers'],
    features: ['Bamboo Fabric', 'Four-way Stretch', 'Breathable'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Heather Grey', 'Sage', 'Oatmeal']
  },

  // Accessories & Jewelry
  {
    id: 'interlocking-heart-bracelets',
    name: 'Interlocking Heart Bracelets',
    description: 'Subtle and elegant leather bracelets with interlocking stainless steel hearts.',
    price: 25,
    pairPrice: 45,
    category: 'Accessories & Jewelry',
    images: ['https://placehold.co/600x600/00A699/white?text=Heart+Bracelets'],
    features: ['Genuine Leather', 'Stainless Steel', 'Adjustable Size'],
    sizes: ['Adjustable'],
    colors: ['Black', 'Brown']
  },
  {
    id: 'soulmate-necklaces',
    name: 'Soulmate Bar Necklaces',
    description: 'Coordinated bar necklaces with custom coordinates of your meeting place.',
    price: 40,
    pairPrice: 70,
    category: 'Accessories & Jewelry',
    images: ['https://placehold.co/600x600/FF5A5F/white?text=Soulmate+Necklaces'],
    features: ['18K Gold Plated', 'Custom Engraving', 'Tarnish Resistant'],
    sizes: ['18 inch', '22 inch'],
    colors: ['Gold', 'Silver', 'Rose Gold']
  },
  {
    id: 'adventure-watches',
    name: 'Couple Adventure Watches',
    description: 'Rugged yet stylish watches for couples who explore together.',
    price: 95,
    pairPrice: 170,
    category: 'Accessories & Jewelry',
    images: ['https://placehold.co/600x600/2C333A/white?text=Adventure+Watches'],
    features: ['Water Resistant 50m', 'Japanese Movement', 'Nylon Strap'],
    sizes: ['38mm', '42mm'],
    colors: ['Olive', 'Black', 'Tan']
  },

  // Gifts & Keepsakes
  {
    id: 'our-story-journal',
    name: 'Our Story: Guided Journal',
    description: 'A beautiful journal with prompts to document your relationship milestones.',
    price: 22,
    pairPrice: 40,
    category: 'Gifts & Keepsakes',
    images: ['https://placehold.co/600x600/FFB400/white?text=Our+Story+Journal'],
    features: ['Hardcover', 'Premium Paper', '100+ Prompts'],
    sizes: ['Standard'],
    colors: ['Coral', 'Teal', 'Charcoal']
  },
  {
    id: 'map-your-moment',
    name: 'Star Map Framed Art',
    description: 'A custom star map of the sky exactly as it appeared on your special night.',
    price: 50,
    pairPrice: 90,
    category: 'Gifts & Keepsakes',
    images: ['https://placehold.co/600x600/2C333A/white?text=Star+Map'],
    features: ['Premium Frame', 'High-Quality Print', 'Custom Location'],
    sizes: ['8x10', '11x14', '16x20'],
    colors: ['Classic Black', 'Modern White', 'Rustic Oak']
  },
  {
    id: 'connection-candles',
    name: 'Connection Candle Duo',
    description: 'Two scents that combine to create a unique third fragrance when burned together.',
    price: 28,
    pairPrice: 50,
    category: 'Gifts & Keepsakes',
    images: ['https://placehold.co/600x600/FF5A5F/white?text=Candle+Duo'],
    features: ['Soy Wax', 'Cotton Wick', '40hr Burn Time'],
    sizes: ['8oz'],
    colors: ['Sea & Sand', 'Pine & Cedar', 'Rose & Vanilla']
  }
];
