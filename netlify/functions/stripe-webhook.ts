import { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!);

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const sig = event.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body!,
      sig!,
      endpointSecret
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Webhook signature verification failed' }),
    };
  }

  try {
    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object as Stripe.Checkout.Session;
      
      // Extract product information from metadata
      const { productId, size, quantity } = session.metadata!;
      
      // Update stock in Firestore
      const stockRef = db.collection('product_stock').doc(`${productId}_${size}`);
      
      await db.runTransaction(async (transaction) => {
        const stockDoc = await transaction.get(stockRef);
        
        if (!stockDoc.exists) {
          throw new Error('Stock document does not exist');
        }

        const currentStock = stockDoc.data()!.stock_level;
        const newStockLevel = currentStock - parseInt(quantity);

        if (newStockLevel < 0) {
          throw new Error('Insufficient stock');
        }

        transaction.update(stockRef, {
          stock_level: newStockLevel,
          updated_at: new Date()
        });
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (error) {
    console.error('Error processing webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error processing webhook' }),
    };
  }
};

export { handler };