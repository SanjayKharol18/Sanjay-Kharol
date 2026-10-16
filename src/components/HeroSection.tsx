import React from 'react';
import { Search, X, Shield, BookMarked, Sparkles } from 'lucide-react';
import { BookCategory, BookLanguage, CATEGORIES } from '../data/books';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: BookCategory | 'All';
  setSelectedCategory: (c: BookCategory | 'All') => void;
  selectedLanguage: BookLanguage | 'All';
  setSelectedLanguage: (l: BookLanguage | 'All') => void;
  totalBooksCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedLanguage,
  setSelectedLanguage,
  totalBooksCount,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-100/90 via-stone-50 to-amber-50/30 border-b border-stone-200 py-10 md:py-14">
      {/* Subtle organic watermark grid/texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#451a03_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed trust kicker adhering to anti-pill discipline */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-stone-600 mb-3 tracking-wide">
          <Shield className="w-3.5 h-3.5 text-emerald-700" />
          <span>100% Legal Public Domain & Open Access Books</span>
          <span aria-hidden="true">·</span>
          <span>Zero Piracy Guaranteed</span>
        </div>

        {/* Hero headline with balanced text wrap */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight [text-wrap:balance]">
          Discover Free, Verified E-Books for Mind & Soul
        </h1>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto [text-wrap:balance]">
          Read and download timeless literary, spiritual, business, and educational works in Hindi and English. Legally preserved from verified archival sources.
        </p>

        {/* Search Bar Container */}
        <div className="mt-7 max-w-2xl mx-auto">
          <div className="relative flex items-center shadow-sm rounded-xl bg-white border border-stone-300 focus-within:border-amber-700 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
            <div className="pl-4 text-stone-400 pointer-events-none">
              <Search className="w-5 h-5 text-stone-400" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, or keyword (e.g., Premchand, Gita, Wealth)..."
              className="w-full py-3.5 pl-3 pr-10 text-stone-900 placeholder-stone-400 text-sm sm:text-base bg-transparent rounded-xl focus:outline-none"
              aria-label="Search books by title, author, or keyword"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="pr-3 text-stone-400 hover:text-stone-700 focus:outline-none"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Category Tabs (Segmented Button Control) */}
          <div className="w-full md:w-auto flex items-center justify-start md:justify-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === 'All'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white text-amber-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Language Toggle (Segmented Button Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl">
            <button
              type="button"
              onClick={() => setSelectedLanguage('All')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedLanguage === 'All'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Languages
            </button>
            <button
              type="button"
              onClick={() => setSelectedLanguage('Hindi')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedLanguage === 'Hindi'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              हिन्दी (Hindi)
            </button>
            <button
              type="button"
              onClick={() => setSelectedLanguage('English')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedLanguage === 'English'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Quick query stats and active filter breadcrumb */}
        {(searchQuery || selectedCategory !== 'All' || selectedLanguage !== 'All') && (
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-stone-500">
            <span>Filtering by:</span>
            {searchQuery && (
              <span className="font-semibold text-stone-800">"{searchQuery}"</span>
            )}
            {selectedCategory !== 'All' && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-amber-900">{selectedCategory}</span>
              </>
            )}
            {selectedLanguage !== 'All' && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-stone-800">{selectedLanguage}</span>
              </>
            )}
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLanguage('All');
              }}
              className="ml-2 underline text-amber-800 hover:text-amber-950 font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
