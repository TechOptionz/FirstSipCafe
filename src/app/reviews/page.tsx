import type { Metadata } from 'next';
import ImageSlot from '@/components/ImageSlot';
import { REVIEWS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Guest Reviews · First Sip Cafe',
  description: '4.9 stars from 120+ verified Google reviews at Madina Mall, Dubai.',
};

export default function ReviewsPage() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#2b1d16',
          color: '#f4ede4',
          padding: 'clamp(48px,7vw,96px) clamp(20px,4vw,64px) clamp(40px,5vw,64px)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
          <ImageSlot id="hero-reviews" placeholder="Guests in the café" priority />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg,rgba(28,18,13,.8),rgba(28,18,13,.45))',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 'none',
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
            gap: 24,
            alignItems: 'end',
            animation: 'fadeUp .8s cubic-bezier(.2,.7,.2,1) both',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-prata),serif",
                fontWeight: 400,
                fontSize: 'clamp(48px,8vw,120px)',
                lineHeight: 0.95,
              }}
            >
              What Guests <em style={{ fontStyle: 'italic', color: '#c9a88f' }}>Say</em>
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifySelf: 'end' }}>
            <span
              style={{
                fontFamily: "var(--font-prata),serif",
                fontSize: 'clamp(64px,8vw,110px)',
                lineHeight: 1,
              }}
            >
              4.9
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: '#c8623a', letterSpacing: 3, fontSize: 18 }}>★★★★★</span>
              <span style={{ fontSize: 14, color: '#c9a88f' }}>120+ verified reviews</span>
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 'none',
          margin: 0,
          width: '100%',
          padding: 'clamp(36px,5vw,64px) clamp(20px,4vw,64px) clamp(64px,8vw,110px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
            gap: 18,
          }}
        >
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="review-card reveal-30"
              style={{
                background: '#fff',
                borderRadius: 22,
                padding: 30,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#c8623a', letterSpacing: 2, fontSize: 14 }}>★★★★★</span>
                <span style={{ fontSize: 13, color: '#8a6f5e' }}>{r.when}</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: '#3a2a20',
                  textWrap: 'pretty',
                  flex: 1,
                }}
              >
                {r.text}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  borderTop: '1px solid rgba(43,29,22,.08)',
                  paddingTop: 16,
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: '#2b1d16',
                    color: '#f4ede4',
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: "var(--font-prata),serif",
                  }}
                >
                  {r.initial}
                </span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ fontWeight: 500, fontSize: 14 }}>{r.name}</strong>
                  <span style={{ color: '#8a6f5e', fontSize: 13 }}>{r.meta}</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener"
          className="btn-outline-dark"
          style={{
            alignSelf: 'center',
            border: '1.5px solid #2b1d16',
            padding: '17px 30px',
            borderRadius: 999,
            fontSize: 13,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            minHeight: 50,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 16 }}>G</span> See All Reviews on
          Google
        </a>
      </div>
    </section>
  );
}
