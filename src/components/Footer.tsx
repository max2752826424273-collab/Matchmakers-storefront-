import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="text-primary-coral fill-current" size={24} />
              <span className="text-2xl font-heading font-bold">MatchMakers</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Celebrating partnership at every stage of life. The one destination for coordinated connection.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-6 uppercase text-xs tracking-widest">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/category/kids" className="hover:text-white transition-colors">Kids & Youth</Link></li>
              <li><Link to="/category/loungewear" className="hover:text-white transition-colors">Loungewear & Sleepwear</Link></li>
              <li><Link to="/category/accessories" className="hover:text-white transition-colors">Accessories & Jewelry</Link></li>
              <li><Link to="/category/gifts" className="hover:text-white transition-colors">Gifts & Keepsakes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Information</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-primary-coral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-primary-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-primary-coral transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Join our newsletter for seasonal matching inspiration.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 MatchMakers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
