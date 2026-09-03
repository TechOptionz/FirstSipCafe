import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'First Sip Cafe · Madina Mall, Dubai',
  description:
    'Specialty coffees, ceremonial matcha, vibrant smoothies & artisan pastries — crafted daily at Madina Mall, Ground Floor, Shop G01, Dubai.',
  icons: { icon: '/assets/logo-72x72.png', apple: '/assets/logo-72x72.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prata&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: '#f4ede4',
            color: '#2b1d16',
            fontFamily: "'Outfit',sans-serif",
            overflowX: 'clip',
          }}
        >
          <Nav />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
