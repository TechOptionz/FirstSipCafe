import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import { MAPS_URL } from '@/lib/data';

export default function VisitCta() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        background: '#2b1d16',
        color: '#f4ede4',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
        <ImageSlot id="visit-hero" placeholder="Wide storefront / interior photo" />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center,rgba(28,18,13,.2),rgba(28,18,13,.75))',
          pointerEvents: 'none',
        }}
      />
      <div
        className="reveal-40"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          padding: 'clamp(56px,8vw,110px) clamp(20px,4vw,64px)',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{ fontSize: 13, letterSpacing: '.22em', textTransform: 'uppercase', color: '#c9a88f' }}
        >
          Find Us
        </span>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Prata',serif",
            fontWeight: 400,
            fontSize: 'clamp(38px,6vw,84px)',
            lineHeight: 1,
            textWrap: 'balance',
            maxWidth: '14ch',
          }}
        >
          Madina Mall, Ground Floor, Shop G01
        </h2>
        <p style={{ margin: 0, color: '#c9a88f', fontWeight: 300, fontSize: 18 }}>
          Al Muhasinah 4, Dubai, UAE · Every Day 9:00 AM – 11:00 PM
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
            pointerEvents: 'auto',
          }}
        >
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener"
            className="btn-solid-light"
            style={{
              background: '#f4ede4',
              color: '#2b1d16',
              padding: '17px 30px',
              borderRadius: 999,
              fontSize: 13,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              minHeight: 50,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Open in Google Maps
          </a>
          <Link
            href="/visit"
            className="btn-outline-light"
            style={{
              border: '1.5px solid rgba(244,237,228,.7)',
              padding: '17px 30px',
              borderRadius: 999,
              fontSize: 13,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              minHeight: 50,
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            Hours &amp; Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
