import { supabase } from './supabase';

export async function updateProductStock(
  productId: string,
  size: string,
  quantity: number
): Promise<void> {
  try {
    const { data: currentStock, error: fetchError } = await supabase
      .from('product_stock')
      .select('stock_level')
      .eq('product_id', productId)
      .eq('size', size)
      .single();

    if (fetchError) throw fetchError;

    const newStockLevel = currentStock.stock_level - quantity;

    const { error: updateError } = await supabase
      .from('product_stock')
      .update({ stock_level: newStockLevel })
      .eq('product_id', productId)
      .eq('size', size);

    if (updateError) throw updateError;

    // Update local state if needed
    // This could dispatch an event or update a store
    window.dispatchEvent(new CustomEvent('stockUpdate', {
      detail: { productId, size, newStockLevel }
    }));
  } catch (error) {
    console.error('Error updating stock:', error);
    throw error;
  }
}