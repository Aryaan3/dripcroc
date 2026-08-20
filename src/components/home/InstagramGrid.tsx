import React from 'react';
import { Instagram } from 'lucide-react';

const INSTAGRAM_PHOTOS = [
  {
    image: '/assets/dripcroc-model-hero.jpg',
    handle: '@dripcroc_',
    likes: '1.2k'
  },
  {
    image: '/assets/dripcroc-store-preview.jpg',
    handle: '@dripcroc_',
    likes: '2.4k'
  },
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    handle: '@dripcroc_',
    likes: '980'
  },
  {
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop',
    handle: '@dripcroc_',
    likes: '1.8k'
  },
  {
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    handle: '@dripcroc_',
    likes: '3.1k'
  },
  {
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    handle: '@dripcroc_',
    likes: '1.5k'
  }
];

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-drip-orange text-xs font-black uppercase tracking-widest">
            <Instagram size={16} />
            <span>INSTAGRAM COMMUNITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-drip-charcoal">
            @DRIPCROC_
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold">
            See how the DripCroc community wears it.
          </p>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_PHOTOS.map((item, idx) => (
            <a
              key={idx}
              href="https://instagram.com/dripcroc_"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-drip-charcoal shadow-sm hover:shadow-drip-hover transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="DripCroc Instagram Community"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Dark Overlay & Instagram Icon */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-1">
                <Instagram size={28} className="text-drip-orange transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                <span className="text-[10px] font-black uppercase tracking-wider">{item.handle}</span>
                <span className="text-[9px] font-bold text-gray-300">❤️ {item.likes}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
