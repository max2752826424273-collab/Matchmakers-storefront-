import React from 'react';
import { ArrowRight, Heart, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516589174184-c68526614486?auto=format&fit=crop&q=80&w=2000" 
            alt="Couple laughing" 
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Coordinated Style for <span className="text-primary-coral">Every Bond.</span>
            </h1>
            <p className="text-xl mb-10 text-gray-100 leading-relaxed">
              From first dates to forever families, MatchMakers brings you curated matching apparel and keepsakes that celebrate your partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/category/all" 
                className="bg-primary-coral hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all group"
              >
                Shop the Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white hover:bg-gray-100 text-primary-charcoal px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Shop by Category</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Discover the perfect match for your relationship stage.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Kids & Youth', path: '/category/kids', img: 'https://images.unsplash.com/photo-1543330323-43f3e763c1ed?auto=format&fit=crop&q=80&w=800', color: 'bg-accent-yellow' },
            { name: 'Loungewear', path: '/category/loungewear', img: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80&w=800', color: 'bg-primary-coral' },
            { name: 'Accessories', path: '/category/accessories', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800', color: 'bg-secondary-teal' },
            { name: 'Gifts', path: '/category/gifts', img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800', color: 'bg-primary-charcoal' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-heading font-bold mb-2">{cat.name}</h3>
                  <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2">New Arrivals</h2>
              <p className="text-gray-500">Hand-picked coordination for you and yours.</p>
            </div>
            <Link to="/category/all" className="text-primary-coral font-bold flex items-center hover:underline">
              View All <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:text-primary-coral transition-colors">
                    <Heart size={18} />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <p className="text-xs font-bold text-primary-coral uppercase tracking-wider mb-1">Bundle & Save</p>
                    <p className="text-sm font-bold text-primary-charcoal">Pair: ${product.pairPrice}</p>
                  </div>
                </div>
                <h3 className="font-bold text-primary-charcoal group-hover:text-primary-coral transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="font-bold">${product.price} <span className="text-xs text-gray-400 font-normal ml-1">each</span></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-primary-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1200" 
                  alt="Couple holding hands" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-coral rounded-3xl -z-10 hidden sm:block"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Celebrating Partnership at <span className="text-primary-coral">Every Stage.</span></h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  MatchMakers was born from a simple belief: that shared style is a powerful way to express connection. Whether you're best friends in the playground, young sweethearts on a first date, or partners celebrating a golden anniversary.
                </p>
                <p>
                  We curate the highest quality matching sets, coordinating accessories, and meaningful keepsakes that tell your unique story. Our "coordinated, not identical" philosophy ensures you look as good as you feel together.
                </p>
                <div className="pt-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-primary-coral text-3xl font-bold mb-1">10k+</p>
                      <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Happy Couples</p>
                    </div>
                    <div>
                      <p className="text-primary-coral text-3xl font-bold mb-1">500+</p>
                      <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Curated Items</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: <Sparkles className="text-primary-coral" size={32} />, title: 'Curated Quality', desc: 'Each item is hand-selected for comfort, style, and durability.' },
          { icon: <Truck className="text-secondary-teal" size={32} />, title: 'Fast Delivery', desc: 'Free express shipping on all bundle orders over $75.' },
          { icon: <ShieldCheck className="text-primary-charcoal" size={32} />, title: 'Hassle-Free Returns', desc: 'Not the perfect fit? Exchange any item within 30 days.' },
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
