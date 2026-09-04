import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '@/lib/reviews';
import { GOOGLE_REVIEWS_URL } from '@/lib/data';

/** The four-colour Google "G". */
export function GoogleMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" style={{ flex: 'none' }}>
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

/** Star row. Fractional values fill partially (4.8 → 4 full + 80% of the fifth). */
export function Stars({
  value,
  size = 14,
  gap = 2,
  color = '#e0a02a',
  track = 'rgba(43,29,22,.15)',
}: {
  value: number;
  size?: number;
  gap?: number;
  color?: string;
  track?: string;
}) {
  return (
    <span
      role="img"
      aria-label={`${value} out of 5 stars`}
      style={{ display: 'inline-flex', gap, lineHeight: 0, flex: 'none' }}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        const id = `s${i}-${Math.round(fill * 100)}`;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id={id} x1="0" x2="1">
                <stop offset={fill} stopColor={color} />
                <stop offset={fill} stopColor={track} />
              </linearGradient>
            </defs>
            <path
              fill={fill >= 1 ? color : fill <= 0 ? track : `url(#${id})`}
              d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.7l-6.1 3.4 1.4-6.8L2.2 9.6l6.9-.8z"
            />
          </svg>
        );
      })}
    </span>
  );
}

/**
 * "4.8 ★★★★★ · 76 reviews on Google" pill, linking to the listing's Reviews tab.
 * `tone` picks colours for light (cream) or dark (espresso) backgrounds.
 */
export function RatingBadge({ tone = 'light', compact = false }: { tone?: 'light' | 'dark'; compact?: boolean }) {
  const dark = tone === 'dark';
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener"
      className="rating-badge"
      aria-label={`${GOOGLE_RATING} stars from ${GOOGLE_REVIEW_COUNT} reviews on Google`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: compact ? 8 : 12,
        padding: compact ? '8px 14px 8px 10px' : '10px 18px 10px 12px',
        borderRadius: 999,
        border: `1px solid ${dark ? 'rgba(244,237,228,.18)' : 'rgba(43,29,22,.14)'}`,
        background: dark ? 'rgba(244,237,228,.06)' : '#fff',
        color: dark ? '#f4ede4' : '#2b1d16',
        fontSize: compact ? 13 : 14,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
      }}
    >
      <GoogleMark size={compact ? 16 : 20} />
      <strong style={{ fontWeight: 600 }}>{GOOGLE_RATING.toFixed(1)}</strong>
      <Stars value={GOOGLE_RATING} size={compact ? 13 : 15} track={dark ? 'rgba(244,237,228,.2)' : undefined} />
      <span style={{ color: dark ? '#c9a88f' : '#8a6f5e' }}>
        {GOOGLE_REVIEW_COUNT} reviews{compact ? '' : ' on Google'}
      </span>
    </a>
  );
}
