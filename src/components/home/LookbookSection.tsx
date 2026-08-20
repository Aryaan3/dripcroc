import React from 'react';
import { Instagram, Play, Sparkles } from 'lucide-react';

const REELS = [
  {
    title: 'LOOTPAAT SALE IS LIVE 💥',
    views: '42.5K views',
    tag: 'Flagship Store Reel',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'GRWM FT. DRIPCROC 🔥',
    views: '88.9K views',
    tag: 'Oversized Linen Shirt + Baggy Denim',
    image: '/assets/dripcroc-model-hero.jpg'
  },
  {
    title: 'AESTHETIC OUTFITS FT. DRIPCROC',
    views: '64.1K views',
    tag: 'Summer Streetwear Styling',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop'
  }
];

export const LookbookSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-drip-orange/10 text-drip-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
            <Instagram size={16} />
            <span>@DRIPCROC_ ON INSTAGRAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-drip-charcoal">
            SEE THE DRIP <span className="text-drip-orange">IN ACTION</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold">
            Tag @dripcroc_ in your GRWM reels & outfit stories to get featured on our official brand showcase.
          </p>
        </div>

        {/* Reel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REELS.map((reel, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-drip-hover transition-all duration-500 aspect-[9/16] bg-drip-charcoal cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-6">
                
                {/* Top Badge */}
                <div className="flex justify-between items-center">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-white/20">
                    {reel.tag}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-drip-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={16} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-drip-orange tracking-widest uppercase">
                    {reel.views}
                  </span>
                  <h4 className="text-lg font-black uppercase text-white font-display tracking-tight">
                    {reel.title}
                  </h4>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/dripcroc_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-drip-charcoal text-white px-8 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-drip-orange transition-colors shadow-md"
          >
            <Instagram size={18} />
            <span>Follow @dripcroc_ (8,228+ Followers)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
