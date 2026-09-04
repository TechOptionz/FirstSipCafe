import type { Metadata } from 'next';
import Image from 'next/image';
import ImageSlot from '@/components/ImageSlot';
import ReviewCard from '@/components/reviews/ReviewCard';
import { GoogleMark, Stars } from '@/components/reviews/GoogleBadge';
import { GOOGLE_REVIEWS_URL, MAPS_URL } from '@/lib/data';
import {
  GOOGLE_RATING,
  GOOGLE_RATING_BREAKDOWN,
  GOOGLE_REVIEW_COUNT,
  GUEST_PHOTOS,
  REVIEWS,
} from '@/lib/reviews';

export const metadata: Metadata = {
  title: 'Guest Reviews · First Sip Cafe',
  description: `Rated ${GOOGLE_RATING} on Google from ${GOOGLE_REVIEW_COUNT} reviews. Read what guests say about First Sip Cafe at Madina Mall, Dubai, and see their photos.`,
};

const fiveStarShare = Math.round(
  ((GOOGLE_RATING_BREAKDOWN.find(([s]) => s === 5)?.[1] ?? 0) / GOOGLE_REVIEW_COUNT) * 100,
);
const withPhotos = REVIEWS.filter((r) => r.photos.length).length;
const localGuides = REVIEWS.filter((r) => r.localGuide).length;

const pill: React.CSSProperties = {
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
  cursor: 'pointer',
};

