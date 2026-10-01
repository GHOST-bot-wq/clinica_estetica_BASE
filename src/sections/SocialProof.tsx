import CountUp from '../components/CountUp';
import { Reveal } from '../components/Reveal';

const stats = [
  { to: 2500, prefix: '+', label: 'pacientes atendidas' },
  { to: 8, suffix: '+', label: 'anos de experiência' },
  { to: 4.9, decimals: 1, suffix: '/5', label: 'avaliação média' },
  { to: 98, suffix: '%', label: 'recomendariam' },
];

export default function SocialProof() {
  return (
    <section aria-label="Indicadores da clínica" className="border-y border-ink/10 bg-ivory">
      <div className="container-x py-14 lg:py-16">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse border-t border-ink/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
              >
                <dt className="mt-3 text-[13px] text-muted">{s.label}</dt>
                <dd className="font-serif leading-none [font-size:clamp(2.75rem,5vw,4.5rem)]">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <p className="mt-10 text-[11px] text-muted">
          Indicadores ilustrativos, criados para um projeto-conceito.
        </p>
      </div>
    </section>
  );
}
