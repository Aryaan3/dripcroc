import React, { useState } from 'react';
import { 
  Star, Heart, ShoppingBag, Truck, RefreshCw, ShieldCheck, 
  ChevronDown, ChevronUp, Ruler, Share2, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import { ProductColor, ProductSize } from '../types/product';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { SizeGuideModal } from '../components/product/SizeGuideModal';
import { ProductCard } from '../components/product/ProductCard';

interface ProductDetailPageProps {
  onBackToHome?: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onBackToHome }) => {
  // Primary featured item: DRIPCROC SIGNATURE OVERSIZED TEE
  const product = {
    id: 'dc-sig-01',
    name: 'DRIPCROC SIGNATURE OVERSIZED TEE',
    slug: 'dripcroc-signature-oversized-tee',
    category: 'oversized-tees' as const,
    categoryLabel: 'Oversized Tee',
    price: 1299,
    originalPrice: 1799,
    discountPercentage: 28,
    fit: 'Oversized' as const,
    rating: 4.8,
    reviewCount: 142,
    inStock: true,
    isNewArrival: true,
    isBestSeller: true,
    isLootpaatSale: true,
    tags: ['240 GSM', 'Acid Wash', 'Drop Shoulder'],
    colors: [
      { name: 'Vintage Charcoal', hex: '#2A2A2A' },
      { name: 'Drip Orange', hex: '#F15A00' },
      { name: 'Bone White', hex: '#F3F4F6' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'] as ProductSize[],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'The definitive DripCroc streetwear essential. Crafted from 240 GSM ultra-combed French Terry cotton with a signature vintage acid-wash finish and dropped shoulder cut.',
    fabricDetails: '100% French Terry Cotton, 240 GSM, Pre-shrunk, Anti-pilling finish',
    careInstructions: [
      'Machine wash cold inside out with like colors',
      'Tumble dry low or line dry in shade',
      'Iron on low setting avoiding print',
      'Do not bleach or dry clean'
    ]
  };

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>('L');
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<'details' | 'fabric' | 'shipping' | 'reviews'>('details');

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    // Directly opens cart drawer
  };

  const relatedProducts = MOCK_PRODUCTS.slice(1, 5);

  const reviewsData = [
    {
      author: 'Aman Sharma',
      location: 'Mumbai',
      rating: 5,
      date: 'August 14, 2026',
      title: 'Insane fabric quality!',
      comment: 'The 240 GSM weight is real! Thick, heavy drop shoulder tee that feels super premium. Best streetwear buy in India.',
      verified: true
    },
    {
      author: 'Rohan Verma',
      location: 'Jaipur',
      rating: 5,
      date: 'August 10, 2026',
      title: 'Fits perfectly oversized',
      comment: 'Bought Size L (I am 5\'11"). The acid wash texture looks so clean in person. Delivered to Rajasthan in 2 days.',
      verified: true
    },
    {
      author: 'Priya K.',
      location: 'Bengaluru',
      rating: 4,
      date: 'August 02, 2026',
      title: 'Worth every rupee',
      comment: 'Very solid cotton quality. Print hasn\'t faded after 4 washes. Highly recommend DRIPCROC.',
      verified: true
    }
  ];

  return (
    <div className="bg-white text-drip-charcoal pb-24 lg:pb-16">
      
      {/* Breadcrumb & Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2 font-medium">
          <button onClick={onBackToHome} className="hover:text-drip-orange transition-colors">Home</button>
          <span>/</span>
          <a href="#oversized-tees" className="hover:text-drip-orange transition-colors">Oversized Tees</a>
          <span>/</span>
          <span className="font-bold text-drip-charcoal truncate">{product.name}</span>
        </div>

        <button className="flex items-center gap-1.5 hover:text-drip-orange font-bold transition-colors">
          <Share2 size={14} />
          <span className="hidden sm:inline">Share Fit</span>
        </button>
      </div>

      {/* Main Product Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT SIDE: PRODUCT IMAGE GALLERY */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            
            {/* Thumbnails Stack */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`w-18 h-22 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-drip-gray-surface ${
                    activeImgIdx === idx 
                      ? 'border-drip-orange ring-2 ring-drip-orange/20 scale-105' 
                      : 'border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Stage Image */}
            <div className="flex-1 relative rounded-2xl overflow-hidden bg-drip-gray-surface aspect-[3/4] shadow-sm border border-gray-100 group">
              <img
                src={product.images[activeImgIdx]}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Discount Tag */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="bg-drip-orange text-white text-xs font-black px-3 py-1 rounded-md shadow-sm">
                  {product.discountPercentage}% OFF
                </span>
                <span className="badge-lootpaat">Lootpaat Sale</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: PRODUCT PURCHASE CONTROLS */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-widest text-drip-orange">
                  {product.categoryLabel} • 240 GSM
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                  In Stock (Bhilwara Warehouse)
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-black uppercase font-display text-drip-charcoal leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center text-amber-500 font-bold text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4 ? "currentColor" : "currentColor"} className="text-amber-500" />
                  ))}
                  <span className="ml-1 text-drip-charcoal">{product.rating}</span>
                </div>
                <span className="text-gray-300">•</span>
                <a href="#reviews" className="text-xs font-bold text-drip-orange hover:underline">
                  {product.reviewCount} Verified Reviews
                </a>
              </div>

              {/* Price Block */}
              <div className="flex items-baseline gap-3 mt-4 pt-4 border-t border-gray-100">
                <span className="text-3xl font-black text-drip-charcoal font-display">
                  ₹{product.price}
                </span>
                <span className="text-base text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="text-xs font-extrabold text-drip-orange bg-drip-orange/10 px-2.5 py-1 rounded">
                  Save ₹{product.originalPrice - product.price} ({product.discountPercentage}% OFF)
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-semibold mt-1">
                Inclusive of all taxes. Free Pan-India shipping above ₹999.
              </p>
            </div>

            {/* Color Swatches */}
            <div className="space-y-2 pt-3 border-t border-gray-100">
              <label className="block text-xs font-extrabold uppercase text-gray-600">
                Color: <span className="text-drip-charcoal font-black">{selectedColor.name}</span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor.name === color.name 
                        ? 'scale-110 border-drip-orange ring-2 ring-drip-orange/30' 
                        : 'border-gray-200 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor.name === color.name && (
                      <span className={`w-2.5 h-2.5 rounded-full ${color.hex === '#F3F4F6' ? 'bg-black' : 'bg-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2.5 pt-3 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <label className="text-xs font-extrabold uppercase text-gray-600">
                  Select Size
                </label>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-xs font-bold text-drip-orange flex items-center gap-1 hover:underline"
                >
                  <Ruler size={14} />
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl text-xs font-black transition-all border ${
                      selectedSize === size
                        ? 'bg-drip-charcoal text-white border-drip-charcoal shadow-md scale-105'
                        : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-gray-400 font-semibold block">
                Fits true to size for an oversized drop silhouette.
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
              <label className="text-xs font-extrabold uppercase text-gray-600">
                Quantity:
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-1.5 text-sm font-bold text-gray-600 hover:text-drip-orange"
                >
                  -
                </button>
                <span className="px-3 text-sm font-black text-drip-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-1.5 text-sm font-bold text-gray-600 hover:text-drip-orange"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons: ADD TO BAG & BUY NOW */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-drip-orange text-white py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider hover:bg-drip-orange-hover transition-all flex items-center justify-center gap-2 shadow-drip-md"
                >
                  <ShoppingBag size={18} />
                  <span>ADD TO BAG • ₹{product.price * quantity}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-xl border transition-all ${
                    isWishlisted 
                      ? 'bg-drip-orange text-white border-drip-orange' 
                      : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange'
                  }`}
                  title="Wishlist"
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-drip-charcoal text-white py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>BUY NOW (EXPRESS CHECKOUT)</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Delivery & Protection Perks */}
            <div className="bg-drip-gray-surface p-4 rounded-xl border border-gray-200 space-y-2.5 text-xs font-bold text-drip-charcoal">
              <div className="flex items-center gap-2.5">
                <Truck size={18} className="text-drip-orange" />
                <span>Pan India Express Delivery (3–5 Days)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-drip-orange" />
                <span>Partial COD Accepted & 100% Original Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <RefreshCw size={18} className="text-drip-orange" />
                <span>Easy 7-Day Size Exchange Guarantee</span>
              </div>
            </div>

          </div>

        </div>

        {/* ACCORDION SECTION: PRODUCT INFORMATION */}
        <div className="mt-16 pt-12 border-t border-gray-200 max-w-4xl mx-auto">
          <h2 className="text-2xl font-black uppercase font-display text-drip-charcoal mb-6">
            Product Specifications & Information
          </h2>

          <div className="space-y-4">
            
            {/* Accordion 1: PRODUCT DETAILS */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'details' ? '' as any : 'details')}
                className="w-full p-5 bg-white flex justify-between items-center text-left font-extrabold text-sm uppercase text-drip-charcoal hover:text-drip-orange transition-colors"
              >
                <span>Product Details</span>
                {activeAccordion === 'details' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {activeAccordion === 'details' && (
                <div className="p-5 bg-drip-gray-surface border-t border-gray-100 text-xs text-gray-700 space-y-3 font-medium">
                  <p>{product.description}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Dropped shoulder silhouette engineered for street style</li>
                    <li>Pre-shrunk 240 GSM heavy combed cotton</li>
                    <li>High-density tactile DRIPCROC branding</li>
                    <li>Ribbed collar with shape-retention elastane blend</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: FIT & FABRIC */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'fabric' ? '' as any : 'fabric')}
                className="w-full p-5 bg-white flex justify-between items-center text-left font-extrabold text-sm uppercase text-drip-charcoal hover:text-drip-orange transition-colors"
              >
                <span>Fit & Fabric Specifications</span>
                {activeAccordion === 'fabric' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {activeAccordion === 'fabric' && (
                <div className="p-5 bg-drip-gray-surface border-t border-gray-100 text-xs text-gray-700 space-y-3 font-medium">
                  <p><strong>Fabric Weight:</strong> {product.fabricDetails}</p>
                  <p><strong>Care Instructions:</strong></p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {product.careInstructions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: SHIPPING & RETURNS */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? '' as any : 'shipping')}
                className="w-full p-5 bg-white flex justify-between items-center text-left font-extrabold text-sm uppercase text-drip-charcoal hover:text-drip-orange transition-colors"
              >
                <span>Shipping, Delivery & Returns</span>
                {activeAccordion === 'shipping' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {activeAccordion === 'shipping' && (
                <div className="p-5 bg-drip-gray-surface border-t border-gray-100 text-xs text-gray-700 space-y-2 font-medium">
                  <p>🚚 <strong>Dispatch Time:</strong> Orders are processed and dispatched within 24 hours from our Bhilwara, Rajasthan warehouse.</p>
                  <p>💳 <strong>Payment Options:</strong> Prepaid (Credit/Debit, UPI, NetBanking) & Partial COD available.</p>
                  <p>🔄 <strong>Exchange Policy:</strong> 7-day doorstep size replacement. Ensure tags remain intact.</p>
                </div>
              )}
            </div>

            {/* Accordion 4: REVIEWS */}
            <div id="reviews" className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'reviews' ? '' as any : 'reviews')}
                className="w-full p-5 bg-white flex justify-between items-center text-left font-extrabold text-sm uppercase text-drip-charcoal hover:text-drip-orange transition-colors"
              >
                <span>Customer Reviews ({product.reviewCount})</span>
                {activeAccordion === 'reviews' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {activeAccordion === 'reviews' && (
                <div className="p-5 bg-drip-gray-surface border-t border-gray-100 space-y-4">
                  {reviewsData.map((rev, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-xs text-drip-charcoal">{rev.author}</span>
                            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                              <CheckCircle2 size={10} /> Verified Buyer ({rev.location})
                            </span>
                          </div>
                          <div className="flex items-center text-amber-500 mt-1">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} size={12} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-400 font-semibold">{rev.date}</span>
                      </div>
                      <h4 className="font-extrabold text-xs text-drip-charcoal">{rev.title}</h4>
                      <p className="text-xs text-gray-600 font-medium">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-drip-orange">
                Recommended Drops
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-display text-drip-charcoal mt-1">
                YOU MAY ALSO LIKE
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>

      </div>

      {/* MOBILE STICKY BOTTOM ADD TO BAG BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 p-3 flex items-center gap-3 shadow-2xl lg:hidden">
        <div className="flex-1">
          <span className="text-[10px] text-gray-400 font-bold block uppercase">Size: {selectedSize} • Color: {selectedColor.name}</span>
          <span className="text-base font-black text-drip-charcoal">₹{product.price * quantity}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-drip-orange text-white px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center gap-2 shadow-md"
        >
          <ShoppingBag size={16} />
          <span>ADD TO BAG</span>
        </button>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal 
        isOpen={sizeGuideOpen} 
        onClose={() => setSizeGuideOpen(false)} 
      />

    </div>
  );
};
