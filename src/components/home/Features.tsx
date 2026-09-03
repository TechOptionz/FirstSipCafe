import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import { CATS, FEATURE_BLURBS, FEATURE_IDS, pad2 } from '@/lib/data';

export default function Features() {
  const features = FEATURE_IDS.map((id, i) => {
    const c = CATS.find((c) => c.id === id)!;
    return { ...c, num: pad2(i + 1), dir: i % 2 ? 'row-reverse' : 'row', blurb: FEATURE_BLURBS[id] };
  });

  return (
    <div
      style={{
        maxWidth: 'none',
        margin: 0,
        width: '100%',
        padding: 'clamp(56px,8vw,110px) clamp(20px,4vw,64px) 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(56px,8vw,110px)',
      }}
    >
      {features.map((f) => (
        <div
          key={f.id}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: f.dir as 'row' | 'row-reverse',
            alignItems: 'center',
            gap: 'clamp(28px,5vw,72px)',
          }}
        >
          <Link
            href={`/menu?cat=${f.id}`}
            className="feature-img reveal-35"
            style={{
              flex: '1 1 380px',
              minWidth: 0,
              aspectRatio: '5/4',
              borderRadius: 28,
              overflow: 'hidden',
              background: '#e6d6c4',
              position: 'relative',
              display: 'block',
              cursor: 'pointer',
            }}
          >
            <div className="zoom" style={{ position: 'absolute', inset: 0 }}>
              <ImageSlot id={`feature-${f.id}`} placeholder={`${f.name} photo`} />
            </div>
          </Link>
          <div
            className="reveal-35"
            style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 18 }}
          >
            <span
              style={{
                fontFamily: "'Prata',serif",
                fontSize: 'clamp(60px,8vw,110px)',
                lineHeight: 0.8,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(43,29,22,.25)',
              }}
            >
              {f.num}
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: "'Prata',serif",
                fontWeight: 400,
                fontSize: 'clamp(34px,4.2vw,58px)',
                lineHeight: 1.04,
              }}
            >
              {f.name}
            </h3>
            <p
              style={{
                margin: 0,
                color: '#5a4636',
                fontWeight: 300,
                lineHeight: 1.65,
                fontSize: 18,
                maxWidth: 460,
                textWrap: 'pretty',
              }}
            >
              {f.blurb}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {f.items.slice(0, 4).map((it) => (
                <Link
                  key={it.id}
                  href={`/item/${it.id}`}
                  className="chip-outline"
                  style={{
                    border: '1px solid rgba(43,29,22,.2)',
                    padding: '9px 14px',
                    borderRadius: 999,
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  {it.name} · {it.price}
                </Link>
              ))}
            </div>
            <Link
              href={`/menu?cat=${f.id}`}
              className="link-underline"
              style={{
                alignSelf: 'flex-start',
                marginTop: 6,
                fontSize: 13,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                borderBottom: '1.5px solid #2b1d16',
                paddingBottom: 4,
                cursor: 'pointer',
              }}
            >
              See all {f.count} →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
