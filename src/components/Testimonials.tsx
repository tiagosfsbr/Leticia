import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Andréia Ana Benito',
    text: 'O Atendimento é muito acolhedor e respeitoso, ótimas condições de pagamento.',
  },
  {
    name: 'Íara Luzia Miranda dos Santos',
    text: 'Sensacional confio de olhos fechados a Dra Letícia é excelente no que faz',
  },
  {
    name: 'Sara Oshima',
    text: 'Letícia, super profissional e me passou bastante segurança.',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.testimonial-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-cream-100 overflow-hidden"
    >
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-champagne-200/40 blur-3xl" />

      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que nossas clientes dizem"
          subtitle="Experiências reais de quem já viveu o cuidado da Harmoniza DL."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="testimonial-card relative flex flex-col rounded-sm bg-cream-50 p-8 md:p-10 shadow-card border border-champagne-200/50"
            >
              <Quote className="text-gold-400/40 mb-6" size={36} />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="flex-1 text-base font-light leading-relaxed text-graphite-700/90">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-champagne-200/60">
                <div className="font-serif text-lg text-graphite-900">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-gold-600 mt-1">
                  Cliente Harmoniza DL
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}