export interface ProductSize {
  size: string;
  unit: string;
  price: number;
  inStock: boolean;
  stockLevel: number;
}

export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  sizes: ProductSize[];
  minOrder?: number;
}

export interface CheckoutFormData {
  name: string;
  email: string;
  company: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
}