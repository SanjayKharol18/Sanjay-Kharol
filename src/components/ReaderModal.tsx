import React, { useState } from 'react';
import { X, ExternalLink, Sun, Moon, Type, BookOpen, ShieldCheck } from 'lucide-react';
import { Book } from '../data/books';

interface ReaderModalProps {
  book: Book | null;
  onClose: () => void;
}

export const ReaderModal: React.FC<ReaderModalProps> = ({ book, onClose }) => {
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('sepia');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');

  if (!book) return null;

  const fontClasses = {
    sm: 'text-sm sm:text-base leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed sm:leading-loose',
    lg: 'text-lg sm:text-xl leading-loose',
    xl: 'text-xl sm:text-2xl leading-loose',
  };

  const themeClasses = {
    light: 'bg-white text-stone-900 border-stone-200',
    sepia: 'bg-[#FAF6EF] text-[#382E26] border-[#E8DFC8]',
    dark: 'bg-[#18181B] text-[#E4E4E7] border-stone-800',
  };

  const contentBg = {
    light: 'bg-stone-50/50',
    sepia: 'bg-[#F4ECE1]/60',
    dark: 'bg-[#121214]',
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-title"
    >
      <div 
        className={`relative w-full max-w-4xl rounded-2xl shadow-2xl border overflow-hidden max-h-[94vh] flex flex-col my-auto transition-colors duration-200 ${themeClasses[theme]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Reader Top Controls Toolbar */}
        <div className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b ${theme === 'dark' ? 'border-stone-800 bg-stone-900/90' : 'border-stone-200 bg-stone-100/70'}`}>
          <div className="flex items-center gap-2 truncate pr-2">
            <BookOpen className="w-4 h-4 text-amber-800 shrink-0" />
            <div className="truncate">
              <h2 id="reader-title" className="text-sm font-bold truncate">
                {book.title}
              </h2>
              <p className="text-[11px] opacity-70 truncate font-mono">
                {book.author} · {book.language}
              </p>
            </div>
          </div>

          {/* Reader Preferences */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Font Family Toggle */}
            <button
              type="button"
              onClick={() => setFontFamily(f => f === 'serif' ? 'sans' : 'serif')}
              className={`p-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 ${
                theme === 'dark' ? 'border-stone-700 bg-stone-800' : 'border-stone-300 bg-white'
              }`}
              title={`Switch to ${fontFamily === 'serif' ? 'Sans-Serif' : 'Serif'} font`}
            >
              <Type className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono">{fontFamily === 'serif' ? 'Serif' : 'Sans'}</span>
            </button>

            {/* Font Size Buttons */}
            <div className={`flex items-center rounded-lg border overflow-hidden ${
              theme === 'dark' ? 'border-stone-700 bg-stone-800' : 'border-stone-300 bg-white'
            }`}>
              <button
                type="button"
                onClick={() => setFontSize(s => s === 'xl' ? 'lg' : s === 'lg' ? 'base' : 'sm')}
                className="px-2 py-1 text-xs hover:bg-stone-200/50"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <span className="px-1 text-[10px] font-mono opacity-60">|</span>
              <button
                type="button"
                onClick={() => setFontSize(s => s === 'sm' ? 'base' : s === 'base' ? 'lg' : 'xl')}
                className="px-2 py-1 text-xs font-bold hover:bg-stone-200/50"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Theme Selectors */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`w-6 h-6 rounded-full border border-stone-300 bg-white ${theme === 'light' ? 'ring-2 ring-amber-600' : ''}`}
                title="Light Theme"
                aria-label="Light theme"
              />
              <button
                type="button"
                onClick={() => setTheme('sepia')}
                className={`w-6 h-6 rounded-full border border-amber-300 bg-[#FAF6EF] ${theme === 'sepia' ? 'ring-2 ring-amber-600' : ''}`}
                title="Sepia Theme"
                aria-label="Sepia theme"
              />
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`w-6 h-6 rounded-full border border-stone-700 bg-[#18181B] ${theme === 'dark' ? 'ring-2 ring-amber-400' : ''}`}
                title="Dark Theme"
                aria-label="Dark theme"
              />
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg opacity-70 hover:opacity-100 hover:bg-black/10 transition-colors ml-1"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Document Body */}
        <div className={`overflow-y-auto p-6 sm:p-10 max-h-[75vh] ${contentBg[theme]}`}>
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Header in document */}
            <div className="text-center pb-6 border-b border-current/15">
              <span className="text-xs uppercase tracking-widest font-mono opacity-60">
                Official Reading Preview · Verified Public Domain
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold mt-2 font-serif">
                {book.title}
              </h1>
              <p className="text-sm font-medium mt-1 opacity-80">
                {book.author} ({book.year})
              </p>
            </div>

            {/* Legal compliance notice bar inside reader */}
            <div className="p-3 rounded-lg text-xs border border-current/15 bg-current/5 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">{book.legalStatus.licenseName}:</span> This sample excerpt is reproduced from the verified public domain archives of <span className="font-medium">{book.source.name}</span>.
              </div>
            </div>

            {/* Book Excerpt Text */}
            <div className={`${fontFamily === 'serif' ? 'font-serif' : 'font-sans'} ${fontClasses[fontSize]} whitespace-pre-line text-justify`}>
              {book.excerpt}
            </div>

            {/* End of Excerpt Notice & External Read Complete Book Link */}
            <div className="pt-8 pb-4 text-center border-t border-current/15 space-y-3">
              <p className="text-xs opacity-75">
                — End of Selected Preview Excerpt —
              </p>
              <p className="text-sm">
                Ready to read the complete unabridged book for free?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={book.source.readOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-amber-800 text-white hover:bg-amber-900 transition-colors shadow-sm"
                >
                  <span>Open Unabridged Book on {book.source.name.split('&')[0].trim()}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {book.source.downloadUrl && (
                  <a
                    href={book.source.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg border border-current/25 hover:bg-current/10 transition-colors"
                  >
                    <span>Download ePub/PDF</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
