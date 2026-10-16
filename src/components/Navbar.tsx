import React from 'react';
import { BookOpen, Heart, Rocket, ShieldCheck, BookmarkCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: 'browse' | 'favourites' | 'deployment' | 'legal';
  setActiveTab: (tab: 'browse' | 'favourites' | 'deployment' | 'legal') => void;
  favouritesCount: number;
  onOpenDeploymentGuide: () => void;
  onOpenLegalSources: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  favouritesCount,
  onOpenDeploymentGuide,
  onOpenLegalSources,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single Brand Wordmark in display face */}
          <button
            type="button"
            onClick={() => setActiveTab('browse')}
            className="flex items-center gap-2 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
            aria-label="BookSaathi Home"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-800 text-amber-50 flex items-center justify-center font-bold text-lg shadow-sm">
              <BookOpen className="w-4 h-4 text-amber-100" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors whitespace-nowrap shrink-0">
                BookSaathi
              </span>
              <span className="hidden sm:inline text-xs font-semibold text-amber-800/80 tracking-wide font-sans">
                किताब साथी
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              type="button"
              onClick={() => setActiveTab('browse')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                activeTab === 'browse' ? 'text-amber-900 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              Browse Library
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('favourites')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 relative py-1 flex items-center gap-1.5 ${
                activeTab === 'favourites' ? 'text-amber-900 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              <span>Saved Books</span>
              {favouritesCount > 0 && (
                <span className="text-xs bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-semibold tabular-nums">
                  {favouritesCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenLegalSources}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 py-1"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Legal Sources</span>
            </button>

            <button
              type="button"
              onClick={onOpenDeploymentGuide}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 py-1"
            >
              <Rocket className="w-4 h-4 text-stone-600" />
              <span>Free Deployment</span>
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'favourites' ? 'browse' : 'favourites')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 whitespace-nowrap shrink-0 ${
                activeTab === 'favourites'
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-amber-800 text-white hover:bg-amber-900 shadow-sm'
              }`}
              aria-label={activeTab === 'favourites' ? 'Browse all books' : 'View saved favourites'}
            >
              {activeTab === 'favourites' ? (
                <>
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>All Books</span>
                </>
              ) : (
                <>
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Favourites ({favouritesCount})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation strip */}
        <div className="flex md:hidden items-center justify-between py-2 border-t border-stone-100 text-xs text-stone-600 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('browse')}
            className={`px-2.5 py-1 font-medium whitespace-nowrap ${
              activeTab === 'browse' ? 'text-amber-900 font-bold border-b-2 border-amber-800' : ''
            }`}
          >
            All Books
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('favourites')}
            className={`px-2.5 py-1 font-medium whitespace-nowrap flex items-center gap-1 ${
              activeTab === 'favourites' ? 'text-amber-900 font-bold border-b-2 border-amber-800' : ''
            }`}
          >
            <span>Saved ({favouritesCount})</span>
          </button>
          <button
            type="button"
            onClick={onOpenLegalSources}
            className="px-2.5 py-1 font-medium whitespace-nowrap text-stone-700"
          >
            Legal Sources
          </button>
          <button
            type="button"
            onClick={onOpenDeploymentGuide}
            className="px-2.5 py-1 font-medium whitespace-nowrap text-amber-800"
          >
            Deploy Free
          </button>
        </div>
      </div>
    </header>
  );
};
