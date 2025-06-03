import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { shopProducts } from '../data/shopProducts';

export async function initializeStockData() {
  try {
    for (const product of shopProducts) {
      for (const size of product.sizes) {
        const stockId = `${product.id}_${size.size}${size.unit}`;
        await setDoc(doc(db, 'product_stock', stockId), {
          product_id: product.id,
          size: size.size,
          unit: size.unit,
          stock_level: size.stockLevel,
          updated_at: new Date()
        });
      }
    }
    console.log('Stock data initialized successfully');
  } catch (error) {
    console.error('Error initializing stock:', error);
    throw error;
  }
}