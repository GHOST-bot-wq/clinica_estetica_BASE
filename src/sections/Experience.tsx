import { useRef } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { cn } from '../lib/cn';

const steps = [
  {
    number: '01',
    title: 'Primeiro contato',
    text: 'Você fala com a equipe pelo WhatsApp, tira dúvidas e escolhe o melhor horário para a sua avaliação.',
  },
  {
    number: '02',
    title: 'Avaliação individual',
    text: 'Uma conversa sem pressa sobre a sua rotina e os seus objetivos, com análise feita pela profissional.',
  },
  {
    number: '03',
    title: 'Plano de atendimento',
    text: 'Quando houver indicação, você recebe um plano com etapas e intervalos definidos junto com você.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    text: 'Retornos combinados, ajustes quando necessários e um canal aberto para tirar dúvidas.',
  },
];

function Step({ number, title, text }: (typeof steps)[number]) {
  const ref = useRef<HTMLLIElement>(null);
  const active = useInView(ref, { margin: '-40% 0px -40% 0px' });

  return (
    <li
      ref={ref}
      className={cn(
        'relative pb-24 pl-14 transition-opacity duration-700 ease-out-expo last:pb-0 md:pl-20',
        active ? 'opacity-100' : 'opacity-45',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-3 size-[31px] -translate-x-0 rounded-full border transition-all duration-700 ease-out-expo',
          active ? 'border-ink bg-ink' : 'border-ink/30 bg-ivory',
        )}
      >
        <span
          className={cn(
            'absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-700',
            active ? 'bg-champagne' : 'bg-transparent',
          )}
        />
      </span>
      <p className="mb-3 text-[11px] tabular-nums uppercase tracking-[0.24em] text-muted">Etapa {number}</p>
      <h3 className="font-serif leading-none [font-size:clamp(2rem,3.6vw,3.25rem)]">{title}</h3>
      <p className="mt-5 max-w-[46ch] text-[16px] leading-[1.75] text-muted">{text}</p>
    </li>
  );
}

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 65%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  return (
    <section id="experiencia" className="section">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="03"
              label="Experiência"
              title={['A experiência começa', 'antes da primeira', 'sessão.']}
            />
            <Reveal delay={0.1} className="mt-10">
              <p className="max-w-[40ch] text-[16px] leading-[1.75] text-muted">
                Quatro etapas, do primeiro contato ao acompanhamento. Você sabe o que vai acontecer em
                cada uma antes de decidir seguir para a próxima. Não há promessa de resultado: há
                avaliação, explicação e escolha.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <ol ref={listRef} className="relative">
            <span aria-hidden="true" className="absolute left-[15px] top-4 bottom-4 w-px bg-ink/15" />
            <motion.span
              aria-hidden="true"
              className="absolute left-[15px] top-4 bottom-4 w-px origin-top bg-ink"
              style={{ scaleY }}
            />
            {steps.map((s) => (
              <Step key={s.number} {...s} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
