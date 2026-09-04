'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ImageSlot from '@/components/ImageSlot';
import { MAPS_URL, TEL_LANDLINE, TEL_MOBILE } from '@/lib/data';

const colHead: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '.22em',
  textTransform: 'uppercase',
  color: '#8a6f5e',
  marginBottom: 6,
  paddingBottom: 12,
  borderBottom: '1px solid rgba(244,237,228,.1)',
};

export default function Footer() {
  // Home already has its own full-width interior banner right above the footer.
  const showCtaPhoto = usePathname() !== '/';
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<SVGSVGElement>(null);
  const strokeRef = useRef<SVGTextElement>(null);
  const fillRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const draw = () => {
      const foot = footerRef.current;
      const svg = wordmarkRef.current;
      const st = strokeRef.current;
      const fl = fillRef.current;
      if (!foot || !svg || !st) return;
      const r = foot.getBoundingClientRect();
      const vh = window.innerHeight;
      // Spread the draw across the whole footer's scroll range so it stays visible while
      // scrolling: 0 when the footer's top enters the viewport, 1 when the page is fully scrolled
      // (footer bottom meets the viewport bottom). Wordmark alone was too short a range.
      const p = Math.max(0, Math.min(1, (vh - r.top) / r.height));
      // ease-out: starts drawing immediately, finishes gently
      const eased = 1 - Math.pow(1 - p, 2);
      st.style.strokeDashoffset = String(1400 * (1 - eased));
      if (fl) fl.style.fill = `rgba(244,237,228,${Math.max(0, (p - 0.75) / 0.25) * 0.07})`;
    };
    draw();
    window.addEventListener('scroll', draw, { passive: true });
    window.addEventListener('resize', draw);
    return () => {
      window.removeEventListener('scroll', draw);
      window.removeEventListener('resize', draw);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{ background: '#1c120d', color: '#f4ede4', overflow: 'hidden', position: 'relative' }}
    >
      {/* CTA strip */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(48px,6vw,80px) clamp(20px,4vw,64px)',
          borderBottom: '1px solid rgba(244,237,228,.1)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 28,
          background: 'linear-gradient(180deg,#2b1d16,#1c120d)',
        }}
      >
        {showCtaPhoto && (
          <>
            <div className="slot-anchor-top" style={{ position: 'absolute', inset: 0, opacity: 0.45 }}>
              <ImageSlot id="footer-cta" placeholder="Café interior photo" />
            </div>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg,rgba(28,18,13,.85),rgba(28,18,13,.45))',
                pointerEvents: 'none',
              }}
            />
          </>
        )}
        <div
          className="reveal-30"
          style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 640 }}
        >
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: '#c8623a',
            }}
          >
            Your first sip is waiting
          </span>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-prata),serif",
              fontWeight: 400,
              fontSize: 'clamp(34px,4.6vw,64px)',
              lineHeight: 1,
              textWrap: 'balance',
            }}
          >
            Come by the Ground Floor. Open every day until 11 PM.
          </h2>
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
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
            Get Directions
          </a>
          <a
            href={`tel:${TEL_LANDLINE}`}
            className="btn-outline-light"
            style={{
              border: '1.5px solid rgba(244,237,228,.5)',
              color: '#f4ede4',
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
            Call +971 42 880 478
          </a>
        </div>
      </div>

      {/* columns */}
      <div
        style={{
          padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,64px) 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
          gap: '40px 32px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, gridColumn: 'span 1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Image
              src="/assets/logo-256.png"
              alt="First Sip Cafe"
              width={64}
              height={64}
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                display: 'block',
                flex: 'none',
                boxShadow: '0 0 0 1px rgba(244,237,228,.12)',
              }}
            />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 22, letterSpacing: '.16em' }}>
                FIRST SIP
              </span>
              <span
                style={{ fontSize: 11, letterSpacing: '.24em', color: '#8a6f5e', marginTop: 5 }}
              >
                CAFÉ · DUBAI
              </span>
            </span>
          </div>
          <p
            style={{
              margin: 0,
              color: '#c9a88f',
              fontWeight: 300,
              lineHeight: 1.65,
              maxWidth: 340,
              fontSize: 16,
              textWrap: 'pretty',
            }}
          >
            Specialty coffees, vibrant drinks &amp; artisan pastries crafted daily for Dubai. Find us on
            the Ground Floor of Madina Mall.
          </p>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#e6d6c4' }}
          >
            <span style={{ color: '#c8623a', letterSpacing: 2 }}>★★★★★</span>
            <span>
              <strong style={{ fontWeight: 500 }}>4.9</strong> · 120+ Google reviews
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15 }}>
          <span style={colHead}>Explore</span>
          <Link href="/" style={{ cursor: 'pointer', color: '#e6d6c4', display: 'inline-flex', gap: 10, alignItems: 'center' }}>
            Home
          </Link>
          <Link href="/menu" style={{ cursor: 'pointer', color: '#e6d6c4' }}>
            Full Menu
          </Link>
          <Link href="/reviews" style={{ cursor: 'pointer', color: '#e6d6c4' }}>
            Guest Reviews
          </Link>
          <Link href="/visit" style={{ cursor: 'pointer', color: '#e6d6c4' }}>
            Hours &amp; Contact
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15 }}>
          <span style={colHead}>Menu</span>
          <Link href="/menu?cat=hot" style={{ cursor: 'pointer', color: '#e6d6c4' }}>
            Hot Coffees
          </Link>
          <Link href="/menu?cat=iced" style={{ cursor: 'pointer', color: '#e6d6c4' }}>
            Iced Coffees
          </Link>
          <Link href="/menu?cat=matcha" style={{ cursor: 'pointer', color: '#e6d6c4' }}>
            Matcha
          </Link>
          <Link href="/menu?cat=smoothies" style={{ cursor: 'pointer', color: '#e6d6c4' }}>
            Smoothies
          </Link>
          <Link href="/menu?cat=food" style={{ cursor: 'pointer', color: '#e6d6c4' }}>
            Food Items
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15, color: '#e6d6c4' }}>
          <span style={colHead}>Visit</span>
          <a href={MAPS_URL} target="_blank" rel="noopener" style={{ lineHeight: 1.5 }}>
            Madina Mall, Ground Floor, Shop G01
            <br />
            Al Muhasinah 4, Dubai, UAE
          </a>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: '#8a6f5e',
              }}
            >
              Hours
            </span>
            <span>Every Day · 9:00 AM – 11:00 PM</span>
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15, color: '#e6d6c4' }}>
          <span style={colHead}>Contact</span>
          <a href={`tel:${TEL_LANDLINE}`} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: '#8a6f5e',
              }}
            >
              Landline
            </span>
            <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 18 }}>+971 42 880 478</span>
          </a>
          <a href={`tel:${TEL_MOBILE}`} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: '#8a6f5e',
              }}
            >
              Mobile / WhatsApp
            </span>
            <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 18 }}>+971 52 940 0208</span>
          </a>
        </div>
      </div>

      {/* wordmark */}
      <div style={{ padding: 'clamp(40px,5vw,72px) clamp(20px,4vw,64px) 0', overflow: 'hidden' }}>
        <svg
          ref={wordmarkRef}
          viewBox="0 0 1000 150"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible' }}
          aria-label="First Sip"
        >
          <text
            ref={strokeRef}
            x="0"
            y="132"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            style={{
              fontFamily: "var(--font-prata),serif",
              fontSize: 160,
              fill: 'transparent',
              stroke: 'rgba(244,237,228,.4)',
              strokeWidth: 1.2,
              strokeDasharray: 1400,
              strokeDashoffset: 1400,
              // smooth out scroll jumps so the stroke visibly draws instead of snapping
              transition: 'stroke-dashoffset .9s cubic-bezier(.2,.7,.2,1)',
            }}
          >
            FIRST SIP
          </text>
          <text
            ref={fillRef}
            x="0"
            y="132"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            style={{ fontFamily: "var(--font-prata),serif", fontSize: 160, fill: 'rgba(244,237,228,0)' }}
          >
            FIRST SIP
          </text>
        </svg>
      </div>

      {/* legal */}
      <div
        style={{
          margin: '0 clamp(20px,4vw,64px)',
          padding: '22px 0 26px',
          borderTop: '1px solid rgba(244,237,228,.1)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 12,
          fontSize: 13,
          color: '#8a6f5e',
        }}
      >
        <span>© 2026 First Sip Cafe LLC · All Rights Reserved</span>
        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
          <a href="https://maps.google.com" target="_blank" rel="noopener">
            Google Reviews
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener">
            Find Us at Madina Mall
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover-cream"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: '#c9a88f',
              cursor: 'pointer',
              fontSize: 13,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            Back to top <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
