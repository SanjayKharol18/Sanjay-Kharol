import React, { useState } from 'react';
import { Heart, BookOpen, Download, ExternalLink, ShieldCheck, Check } from 'lucide-react';
import { Book } from '../data/books';

interface BookCardProps {
  book: Book;
  isFavourite: boolean;
  onToggleFavourite: (bookId: string) => void;
  onSelectBook: (book: Book) => void;
  onOpenReader: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  isFavourite,
  onToggleFavourite,
  onSelectBook,
  onOpenReader,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group flex flex-col bg-white rounded-xl border border-stone-200/90 hover:border-stone-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Visual Slot: Book Cover with strict Zero-Broken-Image fallback */}
      <div 
        onClick={() => onSelectBook(book)}
        className="relative aspect-[3/4] w-full bg-stone-100 overflow-hidden cursor-pointer select-none"
      >
        {book.coverImage && !imageFailed ? (
          <img
            src={book.coverImage}
            alt={`Cover of ${book.title} by ${book.author}`}
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          /* Styled Fallback Cover container conforming to section 3.E */
          <div className={`w-full h-full bg-gradient-to-br ${book.fallbackGradient} p-6 flex flex-col justify-between text-white relative`}>
            <div className="flex items-center justify-between text-xs text-stone-300 font-medium">
              <span>{book.category}</span>
              <span>{book.year}</span>
            </div>
            <div className="space-y-2 my-auto text-center">
              <h3 className="font-serif text-lg font-bold tracking-tight text-white line-clamp-3">
                {book.title}
              </h3>
              <p className="text-xs text-stone-300 font-sans tracking-wide">
                {book.author}
              </p>
            </div>
            <div className="text-[10px] text-stone-400 text-center tracking-widest uppercase font-mono">
              Public Domain Classic
            </div>
          </div>
        )}

        {/* Floating Quick Action: Favourite button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavourite(book.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
            isFavourite
              ? 'bg-rose-600 text-white shadow-md'
              : 'bg-white/80 text-stone-700 hover:bg-white hover:text-rose-600 shadow-sm'
          }`}
          aria-label={isFavourite ? `Remove ${book.title} from favourites` : `Save ${book.title} to favourites`}
        >
          <Heart className={`w-4 h-4 ${isFavourite ? 'fill-current' : ''}`} />
        </button>

        {/* Verified source overlay pill-less tag */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-stone-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs">
          <span className="font-medium text-emerald-800 flex items-center gap-1 truncate">
            <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
            <span className="truncate">{book.legalStatus.licenseName}</span>
          </span>
          <span className="text-stone-500 shrink-0 pl-1 font-mono text-[10px]">
            {book.readingTimeMinutes}m
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 flex flex-col flex-1">
        {/* Zero-Pill Metadata Line */}
        <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
          <span className="font-semibold text-amber-900">{book.category}</span>
          <span aria-hidden="true">·</span>
          <span>{book.language === 'Hindi' ? 'हिन्दी (Hindi)' : 'English'}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{book.year}</span>
        </div>

        {/* Book Title */}
        <h2 
          onClick={() => onSelectBook(book)}
          className="text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors cursor-pointer line-clamp-1"
          title={book.title}
        >
          {book.title}
        </h2>

        {/* Author */}
        <p className="text-xs text-stone-600 mt-0.5 line-clamp-1 font-medium">
          by {book.author}
        </p>

        {/* Short Summary */}
        <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed flex-1">
          {book.shortSummary}
        </p>

        {/* Legal Source Verification Text */}
        <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
          <span className="truncate text-stone-500" title={`Source: ${book.source.name}`}>
            Via <span className="text-stone-700 font-medium">{book.source.name}</span>
          </span>
          {book.isDemoContent && (
            <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider shrink-0">
              Verified Public
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onOpenReader(book)}
            className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5 text-stone-600" />
            <span>Read Excerpt</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectBook(book)}
            className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-800 text-white hover:bg-amber-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 whitespace-nowrap shrink-0"
          >
            <span>Book Details</span>
          </button>
        </div>
      </div>
    </article>
  );
};
