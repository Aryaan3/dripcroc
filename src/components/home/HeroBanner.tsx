import React from 'react';
import { ArrowRight, Sparkles, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-drip-orange via-[#E55401] to-[#121212] text-white overflow-hidden py-12 sm:py-20 lg:py-24 border-b border-drip-orange/30">
      
      {/* Soft Ambient Drip Orange Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-drip-orange/20 rounded-full filter blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: EDITORIAL FASHION TYPOGRAPHY */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8 text-left">
            
            {/* Campaign Tag */}
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border border-white/20 shadow-md">
              <Sparkles size={13} className="text-white flex-shrink-0" />
              <span className="truncate">LOOTPAAT SALE NOW LIVE • UP TO 50% OFF</span>
            </div>

            {/* Headline with Serif Italic Accent */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-black uppercase font-display tracking-tighter text-white leading-[0.9] drop-shadow-md">
                OWN YOUR <br />
                <span className="text-black bg-white px-3 sm:px-4 py-0.5 sm:py-1 inline-block mt-1.5 rounded-xl sm:rounded-2xl shadow-xl transform -rotate-1">DRIP.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-2xl lg:text-3xl text-neutral-100 font-serif-italic pt-2 sm:pt-4 font-normal tracking-wide">
                Everyday fits. Your way.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-100 font-medium max-w-lg leading-relaxed pt-1">
              DripCroc is built around everyday style, bold choices, and clothing that lets you wear your personality. Premium 240+ GSM combed cottons, wide-leg denim, and oversized resort layers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#new-arrivals"
                className="group inline-flex items-center justify-center bg-black hover:bg-neutral-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <span>SHOP NEW ARRIVALS</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#collections"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all border border-white/30 hover:border-white"
              >
                <span>EXPLORE COLLECTION</span>
              </a>
            </div>

            {/* Trust Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/20 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-white flex-shrink-0" />
                <span>Pan-India Express Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-white flex-shrink-0" />
                <span>Partial COD Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw size={16} className="text-white flex-shrink-0" />
                <span>7-Day Easy Replacements</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: VIVIENNE ROSE-STYLE ORGANIC CAPSULE MODEL HERO */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-[3/4] bg-white/20 backdrop-blur-md rounded-[90px] sm:rounded-[120px] p-2 sm:p-3 shadow-2xl flex items-center justify-center border border-white/40 group overflow-hidden">
              
              {/* Organic Inner Oval Mask with Model Photography */}
              <div className="relative w-full h-full rounded-[85px] sm:rounded-[112px] overflow-hidden bg-neutral-950 border-2 border-white/80">
                <img
                  src="/assets/dripcroc-model-pinstripe.jpg"
                  alt="DRIPCROC Campaign Model"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 text-center">
                  <span className="text-[9px] sm:text-[10px] font-bold text-drip-orange uppercase tracking-widest block mb-0.5 sm:mb-1">
                    FEATURED LOOK // 2026
                  </span>
                  <h4 className="text-base sm:text-xl font-black uppercase font-display text-white">
                    Pinstripe Oversized Resort Shirt
                  </h4>
                  <span className="text-[11px] sm:text-xs text-neutral-300 font-medium block mt-0.5">
                    ₹1,399 • 210 GSM Cotton-Linen
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black text-white text-[9px] sm:text-[10px] font-black uppercase px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/20 shadow-xl">
                HOT DROP
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
