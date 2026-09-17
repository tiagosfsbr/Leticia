import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteImages } from '../config/siteImages';
import { siteConfig } from '../config/siteConfig';
import Reveal from './Reveal';
import { usePrefersReducedMotion } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

export default function Professional() {
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
        { yPercent: -10 },
        {
          yPercent: 10,
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
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden bg-graphite-950 text-cream-50"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
      </div>

      <div className="container-px mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Image */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-sm">
            <div ref={imgRef} className="scale-110">
              <img
                src={siteImages.leticia}
                alt={`${siteConfig.professional}, profissional responsável pela Harmoniza DL`}
                className="h-[480px] md:h-[640px] w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/40 to-transparent" />
          </div>
          <div className="absolute -top-6 -right-6 hidden md:block border border-gold-400/40 w-44 h-44 rounded-full" />
        </Reveal>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="eyebrow !text-gold-300">A profissional</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
              {siteConfig.professional}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-xl font-serif italic text-gold-300 leading-relaxed">
              "Cada detalhe importa quando o objetivo é valorizar a sua beleza de forma única."
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 text-base font-light leading-relaxed text-cream-100/80">
              Com uma visão moderna e acolhedora, {siteConfig.professional} conduz cada atendimento
              com atenção, segurança e um olhar atento à individualidade de cada cliente.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Cuidado', 'Profissionalismo', 'Segurança', 'Naturalidade'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold-400/30 px-5 py-2 text-xs uppercase tracking-widest text-gold-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}