import { Feature, OrderStep, Testimonial } from '../types';

export const companyInfo = {
  name: 'Natural Essence Wholesale',
  tagline: 'Premium Artisan Oils & Soaps for International B2B',
  description: 'Supplying premium natural oils, traditional soaps, and herbal products to businesses worldwide. Direct from artisan producers to your brand.',
  yearEstablished: 2012,
  email: 'info@naturalessencewholesale.com',
  phone: '+90 (242) 123 4567',
  address: 'Antalya Organized Industrial Zone, 07190 Antalya, Turkey',
};

export const heroContent = {
  heading: 'Premium Natural Oils & Soaps Wholesale',
  subheading: 'Direct from artisan producers to your brand',
  description: 'Supplying premium quality essential oils, carrier oils, traditional soaps, and herbal products to businesses worldwide. Bulk quantities, private labeling, and international shipping available.',
  cta: 'Request a Quote',
  secondaryCta: 'Explore Products',
  backgroundImage: 'https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg',
};

export const features: Feature[] = [
  {
    icon: 'Factory',
    title: 'Artisan-Crafted Quality',
    description: 'All products are made by experienced artisans using traditional methods combined with modern quality standards.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Best Price Guarantee',
    description: 'Direct from producer pricing means competitive rates for premium quality with no middlemen markups.'
  },
  {
    icon: 'PackageCheck',
    title: 'Private Label & OEM',
    description: 'Custom formulations, packaging, and branding solutions for your unique product line.'
  },
  {
    icon: 'ClipboardCheck',
    title: 'Lab-Tested Quality',
    description: 'Every batch is tested for purity, potency, and consistency with certificates provided.'
  },
  {
    icon: 'Ship',
    title: 'Global Export Experts',
    description: 'Seamless worldwide shipping with all necessary export documentation and customs support.'
  },
  {
    icon: 'Calendar',
    title: 'Reliable Lead Times',
    description: 'Consistent production schedules and expedited shipping options for time-sensitive orders.'
  }
];

export const orderSteps: OrderStep[] = [
  {
    number: 1,
    title: 'Request a Quote',
    description: 'Fill out our simple quote request form with your product needs, quantities, and shipping destination.',
    icon: 'FileText'
  },
  {
    number: 2,
    title: 'Receive Sample',
    description: 'Upon quote approval, request product samples to verify quality before committing to bulk orders.',
    icon: 'Package'
  },
  {
    number: 3,
    title: 'Approve & Pay',
    description: 'Confirm your order and complete payment securely through Stripe or bank transfer.',
    icon: 'CreditCard'
  },
  {
    number: 4,
    title: 'Production & Shipping',
    description: 'Your order goes into production and ships directly to your facility with tracking information provided.',
    icon: 'Truck'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial1',
    name: 'Sarah Johnson',
    company: 'Botanical Bliss',
    country: 'United States',
    content: 'We\'ve been sourcing our essential oils from Natural Essence for three years now. The quality is consistently excellent, and their bulk pricing has allowed us to maintain healthy margins on our finished products.',
  },
  {
    id: 'testimonial2',
    name: 'Marco Rossi',
    company: 'Eco Sapone',
    country: 'Italy',
    content: 'Their Aleppo soap base has become the cornerstone of our premium natural soap line. The private labeling service made launching our brand incredibly simple, and our customers love the quality.',
  },
  {
    id: 'testimonial3',
    name: 'Emma Laurent',
    company: 'Herbal Wellness Co.',
    country: 'France',
    content: 'The consistency and documentation provided with each shipment makes regulatory compliance straightforward. Their black seed oil is simply the best we\'ve found anywhere on the market.',
  }
];

export const faqGeneral = [
  {
    question: 'What is the minimum order quantity?',
    answer: 'Minimum order quantities vary by product: 5L for oils, 100 pieces for soaps, and 100 pieces for smudge sticks. Volume discounts are available for larger orders.'
  },
  {
    question: 'Do you ship worldwide?',
    answer: 'Yes, we ship to over 80 countries worldwide. We handle all export documentation and can advise on import requirements for your specific country.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept secure payments through Stripe, wire transfers, and letter of credit for larger orders. A 50% deposit is required to begin production, with the balance due before shipping.'
  },
  {
    question: 'What are the lead times for orders?',
    answer: 'Standard lead time is 2-3 weeks for oils and 3-4 weeks for soaps after payment confirmation. Express production is available for certain products at an additional cost.'
  },
  {
    question: 'Do you offer private labeling?',
    answer: 'Yes, we provide comprehensive private label services including custom formulations, packaging, labeling, and branding. Minimum quantities apply for private label orders.'
  },
  {
    question: 'Are your products certified organic?',
    answer: 'We offer both conventional and certified organic options for most products. Our organic lines carry USDA Organic, EU Organic, and COSMOS certifications as applicable.'
  },
  {
    question: 'Can I request product samples?',
    answer: 'Yes, we provide samples for quality assessment before bulk orders. Sample costs are typically credited toward your first order.'
  },
  {
    question: 'What documentation do you provide with orders?',
    answer: 'Each shipment includes Certificates of Analysis, Material Safety Data Sheets, Certificate of Origin, and all required export documentation.'
  }
];