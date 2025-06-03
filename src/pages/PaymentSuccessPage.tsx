import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccessPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Payment Successful | Natural Essence Wholesale';
  }, []);

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4 font-display">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your payment has been received successfully. Thank you for your purchase! 
            Shipping information or order preparation details will be sent to your email within 48 hours.
          </p>

          <div className="space-y-4">
            <Link 
              to="/shop" 
              className="btn-primary inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;