import Media from '../components/Media';
import { ImageReveal, Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { slots } from '../data/media';
import { specialist } from '../data/specialist';

const principles = [
  { title: 'Precisão', text: 'Cada decisão parte de uma avaliação, não de uma tendência.' },
  { title: 'Cuidado', text: 'Tempo de escuta e orientação clara em todas as etapas.' },
  { title: 'Naturalidade', text: 'Valorizar o que já é seu, sem exageros.' },
];

export default function About() {
  const hasProfile = Boolean(specialist.name);
  const image = specialist.photo ? { ...specialist.photo, alt: `Retrato de ${specialist.name}` } : slots.about;

  return (
    <section id="sobre" className="section">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <ImageReveal>
            <Media {...image} tone="c" parallax={14} className="aspect-[4/5] w-full" />
          </ImageReveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <SectionHeading
            index="05"
            label="Sobre a clínica"
            title={['Precisão, cuidado', 'e naturalidade.']}
          />

          <Reveal delay={0.1} className="mt-10">
            <p className="max-w-[46ch] text-[17px] leading-[1.75] text-muted">
              A Aura nasceu de uma convicção simples: estética bem feita não chama atenção para si, e
              sim para quem está diante do espelho. Por isso o atendimento é individual, com avaliação
              detalhada e protocolos que respeitam o seu tempo e os seus traços.
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

          {hasProfile && (
            <Reveal delay={0.2} className="mt-12">
              <p className="font-serif text-[1.6rem] leading-none">{specialist.name}</p>
              {specialist.role && <p className="mt-2 text-[13px] text-muted">{specialist.role}</p>}
              {specialist.bio && <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-muted">{specialist.bio}</p>}
              {specialist.credentials && specialist.credentials.length > 0 && (
                <ul className="mt-4 space-y-1 text-[13px] text-muted">
                  {specialist.credentials.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}
              {specialist.registration && <p className="mt-3 text-[12px] text-muted">{specialist.registration}</p>}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
