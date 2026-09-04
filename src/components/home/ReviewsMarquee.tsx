import Link from 'next/link';
import { HOME_REVIEWS } from '@/lib/reviews';
import { GOOGLE_REVIEWS_URL } from '@/lib/data';
import ReviewCard from '@/components/reviews/ReviewCard';
import { RatingBadge } from '@/components/reviews/GoogleBadge';

export default function ReviewsMarquee() {
  const loop = [...HOME_REVIEWS, ...HOME_REVIEWS];

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
          gap: 20,
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
              fontFamily: "var(--font-prata),serif",
              fontWeight: 400,
              fontSize: 'clamp(38px,5vw,68px)',
              lineHeight: 1.02,
            }}
          >
            What Guests <em style={{ fontStyle: 'italic', color: '#8a6f5e' }}>Say</em>
          </h2>
        </div>
        <RatingBadge />
      </div>

      {/* ticker: pauses on hover so a quote can be read */}
      <div className="ticker-track" style={{ display: 'flex', width: 'max-content', gap: 18, paddingLeft: 18 }}>
        {loop.map((r, i) => (
          <ReviewCard
            key={i}
            review={r}
            clampLines={5}
            style={{ flex: 'none', width: 'min(82vw,420px)' }}
          />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '14px 32px',
          padding: '0 clamp(20px,4vw,64px)',
        }}
      >
        <Link
          href="/reviews"
          className="link-underline"
          style={{
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
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener"
          className="link-underline"
          style={{
            fontSize: 13,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            borderBottom: '1.5px solid rgba(43,29,22,.35)',
            paddingBottom: 4,
            color: '#5a4636',
          }}
        >
          Write a review on Google
        </a>
      </div>
    </div>
  );
}
