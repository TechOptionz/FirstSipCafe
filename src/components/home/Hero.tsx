'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLUR_DATA } from '@/lib/blur-data';
import { GOOGLE_REVIEWS_URL, HOURS } from '@/lib/data';
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '@/lib/reviews';
import { GoogleMark, Stars } from '@/components/reviews/GoogleBadge';

/**
 * "Open now · Every day 10 AM – 10:30 PM" chip. Rendered twice in the hero: `floating`
 * (desktop only, above the top-right corner of the cup column) and inline (mobile only, in the copy column).
 * The desktop-only / mobile-only classes in globals.css switch at 860px.
 */
function OpenBadge({ floating = false }: { floating?: boolean }) {
  return (
    <div
      className={floating ? 'desktop-only' : 'mobile-only'}
      style={{
        ...(floating
          ? { position: 'absolute', right: 0, top: 0, transform: 'translateY(-45%)', zIndex: 2 }
          : { alignSelf: 'center' }),
        background: 'rgba(244,237,228,.95)',
        color: '#2b1d16',
        padding: floating ? '16px 20px' : '8px 14px',
        borderRadius: floating ? 16 : 999,
        flexDirection: floating ? 'column' : 'row',
        alignItems: floating ? 'stretch' : 'center',
        gap: floating ? 6 : 10,
        boxShadow: '0 20px 40px -20px rgba(0,0,0,.5)',
      }}
    >
      <span
        style={{
          fontSize: 11,
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          color: '#8a6f5e',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#3ca05a',
            animation: 'pulse 2s infinite',
          }}
        />
        Open Now
      </span>
      <span style={{ fontFamily: "var(--font-prata),serif", fontSize: floating ? 17 : 14 }}>
        {`Every Day ${HOURS.short}`}
      </span>
    </div>
  );
}

/** Hero "what we do" strip. Titles are what the café is known for; notes are the proof. */
const CRAFT = [
  { cat: 'brew', title: 'Manual Brew', note: 'V60 · Chemex · Aeropress · Turkish' },
  { cat: 'hot', title: 'Specialty Coffee', note: 'Signature Spanish Latte' },
  { cat: 'matcha', title: 'Ceremonial Matcha', note: 'Whisked fresh to order' },
  { cat: 'food', title: 'Baked Fresh Daily', note: 'Croissants · muffins · cheesecake' },
] as const;

