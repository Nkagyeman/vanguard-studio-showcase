import React, { useState } from 'react';
import { 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  category: string;
  before: {
    score: number;
    fcp: string;
    lcp: string;
    fid: string;
    cls: string;
    bundleSize: string;
    scripts: number;
    summary: string;
  };
  after: {
    score: number;
    fcp: string;
    lcp: string;
    fid: string;
    cls: string;
    bundleSize: string;
    scripts: number;
    summary: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: 'fintech',
    name: 'VaultX Financial Core',
    category: 'Fintech & Web3 App',
    before: {
      score: 38,
      fcp: '2.8s',
      lcp: '4.2s',
      fid: '320ms',
      cls: '0.28',
      bundleSize: '14.8 MB',
      scripts: 24,
      summary: 'Heavy Webpack bundle, uncompressed hero PNGs, render-blocking analytics scripts, and severe layout shifting during hydration.'
    },
    after: {
      score: 99,
      fcp: '0.4s',
      lcp: '0.6s',
      fid: '0ms',
      cls: '0.000',
      bundleSize: '86 KB',
      scripts: 0,
      summary: 'Critical CSS inlined, zero-runtime tokens, picture tags with modern AVIF, and deferred async telemetry.'
    }
  },
  {
    id: 'ecommerce',
    name: 'Aura Luxury Apparel',
    category: 'Headless E-Commerce',
    before: {
      score: 29,
      fcp: '3.4s',
      lcp: '5.1s',
      fid: '440ms',
      cls: '0.34',
      bundleSize: '22.4 MB',
      scripts: 38,
      summary: 'Excessive Shopify app tags, unoptimized video background, and third-party font blocking.'
    },
    after: {
      score: 100,
      fcp: '0.3s',
      lcp: '0.5s',
      fid: '0ms',
      cls: '0.000',
      bundleSize: '112 KB',
      scripts: 0,
      summary: 'Edge-rendered micro-frontend, preloaded hero assets, lazy hydration for cart drawer.'
    }
  },
  {
    id: 'agency',
    name: 'Kinetics Creative Studio',
    category: 'Agency Portfolio',
    before: {
      score: 41,
      fcp: '2.6s',
      lcp: '4.0s',
      fid: '280ms',
      cls: '0.19',
      bundleSize: '16.2 MB',
      scripts: 19,
      summary: 'Bloated Three.js canvas initialization on page load, blocking all text rendering.'
    },
    after: {
      score: 98,
      fcp: '0.4s',
      lcp: '0.7s',
      fid: '12ms',
      cls: '0.000',
      bundleSize: '94 KB',
      scripts: 0,
      summary: 'Dynamic import for 3D shaders, intersection-observed execution, and instant static poster fallback.'
    }
  }
];

