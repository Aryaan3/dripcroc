import React, { useState } from 'react';
import { Search, X, TrendingUp } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { ProductCard } from '../product/ProductCard';
import { ProductQuickViewModal } from '../product/ProductQuickViewModal';
import { Product } from '../../types/product';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  if (!isOpen) return null;

  const popularSearches = ['Oversized Tee', 'Wide Denim', 'Resort Shirt', 'Hoodie', 'Retro Jersey'];

  const filteredProducts = searchTerm.trim() === '' 
    ? [] 
    : MOCK_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4">
        
        <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-gray-100 animate-fadeIn text-drip-charcoal">
          
          {/* Search Header */}
          <div className="p-6 border-b border-gray-100 flex items-center gap-4">
            <Search size={22} className="text-drip-orange flex-shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="WHAT ARE YOU LOOKING FOR? (e.g. Oversized Tee, Denim...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-base sm:text-lg font-bold placeholder:text-gray-400 focus:outline-none uppercase font-display"
            />
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-drip-charcoal rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {searchTerm.trim() === '' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <TrendingUp size={14} className="text-drip-orange" />
                  <span>TRENDING SEARCHES</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchTerm(term)}
                      className="bg-drip-gray-surface hover:bg-drip-orange hover:text-white px-4 py-2 rounded-full text-xs font-extrabold transition-colors border border-gray-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  SEARCH RESULTS ({filteredProducts.length})
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-sm font-bold text-gray-500">No drops found for "{searchTerm}"</p>
                    <p className="text-xs text-gray-400 mt-1">Try searching for "Denim", "Jersey", or "Shirt"</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onQuickView={(p) => setQuickViewProduct(p)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
};
