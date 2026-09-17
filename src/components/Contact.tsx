import { MapPin, Phone, MessageCircle, Instagram, Clock } from 'lucide-react';
import { siteConfig, whatsappLink } from '../config/siteConfig';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 md:py-36 bg-cream-50 overflow-hidden">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Contato"
          title="Onde estamos"
          subtitle="Venha nos visitar e viva uma experiência de cuidado e beleza."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Info */}
          <Reveal className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/40">
                  <MapPin className="text-gold-500" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-graphite-900">Endereço</h3>
                  <p className="mt-2 text-sm font-light text-graphite-700/80">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/40">
                  <Phone className="text-gold-500" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-graphite-900">Telefone / WhatsApp</h3>
                  <p className="mt-2 text-sm font-light text-graphite-700/80">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/40">
                  <Clock className="text-gold-500" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-graphite-900">Atendimento</h3>
                  <p className="mt-2 text-sm font-light text-graphite-700/80">
                    Consulte os horários de atendimento pelo WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.15} className="relative">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-sm shadow-soft border border-champagne-200/60">
              <iframe
                title="Mapa — Harmoniza DL"
                src={siteConfig.mapsEmbed}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-graphite-900/90 px-5 py-3 text-xs uppercase tracking-widest text-cream-50 backdrop-blur transition-colors hover:bg-gold-500 hover:text-graphite-950"
              >
                <MapPin size={14} />
                Abrir no Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}