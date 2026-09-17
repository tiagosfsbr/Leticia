import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteImages } from '../config/siteImages';
import { usePrefersReducedMotion } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

export default function Cinematic() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const img = imgRef.current;
    const text = textRef.current;
    if (!section || !img || !text) return;

    const ctx = gsap.context(() => {
      // Slow zoom on image
      gsap.fromTo(
        img,
        { scale: 1.1 },
        {
          scale: 1.3,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Text reveal
      gsap.fromTo(
        text.querySelectorAll('.cinematic-line'),
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={siteImages.cinematic}
          alt="Momento de beleza e cuidado na Harmoniza DL"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-graphite-950/60" />
      </div>

      <div
        ref={textRef}
        className="relative z-10 text-center container-px overflow-hidden"
      >
        <div className="overflow-hidden">
          <p className="cinematic-line font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 leading-tight">
            Sua beleza.
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="cinematic-line font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 leading-tight">
            Sua essência.
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="cinematic-line font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-300 leading-tight">
            Seu momento.
          </p>
        </div>
      </div>
    </section>
  );
}