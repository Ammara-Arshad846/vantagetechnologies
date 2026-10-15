import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'AI ASSISTANT', path: '/ai-assistant' },
  { label: 'SERVICES', path: '/services' },
  { label: 'WORK', path: '/work' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle ESC key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      firstFocusRef.current?.focus();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="w-full flex items-center justify-between py-6">
        {/* Wordmark in top-left with geometric mark */}
        <Link
          to="/"
          className="flex items-center gap-3 text-white tracking-widest uppercase font-bold text-base hover:opacity-80 transition-opacity"
          aria-label="Vantage Technologies Home"
        >
          {/* Simple white geometric mark 28x28 */}
          <div className="w-7 h-7 border border-white flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white" />
          </div>
          <span className="tracking-[0.2em] font-semibold">VANTAGE TECHNOLOGIES</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-opacity hover:opacity-70 uppercase tracking-widest text-xs font-medium ${
                  isActive ? 'text-white border-b border-white pb-0.5' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden p-1 text-white hover:opacity-70 transition-opacity"
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/20 pb-5">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-white tracking-widest uppercase font-bold text-sm"
            >
              <div className="w-6 h-6 border border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white" />
              </div>
              <span className="tracking-[0.2em]">VANTAGE TECHNOLOGIES</span>
            </Link>
            <button
              ref={firstFocusRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-white hover:opacity-70 transition-opacity"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Staggered Links */}
          <nav className="flex flex-col items-start justify-center gap-6 my-auto">
            <span className="font-pixel text-sm uppercase tracking-widest text-white/50">
              NAVIGATION
            </span>
            {NAV_ITEMS.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl sm:text-3xl font-light tracking-widest uppercase transition-all duration-300 hover:text-red-500 hover:translate-x-2 ${
                    isActive ? 'text-red-500' : 'text-white'
                  }`}
                  style={{
                    animation: `fadeInUp 500ms cubic-bezier(0.16, 1, 0.3, 1) ${100 + idx * 60}ms forwards`,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer blurb */}
          <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/60 font-pixel">
            <span>A new solo agency taking pilot projects.</span>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-red-500 hover:text-red-400 font-sans uppercase tracking-wider"
            >
              Talk to me →
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
