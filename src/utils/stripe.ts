import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const createCheckoutSession = async (
  productId: string,
  size: string,
  quantity: number,
  formData: any
) => {
  try {
    const response = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        size,
        quantity,
        customerInfo: formData
      }),
    });

    const session = await response.json();
    
    if (session.error) {
      throw new Error(session.error);
    }

    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};