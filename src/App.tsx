import React, { useState } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ShopPage } from './pages/ShopPage';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Sparkles, Monitor, ShoppingBag, Grid } from 'lucide-react';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'product' | 'shop'>('home');

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen flex flex-col bg-white text-drip-charcoal antialiased">
          
          {/* Client Presentation Control Bar */}
          <div className="bg-drip-charcoal text-white text-[11px] font-bold py-2 px-4 flex flex-wrap justify-between items-center border-b border-neutral-800 gap-2 select-none z-50">
            <div className="flex items-center gap-2">
              <span className="bg-drip-orange/20 text-drip-orange px-2.5 py-0.5 rounded-full border border-drip-orange/30 font-black uppercase text-[10px] tracking-wider flex items-center gap-1">
                <Sparkles size={12} />
                <span>Client Presentation Prototype</span>
              </span>
              <span className="text-neutral-400 hidden sm:inline">• Official DripCroc Interactive Prototype</span>
            </div>

            {/* View Switcher Controls */}
            <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-lg border border-neutral-800">
              <button
                onClick={() => setActivePage('home')}
                className={`px-3 py-1 rounded-md text-[10px] uppercase font-black transition-all flex items-center gap-1.5 ${
                  activePage === 'home' 
                    ? 'bg-drip-orange text-white shadow-sm' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Monitor size={12} />
                <span>Homepage</span>
              </button>

              <button
                onClick={() => setActivePage('shop')}
                className={`px-3 py-1 rounded-md text-[10px] uppercase font-black transition-all flex items-center gap-1.5 ${
                  activePage === 'shop' 
                    ? 'bg-drip-orange text-white shadow-sm' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Grid size={12} />
                <span>Men's Shop</span>
              </button>

              <button
                onClick={() => setActivePage('product')}
                className={`px-3 py-1 rounded-md text-[10px] uppercase font-black transition-all flex items-center gap-1.5 ${
                  activePage === 'product' 
                    ? 'bg-drip-orange text-white shadow-sm' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <ShoppingBag size={12} />
                <span>Product Detail</span>
              </button>
            </div>
          </div>

          <Header />
          
          <main className="flex-1 w-full">
            {activePage === 'home' && <HomePage />}
            {activePage === 'shop' && <ShopPage />}
            {activePage === 'product' && <ProductDetailPage onBackToHome={() => setActivePage('home')} />}
          </main>

          <Footer />
          <CartDrawer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
