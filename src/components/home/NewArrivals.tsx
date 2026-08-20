import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { ProductCard } from '../product/ProductCard';
import { ProductQuickViewModal } from '../product/ProductQuickViewModal';
import { Product } from '../../types/product';

export const NewArrivals: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="new-arrivals" className="py-16 sm:py-24 bg-drip-gray-surface border-t border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-drip-orange text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles size={16} />
              <span>JUST RELEASED DROPS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-drip-charcoal">
              NEW <span className="text-drip-orange">ARRIVALS</span>
            </h2>
            <p className="text-sm font-semibold text-gray-500 mt-1 font-sans">
              Fresh fits. Just dropped.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="#new-arrivals"
              className="inline-flex items-center gap-2 bg-drip-charcoal text-white px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider hover:bg-drip-orange transition-colors"
            >
              <span>View All Drops</span>
            </a>
          </div>
        </div>

        {/* Product Grid (6 Requested Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MOCK_PRODUCTS.slice(0, 6).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};
