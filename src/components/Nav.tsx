'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HOURS, MAPS_DIRECTIONS_URL, PAGES, PAGE_HREFS, PAGE_LABELS, TEL_LANDLINE } from '@/lib/data';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const current =
    pathname === '/' ? 'home' : (PAGES as readonly string[]).find((p) => pathname === '/' + p) ?? '';

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }} data-scrolled={scrolled}>
      {/* announcement bar */}
      <div className="topbar">
        <div
          style={{
            height: 34,
            padding: '0 clamp(20px,4vw,64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#3ca05a',
                animation: 'pulse 2s infinite',
              }}
            />
            Open every day · {HOURS.long}
          </span>
          <span className="desktop-only" style={{ whiteSpace: 'nowrap' }}>
            Madina Mall · Ground Floor · Shop G01 · Dubai
          </span>
          <a
            href={`tel:${TEL_LANDLINE}`}
            className="hover-cream"
            style={{ whiteSpace: 'nowrap', color: '#c9a88f' }}
          >
            +971 42 880 478
          </a>
        </div>
      </div>

      {/* main bar */}
      <div className="navwrap">
        <div
          className="navbar"
          style={{
            padding: '0 clamp(20px,4vw,64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', flex: 'none' }}
          >
            <Image
              src="/assets/logo.svg"
              alt="First Sip Cafe"
              width={62}
              height={62}
              style={{
                width: 62,
                height: 62,
                borderRadius: '50%',
                display: 'block',
                flex: 'none',
                boxShadow: '0 6px 16px -8px rgba(43,29,22,.55)',
              }}
            />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: "var(--font-prata),serif", fontSize: 21, letterSpacing: '.16em' }}>
                FIRST SIP
              </span>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '.24em',
                  color: '#8a6f5e',
                  marginTop: 5,
                  whiteSpace: 'nowrap',
                }}
              >
                CAFÉ · DUBAI
              </span>
            </span>
          </Link>

          <nav
            className="desktop-only"
            style={{
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              padding: 5,
              border: '1px solid rgba(43,29,22,.12)',
              borderRadius: 999,
              background: 'rgba(244,237,228,.6)',
            }}
          >
            {PAGES.map((id) => (
              <Link
                key={id}
                href={PAGE_HREFS[id]}
                className="nav-pill"
                style={{
                  cursor: 'pointer',
                  padding: '10px 18px',
                  borderRadius: 999,
                  background: current === id ? '#2b1d16' : 'transparent',
                  color: current === id ? '#f4ede4' : '#2b1d16',
                  transition: 'background .3s,color .3s',
                }}
              >
                {PAGE_LABELS[id]}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 'none' }}>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener"
              className="desktop-only btn-outline-dark"
              style={{
                alignItems: 'center',
                gap: 8,
                border: '1.5px solid #2b1d16',
                color: '#2b1d16',
                padding: '11px 20px',
                borderRadius: 999,
                fontSize: 12,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              Directions
            </a>
            <a
              href={`tel:${TEL_LANDLINE}`}
              className="desktop-only btn-solid-dark lift1"
              style={{
                background: '#2b1d16',
                color: '#f4ede4',
                padding: '12px 22px',
                borderRadius: 999,
                fontSize: 12,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              Call Now
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="mobile-only"
              style={{
                width: 46,
                height: 46,
                border: '1px solid rgba(43,29,22,.15)',
                borderRadius: '50%',
                background: 'transparent',
                cursor: 'pointer',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                padding: 0,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 1.5,
                  background: '#2b1d16',
                  display: 'block',
                  transition: 'transform .3s',
                  transform: menuOpen ? 'translateY(3.25px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  width: 18,
                  height: 1.5,
                  background: '#2b1d16',
                  display: 'block',
                  transition: 'transform .3s',
                  transform: menuOpen ? 'translateY(-3.25px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            style={{
              borderTop: '1px solid rgba(43,29,22,.08)',
              padding: '12px 20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              animation: 'drawerIn .3s ease both',
              background: '#f4ede4',
              maxHeight: 'calc(100vh - 110px)',
              overflowY: 'auto',
            }}
          >
            {PAGES.map((id) => (
              <Link
                key={id}
                href={PAGE_HREFS[id]}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 4px',
                  fontFamily: "var(--font-prata),serif",
                  fontSize: 28,
                  borderBottom: '1px solid rgba(43,29,22,.08)',
                  cursor: 'pointer',
                }}
              >
                <span>{PAGE_LABELS[id]}</span>
                <span style={{ fontSize: 18, color: '#c8623a' }}>→</span>
              </Link>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
              <a
                href={`tel:${TEL_LANDLINE}`}
                style={{
                  background: '#2b1d16',
                  color: '#f4ede4',
                  padding: 16,
                  borderRadius: 999,
                  textAlign: 'center',
                  fontSize: 12,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                }}
              >
                Call Now
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener"
                style={{
                  border: '1.5px solid #2b1d16',
                  padding: 16,
                  borderRadius: 999,
                  textAlign: 'center',
                  fontSize: 12,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                }}
              >
                Directions
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
