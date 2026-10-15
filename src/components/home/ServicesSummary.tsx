import React from 'react';
import { Layout, Code2, Server, Smartphone, CheckSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SERVICES = [
  {
    id: 'web-frontend',
    number: '01',
    title: 'Frontend Engineering with Embedded Assistant',
    icon: Code2,
    flagshipRole: 'Embeds the conversational lead assistant directly into your property portal.',
    description:
      'Lightning-fast modern web applications built on React and Tailwind, featuring instant popover WhatsApp triggers and conversational lead capture widgets.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'ui-ux',
    number: '02',
    title: 'UI/UX Design for Real Estate Portals',
    icon: Layout,
    flagshipRole: 'Designs intuitive buyer journeys that drive 11 PM visitors to start a WhatsApp conversation.',
    description:
      'High-conversion property layout design, listing detail architecture, and frictionless mobile chat triggers tuned for luxury international buyers.',
    tools: ['Figma', 'Design Systems', 'Responsive Prototyping'],
  },
  {
    id: 'fullstack-crm',
    number: '03',
    title: 'Full-Stack & CRM Webhook Infrastructure',
    icon: Server,
    flagshipRole: 'Saves extracted budget, area, and timeline directly to HubSpot, Salesforce, or Sheets.',
    description:
      'Robust backend webhook handlers, database pipelines, and API integrations that ensure zero lost inquiries and instant morning team hand-offs.',
    tools: ['Node.js', 'Express', 'Webhooks', 'Google Sheets API', 'CRM REST APIs'],
  },
  {
    id: 'mobile-flutter',
    number: '04',
    title: 'Mobile App Development (Flutter)',
    icon: Smartphone,
    flagshipRole: 'Empowers real estate agents on the go with real-time push alerts when a warm lead qualifies.',
    description:
      'Native-feel cross-platform iOS & Android apps for property consultants, featuring lead notifications, calendar viewing scheduling, and offline notes.',
    tools: ['Flutter', 'Dart', 'Firebase Cloud Messaging', 'REST APIs'],
  },
  {
    id: 'qa-testing',
    number: '05',
    title: 'QA Testing & Automated Lead Flow Verification',
    icon: CheckSquare,
    flagshipRole: 'Validates that message delivery and lead ingestion never fail under real peak conditions.',
    description:
      'Comprehensive manual and automated testing of conversation trees, edge-case phone number formatting, network drop recoveries, and cross-browser resilience.',
    tools: ['Jest', 'Playwright', 'API Test Automation', 'Cross-Device QA'],
  },
];

export const ServicesSummary: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-[#F5B544] uppercase tracking-wider">Supporting Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Built as a system around the flagship assistant.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every supporting service directly strengthens your real estate lead acquisition pipeline—from high-performance web frontends to CRM synchronization and mobile agent alerts.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5B544] hover:text-white transition-colors group shrink-0"
        >
          <span>View full service specifications</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-[#F5B544]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">{s.number}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold font-display text-white group-hover:text-[#F5B544] transition-colors">
                    {s.title}
                  </h3>
                  <div className="text-xs font-mono text-[#2BB58C]">
                    ↳ Flagship role: {s.flagshipRole}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {s.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {s.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
