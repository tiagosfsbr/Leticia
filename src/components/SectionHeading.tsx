import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-14 md:mb-20`}>
      <Reveal>
        <div className="flex items-center gap-4 mb-5">
          <span className="h-px w-8 bg-gold-400" />
          <span className={`eyebrow ${light ? '!text-gold-300' : ''}`}>{eyebrow}</span>
          {align === 'center' && <span className="h-px w-8 bg-gold-400" />}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`font-serif text-4xl sm:text-5xl md:text-6xl leading-tight ${
            light ? 'text-cream-50' : 'text-graphite-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={`mt-6 max-w-2xl text-base sm:text-lg font-light ${
              light ? 'text-cream-100/80' : 'text-graphite-700/80'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}