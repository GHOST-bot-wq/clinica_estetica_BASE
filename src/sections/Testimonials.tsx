import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Testimonial from '../components/Testimonial';
import { Reveal } from '../components/Reveal';
import { testimonials } from '../data/testimonials';
import { ease } from '../lib/animation';

export default function Testimonials() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!wrapRef.current || !trackRef.current) return;
      const next = Math.max(0, trackRef.current.scrollWidth - wrapRef.current.clientWidth);
      setMax(next);
      if (x.get() < -next) x.set(-next);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [x]);

  const progress = useTransform(x, [0, -(max || 1)], [0.18, 1]);

  const go = (dir: 1 | -1) => {
    const step = (wrapRef.current?.clientWidth ?? 420) * 0.7;
    const target = Math.min(0, Math.max(-max, x.get() - dir * step));
    animate(x, target, { duration: 0.8, ease });
  };

  return (
    <section className="section overflow-hidden" aria-label="Depoimentos de pacientes (conteúdo demonstrativo)">
      <div className="container-x">
        <div className="mb-14 flex flex-col justify-between gap-10 lg:mb-20 lg:flex-row lg:items-end">
          <SectionHeading
            index="06"
            label="Depoimentos"
            title={['Quem vive a experiência,', 'sente a diferença.']}
          />
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Depoimento anterior"
                className="grid size-12 place-items-center rounded-full border border-ink/25 transition-colors duration-500 hover:bg-ink hover:text-ivory"
              >
                <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo depoimento"
                className="grid size-12 place-items-center rounded-full border border-ink/25 transition-colors duration-500 hover:bg-ink hover:text-ivory"
              >
                <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
          </Reveal>
        </div>


        <div ref={wrapRef} className="overflow-hidden" data-cursor="Arraste">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -max, right: 0 }}
            dragElastic={0.08}
            style={{ x, touchAction: 'pan-y' }}
            className="flex cursor-grab gap-8 active:cursor-grabbing lg:gap-12"
          >
            {testimonials.map((t) => (
              <Testimonial key={t.id} item={t} />
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <div className="relative h-px flex-1 bg-ink/15" aria-hidden="true">
            <motion.div className="absolute inset-0 origin-left bg-ink" style={{ scaleX: progress }} />
          </div>
          <p className="text-[11px] text-muted">Depoimentos fictícios, apenas para demonstração.</p>
        </div>
      </div>
    </section>
  );
}
