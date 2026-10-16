import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ExternalLink, 
  Download, 
  BookOpen, 
  ShieldCheck, 
  Calendar, 
  Globe, 
  Layers, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Share2
} from 'lucide-react';
import { Book } from '../data/books';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  isFavourite: boolean;
  onToggleFavourite: (bookId: string) => void;
  onOpenReader: (book: Book) => void;
  onTriggerToast: (msg: string) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  onClose,
  isFavourite,
  onToggleFavourite,
  onOpenReader,
  onTriggerToast,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (!book) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Check out "${book.title}" by ${book.author} legally free on BookSaathi!\nSource: ${book.source.url}`
      );
      onTriggerToast(`Copied book details and legal source link to clipboard!`);
    } else {
      onTriggerToast(`Sharing: ${book.title}`);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-book-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-200 bg-stone-50/80">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span className="font-semibold text-stone-800">Verified Legal E-Book</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[11px] text-stone-500">ID: {book.id}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleShare}
              className="p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-200 rounded-lg transition-colors"
              aria-label="Share book"
              title="Share book link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onToggleFavourite(book.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isFavourite
                  ? 'text-rose-600 bg-rose-50 hover:bg-rose-100'
                  : 'text-stone-500 hover:text-stone-800 hover:bg-stone-200'
              }`}
              aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
              title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            >
              <Heart className={`w-4 h-4 ${isFavourite ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors ml-1"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Main Book Profile Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            {/* Book Cover */}
            <div className="sm:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[240px] aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 relative">
                {book.coverImage && !imageFailed ? (
                  <img
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${book.fallbackGradient} p-5 flex flex-col justify-between text-white`}>
                    <div className="text-xs text-stone-300 font-medium">
                      {book.category}
                    </div>
                    <div className="text-center my-auto">
                      <h4 className="font-serif text-lg font-bold text-white line-clamp-3">
                        {book.title}
                      </h4>
                      <p className="text-xs text-stone-300 mt-1">
                        {book.author}
                      </p>
                    </div>
                    <div className="text-[10px] text-stone-400 text-center font-mono">
                      Public Domain
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Reading Launcher */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenReader(book);
                }}
                className="mt-4 w-full max-w-[240px] inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-stone-700" />
                <span>Open Reading Preview</span>
              </button>
            </div>

            {/* Book Metadata & Summaries */}
            <div className="sm:col-span-7 flex flex-col">
              {/* Unboxed Metadata Line */}
              <div className="flex items-center flex-wrap gap-2 text-xs text-stone-500 mb-2 font-medium">
                <span className="text-amber-900 font-semibold">{book.category}</span>
                <span aria-hidden="true">·</span>
                <span>{book.language === 'Hindi' ? 'हिन्दी (Hindi)' : 'English'}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">Year {book.year}</span>
              </div>

              <h2 id="modal-book-title" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug">
                {book.title}
              </h2>

              <p className="text-base text-stone-700 font-medium mt-1">
                by <span className="text-stone-900 font-semibold">{book.author}</span>
              </p>

              {/* Quick Specs Strip */}
              <div className="grid grid-cols-3 gap-2 py-3 my-4 border-y border-stone-100 text-xs text-stone-600">
                <div>
                  <div className="text-stone-400 text-[10px] uppercase font-mono tracking-wider">Format</div>
                  <div className="font-medium text-stone-800 mt-0.5">ePub & Web</div>
                </div>
                <div>
                  <div className="text-stone-400 text-[10px] uppercase font-mono tracking-wider">Pages</div>
                  <div className="font-medium text-stone-800 mt-0.5 tabular-nums">~{book.pageCount || 200} pages</div>
                </div>
                <div>
                  <div className="text-stone-400 text-[10px] uppercase font-mono tracking-wider">Read Time</div>
                  <div className="font-medium text-stone-800 mt-0.5 tabular-nums">~{Math.round(book.readingTimeMinutes / 60)}h {book.readingTimeMinutes % 60}m</div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 text-sm text-stone-700 leading-relaxed">
                <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider font-mono">
                  About This Work
                </h3>
                <p>{book.description}</p>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
                <span className="font-medium text-stone-700">Themes:</span>
                {book.tags.map((tag, i) => (
                  <span key={tag} className="inline-flex items-center text-stone-600">
                    {tag}
                    {i < book.tags.length - 1 && <span className="mx-1 text-stone-300">/</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Compliance Box */}
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h4 className="font-bold text-emerald-950 text-sm">
                    Legal Distribution & Copyright Verification
                  </h4>
                  <span className="font-medium text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
                    {book.legalStatus.licenseName}
                  </span>
                </div>
                <p className="text-emerald-900/90 leading-relaxed">
                  {book.legalStatus.rightsExplanation}
                </p>
                <div className="pt-2 text-stone-600 flex items-center flex-wrap gap-2 text-[11px]">
                  <span className="font-semibold text-stone-800">Primary Official Source:</span>
                  <a
                    href={book.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-900 hover:text-amber-950 underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>{book.source.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span aria-hidden="true">·</span>
                  <span>{book.source.verificationNote}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row - strictly following rules */}
          <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs text-stone-500">
              {book.legalStatus.permitReadOnline && book.legalStatus.permitDownload ? (
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Legally cleared for online reading and personal downloads.
                </span>
              ) : (
                <span className="text-stone-600">
                  Read online permitted per archive terms.
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Read Online Button */}
              {book.legalStatus.permitReadOnline && (
                <a
                  href={book.source.readOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg bg-amber-800 text-white hover:bg-amber-900 transition-colors shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read on {book.source.name.split('&')[0].trim()}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>
              )}

              {/* Download Button (Only when legally permitted) */}
              {book.legalStatus.permitDownload && book.source.downloadUrl ? (
                <a
                  href={book.source.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Direct Download</span>
                </a>
              ) : (
                <div 
                  className="text-xs text-stone-400 italic px-2"
                  title="Direct download disabled: Archive permits web reading only."
                >
                  Web reading only
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
