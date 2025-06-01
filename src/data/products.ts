import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'laurel-berry-oil',
    name: 'Laurel Berry Oil',
    shortDescription: 'Traditional laurel berry oil from wild-harvested laurel berries.',
    description: 'Our authentic Laurel Berry Oil is traditional from wild-harvested laurel berries using traditional methods to preserve all beneficial compounds. This deep yellow/black oil is rich in fatty acids and antioxidants, making it the premium choice for natural skincare products, traditional remedies, and the authentic production of Aleppo soap. Each batch is carefully filtered while maintaining its natural potency.',
    category: 'carrier-oils',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765023/LBO_nkpvrn.jpg',
    bulkOptions: [
      { size: '5', unit: 'L' },
      { size: '20', unit: 'L' },
      { size: '50', unit: 'L' },
      { size: '200', unit: 'L' }
    ],
    features: [
      'Traditional extraction method',
      'Wild-harvested berries from mature laurel trees',
      'No refinement, preserving all natural properties',
      'Rich in beneficial fatty acids and antioxidants',
      'Perfect base oil for premium natural cosmetics',
      'The authentic ingredient for traditional Aleppo soap'
    ],
    faq: [
      {
        question: 'What makes your laurel berry oil special?',
        answer: 'Our laurel berry oil is produced using traditional methods from wild-harvested berries, ensuring maximum retention of beneficial compounds and an authentic aroma profile.'
      },
      {
        question: 'Is this oil certified organic?',
        answer: 'Our laurel berries are wild-harvested from naturally growing trees without pesticides or fertilizers. We offer both standard and certified organic options.'
      },
      {
        question: 'What percentage of laurel berry oil is used in your Aleppo soap?',
        answer: 'We offer various grades, ranging from 20% to 40% laurel berry oil content for soap production. Custom formulations are available for private label clients.'
      },
      {
        question: 'Do you offer samples before bulk ordering?',
        answer: 'Yes, we provide 100ml samples for quality assessment before proceeding with bulk orders. Shipping costs are to be paid by the buyer'
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
      { size: '20', unit: 'L' },
      { size: '50', unit: 'L' },
      { size: '200', unit: 'L' }
    ],
    features: [
      'Cold-pressed to preserve bioactive compounds',
      'Available in food-grade and cosmetic-grade options',
      'High thymoquinone content verified by lab testing',
      'Sourced from premium quality Nigella sativa seeds',
      'Perfect for health supplements and skincare products',
      'Consistent quality across all batch sizes'
    ],
    faq: [
      {
        question: 'What is the thymoquinone percentage in your Black Seed Oil?',
        answer: 'Our standard Black Seed Oil contains 2- 2.4% thymoquinone. We also offer a premium grade with 3% thymoquinone content for specialized applications.'
      },
      {
        question: 'Is your Black Seed Oil suitable for dietary supplements?',
        answer: 'Yes, our food-grade Black Seed Oil is specifically produced for dietary supplements and comes with all necessary documentation for regulatory compliance.'
      },
      {
        question: 'Do you offer organic certified Black Seed Oil?',
        answer: 'Yes, we offer both conventional and certified organic options, with the latter carrying USDA Organic and EU Organic certifications.'
      },
      {
        question: 'What type of packaging is available for private label?',
        answer: 'We offer amber glass bottles ranging from 50ml to 250ml, as well as custom packaging solutions including branded labels and boxes.'
      }
    ]
  },
  {
    id: 'white-sage-smudge',
    name: 'White Sage Smudge Sticks',
    shortDescription: 'Premium hand-tied white sage bundles for cleansing and aromatherapy.',
    description: 'Our White Sage Smudge Sticks are carefully hand-harvested and tied using sustainable practices. Each bundle contains mature white sage leaves known for their aromatic properties and traditional use in cleansing rituals. Available in various sizes and combinations with other herbs like lavender, rosemary, or cedar, our smudge sticks are ideal for wellness shops, spiritual stores, and premium home goods retailers.',
    category: 'sage',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765310/whitesage_ldctpt.jpg',
    bulkOptions: [
      { size: '100', unit: 'pcs', minOrder: 100 },
      { size: '500', unit: 'pcs', minOrder: 50 },
      { size: '1000', unit: 'pcs', minOrder: 25 }
    ],
    features: [
      'Hand-harvested using sustainable practices',
      'Available in various sizes (4", 6")',
      'Single herb or mixed herb combinations',
      'Wrapped in natural cotton twine',
      'Properly dried for optimal burning experience',
      'Custom packaging available for retail-ready presentation'
    ],
    faq: [
      {
        question: 'Are your sage products sustainably harvested?',
        answer: 'Yes, we work with harvesters who follow sustainable practices, never harvesting more than 30% from any single plant and focusing on mature plants only.'
      },
      {
        question: 'What mixed herb combinations do you offer?',
        answer: 'We offer white sage with lavender, rosemary, cedar, palo santo, sweetgrass, eucalyptus, sage rose and various custom combinations based on client preferences.'
      },
      {
        question: 'Do you provide display materials for retailers?',
        answer: 'Yes, we offer complimentary counter displays with bulk orders of 500+ pieces, including informational cards explaining traditional uses.'
      },
      {
        question: 'How should the smudge sticks be stored?',
        answer: 'Our smudge sticks should be stored in a cool, dry place away from direct sunlight. They have a shelf life of approximately 2 years when properly stored.'
      }
    ]
  },
  {
    id: 'aleppo-soap',
    name: 'Aleppo Soap',
    shortDescription: 'Traditional handcrafted soap made with olive oil and laurel berry oil.',
    description: 'Our Aleppo Soap is crafted following centuries-old traditions, combining olive oil with authentic laurel berry oil. Each bar is hand-cut and stamped, then aged for 12-18 months to develop its characteristic hardness and mild aroma. Available in various laurel oil concentrations from 20% to 40%, our soaps cater to different skin types and market segments. Perfect for natural skincare brands, health stores, and premium bath product collections.',
    category: 'soaps',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765448/Alepposoap_ugwisi.jpg',
    bulkOptions: [
      { size: '50', unit: 'pcs', minOrder: 100 },
      { size: '100', unit: 'pcs', minOrder: 100 },
      { size: '500', unit: 'pcs', minOrder: 50 },
      { size: '1000', unit: 'pcs', minOrder: 20 }
    ],
    features: [
      'Traditional handmade production process',
      'Various laurel oil percentages (20%-40%)',
      'Naturally aged for 12-18 months',
      'No artificial additives, colorants, or fragrances',
      'Available in various shapes and weights',
      'Custom stamps and packaging available for private label'
    ],
    faq: [
      {
        question: 'What laurel oil percentages do you offer?',
        answer: 'We offer Aleppo soap with 20% and 40% laurel berry oil content. Higher percentages are suitable for specialized skincare concerns.'
      },
      {
        question: 'What is the curing time for your Aleppo soap?',
        answer: 'Our Aleppo soaps are aged for a minimum of 12 months, with premium grades aged for 18 months for optimal hardness and mildness.'
      },
      {
        question: 'Can you create custom shapes or sizes?',
        answer: 'Yes, we can produce custom shapes, sizes, and weights for private label clients with minimum orders of 5000 pieces.'
      },
      {
        question: 'Are your soaps certified organic?',
        answer: 'We offer both traditional and certified organic Aleppo soaps. Our organic line uses certified organic olive oil and laurel berry oil with appropriate certifications.'
      }
    ]
  },
  {
    id: 'bay-leaf-oil',
    name: 'Bay Leaf Essential Oil',
    shortDescription: 'Premium, pure Laurus nobilis oil for aromatherapy and skincare products.',
    description: 'Our Bay Leaf Essential Oil is steam-distilled from fresh bay leaves harvested from mature trees grown in optimal climate conditions. This premium oil offers a rich, spicy aroma with subtle eucalyptus notes and is widely used in professional aromatherapy, luxury skincare formulations, and natural perfumery. Each batch is lab-tested for purity and potency.',
    category: 'essential-oils',
    imageUrl: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748765539/bay_leaf_tlkctk.jpg',
    bulkOptions: [
      { size: '5', unit: 'L' },
      { size: '20', unit: 'L' },
      { size: '50', unit: 'L' },
      { size: '200', unit: 'L' }
    ],
    features: [
      'Artisan-distilled for maximum potency',
      '100% pure, no additives or dilutions',
      'Lab-tested for purity and consistency',
      'Available in food-grade quality',
      'Sustainable harvesting practices',
      'Custom private label packaging available'
    ],
    faq: [
      {
        question: 'What is the minimum order quantity?',
        answer: 'Our minimum order quantity for essential oils is 5 liters. For private label requests, minimum quantities start at 20 liters.'
      },
      {
        question: 'Do you provide lab analysis certificates?',
        answer: 'Yes, each batch comes with a full Certificate of Analysis (COA) that includes GC/MS results and all relevant quality parameters.'
      },
      {
        question: 'What is the shelf life?',
        answer: 'When stored properly in dark, cool conditions, our Bay Leaf Essential Oil maintains its quality for up to 3 years.'
      },
      {
        question: 'Can you ship to the United States?',
        answer: 'Yes, we ship worldwide including the United States, Canada, and all European countries with all necessary export documentation.'
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