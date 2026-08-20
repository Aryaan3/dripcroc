import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const EditorialCampaign: React.FC = () => {
  return (
    <section className="relative bg-[#121212] text-white py-20 sm:py-28 overflow-hidden border-t border-b border-neutral-800">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-drip-orange/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT PANEL: VIVIENNE ROSE STYLE ORGANIC CAPSULE MODEL */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] bg-drip-orange rounded-[120px] p-3 shadow-2xl flex items-center justify-center border border-drip-orange/50 group overflow-hidden">
              
              {/* Organic Inner Oval Mask */}
              <div className="relative w-full h-full rounded-[112px] overflow-hidden bg-neutral-950 border-2 border-black">
                <img
                  src="/assets/dripcroc-model-pinstripe.jpg"
                  alt="DRIPCROC Campaign Model"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-center">
                  <span className="text-[10px] font-bold text-drip-orange uppercase tracking-widest block mb-1">
                    CAMPAIGN // 2026
                  </span>
                  <h3 className="text-2xl font-black uppercase font-display text-white tracking-tight">
                    Everyday Fits. Your Way.
                  </h3>
                  <p className="text-xs text-neutral-300 font-medium mt-0.5">
                    Pinstripe Oversized Resort Shirt + Wide-Leg Denim
                  </p>
                </div>
              </div>

              {/* Floating Pill Tag */}
              <div className="absolute top-6 right-6 bg-black text-white text-[10px] font-black uppercase px-3.5 py-1.5 rounded-full border border-neutral-800 shadow-xl">
                NEW CAMPAIGN
              </div>

            </div>
          </div>

          {/* RIGHT PANEL: EDITORIAL CAMPAIGN HEADLINE */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            
            <div className="inline-flex items-center gap-2 bg-drip-orange/15 text-drip-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-drip-orange/30">
              <Sparkles size={14} />
              <span>THE DRIPCROC CAMPAIGN</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-5xl sm:text-7xl lg:text-7xl font-black uppercase font-display tracking-tighter text-white leading-[0.92]">
                DRIP YOUR <br />
                <span className="text-drip-orange">WAY.</span>
              </h2>

              <p className="text-xl sm:text-2xl text-neutral-300 font-serif-italic font-normal pt-2">
                Style doesn't need permission.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed max-w-lg">
              Designed in Bhilwara, Rajasthan for streetwear enthusiasts across India. Build your daily wardrobe around oversized cuts, 240+ GSM combed cottons, retro football jerseys, and vintage washed denim.
            </p>

            {/* Mini Product Gallery */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              {[
                { name: 'Pinstripe Shirt', price: '₹1,399', img: '/assets/dripcroc-model-pinstripe.jpg' },
                { name: 'Retro Jersey', price: '₹1,499', img: '/assets/dripcroc-arsenal-kit.jpg' },
                { name: 'Palmeiras Kit', price: '₹1,599', img: '/assets/dripcroc-palmeiras-kit.jpg' },
                { name: 'Wide Denim', price: '₹1,899', img: '/assets/dripcroc-model-hero.jpg' },
              ].map((item, idx) => (
                <div key={idx} className="bg-neutral-900 p-2 rounded-xl border border-neutral-800 text-center group cursor-pointer hover:border-drip-orange transition-all">
                  <img src={item.img} alt="" className="w-full h-16 object-cover rounded-lg mb-1 filter grayscale group-hover:grayscale-0" />
                  <span className="text-[9px] font-bold text-neutral-300 block truncate">{item.name}</span>
                  <span className="text-[10px] font-black text-drip-orange">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#collections"
                className="group inline-flex items-center gap-2 bg-drip-orange hover:bg-drip-orange-hover text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-drip-md hover:scale-105"
              >
                <span>SHOP THE COLLECTION</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
