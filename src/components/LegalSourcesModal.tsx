import React from 'react';
import { X, ShieldCheck, ExternalLink, Globe, Scale, BookOpen } from 'lucide-react';

interface LegalSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalSourcesModal: React.FC<LegalSourcesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const repositories = [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org',
      description: 'The world\'s first provider of free digital books. Over 70,000 public domain e-books, proofread by volunteers and cleared under US copyright laws.',
      badge: 'Public Domain',
    },
    {
      name: 'Standard Ebooks',
      url: 'https://standardebooks.org',
      description: 'Volunteer-driven effort to produce carefully typeset, clean, open-access editions of public domain literary masterpieces with modern typography and metadata.',
      badge: 'Public Domain & CC0',
    },
    {
      name: 'Hindi Wikisource (विकिस्रोत)',
      url: 'https://hi.wikisource.org',
      description: 'A Wikimedia Foundation digital library of free text sources in Hindi, including classic works of Munshi Premchand, Tagore, and ancient Indian fables.',
      badge: 'CC BY-SA & Public Domain',
    },
    {
      name: 'Internet Archive & Open Library',
      url: 'https://archive.org',
      description: 'A non-profit digital library offering access to millions of digitized historical books, including out-of-copyright Indian and global editions.',
      badge: 'Open Digital Archive',
    },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-base font-bold text-stone-900">
                Legal Sources & Anti-Piracy Policy
              </h2>
              <p className="text-xs text-stone-500">
                How BookSaathi guarantees zero copyrighted piracy and authentic archival links
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6 space-y-5 text-xs text-stone-700 leading-relaxed">
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/80 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-stone-900 text-sm">
              <Scale className="w-4 h-4 text-amber-800" />
              <span>Our Legal Promise</span>
            </div>
            <p>
              BookSaathi exists to celebrate the rich heritage of public domain human knowledge. We strictly disallow the distribution of unauthorized copyrighted contemporary books. Every book presented in BookSaathi is either in the public domain or shared under open educational / Creative Commons licenses.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-stone-900 text-sm mb-3">
              Verified Legal E-Book Partners & Repositories
            </h3>
            <div className="space-y-3">
              {repositories.map((repo) => (
                <div key={repo.name} className="p-3.5 rounded-xl border border-stone-200 hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">
                      {repo.name}
                    </span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:text-amber-950 font-semibold inline-flex items-center gap-1"
                    >
                      <span>Visit Archive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-stone-600 mt-1.5">
                    {repo.description}
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-emerald-800 font-medium">
                    ✓ {repo.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-100/60 text-stone-600 space-y-1">
            <span className="font-bold text-stone-900">Notice for Authors & Publishers</span>
            <p>
              If you represent an estate or publisher and believe any listing in our demo index has inadvertently been included outside of public domain verification, contact us for prompt review and archival confirmation.
            </p>
          </div>
        </div>

        <div className="px-5 py-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
