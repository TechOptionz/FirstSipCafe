import { MARQUEE } from '@/lib/data';

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];

  return (
    <div
      style={{
        background: '#2b1d16',
        color: '#f4ede4',
        overflow: 'hidden',
        padding: '26px 0',
        whiteSpace: 'nowrap',
        borderTop: '1px solid rgba(244,237,228,.1)',
      }}
    >
      <div style={{ display: 'inline-flex', animation: 'ticker 60s linear infinite', width: 'max-content' }}>
        {items.map((text, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-prata),serif",
              fontSize: 'clamp(34px,5vw,72px)',
              lineHeight: 1,
              padding: '0 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 28,
              color: i % 2 ? 'transparent' : '#f4ede4',
              WebkitTextStroke: i % 2 ? '1px rgba(244,237,228,.6)' : '0',
            }}
          >
            {text}
            <span style={{ color: '#c8623a', fontSize: 14, WebkitTextStroke: 0 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
