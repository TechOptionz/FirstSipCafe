import type { Metadata } from 'next';
import MenuBrowser from '@/components/MenuBrowser';

export const metadata: Metadata = {
  title: 'Full Menu · First Sip Cafe',
  description: 'Over 50 specialty coffees, matcha, smoothies and pastries. All prices in AED.',
};

export default function MenuPage() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          background: '#2b1d16',
          color: '#f4ede4',
          padding: 'clamp(48px,7vw,96px) clamp(20px,4vw,64px) clamp(40px,5vw,64px)',
        }}
      >
        <div
          style={{
            maxWidth: 'none',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            animation: 'fadeUp .8s cubic-bezier(.2,.7,.2,1) both',
          }}
        >
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: '#c8623a',
            }}
          >
            Full Menu · 50+ items
          </span>
          <h1
            style={{
              margin: 0,
              fontFamily: "'Prata',serif",
              fontWeight: 400,
              fontSize: 'clamp(48px,8vw,120px)',
              lineHeight: 0.95,
            }}
          >
            What We <em style={{ fontStyle: 'italic', color: '#c9a88f' }}>Craft</em>
          </h1>
          <p style={{ margin: 0, color: '#c9a88f', fontWeight: 300, fontSize: 18 }}>
            All prices in AED. Made fresh, daily 9 AM – 11 PM.
          </p>
        </div>
      </div>

      <MenuBrowser />
    </section>
  );
}
