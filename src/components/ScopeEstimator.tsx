import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Send, 
  Copy, 
  Check, 
  ShieldCheck, 
  Clock
} from 'lucide-react';

interface ScopeOption {
  id: string;
  label: string;
  sublabel: string;
  basePrice: number;
  days: number;
}

const PROJECT_TYPES: ScopeOption[] = [
  {
    id: 'landing',
    label: 'High-Impact Landing Page',
    sublabel: 'Single-page showcase with rich micro-interactions and sub-second load time.',
    basePrice: 2200,
    days: 6
  },
  {
    id: 'multipage',
    label: 'Multi-Page Platform (3–7 Pages)',
    sublabel: 'Complete marketing site, pricing matrix, company, and conversion funnels.',
    basePrice: 4200,
    days: 12
  },
  {
    id: 'speed',
    label: 'Core Web Vitals & Speed Overhaul',
    sublabel: 'Auditing existing bloated build, stripping heavy scripts, achieving 99+ Lighthouse.',
    basePrice: 1800,
    days: 5
  }
];

const READINESS_OPTIONS = [
  { id: 'figma-ready', label: 'Figma File 100% Ready', multiplier: 1.0, note: 'Direct translation starts on Day 1' },
  { id: 'figma-rough', label: 'Rough Wireframes (Needs Polish)', multiplier: 1.25, note: 'Includes 2 days of Figma token & UI refinement' },
  { id: 'live-rebuild', label: 'Existing Slow Site Rebuild', multiplier: 1.15, note: 'Includes asset extraction and technical teardown' }
];

const VELOCITY_OPTIONS = [
  { id: 'rush', label: 'Rush Sprint (5–7 Days)', multiplier: 1.2, note: 'Dedicated engineer priority allocation' },
  { id: 'standard', label: 'Standard Cadence (2–3 Weeks)', multiplier: 1.0, note: 'Normal sprint milestones' },
  { id: 'flexible', label: 'Flexible / Staged Launch', multiplier: 0.95, note: 'Staggered release roadmap' }
];

const ADDONS = [
  { id: 'tokens', label: 'Figma Design System & Token Library', price: 600, desc: 'Reusable components & color/type variables' },
  { id: 'lighthouse-sla', label: '100/100 Lighthouse Performance SLA', price: 450, desc: 'Contractual speed guarantee with audit report' },
  { id: 'shaders', label: 'Interactive Canvas / 60fps Micro-Motion', price: 750, desc: 'Custom GPU shaders & fluid physics gestures' },
  { id: 'cms', label: 'Dynamic CMS Collections (Framer / Next.js)', price: 550, desc: 'Client-friendly blog, changelog, or case studies' }
];

