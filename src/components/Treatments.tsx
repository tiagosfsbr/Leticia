import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { treatments } from '../data/treatments';
import { whatsappLink } from '../config/siteConfig';
import { usePrefersReducedMotion, useIsMobile } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

export default function Treatments() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (reduced || isMobile) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getAmount = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
      };
    }, section);

    return () => ctx.revert();
  }, [reduced, isMobile]);

  return (
    <section
      id="tratamentos"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream-100 py-24 md:py-32"
    >
      <div className="container-px mx-auto mb-12 md:mb-16">
        <div className="flex items-center gap-4 mb-5">
          <span className="h-px w-8 bg-gold-400" />
          <span className="eyebrow">Tratamentos</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-graphite-900">
          Tratamentos
        </h2>
        <p className="mt-6 max-w-2xl text-base sm:text-lg font-light text-graphite-700/80">
          Uma seleção de procedimentos estéticos pensados para realçar a sua beleza de forma
          natural e sofisticada.
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 md:gap-10 px-6 sm:px-10 lg:px-16 xl:px-24 will-change-transform"
      >
        {treatments.map((t) => (
          <article
            key={t.id}
            className="group relative w-[80vw] sm:w-[420px] md:w-[440px] shrink-0 overflow-hidden rounded-sm bg-graphite-900 shadow-card"
          >
            <div className="relative h-[420px] md:h-[500px] overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/20 to-transparent" />
              <div className="absolute top-6 left-6 font-serif text-5xl text-gold-300/60">
                {t.id}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="font-serif text-2xl md:text-3xl text-cream-50">{t.name}</h3>
              <p className="mt-3 text-sm font-light text-cream-100/80 max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                {t.description}
              </p>
              <a
                href={whatsappLink(`Olá! Tenho interesse no tratamento de ${t.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-300 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Agendar
                <ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}

        {/* End card */}
        <div className="flex w-[70vw] sm:w-[380px] shrink-0 items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-graphite-900">
              E muito mais
            </p>
            <p className="mt-4 text-sm font-light text-graphite-700/70">
              Consulte a disponibilidade de tratamentos.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Agendar avaliação
            </a>
          </div>
        </div>
      </div>

      {/* Mobile hint */}
      {isMobile && (
        <div className="mt-8 text-center text-xs uppercase tracking-widest text-graphite-700/50">
          Deslize para ver mais
        </div>
      )}
    </section>
  );
}