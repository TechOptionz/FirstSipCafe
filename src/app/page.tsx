import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import Tiles from '@/components/home/Tiles';
import Picks from '@/components/home/Picks';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import ReviewsMarquee from '@/components/home/ReviewsMarquee';
import VisitCta from '@/components/home/VisitCta';

export default function HomePage() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <Marquee />
      <Tiles />
      <Picks />
      <Features />
      <Stats />
      <ReviewsMarquee />
      <VisitCta />
    </section>
  );
}
