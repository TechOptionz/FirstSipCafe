'use client';

import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1800;
        const step = (t: number) => {
          const prog = Math.min(1, (t - t0) / dur);
          setP(prog);
          if (prog < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const e = 1 - Math.pow(1 - p, 3);
  const stats = [
    { value: Math.round(50 * e) + '+', label: 'Menu Items' },
    { value: (4.9 * e).toFixed(1), label: 'Google Rating' },
    { value: Math.round(14 * e) + 'h', label: 'Open Daily' },
    { value: Math.round(120 * e) + '+', label: 'Reviews' },
  ];

  return (
    <div
      style={{
        marginTop: 'clamp(64px,9vw,120px)',
        background: '#2b1d16',
        color: '#f4ede4',
        padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,64px)',
      }}
    >
      <div
        ref={statsRef}
        style={{
          maxWidth: 'none',
          margin: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
          gap: 28,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="reveal-30"
            style={{
              borderTop: '1px solid rgba(244,237,228,.15)',
              paddingTop: 22,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <span
              style={{ fontFamily: "'Prata',serif", fontSize: 'clamp(48px,6vw,88px)', lineHeight: 1 }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontSize: 12,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: '#c9a88f',
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
