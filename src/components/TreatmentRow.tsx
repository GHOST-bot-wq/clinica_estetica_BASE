import { AnimatePresence, motion } from 'framer-motion';
import Media from './Media';
import { ease } from '../lib/animation';
import { cn } from '../lib/cn';
import type { Treatment } from '../data/treatments';

interface TreatmentRowProps {
  treatment: Treatment;
  categoryNumber: string;
  active: boolean;
  onActivate: () => void;
}

/**
 * Linha editorial de tratamento.
 * Desktop: o hover/foco troca a imagem e a descrição no painel lateral.
 * Mobile: vira acordeão, com descrição e imagem abrindo abaixo do título.
 */
export default function TreatmentRow({ treatment, categoryNumber, active, onActivate }: TreatmentRowProps) {
  return (
    <li className="border-b border-ink/10 last:border-b-0" onMouseEnter={onActivate}>
      <button
        type="button"
        onClick={onActivate}
        onFocus={onActivate}
        aria-expanded={active}
        data-cursor="Ver"
        className="flex w-full items-baseline gap-4 py-4 text-left"
      >
        <span
          className={cn(
            'w-8 shrink-0 text-[11px] tabular-nums tracking-[0.2em] text-champagne-deep transition-opacity duration-500',
            active ? 'opacity-100' : 'opacity-0',
          )}
        >
          {categoryNumber}
        </span>
        <span
          className={cn(
            'font-serif leading-[1.1] transition-all duration-700 ease-out-expo [font-size:clamp(1.9rem,3.4vw,2.9rem)]',
            active ? 'translate-x-3 text-ink' : 'translate-x-0 text-ink/55',
          )}
        >
          {treatment.title}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="detail"
            className="overflow-hidden lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="pb-8 pl-12">
              <p className="max-w-[46ch] text-[15px] leading-relaxed text-muted">{treatment.description}</p>
              <Media
                src={treatment.image}
                alt={`Imagem editorial do tratamento ${treatment.title}`}
                tone={treatment.tone}
                caption=""
                className="mt-5 aspect-[4/3] w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
