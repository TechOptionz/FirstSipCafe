import type { Metadata } from 'next';
import ImageSlot from '@/components/ImageSlot';
import OpeningHours from '@/components/OpeningHours';
import { RatingBadge } from '@/components/reviews/GoogleBadge';
import {
  ADDRESS_LINES,
  HOURS,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  MAPS_URL,
  TEL_LANDLINE,
  TEL_MOBILE,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hours & Contact · First Sip Cafe',
  description:
    'Madina Mall, Ground Floor, Shop G01, Al Muhasinah 4, Dubai. Open every day 10:00 AM – 10:30 PM. Map, directions and phone.',
};

const block: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: '22px 0',
  borderTop: '1px solid rgba(43,29,22,.15)',
};

const label: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: '#8a6f5e',
};

const pill: React.CSSProperties = {
  padding: '15px 26px',
  borderRadius: 999,
  fontSize: 13,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  minHeight: 48,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
};

export default function VisitPage() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          position: 'relative',
          minHeight: '58vh',
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
          background: '#2b1d16',
          color: '#f4ede4',
        }}
      >
        <div className="slot-anchor-upper" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
          <ImageSlot id="visit-storefront" placeholder="Storefront photo — Madina Mall, Shop G01" priority />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg,rgba(28,18,13,.3),rgba(28,18,13,.7))',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 14,
            padding: 'clamp(48px,7vw,96px) clamp(20px,4vw,64px)',
            animation: 'fadeUp .8s cubic-bezier(.2,.7,.2,1) both',
          }}
        >
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: '#c9a88f',
            }}
          >
            Find Us
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
            Contact <em style={{ fontStyle: 'italic', color: '#c9a88f' }}>Us</em>
          </h1>
          <div style={{ marginTop: 6 }}>
            <RatingBadge tone="dark" compact />
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 'none',
          margin: 0,
          width: '100%',
          padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,64px) clamp(40px,5vw,64px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
          gap: 'clamp(32px,5vw,72px)',
        }}
      >
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={block}>
            <span style={label}>Address</span>
            <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 22, lineHeight: 1.4 }}>
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 22px', marginTop: 6 }}>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener"
                style={{ fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: '#c8623a' }}
              >
                Get Directions →
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener"
                className="hover-accent"
                style={{ fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8a6f5e' }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
          <div style={block}>
            <span style={label}>Landline</span>
            <a href={`tel:${TEL_LANDLINE}`} style={{ fontFamily: "var(--font-prata),serif", fontSize: 26 }}>
              +971 42 880 478
            </a>
          </div>
          <div style={block}>
            <span style={label}>Mobile / WhatsApp</span>
            <a href={`tel:${TEL_MOBILE}`} style={{ fontFamily: "var(--font-prata),serif", fontSize: 26 }}>
              +971 52 940 0208
            </a>
          </div>
          <div style={{ ...block, borderBottom: '1px solid rgba(43,29,22,.15)' }}>
            <span style={label}>Hours</span>
            <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 22 }}>
              {HOURS.everyDay}
            </span>
          </div>
        </div>

        <OpeningHours />
      </div>

      {/* ── Map ────────────────────────────────────────────────────────── */}
      <div
        style={{
          padding: '0 clamp(20px,4vw,64px) clamp(64px,8vw,110px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 13, letterSpacing: '.22em', textTransform: 'uppercase', color: '#c8623a' }}>
              On the map
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
              Ground Floor, by the mall entrance
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener"
              className="btn-solid-dark lift1"
              style={{ ...pill, background: '#2b1d16', color: '#f4ede4' }}
            >
              Get Directions
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
              className="btn-outline-dark"
              style={{ ...pill, border: '1.5px solid #2b1d16' }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <div
          className="map-frame"
          style={{
            position: 'relative',
            borderRadius: 24,
            overflow: 'hidden',
            background: '#e6d6c4',
            border: '1px solid rgba(43,29,22,.1)',
            aspectRatio: '16 / 8',
            minHeight: 320,
          }}
        >
          <iframe
            src={MAPS_EMBED_URL}
            title="First Sip Cafe on Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
