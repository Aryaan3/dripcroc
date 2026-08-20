import React from 'react';
import { Flame, ArrowRight, Tag } from 'lucide-react';

export const SaleCampaign: React.FC = () => {
  return (
    <section id="sale-campaign" className="py-20 sm:py-28 bg-drip-orange text-white relative overflow-hidden">
      
      {/* Background Kinetic Typography Watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-10 font-display font-black text-[12rem] sm:text-[18rem] uppercase tracking-tighter text-black overflow-hidden leading-none">
        DROP
      </div>

      {/* Kinetic Technical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Technical Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-xl">
            <Flame size={16} className="text-drip-orange fill-drip-orange" />
            <span>LOOTPAAT DROP // WAVE 04</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-display tracking-tight text-white leading-tight">
            THE DROP IS <span className="underline decoration-black decoration-wavy">ON.</span>
          </h2>

          {/* Large Text */}
          <div className="py-2">
            <span className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase font-display tracking-tighter text-black block leading-none drop-shadow-md">
              UP TO 50% OFF
            </span>
            <p className="text-xs sm:text-sm text-white font-mono font-bold uppercase tracking-widest mt-2">
              [ LIMITED QUANTITY DROPS • PAN INDIA EXPRESS DISPATCH ]
            </p>
          </div>

          {/* Kinetic Pill Button */}
          <div className="pt-4">
            <a
              href="#sale"
              className="inline-flex items-center gap-3 bg-black text-white hover:bg-neutral-900 px-10 py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl hover:scale-105 group border border-black"
            >
              <Tag size={18} className="text-drip-orange" />
              <span>( CLAIM_SALE_DROP )</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
