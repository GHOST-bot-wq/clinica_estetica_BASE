import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import Media from './Media';
import { ease } from '../lib/animation';
import { whatsappUrl } from '../lib/whatsapp';
import type { Treatment } from '../data/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  index: number;
}

export default function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  const message = `Olá! Gostaria de saber mais sobre ${treatment.title} na Aura Estética.`;
  return (
    <motion.li
      className="group flex flex-col lg:[&:nth-child(3n+2)]:mt-14"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: index * 0.07 }}
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.035]">
          <Media
            {...treatment.image}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
            alt={`Foto ilustrativa: ${treatment.title}`}
            tone={treatment.tone}
            caption=""
            className="aspect-[4/3] w-full sm:aspect-[4/5]"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col border-b border-ink/15 pb-7 pt-6">
        <h3 className="font-serif text-[1.85rem] leading-[1.1] md:text-[2rem]">{treatment.title}</h3>
        <p className="mt-3 max-w-[40ch] flex-1 text-[15px] leading-[1.7] text-muted">{treatment.description}</p>
        <div className="mt-6">
          <Button
            href={whatsappUrl(message)}
            variant="link"
            icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
          >
            Agendar avaliação
          </Button>
        </div>
      </div>
    </motion.li>
  );
}
