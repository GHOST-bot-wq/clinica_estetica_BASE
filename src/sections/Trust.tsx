import ReviewsCarousel from '../components/ReviewsCarousel';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { reviews } from '../data/reviews';

const commitments = [
  {
    number: '01',
    title: 'Avaliação antes de qualquer indicação',
    text: 'Nenhum tratamento é sugerido sem conversar com você e entender o seu momento.',
  },
  {
    number: '02',
    title: 'Explicações claras, sem pressa',
    text: 'Você sabe o que será feito, como funciona e o que esperar antes de decidir.',
  },
  {
    number: '03',
    title: 'Expectativas realistas',
    text: 'Cada pessoa responde de um jeito. Por isso, não fazemos promessas de resultado.',
  },
];

export default function Trust() {
  return (
    <section id="confianca" className="section bg-bone">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <SectionHeading
            className="lg:col-span-5"
            index="06"
            label="Confiança"
            title={['Confiança se constrói', 'com transparência.']}
          />
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ol className="border-t border-ink/20">
              {commitments.map((c) => (
                <li
                  key={c.number}
                  className="grid gap-2 border-b border-ink/20 py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
                >
                  <span className="text-[11px] tabular-nums tracking-[0.2em] text-muted">{c.number}</span>
                  <div>
                    <h3 className="font-serif text-[1.6rem] leading-[1.15]">{c.title}</h3>
                    <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.7] text-muted">{c.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {reviews.length > 0 && <ReviewsCarousel items={reviews} />}
      </div>
    </section>
  );
}
