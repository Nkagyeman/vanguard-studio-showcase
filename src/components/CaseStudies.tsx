import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Gauge, 
  Check, 
  Zap, 
  Clock, 
  X,
  Star
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  metrics: {
    speedBoost: string;
    lighthouse: number;
    deliveryTime: string;
    lcp: string;
  };
  tags: string[];
  description: string;
  details: {
    clientQuote: string;
    clientRole: string;
    challenge: string;
    solution: string;
    deliverables: string[];
  };
  visualTone: {
    badgeColor: string;
    accentColor: string;
    accentBg: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-core',
    title: 'Aegis Liquidity Protocol',
    subtitle: 'Figma to Framer & Next.js Migration',
    category: 'Fintech & Vault Engineering',
    tagline: 'Eliminated 4.2s of render-blocking JavaScript and delivered 65% faster time-to-interactivity.',
    metrics: {
      speedBoost: '+65% Faster',
      lighthouse: 100,
      deliveryTime: '8-Day Sprint',
      lcp: '0.42s'
    },
    tags: ['Figma to Framer', 'Next.js App Router', 'Tailwind', '100 Lighthouse'],
    description: 'Complete architecture rebuild from unoptimized Figma frames into an institutional-grade dark obsidian web application with fluid reactive charts and zero layout shift.',
    details: {
      clientQuote: '“Vanguard translated our 80-frame Figma file into Framer and Next.js with millimeter accuracy. Our conversion rate increased by 28% the first week after launch.”',
      clientRole: 'Chief Product Officer, Aegis Global',
      challenge: 'The original build had a 3.8s LCP on mobile, 42MB of uncompressed assets, and misaligned responsive breakpoints across iPad and desktop viewports.',
      solution: 'Extracted design tokens into a unified CSS variable engine, implemented AVIF responsive picture tags, and replaced heavy charting libraries with lightweight SVG path morphing.',
      deliverables: [
        'Complete Figma design token library extraction',
        '14 responsive page layouts (Desktop, Tablet, Mobile)',
        'Fluid interactive yield calculator component',
        'Lighthouse 100/100 Core Web Vitals audit pass'
      ]
    },
    visualTone: {
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      accentColor: 'text-emerald-400',
      accentBg: 'from-emerald-950/20 to-transparent'
    }
  },
  {
    id: 'ai-studio',
    title: 'Cognitive Matrix Labs',
    subtitle: 'Interactive AI Studio Brand & Canvas',
    category: 'AI Brand & Creative Tech',
    tagline: 'Hardware-accelerated micro-interactions with zero battery drain and silky 60fps dynamics.',
    metrics: {
      speedBoost: '3.8x Quicker',
      lighthouse: 99,
      deliveryTime: '5-Day Sprint',
      lcp: '0.55s'
    },
    tags: ['Framer Motion', 'WebGL Shaders', 'Zero Bloat', 'Sub-50ms INP'],
    description: 'Interactive brand platform featuring custom canvas node connectors, dark aesthetic lighting, and instantaneous client onboarding triggers.',
    details: {
      clientQuote: '“Most creative developers give you smooth animations that lag on phones. Vanguard gave us award-level polish with instantaneous load times on mobile 4G.”',
      clientRole: 'Founding Partner, Cognitive Matrix',
      challenge: 'Complex 3D animations and node-graph interactions were causing severe frame drops (<24fps) and 400ms input delays on mobile browsers.',
      solution: 'Re-architected animations using pure CSS transforms and requestAnimationFrame loops, moving heavy matrix calculations into Web Workers.',
      deliverables: [
        'GPU-accelerated interactive canvas graph',
        'Fluid responsive navigation with glassmorphism hairlines',
        'Automated dark/light token system',
        'Sub-50ms Interaction to Next Paint (INP)'
      ]
    },
    visualTone: {
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      accentColor: 'text-cyan-400',
      accentBg: 'from-cyan-950/20 to-transparent'
    }
  },
  {
    id: 'saas-marketing',
    title: 'Verve Developer Cloud',
    subtitle: '12-Page Enterprise SaaS Rebuild',
    category: 'B2B Enterprise SaaS',
    tagline: 'Delivered in a 7-day high-velocity sprint with 100% token consistency across all 12 pages.',
    metrics: {
      speedBoost: '+82% Velocity',
      lighthouse: 100,
      deliveryTime: '7-Day Sprint',
      lcp: '0.38s'
    },
    tags: ['Framer CMS', 'Design System', 'SEO Optimized', '100% Score'],
    description: 'End-to-end Figma translation with dynamic CMS collections for documentation, changelog, and customer case studies.',
    details: {
      clientQuote: '“The speed of delivery was mind-blowing. 12 pages in 7 days, zero bugs, and our SEO traffic doubled within 30 days thanks to the speed scores.”',
      clientRole: 'VP Marketing, Verve Cloud',
      challenge: 'The marketing team had an outdated WordPress site with 6-second load times and broken mobile layouts, blocking a major product launch.',
      solution: 'Built clean, modular components directly in Framer and Next.js, connecting a headless CMS for instantaneous marketing updates.',
      deliverables: [
        '12 production-ready page templates',
        'Dynamic CMS for changelogs and blogs',
        'Automated OpenGraph card generation',
        'Full Google Analytics 4 & privacy-safe cookie setup'
      ]
    },
    visualTone: {
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      accentColor: 'text-purple-400',
      accentBg: 'from-purple-950/20 to-transparent'
    }
  },
  {
    id: 'headless-commerce',
    title: 'Solstice Luxury Horology',
    subtitle: 'Headless Boutique & 3D Configurator',
    category: 'Luxury E-Commerce',
    tagline: 'Sub-400ms product page transitions with 0.000 Cumulative Layout Shift.',
    metrics: {
      speedBoost: '4.4x Quicker',
      lighthouse: 99,
      deliveryTime: '10-Day Sprint',
      lcp: '0.48s'
    },
    tags: ['Next.js App Router', 'Micro-Interactions', 'Zero CLS', 'Instant Cart'],
    description: 'Precision luxury timepiece showcase combining editorial magazine typography with an instant reactive slide-over shopping bag.',
    details: {
      clientQuote: '“Vanguard understands luxury craftsmanship. The typography is razor-sharp and the product transitions feel like butter.”',
      clientRole: 'Creative Director, Solstice Timepieces',
      challenge: 'High-resolution timepiece imagery was causing 18MB page loads and layout thrashing as images popped into the DOM.',
      solution: 'Configured modern AVIF aspect-ratio picture wrappers with blurred micro-hash placeholders and pre-warmed edge CDNs.',
      deliverables: [
        'Custom interactive 360-degree watch view',
        'Instantaneous slide-over checkout drawer',
        'Zero-CLS responsive image container system',
        'Full responsive design audit across 6 device sizes'
      ]
    },
    visualTone: {
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      accentColor: 'text-amber-400',
      accentBg: 'from-amber-950/20 to-transparent'
    }
  }
];

