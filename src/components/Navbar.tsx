import React from 'react';
import { ShoppingBag, Heart, User, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <button className="sm:hidden p-2 text-primary-charcoal">
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-coral rounded-lg flex items-center justify-center">
                <Heart className="text-white fill-current" size={24} />
              </div>
              <span className="text-2xl font-heading font-bold text-primary-charcoal hidden sm:block">
                MatchMakers
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex space-x-8">
            <Link to="/category/kids" className="text-sm font-medium hover:text-primary-coral transition-colors">Kids & Youth</Link>
            <Link to="/category/loungewear" className="text-sm font-medium hover:text-primary-coral transition-colors">Loungewear</Link>
            <Link to="/category/accessories" className="text-sm font-medium hover:text-primary-coral transition-colors">Accessories</Link>
            <Link to="/category/gifts" className="text-sm font-medium hover:text-primary-coral transition-colors">Gifts</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-primary-charcoal hover:text-primary-coral transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-primary-charcoal hover:text-primary-coral transition-colors">
              <User size={20} />
            </button>
            <Link to="/cart" className="p-2 text-primary-charcoal hover:text-primary-coral transition-colors relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary-coral text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
