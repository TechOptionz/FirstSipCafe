import Link from 'next/link';
import { REVIEWS } from '@/lib/data';

export default function ReviewsMarquee() {
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <div
      style={{
        padding: 'clamp(64px,9vw,120px) 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 36,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 'none',
          margin: 0,
          width: '100%',
          padding: '0 clamp(20px,4vw,64px)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: '#c8623a',
            }}
          >
            Google Reviews
          </span>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Prata',serif",
              fontWeight: 400,
              fontSize: 'clamp(38px,5vw,68px)',
              lineHeight: 1.02,
            }}
          >
            What Guests <em style={{ fontStyle: 'italic', color: '#8a6f5e' }}>Say</em>
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontFamily: "'Prata',serif", fontSize: 56, lineHeight: 1 }}>4.9</span>
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#c8623a', letterSpacing: 3 }}>★★★★★</span>
            <span style={{ fontSize: 14, color: '#5a4636' }}>120+ verified reviews</span>
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          animation: 'ticker 70s linear infinite',
          width: 'max-content',
          gap: 18,
          paddingLeft: 18,
        }}
      >
        {loop.map((r, i) => (
          <article
            key={i}
            style={{
              flex: 'none',
              width: 'min(80vw,400px)',
              background: '#fff',
              borderRadius: 22,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <span style={{ color: '#c8623a', letterSpacing: 2, fontSize: 14 }}>★★★★★</span>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: '#3a2a20', flex: 1 }}>
              {r.text}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: '#2b1d16',
                  color: '#f4ede4',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: "'Prata',serif",
                }}
              >
                {r.initial}
              </span>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontWeight: 500, fontSize: 14 }}>{r.name}</strong>
                <span style={{ color: '#8a6f5e', fontSize: 13 }}>
                  {r.meta} · {r.when}
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/reviews"
        className="link-underline"
        style={{
          alignSelf: 'center',
          fontSize: 13,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          borderBottom: '1.5px solid #2b1d16',
          paddingBottom: 4,
          cursor: 'pointer',
        }}
      >
        All reviews →
      </Link>
    </div>
  );
}
