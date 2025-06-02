import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { productId, size, quantity, customerInfo } = JSON.parse(event.body!);

    // Validate shipping country
    const allowedCountries = ['US', 'CA', 'GB', 'DE', 'FR', 'IT', 'AT', 'SE', 'CH', 'SG', 'TW', 'KR'];
    if (!allowedCountries.includes(customerInfo.country)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Shipping not available for this country. Please contact us for custom shipping arrangements.'
        }),
      };
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${productId} - ${size}`,
            },
            unit_amount: quantity * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL}/shop`,
      customer_email: customerInfo.email,
      shipping_address_collection: {
        allowed_countries: allowedCountries,
      },
      metadata: {
        productId,
        size,
        quantity,
        customerName: customerInfo.name,
        customerCompany: customerInfo.company,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error creating checkout session' }),
    };
  }
};

export { handler };