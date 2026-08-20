import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Star, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product, ProductColor, ProductSize } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-200">
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-drip-charcoal rounded-full hover:bg-gray-100 transition-colors z-20"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left: Product Media Gallery */}
            <div className="md:col-span-6 bg-drip-gray-surface p-6 flex flex-col justify-between">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-sm mb-4">
                <img 
                  src={product.images[activeImageIdx] || product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />

                {/* Discount Badge */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                  <span className="bg-drip-orange text-white text-xs font-black px-2.5 py-1 rounded-sm">
                    {product.discountPercentage}% OFF
                  </span>
                  {product.isLootpaatSale && (
                    <span className="badge-lootpaat">Lootpaat Sale</span>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2 justify-center">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`w-14 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIdx === idx ? 'border-drip-orange scale-105' : 'border-gray-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Details & Controls */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span className="text-drip-orange font-extrabold uppercase tracking-wider text-[11px]">
                    {product.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star size={14} fill="currentColor" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400 font-normal">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Product Name */}
                <h2 className="text-xl sm:text-2xl font-black uppercase font-display text-drip-charcoal">
                  {product.name}
                </h2>

                {/* Price Row */}
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-2xl font-black text-drip-charcoal">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-drip-orange bg-drip-orange/10 px-2 py-0.5 rounded">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                </div>

                <p className="text-xs text-gray-600 font-medium mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Options: Colors & Sizes */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                
                {/* Color Selector */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-gray-500 mb-2">
                    Color: <span className="text-drip-charcoal">{selectedColor.name}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${
                          selectedColor.name === color.name ? 'scale-110 border-drip-orange ring-2 ring-drip-orange/20' : 'border-gray-200 hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-extrabold uppercase text-gray-500">
                      Select Size
                    </label>
                    <span className="text-[11px] font-bold text-drip-orange uppercase">
                      Fit: {product.fit}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-lg text-xs font-extrabold transition-all border ${
                          selectedSize === size
                            ? 'bg-drip-charcoal text-white border-drip-charcoal shadow-sm'
                            : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3 pt-2">
                  <label className="text-xs font-extrabold uppercase text-gray-500">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-sm font-bold text-gray-600 hover:text-drip-orange"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm font-bold text-drip-charcoal">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-sm font-bold text-gray-600 hover:text-drip-orange"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-drip-orange text-white py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md"
                >
                  <ShoppingBag size={18} />
                  <span>ADD TO BAG • ₹{product.price * quantity}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 rounded-xl border transition-all ${
                    isWishlisted 
                      ? 'bg-drip-orange text-white border-drip-orange' 
                      : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange hover:text-drip-orange'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Shipping Perks */}
              <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                <span className="flex items-center gap-1">
                  <Truck size={14} className="text-drip-orange" />
                  <span>Free delivery over ₹999</span>
                </span>
                <span className="flex items-center gap-1">
                  <RefreshCw size={14} className="text-drip-orange" />
                  <span>Easy 7-day exchange</span>
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
