import React from 'react';
import { ArrowRight } from 'lucide-react';

const CATEGORIES_DATA = [
  {
    name: 'MEN',
    tag: 'Streetwear Collection',
    image: '/assets/dripcroc-model-hero.jpg',
    href: '#men'
  },
  {
    name: 'WOMEN',
    tag: 'Oversized & Relaxed',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    href: '#women'
  },
  {
    name: 'T-SHIRTS',
    tag: '240 GSM Combed Cotton',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop',
    href: '#t-shirts'
  },
  {
    name: 'SHIRTS',
    tag: 'Resort & Textured Linen',
    image: '/assets/dripcroc-model-pinstripe.jpg',
    href: '#shirts'
  },
  {
    name: 'BOTTOMWEAR',
    tag: '14oz Denim & Cargos',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
    href: '#bottomwear'
  },
  {
    name: 'HOODIES',
    tag: '400 GSM Heavy Fleece',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
    href: '#hoodies'
  }
];

export const CategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="py-20 sm:py-24 bg-white text-drip-charcoal border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-drip-orange">
              SHOP BY CATEGORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-drip-charcoal mt-1">
              SHOP YOUR <span className="text-drip-orange">STYLE</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold max-w-xs mt-2 md:mt-0">
            Tailored streetwear silhouettes, 240+ GSM heavy cottons, and vintage washed drops.
          </p>
        </div>

        {/* 6 Clean Editorial Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden bg-drip-charcoal aspect-[3/4] shadow-md hover:shadow-drip-hover transition-all duration-500 flex flex-col justify-end p-4 border border-gray-100"
            >
              {/* Background Photo */}
              <img
                src={cat.image}
                alt={`DRIPCROC ${cat.name}`}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-300" />

              {/* Bottom Info & Arrow */}
              <div className="relative z-10 space-y-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[10px] font-bold text-drip-orange uppercase tracking-widest block truncate">
                  {cat.tag}
                </span>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-black uppercase font-display text-white tracking-tight group-hover:text-drip-orange transition-colors">
                    {cat.name}
                  </h3>

                  <div className="text-drip-orange opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
