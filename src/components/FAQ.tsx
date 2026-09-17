import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'Como funciona o atendimento?',
    a: 'O atendimento é conduzido com acolhimento e atenção. Cada cliente é recebido de forma individual, com foco em entender suas necessidades e expectativas.',
  },
  {
    q: 'Como faço para agendar?',
    a: 'Você pode agendar pelo WhatsApp, pelo telefone ou pelo Instagram. Basta entrar em contato e nossa equipe irá auxiliá-la no agendamento.',
  },
  {
    q: 'Onde fica a Harmoniza DL?',
    a: 'Estamos localizados na R. Blumenau, 2003 - Sala 10 - América, Joinville - SC, 89218-035.',
  },
  {
    q: 'Quais tratamentos estão disponíveis?',
    a: 'Oferecemos uma seleção de procedimentos estéticos. Consulte a disponibilidade de tratamentos diretamente conosco para saber mais.',
  },
  {
    q: 'Preciso realizar uma avaliação antes do procedimento?',
    a: 'Sim, a avaliação é fundamental para entender suas necessidades e indicar o melhor caminho, sempre com segurança e cuidado.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-cream-50 overflow-hidden">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          subtitle="Tire suas dúvidas sobre o atendimento na Harmoniza DL."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-sm border transition-colors duration-500 ${
                    isOpen
                      ? 'border-gold-400/60 bg-cream-100'
                      : 'border-champagne-200/60 bg-cream-50'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg md:text-xl text-graphite-900">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/50"
                    >
                      <Plus size={16} className="text-gold-600" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                      >
                        <p className="px-6 pb-6 text-sm font-light leading-relaxed text-graphite-700/80">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}