import React from 'react';
import { MapPin, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export const StoreSpotlight: React.FC = () => {
  return (
    <section id="store" className="py-16 sm:py-24 bg-drip-charcoal text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image of Store Entrance */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-neutral-800 bg-neutral-900 group">
              <img
                src="/assets/dripcroc-store-preview.jpg"
                alt="DRIPCROC Flagship Retail Store Bhilwara Entrance"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="inline-flex items-center gap-2 bg-drip-orange text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider w-fit mb-2">
                  <MapPin size={14} />
                  <span>Flagship Retail Location</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white font-display">
                  DRIPCROC BHILWARA STORE
                </h3>
                <p className="text-xs text-neutral-300">
                  Experience full drops, try sizes in person, and feel the 240+ GSM cotton quality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Store Details & Directions */}
          <div className="lg:col-span-6 space-y-6">
            
            <span className="text-xs font-extrabold uppercase tracking-widest text-drip-orange">
              Physical Retail Experience
            </span>

            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-white leading-tight">
              VISIT US IN <span className="text-drip-orange">BHILWARA</span>
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed font-medium">
              Not just an online store. Come hang out at our flagship retail outlet in Bhilwara, Rajasthan to explore exclusive physical store drops, instant fittings, and seasonal sales.
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-3 bg-neutral-800/80 p-4 rounded-xl border border-neutral-700">
                <MapPin className="text-drip-orange flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-xs font-bold uppercase text-white">Store Address</h4>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {BRAND_INFO.storeLocation.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-neutral-800/80 p-4 rounded-xl border border-neutral-700">
                <Clock className="text-drip-orange flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-xs font-bold uppercase text-white">Store Timings</h4>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    Monday to Sunday: 11:00 AM – 9:30 PM
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="bg-drip-orange text-white px-6 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md"
              >
                <Navigation size={16} />
                <span>Get Directions On Maps</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 justify-center">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Store Pickup Available</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
