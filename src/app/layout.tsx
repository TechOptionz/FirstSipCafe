import type { Metadata, Viewport } from 'next';
import { Prata, Outfit } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { EMAIL, GEO, GOOGLE_REVIEWS_URL, HOURS, MAPS_URL, TEL_LANDLINE } from '@/lib/data';
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, REVIEWS } from '@/lib/reviews';

// Structured data so Google can show the rating, map and hours with the site.
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'First Sip Cafe',
  image: 'https://www.firstsipcafe.ae/assets/logo-512.png',
  url: 'https://www.firstsipcafe.ae/',
  telephone: TEL_LANDLINE,
  email: EMAIL,
  servesCuisine: 'Coffee',
  priceRange: 'AED 10–22',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Madina Mall, Ground Floor, Shop G01, Al Muhaisnah 4',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
  hasMap: MAPS_URL,
  sameAs: [GOOGLE_REVIEWS_URL],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: HOURS.opens,
    closes: HOURS.closes,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: GOOGLE_RATING,
    reviewCount: GOOGLE_REVIEW_COUNT,
    bestRating: 5,
  },
  review: REVIEWS.slice(0, 5).map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.stars, bestRating: 5 },
    reviewBody: r.text,
  })),
};

// Self-hosted via next/font: no render-blocking Google Fonts request, fonts are
// preloaded from our own origin and swapped in without layout shift.
const prata = Prata({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-prata' });
const outfit = Outfit({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'First Sip Cafe · Madina Mall, Dubai',
  description:
    'Specialty coffees, ceremonial matcha, vibrant smoothies & artisan pastries — crafted daily at Madina Mall, Ground Floor, Shop G01, Dubai. Open every day 10 AM – 10:30 PM.',
  icons: {
    icon: [
      { url: '/assets/logo-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/assets/logo-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/assets/logo-180.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${prata.variable} ${outfit.variable}`}>
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: '#f4ede4',
            color: '#2b1d16',
            fontFamily: 'var(--font-outfit),sans-serif',
            overflowX: 'clip',
          }}
        >
          <Nav />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </body>
    </html>
  );
}
