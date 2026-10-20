import React from 'react';
import { ArrowUp, Star } from 'lucide-react';

interface FooterProps {
  onOpenCodeModal: () => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCodeModal, onOpenEstimator }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060709] text-neutral-400 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Studio Identity (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/15 text-white">
                <span className="font-mono text-xs font-bold text-emerald-400">V/</span>
              </div>
              <span className="text-sm font-bold tracking-tight text-white">VANGUARD STUDIO</span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Bridging the divide between high-caliber Figma designs and sub-second web performance. Dedicated to zero-bloat creative engineering for ambitious founders and agencies worldwide.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1 text-xs text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-neutral-300 font-mono">100% Job Success &bull; Top Rated</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Capabilities
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('figma-vs-code')} className="hover:text-white transition-colors cursor-pointer">
                  Figma to Framer Translation
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('speed-benchmark')} className="hover:text-white transition-colors cursor-pointer">
                  Core Web Vitals Hardening
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('work')} className="hover:text-white transition-colors cursor-pointer">
                  Client Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('process')} className="hover:text-white transition-colors cursor-pointer">
                  4-Step High-Velocity Sprint
                </button>
              </li>
              <li>
                <button onClick={onOpenCodeModal} className="hover:text-emerald-400 text-neutral-300 transition-colors cursor-pointer">
                  Inspect Code Standards &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Sprint Booking & Availability (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Availability Status
            </span>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Accepting Q4/Q1 Client Sprints</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Direct booking available via Upwork escrow milestones or contract. Typical initial audit delivered within 24 hours.
              </p>
              <button
                onClick={onOpenEstimator}
                className="w-full mt-2 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Launch Scope Estimator
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Vanguard Studio. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Crafted with Next.js, Framer & Tailwind</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
