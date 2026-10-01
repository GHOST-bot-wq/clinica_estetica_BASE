import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { cn } from '../lib/cn';

const items = [
  { word: 'Tecnologia', text: 'Equipamentos atuais, operados por quem conhece cada um deles.' },
  { word: 'Personalização', text: 'Nenhum protocolo é copiado. Cada plano nasce da sua avaliação.' },
  { word: 'Naturalidade', text: 'O objetivo é valorizar o que já é seu, sem exageros.' },
  { word: 'Acompanhamento', text: 'Retornos e ajustes para que o plano acompanhe você.' },
];

function Row({ word, text, first }: { word: string; text: string; first: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const active = useInView(ref, { margin: '-35% 0px -35% 0px' });

  return (
    <li
      ref={ref}
      className={cn(
        'group relative grid items-end gap-4 border-t border-ink/20 py-6 transition-opacity duration-700 ease-out-expo md:grid-cols-12 lg:py-8',
        active ? 'opacity-100' : 'opacity-40',
      )}
    >
      {!first && (
        <span
          aria-hidden="true"
          className="absolute -top-3 left-0 grid size-6 place-items-center bg-bone text-ink"
        >
          <Plus className="size-4" strokeWidth={1.25} />
        </span>
      )}
      <h3
        className="font-serif leading-[0.95] tracking-[-0.02em] transition-transform duration-700 ease-out-expo group-hover:translate-x-3 md:col-span-8 [font-size:clamp(2.6rem,8.4vw,8rem)]"
      >
        {word}
      </h3>
      <p className="max-w-[34ch] text-[15px] leading-relaxed text-muted md:col-span-4 md:pb-3">{text}</p>
    </li>
  );
}

export default function Differentials() {
  return (
    <section className="section bg-bone">
      <div className="container-x">
        <SectionHeading
          className="mb-20 lg:mb-28"
          index="08"
          label="Diferenciais"
          title={['O que sustenta', 'cada protocolo.']}
        />
        <ul>
          {items.map((it, i) => (
            <Row key={it.word} word={it.word} text={it.text} first={i === 0} />
          ))}
        </ul>
      </div>
    </section>
  );
}
