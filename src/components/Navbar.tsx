import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { whatsappLink } from '../config/siteConfig';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/80 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="container-px mx-auto flex items-center justify-between">
          <a
            href="#inicio"
            className="group flex flex-col leading-none"
            onClick={() => setOpen(false)}
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-widest uppercase transition-colors duration-500 ${
                scrolled ? 'text-graphite-900' : 'text-cream-50'
              }`}
            >
              Harmoniza
            </span>
            <span
              className={`text-[10px] tracking-widest3 uppercase transition-colors duration-500 ${
                scrolled ? 'text-gold-600' : 'text-gold-300'
              }`}
            >
              DL
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`link-underline text-[13px] tracking-widest uppercase transition-colors duration-500 ${
                    scrolled ? 'text-graphite-800' : 'text-cream-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex btn-primary !py-3 !px-6 text-xs ${
                scrolled ? '' : '!bg-cream-50 !text-graphite-900 hover:!bg-gold-400'
              }`}
            >
              Agendar avaliação
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? 'text-graphite-900' : 'text-cream-50'
              }`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-graphite-950 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl text-cream-50 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + links.length * 0.08, duration: 0.5 }}
                className="mt-6"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  Agendar avaliação
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}