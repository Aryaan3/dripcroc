import React, { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { Product, ProductSize } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [hovered, setHovered] = useState(false);

  const isWishlisted = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedColor, selectedSize, 1);
  };

  const handleCardClick = () => {
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-drip-hover transition-all duration-300 flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
    >
      {/* Image & Badges Container */}
      <div className="relative aspect-[3/4] bg-drip-gray-surface overflow-hidden">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
          {product.isLootpaatSale && (
            <span className="badge-lootpaat">Lootpaat Sale</span>
          )}
          {product.isNewArrival && !product.isLootpaatSale && (
            <span className="badge-new">New Drop</span>
          )}
          <span className="bg-drip-orange text-white text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-sm shadow-sm w-fit">
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 min-w-[36px] min-h-[36px] flex items-center justify-center ${
            isWishlisted
              ? 'bg-drip-orange text-white shadow-md'
              : 'bg-white/80 text-drip-charcoal hover:bg-drip-orange hover:text-white'
          }`}
          aria-label="Add to Wishlist"
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Quick View Floating Button on Desktop Hover */}
        <div className={`hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
          hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              if (onQuickView) onQuickView(product);
            }}
            className="bg-black/85 hover:bg-black text-white backdrop-blur-md px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
          >
            <Eye size={14} className="text-drip-orange" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Quick Size Selector & Add Panel on Desktop Hover */}
        <div className={`hidden sm:flex absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-3 transition-transform duration-300 flex-col gap-2 z-10 border-t border-gray-100 ${
          hovered ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-extrabold text-gray-500 tracking-wider">Select Size:</span>
            <span className="text-[10px] font-bold text-drip-orange uppercase">{product.fit}</span>
          </div>

          <div className="flex gap-1.5 justify-center">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`text-xs font-bold w-8 h-7 rounded border transition-colors ${
                  selectedSize === size
                    ? 'bg-drip-charcoal text-white border-drip-charcoal'
                    : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="w-full mt-1 bg-drip-orange text-white py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <ShoppingBag size={14} />
            <span>QUICK ADD • ₹{product.price}</span>
          </button>
        </div>
      </div>

      {/* Product Card Details */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div>
          {/* Rating & Category */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="uppercase font-extrabold tracking-wider text-[10px] text-drip-orange">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-[11px]">
              <Star size={12} fill="currentColor" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal hidden sm:inline">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-xs sm:text-sm text-drip-charcoal line-clamp-1 group-hover:text-drip-orange transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Colors & Price Row */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          
          {/* Color Swatches */}
          <div className="flex items-center gap-1.5">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                  selectedColor.name === color.name ? 'scale-125 ring-1 ring-drip-orange' : 'opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="font-black text-sm sm:text-base text-drip-charcoal">
              ₹{product.price}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          </div>

        </div>

        {/* Direct Mobile Quick Add Bar (Always accessible on touch screens) */}
        <div className="sm:hidden pt-2 border-t border-gray-100">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-drip-orange text-white py-2 rounded-lg font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
          >
            <ShoppingBag size={13} />
            <span>ADD TO BAG</span>
          </button>
        </div>

      </div>

    </div>
  );
};
