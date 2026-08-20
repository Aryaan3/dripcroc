import React, { useState } from 'react';
import { Flame, TrendingUp } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { ProductCard } from '../product/ProductCard';
import { ProductQuickViewModal } from '../product/ProductQuickViewModal';
import { Product } from '../../types/product';

export const TrendingNow: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Select 4 trending items from dataset
  const trendingProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <section id="trending" className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-drip-orange text-xs font-black uppercase tracking-widest mb-2">
              <TrendingUp size={16} />
              <span>MOST WANTED DROPS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-drip-charcoal">
              TRENDING <span className="text-drip-orange">NOW</span>
            </h2>
            <p className="text-sm font-semibold text-gray-500 mt-1 font-sans">
              The fits everyone's talking about.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 bg-drip-orange/10 text-drip-orange px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Flame size={14} className="fill-drip-orange" />
              <span>High Demand Stock</span>
            </span>
          </div>
        </div>

        {/* Product Grid: 4 cols on Desktop, 3 on Tablet, 2 on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingProducts.map((product) => (
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
