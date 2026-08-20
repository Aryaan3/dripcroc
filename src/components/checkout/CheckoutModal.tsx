import React, { useState } from 'react';
import { X, CheckCircle2, Truck, Store, CreditCard, Lock, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { subtotal, clearCart, totalItems } = useCart();

  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'prepaid'>('cod');
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Rajasthan',
    pincode: '',
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `DRIP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setOrderComplete(true);
    clearCart();
  };

  const freeShippingThreshold = 999;
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 99;
  const codDeposit = 150;
  const finalTotal = subtotal + shippingFee;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100 my-8">
        
        {/* Header */}
        <div className="bg-drip-charcoal text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-drip-orange uppercase tracking-widest block mb-0.5">
              PROTOTYPE DEMO CHECKOUT
            </span>
            <h2 className="text-xl font-black uppercase font-display">
              CHECKOUT EXPERIENCE
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {!orderComplete ? (
          <form onSubmit={handlePlaceOrder} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Delivery Method Switcher */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-drip-charcoal block">
                1. SELECT DELIVERY METHOD
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('delivery')}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    deliveryMethod === 'delivery'
                      ? 'border-drip-orange bg-drip-orange/5 ring-1 ring-drip-orange'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Truck size={20} className={deliveryMethod === 'delivery' ? 'text-drip-orange' : 'text-gray-400'} />
                  <div>
                    <h4 className="text-xs font-bold text-drip-charcoal">Pan India Express</h4>
                    <p className="text-[10px] text-gray-500 font-semibold">Delivered in 3-5 days</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    deliveryMethod === 'pickup'
                      ? 'border-drip-orange bg-drip-orange/5 ring-1 ring-drip-orange'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Store size={20} className={deliveryMethod === 'pickup' ? 'text-drip-orange' : 'text-gray-400'} />
                  <div>
                    <h4 className="text-xs font-bold text-drip-charcoal">Store Pickup</h4>
                    <p className="text-[10px] text-gray-500 font-semibold">Bhilwara Outlet</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Customer Contact & Address Form */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-drip-charcoal block">
                2. SHIPPING DETAILS
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full text-xs font-semibold px-3 py-2.5 bg-drip-gray-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-drip-orange"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Phone Number (+91)</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="10-digit WhatsApp number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full text-xs font-semibold px-3 py-2.5 bg-drip-gray-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-drip-orange"
                  />
                </div>
              </div>

              {deliveryMethod === 'delivery' && (
                <>
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Delivery Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="House/Flat No., Street, Area"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full text-xs font-semibold px-3 py-2.5 bg-drip-gray-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-drip-orange"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g. Jaipur"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full text-xs font-semibold px-3 py-2.5 bg-drip-gray-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-drip-orange"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">State</label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full text-xs font-semibold px-3 py-2.5 bg-drip-gray-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-drip-orange"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        placeholder="6 digits"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full text-xs font-semibold px-3 py-2.5 bg-drip-gray-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-drip-orange"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-drip-charcoal block">
                3. PAYMENT METHOD
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-drip-orange bg-drip-orange/5 ring-1 ring-drip-orange'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <CreditCard size={20} className={paymentMethod === 'cod' ? 'text-drip-orange' : 'text-gray-400'} />
                  <div>
                    <h4 className="text-xs font-bold text-drip-charcoal">Partial COD</h4>
                    <p className="text-[10px] text-gray-500 font-semibold">₹150 deposit + rest on delivery</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('prepaid')}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    paymentMethod === 'prepaid'
                      ? 'border-drip-orange bg-drip-orange/5 ring-1 ring-drip-orange'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Lock size={20} className={paymentMethod === 'prepaid' ? 'text-drip-orange' : 'text-gray-400'} />
                  <div>
                    <h4 className="text-xs font-bold text-drip-charcoal">Prepaid UPI / Cards</h4>
                    <p className="text-[10px] text-gray-500 font-semibold">Instant discount ₹50</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Order Summary Breakdown */}
            <div className="bg-drip-gray-surface p-4 rounded-xl space-y-2 text-xs border border-gray-200">
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Items Subtotal ({totalItems})</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Shipping Fee</span>
                <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
              </div>

              {paymentMethod === 'cod' && (
                <div className="flex justify-between text-drip-orange font-bold border-t border-gray-200 pt-1.5 mt-1.5">
                  <span>Advance COD Deposit Required:</span>
                  <span>₹{codDeposit}</span>
                </div>
              )}

              <div className="flex justify-between text-base font-black text-drip-charcoal border-t border-gray-200 pt-2 font-display">
                <span>TOTAL AMOUNT</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>

            {/* Submit Order Button */}
            <button
              type="submit"
              className="w-full bg-drip-orange text-white py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md"
            >
              <span>COMPLETE DEMO ORDER • ₹{finalTotal}</span>
              <ArrowRight size={18} />
            </button>

          </form>
        ) : (
          /* Order Confirmation Receipt Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="text-xs font-extrabold text-drip-orange uppercase tracking-widest block mb-1">
                PROTOTYPE ORDER CONFIRMED
              </span>
              <h3 className="text-2xl font-black uppercase font-display text-drip-charcoal">
                THANK YOU FOR YOUR ORDER!
              </h3>
              <p className="text-xs font-mono font-bold text-gray-500 mt-1">
                Order ID: <span className="text-drip-charcoal">{orderId}</span>
              </p>
            </div>

            <div className="bg-drip-gray-surface p-4 rounded-2xl text-xs text-left space-y-2 border border-gray-200 max-w-md mx-auto font-medium text-gray-600">
              <p>• <strong>Name:</strong> {formData.fullName || 'Rahul Sharma'}</p>
              <p>• <strong>Phone:</strong> {formData.phone || '+91 9876543210'}</p>
              <p>• <strong>Delivery Method:</strong> {deliveryMethod === 'delivery' ? 'Pan India Express Shipping' : 'Bhilwara Flagship Store Pickup'}</p>
              <p>• <strong>Payment Status:</strong> {paymentMethod === 'cod' ? `Partial COD (Deposit ₹${codDeposit} pending)` : 'Prepaid Verified'}</p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => {
                  setOrderComplete(false);
                  onClose();
                }}
                className="bg-drip-charcoal text-white px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-black transition-colors"
              >
                Back To Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
