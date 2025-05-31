export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const products: StripeProduct[] = [
  {
    id: 'prod_SPhYjwfMfF63Bl',
    priceId: 'price_1RUs99IZOcfZfc7QqZKKrnaW',
    name: '100 Sage Sticks - 6 Inches',
    description: 'Premium hand-tied white sage bundles for cleansing and aromatherapy.',
    mode: 'payment'
  },
  {
    id: 'prod_SPhXidHG0q3Aw5',
    priceId: 'price_1RUs8FIZOcfZfc7Q54e3MXBo',
    name: '30 Liters Laurel Berry Oil',
    description: 'Traditional laurel berry oil from wild-harvested laurel berries.',
    mode: 'payment'
  },
  {
    id: 'prod_SPhV95SxelWCH5',
    priceId: 'price_1RUs6cIZOcfZfc7Qj8YnzQ1B',
    name: '10 Liters Laurel Berry Oil',
    description: 'Traditional laurel berry oil from wild-harvested laurel berries.',
    mode: 'payment'
  },
  {
    id: 'prod_SPhNaqyycElJiz',
    priceId: 'price_1RUryqIZOcfZfc7QqjZwWrBg',
    name: '5 Liters Laurel Berry Oil',
    description: 'Traditional laurel berry oil from wild-harvested laurel berries.',
    mode: 'payment'
  }
];