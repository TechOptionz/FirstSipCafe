import type { Metadata } from 'next';
import ImageSlot from '@/components/ImageSlot';
import OpeningHours from '@/components/OpeningHours';
import { MAPS_URL, TEL_LANDLINE, TEL_MOBILE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hours & Contact · First Sip Cafe',
  description:
    'Madina Mall, Ground Floor, Shop G01, Al Muhasinah 4, Dubai. Open every day 9:00 AM – 11:00 PM.',
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
            pointerEvents: 'none',
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
        </div>
      </div>

      <div
        style={{
          maxWidth: 'none',
          margin: 0,
          width: '100%',
          padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,64px) clamp(64px,8vw,110px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
          gap: 'clamp(32px,5vw,72px)',
        }}
      >
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={block}>
            <span style={label}>Address</span>
            <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 22, lineHeight: 1.4 }}>
              Madina Mall, Ground Floor, Shop G01
              <br />
              Al Muhasinah 4, Dubai, UAE
            </span>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
              style={{
                fontSize: 13,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#c8623a',
                marginTop: 6,
              }}
            >
              Open in Google Maps →
            </a>
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
              Every Day · 9:00 AM – 11:00 PM
            </span>
          </div>
        </div>

        <OpeningHours />
      </div>
    </section>
  );
}
