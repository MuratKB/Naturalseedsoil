import { db } from './firebase';
import { doc, getDoc, updateDoc, runTransaction } from 'firebase/firestore';

export async function updateProductStock(
  productId: string,
  size: string,
  quantity: number
): Promise<void> {
  try {
    const stockRef = doc(db, 'product_stock', `${productId}_${size}`);

    await runTransaction(db, async (transaction) => {
      const stockDoc = await transaction.get(stockRef);
      
      if (!stockDoc.exists()) {
        throw new Error('Stock document does not exist');
      }

      const currentStock = stockDoc.data().stock_level;
      const newStockLevel = currentStock - quantity;

      if (newStockLevel < 0) {
        throw new Error('Insufficient stock');
      }

      transaction.update(stockRef, { 
        stock_level: newStockLevel,
        updated_at: new Date()
      });
    });

    // Update local state if needed
    window.dispatchEvent(new CustomEvent('stockUpdate', {
      detail: { productId, size, newStockLevel: quantity }
    }));
  } catch (error) {
    console.error('Error updating stock:', error);
    throw error;
  }
}

export async function getProductStock(
  productId: string,
  size: string
): Promise<number> {
  try {
    const stockRef = doc(db, 'product_stock', `${productId}_${size}`);
    const stockDoc = await getDoc(stockRef);

    if (!stockDoc.exists()) {
      return 0;
    }

    return stockDoc.data().stock_level;
  } catch (error) {
    console.error('Error getting stock:', error);
    throw error;
  }
}