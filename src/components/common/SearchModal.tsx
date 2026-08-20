import React, { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, ShoppingBag, Eye } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { ProductQuickViewModal } from '../product/ProductQuickViewModal';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const trendingSearches = [
    'Oversized Tee',
    'Cargo',
    'Shirts',
    'Hoodies',
    'New Drop'
  ];

  const filteredProducts: Product[] = query.trim() === ''
    ? []
    : MOCK_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        product.fit.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative min-h-screen flex items-start justify-center pt-12 sm:pt-16 px-4 pb-20">
        <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-200">
          
          {/* Header & Title */}
          <div className="p-5 sm:p-6 bg-drip-charcoal text-white flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-black uppercase font-display tracking-tight text-white flex items-center gap-2">
              <Search size={22} className="text-drip-orange" />
              <span>WHAT ARE YOU LOOKING FOR?</span>
            </h3>
            <button 
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Field */}
          <div className="p-4 sm:p-6 bg-white border-b border-gray-100 flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search oversized tees, cargo pants, hoodies, denim..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-base sm:text-lg font-bold text-drip-charcoal placeholder:text-gray-400 bg-drip-gray-surface px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-drip-orange/30 focus:border-drip-orange"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="p-2 text-gray-400 hover:text-drip-charcoal rounded-full hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Modal Body */}
          <div className="p-6 max-h-[65vh] overflow-y-auto">
            
            {query.trim() === '' ? (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
                    <TrendingUp size={14} className="text-drip-orange" />
                    <span>Trending Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="bg-drip-gray-surface hover:bg-drip-orange hover:text-white text-drip-charcoal text-xs font-bold px-4 py-2 rounded-full border border-gray-200 transition-all"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Drops Preview */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-4">
                    Top Drip Drops
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {MOCK_PRODUCTS.slice(0, 3).map((prod) => (
                      <div 
                        key={prod.id}
                        onClick={() => setSelectedProduct(prod)}
                        className="group flex gap-3 p-2.5 rounded-xl bg-drip-gray-surface hover:bg-white cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-sm transition-all"
                      >
                        <img 
                          src={prod.images[0]} 
                          alt={prod.name} 
                          className="w-14 h-18 object-cover rounded-lg bg-gray-100 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-drip-orange uppercase">{prod.fit}</span>
                          <h5 className="text-xs font-bold text-drip-charcoal truncate group-hover:text-drip-orange transition-colors">
                            {prod.name}
                          </h5>
                          <span className="text-xs font-black text-drip-charcoal">₹{prod.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Real-time Search Results */
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black text-gray-500 uppercase tracking-wider">
                    Search Results ({filteredProducts.length})
                  </span>
                  {filteredProducts.length > 0 && (
                    <span className="text-xs font-bold text-drip-orange">
                      Live Catalog Matches
                    </span>
                  )}
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-sm font-bold text-drip-charcoal">No products found for "{query}"</p>
                    <p className="text-xs text-gray-500 mt-1">Try searching for "Tee", "Cargo", "Denim", or "Hoodie".</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredProducts.map((product) => (
                      <div 
                        key={product.id}
                        className="flex gap-4 p-3 bg-drip-gray-surface rounded-xl border border-gray-200 hover:border-drip-orange transition-all group relative"
                      >
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-20 h-24 object-cover rounded-lg bg-white flex-shrink-0 cursor-pointer"
                          onClick={() => setSelectedProduct(product)}
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                            <span className="text-[10px] font-black text-drip-orange uppercase">
                              {product.categoryLabel}
                            </span>
                            <h4 className="text-xs font-bold text-drip-charcoal group-hover:text-drip-orange transition-colors line-clamp-1">
                              {product.name}
                            </h4>
                            <p className="text-[11px] text-gray-500 mt-0.5">
                              Fit: {product.fit}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm font-black text-drip-charcoal">₹{product.price}</span>
                            <button
                              onClick={() => {
                                addToCart(product, product.colors[0], product.sizes[0], 1);
                              }}
                              className="bg-drip-orange text-white px-3 py-1.5 rounded-lg hover:bg-drip-orange-hover transition-colors flex items-center gap-1 text-[11px] font-bold uppercase"
                            >
                              <ShoppingBag size={12} />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
