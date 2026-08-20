import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CheckoutModal } from '../checkout/CheckoutModal';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal, savings, totalItems } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const freeShippingThreshold = 999;
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'LOOTPAAT50' || couponCode.toUpperCase() === 'WELCOME200') {
      setAppliedDiscount(150);
    }
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300">
            
            {/* Drawer Header */}
            <div className="p-4 sm:p-6 bg-drip-charcoal text-white flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-drip-orange animate-bounce" size={22} />
                <h2 className="font-black text-lg uppercase tracking-tight font-display">
                  YOUR DRIP BAG <span className="text-drip-orange">({totalItems})</span>
                </h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
                aria-label="Close Cart Drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="bg-drip-orange/10 p-4 border-b border-drip-orange/20">
              {amountForFreeShipping > 0 ? (
                <p className="text-xs font-bold text-drip-charcoal mb-2">
                  YOU'RE <span className="text-drip-orange font-black">₹{amountForFreeShipping}</span> AWAY FROM <span className="uppercase font-black">FREE SHIPPING</span> 🚚
                </p>
              ) : (
                <p className="text-xs font-black text-emerald-600 mb-2 flex items-center gap-1">
                  <Sparkles size={14} />
                  <span>CONGRATULATIONS! YOU UNLOCKED FREE PAN INDIA SHIPPING!</span>
                </p>
              )}
              <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-drip-orange h-full transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="p-4 bg-drip-gray-surface rounded-full text-gray-400 mb-4">
                    <ShoppingBag size={48} />
                  </div>
                  <h3 className="font-bold text-lg text-drip-charcoal">Your bag is empty</h3>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs">
                    Looks like you haven't added any oversized tees or denim yet.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 bg-drip-orange text-white px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors shadow-drip-md"
                  >
                    Explore New Drops
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-3.5 bg-drip-gray-surface rounded-xl border border-gray-200 relative group transition-all hover:border-gray-300">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover object-center rounded-lg bg-white flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-xs text-drip-charcoal line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(idx)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <div className="flex gap-2 text-[11px] text-gray-500 mt-1">
                          <span>Color: <strong className="text-drip-charcoal">{item.selectedColor.name}</strong></span>
                          <span>•</span>
                          <span>Size: <strong className="text-drip-charcoal">{item.selectedSize}</strong></span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                          <button
                            onClick={() => updateQuantity(idx, item.quantity - 1)}
                            className="px-2.5 py-0.5 text-xs font-bold text-gray-600 hover:text-drip-orange"
                          >
                            -
                          </button>
                          <span className="px-2.5 text-xs font-black text-drip-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(idx, item.quantity + 1)}
                            className="px-2.5 py-0.5 text-xs font-bold text-gray-600 hover:text-drip-orange"
                          >
                            +
                          </button>
                        </div>

                        {/* Item Total Price */}
                        <span className="font-black text-sm text-drip-charcoal">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary & PROCEED TO CHECKOUT */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-6 bg-white border-t border-gray-200 space-y-4">
                
                {/* Coupon Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag size={14} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. LOOTPAAT50)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full text-xs font-bold pl-9 pr-3 py-2.5 bg-drip-gray-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-drip-orange uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-drip-charcoal text-white px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-xs font-bold text-emerald-600 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    <span>Promo Coupon Discount</span>
                    <span>-₹{appliedDiscount}</span>
                  </div>
                )}

                {/* Price Summary Breakdown */}
                <div className="space-y-1.5 text-xs border-t border-gray-100 pt-3 font-semibold">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Total Savings</span>
                    <span>-₹{savings}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Estimated Shipping</span>
                    <span>{amountForFreeShipping === 0 ? 'FREE' : '₹99'}</span>
                  </div>
                  <div className="flex justify-between font-black text-base text-drip-charcoal border-t border-gray-200 pt-2 mt-2 font-display">
                    <span>FINAL TOTAL</span>
                    <span>₹{subtotal - appliedDiscount + (amountForFreeShipping === 0 ? 0 : 99)}</span>
                  </div>
                </div>

                {/* PROCEED TO CHECKOUT BUTTON */}
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutModalOpen(true);
                  }}
                  className="w-full bg-drip-orange text-white py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight size={18} />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-semibold">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Partial COD Accepted • 100% Original DripCroc Guarantee</span>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>

      {/* Prototype Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />
    </>
  );
};