export const ScopeEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('landing');
  const [selectedReadiness, setSelectedReadiness] = useState<string>('figma-ready');
  const [selectedVelocity, setSelectedVelocity] = useState<string>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['tokens', 'lighthouse-sla']);
  const [copiedProposal, setCopiedProposal] = useState(false);
  const [showDirectContact, setShowDirectContact] = useState(false);
  const [clientEmail, setClientEmail] = useState('');
  const [figmaUrl, setFigmaUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Calculation
  const calculation = useMemo(() => {
    const base = PROJECT_TYPES.find(p => p.id === selectedType) || PROJECT_TYPES[0];
    const readiness = READINESS_OPTIONS.find(r => r.id === selectedReadiness) || READINESS_OPTIONS[0];
    const velocity = VELOCITY_OPTIONS.find(v => v.id === selectedVelocity) || VELOCITY_OPTIONS[0];

    const addonsCost = selectedAddons.reduce((acc, id) => {
      const addon = ADDONS.find(a => a.id === id);
      return acc + (addon ? addon.price : 0);
    }, 0);

    const calculatedPrice = Math.round((base.basePrice * readiness.multiplier * velocity.multiplier) + addonsCost);
    const lowEstimate = Math.round(calculatedPrice * 0.92 / 100) * 100;
    const highEstimate = Math.round(calculatedPrice * 1.08 / 100) * 100;

    let deliveryDays = Math.round(base.days * (velocity.id === 'rush' ? 0.7 : 1.0));
    if (deliveryDays < 4) deliveryDays = 4;

    return {
      priceRange: `$${lowEstimate.toLocaleString()} – $${highEstimate.toLocaleString()}`,
      medianPrice: `$${calculatedPrice.toLocaleString()}`,
      deliveryDays: `${deliveryDays}–${deliveryDays + 3} business days`,
      typeObj: base,
      readinessObj: readiness,
      velocityObj: velocity
    };
  }, [selectedType, selectedReadiness, selectedVelocity, selectedAddons]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const generateUpworkMessage = () => {
    const addonsList = selectedAddons
      .map(id => ADDONS.find(a => a.id === id)?.label)
      .filter(Boolean)
      .map(title => `  • ${title}`)
      .join('\n');

    return `Hi Vanguard Team,

I'm inquiring regarding a development sprint for our project.

Project Details:
• Scope: ${calculation.typeObj.label}
• Readiness: ${calculation.readinessObj.label}
• Timeline Target: ${calculation.velocityObj.label}
• Estimated Duration: ${calculation.deliveryDays}
• Target Investment: ${calculation.priceRange}

Selected Enhancements:
${addonsList || '  • Standard Core Package'}

Figma / Staging URL: ${figmaUrl || '[Insert your Figma URL here]'}

Looking forward to reviewing your audit and scheduling a technical kickoff.`;
  };

  const copyUpworkProposal = () => {
    const text = generateUpworkMessage();
    navigator.clipboard.writeText(text);
    setCopiedProposal(true);
    setTimeout(() => setCopiedProposal(false), 2500);
  };

  const handleSendScope = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="scope-estimator" className="py-24 sm:py-32 border-t border-white/10 bg-[#08090a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Instant Scope Estimator
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Transparent Pricing & Sprint Scope Calculator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            No vague quotes or hidden fees. Select your project parameters below to get an authentic ballpark investment and delivery timeline for Upwork milestone escrow.
          </p>
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: PARAMETER SELECTORS (7 COLS) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center justify-between">
                <span>1. Select Project Scope</span>
                <span className="text-emerald-400">Step 1 of 4</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#12141a] border-emerald-500/60 shadow-lg shadow-emerald-950/20'
                          : 'bg-[#0c0d10] border-white/10 hover:border-white/20 hover:bg-[#0f1115]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-emerald-400 bg-emerald-400' : 'border-neutral-500'
                          }`}>
                            {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-black" />}
                          </div>
                          <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                            {type.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-medium text-emerald-400">
                          From ${type.basePrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-2 pl-6">
                        {type.sublabel}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Design Readiness */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center justify-between">
                <span>2. Current Design Readiness</span>
                <span className="text-emerald-400">Step 2 of 4</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {READINESS_OPTIONS.map((opt) => {
                  const isSelected = selectedReadiness === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedReadiness(opt.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#12141a] border-emerald-500/60'
                          : 'bg-[#0c0d10] border-white/10 hover:border-white/20 hover:bg-[#0f1115]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`h-3 w-3 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-emerald-400 bg-emerald-400' : 'border-neutral-500'
                        }`} />
                        <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                          {opt.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        {opt.note}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Delivery Velocity */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center justify-between">
                <span>3. Delivery Cadence</span>
                <span className="text-emerald-400">Step 3 of 4</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VELOCITY_OPTIONS.map((v) => {
                  const isSelected = selectedVelocity === v.id;
                  return (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVelocity(v.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#12141a] border-emerald-500/60'
                          : 'bg-[#0c0d10] border-white/10 hover:border-white/20 hover:bg-[#0f1115]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`h-3 w-3 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-emerald-400 bg-emerald-400' : 'border-neutral-500'
                        }`} />
                        <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                          {v.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        {v.note}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Modular Add-ons */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center justify-between">
                <span>4. Add-on Technical Enhancements (Optional)</span>
                <span className="text-emerald-400">Customized</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#12141a] border-emerald-500/50'
                          : 'bg-[#0c0d10] border-white/10 hover:border-white/20 hover:bg-[#0f1115]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className={`h-4 w-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-neutral-600'
                          }`}>
                            {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                          <span className={`text-xs font-semibold ${isChecked ? 'text-white' : 'text-neutral-300'}`}>
                            {addon.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-emerald-400">
                          +${addon.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 pl-6">
                        {addon.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DYNAMIC ESTIMATE CARD & UPWORK INTAKE (5 COLS) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl bg-[#0c0d10] border-2 border-emerald-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Dynamic Ballpark Scope
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Sprint Investment Summary</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Calculator className="h-5 w-5" />
                </div>
              </div>

              {/* Price & Timeline Block */}
              <div className="py-6 border-b border-white/10 space-y-4">
                <div>
                  <span className="text-xs font-mono text-neutral-400">Estimated Project Investment</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums mt-1">
                    {calculation.priceRange}
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    Milestone-funded via Upwork Escrow (Fixed Price or Hourly)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                    <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                      <Clock className="h-3 w-3 text-emerald-400" />
                      <span>Delivery Window</span>
                    </span>
                    <div className="text-xs font-mono font-bold text-white">
                      {calculation.deliveryDays}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                    <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3 text-emerald-400" />
                      <span>Speed Guarantee</span>
                    </span>
                    <div className="text-xs font-mono font-bold text-emerald-400">
                      99+ Lighthouse SLA
                    </div>
                  </div>
                </div>
              </div>

              {/* Deliverables Checklist Included */}
              <div className="py-5 border-b border-white/10 space-y-2 text-xs">
                <span className="font-mono text-neutral-400 text-[11px] uppercase tracking-wider block font-medium">
                  Guaranteed Deliverables Included:
                </span>
                <div className="space-y-1.5 text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Pixel-perfect Figma to Framer / Next.js code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Responsive testing across iOS, Android & Desktop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Continuous private staging preview URL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>30-day post-launch bug warranty</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-6 space-y-3">
                {/* 1. Copy Upwork Proposal Button */}
                <button
                  onClick={copyUpworkProposal}
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-xs tracking-wide hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] cursor-pointer"
                >
                  {copiedProposal ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Copied Upwork Proposal Text!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Pre-Formatted Scope for Upwork</span>
                    </>
                  )}
                </button>

                {/* 2. Direct Intake Modal Trigger */}
                <button
                  onClick={() => setShowDirectContact(!showDirectContact)}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 font-medium text-xs border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{showDirectContact ? 'Close Direct Form' : 'Send Scope Directly to Studio'}</span>
                </button>

                {/* Direct Form Dropdown */}
                {showDirectContact && (
                  <form onSubmit={handleSendScope} className="pt-3 space-y-3 animate-in fade-in duration-150">
                    {submitted ? (
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <Check className="h-4 w-4" />
                          <span>Scope Received!</span>
                        </div>
                        <p className="text-[11px] text-neutral-300">
                          We will review your parameters and respond with a detailed technical breakdown within 4 hours.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div>
                          <input
                            type="email"
                            required
                            placeholder="Your work email"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <input
                            type="url"
                            placeholder="Figma Link or Existing Site (optional)"
                            value={figmaUrl}
                            onChange={(e) => setFigmaUrl(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors cursor-pointer"
                        >
                          Submit Project Scope
                        </button>
                      </>
                    )}
                  </form>
                )}

                {/* Trust footnote */}
                <p className="text-center text-[10px] text-neutral-400 pt-1">
                  100% Upwork Escrow Protection &bull; NDA signed prior to Figma access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
