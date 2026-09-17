import { HeartHandshake, ShieldCheck, Lock } from 'lucide-react';
import Reveal from './Reveal';

const items = [
  {
    icon: HeartHandshake,
    title: 'Atendimento acolhedor',
    text: 'Um cuidado respeitoso e humano em cada detalhe.',
  },
  {
    icon: ShieldCheck,
    title: 'Profissionalismo',
    text: 'Conduzido com técnica, atenção e dedicação.',
  },
  {
    icon: Lock,
    title: 'Segurança',
    text: 'Confiança e tranquilidade em cada atendimento.',
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-16 md:py-24 bg-cream-50">
      <div className="container-px mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/40">
                <item.icon className="text-gold-500" size={26} />
              </div>
              <h3 className="font-serif text-xl text-graphite-900">{item.title}</h3>
              <p className="mt-3 text-sm font-light text-graphite-700/70 max-w-xs mx-auto">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}