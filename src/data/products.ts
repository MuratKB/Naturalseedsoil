import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'black-seed-oil',
    name: 'Black Seed Oil',
    shortDescription: 'Premium cold-pressed Nigella sativa oil with high thymoquinone content.',
    description: 'Our Black Seed Oil is cold-pressed from premium Nigella sativa seeds under controlled temperatures to preserve all bioactive compounds, particularly thymoquinone. This potent oil is renowned for its health benefits and is available in both food-grade and cosmetic-grade options. Ideal for natural supplements, health products, and premium skincare formulations, our Black Seed Oil meets the highest industry standards for purity and potency.',
    category: 'carrier-oils',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748709884/BSO_ncm4dp.jpg',
    bulkOptions: [
      { size: '5', unit: 'L' },
      { size: '10', unit: 'L' },
      { size: '20', unit: 'L' },
      { size: '30', unit: 'L' },
      { size: '100', unit: 'L' }
    ],
    features: [
      'Cold-pressed to preserve bioactive compounds',
      'High thymoquinone content (2.2-2.4%)',
      'Available in food-grade and cosmetic-grade',
      'Lab-tested for purity and potency',
      'Bulk quantities available',
      'International shipping'
    ],
    faq: [
      {
        question: 'What is the thymoquinone percentage?',
        answer: 'Our standard Black Seed Oil contains 2.2-2.4% thymoquinone. Premium grade with 3% thymoquinone available for specialized applications.'
      },
      {
        question: 'Do you provide lab reports?',
        answer: 'Yes, each batch comes with a Certificate of Analysis (COA) showing thymoquinone content and purity parameters.'
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Minimum order is 5L for standard orders. Custom quantities available for bulk orders.'
      },
      {
        question: 'How is it packaged?',
        answer: 'Shipped in food-grade HDPE drums or IBC containers based on quantity. Custom packaging available.'
      }
    ]
  },
  {
    id: 'laurel-berry-oil',
    name: 'Laurel Berry Oil',
    shortDescription: 'Traditional laurel berry oil from wild-harvested laurel berries.',
    description: 'Our authentic Laurel Berry Oil is produced from wild-harvested laurel berries using traditional methods to preserve all beneficial compounds. This deep yellow/black oil is rich in fatty acids and antioxidants, making it the premium choice for natural skincare products, traditional remedies, and authentic Aleppo soap production. Each batch is carefully filtered while maintaining its natural potency.',
    category: 'carrier-oils',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765023/LBO_nkpvrn.jpg',
    bulkOptions: [
      { size: '5', unit: 'L' },
      { size: '10', unit: 'L' },
      { size: '20', unit: 'L' },
      { size: '30', unit: 'L' },
      { size: '100', unit: 'L' }
    ],
    features: [
      'Traditional extraction method',
      'Wild-harvested berries',
      'No refinement process',
      'Rich in beneficial compounds',
      'Perfect for Aleppo soap',
      'Bulk quantities available'
    ],
    faq: [
      {
        question: 'What makes your laurel berry oil special?',
        answer: 'Our laurel berry oil is produced using traditional methods from wild-harvested berries, ensuring maximum retention of beneficial compounds.'
      },
      {
        question: 'Is this oil suitable for soap making?',
        answer: 'Yes, our laurel berry oil is perfect for traditional Aleppo soap production, available in various grades.'
      },
      {
        question: 'Do you offer samples?',
        answer: 'Yes, we provide 100ml samples for quality assessment. Shipping costs apply.'
      },
      {
        question: 'What is the minimum order?',
        answer: 'Minimum order is 5L. Bulk orders of 100L+ receive preferential pricing.'
      }
    ]
  },
  {
    id: 'aleppo-soap',
    name: 'Aleppo Soap',
    shortDescription: 'Traditional handcrafted soap made with olive oil and laurel berry oil.',
    description: 'Our Aleppo Soap is crafted following centuries-old traditions, combining olive oil with authentic laurel berry oil. Each bar is hand-cut and stamped, then aged for 12-18 months to develop its characteristic hardness and mild aroma. Available in various laurel oil concentrations from 20% to 40%, our soaps cater to different skin types and market segments.',
    category: 'soaps',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765448/Alepposoap_ugwisi.jpg',
    bulkOptions: [
      { size: '100', unit: 'pcs' },
      { size: '300', unit: 'pcs' },
      { size: '500', unit: 'pcs' },
      { size: '1000', unit: 'pcs' }
    ],
    features: [
      'Traditional handmade process',
      '20-40% laurel oil content',
      'Aged 12-18 months',
      'No artificial additives',
      'Custom stamps available',
      'Bulk quantities'
    ],
    faq: [
      {
        question: 'What laurel oil percentages do you offer?',
        answer: 'We offer 20%, 30%, and 40% laurel oil content. Custom formulations available for bulk orders.'
      },
      {
        question: 'How long is the soap aged?',
        answer: 'Our soaps are aged for 12-18 months to achieve optimal hardness and mildness.'
      },
      {
        question: 'Can you create custom shapes?',
        answer: 'Yes, we offer custom shapes, sizes, and stamps for orders over 5000 pieces.'
      },
      {
        question: 'What is the minimum order?',
        answer: 'Minimum order is 100 pieces. Volume discounts start at 1000 pieces.'
      }
    ]
  },
  {
    id: 'white-sage-smudge',
    name: 'White Sage Smudge',
    shortDescription: 'Premium hand-tied white sage bundles for cleansing and aromatherapy.',
    description: 'Our White Sage Smudge Sticks are carefully hand-harvested and tied using sustainable practices. Each bundle contains mature white sage leaves known for their aromatic properties and traditional use in cleansing rituals. Available in various sizes and combinations with other herbs like lavender or cedar.',
    category: 'sage',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765310/whitesage_ldctpt.jpg',
    bulkOptions: [
      { size: '100', unit: 'pcs' },
      { size: '300', unit: 'pcs' },
      { size: '500', unit: 'pcs' }
    ],
    features: [
      'Sustainably harvested',
      'Hand-tied bundles',
      'Premium quality leaves',
      'Various sizes available',
      'Mixed herb options',
      'Bulk quantities'
    ],
    faq: [
      {
        question: 'Are your sage products sustainably harvested?',
        answer: 'Yes, we follow sustainable harvesting practices, never taking more than 30% from any plant.'
      },
      {
        question: 'What sizes are available?',
        answer: 'We offer 4", 6", and 8" bundles. Custom sizes available for bulk orders.'
      },
      {
        question: 'Do you offer mixed herb bundles?',
        answer: 'Yes, we offer combinations with lavender, cedar, and other herbs.'
      },
      {
        question: 'What is the minimum order?',
        answer: 'Minimum order is 100 pieces. Bulk discounts start at 500 pieces.'
      }
    ]
  }
];

export const getProductByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getAllCategories = (): {id: Product['category'], name: string}[] => {
  return [
    { id: 'carrier-oils', name: 'Carrier Oils' },
    { id: 'sage', name: 'Sage & Smudge Sticks' },
    { id: 'soaps', name: 'Natural Soaps' },
    { id: 'essential-oils', name: 'Essential Oils' }
  ];
};