import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import Disciplines from '@/components/Disciplines';
import Marquee from '@/components/Marquee';
import SocialFeed from '@/components/SocialFeed';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Disciplines />
        <Marquee />
        <SocialFeed />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
