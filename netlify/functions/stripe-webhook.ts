import { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import nodemailer from 'nodemailer';

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

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendOrderConfirmationEmail = async (session: Stripe.Checkout.Session) => {
  const { metadata, customer_details } = session;
  
  // Send email to admin
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: 'sales@naturalseedoils.com',
    subject: 'New Order Received',
    html: `
      <h2>New Order Details</h2>
      <p><strong>Product:</strong> ${metadata!.productId}</p>
      <p><strong>Size:</strong> ${metadata!.size}</p>
      <p><strong>Quantity:</strong> ${metadata!.quantity}</p>
      <p><strong>Total Amount:</strong> $${metadata!.totalAmount}</p>
      <p><strong>Customer Name:</strong> ${metadata!.customerName}</p>
      <p><strong>Customer Company:</strong> ${metadata!.customerCompany}</p>
      <p><strong>Customer Email:</strong> ${customer_details?.email}</p>
    `,
  });
};

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
      
      // Send order confirmation email
      await sendOrderConfirmationEmail(session);
      
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