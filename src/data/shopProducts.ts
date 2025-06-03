import { ShopProduct } from '../types/shop';

export const shopProducts: ShopProduct[] = [
  {
    id: 'test-product',
    name: 'Test Product ($1)',
    description: 'This is a test product for payment system verification. Will be removed after 1 hour.',
    image: 'https://images.pexels.com/photos/6621312/pexels-photo-6621312.jpeg',
    category: 'test',
    sizes: [
      { 
        size: '1', 
        unit: 'pc', 
        price: 1, 
        inStock: true, 
        stockLevel: 100 
      }
    ]
  },
  {
    id: 'black-seed-oil',
    name: 'Black Seed Oil',
    description: 'Premium cold-pressed Nigella sativa oil with high thymoquinone content (2.2-2.4%). For higher TQ levels, please contact us.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748709884/BSO_ncm4dp.jpg',
    category: 'oils',
    sizes: [
      { size: '5', unit: 'L', price: 159, inStock: true, stockLevel: 300 },
      { size: '10', unit: 'L', price: 295, inStock: true, stockLevel: 150 },
      { size: '20', unit: 'L', price: 559, inStock: true, stockLevel: 75 },
      { size: '30', unit: 'L', price: 819, inStock: true, stockLevel: 50 },
      { size: '100', unit: 'L', price: undefined, inStock: true, stockLevel: 15 }
    ]
  },
  {
    id: 'laurel-berry-oil',
    name: 'Laurel Berry Oil',
    description: 'Traditional method from Turkey. Perfect for authentic Aleppo soap production.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765023/LBO_nkpvrn.jpg',
    category: 'oils',
    sizes: [
      { size: '5', unit: 'L', price: 199, inStock: true, stockLevel: 100 },
      { size: '10', unit: 'L', price: 379, inStock: true, stockLevel: 50 },
      { size: '20', unit: 'L', price: 729, inStock: true, stockLevel: 25 },
      { size: '30', unit: 'L', price: 1069, inStock: true, stockLevel: 15 },
      { size: '100', unit: 'L', price: undefined, inStock: true, stockLevel: 5 }
    ]
  },
  {
    id: 'aleppo-soap',
    name: 'Aleppo Soap',
    description: 'Traditional Aleppo soap with 20% laurel oil content, 120g per bar.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765448/Alepposoap_ugwisi.jpg',
    category: 'soaps',
    sizes: [
      { size: '100', unit: 'pcs', price: 195, inStock: true, stockLevel: 1500 },
      { size: '300', unit: 'pcs', price: 540, inStock: true, stockLevel: 500 }
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
        size: '100', 
        unit: 'pcs', 
        price: 169, 
        inStock: true,
        stockLevel: 400
      },
      { 
        size: '300', 
        unit: 'pcs', 
        price: 459, 
        inStock: true,
        stockLevel: 133
      },
      { 
        size: '500', 
        unit: 'pcs', 
        price: 729, 
        inStock: true,
        stockLevel: 80
      }
    ],
    minOrder: 100
  }
];