import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Heart, ArrowRight, SlidersHorizontal } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryNameMap: Record<string, string> = {
    'kids': 'Kids & Youth',
    'loungewear': 'Loungewear & Sleepwear',
    'accessories': 'Accessories & Jewelry',
    'gifts': 'Gifts & Keepsakes',
    'all': 'All Collections'
  };

  const currentCategoryName = categoryNameMap[category || 'all'];
  const filteredProducts = category === 'all' || !category 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-heading font-bold text-primary-charcoal mb-4">{currentCategoryName}</h1>
          <p className="text-gray-500 max-w-2xl">
            Coordinated connection for every relationship stage. Shop our curated selection of matching {currentCategoryName.toLowerCase()}.
          </p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-100 rounded-xl font-bold text-sm hover:border-primary-coral transition-all">
          <SlidersHorizontal size={18} />
          <span>Filter & Sort</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-6 shadow-sm">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <button className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-md hover:text-primary-coral transition-colors">
                <Heart size={18} />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-xl translate-y-2 group-hover:translate-y-0">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold text-primary-coral uppercase tracking-widest mb-1">Pair Bundle</p>
                    <p className="text-lg font-bold text-primary-charcoal">${product.pairPrice}</p>
                  </div>
                  <div className="bg-primary-charcoal text-white p-2 rounded-lg">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-primary-charcoal group-hover:text-primary-coral transition-colors mb-1">{product.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{product.category}</p>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-primary-charcoal">${product.price}</span>
              <span className="text-xs text-gray-400">each</span>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl">
          <p className="text-gray-500 mb-6">No products found in this category yet.</p>
          <Link to="/category/all" className="text-primary-coral font-bold underline">Shop all collections</Link>
        </div>
      )}
    </div>
  );
};
