import { motion } from 'framer-motion';
import Media from '../components/Media';
import { ImageReveal, Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { slots } from '../data/media';

const principles = [
  { title: 'Precisão', text: 'Cada decisão parte de uma avaliação, não de uma tendência.' },
  { title: 'Cuidado', text: 'Tempo de escuta e orientação clara em todas as etapas.' },
  { title: 'Naturalidade', text: 'Valorizar o que já é seu, sem exageros.' },
];

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <ImageReveal>
            <Media {...slots.about} tone="c" parallax={30} className="aspect-[4/5] w-full" />
          </ImageReveal>
          <p className="mt-4 font-serif text-[14px] italic text-muted">
            Sala de atendimento, Aura Estética. Imagem ilustrativa.
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <SectionHeading
            index="07"
            label="Sobre a clínica"
            title={['Precisão, cuidado', 'e naturalidade.']}
          />

          <Reveal delay={0.1} className="mt-10">
            <p className="max-w-[46ch] text-[17px] leading-[1.75] text-muted">
              A Aura nasceu de uma convicção simples: estética bem feita não chama atenção para si, e
              sim para quem está diante do espelho. Por isso trabalhamos com poucos atendimentos por
              dia, avaliação detalhada e protocolos que respeitam o seu tempo e os seus traços.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <ul className="border-t border-ink/15">
              {principles.map((p) => (
                <li key={p.title} className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr]">
                  <span className="font-serif text-[1.35rem] leading-none">{p.title}</span>
                  <span className="text-[14px] text-muted">{p.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-12">
            <svg viewBox="0 0 220 60" className="h-14 w-56 text-ink" aria-hidden="true" fill="none">
              <motion.path
                d="M4 40 C 30 6, 52 6, 44 36 S 30 52, 60 22 S 90 46, 112 26 S 140 14, 150 34 S 176 44, 214 18"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
              />
            </svg>
            <p className="mt-2 text-[13px]">
              <span className="font-medium">Helena Duarte</span>
              <span className="text-muted"> — fundadora e direção técnica (perfil fictício)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
