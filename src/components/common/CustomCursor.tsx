import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${mouseX - 150}px, ${mouseY - 150}px, 0)`;
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea')
      );
      setIsHovered(isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    let animationFrameId: number;
    const render = () => {
      // Smooth interpolation for the trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Amber spotlight that follows pointer and illuminates background */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed top-0 left-0 z-10 w-[300px] h-[300px] rounded-full opacity-25 mix-blend-screen transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(245, 181, 68, 0.45) 0%, rgba(245, 181, 68, 0.1) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-[#F5B544] transition-[width,height,background-color] duration-150 ease-out"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform',
          backgroundColor: isHovered ? '#2BB58C' : '#F5B544',
          scale: isClicking ? 0.75 : 1,
        }}
      />

      {/* Trailing follower ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-50 -ml-5 -mt-5 w-10 h-10 rounded-full border transition-all duration-200 ease-out"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform',
          borderColor: isHovered ? 'rgba(43, 181, 140, 0.7)' : 'rgba(245, 181, 68, 0.4)',
          backgroundColor: isHovered ? 'rgba(43, 181, 140, 0.08)' : 'transparent',
          scale: isHovered ? 1.4 : isClicking ? 0.9 : 1,
        }}
      />
    </>
  );
};
