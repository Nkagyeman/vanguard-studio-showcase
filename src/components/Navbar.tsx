import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenCodeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#08090a]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Studio Wordmark + Availability Badge */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="flex items-center gap-2 group">
              {/* Geometric studio mark */}
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/15 text-white transition-colors group-hover:border-emerald-500/50">
                <span className="font-mono text-xs font-bold tracking-tighter text-emerald-400">V/</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  VANGUARD
                </span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  Studio &bull; Speed Lab
                </span>
              </div>
            </a>

            {/* Pulsing Availability Indicator */}
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium tracking-tight">Available for Q4/Q1 Projects</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide">
            <button
              onClick={() => scrollTo('work')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollTo('figma-vs-code')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Figma to Framer
            </button>
            <button
              onClick={() => scrollTo('speed-benchmark')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Performance
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Process
            </button>
            <button
              onClick={() => scrollTo('scope-estimator')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Estimator
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#08090a] text-xs font-semibold hover:bg-neutral-200 transition-all active:scale-[0.98] shadow-sm cursor-pointer"
            >
              <span>Book Sprint</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEstimator}
              className="px-3 py-1.5 rounded-lg bg-white text-[#08090a] text-xs font-semibold"
            >
              Book Sprint
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/10 bg-[#0c0d10] px-4 pt-3 pb-5 space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Accepting Q4/Q1 Client Sprints</span>
          </div>
          <div className="flex flex-col space-y-1 text-sm">
            <button
              onClick={() => scrollTo('work')}
              className="text-left px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Work
            </button>
            <button
              onClick={() => scrollTo('figma-vs-code')}
              className="text-left px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Figma to Framer
            </button>
            <button
              onClick={() => scrollTo('speed-benchmark')}
              className="text-left px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Performance
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="text-left px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Process
            </button>
            <button
              onClick={() => scrollTo('scope-estimator')}
              className="text-left px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Scope Estimator
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
