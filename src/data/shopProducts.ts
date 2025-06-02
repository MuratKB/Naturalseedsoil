import { ShopProduct } from '../types/shop';

export const shopProducts: ShopProduct[] = [
  {
    id: 'black-seed-oil',
    name: 'Black Seed Oil',
    description: 'Premium cold-pressed Nigella sativa oil with 2-2.4% thymoquinone content. Available in food-grade and cosmetic-grade options.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748709884/BSO_ncm4dp.jpg',
    category: 'oils',
    sizes: [
      { size: '5', unit: 'L', price: 450, inStock: true },
      { size: '10', unit: 'L', price: 850, inStock: true },
      { size: '20', unit: 'L', price: 1600, inStock: true },
      { size: '30', unit: 'L', price: 2300, inStock: true },
      { size: '100', unit: 'L', price: undefined, inStock: true }
    ]
  },
  {
    id: 'laurel-berry-oil',
    name: 'Laurel Berry Oil',
    description: 'Traditional laurel berry oil from wild-harvested berries. Perfect for authentic Aleppo soap production.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765023/LBO_nkpvrn.jpg',
    category: 'oils',
    sizes: [
      { size: '5', unit: 'L', price: 550, inStock: true },
      { size: '10', unit: 'L', price: 1050, inStock: true },
      { size: '20', unit: 'L', price: 2000, inStock: true },
      { size: '30', unit: 'L', price: 2900, inStock: true },
      { size: '100', unit: 'L', price: undefined, inStock: true }
    ]
  },
  {
    id: 'aleppo-soap',
    name: 'Aleppo Soap',
    description: 'Traditional Aleppo soap with 20-40% laurel oil content, aged for 12-18 months.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765448/Alepposoap_ugwisi.jpg',
    category: 'soaps',
    sizes: [
      { size: '100', unit: 'pcs', price: 450, inStock: true },
      { size: '300', unit: 'pcs', price: 1250, inStock: true }
    ],
    minOrder: 100
  },
  {
    id: 'white-sage',
    name: 'White Sage Smudge',
    description: 'Premium hand-tied white sage bundles, sustainably harvested.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765310/whitesage_ldctpt.jpg',
    category: 'sage',
    sizes: [
      { size: '100', unit: 'pcs', price: 550, inStock: true }
    ],
    minOrder: 100
  },
  {
    id: 'desert-sage',
    name: 'Desert Sage Smudge',
    description: 'Traditional desert sage bundles, perfect for cleansing rituals.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765310/whitesage_ldctpt.jpg',
    category: 'sage',
    sizes: [
      { size: '100', unit: 'pcs', price: 500, inStock: true }
    ],
    minOrder: 100
  },
  {
    id: 'lavender-smudge',
    name: 'Lavender Smudge',
    description: 'Aromatic lavender smudge bundles, hand-tied with care.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765310/whitesage_ldctpt.jpg',
    category: 'sage',
    sizes: [
      { size: '100', unit: 'pcs', price: 600, inStock: true }
    ],
    minOrder: 100
  },
  {
    id: 'rosemary-smudge',
    name: 'Rosemary Smudge',
    description: 'Fresh rosemary smudge bundles for purification and clarity.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765310/whitesage_ldctpt.jpg',
    category: 'sage',
    sizes: [
      { size: '100', unit: 'pcs', price: 600, inStock: true }
    ],
    minOrder: 100
  }
];