export default function ReviewsPage() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      {/* ── Header ─────────────────────────────────────────────────────── */}
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
            background: 'linear-gradient(90deg,rgba(28,18,13,.85),rgba(28,18,13,.5))',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
            gap: 32,
            alignItems: 'end',
            animation: 'fadeUp .8s cubic-bezier(.2,.7,.2,1) both',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 13,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: '#c8623a',
              }}
            >
              <GoogleMark size={16} /> Google Reviews
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
            <p style={{ margin: 0, color: '#c9a88f', fontWeight: 300, fontSize: 17, maxWidth: 520, textWrap: 'pretty' }}>
              Every review below is a real, public Google review of First Sip Cafe at Madina Mall,
              shown with the reviewer&rsquo;s own photos.
            </p>
          </div>

          {/* score card */}
          <div
            style={{
              justifySelf: 'end',
              width: '100%',
              maxWidth: 420,
              background: 'rgba(244,237,228,.07)',
              border: '1px solid rgba(244,237,228,.16)',
              backdropFilter: 'blur(8px)',
              borderRadius: 24,
              padding: 'clamp(20px,3vw,28px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span
                style={{
                  fontFamily: "var(--font-prata),serif",
                  fontSize: 'clamp(56px,7vw,84px)',
                  lineHeight: 1,
                }}
              >
                {GOOGLE_RATING.toFixed(1)}
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Stars value={GOOGLE_RATING} size={20} gap={3} track="rgba(244,237,228,.22)" />
                <span style={{ fontSize: 14, color: '#c9a88f' }}>
                  {GOOGLE_REVIEW_COUNT} reviews on Google
                </span>
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {GOOGLE_RATING_BREAKDOWN.map(([s, n]) => (
                <div
                  key={s}
                  style={{ display: 'grid', gridTemplateColumns: '14px 1fr 28px', alignItems: 'center', gap: 10, fontSize: 12.5 }}
                >
                  <span style={{ color: '#c9a88f' }}>{s}</span>
                  <span style={{ height: 6, borderRadius: 999, background: 'rgba(244,237,228,.14)', overflow: 'hidden' }}>
                    <span
                      style={{
                        display: 'block',
                        height: '100%',
                        width: `${(n / GOOGLE_REVIEW_COUNT) * 100}%`,
                        background: '#e0a02a',
                        borderRadius: 999,
                      }}
                    />
                  </span>
                  <span style={{ color: '#c9a88f', textAlign: 'right' }}>{n}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener"
                className="btn-solid-light"
                style={{ ...pill, background: '#f4ede4', color: '#2b1d16', padding: '14px 22px', minHeight: 44 }}
              >
                Write a review
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener"
                className="btn-outline-light"
                style={{ ...pill, border: '1.5px solid rgba(244,237,228,.6)', padding: '14px 22px', minHeight: 44 }}
              >
                View on Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Proof strip ────────────────────────────────────────────────── */}
      <div
        style={{
          padding: '0 clamp(20px,4vw,64px)',
          borderBottom: '1px solid rgba(43,29,22,.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
        }}
      >
        {[
          [`${fiveStarShare}%`, 'Five-star reviews'],
          [`${localGuides}`, 'Google Local Guides featured'],
          [`${withPhotos}`, 'Reviews with guest photos'],
          [`${GOOGLE_REVIEW_COUNT}`, 'Reviews on Google Maps'],
        ].map(([v, l], i) => (
          <div
            key={l}
            style={{
              padding: '26px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              borderLeft: i ? '1px solid rgba(43,29,22,.1)' : 'none',
              paddingLeft: i ? 24 : 0,
            }}
          >
            <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 30, lineHeight: 1 }}>{v}</span>
            <span style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: '#8a6f5e' }}>
              {l}
            </span>
          </div>
        ))}
      </div>

      {/* ── Guest photos ───────────────────────────────────────────────── */}
      <div
        style={{
          padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,64px) 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 13, letterSpacing: '.22em', textTransform: 'uppercase', color: '#c8623a' }}>
              Through their lens
            </span>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-prata),serif",
                fontWeight: 400,
                fontSize: 'clamp(30px,4vw,52px)',
                lineHeight: 1.05,
              }}
            >
              Photos from our guests
            </h2>
          </div>
          <span style={{ fontSize: 14, color: '#8a6f5e' }}>Shared publicly with their Google reviews</span>
        </div>
        <div
          className="guest-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))',
            gridAutoRows: 'minmax(150px,auto)',
            gridAutoFlow: 'dense',
            gap: 10,
          }}
        >
          {GUEST_PHOTOS.map((p, i) => {
            const big = i === 0;
            return (
              <div
                key={p.src}
                className="guest-photo"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 16,
                  background: '#e6d6c4',
                  aspectRatio: '1',
                  gridColumn: big ? 'span 2' : undefined,
                  gridRow: big ? 'span 2' : undefined,
                }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={big ? '(max-width:640px) 100vw, 40vw' : '(max-width:640px) 50vw, 20vw'}
                  className="zoom"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Reviews ────────────────────────────────────────────────────── */}
      <div
        style={{
          padding: 'clamp(48px,6vw,80px) clamp(20px,4vw,64px) clamp(64px,8vw,110px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 13, letterSpacing: '.22em', textTransform: 'uppercase', color: '#c8623a' }}>
              In their words
            </span>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-prata),serif",
                fontWeight: 400,
                fontSize: 'clamp(30px,4vw,52px)',
                lineHeight: 1.05,
              }}
            >
              Recent reviews
            </h2>
          </div>
          <span style={{ fontSize: 14, color: '#8a6f5e' }}>
            Showing {REVIEWS.length} of {GOOGLE_REVIEW_COUNT} · updated September 2026
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,320px),1fr))',
            gap: 18,
            alignItems: 'start',
          }}
        >
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} review={r} className="review-card reveal-30" />
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 8 }}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener"
            className="btn-solid-dark lift1"
            style={{ ...pill, background: '#2b1d16', color: '#f4ede4' }}
          >
            <GoogleMark size={16} /> Read all {GOOGLE_REVIEW_COUNT} reviews on Google
          </a>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener"
            className="btn-outline-dark"
            style={{ ...pill, border: '1.5px solid #2b1d16' }}
          >
            Write a review
          </a>
        </div>
      </div>
    </section>
  );
}
