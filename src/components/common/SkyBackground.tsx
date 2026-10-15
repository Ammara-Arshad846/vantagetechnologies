import React, { useEffect, useState } from 'react';

export const SkyBackground: React.FC = () => {
  const [scrollRatio, setScrollRatio] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionPref.matches);

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const currentScroll = window.scrollY;
      const ratio = Math.min(1, Math.max(0, currentScroll / docHeight));
      setScrollRatio(ratio);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute interpolated background color
  // Night: #0B1220 [11, 18, 32]
  // Dusk: #1B2A4A [27, 42, 74]
  // Dawn: #F2D7B6 [242, 215, 182]
  const getBackgroundColor = (progress: number) => {
    if (reducedMotion) return '#0B1220';

    if (progress < 0.5) {
      // 0 to 0.5: Night to Dusk
      const t = progress / 0.5;
      const r = Math.round(11 + (27 - 11) * t);
      const g = Math.round(18 + (42 - 18) * t);
      const b = Math.round(32 + (74 - 32) * t);
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      // 0.5 to 1.0: Dusk to Dawn
      const t = (progress - 0.5) / 0.5;
      const r = Math.round(27 + (242 - 27) * t);
      const g = Math.round(42 + (215 - 42) * t);
      const b = Math.round(74 + (182 - 74) * t);
      return `rgb(${r}, ${g}, ${b})`;
    }
  };

  // The text color over dawn should be deep navy if needed, but the sky is background behind the fixed wrapper
  const currentBg = getBackgroundColor(scrollRatio);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 transition-colors duration-300"
      style={{ backgroundColor: currentBg }}
      aria-hidden="true"
    >
      {/* Stars in deep night that fade away as dawn approaches */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: Math.max(0, 1 - scrollRatio * 2.2) }}
      >
        <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12%" cy="18%" r="1" fill="#FFFFFF" />
          <circle cx="28%" cy="10%" r="1.5" fill="#F5B544" />
          <circle cx="45%" cy="22%" r="1" fill="#FFFFFF" />
          <circle cx="62%" cy="8%" r="1.5" fill="#FFFFFF" />
          <circle cx="78%" cy="26%" r="1" fill="#F5B544" />
          <circle cx="88%" cy="14%" r="1.2" fill="#FFFFFF" />
          <circle cx="94%" cy="30%" r="1" fill="#FFFFFF" />
          <circle cx="34%" cy="32%" r="1" fill="#FFFFFF" />
          <circle cx="19%" cy="38%" r="1" fill="#F5B544" />
        </svg>
      </div>

      {/* Atmospheric Horizon Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45vh] transition-opacity duration-700"
        style={{
          background: scrollRatio > 0.4
            ? `linear-gradient(to top, rgba(242, 215, 182, ${Math.min(0.85, (scrollRatio - 0.4) * 1.5)}) 0%, transparent 100%)`
            : 'linear-gradient(to top, rgba(27, 42, 74, 0.5) 0%, transparent 100%)',
        }}
      />

      {/* Fixed Silhouette Skyline at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden opacity-35 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto min-h-[140px] text-slate-950 preserve-3d"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          {/* Back layer buildings */}
          <path
            opacity="0.5"
            d="M0,320 L0,180 L40,180 L40,220 L90,220 L90,140 L140,140 L140,240 L210,240 L210,120 L270,120 L270,200 L340,200 L340,150 L410,150 L410,230 L500,230 L500,100 L560,100 L560,210 L640,210 L640,130 L720,130 L720,190 L810,190 L810,110 L890,110 L890,240 L970,240 L970,160 L1050,160 L1050,210 L1130,210 L1130,130 L1210,130 L1210,190 L1290,190 L1290,150 L1360,150 L1360,220 L1440,220 L1440,320 Z"
          />
          {/* Fore layer buildings */}
          <path
            opacity="0.8"
            d="M0,320 L0,210 L60,210 L60,250 L120,250 L120,170 L180,170 L180,260 L260,260 L260,160 L320,160 L320,240 L390,240 L390,180 L470,180 L470,250 L540,250 L540,140 L600,140 L600,230 L690,230 L690,170 L770,170 L770,260 L850,260 L850,150 L920,150 L920,240 L1010,240 L1010,190 L1090,190 L1090,250 L1180,250 L1180,160 L1260,160 L1260,230 L1340,230 L1340,180 L1440,180 L1440,320 Z"
          />

          {/* Windows that light up with scroll progress */}
          <g fill="#F5B544">
            <rect x="135" y="185" width="4" height="6" opacity={scrollRatio > 0.05 ? 0.9 : 0.15} />
            <rect x="150" y="185" width="4" height="6" opacity={scrollRatio > 0.1 ? 0.9 : 0.1} />
            <rect x="165" y="185" width="4" height="6" opacity={scrollRatio > 0.15 ? 0.9 : 0.05} />
            <rect x="135" y="200" width="4" height="6" opacity={scrollRatio > 0.2 ? 0.9 : 0.1} />
            <rect x="150" y="200" width="4" height="6" opacity={scrollRatio > 0.25 ? 0.9 : 0.2} />

            <rect x="275" y="175" width="5" height="7" opacity={scrollRatio > 0.1 ? 0.95 : 0.2} />
            <rect x="290" y="175" width="5" height="7" opacity={scrollRatio > 0.2 ? 0.95 : 0.1} />
            <rect x="275" y="195" width="5" height="7" opacity={scrollRatio > 0.3 ? 0.95 : 0.15} />
            <rect x="290" y="195" width="5" height="7" opacity={scrollRatio > 0.4 ? 0.95 : 0.05} />

            <rect x="555" y="155" width="5" height="7" opacity={scrollRatio > 0.2 ? 0.9 : 0.1} />
            <rect x="575" y="155" width="5" height="7" opacity={scrollRatio > 0.3 ? 0.9 : 0.2} />
            <rect x="555" y="175" width="5" height="7" opacity={scrollRatio > 0.45 ? 0.9 : 0.1} />
            <rect x="575" y="175" width="5" height="7" opacity={scrollRatio > 0.6 ? 0.9 : 0.05} />

            <rect x="865" y="170" width="6" height="8" opacity={scrollRatio > 0.25 ? 0.95 : 0.15} />
            <rect x="885" y="170" width="6" height="8" opacity={scrollRatio > 0.35 ? 0.95 : 0.1} />
            <rect x="865" y="190" width="6" height="8" opacity={scrollRatio > 0.5 ? 0.95 : 0.2} />
            <rect x="885" y="190" width="6" height="8" opacity={scrollRatio > 0.65 ? 0.95 : 0.1} />

            <rect x="1195" y="180" width="5" height="7" opacity={scrollRatio > 0.3 ? 0.9 : 0.1} />
            <rect x="1215" y="180" width="5" height="7" opacity={scrollRatio > 0.5 ? 0.9 : 0.15} />
            <rect x="1195" y="200" width="5" height="7" opacity={scrollRatio > 0.7 ? 0.9 : 0.05} />
            <rect x="1215" y="200" width="5" height="7" opacity={scrollRatio > 0.8 ? 0.9 : 0.1} />
          </g>
        </svg>
      </div>
    </div>
  );
};