export default function Hero() {
  const cupRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (cupRef.current) {
        cupRef.current.style.transform = `translateY(${y * 0.28}px) rotate(${Math.min(
          y / 22,
          26,
        )}deg) scale(${Math.max(1 - y / 2600, 0.82)})`;
      }
      if (heroTextRef.current) heroTextRef.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        background: '#2b1d16',
        color: '#f4ede4',
        overflow: 'hidden',
      }}
    >
      {/* Hero backdrop: preloaded, responsive, blurred preview while it streams in. */}
      <Image
        src="/assets/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={BLUR_DATA['/assets/hero-bg.webp']}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg,rgba(28,18,13,.35),rgba(28,18,13,0) 40%,rgba(28,18,13,.15))',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          minHeight: 'calc(100svh - 114px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))',
          alignItems: 'center',
          maxWidth: 1320,
          margin: '0 auto',
          width: '100%',
          padding: 'clamp(24px,4vw,60px) 20px 80px',
          gap: 'clamp(20px,4vw,48px)',
        }}
        className="hero-grid"
      >
        <div
          ref={heroTextRef}
          className="hero-copy"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            animation: 'fadeUp .9s cubic-bezier(.2,.7,.2,1) both',
            willChange: 'transform',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 13,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: '#c9a88f',
            }}
          >
            <span style={{ width: 28, height: 1, background: '#c8623a', display: 'inline-block' }} />
            <span className="desktop-only">Madina Mall · Ground Floor · Dubai UAE</span>
            <span className="mobile-only">Madina Mall · Ground Floor</span>
          </span>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-prata),serif",
              fontWeight: 400,
              fontSize: 'clamp(56px,9.5vw,132px)',
              lineHeight: 0.94,
              letterSpacing: '-.015em',
              color: '#f4ede4',
            }}
          >
            Your
            <br />
            First <em style={{ fontStyle: 'italic', color: '#e0855d' }}>Sip.</em>
          </h1>
          <p
            className="hero-sub"
            style={{
              margin: 0,
              fontSize: 'clamp(16px,1.4vw,20px)',
              lineHeight: 1.6,
              color: '#d9c7b4',
              maxWidth: 460,
              fontWeight: 300,
              textWrap: 'pretty',
            }}
          >
            Specialty coffees, hand-poured manual brews, ceremonial matcha, vibrant smoothies &amp;
            artisan pastries — crafted daily at Madina Mall, Dubai.
          </p>
          {/* What we do: a quick scan of the café before the menu. Each chip deep-links to its category. */}
          <ul className="hero-craft" aria-label="What we serve">
            {CRAFT.map((c) => (
              <li key={c.cat}>
                <Link href={`/menu?cat=${c.cat}`} className="hero-craft-chip">
                  <span className="hero-craft-title">{c.title}</span>
                  <span className="hero-craft-note">{c.note}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
            <Link
              href="/menu"
              className="btn-solid-light lift2 hero-btn"
              style={{
                background: '#f4ede4',
                color: '#2b1d16',
                padding: '17px 30px',
                borderRadius: 999,
                fontSize: 13,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                minHeight: 50,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
              <span>
                View <span className="desktop-only">Full&nbsp;</span>Menu
              </span>
            </Link>
            <Link
              href="/visit"
              className="btn-outline-light hero-btn"
              style={{
                border: '1.5px solid rgba(244,237,228,.6)',
                color: '#f4ede4',
                padding: '17px 30px',
                borderRadius: 999,
                fontSize: 13,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                minHeight: 50,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" />
                <circle cx="12" cy="11" r="2.2" />
              </svg>
              Find Us
            </Link>
          </div>
          <div
            className="hero-meta"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px 18px',
              marginTop: 8,
              fontSize: 14,
              color: '#c9a88f',
            }}
          >
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener"
              className="hover-cream"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap' }}
            >
              <GoogleMark size={16} />
              <Stars value={GOOGLE_RATING} size={13} color="#e0a02a" track="rgba(244,237,228,.25)" />
              <span>
                <strong style={{ fontWeight: 600, color: '#f4ede4' }}>{GOOGLE_RATING.toFixed(1)}</strong> ·{' '}
                {GOOGLE_REVIEW_COUNT} Google reviews
              </span>
            </a>
            {/* Mobile only: sits in the text flow so it never covers the cup or the scroll hint. */}
            <OpenBadge />
          </div>
        </div>

        {/* THE CUP */}
        <div
          className="hero-cup"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'min(70vw,560px)',
            animation: 'fadeUp 1s .2s cubic-bezier(.2,.7,.2,1) both',
          }}
        >
          <div
            style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' }}
          >
            <span
              style={{
                fontFamily: "var(--font-prata),serif",
                fontSize: 'clamp(120px,22vw,320px)',
                lineHeight: 1,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(244,237,228,.12)',
                letterSpacing: '-.02em',
                userSelect: 'none',
              }}
            >
              SIP
            </span>
          </div>
          <div
            ref={cupRef}
            style={{
              position: 'relative',
              width: 'clamp(220px,34vw,340px)',
              aspectRatio: '34/44',
              willChange: 'transform',
              transition: 'transform .1s linear',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                animation: 'drift 6s ease-in-out infinite',
                filter: 'drop-shadow(0 50px 50px rgba(0,0,0,.6))',
              }}
            >
              {/* smoke */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: '-30%',
                  height: '56%',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '40%',
                    top: '60%',
                    width: 60,
                    height: 110,
                    borderRadius: '50%',
                    background:
                      'radial-gradient(ellipse at center,rgba(255,255,255,.75),rgba(255,255,255,0) 68%)',
                    filter: 'blur(9px)',
                    animation: 'smokeA 4.8s ease-out infinite',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '62%',
                    width: 72,
                    height: 130,
                    borderRadius: '50%',
                    background:
                      'radial-gradient(ellipse at center,rgba(255,255,255,.7),rgba(255,255,255,0) 68%)',
                    filter: 'blur(11px)',
                    animation: 'smokeB 5.6s 1.2s ease-out infinite',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '34%',
                    top: '58%',
                    width: 52,
                    height: 100,
                    borderRadius: '50%',
                    background:
                      'radial-gradient(ellipse at center,rgba(255,255,255,.65),rgba(255,255,255,0) 68%)',
                    filter: 'blur(9px)',
                    animation: 'smokeC 4.2s 2.4s ease-out infinite',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '58%',
                    top: '60%',
                    width: 50,
                    height: 104,
                    borderRadius: '50%',
                    background:
                      'radial-gradient(ellipse at center,rgba(255,255,255,.65),rgba(255,255,255,0) 68%)',
                    filter: 'blur(10px)',
                    animation: 'smokeA 6.2s 3.1s ease-out infinite',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '44%',
                    top: '64%',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle,rgba(255,255,255,.5),rgba(255,255,255,0) 70%)',
                    filter: 'blur(13px)',
                    animation: 'smokeB 5s .6s ease-out infinite',
                  }}
                />
              </div>
              {/* lid knob */}
              <div
                style={{
                  position: 'absolute',
                  left: '22%',
                  right: '22%',
                  top: '8%',
                  height: '7%',
                  background: 'linear-gradient(180deg,#f3e8da 0%,#e2d1bf 60%,#cdb9a4 100%)',
                  borderRadius: '14px 14px 4px 4px',
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,.7),inset 0 -3px 0 rgba(43,29,22,.12)',
                }}
              />
              {/* sip hole */}
              <div
                style={{
                  position: 'absolute',
                  left: '44%',
                  width: '12%',
                  top: '9.5%',
                  height: '2.2%',
                  borderRadius: '50%',
                  background: 'linear-gradient(180deg,#5a4636,#2b1d16)',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,.6)',
                }}
              />
              {/* lid top ellipse */}
              <div
                style={{
                  position: 'absolute',
                  left: '-1%',
                  right: '-1%',
                  top: '13%',
                  height: '5%',
                  borderRadius: '50%',
                  background: 'linear-gradient(180deg,#f6ede1,#e9dccb)',
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,.8)',
                }}
              />
              {/* lid rim */}
              <div
                style={{
                  position: 'absolute',
                  left: '-1%',
                  right: '-1%',
                  top: '15%',
                  height: '7.5%',
                  background:
                    'linear-gradient(90deg,#cdb9a4 0%,#efe2d2 22%,#f6ede1 45%,#e6d6c4 75%,#bfa891 100%)',
                  borderRadius: '0 0 10px 10px',
                  boxShadow: '0 5px 8px -3px rgba(43,29,22,.35),inset 0 -3px 0 rgba(43,29,22,.1)',
                }}
              />
              {/* body */}
              <div
                style={{
                  position: 'absolute',
                  left: '3%',
                  right: '3%',
                  top: '22%',
                  bottom: 0,
                  clipPath: 'polygon(0 0,100% 0,86% 100%,14% 100%)',
                  background:
                    'linear-gradient(90deg,#2a1b13 0%,#4a3328 14%,#6a4a38 30%,#3a271e 55%,#2e1f17 78%,#5a3f30 92%,#241711 100%)',
                  borderRadius: '0 0 26px 26px',
                }}
              />
              {/* body top shadow under lid */}
              <div
                style={{
                  position: 'absolute',
                  left: '3%',
                  right: '3%',
                  top: '22%',
                  height: '6%',
                  clipPath: 'polygon(0 0,100% 0,99% 100%,1% 100%)',
                  background: 'linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,0))',
                }}
              />
              {/* bottom seam */}
              <div
                style={{
                  position: 'absolute',
                  left: '17.5%',
                  right: '17.5%',
                  bottom: 0,
                  height: '2.5%',
                  background: 'linear-gradient(180deg,#3a271e,#120a06)',
                  borderRadius: '0 0 26px 26px',
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,.08)',
                }}
              />
              {/* sleeve */}
              <div
                style={{
                  position: 'absolute',
                  left: '1%',
                  right: '1%',
                  top: '38%',
                  height: '30%',
                  clipPath: 'polygon(0 0,100% 0,94% 100%,6% 100%)',
                  background:
                    'linear-gradient(90deg,#8e3f22 0%,#c8623a 18%,#e0855d 40%,#c8623a 62%,#a94b2a 85%,#7d361c 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  color: '#f4ede4',
                  boxShadow:
                    'inset 0 6px 8px -4px rgba(0,0,0,.35),inset 0 -6px 8px -4px rgba(0,0,0,.35)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'repeating-linear-gradient(90deg,rgba(255,255,255,.07) 0 3px,rgba(0,0,0,.06) 3px 7px)',
                    pointerEvents: 'none',
                  }}
                />
                {/* the real First Sip logo, printed on the sleeve */}
                <div
                  style={{
                    position: 'relative',
                    height: '78%',
                    aspectRatio: '1',
                    borderRadius: '50%',
                    boxShadow: '0 6px 14px -6px rgba(0,0,0,.55), 0 0 0 2px rgba(244,237,228,.35)',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/assets/logo.svg"
                    alt="First Sip Cafe"
                    fill
                    sizes="(max-width: 859px) 80px, 140px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              {/* sleeve edge shadows on body */}
              <div
                style={{
                  position: 'absolute',
                  left: '4%',
                  right: '4%',
                  top: '36.5%',
                  height: '1.5%',
                  clipPath: 'polygon(0 0,100% 0,99% 100%,1% 100%)',
                  background: 'rgba(0,0,0,.4)',
                  filter: 'blur(2px)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '8%',
                  right: '8%',
                  top: '68%',
                  height: '2%',
                  clipPath: 'polygon(0 0,100% 0,99% 100%,1% 100%)',
                  background: 'rgba(0,0,0,.45)',
                  filter: 'blur(2px)',
                }}
              />
              {/* specular highlights */}
              <div
                style={{
                  position: 'absolute',
                  left: '14%',
                  top: '24%',
                  width: '5%',
                  height: '72%',
                  background:
                    'linear-gradient(180deg,rgba(255,255,255,.22),rgba(255,255,255,.05) 60%,rgba(255,255,255,0))',
                  borderRadius: 20,
                  pointerEvents: 'none',
                  filter: 'blur(1px)',
                  animation: 'shimmer 5s ease-in-out infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '10%',
                  top: '24%',
                  width: '2%',
                  height: '70%',
                  background: 'linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,0))',
                  borderRadius: 20,
                  pointerEvents: 'none',
                  filter: 'blur(1px)',
                }}
              />
            </div>
          </div>
          {/* Desktop: sits above the top-right corner of the cup column, clear of the lid. On mobile the same badge
              renders inline under the rating instead (see OpenBadge below). */}
          <OpenBadge floating />
        </div>

        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 22,
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            fontSize: 10,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            color: '#c9a88f',
          }}
        >
          <span>Scroll</span>
          <span
            style={{
              width: 1,
              height: 32,
              background: 'linear-gradient(#e0855d,transparent)',
              animation: 'bounce 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </div>
  );
}
