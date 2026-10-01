import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import Media from '../components/Media';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { resultFilters, results, type ResultFilter } from '../data/results';
import { ease } from '../lib/animation';
import { cn } from '../lib/cn';
import { whatsappUrl } from '../lib/whatsapp';

export default function Results() {
  const [filter, setFilter] = useState<ResultFilter>('Todos');
  const visible = results.filter((r) => filter === 'Todos' || r.category === filter);

  return (
    <section id="resultados" className="section bg-bone">
      <div className="container-x">
        <div className="mb-14 grid gap-10 lg:mb-20 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-7"
            index="05"
            label="Resultados"
            title={['Cuidado que se', 'vê no detalhe.']}
          />
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-[13px] leading-relaxed text-muted">
              Imagens conceituais e ilustrativas. Resultados reais só serão publicados com autorização
              expressa das pacientes e conforme as normas aplicáveis. Cada pessoa responde de forma
              diferente a cada protocolo.
            </p>
          </Reveal>
        </div>

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-ink/15" role="group" aria-label="Filtrar por categoria">
          {resultFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                'relative min-h-[44px] pb-3 pt-2 text-[14px] transition-colors duration-500',
                filter === f ? 'text-ink' : 'text-muted hover:text-ink',
              )}
            >
              {f}
              {filter === f && (
                <motion.span
                  layoutId="results-filter"
                  className="absolute inset-x-0 -bottom-px h-px bg-ink"
                  transition={{ duration: 0.5, ease }}
                />
              )}
            </button>
          ))}
        </div>

        <div key={filter} className="columns-2 gap-4 lg:columns-3 lg:gap-6">
          {visible.map((r, i) => (
            <motion.figure
              key={r.id}
              className="group mb-4 break-inside-avoid lg:mb-6"
              data-cursor="Ver"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: i * 0.07 }}
            >
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]">
                  <Media
                    src={r.image}
                    alt={`Imagem conceitual — ${r.title}, categoria ${r.category}`}
                    tone={r.tone}
                    caption=""
                    className={cn('w-full', r.ratio)}
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-end justify-between bg-ink/0 p-4 opacity-0 transition-all duration-700 ease-out-expo group-hover:bg-ink/25 group-hover:opacity-100"
                >
                  <span className="bg-ivory/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em]">
                    {r.category}
                  </span>
                </div>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-[13px]">
                <span className="font-serif text-[1.15rem]">{r.title}</span>
                <span className="tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center">
          <p className="font-serif text-[1.5rem] leading-snug">Quer entender o que faria sentido para você?</p>
          <Button
            href={whatsappUrl('Olá! Vi a seção de resultados da Aura Estética e gostaria de conversar sobre uma avaliação.')}
            variant="link"
            icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
          >
            Conversar com a equipe
          </Button>
        </div>
      </div>
    </section>
  );
}
