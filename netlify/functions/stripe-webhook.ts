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
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

const sendOrderConfirmationEmail = async (session: Stripe.Checkout.Session) => {
  const { metadata, customer_details, amount_total } = session;
  
  if (!metadata || !customer_details) {
    throw new Error('Missing session metadata or customer details');
  }

  const orderDetailsHtml = `
    <h2 style="color: #5d7a4e;">Order Confirmation</h2>
    <p>Thank you for your order with Natural Essence Wholesale.</p>
    
    <h3 style="color: #5d7a4e;">Order Details</h3>
    <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Product:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${metadata.productId}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Size/Variant:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${metadata.size}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Quantity:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${metadata.quantity}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Amount:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formatCurrency(amount_total ? amount_total / 100 : parseFloat(metadata.totalAmount))}</td>
      </tr>
    </table>

    <h3 style="color: #5d7a4e;">Shipping Information</h3>
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${metadata.customerName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Company:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${metadata.customerCompany}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Address:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          ${customer_details.address?.line1}<br>
          ${customer_details.address?.line2 ? customer_details.address.line2 + '<br>' : ''}
          ${customer_details.address?.city}, ${customer_details.address?.state} ${customer_details.address?.postal_code}<br>
          ${customer_details.address?.country}
        </td>
      </tr>
    </table>

    <p style="margin-top: 20px;">
      We will process your order within 24-48 hours. You will receive shipping information once your order is dispatched.
    </p>
  `;

  try {
    // Verify SMTP connection
    await transporter.verify();
    
    // Send confirmation to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: customer_details.email,
      subject: 'Order Confirmation - Natural Essence Wholesale',
      html: orderDetailsHtml
    });

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Order: ${metadata.productId} - ${metadata.size}`,
      html: orderDetailsHtml
    });

    console.log('Order confirmation emails sent successfully');
  } catch (error) {
    console.error('Failed to send order confirmation emails:', error);
    throw error;
  }
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
      
      // Send order confirmation emails
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