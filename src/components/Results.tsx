import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteImages } from '../config/siteImages';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

const results = [
  { image: siteImages.result1, label: 'Resultado 1' },
  { image: siteImages.result2, label: 'Resultado 2' },
  { image: siteImages.result3, label: 'Resultado 3' },
  { image: siteImages.result4, label: 'Resultado 4' },
];

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.result-item').forEach((item, i) => {
        const img = item.querySelector('img');
        gsap.fromTo(
          item,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: (i % 2) * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1.4,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="resultados" ref={sectionRef} className="relative py-24 md:py-36 bg-cream-50 overflow-hidden">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Resultados"
          title="Resultados"
          subtitle="Uma galeria de resultados que refletem cuidado, naturalidade e sofisticação."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {results.map((r, i) => (
            <div
              key={r.label}
              className={`result-item group relative overflow-hidden rounded-sm shadow-card ${
                i % 2 === 1 ? 'sm:translate-y-12' : ''
              }`}
            >
              <div className="relative h-[380px] md:h-[460px] overflow-hidden">
                <img
                  src={r.image}
                  alt={`${r.label} — Harmoniza DL`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-xs uppercase tracking-widest text-cream-50">
                    {r.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}