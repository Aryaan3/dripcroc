import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Truck, CreditCard, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BRAND_INFO } from '../../data/brandInfo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, subtotal, savings, clearCart } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'shipping' | 'pickup'>('shipping');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  if (!isOpen) return null;

  const freeShippingThreshold = 999;
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 99;
  const finalTotal = subtotal + shippingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  const handleFinishDemo = () => {
    clearCart();
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-200">
          
          {/* Header */}
          <div className="p-4 sm:p-6 bg-drip-charcoal text-white flex items-center justify-between border-b border-neutral-800">
            <div>
              <span className="text-[10px] font-black text-drip-orange uppercase tracking-widest block">
                PROTOTYPE DEMO CHECKOUT
              </span>
              <h3 className="text-xl font-black uppercase font-display tracking-tight text-white">
                CHECKOUT EXPERIENCE
              </h3>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {!orderComplete ? (
            <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
              
              {/* Notice Banner */}
              <div className="bg-drip-orange/10 border border-drip-orange/30 p-4 rounded-xl text-xs text-drip-charcoal font-semibold">
                ℹ️ <strong>Client Prototype Note:</strong> This is a prototype checkout demonstrating the end-to-end shopping experience. No actual payment will be charged.
              </div>

              {/* Order Items Brief */}
              <div className="bg-drip-gray-surface p-4 rounded-xl border border-gray-200 space-y-3">
                <h4 className="text-xs font-black uppercase text-drip-charcoal flex items-center justify-between">
                  <span>Order Bag Items ({cart.length})</span>
                  <span className="text-drip-orange font-black text-sm">₹{finalTotal}</span>
                </h4>
                <div className="divide-y divide-gray-200">
                  {cart.map((item, idx) => (
                    <div key={idx} className="py-2 flex items-center justify-between text-xs font-medium">
                      <div className="flex items-center gap-2">
                        <img src={item.product.images[0]} alt="" className="w-8 h-10 object-cover rounded" />
                        <span className="font-bold truncate max-w-[200px]">{item.product.name}</span>
                        <span className="text-gray-400">({item.selectedSize} / {item.selectedColor.name}) x{item.quantity}</span>
                      </div>
                      <span className="font-black text-drip-charcoal">₹{item.product.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Option Switcher */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase text-gray-600">
                  Delivery Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('shipping')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left flex items-center gap-2 transition-all ${
                      deliveryType === 'shipping' 
                        ? 'border-drip-orange bg-drip-orange/10 text-drip-charcoal ring-2 ring-drip-orange/20' 
                        : 'border-gray-200 bg-white text-gray-600'
                    }`}
                  >
                    <Truck size={18} className="text-drip-orange" />
                    <div>
                      <span className="block font-black uppercase">Pan India Delivery</span>
                      <span className="text-[10px] text-gray-500 font-normal">3–5 Days Express</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left flex items-center gap-2 transition-all ${
                      deliveryType === 'pickup' 
                        ? 'border-drip-orange bg-drip-orange/10 text-drip-charcoal ring-2 ring-drip-orange/20' 
                        : 'border-gray-200 bg-white text-gray-600'
                    }`}
                  >
                    <MapPin size={18} className="text-drip-orange" />
                    <div>
                      <span className="block font-black uppercase">Bhilwara Store Pickup</span>
                      <span className="text-[10px] text-gray-500 font-normal">Ready in 2 Hours</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Delivery Details Form */}
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1 uppercase">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-drip-gray-surface border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold text-drip-charcoal focus:outline-none focus:ring-2 focus:ring-drip-orange/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1 uppercase">Phone Number (WhatsApp)</label>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-drip-gray-surface border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold text-drip-charcoal focus:outline-none focus:ring-2 focus:ring-drip-orange/30"
                    />
                  </div>
                </div>

                {deliveryType === 'shipping' && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 mb-1 uppercase">Delivery Address</label>
                      <input
                        type="text"
                        required
                        placeholder="House No, Street Name, Area"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-drip-gray-surface border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold text-drip-charcoal focus:outline-none focus:ring-2 focus:ring-drip-orange/30"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 mb-1 uppercase">City / State</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Bhilwara / Rajasthan"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-drip-gray-surface border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold text-drip-charcoal focus:outline-none focus:ring-2 focus:ring-drip-orange/30"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 mb-1 uppercase">Pincode</label>
                        <input
                          type="text"
                          required
                          placeholder="311001"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          className="w-full bg-drip-gray-surface border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold text-drip-charcoal focus:outline-none focus:ring-2 focus:ring-drip-orange/30"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Payment Options */}
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <label className="block text-xs font-extrabold uppercase text-gray-600">Payment Option</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 p-3 bg-drip-gray-surface rounded-lg border border-gray-200 cursor-pointer text-xs font-bold">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={formData.paymentMethod === 'cod'} 
                        onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })} 
                        className="accent-drip-orange"
                      />
                      <CreditCard size={16} className="text-drip-orange" />
                      <span>Partial Cash On Delivery (COD) — Pay ₹100 deposit, rest on delivery</span>
                    </label>

                    <label className="flex items-center gap-2 p-3 bg-drip-gray-surface rounded-lg border border-gray-200 cursor-pointer text-xs font-bold">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={formData.paymentMethod === 'upi'} 
                        onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })} 
                        className="accent-drip-orange"
                      />
                      <span>UPI / Google Pay / PhonePe / Paytm (Prepaid Express)</span>
                    </label>
                  </div>
                </div>

                {/* Place Order CTA */}
                <button
                  type="submit"
                  className="w-full bg-drip-orange text-white py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md mt-4"
                >
                  <span>COMPLETE PROTOTYPE ORDER • ₹{finalTotal}</span>
                  <ArrowRight size={18} />
                </button>
              </form>

            </div>
          ) : (
            /* Order Success Confirmation Screen */
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>

              <div>
                <span className="text-xs font-black text-drip-orange uppercase tracking-widest block">
                  DEMO ORDER CONFIRMED!
                </span>
                <h3 className="text-2xl font-black uppercase font-display text-drip-charcoal mt-1">
                  ORDER #DRIP-2026-884
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto mt-2 font-medium">
                  Thank you! WhatsApp confirmation update sent to <strong>+91 {formData.phone || '9876543210'}</strong>.
                </p>
              </div>

              <div className="bg-drip-gray-surface p-4 rounded-xl border border-gray-200 text-xs text-left max-w-md mx-auto space-y-1 font-medium">
                <p><strong>Customer:</strong> {formData.fullName || 'Aryan Sharma'}</p>
                <p><strong>Delivery:</strong> {deliveryType === 'pickup' ? 'Bhilwara Retail Outlet Store Pickup' : `${formData.address || 'Bhilwara'}, ${formData.city || 'Rajasthan'}`}</p>
                <p><strong>Total Paid Demo:</strong> ₹{finalTotal}</p>
              </div>

              <button
                onClick={handleFinishDemo}
                className="bg-drip-charcoal text-white px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider hover:bg-black transition-colors"
              >
                Back To Prototype Experience
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
