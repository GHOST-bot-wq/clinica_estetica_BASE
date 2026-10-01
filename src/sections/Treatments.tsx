import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Media from '../components/Media';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TreatmentRow from '../components/TreatmentRow';
import { categories, treatments } from '../data/treatments';
import { ease } from '../lib/animation';

export default function Treatments() {
  const [activeId, setActiveId] = useState(treatments[0].id);
  const current = treatments.find((t) => t.id === activeId) ?? treatments[0];
  const currentCategory = categories.find((c) => c.name === current.category) ?? categories[0];

  return (
    <section id="tratamentos" className="section bg-bone">
      <div className="container-x">
        <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-7"
            index="02"
            label="Tratamentos"
            title={['Tratamentos', 'pensados para você.']}
          />
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-[40ch] text-[16px] leading-[1.75] text-muted">
              Nenhum tratamento é indicado antes da avaliação. Aqui está o que podemos combinar, de
              acordo com o que você precisa.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {categories.map((cat) => (
              <div key={cat.name} className="border-t border-ink/20 pb-10 pt-6 lg:pb-14">
                <div className="mb-3 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.24em]">
                  <span className="tabular-nums text-muted">{cat.number}</span>
                  <h3>{cat.name}</h3>
                </div>
                <ul>
                  {treatments
                    .filter((t) => t.category === cat.name)
                    .map((t) => (
                      <TreatmentRow
                        key={t.id}
                        treatment={t}
                        categoryNumber={cat.number}
                        active={t.id === activeId}
                        onActivate={() => setActiveId(t.id)}
                      />
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="hidden lg:col-span-5 lg:block" aria-label="Detalhe do tratamento selecionado">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={current.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease }}
                  >
                    <Media
                      src={current.image}
                      alt={`Imagem editorial do tratamento ${current.title}`}
                      tone={current.tone}
                      caption=""
                      className="h-full w-full"
                    />
                  </motion.div>
                </AnimatePresence>
                <span className="absolute left-5 top-5 z-10 bg-ivory/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] backdrop-blur-sm">
                  {currentCategory.number} · {current.category}
                </span>
              </div>

              <div className="mt-6 min-h-[7rem]" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <p className="font-serif text-[1.6rem] leading-none">{current.title}</p>
                    <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-muted">
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
