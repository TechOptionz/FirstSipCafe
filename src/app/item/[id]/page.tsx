import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageSlot from '@/components/ImageSlot';
import { ALL_ITEMS, CATS, ITEM_BY_ID, MAPS_URL, TEL_LANDLINE, pad2 } from '@/lib/data';

export function generateStaticParams() {
  return ALL_ITEMS.map((i) => ({ id: i.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = ITEM_BY_ID[id];
  if (!item) return { title: 'Menu · First Sip Cafe' };
  return {
    title: `${item.name} · First Sip Cafe`,
    description: item.description,
  };
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  padding: '16px 0',
  borderBottom: '1px solid rgba(43,29,22,.15)',
  fontSize: 15,
};

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = ITEM_BY_ID[id];
  if (!item) notFound();

  const idx = ALL_ITEMS.indexOf(item);
  const prev = ALL_ITEMS[(idx - 1 + ALL_ITEMS.length) % ALL_ITEMS.length];
  const next = ALL_ITEMS[(idx + 1) % ALL_ITEMS.length];
  const related = CATS.find((c) => c.id === item.catId)!
    .items.map((it, i) => ({ ...it, num: pad2(i + 1) }))
    .filter((i) => i.id !== item.id)
    .slice(0, 8);

  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          maxWidth: 'none',
          margin: 0,
          width: '100%',
          padding: '20px clamp(20px,4vw,64px) 0',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 12,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: '#8a6f5e',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/" style={{ cursor: 'pointer' }}>
          Home
        </Link>
        <span>/</span>
        <Link href="/menu" style={{ cursor: 'pointer' }}>
          Menu
        </Link>
        <span>/</span>
        <Link href={`/menu?cat=${item.catId}`} style={{ cursor: 'pointer' }}>
          {item.catName}
        </Link>
        <span>/</span>
        <span style={{ color: '#2b1d16' }}>{item.name}</span>
      </div>

      <div
        style={{
          maxWidth: 'none',
          margin: 0,
          width: '100%',
          padding: 'clamp(24px,4vw,56px) clamp(20px,4vw,64px) clamp(56px,8vw,110px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
          gap: 'clamp(32px,5vw,80px)',
          alignItems: 'start',
        }}
      >
        <div
          className="sticky-desktop"
          style={{ top: 96, animation: 'fadeUp .8s cubic-bezier(.2,.7,.2,1) both' }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: 32,
              overflow: 'hidden',
              background: '#e6d6c4',
              position: 'relative',
              boxShadow: '0 40px 80px -40px rgba(43,29,22,.5)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                animation: 'zoomIn 1.2s cubic-bezier(.2,.7,.2,1) both',
              }}
            >
              <ImageSlot id={`menu-${item.id}`} placeholder={`${item.name} — hero photo`} />
            </div>
            <span
              style={{
                position: 'absolute',
                top: 18,
                left: 18,
                background: 'rgba(244,237,228,.92)',
                padding: '8px 14px',
                borderRadius: 999,
                fontSize: 11,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                pointerEvents: 'none',
              }}
            >
              {item.catName}
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 26,
            animation: 'fadeUp .8s .1s cubic-bezier(.2,.7,.2,1) both',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span
              style={{
                fontSize: 13,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: '#c8623a',
              }}
            >
              {item.catName}
            </span>
            <h1
              style={{
                margin: 0,
                fontFamily: "'Prata',serif",
                fontWeight: 400,
                fontSize: 'clamp(44px,6vw,88px)',
                lineHeight: 0.98,
                textWrap: 'balance',
              }}
            >
              {item.name}
            </h1>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span
                style={{
                  fontFamily: "'Prata',serif",
                  fontSize: 'clamp(30px,3.5vw,44px)',
                  color: '#c8623a',
                }}
              >
                {item.price}
              </span>
              <span
                style={{
                  fontSize: 14,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: '#8a6f5e',
                }}
              >
                AED
              </span>
            </div>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: 19,
              lineHeight: 1.7,
              color: '#5a4636',
              fontWeight: 300,
              maxWidth: 520,
              textWrap: 'pretty',
            }}
          >
            {item.description}
          </p>

          <div
            style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(43,29,22,.15)' }}
          >
            <div style={rowStyle}>
              <span style={{ color: '#8a6f5e' }}>Served</span>
              <span>{item.serve}</span>
            </div>
            <div style={rowStyle}>
              <span style={{ color: '#8a6f5e' }}>Available</span>
              <span>Every Day · 9:00 AM – 11:00 PM</span>
            </div>
            <div style={rowStyle}>
              <span style={{ color: '#8a6f5e' }}>Where</span>
              <span>Madina Mall, Ground Floor, Shop G01</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={`tel:${TEL_LANDLINE}`}
              className="btn-solid-dark"
              style={{
                background: '#2b1d16',
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
              Call to Order
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
              className="btn-outline-dark"
              style={{
                border: '1.5px solid #2b1d16',
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
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 12,
              marginTop: 10,
              paddingTop: 20,
              borderTop: '1px solid rgba(43,29,22,.15)',
            }}
          >
            <Link
              href={`/item/${prev.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                cursor: 'pointer',
                fontSize: 12,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#8a6f5e',
              }}
            >
              <span>← Previous</span>
              <span
                style={{
                  fontFamily: "'Prata',serif",
                  fontSize: 18,
                  letterSpacing: 0,
                  textTransform: 'none',
                  color: '#2b1d16',
                }}
              >
                {prev.name}
              </span>
            </Link>
            <Link
              href={`/item/${next.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                cursor: 'pointer',
                textAlign: 'right',
                fontSize: 12,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#8a6f5e',
              }}
            >
              <span>Next →</span>
              <span
                style={{
                  fontFamily: "'Prata',serif",
                  fontSize: 18,
                  letterSpacing: 0,
                  textTransform: 'none',
                  color: '#2b1d16',
                }}
              >
                {next.name}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ background: '#e6d6c4', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,64px)' }}>
        <div style={{ maxWidth: 'none', margin: 0, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 12,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "'Prata',serif",
                fontWeight: 400,
                fontSize: 'clamp(30px,4vw,52px)',
              }}
            >
              More {item.catName}
            </h2>
            <Link
              href={`/menu?cat=${item.catId}`}
              className="link-underline"
              style={{
                fontSize: 13,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                borderBottom: '1.5px solid #2b1d16',
                paddingBottom: 4,
                cursor: 'pointer',
              }}
            >
              View category →
            </Link>
          </div>

          <div
            className="hscroll"
            style={{
              display: 'flex',
              gap: 22,
              overflowX: 'auto',
              scrollSnapType: 'x proximity',
              padding: '8px clamp(20px,4vw,64px) 16px',
              margin: '0 calc(-1 * clamp(20px,4vw,64px))',
              scrollPaddingLeft: 'clamp(20px,4vw,64px)',
            }}
          >
            {related.map((it) => (
              <Link
                key={it.id}
                href={`/item/${it.id}`}
                className="related-card reveal-30"
                style={{
                  flex: 'none',
                  width: 'min(72vw,320px)',
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
                    aspectRatio: '3/4',
                    borderRadius: 26,
                    overflow: 'hidden',
                    background: '#f4ede4',
                    position: 'relative',
                    boxShadow: '0 40px 60px -40px rgba(43,29,22,.5)',
                  }}
                >
                  <div className="zoom" style={{ position: 'absolute', inset: 0 }}>
                    <ImageSlot id={`menu-${it.id}`} placeholder={it.name} />
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
                    {it.num}
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
                    {it.catName}
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
                        fontSize: 'clamp(22px,2vw,28px)',
                        lineHeight: 1.1,
                        textWrap: 'balance',
                      }}
                    >
                      {it.name}
                    </span>
                    <span style={{ fontFamily: "'Prata',serif", fontSize: 20, whiteSpace: 'nowrap' }}>
                      {it.price}{' '}
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
                    style={{
                      fontSize: 15,
                      color: '#5a4636',
                      fontWeight: 300,
                      lineHeight: 1.5,
                      textWrap: 'pretty',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {it.description}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
