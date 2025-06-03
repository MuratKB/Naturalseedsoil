import { initializeStockData } from './initStock';

// Initialize stock data
initializeStockData()
  .then(() => console.log('Stock initialization complete'))
  .catch(error => console.error('Error initializing stock:', error));