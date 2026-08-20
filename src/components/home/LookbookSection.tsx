import React from 'react';
import { Flame } from 'lucide-react';

export const LookbookSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white text-drip-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-drip-orange text-xs font-black uppercase tracking-widest">
            <Flame size={14} />
            <span>SEASON 2026 LOOKBOOK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-drip-charcoal">
            STREETWEAR <span className="text-drip-orange">EDITORIAL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group bg-drip-charcoal">
            <img
              src="/assets/dripcroc-model-hero.jpg"
              alt="Lookbook Editorial 1"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-black uppercase font-display">Heavyweight Drop Shoulders</h3>
              <p className="text-xs text-neutral-300 font-semibold mt-1">240 GSM Combed Cotton</p>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group bg-drip-charcoal">
            <img
              src="/assets/dripcroc-model-pinstripe.jpg"
              alt="Lookbook Editorial 2"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-black uppercase font-display">Pinstripe Resort Open Layers</h3>
              <p className="text-xs text-neutral-300 font-semibold mt-1">Cotton Linen Blend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
