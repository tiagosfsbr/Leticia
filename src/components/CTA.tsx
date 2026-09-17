import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle } from 'lucide-react';
import { siteImages } from '../config/siteImages';
import { whatsappLink } from '../config/siteConfig';
import { usePrefersReducedMotion } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.15 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-40 overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={siteImages.cta}
          alt="Convite para agendar atendimento na Harmoniza DL"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-graphite-950/70" />
      </div>

      <div className="relative z-10 container-px mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-10 bg-gold-300/70" />
          <span className="eyebrow !text-gold-300">Harmoniza DL</span>
          <span className="h-px w-10 bg-gold-300/70" />
        </div>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-cream-50">
          Vamos cuidar de você?
        </h2>
        <p className="mt-6 text-lg font-light text-cream-100/80">
          Agende seu atendimento na Harmoniza DL.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-light mt-10 group"
        >
          <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}