export const SpeedBenchmark: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);

  const runAudit = () => {
    setIsAuditing(true);
    setAuditStep(1);

    setTimeout(() => setAuditStep(2), 400);
    setTimeout(() => setAuditStep(3), 900);
    setTimeout(() => {
      setAuditStep(4);
      setTimeout(() => {
        setIsAuditing(false);
        setAuditStep(0);
      }, 500);
    }, 1500);
  };

  return (
    <section id="speed-benchmark" className="py-24 sm:py-32 border-t border-white/10 bg-[#08090a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Performance Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sub-Second Speed & Core Web Vitals Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Slow load times destroy conversion rates. We systematically eliminate render-blocking assets, eliminate layout shifts, and guarantee 99+ mobile Lighthouse scores on every build.
          </p>
        </div>

        {/* Scenario Switcher + Live Audit Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4 rounded-xl bg-[#0d0e12] border border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 mr-2">Audit Scenario:</span>
            {SCENARIOS.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => {
                  setSelectedScenario(scenario);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedScenario.id === scenario.id
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white bg-white/5 border border-white/5'
                }`}
              >
                {scenario.name}
              </button>
            ))}
          </div>

          <button
            onClick={runAudit}
            disabled={isAuditing}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wide transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            <RotateCcw className={`h-3.5 w-3.5 ${isAuditing ? 'animate-spin' : ''}`} />
            <span>{isAuditing ? 'Simulating Lighthouse 12.0...' : 'Run Live Lighthouse Audit'}</span>
          </button>
        </div>

        {/* Audit Animation Overlay Modal / Banner */}
        {isAuditing && (
          <div className="mb-8 p-4 rounded-xl bg-neutral-900 border border-emerald-500/40 text-xs font-mono text-emerald-400 animate-in fade-in duration-150">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2">
                <Cpu className="h-4 w-4 animate-spin text-emerald-400" />
                <span>Chromium Headless Audit in Progress: Moto G4 &bull; 4G Throttled</span>
              </span>
              <span className="text-neutral-400 tabular-nums">Step {auditStep} / 4</span>
            </div>
            <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-400 h-full transition-all duration-300"
                style={{ width: `${auditStep * 25}%` }}
              />
            </div>
            <p className="mt-2 text-neutral-300 text-[11px]">
              {auditStep === 1 && '> Warming synthetic Chrome container & DNS cache prefetch...'}
              {auditStep === 2 && '> Auditing First Contentful Paint & DOM hydration tree...'}
              {auditStep === 3 && '> Calculating Cumulative Layout Shift & Total Blocking Time...'}
              {auditStep === 4 && '> Verification Complete: 99+ Core Web Vitals Achieved!'}
            </p>
          </div>
        )}

        {/* COMPARISON CARDS: ASYMMETRICAL BEFORE & AFTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 1. BEFORE (CLIENT'S UNOPTIMIZED SITE) — 5 COLS */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0c0d10] border border-red-500/20 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-red-400/90 font-medium">
                    Pre-Optimization State
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Bloated Legacy Build</h3>
                </div>
                <div className="flex items-center justify-center h-16 w-16 rounded-full border-4 border-red-500/80 bg-red-500/10 text-red-400 font-mono text-2xl font-bold tabular-nums">
                  {selectedScenario.before.score}
                </div>
              </div>

              {/* Core Web Vitals Matrix */}
              <div className="grid grid-cols-2 gap-3 py-6">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <span>LCP (Largest Paint)</span>
                    <AlertTriangle className="h-3 w-3 text-red-400" />
                  </div>
                  <div className="text-xl font-mono font-bold text-red-400 tabular-nums">
                    {selectedScenario.before.lcp}
                  </div>
                  <span className="text-[10px] text-neutral-400">Poor (Target &lt; 2.5s)</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <span>FID / INP (Interactivity)</span>
                    <AlertTriangle className="h-3 w-3 text-amber-400" />
                  </div>
                  <div className="text-xl font-mono font-bold text-amber-400 tabular-nums">
                    {selectedScenario.before.fid}
                  </div>
                  <span className="text-[10px] text-neutral-400">Noticeable input lag</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <span>Cumulative Shift</span>
                    <AlertTriangle className="h-3 w-3 text-red-400" />
                  </div>
                  <div className="text-xl font-mono font-bold text-red-400 tabular-nums">
                    {selectedScenario.before.cls}
                  </div>
                  <span className="text-[10px] text-neutral-400">Jarring page jump</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <span>Bundle Payload</span>
                    <AlertTriangle className="h-3 w-3 text-red-400" />
                  </div>
                  <div className="text-xl font-mono font-bold text-neutral-200 tabular-nums">
                    {selectedScenario.before.bundleSize}
                  </div>
                  <span className="text-[10px] text-red-400">{selectedScenario.before.scripts} blocking scripts</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 leading-relaxed">
              <span className="font-semibold text-neutral-300">Root Cause:</span> {selectedScenario.before.summary}
            </div>
          </div>

          {/* 2. AFTER (VANGUARD RE-ENGINEERED BUILD) — 7 COLS (DOMINANT ANCHOR) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0c0d10] border-2 border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between relative shadow-xl shadow-emerald-950/20">
            {/* Vanguard Advantage Tag */}
            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-emerald-500 text-black font-mono font-bold text-[10px] uppercase tracking-wider shadow-md">
              Vanguard Standard &bull; Sub-Second Render
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Post-Vanguard Engineering
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Zero-Bloat Production Architecture</h3>
                </div>
                <div className="flex items-center justify-center h-20 w-20 rounded-full border-4 border-emerald-400 bg-emerald-500/10 text-emerald-400 font-mono text-3xl font-extrabold tabular-nums shadow-lg shadow-emerald-500/20">
                  {selectedScenario.after.score}
                </div>
              </div>

              {/* Core Web Vitals Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/20 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <span>LCP</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-emerald-400 tabular-nums">
                    {selectedScenario.after.lcp}
                  </div>
                  <span className="text-[10px] text-emerald-400/90 font-medium">Sub-second paint</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/20 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <span>FID / INP</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-emerald-400 tabular-nums">
                    {selectedScenario.after.fid}
                  </div>
                  <span className="text-[10px] text-emerald-400/90 font-medium">Instant tactile response</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/20 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <span>CLS</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-emerald-400 tabular-nums">
                    {selectedScenario.after.cls}
                  </div>
                  <span className="text-[10px] text-emerald-400/90 font-medium">Zero layout shift</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/20 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <span>Bundle</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-white tabular-nums">
                    {selectedScenario.after.bundleSize}
                  </div>
                  <span className="text-[10px] text-emerald-400/90 font-medium">-99.4% payload reduction</span>
                </div>
              </div>
            </div>

            {/* Vanguard Hardening Methods List */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs text-neutral-300">
                <span className="font-semibold text-emerald-400">Optimization Implemented:</span> {selectedScenario.after.summary}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Tree-shaken modules</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Edge image compression</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Zero JS hydration shifts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
