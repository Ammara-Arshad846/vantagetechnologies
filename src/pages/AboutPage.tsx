import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14 py-16 space-y-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
          FOUNDER & PRACTICE // 04
        </span>
        <h1 className="text-3xl sm:text-5xl uppercase font-light tracking-wide text-white leading-tight">
          About Vantage Technologies & Ammara
        </h1>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
          A solo digital engineering studio dedicated to fixing the after-hours lead conversion drop for real estate agencies and developers.
        </p>
      </div>

      {/* Main Story & Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/20 pt-16">
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-4">
            <div className="space-y-1">
              <span className="font-pixel text-xs uppercase text-white/50">FOUNDER</span>
              <h2 className="text-2xl uppercase font-light tracking-wider text-white">Ammara Arshad</h2>
              <p className="font-pixel text-xs text-white/70">Solo Software Engineer</p>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs font-mono text-white/80">
              <div className="flex justify-between">
                <span className="text-white/50">SPECIALTY:</span>
                <span>Real Estate AI Lead Capture</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">STUDIO:</span>
                <span>Vantage Technologies</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">PILOTS:</span>
                <span className="text-white font-bold">Taking 3 Pilot Agencies</span>
              </div>
            </div>
          </div>

          <div className="border border-white/15 p-5 bg-[#0B0B0B] text-xs text-white/70 space-y-2">
            <span className="font-pixel uppercase text-white/50 block">STUDIO PHILOSOPHY</span>
            <p className="leading-relaxed">
              "Real estate buyers don’t need complicated bots with endless menus. They want immediate answers on price, area availability, and viewing schedules. That simple speed is what we build."
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 text-xs sm:text-sm text-white/80 leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-xl uppercase font-light tracking-wide text-white">
              The Origin of The 11 PM Lead
            </h3>
            <p>
              Looking at inquiry logs for luxury agencies in international property hubs (London, Dubai, Toronto), a huge percentage of high-net-worth inquiries arrive late at night.
            </p>
            <p>
              Buyers in different timezones message after hours expecting quick answers. When an agency takes 8–10 hours to reply, the prospect has already connected with another firm. Vantage Technologies builds automated WhatsApp and web assistants that qualify buyers immediately, preserving high-value transactions.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/15">
            <h3 className="text-xl uppercase font-light tracking-wide text-white">
              Engineering Background
            </h3>
            <p>
              My background brings together full-stack engineering, cross-platform mobile development with Flutter, and strict automated quality assurance:
            </p>
            <ul className="space-y-2 pt-2">
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span><strong>QA Testing Engineer Intern at Innovater Solutions:</strong> Hands-on testing of complex data pipelines, regression suites, and edge-case handling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span><strong>Flutter Developer Intern at Bootshub:</strong> Cross-platform client applications, asynchronous state management, and backend REST integration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span><strong>Trashure Capstone:</strong> Multi-role waste collection marketplace and fleet dispatch platform in Flutter, Node.js, MongoDB, and Firebase.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/15">
            <h3 className="text-xl uppercase font-light tracking-wide text-white">
              How I Work
            </h3>

            <div className="space-y-3">
              <div className="p-4 border border-white/15 bg-[#0B0B0B] space-y-1">
                <span className="font-pixel text-xs text-white/50 uppercase">01 // DIRECT ACCESS</span>
                <h4 className="text-xs uppercase font-semibold text-white tracking-wider">No Account Managers</h4>
                <p className="text-xs text-white/70">You communicate directly with me on WhatsApp and video calls from day one.</p>
              </div>

              <div className="p-4 border border-white/15 bg-[#0B0B0B] space-y-1">
                <span className="font-pixel text-xs text-white/50 uppercase">02 // WRITTEN SCOPE</span>
                <h4 className="text-xs uppercase font-semibold text-white tracking-wider">Fixed Scope & Fixed Price</h4>
                <p className="text-xs text-white/70">All qualification prompts, webhook destinations, and timelines are agreed in writing before work begins.</p>
              </div>

              <div className="p-4 border border-white/15 bg-[#0B0B0B] space-y-1">
                <span className="font-pixel text-xs text-white/50 uppercase">03 // SPEED</span>
                <h4 className="text-xs uppercase font-semibold text-white tracking-wider">10-Day Turnaround</h4>
                <p className="text-xs text-white/70">Pilots are configured, tested, and live within 10 business days.</p>
              </div>

              <div className="p-4 border border-white/15 bg-[#0B0B0B] space-y-1">
                <span className="font-pixel text-xs text-white/50 uppercase">04 // WARRANTY</span>
                <h4 className="text-xs uppercase font-semibold text-white tracking-wider">14-Day Post-Launch Tuning</h4>
                <p className="text-xs text-white/70">I personally monitor inbound conversations for two weeks to fine-tune prompts and ensure data accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <section className="border border-white/30 p-8 sm:p-10 bg-[#0B0B0B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-xl sm:text-2xl uppercase font-light tracking-wide text-white">
            Schedule a 15-minute compatibility check
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            Tell me about your current WhatsApp lead volume and listings.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-semibold text-xs uppercase tracking-widest transition-colors shrink-0"
        >
          Talk to me (Schedule Call)
        </Link>
      </section>
    </div>
  );
};
