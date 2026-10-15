import React from 'react';
import { Link } from 'react-router-dom';

const SERVICES_DETAILED = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Engineering with Embedded Assistant',
    flagshipConnection: 'Embeds the conversational lead assistant directly into your agency portal.',
    description:
      'Ultra-fast real estate web applications engineered in React, Vite, and Tailwind CSS. Built to load in under a second and trigger instant WhatsApp or website conversational overlays for high-intent property inquiries.',
    deliverables: [
      'High-performance responsive portal or single-page landing site',
      'Embedded WhatsApp floating triggers and real-time chat widgets',
      'Listing search and filter architecture with zero layout shift',
      'Clean semantic code with WCAG AA accessibility compliance',
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'ui-ux',
    number: '02',
    title: 'UI/UX Design for Real Estate Portals',
    flagshipConnection: 'Designs frictionless buyer journeys that turn late-night visitors into active leads.',
    description:
      'Clean, prestigious interface design created specifically for property developers and luxury brokerages. We eliminate confusing multi-step forms and design natural conversation initiation touchpoints.',
    deliverables: [
      'High-fidelity Figma component library and layout architecture',
      'Conversational lead flow micro-copy and prompt trees',
      'Mobile-first listing pages optimized for thumb interaction',
      'Clickable prototype ready for team review and engineering handoff',
    ],
    tools: ['Figma', 'Interactive Prototyping', 'User Flow Mapping'],
  },
  {
    id: 'fullstack',
    number: '03',
    title: 'Full-Stack Engineering & CRM Webhook Infrastructure',
    flagshipConnection: 'Saves extracted budget, area, and timeline directly to Google Sheets or CRM.',
    description:
      'A smart assistant is only as good as the database it feeds. We engineer fault-tolerant webhook endpoints and API integrations that push every verified inquiry into your agency CRM with zero dropped messages.',
    deliverables: [
      'Production-grade Node.js webhook microservice with error logging',
      'Direct API synchronization with Google Sheets, HubSpot, or Salesforce',
      'Automated morning email and SMS dispatch notifications to brokers',
      'Official Meta WhatsApp Business Cloud API verification setup',
    ],
    tools: ['Node.js', 'Express', 'Google Sheets API', 'HubSpot API', 'REST APIs'],
  },
  {
    id: 'flutter-mobile',
    number: '04',
    title: 'Cross-Platform Mobile Apps (Flutter)',
    flagshipConnection: 'Arms property agents on the road with instant push notifications when a lead qualifies.',
    description:
      'Property brokers spend their days in the field and at client showings. We build high-speed cross-platform mobile apps for iOS and Android so agents receive instant lead notifications and can tap to call warm buyers immediately.',
    deliverables: [
      'Single codebase cross-platform iOS & Android mobile application',
      'Push notification alerts powered by Firebase Cloud Messaging',
      'Lead contact cards with one-tap dialing and viewing scheduler',
      'Offline-capable lead notes and viewing record updates',
    ],
    tools: ['Flutter', 'Dart', 'Firebase Cloud Messaging', 'REST APIs'],
  },
  {
    id: 'qa-testing',
    number: '05',
    title: 'Quality Assurance & Automated Lead Flow Testing',
    flagshipConnection: 'Guarantees that message ingestion and lead webhook synchronization never fail.',
    description:
      'Drawing on professional QA experience at Innovater Solutions, we run thorough automated regression suites and edge-case testing across international phone formats, timezone shifts, and network drops.',
    deliverables: [
      'End-to-end automated testing suites with Playwright and Jest',
      'Edge-case conversation path stress tests and prompt regression tests',
      'Simulated webhook burst testing for high-traffic ad campaigns',
      'Comprehensive defect documentation and verification reports',
    ],
    tools: ['Playwright', 'Jest', 'Postman', 'TestRail', 'CI/CD Pipelines'],
  },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14 py-16 space-y-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
          SYSTEM CAPABILITIES // 02
        </span>
        <h1 className="text-3xl sm:text-5xl uppercase font-light tracking-wide text-white leading-tight">
          Supporting Services
        </h1>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
          We don't offer generic freelance services. Every supporting capability is engineered to power and sustain the flagship real estate lead assistant.
        </p>
      </div>

      {/* Five Detailed Sections */}
      <div className="space-y-12">
        {SERVICES_DETAILED.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="border border-white/20 p-8 sm:p-10 bg-[#0B0B0B] space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/15">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-pixel text-sm text-white/50 uppercase">SERVICE {s.number}</span>
                  <span className="font-pixel text-xs border border-white/20 px-2 py-0.5 text-white/70">
                    SUPPORTS FLAGSHIP
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
                  {s.title}
                </h2>

                <p className="font-pixel text-xs text-white/60">
                  ↳ Flagship role: {s.flagshipConnection}
                </p>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-2">
                  {s.description}
                </p>
              </div>

              <div className="shrink-0 space-y-2">
                <div className="font-pixel text-xs uppercase tracking-widest text-white/50">
                  Tools Used:
                </div>
                <div className="flex flex-wrap md:flex-col gap-1.5 font-mono text-xs text-white/80">
                  {s.tools.map((tool) => (
                    <span key={tool} className="border border-white/20 px-2.5 py-1 bg-black">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-3">
              <div className="font-pixel text-xs uppercase tracking-widest text-white/60">
                What Is Delivered:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-white/80">
                {s.deliverables.map((item, idx) => (
                  <div key={idx} className="border border-white/10 p-3 bg-black flex items-start gap-2.5">
                    <span className="text-white/40 font-mono">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Box */}
      <section className="border border-white/30 p-8 sm:p-10 bg-[#0B0B0B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-xl sm:text-2xl uppercase font-light tracking-wide text-white">
            Need a turnkey web + assistant deployment?
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            We deliver the complete stack under an agreed pilot scope and fixed pricing.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-semibold text-xs uppercase tracking-widest transition-colors shrink-0"
        >
          Talk to me (Discuss Scope)
        </Link>
      </section>
    </div>
  );
};
