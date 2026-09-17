import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { siteConfig } from '../config/siteConfig';

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20, letterSpacing: '0.6em' },
      { opacity: 1, y: 0, letterSpacing: '0.35em', duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
        '-=0.4'
      )
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' }, '+=0.3')
      .to(lineRef.current, { opacity: 0, duration: 0.3 }, '-=0.2')
      .to(rootRef.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, '-=0.1');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-graphite-950"
    >
      <div className="flex flex-col items-center gap-6">
        <div
          ref={textRef}
          className="font-serif text-2xl sm:text-4xl text-cream-50 tracking-[0.35em] uppercase"
        >
          {siteConfig.name}
        </div>
        <div ref={lineRef} className="h-px w-40 origin-left bg-gold-400" />
        <div className="text-[10px] uppercase tracking-widest3 text-gold-400/70">
          Estética &amp; Beleza
        </div>
      </div>
    </div>
  );
}