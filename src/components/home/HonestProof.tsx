import React from 'react';
import { ShieldCheck, ExternalLink, Sparkles, Smartphone, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HonestProof: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Honesty Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 mb-16">
        <ShieldCheck className="w-5 h-5 text-[#2BB58C] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-slate-300">
          <p className="font-semibold text-white">Transparent Agency Notice</p>
          <p>
            Ammara Studio is a newly launched solo studio. We do not use manufactured logos, fake review ratings, or fabricated statistics.
            Everything displayed below is real engineering proof: our interactive working prototypes, academic software deployments, and verified professional internships.
            We are actively taking on our first 3 real estate pilot partners with fixed scope and dedicated support.
          </p>
        </div>
      </div>

      <div className="space-y-4 max-w-2xl mb-12">
        <span className="text-xs font-mono text-[#2BB58C] uppercase tracking-wider">Verified Track Record</span>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Real engineering proof, zero synthetic metrics.
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Here is what Ammara has built and engineered, verified through codebase architecture and production mobile applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Project 1: Trashure Mobile App (Final Year Project) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#F5B544] bg-[#F5B544]/10 px-2.5 py-1 rounded border border-[#F5B544]/30">
                Academic Capstone · Production-Ready
              </span>
              <Smartphone className="w-5 h-5 text-slate-400" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-white">
                Trashure: Waste Marketplace & Dispatch Platform
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Full-stack cross-platform system built for smart waste recycling and community collection.
                Features three distinct authenticated user roles with custom role-based dashboards:
                <strong className="text-white"> Resident</strong> (schedules pickups, tracks items),
                <strong className="text-white"> Collector</strong> (live route dispatch and pickup verification), and
                <strong className="text-white"> Admin</strong> (analytics, fleet management, and inventory).
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/60 aspect-[16/9]">
              <img
                src="/src/assets/images/trashure_project_preview_1792070011533.jpg"
                alt="Trashure Flutter Mobile Application Interface with 3 User Roles"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Architecture Stack:</div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="bg-slate-800 px-2 py-1 rounded">Flutter (iOS/Android)</span>
                <span className="bg-slate-800 px-2 py-1 rounded">Node.js</span>
                <span className="bg-slate-800 px-2 py-1 rounded">MongoDB</span>
                <span className="bg-slate-800 px-2 py-1 rounded">Firebase Auth & Cloud Messaging</span>
                <span className="bg-slate-800 px-2 py-1 rounded">3-Role RBAC</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Final Year Project · Solo Engineering</span>
            <Link to="/work" className="text-[#F5B544] hover:underline inline-flex items-center gap-1 font-semibold">
              <span>View technical architecture</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Project 2: AI Lead Assistant Working Simulator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#2BB58C] bg-[#2BB58C]/10 px-2.5 py-1 rounded border border-[#2BB58C]/30">
                Interactive Working Prototype · Flagship Demo
              </span>
              <Sparkles className="w-5 h-5 text-[#2BB58C]" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-white">
                The 11 PM Real Estate WhatsApp Qualification Engine
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A live, functional simulator of the real estate lead qualification assistant.
                You can send simulated property inquiries or use quick prompts to see how natural language extracts budget, area, and timeframe in real time, synchronizing the result into a live CRM spreadsheet row.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/60 aspect-[16/9]">
              <img
                src="/src/assets/images/pilot_onboarding_dashboard_1792070012371.jpg"
                alt="Lead qualification dashboard preview showing real estate WhatsApp leads"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Features Tested:</div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="bg-slate-800 px-2 py-1 rounded">WhatsApp Webhook Simulation</span>
                <span className="bg-slate-800 px-2 py-1 rounded">Intent Extraction (Budget, Area, Timeline)</span>
                <span className="bg-slate-800 px-2 py-1 rounded">Google Sheets / CRM Sync</span>
                <span className="bg-slate-800 px-2 py-1 rounded">Human Hand-off Notification</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Sample data labeled clearly</span>
            <Link to="/ai-assistant" className="text-[#2BB58C] hover:underline inline-flex items-center gap-1 font-semibold">
              <span>Test live simulator</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Verified Professional Internships */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-[#F5B544] shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-400">Verified Experience</span>
            <h4 className="text-base font-bold text-white font-display">QA Testing Engineer Intern</h4>
            <p className="text-xs font-mono text-[#F5B544]">Innovater Solutions</p>
            <p className="text-xs text-slate-300 pt-1 leading-relaxed">
              Executed test plans, automated regression suites, logged edge-case defects, and verified data integrity pipelines across multi-device applications.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-[#2BB58C] shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-400">Verified Experience</span>
            <h4 className="text-base font-bold text-white font-display">Flutter Developer Intern</h4>
            <p className="text-xs font-mono text-[#2BB58C]">Bootshub</p>
            <p className="text-xs text-slate-300 pt-1 leading-relaxed">
              Engineered cross-platform mobile UI screens, managed state with Provider/Bloc, integrated REST endpoints, and resolved production performance bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
