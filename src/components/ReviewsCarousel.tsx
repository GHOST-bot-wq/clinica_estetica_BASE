import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Testimonial from './Testimonial';
import { ease } from '../lib/animation';
import type { Review } from '../data/reviews';

export default function ReviewsCarousel({ items }: { items: Review[] }) {
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
  }, [x, items.length]);

  const progress = useTransform(x, [0, -(max || 1)], [0.18, 1]);
  const go = (dir: 1 | -1) => {
    const step = (wrapRef.current?.clientWidth ?? 420) * 0.7;
    animate(x, Math.min(0, Math.max(-max, x.get() - dir * step)), { duration: 0.8, ease });
  };

  return (
    <div className="mt-20 lg:mt-28">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Avaliações de pacientes</p>
        <div className="flex gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Avaliação anterior" className="grid size-12 place-items-center rounded-full border border-ink/25 transition-colors duration-500 hover:bg-ink hover:text-ivory">
            <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Próxima avaliação" className="grid size-12 place-items-center rounded-full border border-ink/25 transition-colors duration-500 hover:bg-ink hover:text-ivory">
            <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div ref={wrapRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -max, right: 0 }}
          dragElastic={0.08}
          style={{ x, touchAction: 'pan-y' }}
          className="flex cursor-grab gap-8 active:cursor-grabbing lg:gap-12"
        >
          {items.map((t) => (
            <Testimonial key={t.id} item={t} />
          ))}
        </motion.div>
      </div>
      <div className="relative mt-10 h-px bg-ink/15" aria-hidden="true">
        <motion.div className="absolute inset-0 origin-left bg-ink" style={{ scaleX: progress }} />
      </div>
    </div>
  );
}
