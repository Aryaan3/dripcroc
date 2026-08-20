import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Real DripCroc Brand Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-drip-charcoal border border-gray-200 group">
              <img
                src="/assets/dripcroc-store-preview.jpg"
                alt="DRIPCROC Brand & Retail Outlet"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="bg-drip-orange text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm w-fit mb-2">
                  BHILWARA RETAIL OUTLET
                </span>
                <h4 className="text-xl font-black uppercase text-white font-display">
                  Born In Rajasthan. Worn Pan-India.
                </h4>
              </div>
            </div>

            {/* Decorative Orange Backdrop Offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-drip-orange rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* RIGHT: Brand Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-drip-orange text-xs font-black uppercase tracking-widest">
              <Sparkles size={16} />
              <span>THE DRIPCROC IDENTITY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-drip-charcoal leading-[1.05]">
              MORE THAN JUST <br />
              <span className="text-drip-orange">A FIT.</span>
            </h2>

            <p className="text-lg sm:text-xl text-drip-charcoal font-bold font-sans leading-snug">
              DripCroc is built around everyday style, bold choices and clothing that lets you wear your personality.
            </p>

            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              From our flagship retail store in Bhilwara to our expanding Pan-India online drops, we bring high-density heavyweight cottons, relaxed silhouettes, and authentic street culture together. We craft fits that don't compromise on fabric weight or everyday comfort.
            </p>

            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-2.5 bg-drip-charcoal text-white px-8 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-drip-orange transition-all duration-300 shadow-md group"
              >
                <span>OUR STORY</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
