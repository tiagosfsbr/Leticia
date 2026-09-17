import { Instagram } from 'lucide-react';
import { siteImages } from '../config/siteImages';
import { siteConfig } from '../config/siteConfig';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const images = [
  siteImages.instagram1,
  siteImages.instagram2,
  siteImages.instagram3,
  siteImages.instagram4,
  siteImages.instagram5,
  siteImages.instagram6,
];

export default function InstagramSection() {
  return (
    <section className="relative py-24 md:py-36 bg-cream-100 overflow-hidden">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Instagram"
          title="Acompanhe a Harmoniza DL"
          subtitle="Siga-nos e acompanhe novidades, bastidores e muito mais."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1}>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-sm aspect-square"
              >
                <img
                  src={src}
                  alt={`Harmoniza DL no Instagram — imagem ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-graphite-950/0 group-hover:bg-graphite-950/40 transition-colors duration-500 flex items-center justify-center">
                  <Instagram
                    className="text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    size={28}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}