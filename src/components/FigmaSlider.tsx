import React, { useState, useRef } from 'react';
import { 
  Sliders, 
  Eye, 
  MousePointer, 
  Grid, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  CreditCard
} from 'lucide-react';

export const FigmaSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [showGrid, setShowGrid] = useState(true);
  const [showTokens, setShowTokens] = useState(true);
  const [isLiveActive, setIsLiveActive] = useState(true);
  const [activeCurrency, setActiveCurrency] = useState<'USD' | 'EUR'>('USD');
  const [activePlan, setActivePlan] = useState<'annual' | 'monthly'>('annual');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="figma-vs-code" className="py-24 sm:py-32 border-t border-white/10 bg-[#08090a] relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Pixel-Fidelity Proof
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Raw Figma Canvas vs. Live Production Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Slide horizontally to inspect our 1:1 translation fidelity. We preserve every vector curve, fluid responsive margin, and micro-interaction with zero visual compromise.
          </p>
        </div>

        {/* Interactive Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-3 rounded-xl bg-[#0f1115] border border-white/10 text-xs">
          {/* Quick preset positions */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-neutral-400">View Mode:</span>
            <button
              onClick={() => setSliderPosition(15)}
              className={`px-3 py-1.5 rounded-lg font-mono transition-all cursor-pointer ${
                sliderPosition <= 25 ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white bg-white/5'
              }`}
            >
              Figma Focus (85%)
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1.5 rounded-lg font-mono transition-all cursor-pointer ${
                sliderPosition > 25 && sliderPosition < 75 ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white bg-white/5'
              }`}
            >
              Split 50 / 50
            </button>
            <button
              onClick={() => setSliderPosition(85)}
              className={`px-3 py-1.5 rounded-lg font-mono transition-all cursor-pointer ${
                sliderPosition >= 75 ? 'bg-emerald-400 text-black font-semibold' : 'text-neutral-400 hover:text-white bg-white/5'
              }`}
            >
              Live Code (85%)
            </button>
          </div>

          {/* Inspection Toggles */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                showGrid
                  ? 'border-indigo-500/50 bg-indigo-500/10 text-indigo-300'
                  : 'border-white/10 text-neutral-400 bg-white/5'
              }`}
            >
              <Grid className="h-3.5 w-3.5" />
              <span>Figma Grid Guides</span>
            </button>

            <button
              onClick={() => setShowTokens(!showTokens)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                showTokens
                  ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                  : 'border-white/10 text-neutral-400 bg-white/5'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Token Bounding Boxes</span>
            </button>
          </div>
        </div>

        {/* Visual Comparison Frame */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative select-none overflow-hidden rounded-2xl border border-white/15 bg-[#0a0b0e] shadow-2xl min-h-[580px] sm:min-h-[640px] cursor-ew-resize"
        >
          {/* TOP APP CHROME BAR */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#12141a] border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-neutral-400 hidden sm:inline">
                Figma File: <span className="text-white">vanguard_design_system_v4.fig</span> &rarr; <span className="text-emerald-400">Production DOM</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-neutral-400">
              <span className="text-[11px] bg-white/5 px-2 py-0.5 rounded border border-white/10">Zoom: 100%</span>
              <span className="text-[11px] text-emerald-400 hidden sm:inline">Delta: 0.00% Divergence</span>
            </div>
          </div>

          {/* MAIN COMPARISON CONTAINER */}
          <div className="relative w-full h-[520px] sm:h-[580px] overflow-hidden bg-[#07080a]">
            {/* 1. RIGHT PANE: PRODUCTION LIVE CODE OUTPUT (Rendered Full Width, clipped by slider) */}
            <div className="absolute inset-0 w-full h-full p-6 sm:p-10 flex flex-col justify-center items-center bg-[#07080a]">
              {/* Production Live Card */}
              <div className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#0d0f14] p-6 sm:p-8 shadow-2xl relative">
                {/* Live Output Telemetry Badge */}
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] flex items-center gap-1.5 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Render &bull; 100 Lighthouse &bull; 0.000 CLS</span>
                </div>

                {/* Live Card Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">Apex Liquidity Protocol</h3>
                      <p className="text-xs text-neutral-400">Institutional Yield & Vault Telemetry</p>
                    </div>
                  </div>

                  {/* Interactive Currency Switcher */}
                  <div className="flex items-center p-1 rounded-lg bg-white/5 border border-white/10">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveCurrency('USD'); }}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
                        activeCurrency === 'USD' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      USD
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveCurrency('EUR'); }}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
                        activeCurrency === 'EUR' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      EUR
                    </button>
                  </div>
                </div>

                {/* Metric Grid with Live Tabular Numbers */}
                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Total Value Locked</span>
                    <div className="text-2xl font-bold font-mono text-white tabular-nums flex items-baseline gap-1">
                      <span>{activeCurrency === 'USD' ? '$48,290,410' : '€44,180,920'}</span>
                      <span className="text-xs text-emerald-400 font-sans font-medium">+14.2%</span>
                    </div>
                    <span className="text-[11px] text-neutral-500">Real-time smart contract sync</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Net APY Yield</span>
                    <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums flex items-baseline gap-1">
                      <span>8.94%</span>
                      <span className="text-xs text-neutral-400 font-sans">compounded</span>
                    </div>
                    <span className="text-[11px] text-neutral-500">Audited by Trail of Bits</span>
                  </div>
                </div>

                {/* Interactive Plan Selector */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs text-neutral-300 font-medium">Enterprise SLA Protection</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActivePlan('annual'); }}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                        activePlan === 'annual' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Annual (-20%)
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setActivePlan('monthly'); }}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                        activePlan === 'monthly' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Primary Action Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); setIsLiveActive(!isLiveActive); }}
                  className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs tracking-wide hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] cursor-pointer"
                >
                  <span>{isLiveActive ? 'Live Vault Connected' : 'Connect Institution'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* 2. LEFT PANE: FIGMA RAW CANVAS (Clipped based on sliderPosition) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-[#1e1e1e] border-r border-cyan-400/80 shadow-2xl"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Internal container to match exact coordinate position of right pane */}
              <div 
                className="relative h-full p-6 sm:p-10 flex flex-col justify-center items-center bg-[#1e1e1e]"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '1000px' }}
              >
                {/* Figma Translucent Grid Lines Overlay */}
                {showGrid && (
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="h-full w-full grid grid-cols-8 gap-4 px-8">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-full bg-red-400/20 border-x border-red-400/40" />
                      ))}
                    </div>
                  </div>
                )}

                {/* The Figma Card with bounding boxes & inspection notes */}
                <div className="w-full max-w-xl rounded-2xl border-2 border-dashed border-cyan-400/70 bg-[#0d0f14] p-6 sm:p-8 shadow-2xl relative">
                  {/* Figma Component Tag */}
                  <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded bg-cyan-500 text-black font-mono font-bold text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-sm">
                    <span>Frame: LiquidityCard / AutoLayout</span>
                  </div>

                  {/* Figma Dimensions Badge */}
                  {showTokens && (
                    <div className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono text-[9px] border border-white/20">
                      W: 560px &bull; H: 412px
                    </div>
                  )}

                  {/* Figma Card Header with token boxes */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 relative">
                    {showTokens && (
                      <span className="absolute -top-1 right-20 text-[9px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-500/40">
                        gap: 12px &bull; padding-bottom: 24px
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-dashed border-cyan-400 flex items-center justify-center text-emerald-400 relative">
                        <CreditCard className="h-5 w-5" />
                        {showTokens && (
                          <span className="absolute -bottom-4 text-[8px] font-mono text-cyan-400 whitespace-nowrap">
                            40x40 r:12
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">Apex Liquidity Protocol</h3>
                        <p className="text-xs text-neutral-400">Institutional Yield & Vault Telemetry</p>
                      </div>
                    </div>

                    {/* Figma Currency Switcher */}
                    <div className="flex items-center p-1 rounded-lg bg-white/5 border border-dashed border-cyan-400/60">
                      <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-white text-black">
                        USD
                      </span>
                      <span className="px-2.5 py-1 rounded text-xs font-mono font-medium text-neutral-400">
                        EUR
                      </span>
                    </div>
                  </div>

                  {/* Figma Metric Grid with Token Annotations */}
                  <div className="grid grid-cols-2 gap-4 py-6 relative">
                    {showTokens && (
                      <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-pink-400 bg-pink-950/90 px-2 py-0.5 rounded border border-pink-500/40 z-10">
                        AutoLayout: 2 cols &bull; gap: 16px
                      </span>
                    )}

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-dashed border-cyan-400/50 space-y-1 relative">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Total Value Locked</span>
                      <div className="text-2xl font-bold font-mono text-white tabular-nums flex items-baseline gap-1">
                        <span>$48,290,410</span>
                        <span className="text-xs text-emerald-400 font-sans font-medium">+14.2%</span>
                      </div>
                      <span className="text-[11px] text-neutral-500">Real-time smart contract sync</span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-dashed border-cyan-400/50 space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Net APY Yield</span>
                      <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums flex items-baseline gap-1">
                        <span>8.94%</span>
                        <span className="text-xs text-neutral-400 font-sans">compounded</span>
                      </div>
                      <span className="text-[11px] text-neutral-500">Audited by Trail of Bits</span>
                    </div>
                  </div>

                  {/* Figma SLA Box */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-dashed border-cyan-400/50 mb-6">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs text-neutral-300 font-medium">Enterprise SLA Protection</span>
                    </div>
                    <div className="text-xs font-mono text-cyan-400">
                      var(--radius-lg)
                    </div>
                  </div>

                  {/* Figma Primary Action Button with Bounding Box */}
                  <div className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs tracking-wide flex items-center justify-center gap-2 border-2 border-cyan-400 relative">
                    {showTokens && (
                      <span className="absolute -top-2.5 right-3 text-[9px] font-mono text-cyan-400 bg-neutral-900 px-1 rounded border border-cyan-500/50">
                        h: 44px &bull; font-weight: 600
                      </span>
                    )}
                    <span>Connect Institution</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>

                  {/* Figma Designer Cursor */}
                  <div className="absolute -bottom-6 right-16 flex items-center gap-2 z-20 pointer-events-none animate-bounce">
                    <MousePointer className="h-4 w-4 text-pink-500 fill-pink-500" />
                    <span className="px-2 py-0.5 rounded-full bg-pink-500 text-white font-mono text-[9px] font-bold shadow-md">
                      Alex M. (Lead Designer)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* DRAGGABLE CENTRAL HANDLE */}
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              {/* Vertical Hairline Splitter */}
              <div className="w-0.5 h-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />

              {/* Central Draggable Knob */}
              <div
                onMouseDown={handleMouseDown}
                className="pointer-events-auto absolute h-10 w-10 rounded-full bg-neutral-900 border-2 border-emerald-400 shadow-2xl flex items-center justify-center text-white cursor-ew-resize hover:scale-110 active:scale-95 transition-transform"
                title="Drag to compare"
              >
                <Sliders className="h-4 w-4 text-emerald-400" />
              </div>

              {/* Float Tags */}
              <div className="absolute top-6 -left-20 px-2 py-1 rounded bg-neutral-900/90 border border-white/20 text-[10px] font-mono text-cyan-400 hidden sm:block">
                &larr; Figma Spec
              </div>
              <div className="absolute top-6 -right-24 px-2 py-1 rounded bg-neutral-900/90 border border-white/20 text-[10px] font-mono text-emerald-400 hidden sm:block">
                Live Build &rarr;
              </div>
            </div>
          </div>

          {/* FOOTER BAR OF SLIDER */}
          <div className="px-6 py-3 bg-[#0d0f14] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Token Parity: Spacing, Typography & Corner Radii match 100%</span>
            </div>
            <div className="font-mono text-[11px] text-neutral-400">
              Tip: Click live controls on the right pane to test real DOM state
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
