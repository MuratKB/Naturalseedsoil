import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'lavender-smudge',
    name: 'Lavender Smudge',
    shortDescription: 'Carefully crafted lavender smudge sticks for soothing energy and calming aromatherapy.',
    description: 'Our Lavender Smudge Sticks are expertly hand-crafted using premium lavender blossoms, carefully harvested at peak potency. Each bundle is meticulously wrapped to ensure optimal burning and long-lasting aromatic properties. Perfect for aromatherapy, meditation practices, and creating calming environments. Available in various sizes and bulk quantities for retail and wholesale customers.',
    category: 'sage',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1749048282/Lavanta101_bptne6.jpg',
    bulkOptions: [
      { size: '100', unit: 'pcs' },
      { size: '300', unit: 'pcs' },
      { size: '500', unit: 'pcs' }
    ],
    features: [
      'Responsibly sourced lavender blossoms',
      'Expertly hand-wrapped bundles',
      'High-quality, fragrant lavender',
      'Perfect for aromatherapy',
      'Consistent burning quality',
      'Bulk quantities available'
    ],
    faq: [
      {
        question: 'How are your lavender smudge sticks made?',
        answer: 'Each bundle is carefully hand-wrapped using premium lavender blossoms harvested at peak potency for optimal aromatherapy benefits.'
      },
      {
        question: 'What sizes are available?',
        answer: 'Our standard size is 6 inches (15cm). Custom sizes available for bulk orders.'
      },
      {
        question: 'Do you offer mixed bundles?',
        answer: 'Yes, we can combine lavender with white sage, cedar, or other herbs for custom orders.'
      },
      {
        question: 'What is the minimum order?',
        answer: 'Minimum order is 100 pieces. Volume discounts start at 300 pieces.'
      }
    ]
  },
  {
    id: 'lavender-essential-oil',
    name: 'Lavender Essential Oil',
    shortDescription: 'Premium Lavandula angustifolia essential oil with high linalool content.',
    description: 'Our Lavender Essential Oil is steam-distilled from carefully selected Lavandula angustifolia flowers grown in our own fields. Known for its calming and soothing properties, this premium oil features a high linalool content and characteristic sweet, floral aroma. Perfect for aromatherapy, natural perfumery, and skincare formulations.',
    category: 'essential-oils',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748956919/LAV101_mn1jq4.jpg',
    bulkOptions: [
      { size: '1', unit: 'L' },
      { size: '5', unit: 'L' },
      { size: '10', unit: 'L' },
      { size: '25', unit: 'L' }
    ],
    features: [
      'Steam-distilled from Lavandula angustifolia',
      'High linalool content',
      'Sweet, floral aroma',
      'Perfect for aromatherapy',
      'Ideal for skincare formulations',
      'Available in bulk quantities'
    ],
    faq: [
      {
        question: 'What is the linalool content?',
        answer: 'Our lavender essential oil contains 35-45% linalool, which is optimal for therapeutic applications.'
      },
      {
        question: 'Is it food grade?',
        answer: 'Yes, our lavender essential oil is food-grade and comes with appropriate certification.'
      },
      {
        question: 'What is the minimum order?',
        answer: 'Minimum order is 1L. Bulk discounts start at 5L.'
      }
    ]
  },
  {
    id: 'oregano-essential-oil',
    name: 'Oregano Essential Oil',
    shortDescription: 'High carvacrol content oregano oil, steam-distilled from wild oregano.',
    description: 'Our Oregano Essential Oil is steam-distilled from wild-harvested Origanum vulgare, featuring a high carvacrol content. This potent oil is known for its strong antimicrobial properties and characteristic spicy, herbaceous aroma. Ideal for natural health products and therapeutic applications.',
    category: 'essential-oils',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1749047123/Oregano_seock6.jpg',
    bulkOptions: [
      { size: '1', unit: 'L' },
      { size: '5', unit: 'L' },
      { size: '10', unit: 'L' },
      { size: '25', unit: 'L' }
    ],
    features: [
      'Steam-distilled from wild oregano',
      'High carvacrol content (70-75%)',
      'Strong, spicy aroma',
      'Potent antimicrobial properties',
      'Lab-tested for purity',
      'Bulk quantities available'
    ],
    faq: [
      {
        question: 'What is the carvacrol percentage?',
        answer: 'Our oregano essential oil contains 70-75% carvacrol, verified by GC-MS analysis.'
      },
      {
        question: 'Is it organic certified?',
        answer: 'Yes, our oregano is wild-harvested and certified organic.'
      },
      {
        question: 'What is the minimum order?',
        answer: 'Minimum order is 1L. Bulk discounts available for orders over 5L.'
      }
    ]
  },
  {
    id: 'bay-leaf-essential-oil',
    name: 'Bay Leaf Essential Oil',
    shortDescription: 'Premium Laurus nobilis essential oil with high eucalyptol content.',
    description: 'Our Bay Leaf Essential Oil is steam-distilled from fresh bay leaves harvested from mature trees grown in optimal climate conditions. This premium oil offers a rich, spicy aroma with subtle eucalyptus notes and is widely used in professional aromatherapy, luxury skincare formulations, and natural perfumery. Each batch is lab-tested for purity and potency.',
    category: 'essential-oils',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765539/bay_leaf_tlkctk.jpg',
    bulkOptions: [
      { size: '1', unit: 'L' },
      { size: '5', unit: 'L' },
      { size: '10', unit: 'L' },
      { size: '25', unit: 'L' }
    ],
    features: [
      'Steam-distilled from fresh leaves',
      'High eucalyptol content',
      'Rich, spicy aroma',
      'Perfect for aromatherapy',
      'Lab-tested for purity',
      'Bulk quantities available'
    ],
    faq: [
      {
        question: 'What is the eucalyptol content?',
        answer: 'Our bay leaf essential oil contains 30-35% eucalyptol (1,8-cineole).'
      },
      {
        question: 'Do you provide test reports?',
        answer: 'Yes, each batch comes with GC-MS analysis and Certificate of Analysis.'
      },
      {
        question: 'What is the minimum order?',
        answer: 'Minimum order is 1L. Volume discounts start at 5L.'
      }
    ]
  },
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