import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function initializeStockData() {
  const initialStock = [
    { id: 'black_seed_oil_250ml', stock_level: 300 },
    { id: 'laurel_berry_oil_1l', stock_level: 100 },
    { id: 'aleppo_soap_100g', stock_level: 1500 },
    { id: 'white_sage_6inch', stock_level: 400 }
  ];

  try {
    for (const item of initialStock) {
      await setDoc(doc(db, 'product_stock', item.id), {
        stock_level: item.stock_level,
        updated_at: new Date()
      });
    }
    console.log('Stock data initialized successfully');
  } catch (error) {
    console.error('Error initializing stock:', error);
    throw error;
  }
}