'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

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
        background: "#2b1d16 url('/assets/hero-bg.jpg') center/cover no-repeat",
        color: '#f4ede4',
        overflow: 'hidden',
      }}
    >
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
      >
        <div
          ref={heroTextRef}
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
            Madina Mall · Ground Floor · Dubai UAE
          </span>
          <h1
            style={{
              margin: 0,
              fontFamily: "'Prata',serif",
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
            Specialty coffees, ceremonial matcha, vibrant smoothies &amp; artisan pastries — crafted
            daily at Madina Mall, Dubai.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
            <Link
              href="/menu"
              className="btn-solid-light lift2"
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
              }}
            >
              View Full Menu
            </Link>
            <Link
              href="/visit"
              className="btn-outline-light"
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
                gap: 8,
              }}
            >
              Find Us <span>→</span>
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 8,
              fontSize: 14,
              color: '#c9a88f',
            }}
          >
            <span style={{ color: '#e0855d', letterSpacing: 2 }}>★★★★★</span>
            <span style={{ whiteSpace: 'nowrap' }}>
              <strong style={{ fontWeight: 600, color: '#f4ede4' }}>4.9</strong> · Google Reviews ·
              120+
            </span>
          </div>
        </div>

        {/* THE CUP */}
        <div
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
                fontFamily: "'Prata',serif",
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
                <span
                  style={{
                    position: 'relative',
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(244,237,228,.85)',
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: "'Prata',serif",
                    fontSize: 19,
                    textShadow: '0 1px 0 rgba(0,0,0,.25)',
                  }}
                >
                  S
                </span>
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'Prata',serif",
                    fontSize: 'clamp(12px,1.4vw,15px)',
                    letterSpacing: '.3em',
                    textShadow: '0 1px 0 rgba(0,0,0,.25)',
                  }}
                >
                  FIRST SIP
                </span>
                <span style={{ position: 'relative', fontSize: 8, letterSpacing: '.3em', opacity: 0.85 }}>
                  DUBAI · EST. 2024
                </span>
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
          {/* floating badge */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: '4%',
              zIndex: 2,
              background: 'rgba(244,237,228,.95)',
              color: '#2b1d16',
              padding: '16px 20px',
              borderRadius: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
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
            <span style={{ fontFamily: "'Prata',serif", fontSize: 17 }}>Daily 9 AM – 11 PM</span>
          </div>
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
