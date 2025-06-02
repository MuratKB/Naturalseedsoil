import { ShopProduct } from '../types/shop';

export const shopProducts: ShopProduct[] = [
  {
    id: 'black-seed-oil',
    name: 'Black Seed Oil',
    description: 'Premium cold-pressed Nigella sativa oil with high thymoquinone content (2.2-2.4%). For higher TQ levels, please contact us.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748709884/BSO_ncm4dp.jpg',
    category: 'oils',
    sizes: [
      { size: '5', unit: 'L', price: 159, inStock: true },
      { size: '10', unit: 'L', price: 295, inStock: true },
      { size: '20', unit: 'L', price: 559, inStock: true },
      { size: '30', unit: 'L', price: 819, inStock: true },
      { size: '100', unit: 'L', price: undefined, inStock: true }
    ]
  },
  {
    id: 'laurel-berry-oil',
    name: 'Laurel Berry Oil',
    description: 'Traditional method from Turkey. Perfect for authentic Aleppo soap production.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765023/LBO_nkpvrn.jpg',
    category: 'oils',
    sizes: [
      { size: '5', unit: 'L', price: 199, inStock: true },
      { size: '10', unit: 'L', price: 379, inStock: true },
      { size: '20', unit: 'L', price: 729, inStock: true },
      { size: '30', unit: 'L', price: 1069, inStock: true },
      { size: '100', unit: 'L', price: undefined, inStock: true }
    ]
  },
  {
    id: 'aleppo-soap',
    name: 'Aleppo Soap',
    description: 'Traditional Aleppo soap with 20% laurel oil content, 120g per bar.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765448/Alepposoap_ugwisi.jpg',
    category: 'soaps',
    sizes: [
      { size: '100', unit: 'pcs', price: 195, inStock: true },
      { size: '300', unit: 'pcs', price: 540, inStock: true }
    ],
    minOrder: 100
  },
  {
    id: 'smudge-sticks',
    name: 'Premium Smudge Sticks',
    description: 'Hand-tied premium smudge bundles, 6 inches (15 cm). Minimum order: 100 pieces.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765310/whitesage_ldctpt.jpg',
    category: 'sage',
    sizes: [
      { 
        size: 'White Sage', 
        unit: 'Smudge', 
        price: 169, 
        inStock: true 
      },
      { 
        size: 'Desert Sage', 
        unit: 'Smudge', 
        price: 149, 
        inStock: true 
      },
      { 
        size: 'Lavender', 
        unit: 'Smudge', 
        price: 149, 
        inStock: true 
      },
      { 
        size: 'Rosemary', 
        unit: 'Smudge', 
        price: 149, 
        inStock: true 
      },
      { 
        size: 'Cedar', 
        unit: 'Smudge', 
        price: 149, 
        inStock: true 
      },
      { 
        size: 'Eucalyptus', 
        unit: 'Smudge', 
        price: 129, 
        inStock: true 
      },
      { 
        size: 'Sage w Rose', 
        unit: 'Smudge', 
        price: 169, 
        inStock: true 
      },
      { 
        size: 'Sage w Flowers', 
        unit: 'Smudge', 
        price: 199, 
        inStock: true 
      }
    ],
    minOrder: 100
  }
];