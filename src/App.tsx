import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Heart, 
  Search, 
  SlidersHorizontal, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ArrowUpDown, 
  Download, 
  ExternalLink,
  BookMarked,
  Filter,
  Trash2,
  Share2,
  Info
} from 'lucide-react';
import { BOOKS_DATA, Book, BookCategory, BookLanguage, CATEGORIES } from './data/books';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BookCard } from './components/BookCard';
import { BookDetailModal } from './components/BookDetailModal';
import { ReaderModal } from './components/ReaderModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';
import { LegalSourcesModal } from './components/LegalSourcesModal';
import { Toast } from './components/Toast';

const FAVOURITES_STORAGE_KEY = 'booksaathi_saved_favourites_v1';

export default function App() {
  // Navigation & Modal States
  const [activeTab, setActiveTab] = useState<'browse' | 'favourites' | 'deployment' | 'legal'>('browse');
  const [selectedBookForDetail, setSelectedBookForDetail] = useState<Book | null>(null);
  const [selectedBookForReader, setSelectedBookForReader] = useState<Book | null>(null);
  const [isDeploymentGuideOpen, setIsDeploymentGuideOpen] = useState(false);
  const [isLegalSourcesOpen, setIsLegalSourcesOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BookCategory | 'All'>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<BookLanguage | 'All'>('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'title-asc' | 'year-desc' | 'year-asc' | 'reading-time'>('recommended');

  // Favourites in LocalStorage
  const [favouriteIds, setFavouriteIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(FAVOURITES_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    // Default initial favorites: Godan & The Song Celestial
    return ['godan-munshi-premchand', 'bhagavad-gita-edwin-arnold'];
  });

  // Persist favourites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(FAVOURITES_STORAGE_KEY, JSON.stringify(favouriteIds));
    } catch (e) {
      console.error('Failed to persist favourites', e);
    }
  }, [favouriteIds]);

  const toggleFavourite = (bookId: string) => {
    setFavouriteIds((prev) => {
      const exists = prev.includes(bookId);
      const targetBook = BOOKS_DATA.find((b) => b.id === bookId);
      const title = targetBook ? targetBook.title : 'Book';
      if (exists) {
        setToastMessage(`Removed "${title}" from your saved favourites`);
        return prev.filter((id) => id !== bookId);
      } else {
        setToastMessage(`Saved "${title}" to your favourites`);
        return [...prev, bookId];
      }
    });
  };

  const clearAllFavourites = () => {
    if (favouriteIds.length === 0) return;
    setFavouriteIds([]);
    setToastMessage('Cleared all saved books from your favourites.');
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Filtered & Sorted Books
  const filteredBooks = useMemo(() => {
    let result = BOOKS_DATA;

    // Filter by Tab (if favourites tab)
    if (activeTab === 'favourites') {
      result = result.filter((book) => favouriteIds.includes(book.id));
    }

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((book) => book.category === selectedCategory);
    }

    // Filter by Language
    if (selectedLanguage !== 'All') {
      result = result.filter((book) => book.language === selectedLanguage);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((book) => {
        return (
          book.title.toLowerCase().includes(q) ||
          book.author.toLowerCase().includes(q) ||
          book.description.toLowerCase().includes(q) ||
          book.category.toLowerCase().includes(q) ||
          book.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      });
    }

    // Sort
    return [...result].sort((a, b) => {
      if (sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'year-desc') {
        return Number(b.year) - Number(a.year);
      }
      if (sortBy === 'year-asc') {
        return Number(a.year) - Number(b.year);
      }
      if (sortBy === 'reading-time') {
        return a.readingTimeMinutes - b.readingTimeMinutes;
      }
      // default: recommended (demo order)
      return 0;
    });
  }, [activeTab, favouriteIds, selectedCategory, selectedLanguage, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* 1-Row 3-Zone Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favouritesCount={favouriteIds.length}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
        onOpenLegalSources={() => setIsLegalSourcesOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Search and Segmented Filter Bar */}
        {activeTab !== 'favourites' && (
          <HeroSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            totalBooksCount={BOOKS_DATA.length}
          />
        )}

        {/* Favourites Header Bar if on Favourites Tab */}
        {activeTab === 'favourites' && (
          <div className="bg-white border-b border-stone-200 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 mb-1">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Your Personal Reading Shelf</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  Saved Favourite Books
                </h1>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Saved securely in your browser's local storage. Available anytime without registration.
                </p>
              </div>

              {favouriteIds.length > 0 && (
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      const bookList = BOOKS_DATA
                        .filter(b => favouriteIds.includes(b.id))
                        .map(b => `- ${b.title} by ${b.author} (${b.source.name})`)
                        .join('\n');
                      navigator.clipboard.writeText(`My BookSaathi Reading List:\n${bookList}`);
                      triggerToast('Exported your reading list to clipboard!');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Export List</span>
                  </button>

                  <button
                    type="button"
                    onClick={clearAllFavourites}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-rose-700 hover:bg-rose-50 border border-rose-200 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Catalog Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Controls Bar: Results Count + Sort Dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <span className="font-semibold text-stone-900 tabular-nums">
                {filteredBooks.length}
              </span>
              <span>{filteredBooks.length === 1 ? 'verified book found' : 'verified books available'}</span>
              {activeTab === 'favourites' && (
                <span className="text-stone-400">· Saved in browser</span>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
              <label htmlFor="sort-select" className="text-stone-500 font-medium flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>Sort by:</span>
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-stone-800 font-medium focus:outline-none focus:border-amber-700"
              >
                <option value="recommended">Curated / Recommended</option>
                <option value="title-asc">Title (A - Z)</option>
                <option value="year-desc">Year (Newest First)</option>
                <option value="year-asc">Year (Oldest First)</option>
                <option value="reading-time">Shortest Read Time</option>
              </select>
            </div>
          </div>

          {/* Book Cards Grid: Responsive 1-col (mobile) -> 2-col (tablet) -> 3-col/4-col (desktop) */}
          {filteredBooks.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  isFavourite={favouriteIds.includes(book.id)}
                  onToggleFavourite={toggleFavourite}
                  onSelectBook={(b) => setSelectedBookForDetail(b)}
                  onOpenReader={(b) => setSelectedBookForReader(b)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-16 text-center max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                {activeTab === 'favourites' ? 'No saved books yet' : 'No books matched your criteria'}
              </h3>
              <p className="text-xs text-stone-500 mt-1.5">
                {activeTab === 'favourites'
                  ? 'Click the heart icon on any book card to save it to your personal shelf.'
                  : 'Try clearing your search query or selecting "All Categories" and "All Languages".'}
              </p>
              <div className="mt-5 flex justify-center gap-2">
                {activeTab === 'favourites' ? (
                  <button
                    type="button"
                    onClick={() => setActiveTab('browse')}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-800 text-white hover:bg-amber-900 transition-colors"
                  >
                    Browse All Books
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                      setSelectedLanguage('All');
                    }}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Legal Ethics Callout Banner */}
          <div className="mt-14 p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-900 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-stone-900 text-sm">
                  Why BookSaathi is 100% Legal & Free
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed max-w-3xl">
                  We never pirate, scrape, or distribute unauthorized contemporary copyrighted books. Every title in BookSaathi is verified public domain (such as Munshi Premchand, Jane Austen, Napoleon Hill, and John Dewey) or shared under open education licenses.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-stretch md:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setIsLegalSourcesOpen(true)}
                className="w-full md:w-auto px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-stone-300 text-stone-800 hover:bg-stone-100 transition-colors whitespace-nowrap"
              >
                Learn About Legal Sources
              </button>
              <button
                type="button"
                onClick={() => setIsDeploymentGuideOpen(true)}
                className="w-full md:w-auto px-3.5 py-2 text-xs font-semibold rounded-lg bg-amber-800 text-white hover:bg-amber-900 transition-colors whitespace-nowrap"
              >
                Free Deployment Guide
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer conforming to Section 1.B: Quiet copyright, site links, zero ornamental tickers */}
      <footer className="bg-white border-t border-stone-200 mt-12 py-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-amber-800 text-white flex items-center justify-center font-bold text-[10px]">
                BS
              </div>
              <span className="font-bold text-stone-800">BookSaathi</span>
              <span aria-hidden="true">·</span>
              <span>Legal Public Domain E-Book Discovery</span>
            </div>

            <div className="flex items-center gap-5 text-xs text-stone-600">
              <button
                type="button"
                onClick={() => setIsLegalSourcesOpen(true)}
                className="hover:text-stone-900 transition-colors"
              >
                Anti-Piracy Policy
              </button>
              <button
                type="button"
                onClick={() => setIsDeploymentGuideOpen(true)}
                className="hover:text-stone-900 transition-colors"
              >
                Free Hosting & Testing
              </button>
              <a
                href="https://www.gutenberg.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 transition-colors inline-flex items-center gap-1"
              >
                <span>Project Gutenberg</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-stone-100 text-center text-stone-400 text-[11px]">
            Preserving classical Hindi and world literature for readers everywhere. No subscription or sign-up needed.
          </div>
        </div>
      </footer>

      {/* Book Detail Modal */}
      <BookDetailModal
        book={selectedBookForDetail}
        onClose={() => setSelectedBookForDetail(null)}
        isFavourite={selectedBookForDetail ? favouriteIds.includes(selectedBookForDetail.id) : false}
        onToggleFavourite={toggleFavourite}
        onOpenReader={(b) => setSelectedBookForReader(b)}
        onTriggerToast={triggerToast}
      />

      {/* In-App Reader Modal */}
      <ReaderModal
        book={selectedBookForReader}
        onClose={() => setSelectedBookForReader(null)}
      />

      {/* Deployment & Free Hosting Guide Modal */}
      <DeploymentGuideModal
        isOpen={isDeploymentGuideOpen}
        onClose={() => setIsDeploymentGuideOpen(false)}
        onTriggerToast={triggerToast}
      />

      {/* Legal Sources & Anti-Piracy Policy Modal */}
      <LegalSourcesModal
        isOpen={isLegalSourcesOpen}
        onClose={() => setIsLegalSourcesOpen(false)}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
