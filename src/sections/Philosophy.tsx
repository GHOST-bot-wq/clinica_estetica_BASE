import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Media from '../components/Media';
import { ImageReveal, Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { slots } from '../data/media';

const pillars = [
  { title: 'Avaliação personalizada', text: 'Cada plano começa por ouvir você.' },
  { title: 'Tecnologia', text: 'Equipamentos atuais, indicados com critério.' },
  { title: 'Protocolos individualizados', text: 'Nada de pacote igual para todas.' },
];

export default function Philosophy() {
  return (
    <section id="filosofia" className="section overflow-hidden">
      <div className="container-x grid items-start gap-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading
            index="01"
            label="Mais do que estética"
            size="lg"
            title={['Resultados que', 'começam na forma', 'como você se sente.']}
          />

          <Reveal delay={0.1} className="mt-10">
            <p className="max-w-[46ch] text-[17px] leading-[1.75] text-muted">
              A Aura reúne avaliação individual, tecnologia atual e protocolos pensados em torno de
              quem você é. O objetivo não é mudar o seu rosto ou o seu corpo, e sim cuidar bem do que
              já é seu, com calma e com critério.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <ul className="border-t border-ink/15">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="flex flex-col justify-between gap-1 border-b border-ink/15 py-5 sm:flex-row sm:items-baseline"
                >
                  <span className="font-serif text-[1.5rem] leading-none">{p.title}</span>
                  <span className="text-[14px] text-muted">{p.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <Button
              href="#experiencia"
              variant="link"
              icon={<ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
            >
              Ver como funciona a experiência
            </Button>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <ImageReveal>
            <Media {...slots.philosophyMain} tone="b" parallax={28} className="aspect-[4/5] w-full" />
          </ImageReveal>
          <div className="absolute -bottom-12 -left-3 hidden w-[36%] md:block lg:-left-16">
            <ImageReveal delay={0.25}>
              <Media
                {...slots.philosophyDetail}
                tone="d"
                shape="arch"
                caption=""
                className="aspect-[3/4] w-full border-[6px] border-ivory"
              />
            </ImageReveal>
          </div>
          <p className="mt-4 text-right font-serif text-[14px] italic text-muted">
            Luz natural, silêncio e tempo.
          </p>
        </div>
      </div>
    </section>
  );
}
