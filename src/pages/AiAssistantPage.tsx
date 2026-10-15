import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { LiveAssistantDemo } from '../components/demo/LiveAssistantDemo';

const FAQS = [
  {
    q: 'Can human agents take over a WhatsApp conversation at any time?',
    a: 'Yes, instantly. As soon as any human broker sends a manual message from WhatsApp Web or the mobile app, the assistant pauses automated answers for that contact until the conversation is closed.',
  },
  {
    q: 'Do we use our existing agency phone number?',
    a: 'Yes. We connect through the official Meta WhatsApp Business Cloud API. You can either verify your existing office landline/mobile number or assign a dedicated VIP inquiry number.',
  },
  {
    q: 'What CRMs and spreadsheets can it write to?',
    a: 'We connect out-of-the-box to Google Sheets, HubSpot, Salesforce, Zoho, Notion, and custom REST webhooks. Every qualified lead row updates immediately upon extraction.',
  },
  {
    q: 'What happens if a buyer asks something outside the scope?',
    a: 'The assistant never fabricates pricing or terms. If asked an unverified property question, it politely takes note and flags the inquiry for senior agent morning review.',
  },
  {
    q: 'What is required from our agency during pilot onboarding?',
    a: 'Three items: Meta Business Manager access, links to your active listings or brochure PDFs, and your preferred CRM or Google Sheet destination. We handle all engineering and testing.',
  },
];

export const AiAssistantPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14 py-16 space-y-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
          FLAGSHIP SPECIFICATION // 01
        </span>
        <h1 className="text-3xl sm:text-5xl uppercase font-light tracking-wide text-white leading-tight">
          AI Real Estate Lead Assistant
        </h1>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
          Answers incoming property leads on WhatsApp and the web 24/7.
          Asks about budget, preferred area, and timeline, then writes the answers to your CRM so agents can follow up.
        </p>
      </div>

      {/* Interactive Simulator Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/20 pb-4">
          <h2 className="text-xl sm:text-2xl uppercase font-light tracking-wide text-white">
            Live Simulator & Lead Record
          </h2>
          <span className="font-pixel text-xs text-white/60">
            DEMO, SAMPLE DATA
          </span>
        </div>

        <LiveAssistantDemo />
      </section>

      {/* The 3 Core Questions */}
      <section className="space-y-8 border-t border-white/20 pt-16">
        <div className="space-y-2 max-w-2xl">
          <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
            QUALIFICATION MATRIX
          </span>
          <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
            The Three Non-Negotiable Questions
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            We do not use cumbersome surveys. The assistant naturally extracts the three essentials through conversation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-3">
            <span className="font-pixel text-xs text-white/50 uppercase">01 / FINANCIAL READINESS</span>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white">Budget Range</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Confirms purchase ceiling, cash vs. mortgage financing, and international currencies (AED, GBP, USD, EUR).
            </p>
          </div>

          <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-3">
            <span className="font-pixel text-xs text-white/50 uppercase">02 / PROPERTY CRITERIA</span>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white">Preferred Area</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Gathers specific neighborhoods, views (skyline, waterfront, golf), bedroom count, and end-use vs. investment yield intent.
            </p>
          </div>

          <div className="border border-white/20 p-6 bg-[#0B0B0B] space-y-3">
            <span className="font-pixel text-xs text-white/50 uppercase">03 / PURCHASE URGENCY</span>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white">Timeline</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Classifies leads into Immediate (&lt;30 days), 1–3 months, or long-term pipeline so senior consultants prioritize high-urgency buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Pilot Offer (Fixed scope and price agreed before work) */}
      <section className="border border-white/30 p-8 sm:p-12 bg-[#0B0B0B] space-y-8">
        <div className="space-y-3 border-b border-white/20 pb-6">
          <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
            TRANSPARENT PILOT OFFER
          </span>
          <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
            Fixed Scope & Price Agreed Before Work Starts
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
            We are onboarding our first pilot real estate agency partners. No vague retainer hours or unexpected fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-white/80">
          <div className="space-y-3">
            <h3 className="font-pixel uppercase text-white tracking-widest text-sm">
              What Is Delivered In The Pilot:
            </h3>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span>Meta WhatsApp Business Cloud API setup and verified webhook pipeline.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span>Custom conversational prompt engineering tuned to your active listings and territory.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span>Automated webhook sync to Google Sheets, HubSpot, or your CRM.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span>14 days of post-launch conversation monitoring and prompt tuning.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-pixel uppercase text-white tracking-widest text-sm">
              Pilot Terms & Availability:
            </h3>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span><strong>Fixed scope:</strong> Every deliverable specified in writing before deposit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span><strong>Turnaround:</strong> System deployed and running in 10 business days.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 font-mono">—</span>
                <span><strong>Direct contact:</strong> Work directly with founder Ammara.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
          <span className="font-pixel text-xs text-white/60">
            Taking pilot projects. Fixed pricing.
          </span>
          <Link
            to="/contact"
            className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-semibold text-xs uppercase tracking-widest transition-colors"
          >
            Talk to me (Apply for Pilot)
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6 max-w-3xl border-t border-white/20 pt-16">
        <div className="space-y-1">
          <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-2xl sm:text-3xl uppercase font-light tracking-wide text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 pt-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border border-white/20 bg-[#0B0B0B]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:text-white/80 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-white/80 leading-relaxed border-t border-white/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
