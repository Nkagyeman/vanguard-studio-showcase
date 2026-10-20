import React, { useState } from 'react';
import { 
  FileSearch, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock
} from 'lucide-react';

interface SprintStep {
  number: string;
  title: string;
  shortSummary: string;
  duration: string;
  clientInput: string;
  vanguardOutput: string[];
  icon: React.ReactNode;
  tags: string[];
}

const STEPS: SprintStep[] = [
  {
    number: '01',
    title: 'Design Audit & Token Extraction',
    shortSummary: 'Deconstructing your Figma variables, layer trees, color palettes, and typographic scales.',
    duration: 'Day 1 &bull; 24h Turnaround',
    clientInput: 'View-access Figma link or .fig export + brand guidelines.',
    vanguardOutput: [
      'Comprehensive design token dictionary (CSS variables / Tailwind config)',
      'Typography clamp() curves calculated for all screen sizes',
      'Asset inventory map (SVG vector cleanup, image export matrix)',
      'Interactive component breakdown and state taxonomy'
    ],
    icon: <FileSearch className="h-5 w-5 text-emerald-400" />,
    tags: ['Figma Tokens', 'Variable Extraction', 'Asset Prep']
  },
  {
    number: '02',
    title: 'High-Fidelity Responsive Build',
    shortSummary: 'Translating Figma frames into clean, semantic Framer or Next.js components across all device breakpoints.',
    duration: 'Days 2–4 &bull; Fluid Architecture',
    clientInput: 'Sign-off on token map and confirmation of key device targets.',
    vanguardOutput: [
      'Fluid responsive breakpoints (Desktop 1440+, Laptop 1080, Tablet 768, Mobile 390)',
      'Semantic HTML5 structure with ARIA landmark semantics',
      'Clean modular component directory with zero spaghetti code',
      'Private preview deployment on staging link with instant live updates'
    ],
    icon: <Terminal className="h-5 w-5 text-cyan-400" />,
    tags: ['Framer Canvas', 'Next.js App Router', 'Tailwind CSS']
  },
  {
    number: '03',
    title: 'Interaction & Micro-Motion Polish',
    shortSummary: 'Injecting physics-based micro-interactions, silky hover states, and smooth scroll transitions.',
    duration: 'Days 5–6 &bull; Hardware Acceleration',
    clientInput: 'Feedback on interaction speed and motion preferences.',
    vanguardOutput: [
      'Silky hover & active states with &lt;180ms reaction time',
      'GPU-accelerated scroll-linked animations (zero CPU thrashing)',
      'Accessible focus rings and keyboard navigation compliance',
      'Interactive form states with instant tactile validation'
    ],
    icon: <Sparkles className="h-5 w-5 text-purple-400" />,
    tags: ['Micro-Interactions', 'GPU Transforms', '60fps Physics']
  },
  {
    number: '04',
    title: 'Asset Compression & Web Vitals Hardening',
    shortSummary: 'Eliminating render-blocking bottlenecks, minifying assets, and verifying 99+ Lighthouse scores.',
    duration: 'Day 7 &bull; Final Delivery & Handoff',
    clientInput: 'Final staging sign-off & production DNS/domain access.',
    vanguardOutput: [
      'Lighthouse 99+ verified audit certificate (Desktop & Mobile)',
      'Sub-second Largest Contentful Paint (&lt;800ms globally)',
      'Complete production repository or Framer remix link transfer',
      '30-day post-launch warranty with priority bug resolution'
    ],
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
    tags: ['Lighthouse 99+', 'Sub-800ms LCP', '30-Day Warranty']
  }
];

export const SprintProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 sm:py-32 border-t border-white/10 bg-[#08090a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Execution Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The 4-Step High-Velocity Sprint Timeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A battle-tested production pipeline engineered for speed, transparency, and zero scope drift. You get continuous staging updates and 100% predictable handoffs.
          </p>
        </div>

        {/* Sprint Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Step Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#12141a] border-emerald-500/50 shadow-lg shadow-emerald-950/20'
                      : 'bg-[#0c0d10] border-white/5 hover:border-white/20 hover:bg-[#0f1115]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-emerald-500 text-black' : 'bg-white/10 text-neutral-300'
                      }`}>
                        STEP {step.number}
                      </span>
                      <h3 className={`text-base font-semibold ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                        {step.title}
                      </h3>
                    </div>

                    <div className={`transition-transform ${isActive ? 'text-emerald-400 translate-x-1' : 'text-neutral-600'}`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 pl-1">
                    {step.shortSummary}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 text-neutral-400">
                      <Clock className="h-3 w-3 text-emerald-400" />
                      <span dangerouslySetInnerHTML={{ __html: step.duration }} />
                    </span>
                    <span className={isActive ? 'text-emerald-400 font-semibold' : 'text-neutral-400'}>
                      {isActive ? 'Currently Inspecting' : 'Click to inspect'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Step Inspection Card (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0c0d10] border border-white/10 p-7 sm:p-9 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {activeStep.icon}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Step {activeStep.number} &bull; Detailed Scope Breakdown
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-300">
                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                <span dangerouslySetInnerHTML={{ __html: activeStep.duration }} />
              </div>
            </div>

            {/* Inputs & Outputs */}
            <div className="py-6 space-y-6">
              {/* Required Client Input */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1 font-semibold">
                  Client Input Required:
                </span>
                <p className="text-xs text-neutral-300 font-medium">
                  {activeStep.clientInput}
                </p>
              </div>

              {/* Vanguard Hard Deliverables */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3 font-semibold">
                  Guaranteed Vanguard Deliverables:
                </span>
                <div className="space-y-2.5">
                  {activeStep.vanguardOutput.map((deliverable, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#090a0d] border border-white/5 text-xs text-neutral-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {activeStep.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-neutral-400 font-mono">
                Ready to kick off Step 01 for your project?
              </span>

              <button
                onClick={() => {
                  document.getElementById('scope-estimator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all cursor-pointer shadow-md"
              >
                <span>Calculate Sprint Cost</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
