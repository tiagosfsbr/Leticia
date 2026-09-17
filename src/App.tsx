import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Professional from './components/Professional';
import Treatments from './components/Treatments';
import Cinematic from './components/Cinematic';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Instagram from './components/Instagram';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Refresh ScrollTrigger after loading completes
    if (!loading) {
      const t = setTimeout(() => ScrollTrigger.refresh(), 100);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-cream-50">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Professional />
        <Treatments />
        <Cinematic />
        <Results />
        <Testimonials />
        <SocialProof />
        <CTA />
        <Contact />
        <Instagram />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}