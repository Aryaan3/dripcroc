import React, { useState } from 'react';
import { Send, CheckCircle2, Flame, Mail } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-drip-charcoal text-white relative overflow-hidden border-t border-neutral-800">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-drip-orange/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-drip-orange/20 text-drip-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-drip-orange/30">
          <Flame size={14} />
          <span>VIP DROP NOTIFICATIONS</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-white leading-tight">
          GET THE NEXT <span className="text-drip-orange">DROP FIRST.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-xs sm:text-base text-neutral-300 max-w-lg mx-auto font-medium">
          New arrivals, exclusive offers and DripCroc updates.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
            <div className="relative flex-1">
              <Mail size={18} className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-700 text-white pl-11 pr-4 py-3.5 rounded-xl text-xs font-bold placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-drip-orange focus:border-drip-orange"
              />
            </div>
            
            <button
              type="submit"
              className="bg-drip-orange text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors flex items-center justify-center gap-2 shadow-drip-md"
            >
              <span>JOIN US</span>
              <Send size={14} />
            </button>
          </form>
        ) : (
          <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-3 text-white">
            <CheckCircle2 size={24} className="text-drip-orange" />
            <div className="text-left">
              <h4 className="font-extrabold text-sm uppercase text-white">Welcome To The VIP Drop List!</h4>
              <p className="text-xs text-gray-400">Check your inbox for your ₹200 drop voucher.</p>
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
