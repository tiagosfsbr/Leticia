import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteImages } from '../config/siteImages';
import { whatsappLink } from '../config/siteConfig';
import { usePrefersReducedMotion } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!section || !image || !content) return;

    const ctx = gsap.context(() => {
      // Image scales up slightly and stays visible
      gsap.to(image, {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content moves up and fades out
      gsap.to(content, {
        yPercent: -60,
        opacity: 0,
        filter: 'blur(8px)',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '70% top',
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[600px] overflow-hidden"
    >
      {/* Background image */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <img
          src={siteImages.hero}
          alt="Ambiente sofisticado de estética e beleza da Harmoniza DL"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/60 via-graphite-950/30 to-graphite-950/70" />
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-[8%] hidden md:block">
          <Sparkles className="text-gold-300/60 animate-pulse-soft" size={22} />
        </div>
        <div className="absolute bottom-1/3 right-[10%] hidden md:block">
          <Sparkles className="text-gold-300/40 animate-pulse-soft" size={16} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-3xl h-[60%] border border-gold-300/20 rounded-full" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center container-px will-change-transform"
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-gold-300/70" />
          <span className="eyebrow !text-gold-300">Harmoniza DL</span>
          <span className="h-px w-10 bg-gold-300/70" />
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 leading-[1.05] max-w-4xl">
          Beleza que valoriza
          <br />
          <span className="italic text-gold-300">a sua essência.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base sm:text-lg text-cream-100/90 font-light">
          Estética, cuidado e naturalidade em uma experiência pensada para você.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-light group">
            Agendar avaliação
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#tratamentos" className="btn-outline !border-cream-50/50 !text-cream-50 hover:!border-gold-300 hover:!text-gold-300">
            Conhecer tratamentos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest3 text-cream-100/70">Role</span>
        <div className="h-12 w-px bg-gradient-to-b from-cream-100/70 to-transparent" />
      </div>
    </section>
  );
}