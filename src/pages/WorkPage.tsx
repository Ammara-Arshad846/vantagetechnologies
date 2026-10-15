import React from 'react';
import { Link } from 'react-router-dom';
import { LiveAssistantDemo } from '../components/demo/LiveAssistantDemo';

export const WorkPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14 py-16 space-y-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
          PROOF & CAPSTONE // 03
        </span>
        <h1 className="text-3xl sm:text-5xl uppercase font-light tracking-wide text-white leading-tight">
          Work & Case Studies
        </h1>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
          Everything below is labeled with complete honesty. We show real working code, academic capstone software, and verified internships.
        </p>
      </div>

      {/* Honest Rule Notice */}
      <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-2">
        <div className="font-pixel text-xs text-white/60 uppercase">
          HONESTY DISCLOSURE
        </div>
        <p className="text-xs text-white/80 leading-relaxed">
          Vantage Technologies is a new solo digital agency taking on pilot clients.
          We have no client case studies or client reviews yet.
          The proof below represents real software engineered by Ammara: our live working prototype, an academic capstone with three distinct user roles, and verified engineering internships.
        </p>
      </div>

      {/* 1. Working Prototype: AI Real Estate Assistant */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/20 pb-4">
          <div>
            <div className="font-pixel text-xs text-white/50 uppercase">
              WORK ITEM 01 // PROTOTYPE
            </div>
            <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white mt-1">
              The 11 PM Real Estate WhatsApp Lead Engine
            </h2>
          </div>
          <span className="font-pixel text-xs bg-white/10 px-2.5 py-1 text-white/80 self-start sm:self-auto">
            DEMO, SAMPLE DATA
          </span>
        </div>

        <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
          A working prototype simulating the 11 PM inquiry flow: instant response within seconds, natural extraction of budget, area, and timeline, and live push to a CRM spreadsheet.
        </p>

        <LiveAssistantDemo />
      </section>

      {/* 2. Trashure: Final Year Capstone */}
      <section className="border border-white/20 p-8 sm:p-10 bg-[#0B0B0B] space-y-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/15">
          <div className="space-y-2 max-w-2xl">
            <div className="font-pixel text-xs text-white/50 uppercase">
              WORK ITEM 02 // UNIVERSITY CAPSTONE
            </div>
            <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
              Trashure: Smart Recycling & Pickup Dispatch
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-1">
              A comprehensive mobile and backend ecosystem engineered for community waste recycling, scheduling, and driver dispatch.
              Engineered with full cross-platform Flutter client code, a Node.js API, MongoDB database, and Firebase authentication.
            </p>
          </div>

          <div className="shrink-0 p-4 border border-white/15 bg-black font-pixel text-xs space-y-1">
            <div className="text-white/50">STACK & ROLES:</div>
            <div className="text-white font-semibold">3 User Roles (RBAC)</div>
            <div className="text-white">Flutter / Node / MongoDB</div>
            <div className="text-white/60">Final Year Project</div>
          </div>
        </div>

        {/* 3 User Roles Detailed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-white/15 p-5 bg-black space-y-2">
            <span className="font-pixel text-xs text-white/50 uppercase">Role 01</span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Resident Portal</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Household users catalog recyclables, schedule pickup windows, receive driver ETA updates, and track eco-points.
            </p>
          </div>

          <div className="border border-white/15 p-5 bg-black space-y-2">
            <span className="font-pixel text-xs text-white/50 uppercase">Role 02</span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Collector Dispatch</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Mobile driver interface with active collection queues, turn-by-turn navigation, and digital weight scanning.
            </p>
          </div>

          <div className="border border-white/15 p-5 bg-black space-y-2">
            <span className="font-pixel text-xs text-white/50 uppercase">Role 03</span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Admin Console</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              System monitoring, collection route optimization, fleet status, and recycling warehouse metrics.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/15 flex flex-wrap gap-2 font-mono text-xs text-white/60">
          <span className="border border-white/20 px-2 py-0.5">Flutter</span>
          <span className="border border-white/20 px-2 py-0.5">Node.js Express</span>
          <span className="border border-white/20 px-2 py-0.5">MongoDB Atlas</span>
          <span className="border border-white/20 px-2 py-0.5">Firebase Auth & Messaging</span>
        </div>
      </section>

      {/* 3. Verified Internships */}
      <section className="space-y-6 border-t border-white/20 pt-16">
        <div className="space-y-2 max-w-2xl">
          <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
            WORK ITEM 03 // PROFESSIONAL INTERNSHIPS
          </span>
          <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
            Industry Team Engineering
          </h2>
          <p className="text-xs sm:text-sm text-white/80">
            Direct enterprise software development and testing experience:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="font-pixel text-xs text-white/50 uppercase">QUALITY ASSURANCE</span>
              <span className="font-mono text-xs text-white/60">Internship</span>
            </div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white">
              Innovater Solutions
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Executed automated regression testing suites, validated API request-response pipelines, authored test cases, and eliminated defect leakage before client releases.
            </p>
          </div>

          <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="font-pixel text-xs text-white/50 uppercase">MOBILE ENGINEERING</span>
              <span className="font-mono text-xs text-white/60">Internship</span>
            </div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white">
              Bootshub
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Developed cross-platform mobile widgets in Flutter, implemented state management, optimized rendering bottlenecks, and integrated backend REST endpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <div className="border border-white/30 p-8 sm:p-10 bg-[#0B0B0B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-xl sm:text-2xl uppercase font-light tracking-wide text-white">
            Interested in pilot deployment for your agency?
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            Fixed scope, pilot pricing, direct engineer communication.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-semibold text-xs uppercase tracking-widest transition-colors shrink-0"
        >
          Talk to me (Pilot Inquiry)
        </Link>
      </div>
    </div>
  );
};
