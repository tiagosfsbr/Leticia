import { MapPin, Phone, MessageCircle, Instagram } from 'lucide-react';
import { siteConfig, whatsappLink } from '../config/siteConfig';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="relative bg-graphite-950 text-cream-100">
      <div className="container-px mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-widest uppercase text-cream-50">
                Harmoniza
              </span>
              <span className="text-[10px] tracking-widest3 uppercase text-gold-400 mt-1">
                DL
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light text-cream-100/70">
              Estética, cuidado e naturalidade em uma experiência pensada para você.
            </p>
            <p className="mt-4 text-sm font-light text-cream-100/60">
              {siteConfig.professional}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest3 text-gold-400 mb-6">Navegação</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm font-light text-cream-100/80 hover:text-cream-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest3 text-gold-400 mb-6">Contato</h3>
            <ul className="space-y-4 text-sm font-light text-cream-100/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold-400" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="shrink-0 text-gold-400" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="shrink-0 text-gold-400" />
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream-100/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-cream-100/50">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs font-light text-cream-100/50">
            {siteConfig.professional} — {siteConfig.city}
          </p>
        </div>
      </div>
    </footer>
  );
}