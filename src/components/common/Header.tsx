import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, User, ChevronDown, Flame, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { AnnouncementBar } from './AnnouncementBar';
import { SearchModal } from './SearchModal';
import { AccountModal } from './AccountModal';
import { WishlistDrawer } from './WishlistDrawer';

export const Header: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Scroll listener for sticky navbar transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'MEN', href: '#men', badge: null, hasDropdown: true },
    { name: 'WOMEN', href: '#women', badge: null, hasDropdown: true },
    { name: 'NEW ARRIVALS', href: '#new-arrivals', badge: 'NEW', highlightBadge: false },
    { name: 'COLLECTIONS', href: '#collections', badge: null, hasDropdown: true },
    { name: 'BESTSELLERS', href: '#bestsellers', badge: null },
    { name: 'SALE', href: '#sale', badge: '50% OFF', highlightBadge: true },
  ];

  const collectionsDropdownItems = [
    { label: 'Oversized Resort Shirts', count: '24 Drops', href: '#resort-shirts' },
    { label: 'Retro Heritage Jerseys', count: '18 Drops', href: '#oversized-tees' },
    { label: '14oz Vintage Washed Denim', count: '16 Drops', href: '#denim' },
    { label: '400 GSM Fleece Hoodies', count: '12 Drops', href: '#hoodies' },
    { label: 'Tactical Utility Cargos', count: '14 Drops', href: '#cargos' },
  ];

  return (
    <>
      <div className="sticky top-0 z-40 w-full transition-all duration-300">
        
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Main Navbar */}
        <nav 
          className={`w-full transition-all duration-300 border-b ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-gray-200' 
              : 'bg-white py-4.5 border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              
              {/* LEFT: Mobile Menu Button & DripCroc Logo */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-1.5 text-drip-charcoal hover:text-drip-orange focus:outline-none lg:hidden transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu size={24} />
                </button>

                {/* Clean Official DripCroc Logo */}
                <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
                  <img 
                    src="/assets/dripcroc-badge.png" 
                    alt="DRIPCROC Emblem" 
                    className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex flex-col">
                    <span className="font-extrabold text-xl sm:text-2xl tracking-tighter uppercase font-display text-drip-charcoal leading-none group-hover:text-drip-orange transition-colors">
                      DRIP<span className="text-drip-orange">CROC</span>
                    </span>
                    <span className="text-[9px] tracking-widest text-gray-400 uppercase font-semibold mt-0.5">
                      Streetwear Co.
                    </span>
                  </div>
                </a>
              </div>

              {/* CENTER: Navigation Links (Desktop) */}
              <div className="hidden lg:flex items-center gap-7">
                {navLinks.map((link) => (
                  <div 
                    key={link.name} 
                    className="relative py-2 group"
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                  >
                    <a
                      href={link.href}
                      className={`text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1 ${
                        link.name === 'SALE' 
                          ? 'text-drip-orange hover:text-drip-orange-hover font-extrabold' 
                          : 'text-drip-charcoal hover:text-drip-orange'
                      }`}
                    >
                      <span>{link.name}</span>
                      
                      {link.hasDropdown && (
                        <ChevronDown size={12} className="transition-transform group-hover:rotate-180 text-gray-400 group-hover:text-drip-orange" />
                      )}

                      {link.badge && (
                        <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-tight ml-1 ${
                          link.highlightBadge 
                            ? 'bg-drip-orange text-white animate-pulse' 
                            : 'bg-black text-white'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </a>

                    {/* Bottom Indicator Line */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-drip-orange transition-all duration-300 group-hover:w-full" />

                    {/* Mega-Menu Dropdown */}
                    {link.hasDropdown && activeDropdown === link.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50 animate-fadeIn space-y-1">
                        <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1 flex items-center justify-between">
                          <span>Browse Categories</span>
                          <Sparkles size={12} className="text-drip-orange" />
                        </div>
                        {collectionsDropdownItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between px-3 py-2 text-xs font-bold text-drip-charcoal hover:bg-drip-orange/10 hover:text-drip-orange rounded-lg transition-all"
                          >
                            <span>{item.label}</span>
                            <span className="text-[10px] font-semibold text-gray-400">{item.count}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* RIGHT: Search, Account, Wishlist, Cart Icons */}
              <div className="flex items-center gap-1.5 sm:gap-3">
                
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="p-2 text-drip-charcoal hover:text-drip-orange hover:bg-drip-gray-surface rounded-full transition-all focus:outline-none"
                  aria-label="Search DripCroc Products"
                  title="Search Products"
                >
                  <Search size={20} />
                </button>

                <button
                  onClick={() => setAccountModalOpen(true)}
                  className="p-2 text-drip-charcoal hover:text-drip-orange hover:bg-drip-gray-surface rounded-full transition-all focus:outline-none"
                  aria-label="My Account"
                  title="Account"
                >
                  <User size={20} />
                </button>

                <button
                  onClick={() => setWishlistDrawerOpen(true)}
                  className="p-2 text-drip-charcoal hover:text-drip-orange hover:bg-drip-gray-surface rounded-full transition-all relative focus:outline-none"
                  aria-label="Wishlist"
                  title="Wishlist"
                >
                  <Heart size={20} />
                  {wishlist.length > 0 && (
                    <span className="absolute top-1 right-1 bg-drip-orange text-white text-[10px] font-bold h-4.5 w-4.5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {wishlist.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-2 text-drip-charcoal hover:text-drip-orange hover:bg-drip-gray-surface rounded-full transition-all relative focus:outline-none flex items-center gap-1.5"
                  aria-label="Shopping Cart"
                  title="Shopping Cart"
                >
                  <div className="relative">
                    <ShoppingBag size={20} />
                    {totalItems > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-drip-orange text-white text-[10px] font-extrabold h-4.5 w-4.5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                        {totalItems}
                      </span>
                    )}
                  </div>
                </button>

              </div>

            </div>
          </div>
        </nav>

      </div>

      {/* MOBILE SLIDE-IN MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 max-w-full flex">
            <div className="w-screen max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between">
              
              <div>
                <div className="p-4 sm:p-6 bg-drip-charcoal text-white flex items-center justify-between border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="/assets/dripcroc-badge.png" 
                      alt="DRIPCROC Logo" 
                      className="h-8 w-8 object-contain rounded"
                    />
                    <span className="font-extrabold text-xl tracking-tighter uppercase font-display">
                      DRIP<span className="text-drip-orange">CROC</span>
                    </span>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="p-4 sm:p-6 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-extrabold uppercase tracking-wider transition-colors ${
                        link.name === 'SALE' 
                          ? 'bg-drip-orange/10 text-drip-orange font-black' 
                          : 'text-drip-charcoal hover:bg-drip-gray-surface hover:text-drip-orange'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {link.name === 'SALE' && <Flame size={16} className="text-drip-orange" />}
                        <span>{link.name}</span>
                      </div>
                      {link.badge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          link.highlightBadge ? 'bg-drip-orange text-white' : 'bg-black text-white'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-drip-gray-surface border-t border-gray-200 space-y-3">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAccountModalOpen(true);
                  }}
                  className="w-full bg-drip-charcoal text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
                >
                  <User size={16} />
                  <span>My DripCroc Account</span>
                </button>
                <div className="text-center text-[10px] text-gray-500 font-semibold">
                  Flagship Store: Bhilwara, Rajasthan • Pan India Delivery
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Global Interactive Modals */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
      
      <AccountModal 
        isOpen={accountModalOpen} 
        onClose={() => setAccountModalOpen(false)} 
      />

      <WishlistDrawer 
        isOpen={wishlistDrawerOpen} 
        onClose={() => setWishlistDrawerOpen(false)} 
      />
    </>
  );
};
