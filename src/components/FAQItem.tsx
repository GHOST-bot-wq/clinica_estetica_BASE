import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ease } from '../lib/animation';
import { cn } from '../lib/cn';

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

export default function FAQItem({ id, question, answer, open, onToggle }: FAQItemProps) {
  return (
    <div className="border-t border-ink/15 last:border-b">
      <h3>
        <button
          type="button"
          id={`faq-btn-${id}`}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-serif text-[1.45rem] leading-snug md:text-[1.85rem]">{question}</span>
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:bg-ink group-hover:text-ivory"
          >
            <Plus
              className={cn('size-4 transition-transform duration-500 ease-out-expo', open && 'rotate-45')}
              strokeWidth={1.5}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-btn-${id}`}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="max-w-[58ch] pb-8 pr-14 text-[15px] leading-[1.75] text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
