import React, { useState } from 'react';
import { Flame, Sparkles, Filter } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES } from '../../data/mockProducts';
import { ProductCard } from '../product/ProductCard';

export const FeaturedDrop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? MOCK_PRODUCTS
    : MOCK_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="featured" className="py-16 sm:py-24 bg-drip-gray-surface border-t border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-drip-orange text-xs font-black uppercase tracking-wider mb-2">
              <Flame size={16} fill="currentColor" />
              <span>LOOTPAAT SALE DROPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-drip-charcoal">
              TRENDING <span className="text-drip-orange">STREETWEAR DROPS</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold max-w-sm mt-2 md:mt-0">
            Limited quantity releases. Money comes back, but these drops go out of stock fast.
          </p>
        </div>

        {/* Category Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap border ${
                selectedCategory === cat.id
                  ? 'bg-drip-orange text-white border-drip-orange shadow-drip-sm scale-105'
                  : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange hover:text-drip-orange'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
