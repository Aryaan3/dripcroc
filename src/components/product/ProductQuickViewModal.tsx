import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Truck, RefreshCw, Check } from 'lucide-react';
import { Product, ProductSize } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);
  const selectedColor = product.colors[selectedColorIndex] || product.colors[0];
  const selectedSize: ProductSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-gray-100 animate-fadeIn text-drip-charcoal my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-drip-charcoal bg-white/80 backdrop-blur-md rounded-full shadow-md transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left: Product Gallery */}
          <div className="md:col-span-6 p-6 bg-drip-gray-surface flex flex-col justify-between space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-14 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx ? 'border-drip-orange scale-105' : 'border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Purchase Controls */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-drip-orange tracking-widest">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Star size={14} fill="currentColor" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-black uppercase font-display text-drip-charcoal">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-black text-drip-charcoal font-display">₹{product.price}</span>
                <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                <span className="bg-drip-orange/10 text-drip-orange text-xs font-black px-2 py-0.5 rounded">
                  {product.discountPercentage}% OFF
                </span>
              </div>

              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Select Color */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Color: <strong className="text-drip-charcoal">{selectedColor.name}</strong>
              </label>
              <div className="flex gap-2">
                {product.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`w-7 h-7 rounded-full border-2 transition-transform ${
                      selectedColorIndex === idx ? 'border-drip-orange scale-110 ring-2 ring-drip-orange/30' : 'border-gray-200'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Select Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-gray-500 uppercase tracking-wider">Size</label>
                <span className="font-bold text-drip-orange">{product.fit}</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size, idx) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedSizeIndex === idx
                        ? 'bg-drip-charcoal text-white border-drip-charcoal shadow-sm'
                        : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-drip-orange text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md"
                >
                  {added ? (
                    <>
                      <Check size={16} />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>ADD TO BAG • ₹{product.price}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 rounded-xl border transition-colors ${
                    isWishlisted 
                      ? 'bg-drip-orange text-white border-drip-orange' 
                      : 'border-gray-200 text-drip-charcoal hover:border-drip-orange'
                  }`}
                >
                  <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="flex items-center justify-around text-[10px] text-gray-500 font-semibold pt-1">
                <span className="flex items-center gap-1"><Truck size={12} className="text-drip-orange" /> Pan-India Express</span>
                <span className="flex items-center gap-1"><RefreshCw size={12} className="text-drip-orange" /> 7-Day Replacement</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
