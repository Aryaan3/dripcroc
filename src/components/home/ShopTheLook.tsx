import React, { useState } from 'react';
import { ShoppingBag, Plus, ArrowRight, Check } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/product';
import { ProductQuickViewModal } from '../product/ProductQuickViewModal';

export const ShopTheLook: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [allAdded, setAllAdded] = useState(false);

  // Selected outfit items: Pinstripe Overshirt + Wide Leg Denim + Retro Kit
  const outfitItems = [
    MOCK_PRODUCTS[0], // Pinstripe Oversized Resort Shirt
    MOCK_PRODUCTS[3], // Vintage Wide-Leg Denim
    MOCK_PRODUCTS[1], // Retro Heritage Jersey
  ];

  const outfitTotalPrice = outfitItems.reduce((sum, item) => sum + item.price, 0);

  const handleAddFullOutfit = () => {
    outfitItems.forEach(item => {
      addToCart(item, item.colors[0], item.sizes[0], 1);
    });
    setAllAdded(true);
    setTimeout(() => setAllAdded(false), 3000);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0C0C0C] text-white overflow-hidden relative border-t border-neutral-800">
      
      {/* Decorative Grid Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#F15A00_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-drip-orange bg-drip-orange/10 px-3 py-1 rounded-full border border-drip-orange/30">
            // OUTFIT STYLING #04
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-white">
            THE DRIPCROC <span className="text-drip-orange">LOOK</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium">
            Vertical pinstripe open overshirt over crisp white tank & vintage wide-leg denim.
          </p>
        </div>

        {/* Editorial Outfit Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-neutral-900/90 rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl">
          
          {/* Left: Interactive Model Photo with Hotspots */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black border border-neutral-800 group">
              <img
                src="/assets/dripcroc-model-pinstripe.jpg"
                alt="The DripCroc Streetwear Outfit Look"
                className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Hotspot 1: Pinstripe Overshirt */}
              <div className="absolute top-[28%] left-[45%] z-20">
                <button
                  onClick={() => setSelectedProduct(outfitItems[0])}
                  className="relative flex items-center justify-center w-8 h-8 rounded-full bg-drip-orange text-white shadow-xl hover:scale-125 transition-transform group/pin"
                  aria-label="View Pinstripe Shirt"
                >
                  <Plus size={16} />
                  <span className="absolute left-10 bg-black/90 backdrop-blur-md text-white text-[11px] font-mono font-extrabold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity border border-neutral-700 pointer-events-none">
                    Pinstripe Oversized Shirt • ₹1,399
                  </span>
                </button>
              </div>

              {/* Hotspot 2: Wide Leg Denim */}
              <div className="absolute top-[68%] left-[55%] z-20">
                <button
                  onClick={() => setSelectedProduct(outfitItems[1])}
                  className="relative flex items-center justify-center w-8 h-8 rounded-full bg-drip-orange text-white shadow-xl hover:scale-125 transition-transform group/pin"
                  aria-label="View Wide Leg Denim"
                >
                  <Plus size={16} />
                  <span className="absolute left-10 bg-black/90 backdrop-blur-md text-white text-[11px] font-mono font-extrabold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity border border-neutral-700 pointer-events-none">
                    Wide-Leg Denim • ₹1,899
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* Right: Outfit Items Breakdown & Shop The Look Button */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-[10px] font-mono font-bold text-drip-orange uppercase tracking-widest bg-drip-orange/10 px-3 py-1 rounded-full border border-drip-orange/20">
                BUNDLE & DRIP
              </span>
              <h3 className="text-2xl font-black uppercase text-white font-display mt-3">
                Complete Streetwear Layering
              </h3>
              <p className="text-xs text-neutral-400 font-medium mt-1">
                Tap any product below to inspect fabric details or add the entire look to your bag in one click.
              </p>
            </div>

            {/* List of Outfit Items */}
            <div className="space-y-3">
              {outfitItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className="flex items-center gap-4 p-3.5 bg-neutral-900/90 hover:bg-neutral-800 rounded-xl border border-neutral-800 cursor-pointer transition-all group hover:border-drip-orange"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-18 object-cover rounded-lg bg-black flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono font-bold text-drip-orange uppercase">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-drip-orange transition-colors truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs font-black text-white">₹{item.price}</span>
                  </div>
                  <div className="p-2 text-neutral-400 group-hover:text-white">
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>

            {/* Total Price & SHOP THE LOOK Action Button */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="font-bold uppercase text-neutral-400">Total Outfit Bundle:</span>
                <span className="text-2xl font-black text-drip-orange font-display">₹{outfitTotalPrice}</span>
              </div>

              <button
                onClick={handleAddFullOutfit}
                className="w-full bg-drip-orange text-white py-4 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md border border-drip-orange/50"
              >
                {allAdded ? (
                  <>
                    <Check size={18} />
                    <span>( FULL_OUTFIT_ADDED_TO_BAG )</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>( SHOP_THE_LOOK • ₹{outfitTotalPrice} )</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
