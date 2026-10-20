import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FigmaSlider } from './components/FigmaSlider';
import { SpeedBenchmark } from './components/SpeedBenchmark';
import { CaseStudies } from './components/CaseStudies';
import { SprintProcess } from './components/SprintProcess';
import { ScopeEstimator } from './components/ScopeEstimator';
import { Footer } from './components/Footer';
import { CodeQualityModal } from './components/CodeQualityModal';
import { ArrowUpRight } from 'lucide-react';

export function App() {
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-[#94a3b8] selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Dynamic Header */}
      <Navbar 
        onOpenEstimator={() => scrollTo('scope-estimator')}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenCodeModal={() => setIsCodeModalOpen(true)}
          onExploreWork={() => scrollTo('figma-vs-code')}
          onOpenEstimator={() => scrollTo('scope-estimator')}
        />

        {/* The "Figma vs. Live Build" Interactive Slider */}
        <FigmaSlider />

        {/* Live Speed & Core Web Vitals Benchmark Simulator */}
        <SpeedBenchmark />

        {/* Selected Agency Case Studies (Asymmetrical Bento Grid) */}
        <CaseStudies />

        {/* 4-Step Agency Sprint Timeline */}
        <SprintProcess />

        {/* Interactive Scope Estimator & Upwork Intake */}
        <ScopeEstimator />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
        onOpenEstimator={() => scrollTo('scope-estimator')}
      />

      {/* Interactive Code Architecture Inspector Modal */}
      <CodeQualityModal 
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />

      {/* Mobile Floating Action Trigger Bar */}
      <aside aria-label="Quick sprint inquiry" className="sm:hidden fixed bottom-4 left-4 right-4 z-30">
        <div className="p-3 rounded-2xl bg-[#0e1015]/95 backdrop-blur-lg border border-white/15 shadow-2xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Vanguard Studio</span>
              <span className="text-[10px] text-emerald-400 font-mono">Q4/Q1 Booking Active</span>
            </div>
          </div>

          <button
            onClick={() => scrollTo('scope-estimator')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-black font-semibold text-xs shadow-md active:scale-95 transition-transform"
          >
            <span>Book Sprint</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </aside>
    </div>
  );
}

export default App;