export const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-white/10 bg-[#08090a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Production Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Selected Agency Case Studies
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              High-fidelity design translation paired with aggressive speed optimization. Every project is built for sub-second performance and client conversion.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
              <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              <span>5.0 Upwork Rating (100% JSS)</span>
            </span>
          </div>
        </div>

        {/* ASYMMETRICAL BENTO GRID (STRICT COMPLIANCE: NO EQUAL 3-COLUMN ROWS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ROW 1: ANCHOR CARD 1 (7 COLS — DOMINANT ANCHOR) */}
          <div 
            onClick={() => setSelectedCase(CASE_STUDIES[0])}
            className="lg:col-span-7 rounded-2xl bg-[#0c0d10] border border-white/10 p-7 sm:p-9 flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-200 cursor-pointer relative overflow-hidden shadow-xl"
          >
            {/* Top row */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${CASE_STUDIES[0].visualTone.badgeColor}`}>
                  {CASE_STUDIES[0].category}
                </span>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Gauge className="h-3.5 w-3.5" />
                  <span>Lighthouse 100</span>
                  <span className="text-neutral-500">&bull;</span>
                  <span>{CASE_STUDIES[0].metrics.lcp} LCP</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                {CASE_STUDIES[0].title}
              </h3>
              <p className="text-sm font-medium text-neutral-400 mt-1">
                {CASE_STUDIES[0].subtitle}
              </p>

              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                {CASE_STUDIES[0].description}
              </p>
            </div>

            {/* Bottom telemetry + action trigger */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {CASE_STUDIES[0].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                <span>Inspect Deliverables</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* ROW 1: CARD 2 (5 COLS) */}
          <div 
            onClick={() => setSelectedCase(CASE_STUDIES[1])}
            className="lg:col-span-5 rounded-2xl bg-[#0c0d10] border border-white/10 p-7 sm:p-9 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-200 cursor-pointer relative overflow-hidden shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${CASE_STUDIES[1].visualTone.badgeColor}`}>
                  {CASE_STUDIES[1].category}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                  <Zap className="h-3.5 w-3.5" />
                  <span>Sub-50ms INP</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {CASE_STUDIES[1].title}
              </h3>
              <p className="text-sm font-medium text-neutral-400 mt-1">
                {CASE_STUDIES[1].subtitle}
              </p>

              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                {CASE_STUDIES[1].description}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {CASE_STUDIES[1].tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                <span>Inspect Deliverables</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* ROW 2: CARD 3 (5 COLS) */}
          <div 
            onClick={() => setSelectedCase(CASE_STUDIES[2])}
            className="lg:col-span-5 rounded-2xl bg-[#0c0d10] border border-white/10 p-7 sm:p-9 flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-200 cursor-pointer relative overflow-hidden shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${CASE_STUDIES[2].visualTone.badgeColor}`}>
                  {CASE_STUDIES[2].category}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
                  <Clock className="h-3.5 w-3.5" />
                  <span>7-Day Sprint</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                {CASE_STUDIES[2].title}
              </h3>
              <p className="text-sm font-medium text-neutral-400 mt-1">
                {CASE_STUDIES[2].subtitle}
              </p>

              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                {CASE_STUDIES[2].description}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {CASE_STUDIES[2].tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-purple-400 transition-colors">
                <span>Inspect Deliverables</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* ROW 2: ANCHOR CARD 4 (7 COLS — DOMINANT ANCHOR) */}
          <div 
            onClick={() => setSelectedCase(CASE_STUDIES[3])}
            className="lg:col-span-7 rounded-2xl bg-[#0c0d10] border border-white/10 p-7 sm:p-9 flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-200 cursor-pointer relative overflow-hidden shadow-xl"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${CASE_STUDIES[3].visualTone.badgeColor}`}>
                  {CASE_STUDIES[3].category}
                </span>

                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Zap className="h-3.5 w-3.5" />
                  <span>Zero CLS Guarantee</span>
                  <span className="text-neutral-500">&bull;</span>
                  <span>{CASE_STUDIES[3].metrics.lcp} LCP</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                {CASE_STUDIES[3].title}
              </h3>
              <p className="text-sm font-medium text-neutral-400 mt-1">
                {CASE_STUDIES[3].subtitle}
              </p>

              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                {CASE_STUDIES[3].description}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {CASE_STUDIES[3].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">
                <span>Inspect Deliverables</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAIL MODAL DRAWER */}
      {selectedCase && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0c0d10] border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f1115]">
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">{selectedCase.category}</span>
                <h3 className="text-lg font-bold text-white">{selectedCase.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-6 py-3 bg-[#08090a] border-b border-white/5 text-xs font-mono">
              <div className="space-y-0.5">
                <span className="text-neutral-500">Lighthouse Score</span>
                <div className="text-emerald-400 font-bold text-sm">{selectedCase.metrics.lighthouse} / 100</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-neutral-500">Speed Boost</span>
                <div className="text-white font-bold text-sm">{selectedCase.metrics.speedBoost}</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-neutral-500">LCP Metric</span>
                <div className="text-emerald-400 font-bold text-sm">{selectedCase.metrics.lcp}</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-neutral-500">Delivery Velocity</span>
                <div className="text-white font-bold text-sm">{selectedCase.metrics.deliveryTime}</div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-300">
              {/* Quote */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 italic text-neutral-200">
                {selectedCase.details.clientQuote}
                <div className="not-italic text-xs font-mono text-emerald-400 mt-2 font-medium">
                  &mdash; {selectedCase.details.clientRole}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#090a0d] border border-white/5 space-y-2">
                  <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">The Challenge</span>
                  <p className="text-xs text-neutral-400 leading-relaxed">{selectedCase.details.challenge}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#090a0d] border border-white/5 space-y-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">Vanguard Engineering</span>
                  <p className="text-xs text-neutral-400 leading-relaxed">{selectedCase.details.solution}</p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold block mb-3">
                  Scope & Deliverables Transferred
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedCase.details.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#0f1115] flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">Ready to get similar metrics for your Figma file?</span>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  document.getElementById('scope-estimator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all cursor-pointer"
              >
                Estimate This Scope
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
