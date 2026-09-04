'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ImageSlot from '@/components/ImageSlot';
import { CATS, pad2 } from '@/lib/data';

// Runs before paint on the client, plain effect on the server — lets the page
// prerender the full menu and still land on ?cat=… without a visible flash.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const catFromSearch = (search: string) => {
  const q = new URLSearchParams(search).get('cat');
  return q && CATS.some((c) => c.id === q) ? q : 'all';
};

export default function MenuBrowser() {
  const pathname = usePathname();
  const [cat, setCat] = useState('all');

  // Deep links (footer / feature "see all") and back-forward navigation.
  useIsomorphicLayoutEffect(() => {
    setCat(catFromSearch(window.location.search));
  }, [pathname]);

  useEffect(() => {
    const onPop = () => setCat(catFromSearch(window.location.search));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const select = (id: string) => () => {
    setCat(id);
    // Keep the URL shareable, exactly as the design does on navigation.
    history.replaceState(null, '', id === 'all' ? '/menu' : `/menu?cat=${id}`);
  };

  const chips = [{ id: 'all', name: 'All' }, ...CATS];
  const visible = cat === 'all' ? CATS : CATS.filter((c) => c.id === cat);

  const scrollRow = (id: string, dir: number) => () => {
    const el = document.getElementById('row-' + id);
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 660), behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="sticky-desktop"
        style={{
          top: 64,
          zIndex: 10,
          background: 'rgba(244,237,228,.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(43,29,22,.08)',
        }}
      >
        <div
          className="hscroll"
          style={{
            maxWidth: 'none',
            margin: 0,
            padding: '12px clamp(20px,4vw,64px)',
            overflowX: 'auto',
            display: 'flex',
            gap: 8,
          }}
        >
          {chips.map((c) => (
            <button
              key={c.id}
              onClick={select(c.id)}
              className="filter-chip"
              style={{
                flex: 'none',
                border: `1px solid ${cat === c.id ? '#2b1d16' : 'rgba(43,29,22,.2)'}`,
                background: cat === c.id ? '#2b1d16' : 'transparent',
                color: cat === c.id ? '#f4ede4' : '#2b1d16',
                padding: '11px 18px',
                borderRadius: 999,
                fontSize: 13,
                letterSpacing: '.04em',
                cursor: 'pointer',
                minHeight: 44,
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: 'clamp(36px,5vw,64px) 0 clamp(64px,8vw,110px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(64px,8vw,112px)',
        }}
      >
        {visible.map((c) => (
          <div key={c.id} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div
              className="reveal"
              style={{
                maxWidth: 'none',
                margin: 0,
                width: '100%',
                padding: '0 clamp(20px,4vw,64px)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: 16,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18 }}>
                <span
                  style={{
                    fontFamily: "'Prata',serif",
                    fontSize: 'clamp(56px,7vw,96px)',
                    lineHeight: 0.85,
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(43,29,22,.25)',
                  }}
                >
                  {pad2(CATS.indexOf(c) + 1)}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span
                    style={{
                      fontSize: 12,
                      letterSpacing: '.2em',
                      textTransform: 'uppercase',
                      color: '#c8623a',
                    }}
                  >
                    {c.count} items · {c.serve}
                  </span>
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: "'Prata',serif",
                      fontWeight: 400,
                      fontSize: 'clamp(34px,4.4vw,60px)',
                      lineHeight: 1,
                    }}
                  >
                    {c.name}
                  </h2>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={scrollRow(c.id, -1)}
                  aria-label="Previous"
                  className="circle-btn"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    border: '1.5px solid #2b1d16',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: 18,
                    color: '#2b1d16',
                  }}
                >
                  ←
                </button>
                <button
                  onClick={scrollRow(c.id, 1)}
                  aria-label="Next"
                  className="circle-btn"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    border: '1.5px solid #2b1d16',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: 18,
                    color: '#2b1d16',
                  }}
                >
                  →
                </button>
              </div>
            </div>

            <div
              id={`row-${c.id}`}
              className="hscroll"
              style={{
                display: 'flex',
                gap: 20,
                overflowX: 'auto',
                scrollSnapType: 'x proximity',
                scrollPaddingLeft: 'clamp(20px,4vw,64px)',
                padding: '8px clamp(20px,4vw,64px) 24px',
                scrollBehavior: 'smooth',
              }}
            >
              {c.items.map((it, i) => (
                <Link
                  key={it.id}
                  href={`/item/${it.id}`}
                  className="menu-card reveal-30"
                  style={{
                    flex: 'none',
                    width: 'min(72vw,300px)',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      borderRadius: 24,
                      overflow: 'hidden',
                      background: '#e6d6c4',
                      position: 'relative',
                      boxShadow: '0 30px 50px -36px rgba(43,29,22,.55)',
                    }}
                  >
                    <div className="zoom" style={{ position: 'absolute', inset: 0 }}>
                      <ImageSlot id={`menu-${it.id}`} placeholder={it.name} />
                    </div>
                    <span
                      style={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        fontFamily: "'Prata',serif",
                        fontSize: 13,
                        letterSpacing: '.1em',
                        color: '#f4ede4',
                        background: 'rgba(43,29,22,.85)',
                        padding: '7px 12px',
                        borderRadius: 999,
                        pointerEvents: 'none',
                      }}
                    >
                      {pad2(i + 1)}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 14,
                        right: 14,
                        background: 'rgba(244,237,228,.94)',
                        padding: '9px 14px',
                        borderRadius: 999,
                        fontSize: 13,
                        fontWeight: 500,
                        pointerEvents: 'none',
                      }}
                    >
                      {it.price} AED
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 10,
                      padding: '0 4px',
                    }}
                  >
                    <span style={{ fontFamily: "'Prata',serif", fontSize: 20, lineHeight: 1.2 }}>
                      {it.name}
                    </span>
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        flex: 'none',
                        borderRadius: '50%',
                        border: '1px solid rgba(43,29,22,.25)',
                        display: 'grid',
                        placeItems: 'center',
                        fontSize: 14,
                        color: '#c8623a',
                      }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
