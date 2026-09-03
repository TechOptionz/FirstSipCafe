'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import { ITEM_BY_ID, PICKS, pad2 } from '@/lib/data';

export default function Picks() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [pickIdx, setPickIdx] = useState(0);

  const scrollBy = (dir: number) => () => {
    const el = carouselRef.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 720), behavior: 'smooth' });
  };

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const card = el.firstElementChild;
    if (!card) return;
    const step = card.getBoundingClientRect().width + 22;
    const idx = Math.min(PICKS.length - 1, Math.max(0, Math.round(el.scrollLeft / step)));
    if (idx !== pickIdx) setPickIdx(idx);
  };

  return (
    <div
      style={{
        position: 'relative',
        padding: 'clamp(64px,9vw,120px) 0 clamp(24px,3vw,40px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 36,
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          position: 'absolute',
          right: '-1%',
          top: 'clamp(20px,3vw,40px)',
          fontFamily: "'Prata',serif",
          fontSize: 'clamp(120px,18vw,260px)',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(43,29,22,.1)',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-.02em',
        }}
      >
        Picks
      </span>

      <div
        className="reveal"
        style={{
          position: 'relative',
          padding: '0 clamp(20px,4vw,64px)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 13,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: '#c8623a',
            }}
          >
            <span style={{ width: 28, height: 1, background: '#c8623a', display: 'inline-block' }} />
            Today&apos;s Picks · {PICKS.length} favourites
          </span>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Prata',serif",
              fontWeight: 400,
              fontSize: 'clamp(40px,5.6vw,84px)',
              lineHeight: 0.98,
              letterSpacing: '-.01em',
            }}
          >
            Poured with <em style={{ fontStyle: 'italic', color: '#8a6f5e' }}>care</em>
          </h2>
          <p
            style={{
              margin: 0,
              color: '#5a4636',
              fontWeight: 300,
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 480,
              textWrap: 'pretty',
            }}
          >
            The cups our guests come back for. Tap any one to see how it&apos;s made, what&apos;s in it
            and what it costs.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: '#8a6f5e',
              whiteSpace: 'nowrap',
            }}
          >
            {pad2(pickIdx + 1)} / {PICKS.length}
          </span>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={scrollBy(-1)}
              aria-label="Previous"
              className="circle-btn"
              style={{
                width: 54,
                height: 54,
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
              onClick={scrollBy(1)}
              aria-label="Next"
              className="circle-btn-solid"
              style={{
                width: 54,
                height: 54,
                borderRadius: '50%',
                border: '1.5px solid #2b1d16',
                background: '#2b1d16',
                color: '#f4ede4',
                cursor: 'pointer',
                fontSize: 18,
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={carouselRef}
        onScroll={onScroll}
        className="hscroll"
        style={{
          position: 'relative',
          display: 'flex',
          gap: 22,
          overflowX: 'auto',
          scrollSnapType: 'x proximity',
          scrollPaddingLeft: 'clamp(20px,4vw,64px)',
          padding: '8px clamp(20px,4vw,64px) 28px',
          scrollBehavior: 'smooth',
          alignItems: 'flex-end',
        }}
      >
        {PICKS.map((p, i) => {
          const item = ITEM_BY_ID[p.id];
          return (
            <Link
              key={p.id}
              href={`/item/${item.id}`}
              className="pick-card reveal-30"
              style={{
                flex: 'none',
                width: `min(78vw,${p.wide ? '440px' : '340px'})`,
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: p.wide ? '1/1' : '3/4',
                  borderRadius: 26,
                  overflow: 'hidden',
                  background: '#e6d6c4',
                  position: 'relative',
                  boxShadow: '0 40px 60px -40px rgba(43,29,22,.6)',
                }}
              >
                <div className="zoom" style={{ position: 'absolute', inset: 0 }}>
                  <ImageSlot id={`menu-${item.id}`} placeholder={item.name} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 'auto 0 0 0',
                    height: '45%',
                    background: 'linear-gradient(180deg,rgba(28,18,13,0),rgba(28,18,13,.55))',
                    pointerEvents: 'none',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    fontFamily: "'Prata',serif",
                    fontSize: 13,
                    letterSpacing: '.1em',
                    color: '#f4ede4',
                    background: 'rgba(43,29,22,.85)',
                    padding: '8px 13px',
                    borderRadius: 999,
                    pointerEvents: 'none',
                  }}
                >
                  {pad2(i + 1)}
                </span>
                <span
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'rgba(244,237,228,.94)',
                    padding: '8px 13px',
                    borderRadius: 999,
                    fontSize: 11,
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                  }}
                >
                  {item.catName}
                </span>
                <div
                  style={{
                    position: 'absolute',
                    left: 20,
                    right: 20,
                    bottom: 18,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    gap: 10,
                    color: '#f4ede4',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Prata',serif",
                      fontSize: 'clamp(22px,2vw,30px)',
                      lineHeight: 1.1,
                      textWrap: 'balance',
                    }}
                  >
                    {item.name}
                  </span>
                  <span style={{ fontFamily: "'Prata',serif", fontSize: 20, whiteSpace: 'nowrap' }}>
                    {item.price}{' '}
                    <span
                      style={{
                        fontSize: 11,
                        letterSpacing: '.14em',
                        fontFamily: "'Outfit',sans-serif",
                      }}
                    >
                      AED
                    </span>
                  </span>
                </div>
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
                <span
                  style={{ fontSize: 16, color: '#5a4636', fontWeight: 300, lineHeight: 1.5, textWrap: 'pretty' }}
                >
                  {p.tagline}
                </span>
                <span
                  style={{
                    width: 36,
                    height: 36,
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
          );
        })}
      </div>

      <div style={{ padding: '0 clamp(20px,4vw,64px)', display: 'flex', gap: 6 }}>
        {PICKS.map((_, i) => (
          <span
            key={i}
            style={{
              height: 3,
              width: i === pickIdx ? 44 : 18,
              borderRadius: 2,
              background: i === pickIdx ? '#c8623a' : 'rgba(43,29,22,.2)',
              transition: 'all .35s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
