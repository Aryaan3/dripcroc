import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export const StoreLocator: React.FC = () => {
  return (
    <section id="store" className="py-20 sm:py-28 bg-[#090909] text-white border-t border-b border-neutral-800 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-drip-orange text-xs font-mono font-bold uppercase tracking-widest bg-drip-orange/10 px-3.5 py-1 rounded-full border border-drip-orange/30">
            <MapPin size={14} />
            <span>PHYSICAL RETAIL COORDINATES // [ 25.3473° N, 74.6358° E ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
            FIND YOUR <span className="text-drip-orange">DRIPCROC</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium">
            Visit our flagship retail outlet in Bhilwara, Rajasthan to try on new drops in person.
          </p>
        </div>

        {/* Store Card Container */}
        <div className="max-w-4xl mx-auto bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-neutral-800 grid grid-cols-1 md:grid-cols-12">
          
          {/* Left: Store Image */}
          <div className="md:col-span-6 relative min-h-[300px] group">
            <img
              src="/assets/dripcroc-store-preview.jpg"
              alt="DRIPCROC Flagship Retail Store Bhilwara"
              className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="bg-drip-orange text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-sm w-fit mb-1">
                BHILWARA STORE ENTRANCE
              </span>
              <h4 className="text-xl font-black text-white uppercase font-display">
                FLAGSHIP RETAIL OUTLET
              </h4>
            </div>
          </div>

          {/* Right: Location Details & CTA */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-drip-orange font-mono font-bold text-xs uppercase tracking-widest mb-2">
                <MapPin size={16} />
                <span>STORE LOCATION</span>
              </div>
              
              <h3 className="text-2xl font-black uppercase text-white font-display">
                Bhilwara, Rajasthan
              </h3>
              
              <p className="text-xs text-neutral-300 font-medium mt-2 leading-relaxed font-sans">
                {BRAND_INFO.storeLocation.address}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-neutral-800">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <Clock size={16} className="text-drip-orange" />
                <span>Store Timings: 11:00 AM – 9:30 PM Daily</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>In-Store Fitting & Direct Drop Purchases</span>
              </div>
            </div>

            {/* Visit Store Pill Button */}
            <div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-drip-orange text-white py-3.5 px-6 rounded-full font-mono font-bold text-xs uppercase tracking-widest hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md border border-drip-orange/50"
              >
                <Navigation size={16} />
                <span>( GET_STORE_DIRECTIONS )</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
