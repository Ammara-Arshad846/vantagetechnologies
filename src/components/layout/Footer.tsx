import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-white/20 text-white pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Wordmark and Agency Blurb */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="text-base font-bold tracking-[0.2em] uppercase text-white block">
              VANTAGE TECHNOLOGIES
            </Link>
            <p className="text-xs text-white/80 max-w-sm leading-relaxed">
              A solo digital agency engineering custom AI assistants for real estate agencies.
              Answering new property leads instantly on WhatsApp and the web, qualifying budget, area, and timeline.
            </p>
            <p className="font-pixel text-xs text-white/60">
              A new solo agency taking pilot projects. No client case studies yet.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <div className="font-pixel text-xs uppercase tracking-widest text-white/50">
              ROUTES
            </div>
            <ul className="space-y-2 text-xs tracking-wider uppercase text-white/80">
              <li>
                <Link to="/ai-assistant" className="hover:text-white transition-colors">
                  AI ASSISTANT
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  WORK & DEMOS
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="font-pixel text-xs uppercase tracking-widest text-white/50">
              DIRECT REACH
            </div>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="mailto:TODO" className="hover:text-white transition-colors">
                  Email: TODO
                </a>
              </li>
              <li>
                <a href="https://wa.me/TODO" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: TODO
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                  Talk to me (Booking: TODO) →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} VANTAGE TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
          <p className="font-pixel text-xs">
            SAMPLE DEMO • NO CLIENT CASE STUDIES YET • NEW AGENCY
          </p>
        </div>
      </div>
    </footer>
  );
};
