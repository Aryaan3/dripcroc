import { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'dc-001',
    name: 'DripCroc Pinstripe Oversized Resort Shirt',
    slug: 'dripcroc-pinstripe-oversized-resort-shirt',
    category: 'resort-shirts',
    categoryLabel: 'Resort Shirt',
    price: 1399,
    originalPrice: 2499,
    discountPercentage: 44,
    fit: 'Oversized',
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
    isNewArrival: true,
    isBestSeller: true,
    isLootpaatSale: true,
    tags: ['Best Seller', 'Oversized Fit', 'Vertical Stripe', 'Lootpaat Sale'],
    colors: [
      { name: 'Pinstripe White', hex: '#F3F4F6' },
      { name: 'Vintage Black', hex: '#121212' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      '/assets/dripcroc-model-pinstripe.jpg',
      '/assets/dripcroc-model-hero.jpg'
    ],
    description: 'Relaxed vertical pinstripe overshirt cut with wide dropped shoulders. Designed for effortless open-layering over ribbed tanks and wide-leg denim.',
    fabricDetails: '65% Organic Cotton / 35% Linen Blend, 210 GSM',
    careInstructions: ['Machine wash cold gentle cycle', 'Hang dry in shade', 'Iron on medium heat']
  },
  {
    id: 'dc-002',
    name: 'DripCroc Retro Heritage Collared Jersey',
    slug: 'dripcroc-retro-heritage-collared-jersey',
    category: 'oversized-tees',
    categoryLabel: 'Retro Jersey',
    price: 1499,
    originalPrice: 2699,
    discountPercentage: 44,
    fit: 'Boxy Fit',
    rating: 5.0,
    reviewCount: 210,
    inStock: true,
    isNewArrival: true,
    isBestSeller: true,
    tags: ['Retro Kit', 'Burgundy Trim', 'Trefoil Emblem', 'Lootpaat Sale'],
    colors: [
      { name: 'Off-White / Maroon', hex: '#FAF9F6' },
      { name: 'Pitch Black', hex: '#121212' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/assets/dripcroc-arsenal-kit.jpg',
      '/assets/dripcroc-authentic-badge.jpg'
    ],
    description: 'Vintage football kit silhouette with structured flat-knit collar, contrast burgundy sleeve piping, and metallic gold chest embroidery.',
    fabricDetails: '100% Breathable Jacquard Mesh Cotton, 230 GSM, Moisture-wicking',
    careInstructions: ['Machine wash cold inside out', 'Do not tumble dry', 'Iron inside out']
  },
  {
    id: 'dc-003',
    name: 'DripCroc Authentic Performance Kit (Green / Red)',
    slug: 'dripcroc-authentic-performance-kit-green-red',
    category: 'oversized-tees',
    categoryLabel: 'Authentic Kit',
    price: 1599,
    originalPrice: 2899,
    discountPercentage: 45,
    fit: 'Relaxed Fit',
    rating: 4.8,
    reviewCount: 145,
    inStock: true,
    isNewArrival: true,
    tags: ['Authentic Badge', 'Tri-Color Collar', 'Breathable Mesh'],
    colors: [
      { name: 'Classic White / Green', hex: '#FFFFFF' },
      { name: 'Stealth Black', hex: '#1A1A1A' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      '/assets/dripcroc-palmeiras-kit.jpg',
      '/assets/dripcroc-authentic-badge.jpg',
      '/assets/dripcroc-retro-kit-detail.jpg'
    ],
    description: 'Authentic licensed pitch jersey featuring tri-color rib collar, side stripe piping, and high-density gold authenticity hem patch.',
    fabricDetails: '100% Re:Fibre Recycled Performance Poly-Mesh, 220 GSM',
    careInstructions: ['Machine wash cold gentle', 'Cool iron']
  },
  {
    id: 'dc-004',
    name: 'DripCroc Vintage Wash Wide-Leg Skate Denim',
    slug: 'dripcroc-vintage-wash-wide-leg-skate-denim',
    category: 'baggy-denim',
    categoryLabel: 'Baggy Denim',
    price: 1899,
    originalPrice: 3499,
    discountPercentage: 45,
    fit: 'Straight Fit',
    rating: 4.9,
    reviewCount: 198,
    inStock: true,
    isBestSeller: true,
    isLootpaatSale: true,
    tags: ['14 oz Denim', 'Vintage Fade', 'Wide Leg'],
    colors: [
      { name: 'Washed Indigo', hex: '#4A6B82' },
      { name: 'Washed Black', hex: '#222222' }
    ],
    sizes: ['M', 'L', 'XL'],
    images: [
      '/assets/dripcroc-model-hero.jpg',
      '/assets/dripcroc-model-pinstripe.jpg'
    ],
    description: 'Authentic 14oz non-stretch denim crafted with high-waisted wide leg design. Features vintage whiskering and custom antique bronze DRIPCROC hardware.',
    fabricDetails: '100% Heavyweight Rigid Cotton Denim, 14oz',
    careInstructions: ['Wash inside out with similar colors', 'Hang dry in shade']
  },
  {
    id: 'dc-005',
    name: 'DripCroc Signature 400 GSM Fleece Hoodie',
    slug: 'dripcroc-signature-400-gsm-fleece-hoodie',
    category: 'heavyweight-hoodies',
    categoryLabel: 'Heavyweight Hoodie',
    price: 2199,
    originalPrice: 3999,
    discountPercentage: 45,
    fit: 'Boxy Fit',
    rating: 5.0,
    reviewCount: 215,
    inStock: true,
    isBestSeller: true,
    tags: ['400 GSM', 'Ultra Heavyweight', 'Embroidered Logo'],
    colors: [
      { name: 'Signature Orange', hex: '#F15A00' },
      { name: 'Jet Black', hex: '#121212' },
      { name: 'Heather Grey', hex: '#9CA3AF' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Ultra-heavy 400 GSM fleece lined hoodie with double-layered hood and high-density 3D embossed DRIPCROC chest embroidery.',
    fabricDetails: '80% Cotton / 20% Polyester Heavy Fleece, 400 GSM',
    careInstructions: ['Machine wash cold gentle cycle', 'Do not bleach']
  },
  {
    id: 'dc-006',
    name: 'DripCroc Multi-Pocket Utility Cargo Trousers',
    slug: 'dripcroc-multi-pocket-utility-cargo-trousers',
    category: 'relaxed-trousers',
    categoryLabel: 'Relaxed Cargo',
    price: 1699,
    originalPrice: 2999,
    discountPercentage: 43,
    fit: 'Relaxed Fit',
    rating: 4.8,
    reviewCount: 110,
    inStock: true,
    tags: ['6-Pockets', 'Ripstop Cotton', 'Adjustable Hem'],
    colors: [
      { name: 'Stealth Black', hex: '#1A1A1A' },
      { name: 'Khaki Tan', hex: '#C2B280' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Heavy duty cotton ripstop cargo pants with 6 functional utility pockets, custom ankle drawstring adjusters, and elasticated waist flex panels.',
    fabricDetails: '100% Cotton Ripstop Weave, 280 GSM',
    careInstructions: ['Wash with like colors', 'Cool iron if needed']
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Products', count: 6 },
  { id: 'resort-shirts', label: 'Resort Shirts', count: 18 },
  { id: 'oversized-tees', label: 'Retro Jerseys & Tees', count: 24 },
  { id: 'baggy-denim', label: 'Baggy Denim', count: 16 },
  { id: 'heavyweight-hoodies', label: 'Heavyweight Hoodies', count: 12 },
  { id: 'relaxed-trousers', label: 'Relaxed Trousers', count: 14 }
];
