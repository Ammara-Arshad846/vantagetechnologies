import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Hero3DBackground } from './Hero3DBackground';

interface HomeHeroProps {
  onWatchDemo?: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onWatchDemo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bgMode, setBgMode] = useState<'3d' | 'video'>('3d');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionPref.matches);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white select-none">
      {/* 3D Background Animation (Three.js Low-poly Building & Orbiting Lead Bubbles) */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${bgMode === '3d' ? 'opacity-100 z-[1]' : 'opacity-0 pointer-events-none'}`}>
        <Hero3DBackground />
      </div>

      {/* Video Background Fallback / Alternative View */}
      {bgMode === 'video' && !isReducedMotion && (
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2] pointer-events-none z-0"
        />
      )}

      {/* Content wrapper: relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14 */}
      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        {/* 1. Navbar */}
        <Navbar />

        {/* 2. Four-column meta grid (mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8) */}
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Col 1 */}
          <div className="space-y-1">
            <h2 className="text-lg md:text-xl tracking-wide uppercase">
              <span className="block font-normal">VANTAGE</span>
              <span className="block font-pixel text-2xl md:text-3xl leading-none">TECHNOLOGIES</span>
            </h2>
            <p className="font-pixel text-xs text-white/60">
              A new solo agency taking pilot projects.
            </p>
          </div>

          {/* Col 2 (text-right on mobile, left on lg) */}
          <div className="text-right lg:text-left space-y-1">
            <h2 className="text-lg md:text-xl tracking-wide uppercase">
              <span className="block font-normal">AI FOR</span>
              <span className="block font-pixel text-2xl md:text-3xl leading-none">REAL ESTATE</span>
            </h2>
            {/* View Mode Toggle */}
            <div className="inline-flex items-center gap-1.5 pt-1 text-[11px] font-pixel text-white/50">
              <span>BG:</span>
              <button
                type="button"
                onClick={() => setBgMode('3d')}
                className={`px-1.5 py-0.5 border cursor-pointer transition-colors ${
                  bgMode === '3d' ? 'border-white text-white bg-white/10' : 'border-white/20 text-white/50 hover:text-white'
                }`}
              >
                3D SCENE
              </button>
              <button
                type="button"
                onClick={() => setBgMode('video')}
                className={`px-1.5 py-0.5 border cursor-pointer transition-colors ${
                  bgMode === 'video' ? 'border-white text-white bg-white/10' : 'border-white/20 text-white/50 hover:text-white'
                }`}
              >
                VIDEO
              </button>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-1">
            <div className="font-pixel text-base tracking-widest text-white/50 uppercase">
              What I do
            </div>
            <p className="text-sm text-white/90 max-w-[220px] leading-snug">
              I build an AI assistant that answers your property leads on WhatsApp, day and night.
            </p>
          </div>

          {/* Col 4 (text-right on mobile, left on lg) */}
          <div className="text-right lg:text-left space-y-1">
            <div className="font-pixel text-base tracking-widest text-white/50 uppercase">
              Services
            </div>
            <p className="text-sm text-white/90 leading-snug">
              AI lead assistant / UI/UX design / Frontend / Full-stack / Flutter mobile / QA testing.
            </p>
          </div>
        </div>

        {/* 3. Flex spacer */}
        <div className="flex-1 min-h-[40px]" />

        {/* 4. Bottom section (pb-4) */}
        <div className="pb-4">
          {/* Row A (grid lg:grid-cols-2 gap-4 items-end) */}
          <div className="grid lg:grid-cols-2 gap-4 items-end">
            {/* Left, h1 */}
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal"
                style={{ lineHeight: 0.72 }}
              >
                <span className="block mb-2">NEVER LET A</span>
                <span className="block mb-2">
                  <span className="font-pixel text-[1.25em] inline-block leading-none align-baseline">LATE</span> LEAD
                </span>
                <span className="block mb-2">GO COLD, EVEN AT</span>
                <span className="block">
                  <span className="font-pixel text-[1.25em] inline-block leading-none align-baseline">11 PM</span>
                </span>
              </h1>
            </div>

            {/* Right column, justify-end */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start lg:items-end justify-end gap-4">
              <button
                type="button"
                onClick={onWatchDemo}
                className="flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors uppercase text-sm tracking-wider cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span>WATCH THE DEMO</span>
              </button>

              <div className="flex flex-wrap items-center gap-2">
                {/* Chip 1 */}
                <div className="bg-[#0B0B0B] border border-white/10 px-3 sm:px-4 py-2 flex flex-col">
                  <span className="font-bold text-xs tracking-wider uppercase text-white">DEMO</span>
                  <span className="text-[11px] text-white/50 lowercase">working</span>
                </div>
                {/* Chip 2 */}
                <div className="bg-[#0B0B0B] border border-white/10 px-3 sm:px-4 py-2 flex flex-col">
                  <span className="font-bold text-xs tracking-wider uppercase text-white">TRASHURE</span>
                  <span className="text-[11px] text-white/50 lowercase">final year project</span>
                </div>
                {/* Chip 3 */}
                <div className="bg-[#0B0B0B] border border-white/10 px-3 sm:px-4 py-2 flex flex-col">
                  <span className="font-bold text-xs tracking-wider uppercase text-white">QA + FLUTTER</span>
                  <span className="text-[11px] text-white/50 lowercase">internships</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row B (mt-4 grid sm:grid-cols-2 text-xs text-white/60 pt-4 border-t border-white/20) */}
          <div className="mt-4 grid sm:grid-cols-2 gap-2 text-xs text-white/60 pt-4 border-t border-white/20">
            <div>
              <span>Taking pilot projects. </span>
              <Link to="/contact" className="text-red-500 hover:text-red-400 font-medium">
                Talk to me
              </Link>
              <span className="text-white/40 font-pixel"> (TODO: booking link)</span>
            </div>
            <div className="sm:text-right font-pixel text-xs text-white/60">
              Sample demo • No client case studies yet • New agency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
