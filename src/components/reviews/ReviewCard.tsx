import Image from 'next/image';
import type { Review } from '@/lib/reviews';
import { GoogleMark, Stars } from './GoogleBadge';

function Avatar({ review, size = 44 }: { review: Review; size?: number }) {
  if (review.avatar) {
    return (
      <Image
        src={review.avatar}
        alt=""
        width={size}
        height={size}
        unoptimized // 128px webp already; no size variants to pick from
        style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', flex: 'none' }}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#2b1d16',
        color: '#f4ede4',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'var(--font-prata),serif',
        fontSize: size * 0.42,
        flex: 'none',
      }}
    >
      {review.initial}
    </span>
  );
}

type Props = {
  review: Review;
  /** Limit the quote to N lines (ticker cards); full text otherwise. */
  clampLines?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function ReviewCard({ review: r, clampLines, className, style }: Props) {
  const clampStyle: React.CSSProperties | undefined = clampLines
    ? {
        display: '-webkit-box',
        WebkitLineClamp: clampLines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }
    : undefined;

  return (
    <article
      className={className}
      style={{
        background: '#fff',
        borderRadius: 22,
        padding: 26,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        border: '1px solid rgba(43,29,22,.06)',
        ...style,
      }}
    >
      {/* who */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Avatar review={r} />
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
          <strong
            style={{
              fontWeight: 500,
              fontSize: 15,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {r.name}
          </strong>
          <span
            style={{
              color: '#8a6f5e',
              fontSize: 12.5,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {r.localGuide && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  color: '#c8623a',
                  fontWeight: 500,
                  letterSpacing: '.02em',
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.4 5.2 5.6.6-4.2 3.9 1.2 5.6L12 14.5l-5 2.8 1.2-5.6L4 7.8l5.6-.6z" />
                </svg>
                Local Guide
              </span>
            )}
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {r.localGuide ? r.meta.replace(/^Local Guide\s*·\s*/, '') : r.meta}
            </span>
          </span>
        </span>
        <span title="Posted on Google" style={{ display: 'inline-flex', flex: 'none' }}>
          <GoogleMark size={18} />
        </span>
      </div>

      {/* rating */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Stars value={r.stars} size={15} />
        <span style={{ fontSize: 12.5, color: '#8a6f5e' }}>{r.when}</span>
      </div>

      {/* quote */}
      <p
        style={{
          margin: 0,
          fontSize: 16,
          lineHeight: 1.65,
          color: '#3a2a20',
          textWrap: 'pretty',
          flex: 1,
          ...clampStyle,
        }}
      >
        {r.text}
      </p>

      {/* attached photos */}
      {r.photos.length > 0 && (
        <div style={{ display: 'flex', gap: 8 }}>
          {r.photos.slice(0, 3).map((p) => (
            <span
              key={p}
              style={{
                position: 'relative',
                width: 72,
                height: 72,
                borderRadius: 12,
                overflow: 'hidden',
                background: '#e6d6c4',
                flex: 'none',
              }}
            >
              <Image
                src={p}
                alt={`Photo shared by ${r.name}`}
                fill
                sizes="72px"
                style={{ objectFit: 'cover' }}
              />
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
