import { ShopProduct } from '../types/shop';

export const shopProducts: ShopProduct[] = [
  {
    id: 'lavender-smudge',
    name: 'Lavender Smudge Sticks',
    description: 'Hand-tied premium lavender smudge bundles, 6 inches (15 cm) each. Sold in boxes of 100 bundles.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748956919/LAV101_mn1jq4.jpg',
    category: 'sage',
    sizes: [
      { 
        size: '100', 
        unit: 'pieces', 
        price: 149, 
        inStock: true,
        stockLevel: 300
      },
      { 
        size: '300', 
        unit: 'pieces', 
        price: 419, 
        inStock: true,
        stockLevel: 100
      },
      { 
        size: '500', 
        unit: 'pieces', 
        price: 679, 
        inStock: true,
        stockLevel: 50
      }
    ],
    minOrder: 1
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
      { 
        size: '100', 
        unit: 'pieces', 
        price: 195, 
        inStock: true, 
        stockLevel: 1500 
      },
      { 
        size: '300', 
        unit: 'pieces', 
        price: 540, 
        inStock: true, 
        stockLevel: 500 
      }
    ],
    minOrder: 1
  },
  {
    id: 'smudge-sticks',
    name: 'Premium Smudge Sticks',
    description: 'Hand-tied premium smudge bundles, 6 inches (15 cm) each. Sold in boxes of 100 bundles.',
    image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765310/whitesage_ldctpt.jpg',
    category: 'sage',
    sizes: [
      { 
        size: 'White Sage', 
        unit: '100pc bundle', 
        price: 169, 
        inStock: true,
        stockLevel: 400
      },
      { 
        size: 'Desert Sage', 
        unit: '100pc bundle', 
        price: 149, 
        inStock: true,
        stockLevel: 350
      },
      { 
        size: 'Dragon Blood', 
        unit: '100pc bundle', 
        price: 179, 
        inStock: true,
        stockLevel: 300
      },
      { 
        size: 'Rosemary', 
        unit: '100pc bundle', 
        price: 159, 
        inStock: true,
        stockLevel: 350
      },
      { 
        size: 'Lavender', 
        unit: '100pc bundle', 
        price: 149, 
        inStock: true,
        stockLevel: 300
      },
      { 
        size: 'Eucalyptus', 
        unit: '100pc bundle', 
        price: 129, 
        inStock: true,
        stockLevel: 400
      },
      { 
        size: 'Cedar', 
        unit: '100pc bundle', 
        price: 149, 
        inStock: true,
        stockLevel: 350
      },
      { 
        size: 'Sage with Rose Petals', 
        unit: '100pc bundle', 
        price: 179, 
        inStock: true,
        stockLevel: 250
      },
      { 
        size: 'Sage with Flowers', 
        unit: '100pc bundle', 
        price: 199, 
        inStock: true,
        stockLevel: 200
      }
    ],
    minOrder: 1
  }
];