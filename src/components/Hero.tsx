import React from 'react';
import { ArrowDown, Code2, ArrowUpRight, Gauge, Layers, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenCodeModal: () => void;
  onExploreWork: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCodeModal, onExploreWork, onOpenEstimator }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle structural grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Subtle hairline edge guides */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow: Crisp typographic badge */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Figma to Framer &bull; Next.js Performance Engineering
            </p>
          </div>

          {/* Main Headline: Confident solid ink */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06]">
            We turn complex Figma files into blisteringly fast web realities.
          </h1>

          {/* Subheadline: Clear, concrete, no generic fluff */}
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed font-normal">
            Bridging the gap between award-winning design polish and 100/100 Core Web Vitals.
            Zero bloat. Pixel-perfect fidelity. Pure interaction fluidity.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#08090a] font-semibold text-sm hover:bg-neutral-200 transition-all active:scale-[0.98] shadow-md cursor-pointer"
            >
              <span>Explore Work & Audits</span>
              <ArrowDown className="h-4 w-4" />
            </button>

            <button
              onClick={onOpenCodeModal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 font-medium text-sm border border-white/10 hover:border-white/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              <Code2 className="h-4 w-4 text-emerald-400" />
              <span>View Code Quality</span>
            </button>

            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-neutral-400 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              <span>Estimate Sprint Scope</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Micro-telemetry proof strip */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-mono text-lg sm:text-xl font-bold tabular-nums">
              <Gauge className="h-4 w-4 text-emerald-400" />
              <span>99+</span>
            </div>
            <p className="text-xs text-neutral-400 font-medium">Lighthouse Guarantee</p>
            <p className="text-[11px] text-neutral-400">Desktop & Mobile Performance</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-mono text-lg sm:text-xl font-bold tabular-nums">
              <Layers className="h-4 w-4 text-emerald-400" />
              <span>1:1</span>
            </div>
            <p className="text-xs text-neutral-400 font-medium">Figma Translation</p>
            <p className="text-[11px] text-neutral-400">Exact tokens, spacing & states</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-mono text-lg sm:text-xl font-bold tabular-nums">
              <span className="text-emerald-400">&lt;</span>
              <span>800ms</span>
            </div>
            <p className="text-xs text-neutral-400 font-medium">Largest Contentful Paint</p>
            <p className="text-[11px] text-neutral-400">Sub-second production delivery</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-mono text-lg sm:text-xl font-bold tabular-nums">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Top 1%</span>
            </div>
            <p className="text-xs text-neutral-400 font-medium">Upwork Client Rating</p>
            <p className="text-[11px] text-neutral-400">100% Job Success Score</p>
          </div>
        </div>
      </div>
    </section>
  );
};
