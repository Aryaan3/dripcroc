import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';

export const FeaturedDrop: React.FC = () => {
  const heroDrop = MOCK_PRODUCTS[0];

  return (
    <section className="py-16 sm:py-24 bg-drip-charcoal text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-drip-orange/20 text-drip-orange px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-drip-orange/30">
              <Flame size={14} />
              <span>FEATURED DROP OF THE WEEK</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-white leading-tight">
              {heroDrop.name}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-medium max-w-lg leading-relaxed">
              {heroDrop.description}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={`#product-${heroDrop.id}`}
                className="bg-drip-orange text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors inline-flex items-center gap-2 shadow-drip-md"
              >
                <span>SHOP NOW • ₹{heroDrop.price}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-neutral-800 shadow-2xl max-w-md w-full">
              <img
                src={heroDrop.images[0]}
                alt={heroDrop.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
