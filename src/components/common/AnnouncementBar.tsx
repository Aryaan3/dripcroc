import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ANNOUNCEMENTS = [
  "FREE SHIPPING ON ORDERS ABOVE ₹999",
  "NEW DROP • NOW LIVE",
  "PARTIAL COD ACCEPTED • PAN INDIA DELIVERY",
  "LOOTPAAT SALE • FLAT 50% OFF ON SELECTED DROPS"
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ANNOUNCEMENTS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ANNOUNCEMENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <div className="bg-drip-orange text-white text-xs font-bold py-2 px-4 relative z-50 overflow-hidden shadow-sm select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Control */}
        <button 
          onClick={handlePrev}
          className="text-white/80 hover:text-white transition-colors p-0.5 hidden sm:block"
          aria-label="Previous announcement"
        >
          <ChevronLeft size={14} />
        </button>

        {/* Center Rotating Text */}
        <div className="flex-1 text-center transition-all duration-500 ease-in-out">
          <span className="tracking-widest uppercase font-semibold text-xs inline-block animate-fadeIn">
            ⚡ {ANNOUNCEMENTS[currentIndex]} ⚡
          </span>
        </div>

        {/* Right Control */}
        <button 
          onClick={handleNext}
          className="text-white/80 hover:text-white transition-colors p-0.5 hidden sm:block"
          aria-label="Next announcement"
        >
          <ChevronRight size={14} />
        </button>

      </div>
    </div>
  );
};
