import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Heart, ShoppingBag, Check, Info, ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useCart } from '../context/CartContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id) || products[0];
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isBundle, setIsBundle] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, isBundle, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary-coral mb-8 group">
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-inner">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:ring-2 hover:ring-primary-coral transition-all">
                <img src={product.images[0]} alt="" className="w-full h-full object-cover opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-primary-coral/10 text-primary-coral text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center text-accent-yellow">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <span className="text-gray-400 text-xs ml-2 font-medium">(48 reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl font-heading font-bold text-primary-charcoal mb-4">{product.name}</h1>
            <p className="text-gray-500 text-lg leading-relaxed">{product.description}</p>
          </div>

          {/* Pricing Model Selector */}
          <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setIsBundle(false)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all text-left",
                  !isBundle ? "bg-white border-primary-coral shadow-sm" : "bg-transparent border-gray-200 opacity-60 hover:opacity-100"
                )}
              >
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Single Item</p>
                <p className="text-2xl font-bold text-primary-charcoal">${product.price}</p>
              </button>
              <button 
                onClick={() => setIsBundle(true)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden",
                  isBundle ? "bg-white border-primary-coral shadow-sm" : "bg-transparent border-gray-200 opacity-60 hover:opacity-100"
                )}
              >
                <div className="absolute top-0 right-0 bg-primary-coral text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                  BEST VALUE
                </div>
                <p className="text-xs font-bold text-primary-coral uppercase tracking-widest mb-1">Couple Bundle</p>
                <p className="text-2xl font-bold text-primary-charcoal">${product.pairPrice}</p>
                <p className="text-[10px] text-secondary-teal font-bold">Save ${product.price * 2 - product.pairPrice} total</p>
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-8 mb-10">
            <div>
              <label className="block text-sm font-bold text-primary-charcoal uppercase tracking-widest mb-4">
                Select Size {isBundle && <span className="text-gray-400">(Both Items)</span>}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-12 h-12 rounded-lg border-2 flex items-center justify-center font-bold transition-all",
                      selectedSize === size ? "border-primary-charcoal bg-primary-charcoal text-white" : "border-gray-200 text-gray-500 hover:border-gray-300"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary-charcoal uppercase tracking-widest mb-4">
                Color
              </label>
              <div className="flex flex-wrap gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "group flex flex-col items-center gap-2"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full border-2 p-0.5 transition-all",
                      selectedColor === color ? "border-primary-charcoal" : "border-transparent"
                    )}>
                      <div className="w-full h-full rounded-full bg-gray-400" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{color}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <div className="flex items-center border-2 border-gray-100 rounded-2xl px-4 py-2">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-gray-400 hover:text-primary-charcoal"
              >
                <Minus size={20} />
              </button>
              <span className="w-12 text-center font-bold text-xl">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-gray-400 hover:text-primary-charcoal"
              >
                <Plus size={20} />
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className={cn(
                "flex-grow px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all shadow-lg active:scale-[0.98]",
                added ? "bg-secondary-teal text-white" : "bg-primary-charcoal hover:bg-black text-white"
              )}
            >
              {added ? (
                <>
                  <Check className="mr-3" size={20} />
                  Added to Bag!
                </>
              ) : (
                <>
                  <ShoppingBag className="mr-3" size={20} />
                  Add to Bag — ${isBundle ? product.pairPrice * quantity : product.price * quantity}
                </>
              )}
            </button>
            <button className="p-5 border-2 border-gray-200 rounded-2xl text-gray-400 hover:text-primary-coral hover:border-primary-coral transition-all">
              <Heart size={24} />
            </button>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="mt-1 bg-secondary-teal/10 p-1 rounded-full">
                  <Check className="text-secondary-teal" size={14} />
                </div>
                <span className="text-sm font-medium text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
