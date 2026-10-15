import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Bot, HelpCircle, Database, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FLOW_STEPS = [
  {
    step: '01',
    icon: MessageSquare,
    title: '11:04 PM Inbound',
    description: 'Buyer lands on your portal or WhatsApp and asks about a property.',
    accent: '#F5B544',
  },
  {
    step: '02',
    icon: Bot,
    title: 'Instant 10s Reply',
    description: 'AI greets the buyer warmly, verifies availability, and starts qualification.',
    accent: '#2BB58C',
  },
  {
    step: '03',
    icon: HelpCircle,
    title: '3 Core Questions',
    description: 'Natural conversation extracts exact Budget, Preferred Area, and Timeline.',
    accent: '#F5B544',
  },
  {
    step: '04',
    icon: Database,
    title: 'Live CRM & Sheet Sync',
    description: 'Data structured automatically into HubSpot, Salesforce, or Google Sheets.',
    accent: '#2BB58C',
  },
  {
    step: '05',
    icon: UserCheck,
    title: 'Agent Morning Hand-off',
    description: 'Your agent wakes up to warm, pre-qualified appointments ready to close.',
    accent: '#F2D7B6',
  },
];

export const SolutionFlowSVG: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionPref.matches);

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far container has scrolled across screen
      const start = windowHeight * 0.8;
      const end = -rect.height * 0.2;
      const progress = (start - rect.top) / (start - end);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const effectiveProgress = reducedMotion ? 1 : scrollProgress;

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-xs font-mono text-[#2BB58C] uppercase tracking-wider">The Solution Flow</span>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          From late-night message to signed morning contract.
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          How the flagship AI lead-qualification pipeline converts after-hours inquiries into qualified CRM contacts while your agents sleep.
        </p>
      </div>

      {/* Interactive Self-Drawing SVG Flow on Desktop */}
      <div className="relative hidden md:block mb-16">
        <svg
          viewBox="0 0 1100 120"
          className="w-full h-auto overflow-visible select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Track Line */}
          <path
            d="M 50 60 L 1050 60"
            stroke="#1B2A4A"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Animated Connecting Stroke */}
          <path
            d="M 50 60 L 1050 60"
            stroke="url(#flowGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - effectiveProgress)}
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />

          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5B544" />
              <stop offset="50%" stopColor="#2BB58C" />
              <stop offset="100%" stopColor="#F2D7B6" />
            </linearGradient>
          </defs>

          {/* Node Circles */}
          {FLOW_STEPS.map((step, idx) => {
            const cx = 50 + idx * 250;
            const isPassed = effectiveProgress >= idx * 0.22;
            return (
              <g key={step.step} className="transition-all duration-300">
                {/* Outer Glow Ring */}
                <circle
                  cx={cx}
                  cy="60"
                  r="24"
                  fill="#0B1220"
                  stroke={isPassed ? step.accent : '#1B2A4A'}
                  strokeWidth="3"
                />
                <circle
                  cx={cx}
                  cy="60"
                  r="10"
                  fill={isPassed ? step.accent : '#1B2A4A'}
                  className="transition-colors duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* 5 Step Explanations Under the SVG */}
        <div className="grid grid-cols-5 gap-4 pt-6">
          {FLOW_STEPS.map((step, idx) => {
            const isPassed = effectiveProgress >= idx * 0.2;
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={`transition-all duration-500 space-y-2 ${
                  isPassed ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#F5B544]" />
                  <span className="text-xs font-mono font-semibold text-slate-400">{step.step}</span>
                </div>
                <h3 className="text-sm font-semibold text-white font-display">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Step Flow */}
      <div className="md:hidden space-y-6">
        {FLOW_STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.step} className="flex gap-4 p-4 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-[#F5B544]/50 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#F5B544]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#2BB58C] font-semibold">{step.step}</span>
                <h3 className="text-base font-bold text-white font-display">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flagship Callout Banner */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1B2A4A]/60 via-slate-900/80 to-[#0B1220] border border-slate-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono text-[#F5B544]">FLAGSHIP ARCHITECTURE</span>
          <h3 className="text-2xl font-bold font-display text-white">
            See the live WhatsApp simulator & lead table in action
          </h3>
          <p className="text-sm text-slate-300">
            Test how the AI asks about budget, area and timeline, then extracts and formats the lead into CRM records.
          </p>
        </div>
        <Link
          to="/ai-assistant"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-[#F5B544] hover:bg-[#fabf59] rounded-md transition-colors shrink-0 shadow-lg"
        >
          <span>Explore AI Assistant & Demo</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
