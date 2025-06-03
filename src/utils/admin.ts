import { db } from './firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

export async function updateStock(productId: string, size: string, unit: string, newStockLevel: number) {
  try {
    const stockId = `${productId}_${size}${unit}`;
    const stockRef = doc(db, 'product_stock', stockId);
    
    // Check if document exists
    const stockDoc = await getDoc(stockRef);
    if (!stockDoc.exists()) {
      throw new Error(`Stock document not found for ${stockId}`);
    }

    await updateDoc(stockRef, {
      stock_level: newStockLevel,
      updated_at: new Date()
    });
    
    console.log(`Stock updated for ${stockId}: ${newStockLevel}`);
    return true;
  } catch (error) {
    console.error('Error updating stock:', error);
    throw error;
  }
}

export async function getStock(productId: string, size: string, unit: string) {
  try {
    const stockId = `${productId}_${size}${unit}`;
    const stockRef = doc(db, 'product_stock', stockId);
    const stockDoc = await getDoc(stockRef);
    
    if (!stockDoc.exists()) {
      throw new Error(`Stock document not found for ${stockId}`);
    }

    return stockDoc.data();
  } catch (error) {
    console.error('Error getting stock:', error);
    throw error;
  }
}