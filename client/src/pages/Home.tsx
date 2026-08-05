import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Jubilee from '@/components/Jubilee';
import StatsBar from '@/components/StatsBar';
import About from '@/components/About';
import Founders from '@/components/Founders';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page - The Suryojasvi Group Landing Page
 * 
 * Design Philosophy: Dynamic Energy & Innovation
 * - Asymmetric layouts with diagonal and curved transitions
 * - Orange-yellow gradient color scheme throughout
 * - Layered depth through shadows and overlapping elements
 * - Smooth scroll animations and interactive hover effects
 * - Typography: Poppins for headlines, Inter for body text
 * 
 * Sections:
 * 1. Navigation - Fixed header with smooth transitions
 * 2. Hero - Bold introduction with tagline and CTA
 * 3. Founders - Leadership and vision

 * 5. Culture - Company values and workplace
 * 6. Contact - Get in touch form and information
 * 7. Footer - Links and social media
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Jubilee />
      <StatsBar />
      <About />
      <Founders />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}
