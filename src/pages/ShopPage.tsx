import React, { useState, useMemo } from 'react';
import { Filter, X, ChevronDown, SlidersHorizontal, RotateCcw, Check, Sparkles } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES } from '../data/mockProducts';
import { ProductCard } from '../components/product/ProductCard';
import { ProductQuickViewModal } from '../components/product/ProductQuickViewModal';
import { Product, ProductSize } from '../types/product';

export const ShopPage: React.FC = () => {
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedFit, setSelectedFit] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>('recommended');
  
  // Mobile Filter Drawer State
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  
  // Quick View Modal State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Available Sizes & Fits
  const sizesList = ['S', 'M', 'L', 'XL', 'XXL'];
  const fitsList = ['Oversized', 'Relaxed Fit', 'Boxy Fit', 'Straight Fit'];

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSize('all');
    setSelectedFit('all');
    setMaxPrice(3000);
    setInStockOnly(false);
    setSortOption('recommended');
  };

  // Filter Active Count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedSize !== 'all') count++;
    if (selectedFit !== 'all') count++;
    if (maxPrice < 3000) count++;
    if (inStockOnly) count++;
    return count;
  }, [selectedCategory, selectedSize, selectedFit, maxPrice, inStockOnly]);

  // Live Filtered & Sorted Products
  const processedProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    // Filter Category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter Size
    if (selectedSize !== 'all') {
      result = result.filter(p => p.sizes.includes(selectedSize as ProductSize));
    }

    // Filter Fit
    if (selectedFit !== 'all') {
      result = result.filter(p => p.fit === selectedFit);
    }

    // Filter Price
    result = result.filter(p => p.price <= maxPrice);

    // Filter Stock
    if (inStockOnly) {
      result = result.filter(p => p.inStock);
    }

    // Sort Options
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedSize, selectedFit, maxPrice, inStockOnly, sortOption]);

  return (
    <div className="bg-white text-drip-charcoal min-h-screen pb-24">
      
      {/* Category Collection Header */}
      <div className="bg-drip-charcoal text-white py-12 sm:py-16 border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-drip-orange/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-drip-orange/20 text-drip-orange px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 border border-drip-orange/30">
            <Sparkles size={14} />
            <span>Official Catalogue</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
            MEN'S <span className="text-drip-orange">COLLECTION</span>
          </h1>

          <p className="text-xs sm:text-sm text-neutral-300 font-medium max-w-xl mt-2 leading-relaxed">
            Elevated Indian streetwear. Heavyweight 240 GSM oversized tees, 400 GSM hoodies, 14oz vintage washed denim, and tactical cargos.
          </p>

          <div className="mt-4 flex items-center justify-center sm:justify-start gap-4 text-xs text-neutral-400 font-bold uppercase tracking-wider">
            <span>Showing <strong>{processedProducts.length}</strong> Products</span>
            <span>•</span>
            <span className="text-drip-orange">Pan India Shipping</span>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Top Controls Bar (Mobile Filter Trigger & Sort Dropdown) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-200">
          
          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-drip-gray-surface border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase text-drip-charcoal hover:border-drip-orange"
          >
            <SlidersHorizontal size={16} className="text-drip-orange" />
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="bg-drip-orange text-white text-[10px] font-black h-4.5 w-4.5 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Desktop Filter Counter indicator */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <Filter size={16} className="text-drip-orange" />
            <span>Filters ({activeFilterCount} Active)</span>
            {activeFilterCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-drip-orange hover:underline font-extrabold ml-2 flex items-center gap-1 text-[11px]"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 ml-auto">
            <label className="text-xs font-extrabold uppercase text-gray-500 hidden sm:inline">Sort By:</label>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-drip-gray-surface border border-gray-200 text-drip-charcoal text-xs font-bold px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-drip-orange/30 focus:border-drip-orange cursor-pointer uppercase appearance-none pr-8"
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest Drops</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3.5 text-gray-500 pointer-events-none" />
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* DESKTOP SIDEBAR FILTERS */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 pr-4 border-r border-gray-100">
            
            {/* Category Filter */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-drip-charcoal border-l-2 border-drip-orange pl-2">
                Category
              </h4>
              <div className="space-y-1 text-xs font-bold text-gray-600">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                      selectedCategory === cat.id
                        ? 'bg-drip-orange text-white font-extrabold shadow-sm'
                        : 'hover:bg-drip-gray-surface hover:text-drip-orange'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] opacity-80">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fit Filter */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-drip-charcoal border-l-2 border-drip-orange pl-2">
                Fit Silhouette
              </h4>
              <div className="space-y-1 text-xs font-bold text-gray-600">
                <button
                  onClick={() => setSelectedFit('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedFit === 'all' ? 'bg-drip-charcoal text-white' : 'hover:bg-drip-gray-surface'
                  }`}
                >
                  All Fits
                </button>
                {fitsList.map((fit) => (
                  <button
                    key={fit}
                    onClick={() => setSelectedFit(fit)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedFit === fit ? 'bg-drip-orange text-white' : 'hover:bg-drip-gray-surface'
                    }`}
                  >
                    {fit}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-drip-charcoal border-l-2 border-drip-orange pl-2">
                Size
              </h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSize('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all ${
                    selectedSize === 'all' ? 'bg-drip-charcoal text-white border-drip-charcoal' : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange'
                  }`}
                >
                  ALL
                </button>
                {sizesList.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`w-9 h-9 rounded-lg text-xs font-extrabold border transition-all ${
                      selectedSize === sz ? 'bg-drip-orange text-white border-drip-orange shadow-sm' : 'bg-white text-drip-charcoal border-gray-200 hover:border-drip-orange'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-black uppercase tracking-wider text-drip-charcoal border-l-2 border-drip-orange pl-2">
                  Max Price
                </h4>
                <span className="text-xs font-black text-drip-orange">₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min="999"
                max="3000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-drip-orange cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                <span>₹999</span>
                <span>₹3,000</span>
              </div>
            </div>

            {/* In Stock Only Checkbox */}
            <div className="pt-4 border-t border-gray-100">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs font-extrabold uppercase text-drip-charcoal">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 accent-drip-orange rounded border-gray-300"
                />
                <span>In Stock Only</span>
              </label>
            </div>

          </aside>

          {/* MAIN PRODUCT CATALOG GRID */}
          <main className="lg:col-span-9">
            {processedProducts.length === 0 ? (
              <div className="text-center py-16 bg-drip-gray-surface rounded-2xl border border-gray-200">
                <p className="text-base font-bold text-drip-charcoal">No products match your selected filters</p>
                <p className="text-xs text-gray-500 mt-1">Try resetting filters or adjusting your max price slider.</p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 bg-drip-orange text-white px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider hover:bg-drip-orange-hover transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {processedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            )}
          </main>

        </div>

      </div>

      {/* MOBILE FILTER DRAWER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between">
              
              <div>
                <div className="p-4 bg-drip-charcoal text-white flex items-center justify-between border-b border-neutral-800">
                  <h3 className="font-black text-sm uppercase font-display flex items-center gap-2">
                    <SlidersHorizontal size={16} className="text-drip-orange" />
                    <span>Filter Products</span>
                  </h3>
                  <button 
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1 text-neutral-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Filter Controls */}
                <div className="p-4 space-y-6 max-h-[75vh] overflow-y-auto">
                  
                  {/* Category */}
                  <div>
                    <h4 className="text-xs font-black uppercase text-drip-charcoal mb-2">Category</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase border ${
                            selectedCategory === cat.id ? 'bg-drip-orange text-white border-drip-orange' : 'bg-gray-50 text-drip-charcoal border-gray-200'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <h4 className="text-xs font-black uppercase text-drip-charcoal mb-2">Size</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => setSelectedSize('all')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border ${
                          selectedSize === 'all' ? 'bg-drip-charcoal text-white' : 'bg-gray-50 text-drip-charcoal border-gray-200'
                        }`}
                      >
                        ALL
                      </button>
                      {sizesList.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`w-9 h-9 rounded-lg text-xs font-extrabold border ${
                            selectedSize === sz ? 'bg-drip-orange text-white border-drip-orange' : 'bg-gray-50 text-drip-charcoal border-gray-200'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex justify-between text-xs font-black uppercase text-drip-charcoal mb-2">
                      <span>Max Price</span>
                      <span className="text-drip-orange">₹{maxPrice}</span>
                    </div>
                    <input
                      type="range"
                      min="999"
                      max="3000"
                      step="100"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-drip-orange cursor-pointer"
                    />
                  </div>

                </div>
              </div>

              {/* Mobile Drawer Actions */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 flex gap-2">
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-3 bg-gray-200 text-drip-charcoal rounded-xl text-xs font-extrabold uppercase"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 bg-drip-orange text-white py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider"
                >
                  Apply ({processedProducts.length} Items)
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
