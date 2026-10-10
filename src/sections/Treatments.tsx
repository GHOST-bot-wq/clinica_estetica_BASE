import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TreatmentCard from '../components/TreatmentCard';
import { categories, treatments, type CategoryName } from '../data/treatments';
import { cn } from '../lib/cn';

const intro: Record<CategoryName, string> = {
  Facial: 'Cuidados para a pele e para o rosto, sempre indicados após avaliação.',
  Corporal: 'Protocolos para o corpo, definidos de acordo com o seu objetivo.',
  'Bem-estar': 'Pausas pensadas para desacelerar e cuidar de você por inteiro.',
};

export default function Treatments() {
  const [active, setActive] = useState<CategoryName>('Facial');
  const items = treatments.filter((t) => t.category === active);

  return (
    <section id="tratamentos" className="section bg-bone">
      <div className="container-x">
        <div className="mb-14 grid gap-10 lg:mb-16 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-7"
            index="02"
            label="Tratamentos"
            title={['Tratamentos', 'pensados para você.']}
          />
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-[40ch] text-[16px] leading-[1.75] text-muted">
              Nenhum tratamento é indicado antes da avaliação. Conheça o que podemos combinar, de
              acordo com o que você precisa.
            </p>
          </Reveal>
        </div>

        <div
          className="mb-4 flex flex-wrap gap-x-8 gap-y-2 border-b border-ink/15"
          role="group"
          aria-label="Categorias de tratamento"
        >
          {categories.map((c) => (
            <button
              key={c.name}
              type="button"
              aria-pressed={active === c.name}
              onClick={() => setActive(c.name)}
              className={cn(
                'relative min-h-[48px] pb-3 pt-2 text-[14px] tracking-[0.02em] transition-colors duration-500',
                active === c.name ? 'text-ink' : 'text-muted hover:text-ink',
              )}
            >
              <span className="mr-2 text-[11px] tabular-nums text-muted">{c.number}</span>
              {c.name}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-x-0 -bottom-px h-px bg-ink transition-transform duration-500 ease-out-expo',
                  active === c.name ? 'scale-x-100' : 'scale-x-0',
                )}
              />
            </button>
          ))}
        </div>
        <p className="mb-12 max-w-[56ch] text-[14px] text-muted lg:mb-16" aria-live="polite">
          {intro[active]}
        </p>

        <ul key={active} className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {items.map((t, i) => (
            <TreatmentCard key={t.id} treatment={t} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
