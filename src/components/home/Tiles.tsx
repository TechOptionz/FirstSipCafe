import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import { GOOGLE_RATING } from '@/lib/reviews';

const TILES = [
  { id: 'menu', href: '/menu', kicker: '50+ items', title: 'Our Menu', cta: 'View Menu', placeholder: 'Latte art close-up' },
  { id: 'visit', href: '/visit', kicker: 'Madina Mall · Dubai', title: 'Find Us', cta: 'Directions', placeholder: 'Storefront photo' },
  { id: 'reviews', href: '/reviews', kicker: `${GOOGLE_RATING.toFixed(1)} ★ on Google`, title: 'Our Guests', cta: 'Read Reviews', placeholder: 'Guests in the café' },
];

export default function Tiles() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
        gap: 0,
      }}
    >
      {TILES.map((t) => (
        <Link
          key={t.id}
          href={t.href}
          className="tile"
          style={{
            position: 'relative',
            display: 'block',
            aspectRatio: '4/5',
            overflow: 'hidden',
            cursor: 'pointer',
            background: '#e6d6c4',
          }}
        >
          <div className="zoom" style={{ position: 'absolute', inset: 0 }}>
            <ImageSlot id={`tile-${t.id}`} placeholder={t.placeholder} sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 34vw" />
          </div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg,rgba(28,18,13,0) 40%,rgba(28,18,13,.75) 100%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              padding: 'clamp(24px,3vw,40px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 14,
              color: '#f4ede4',
              pointerEvents: 'none',
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: '#c9a88f',
              }}
            >
              {t.kicker}
            </span>
            <span
              style={{
                fontFamily: "var(--font-prata),serif",
                fontSize: 'clamp(32px,3.4vw,48px)',
                lineHeight: 1,
              }}
            >
              {t.title}
            </span>
            <span
              style={{
                border: '1.5px solid rgba(244,237,228,.7)',
                padding: '12px 22px',
                borderRadius: 999,
                fontSize: 12,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
              }}
            >
              {t.cta}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
