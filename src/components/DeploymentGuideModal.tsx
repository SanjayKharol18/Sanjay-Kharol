import React, { useState } from 'react';
import { X, Rocket, Copy, Check, Terminal, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerToast: (msg: string) => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
  onTriggerToast,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      onTriggerToast('Copied command to clipboard!');
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deployment-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-100 text-amber-900">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h2 id="deployment-modal-title" className="text-base font-bold text-stone-900">
                Testing & Free Deployment Guide
              </h2>
              <p className="text-xs text-stone-500">
                How to run BookSaathi locally, test, and host for free on Vercel, Netlify, or Cloudflare
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

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 text-sm text-stone-700 leading-relaxed">
          {/* Step 1: Local Testing */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-stone-900 text-base">
                Local Testing & Verification
              </h3>
            </div>
            <p className="text-xs text-stone-600">
              BookSaathi is a pure React + Vite application with zero required backend databases or paid APIs for the initial version. All search, bookmarks, and reader features run client-side.
            </p>

            <div className="space-y-2">
              <div className="rounded-xl bg-stone-900 text-stone-100 p-3.5 font-mono text-xs flex items-center justify-between">
                <div>
                  <span className="text-stone-400"># Start the development server</span>
                  <div className="text-amber-400 font-semibold mt-1">npm run dev</div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('npm run dev', 1)}
                  className="p-1.5 rounded hover:bg-stone-800 text-stone-400 hover:text-white"
                  title="Copy command"
                >
                  {copiedIndex === 1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="rounded-xl bg-stone-900 text-stone-100 p-3.5 font-mono text-xs flex items-center justify-between">
                <div>
                  <span className="text-stone-400"># Build production bundle and preview</span>
                  <div className="text-amber-400 font-semibold mt-1">npm run build && npm run preview</div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('npm run build && npm run preview', 2)}
                  className="p-1.5 rounded hover:bg-stone-800 text-stone-400 hover:text-white"
                  title="Copy command"
                >
                  {copiedIndex === 2 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Free 1-Click Cloud Deployment */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-stone-900 text-base">
                Free Hosting Platforms (100% Free Tiers)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Option A: Vercel */}
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 hover:border-amber-300 transition-colors">
                <div className="font-bold text-stone-900 text-sm">Vercel (Recommended)</div>
                <p className="text-xs text-stone-500 mt-1">
                  Automatic HTTPS, global CDN, and zero configuration.
                </p>
                <div className="mt-2.5 font-mono text-[11px] bg-white p-2 rounded border border-stone-200 text-stone-800">
                  npx vercel
                </div>
              </div>

              {/* Option B: Netlify */}
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 hover:border-amber-300 transition-colors">
                <div className="font-bold text-stone-900 text-sm">Netlify</div>
                <p className="text-xs text-stone-500 mt-1">
                  Drag and drop the <code className="text-amber-900 font-mono">dist/</code> folder or connect Git.
                </p>
                <div className="mt-2.5 font-mono text-[11px] bg-white p-2 rounded border border-stone-200 text-stone-800">
                  npx netlify deploy --prod
                </div>
              </div>

              {/* Option C: Cloudflare Pages / GitHub Pages */}
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 hover:border-amber-300 transition-colors">
                <div className="font-bold text-stone-900 text-sm">Cloudflare Pages</div>
                <p className="text-xs text-stone-500 mt-1">
                  Unlimited bandwidth on Cloudflare's free edge network.
                </p>
                <div className="mt-2.5 font-mono text-[11px] bg-white p-2 rounded border border-stone-200 text-stone-800">
                  Build: npm run build | Dir: dist
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Legal Compliance & Adding Books */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-stone-900 text-base">
                How to Add New Books Legally (Checklist)
              </h3>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-amber-950">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Strict Anti-Piracy Policy</span>
              </div>
              <p className="text-amber-900/90">
                To keep your BookSaathi deployment compliant, follow these verification rules before adding books to <code className="font-mono text-amber-900">src/data/books.ts</code>:
              </p>
              <ul className="space-y-1.5 pt-1 text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>US Public Domain:</strong> Any work published prior to January 1, 1928 is in the public domain in the United States.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Indian Copyright Act 1957 (Sec 22):</strong> Literary works enter public domain 60 years after the calendar year following the author's death (e.g., Premchand died in 1936, Tagore in 1941).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Verify Source:</strong> Always link directly to Project Gutenberg, Standard Ebooks, Internet Archive, or Wikisource. Never host copyrighted files.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
