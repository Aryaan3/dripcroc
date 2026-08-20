import React from 'react';
import { Instagram, Facebook, Youtube, Truck, ShieldCheck, RefreshCw, CreditCard } from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-drip-charcoal text-white pt-16 pb-12 border-t border-neutral-800">
      
      {/* Brand Perks Trust Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-neutral-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-800 text-drip-orange rounded-xl">
              <Truck size={22} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-white">Pan India Delivery</h4>
              <p className="text-[11px] text-neutral-400 font-medium">Express 3-5 day shipping</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-800 text-drip-orange rounded-xl">
              <CreditCard size={22} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-white">Partial COD Accepted</h4>
              <p className="text-[11px] text-neutral-400 font-medium">Pay small deposit on order</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-800 text-drip-orange rounded-xl">
              <RefreshCw size={22} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-white">7-Day Replacements</h4>
              <p className="text-[11px] text-neutral-400 font-medium">Hassle-free size exchange</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-800 text-drip-orange rounded-xl">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-white">100% Original Drip</h4>
              <p className="text-[11px] text-neutral-400 font-medium">Flagship store in Bhilwara</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          
          {/* COLUMN 1: SHOP */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 border-l-2 border-drip-orange pl-2">
              SHOP
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-neutral-400">
              <li><a href="#men" className="hover:text-drip-orange transition-colors">Men</a></li>
              <li><a href="#women" className="hover:text-drip-orange transition-colors">Women</a></li>
              <li><a href="#new-arrivals" className="hover:text-drip-orange transition-colors">New Arrivals</a></li>
              <li><a href="#collections" className="hover:text-drip-orange transition-colors">Collections</a></li>
              <li><a href="#bestsellers" className="hover:text-drip-orange transition-colors">Bestsellers</a></li>
              <li><a href="#sale" className="text-drip-orange font-bold hover:underline">Sale</a></li>
            </ul>
          </div>

          {/* COLUMN 2: HELP */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 border-l-2 border-drip-orange pl-2">
              HELP
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-neutral-400">
              <li><a href="#contact" className="hover:text-drip-orange transition-colors">Contact</a></li>
              <li><a href="#shipping" className="hover:text-drip-orange transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-drip-orange transition-colors">Returns</a></li>
              <li><a href="#track-order" className="hover:text-drip-orange transition-colors">Track Order</a></li>
              <li><a href="#faqs" className="hover:text-drip-orange transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* COLUMN 3: COMPANY */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 border-l-2 border-drip-orange pl-2">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-neutral-400">
              <li><a href="#about" className="hover:text-drip-orange transition-colors">About DripCroc</a></li>
              <li><a href="#story" className="hover:text-drip-orange transition-colors">Our Story</a></li>
              <li><a href="#store" className="hover:text-drip-orange transition-colors">Store</a></li>
              <li><a href="#contact" className="hover:text-drip-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 4: FOLLOW */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 border-l-2 border-drip-orange pl-2">
              FOLLOW
            </h4>
            <ul className="space-y-3 text-xs font-semibold text-neutral-400">
              <li>
                <a 
                  href="https://instagram.com/dripcroc_" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-drip-orange transition-colors"
                >
                  <Instagram size={16} className="text-drip-orange" />
                  <span>Instagram (@dripcroc_)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-drip-orange transition-colors"
                >
                  <Facebook size={16} className="text-drip-orange" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-drip-orange transition-colors"
                >
                  <Youtube size={16} className="text-drip-orange" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-[11px] text-neutral-300">
              <span className="text-drip-orange font-bold block">Bhilwara Store:</span>
              <span>{BRAND_INFO.storeLocation.address}</span>
            </div>
          </div>

        </div>

        {/* Bottom Logo & Copyright Line */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex items-center gap-2.5">
            <img 
              src="/assets/dripcroc-badge.png" 
              alt="DRIPCROC Logo" 
              className="h-7 w-7 object-contain rounded"
            />
            <span className="font-extrabold uppercase font-display text-white text-base">
              DRIP<span className="text-drip-orange">CROC</span>
            </span>
          </div>

          <p className="text-neutral-400 font-semibold">
            © DripCroc • All rights reserved.
          </p>

          <span className="text-neutral-500 text-[11px]">
            Client Demonstration Prototype
          </span>
        </div>
      </div>
    </footer>
  );
};
