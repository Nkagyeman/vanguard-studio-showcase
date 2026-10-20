import React, { useState } from 'react';
import { X, Check, Copy, Code2, Cpu, ShieldCheck, Zap } from 'lucide-react';

interface CodeQualityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeQualityModal: React.FC<CodeQualityModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'component' | 'speed' | 'tokens'>('component');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const codeSnippets = {
    component: `// FluidCard.tsx — Precision Token Mapping & Zero CLS Architecture
import React, { memo } from 'react';

interface FluidCardProps {
  title: string;
  category: string;
  metric: string;
  aspectRatio?: '16/9' | '4/3';
}

export const FluidCard = memo<FluidCardProps>(({
  title,
  category,
  metric,
  aspectRatio = '16/9',
}) => {
  return (
    <article 
      className="group relative rounded-xl border border-white/10 bg-neutral-900/60 p-6 transition-all duration-200 hover:border-emerald-500/30 hover:bg-neutral-900/90"
      style={{ aspectRatio }}
    >
      {/* Intrinsic ratio prevents layout shift (CLS: 0.000) */}
      <div className="flex flex-col justify-between h-full">
        <header className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            {category}
          </span>
          <h3 className="text-xl font-semibold text-white tracking-tight">
            {title}
          </h3>
        </header>

        <footer className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-xs font-mono tabular-nums text-emerald-400">
            {metric}
          </span>
          <span className="text-xs text-neutral-500 group-hover:text-white transition-colors duration-150">
            Explore Details &rarr;
          </span>
        </footer>
      </div>
    </article>
  );
});`,

    speed: `// speedHardening.ts — Asset Optimization & Core Web Vitals Telemetry
export const configureCriticalPipeline = () => {
  return {
    // 1. Eliminate render-blocking fonts via critical font-display
    typography: {
      subsets: ['latin'],
      display: 'swap',
      preload: true,
      fallback: ['system-ui', '-apple-system', 'sans-serif'],
    },

    // 2. AVIF/WebP responsive picture source sets
    imagePipeline: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 1080, 1440, 1920],
      minimumCacheTTL: 31536000, // 1 year immutable edge cache
    },

    // 3. Telemetry hook for INP (Interaction to Next Paint) < 50ms
    onCLSChange: (metric: { value: number }) => {
      if (metric.value > 0.05) {
        console.warn('CLS threshold warning:', metric.value);
      }
    },
  };
};`,

    tokens: `/* design-tokens.css — Direct Figma Variables Mirror */
:root {
  /* Typography Scale (Fluid clamp) */
  --font-display: clamp(2.5rem, 5vw + 1rem, 4.5rem);
  --font-headline: clamp(1.75rem, 3vw + 0.5rem, 2.75rem);
  --font-body: clamp(0.95rem, 1vw + 0.5rem, 1.125rem);

  /* Spacing Grid (8pt system) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;

  /* Elevation Surfaces (Physical layer steps) */
  --surface-base: #08090a;
  --surface-1: #0f1115;
  --surface-2: #16181e;
  --hairline: rgba(255, 255, 255, 0.08);

  /* Tabular numbers for all financial & metric data */
  font-feature-settings: "tnum" 1, "cv02" 1;
}`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0c0d10] border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f1115]">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Code2 className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white tracking-normal">Production Code Quality Standards</h2>
              <p className="text-xs text-neutral-400">Strict TypeScript &bull; Zero CLS Guarantee &bull; Sub-50ms INP</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Technical Guarantee Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-6 py-3 bg-[#08090a] border-b border-white/5 text-xs font-mono">
          <div className="flex items-center gap-2 text-neutral-300">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Strict Types (0 `any`)</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <Zap className="h-3.5 w-3.5 text-emerald-400" />
            <span>Lighthouse: 99+</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <Cpu className="h-3.5 w-3.5 text-emerald-400" />
            <span>CLS: 0.000 Rock Solid</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Edge Ready Assets</span>
          </div>
        </div>

        {/* Code Tabs */}
        <div className="flex items-center justify-between px-6 pt-3 border-b border-white/10 bg-[#0c0d10]">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('component')}
              className={`px-3 py-2 text-xs font-mono rounded-t-lg transition-colors border-b-2 ${
                activeTab === 'component'
                  ? 'border-emerald-500 text-white bg-white/5'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              FluidCard.tsx
            </button>
            <button
              onClick={() => setActiveTab('speed')}
              className={`px-3 py-2 text-xs font-mono rounded-t-lg transition-colors border-b-2 ${
                activeTab === 'speed'
                  ? 'border-emerald-500 text-white bg-white/5'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              speedHardening.ts
            </button>
            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-3 py-2 text-xs font-mono rounded-t-lg transition-colors border-b-2 ${
                activeTab === 'tokens'
                  ? 'border-emerald-500 text-white bg-white/5'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              design-tokens.css
            </button>
          </div>

          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Body */}
        <div className="p-6 overflow-y-auto font-mono text-xs leading-relaxed bg-[#090a0d] text-neutral-300 flex-1">
          <pre className="whitespace-pre-wrap selection:bg-emerald-500/30">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0f1115] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <span>Every Vanguard build is delivered with clean PRs, commit messages, and a 30-day warranty.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
