import { db } from './firebase';
import { doc, updateDoc } from 'firebase/firestore';

export async function updateStock(productId: string, newStockLevel: number) {
  try {
    const stockRef = doc(db, 'product_stock', productId);
    await updateDoc(stockRef, {
      stock_level: newStockLevel,
      updated_at: new Date()
    });
    console.log(`Stock updated for ${productId}: ${newStockLevel}`);
  } catch (error) {
    console.error('Error updating stock:', error);
    throw error;
  }
}