export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  category: 'essential-oils' | 'carrier-oils' | 'soaps' | 'sage';
  imageUrl: string;
  bulkOptions: BulkOption[];
  features: string[];
  faq: FAQ[];
}

export interface BulkOption {
  size: string;
  unit: string;
  minOrder?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  content: string;
  imageUrl?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface OrderStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}