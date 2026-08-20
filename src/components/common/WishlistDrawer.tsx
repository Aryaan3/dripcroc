import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ isOpen, onClose }) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-6 bg-drip-charcoal text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="text-drip-orange fill-drip-orange" size={22} />
              <h2 className="font-extrabold text-lg uppercase tracking-tight font-display">
                Your Wishlist <span className="text-drip-orange">({wishlist.length})</span>
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* List of Wishlisted Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="p-4 bg-drip-gray-surface rounded-full text-gray-400 mb-4">
                  <Heart size={48} />
                </div>
                <h3 className="font-bold text-lg text-drip-charcoal">Your wishlist is empty</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-xs">
                  Save your favorite oversized tees and drops by tapping the heart icon on any product.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 bg-drip-orange text-white px-6 py-2.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors"
                >
                  Explore Drops
                </button>
              </div>
            ) : (
              wishlist.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-drip-gray-surface rounded-lg border border-gray-100 relative group">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded bg-white flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-xs text-drip-charcoal line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(item)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          title="Remove from Wishlist"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <span className="text-[10px] font-bold text-drip-orange uppercase mt-0.5 inline-block">
                        {item.fit}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="font-extrabold text-sm text-drip-charcoal">
                        ₹{item.price}
                      </span>
                      <button
                        onClick={() => {
                          addToCart(item, item.colors[0], item.sizes[0], 1);
                          toggleWishlist(item);
                        }}
                        className="bg-drip-orange text-white px-3 py-1.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center gap-1.5"
                      >
                        <ShoppingBag size={12} />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
