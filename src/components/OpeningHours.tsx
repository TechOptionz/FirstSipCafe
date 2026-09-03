'use client';

import { useEffect, useState } from 'react';
import { DAYS, WEEK } from '@/lib/data';

export default function OpeningHours() {
  // Resolved after mount: "today" depends on the visitor's clock, not the build machine's.
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(DAYS[new Date().getDay()]), []);

  return (
    <div
      className="reveal"
      style={{
        background: '#2b1d16',
        color: '#f4ede4',
        borderRadius: 28,
        padding: 'clamp(28px,3.5vw,44px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <span style={{ fontFamily: "'Prata',serif", fontSize: 28 }}>Opening Hours</span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 11,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: '#c9a88f',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#3ca05a',
              animation: 'pulse 2s infinite',
            }}
          />
          We&apos;re Open
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {WEEK.map((day) => (
          <div
            key={day}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '13px 0',
              borderBottom: '1px solid rgba(244,237,228,.1)',
              fontSize: 16,
            }}
          >
            <span style={{ color: today === day ? '#c8623a' : '#f4ede4', fontWeight: today === day ? 500 : 300 }}>
              {day}
            </span>
            <span style={{ color: '#c9a88f' }}>9:00 AM – 11:00 PM</span>
          </div>
        ))}
      </div>

      <span style={{ fontSize: 14, color: '#c9a88f' }}>● Open every day of the week</span>
    </div>
  );
}
