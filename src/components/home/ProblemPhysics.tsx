import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { RefreshCw, CheckCircle2, Clock } from 'lucide-react';

interface BubbleData {
  text: string;
  time: string;
  budget: string;
  answered: boolean;
}

const SAMPLE_BUBBLES: BubbleData[] = [
  { text: 'Is the 2-bedroom in Downtown still available?', time: '11:04 PM', budget: 'AED 2.4M', answered: false },
  { text: 'Can we schedule a viewing tomorrow morning at 10 AM?', time: '11:22 PM', budget: 'AED 4.1M', answered: false },
  { text: 'What is the service charge for the Marina penthouse?', time: '11:47 PM', budget: 'AED 7.5M', answered: false },
  { text: 'Looking to invest £650k in Canary Wharf. Need floor plans.', time: '12:15 AM', budget: '£650K', answered: false },
  { text: 'Sending proof of funds. Can agent call me first thing?', time: '12:50 AM', budget: 'AED 3.0M', answered: false },
  { text: 'Do you accept international wire transfers for the deposit?', time: '01:20 AM', budget: '$1.2M', answered: false },
];

export const ProblemPhysics: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isResolved, setIsResolved] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const container = sceneRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = 420;

    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 0.85, scale: 0.001 },
    });

    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
      },
    });

    // Boundaries
    const ground = Bodies.rectangle(width / 2, height + 30, width + 100, 60, { isStatic: true });
    const leftWall = Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });
    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Create message bubble bodies
    const bodies = SAMPLE_BUBBLES.map((bubble, i) => {
      const bubbleWidth = Math.min(width * 0.75, 340);
      const bubbleHeight = 52;
      const x = width / 2 + (Math.random() - 0.5) * 120;
      const y = -i * 70 - 40;

      const body = Bodies.rectangle(x, y, bubbleWidth, bubbleHeight, {
        chamfer: { radius: 14 },
        restitution: 0.35,
        friction: 0.1,
        render: {
          fillStyle: isResolved ? '#2BB58C' : '#1B2A4A',
          strokeStyle: isResolved ? '#197c5f' : '#2d4370',
          lineWidth: 2,
        },
      });

      // Custom metadata for rendering labels in afterRender
      (body as unknown as { customData: BubbleData }).customData = bubble;
      return body;
    });

    Composite.add(engine.world, bodies);

    // Custom text rendering over Matter bodies
    Matter.Events.on(render, 'afterRender', () => {
      const ctx = render.context;
      bodies.forEach((body) => {
        const { position, angle } = body;
        const bData = (body as unknown as { customData: BubbleData }).customData;
        if (!bData) return;

        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.rotate(angle);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '500 12px "Public Sans", sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';

        // Draw message snippet
        const textTrunc = bData.text.length > 32 ? bData.text.substring(0, 32) + '...' : bData.text;
        ctx.fillText(textTrunc, -150, -4);

        // Draw timestamp & budget
        ctx.fillStyle = isResolved ? '#d1fae5' : '#F5B544';
        ctx.font = '600 10px "JetBrains Mono", monospace';
        ctx.fillText(`${bData.time} · ${bData.budget}`, -150, 12);

        // Status badge
        ctx.textAlign = 'right';
        ctx.fillStyle = isResolved ? '#FFFFFF' : '#94a3b8';
        ctx.fillText(isResolved ? '✓ AI Qualified' : '⚠️ Unanswered', 150, 0);

        ctx.restore();
      });
    });

    // Add mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      if (render.canvas && container.contains(render.canvas)) {
        container.removeChild(render.canvas);
      }
    };
  }, [isResolved, reducedMotion]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy: The 11 PM Problem */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F5B544]">
            <Clock className="w-4 h-4 text-[#F5B544]" />
            <span>THE 11 PM PROBLEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            High-intent leads arrive when your agents are fast asleep.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            A serious property buyer in London or Dubai messages on WhatsApp at 11:42 PM.
            By 8:00 AM, they have already contacted two other agencies. Every unreplied late-night lead is a lost commission.
          </p>

          <div className="space-y-3 pt-2 text-sm text-slate-400">
            <div className="flex items-start gap-3">
              <span className="text-[#F5B544] font-bold">·</span>
              <span>Average response time overnight: <strong className="text-white">9 hours, 14 minutes</strong></span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#F5B544] font-bold">·</span>
              <span>Buyer willingness to wait for answers: <strong className="text-white">Under 5 minutes</strong></span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2BB58C] font-bold">·</span>
              <span>With Ammara Studio assistant: <strong className="text-[#2BB58C]">12 seconds average qualification</strong></span>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsResolved(!isResolved)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isResolved ? 'text-[#2BB58C]' : 'text-[#F5B544]'}`} />
              <span>{isResolved ? 'Reset to Unanswered Pile' : 'Simulate Instant AI Qualification'}</span>
            </button>
            <span className="text-xs text-slate-400">Interactive physics box</span>
          </div>
        </div>

        {/* Right Matter.js Interactive Canvas or Static Fallback */}
        <div className="lg:col-span-7">
          <div className="relative rounded-xl border border-slate-800 bg-[#070c16]/80 p-4 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
              <span className="text-slate-400 font-mono">Incoming WhatsApp Stream (After-Hours)</span>
              <span className={isResolved ? 'text-[#2BB58C] font-mono' : 'text-[#F5B544] font-mono'}>
                {isResolved ? '● 6/6 Leads Qualified & Pushed to CRM' : '● 6 Late-Night Messages Piling Up'}
              </span>
            </div>

            {reducedMotion ? (
              /* Accessible Static Fallback */
              <div className="py-6 space-y-3">
                {SAMPLE_BUBBLES.map((b, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-lg border text-sm flex items-center justify-between ${
                      isResolved
                        ? 'bg-[#2BB58C]/15 border-[#2BB58C]/40 text-slate-100'
                        : 'bg-[#1B2A4A]/50 border-slate-700 text-slate-200'
                    }`}
                  >
                    <div>
                      <p className="font-medium">{b.text}</p>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">{b.time} · Budget {b.budget}</p>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-black/30">
                      {isResolved ? '✓ Qualified' : 'Waiting'}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div
                ref={sceneRef}
                className="w-full h-[420px] relative touch-none select-none cursor-grab active:cursor-grabbing"
              />
            )}

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>Drag or throw messages to test physics</span>
              <span className="flex items-center gap-1 text-[#2BB58C]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                No lost inquiries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
