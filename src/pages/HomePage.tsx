import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HomeHero } from '../components/home/HomeHero';
import { LiveAssistantDemo } from '../components/demo/LiveAssistantDemo';
import { SERVICES } from '../components/home/ServicesSummary';

export const HomePage: React.FC = () => {
  const demoRef = useRef<HTMLDivElement>(null);

  const handleScrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-black text-white">
      {/* 1. Hero Locked to Full Screen */}
      <HomeHero onWatchDemo={handleScrollToDemo} />

      {/* Content Container Below Hero */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14 py-20 space-y-28">
        {/* 2. The Problem: Leads go unanswered at night */}
        <section className="space-y-8 border-t border-white/20 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
              01 // THE PROBLEM
            </span>
            <span className="text-xs text-white/60">AFTER-HOURS INQUIRIES GO COLD</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-light tracking-wide text-white leading-tight">
                High-intent buyers browse at night. Your office opens at nine.
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                A serious international buyer in London, Dubai, or Singapore inquires on WhatsApp at 11:24 PM.
                If they receive no response within 15 minutes, they reach out to competing agencies.
                By morning, the inquiry is cold.
              </p>
            </div>

            <div className="lg:col-span-6 border border-white/20 p-6 bg-[#0B0B0B] space-y-4">
              <div className="font-pixel text-xs text-white/60 uppercase tracking-wider">
                COMMISSION LOSS TIMELINE
              </div>
              <div className="space-y-3 text-xs text-white/80">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/50">11:00 PM – 08:00 AM:</span>
                  <span className="text-white font-mono">9-Hour Response Void</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/50">Buyer Waiting Patience:</span>
                  <span className="text-white font-mono">Under 5 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">With Vantage AI Assistant:</span>
                  <span className="text-white font-mono font-bold">12 Seconds Immediate Qualification</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution: Simple Static Line Diagram */}
        <section className="space-y-8 border-t border-white/20 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
              02 // THE SOLUTION
            </span>
            <span className="text-xs text-white/60">AUTOMATED PIPELINE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
            Five-Step Qualification Architecture
          </h2>

          {/* Simple Static Line Diagram: message, instant reply, questions, saved lead, agent follow-up */}
          <div className="border border-white/20 p-6 sm:p-8 bg-[#0B0B0B]">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {/* Step 1 */}
              <div className="space-y-2 border-l border-white/30 md:border-l-0 md:border-t md:border-white/30 pl-4 md:pl-0 md:pt-4">
                <div className="font-pixel text-xs text-white/50 uppercase">Step 01</div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Message</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Late-night buyer sends WhatsApp or website inquiry about a listing.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-2 border-l border-white/30 md:border-l-0 md:border-t md:border-white/30 pl-4 md:pl-0 md:pt-4">
                <div className="font-pixel text-xs text-white/50 uppercase">Step 02</div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Instant Reply</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Assistant answers in 10 seconds, acknowledges listing and begins consult.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-2 border-l border-white/30 md:border-l-0 md:border-t md:border-white/30 pl-4 md:pl-0 md:pt-4">
                <div className="font-pixel text-xs text-white/50 uppercase">Step 03</div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">3 Questions</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Conversational extraction of Budget, Preferred Area, and Timeline.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-2 border-l border-white/30 md:border-l-0 md:border-t md:border-white/30 pl-4 md:pl-0 md:pt-4">
                <div className="font-pixel text-xs text-white/50 uppercase">Step 04</div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Saved Lead</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Record pushed straight to Google Sheets or agency CRM via webhook.
                </p>
              </div>

              {/* Step 5 */}
              <div className="space-y-2 border-l border-white/30 md:border-l-0 md:border-t md:border-white/30 pl-4 md:pl-0 md:pt-4">
                <div className="font-pixel text-xs text-white/50 uppercase">Step 05</div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Agent Follow-Up</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Human agent receives clean morning briefing and calls ready buyer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Flagship Link & Interactive Demo Sandbox */}
        <section ref={demoRef} className="space-y-8 border-t border-white/20 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
                03 // FLAGSHIP DEMO
              </span>
              <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white mt-1">
                Test The Live Assistant & CRM Sync
              </h2>
            </div>
            <Link
              to="/ai-assistant"
              className="text-xs uppercase tracking-widest text-white border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors inline-block self-start sm:self-auto"
            >
              Full Flagship Details →
            </Link>
          </div>

          <LiveAssistantDemo />
        </section>

        {/* 5. Services Summary: 5 items, each tied to flagship */}
        <section className="space-y-8 border-t border-white/20 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
              04 // SUPPORTING SERVICES
            </span>
            <span className="text-xs text-white/60">BUILT AROUND THE FLAGSHIP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
            Specialized Engineering To Support Lead Conversion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="border border-white/20 p-6 bg-[#0B0B0B] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-pixel text-xs text-white/50">SERVICE {s.number}</span>
                    <span className="text-[11px] text-white/60 font-pixel uppercase">SUPPORT</span>
                  </div>
                  <h3 className="text-base font-semibold uppercase tracking-wider text-white">
                    {s.title}
                  </h3>
                  <p className="font-pixel text-xs text-white/70">
                    ↳ Flagship role: {s.flagshipRole}
                  </p>
                  <p className="text-xs text-white/80 leading-relaxed pt-1">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 font-mono text-[11px] text-white/60">
                  {s.tools.map((tool) => (
                    <span key={tool} className="border border-white/15 px-2 py-0.5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Honest Proof: Demo, Trashure, Internships, line saying no client case studies yet */}
        <section className="space-y-8 border-t border-white/20 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
              05 // HONEST PROOF
            </span>
            <span className="font-pixel text-xs text-white/50">VERIFIABLE WORK ONLY</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
              No Fake Reviews. Real Code & Deployments.
            </h2>
            <p className="text-xs text-white/60 font-pixel max-w-xl">
              Vantage Technologies is a newly launched agency. We have no client case studies yet and are taking our first pilot projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Proof 1 */}
            <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-3">
              <span className="font-pixel text-xs text-white/50 uppercase">01 / PROTOTYPE</span>
              <h3 className="text-base font-semibold uppercase tracking-wider text-white">Working Demo</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                A live, functional simulator testing entity extraction (budget, preferred area, timeline) and live CRM webhook push.
              </p>
              <Link to="/ai-assistant" className="text-xs uppercase text-red-500 hover:text-red-400 block pt-2">
                Test interactive sandbox →
              </Link>
            </div>

            {/* Proof 2 */}
            <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-3">
              <span className="font-pixel text-xs text-white/50 uppercase">02 / CAPSTONE</span>
              <h3 className="text-base font-semibold uppercase tracking-wider text-white">Trashure Project</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Final year engineering project: cross-platform mobile marketplace and dispatch app built with Flutter, Node.js, MongoDB, Firebase, and three authenticated user roles.
              </p>
              <Link to="/work" className="text-xs uppercase text-red-500 hover:text-red-400 block pt-2">
                Inspect architecture →
              </Link>
            </div>

            {/* Proof 3 */}
            <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-3">
              <span className="font-pixel text-xs text-white/50 uppercase">03 / EXPERIENCE</span>
              <h3 className="text-base font-semibold uppercase tracking-wider text-white">QA & Flutter Internships</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                QA Engineering at Innovater Solutions (automated regression and edge-case testing) and Flutter Mobile Development at Bootshub (production UI and REST integration).
              </p>
              <Link to="/about" className="text-xs uppercase text-red-500 hover:text-red-400 block pt-2">
                Read engineering background →
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Contact Block */}
        <section className="border border-white/20 p-8 sm:p-12 bg-[#0B0B0B] space-y-6">
          <div className="space-y-2">
            <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
              PILOT ONBOARDING
            </span>
            <h2 className="text-2xl sm:text-4xl uppercase font-light tracking-wide text-white">
              Ready to automate after-hours property leads?
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
              We are onboarding our first 3 pilot agencies with fixed scope and price agreed upfront before any work starts.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              Talk to me (Book Pilot Call)
            </Link>
            <a
              href="https://wa.me/TODO"
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 px-6 py-3 text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
            >
              Message on WhatsApp (TODO)
            </a>
          </div>

          <div className="pt-4 text-xs font-pixel text-white/50 border-t border-white/10 flex flex-wrap gap-6">
            <span>EMAIL: <a href="mailto:TODO" className="text-white hover:underline">TODO</a></span>
            <span>WHATSAPP: <span className="text-white">TODO</span></span>
            <span>BOOKING: <span className="text-white">TODO</span></span>
          </div>
        </section>
      </div>
    </div>
  );
};
