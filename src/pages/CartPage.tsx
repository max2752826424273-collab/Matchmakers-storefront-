import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, ShoppingBag, Heart, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, cartTotal } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });

      const session = await response.json();
      const stripe = await stripePromise;
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (error) console.error(error);
      }
    } catch (err) {
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-8">
          <ShoppingBag size={32} className="text-gray-400" />
        </div>
        <h1 className="text-4xl font-heading font-bold text-primary-charcoal mb-4">Your bag is empty</h1>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">
          Looks like you haven't added any matches yet. Start shopping and find your perfect pair!
        </p>
        <Link 
          to="/category/all" 
          className="bg-primary-coral text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center transition-all hover:bg-opacity-90"
        >
          Explore Collections
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-heading font-bold text-primary-charcoal mb-12">Your Bag</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary-charcoal">{item.name}</h3>
                  <button 
                    onClick={() => removeFromCart(index)}
                    className="text-gray-400 hover:text-primary-coral p-1 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-gray-500 font-medium">
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mr-2"></span>
                    {item.isBundle ? 'Pair Bundle' : 'Single Item'}
                  </span>
                  <span>Size: {item.selectedSize}</span>
                  <span>Color: {item.selectedColor}</span>
                  <span>Qty: {item.quantity}</span>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="text-sm font-bold text-secondary-teal">
                    {item.isBundle && `Includes 2 items at bundle price`}
                  </div>
                  <div className="text-xl font-bold text-primary-charcoal">
                    ${(item.isBundle ? item.pairPrice : item.price) * item.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl sticky top-24">
            <h2 className="text-2xl font-heading font-bold mb-8">Order Summary</h2>
            
            <div className="space-y-4 mb-8 text-gray-600 font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-primary-charcoal font-bold">${cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-secondary-teal font-bold uppercase text-xs tracking-widest">Calculated at next step</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="text-primary-charcoal font-bold">$0.00</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6 mb-10">
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold text-primary-charcoal">Total</span>
                <span className="text-3xl font-bold text-primary-coral">${cartTotal}</span>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-primary-charcoal text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg mb-4 flex items-center justify-center disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={20} />
                  Processing...
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>
            <p className="text-center text-xs text-gray-400 px-4">
              Free returns and exchanges within 30 days. Secure encrypted checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
