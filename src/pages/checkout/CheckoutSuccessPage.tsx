import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const CheckoutSuccessPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Payment Successful | Natural Essence Wholesale';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Payment Successful
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for your purchase. We'll process your order shortly.
        </p>
        <div className="mt-6">
          <Link
            to="/products"
            className="btn-primary inline-flex items-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;