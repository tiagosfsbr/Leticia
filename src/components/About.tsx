import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteImages } from '../config/siteImages';
import { siteConfig } from '../config/siteConfig';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { usePrefersReducedMotion } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = imgRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="sobre" className="relative py-24 md:py-36 overflow-hidden bg-cream-50">
      {/* Decorative */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-champagne-200/40 blur-3xl" />

      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Sobre a Harmoniza DL"
          title="Cuidado, beleza e valorização da individualidade"
          subtitle="Uma proposta voltada para beleza, cuidado e valorização da individualidade."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative">
            <div ref={imgRef} className="relative overflow-hidden rounded-sm shadow-soft">
              <img
                src={siteImages.about}
                alt="Ambiente acolhedor da clínica de estética Harmoniza DL"
                className="h-[420px] md:h-[560px] w-full object-cover scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block border border-gold-400/40 w-40 h-40 rounded-full" />
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-serif text-3xl md:text-4xl text-graphite-900">
                {siteConfig.professional}
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-4 h-px w-16 bg-gold-400" />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-lg font-light leading-relaxed text-graphite-700/90">
                A Harmoniza DL possui uma proposta voltada para beleza, cuidado e valorização da
                individualidade. Cada atendimento é pensado para realçar a sua essência de forma
                natural e sofisticada.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base font-light leading-relaxed text-graphite-700/70">
                Em um ambiente acolhedor e moderno, você encontra uma experiência exclusiva,
                conduzida com profissionalismo, segurança e atenção aos detalhes.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { value: 'Cuidado', label: 'Atendimento acolhedor' },
                  { value: 'Natural', label: 'Resultados sutis' },
                  { value: 'Exclusivo', label: 'Experiência premium' },
                ].map((item) => (
                  <div key={item.value} className="border-l border-gold-400/40 pl-4">
                    <div className="font-serif text-xl text-graphite-900">{item.value}</div>
                    <div className="text-xs text-graphite-700/60 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}