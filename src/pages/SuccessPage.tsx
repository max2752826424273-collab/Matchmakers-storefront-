import React from 'react';
import { CheckCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SuccessPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-teal/10 rounded-full mb-8">
        <CheckCircle size={40} className="text-secondary-teal" />
      </div>
      <h1 className="text-4xl font-heading font-bold text-primary-charcoal mb-4">Payment Successful!</h1>
      <p className="text-gray-500 mb-10 max-w-md mx-auto">
        Thank you for your purchase. Your matching sets are being prepared for shipment. You will receive a confirmation email shortly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/category/all" 
          className="bg-primary-coral text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center transition-all hover:bg-opacity-90"
        >
          Keep Shopping
          <ArrowRight className="ml-2" size={20} />
        </Link>
        <Link 
          to="/" 
          className="bg-gray-100 text-primary-charcoal px-10 py-4 rounded-full font-bold text-lg inline-flex items-center transition-all hover:bg-gray-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};
