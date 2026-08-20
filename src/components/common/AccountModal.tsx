import React, { useState } from 'react';
import { X, User, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-100 p-6 sm:p-8">
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-drip-charcoal rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Logo & Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-drip-orange/10 rounded-full mb-3 text-drip-orange">
              <User size={24} />
            </div>
            <h3 className="text-xl font-extrabold uppercase font-display tracking-tight text-drip-charcoal">
              Welcome To <span className="text-drip-orange">DRIPCROC</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Enter mobile number to track orders or claim member discounts.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-gray-600 mb-1.5">
                  Mobile Number (India)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-xs font-bold text-gray-500 border-r border-gray-300 pr-2">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                    className="w-full pl-14 pr-4 py-3 bg-drip-gray-surface border border-gray-200 rounded-lg text-sm font-bold text-drip-charcoal focus:outline-none focus:ring-2 focus:ring-drip-orange/30 focus:border-drip-orange"
                  />
                  <Phone size={18} className="absolute right-3 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-drip-orange text-white py-3 rounded-lg font-extrabold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md"
              >
                <span>Get OTP & Login</span>
                <ArrowRight size={16} />
              </button>

              <div className="text-center pt-2">
                <p className="text-[11px] text-gray-400">
                  By logging in, you agree to DripCroc Terms of Service & Privacy Policy.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-extrabold text-base text-drip-charcoal">OTP Sent to +91 {phoneNumber}</h4>
              <p className="text-xs text-gray-500">
                Enter code <strong>4 3 2 1</strong> to complete client prototype login.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-drip-charcoal text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
