import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown, SlidersHorizontal, RefreshCw, X } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES } from '../data/mockProducts';
import { ProductCard } from '../components/product/ProductCard';
import { ProductQuickViewModal } from '../components/product/ProductQuickViewModal';
import { Product } from '../types/product';

export const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedFit, setSelectedFit] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(4000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'newest' | 'price-low' | 'price-high'>('recommended');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const sizesList = ['S', 'M', 'L', 'XL', 'XXL'];
  const fitsList = ['Oversized', 'Boxy Fit', 'Straight Fit', 'Relaxed Fit'];

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
      if (selectedSize && !product.sizes.includes(selectedSize as any)) return false;
      if (selectedFit && product.fit !== selectedFit) return false;
      if (product.price > priceRange) return false;
      if (inStockOnly && !product.inStock) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return b.isNewArrival ? 1 : -1;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, selectedSize, selectedFit, priceRange, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSize(null);
    setSelectedFit(null);
    setPriceRange(4000);
    setInStockOnly(false);
    setSortBy('recommended');
  };

  return (
    <div className="bg-white min-h-screen py-10 text-drip-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-gray-100 pb-8 mb-8">
          <span className="text-xs font-black uppercase text-drip-orange tracking-widest block mb-1">
            OFFICIAL CATALOGUE
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-drip-charcoal">
                MEN'S <span className="text-drip-orange">COLLECTION</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
                Explore tailored streetwear cuts, 240+ GSM combed cottons, and vintage washed denim.
              </p>
            </div>
            
            <div className="text-xs font-bold text-gray-400">
              Showing <strong className="text-drip-charcoal font-black">{filteredProducts.length}</strong> of {MOCK_PRODUCTS.length} Drops
            </div>
          </div>
        </div>

        {/* Toolbar (Mobile Filter Button & Sort Dropdown) */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 gap-4">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden bg-drip-gray-surface hover:bg-gray-200 text-drip-charcoal px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-gray-200"
          >
            <SlidersHorizontal size={16} className="text-drip-orange" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:inline">Sort By:</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-drip-gray-surface text-drip-charcoal text-xs font-extrabold pl-4 pr-10 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-drip-orange uppercase"
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest Drops</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* DESKTOP SIDEBAR FILTERS */}
          <div className="hidden lg:block lg:col-span-3 space-y-6 bg-drip-gray-surface p-6 rounded-2xl border border-gray-200 h-fit">
            
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <h3 className="font-black text-xs uppercase tracking-wider text-drip-charcoal flex items-center gap-2 font-display">
                <Filter size={14} className="text-drip-orange" />
                <span>CATALOGUE FILTERS</span>
              </h3>
              <button 
                onClick={resetFilters} 
                className="text-[11px] font-bold text-gray-400 hover:text-drip-orange flex items-center gap-1 transition-colors"
              >
                <RefreshCw size={10} /> Reset
              </button>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider block">Category</label>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-extrabold transition-all flex justify-between items-center ${
                      selectedCategory === cat.id
                        ? 'bg-drip-orange text-white shadow-sm'
                        : 'text-drip-charcoal hover:bg-gray-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] font-bold opacity-80">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fit Filter */}
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider block">Silhouette / Fit</label>
              <div className="space-y-1">
                {fitsList.map((fit) => (
                  <button
                    key={fit}
                    onClick={() => setSelectedFit(selectedFit === fit ? null : fit)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedFit === fit
                        ? 'bg-drip-charcoal text-white'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {fit}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider block">Size</label>
              <div className="flex flex-wrap gap-1.5">
                {sizesList.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`text-xs font-bold w-9 h-8 rounded-lg border transition-all ${
                      selectedSize === size
                        ? 'bg-drip-orange text-white border-drip-orange'
                        : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <div className="flex justify-between items-center text-xs">
                <label className="font-extrabold uppercase text-gray-500 tracking-wider">Max Price</label>
                <span className="font-black text-drip-orange">₹{priceRange}</span>
              </div>
              <input
                type="range"
                min={999}
                max={4000}
                step={100}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-drip-orange cursor-pointer"
              />
            </div>

          </div>

          {/* MAIN PRODUCT GRID */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-drip-gray-surface rounded-2xl border border-gray-200">
                <p className="text-base font-bold text-drip-charcoal">No products match your active filters.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 bg-drip-orange text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-drip-orange-hover transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
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

        </div>

      </div>

      {/* MOBILE FILTER DRAWER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              
              <div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
                  <h3 className="font-black text-sm uppercase tracking-wider text-drip-charcoal flex items-center gap-2">
                    <Filter size={16} className="text-drip-orange" />
                    <span>Filter Catalogue</span>
                  </h3>
                  <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-gray-400 hover:text-drip-charcoal">
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Category</label>
                    <div className="space-y-1">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                            selectedCategory === cat.id
                              ? 'bg-drip-orange text-white'
                              : 'bg-drip-gray-surface text-drip-charcoal'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {sizesList.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                          className={`text-xs font-bold w-10 h-9 rounded-xl border ${
                            selectedSize === size ? 'bg-drip-orange text-white border-drip-orange' : 'border-gray-200'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-3">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full bg-drip-orange text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider"
                >
                  Apply Filters ({filteredProducts.length})
                </button>
                <button
                  onClick={resetFilters}
                  className="w-full bg-drip-gray-surface text-drip-charcoal py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider"
                >
                  Reset
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
