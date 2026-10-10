import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import FAQItem from '../components/FAQItem';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { faq } from '../data/faq';
import { whatsappUrl } from '../lib/whatsapp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faq[0].id);

  return (
    <section id="faq" className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading index="07" label="FAQ" title={['Perguntas', 'frequentes.']} />
            <Reveal delay={0.1} className="mt-10">
              <p className="mb-6 max-w-[34ch] text-[15px] leading-relaxed text-muted">
                Não encontrou o que procurava? A equipe responde pelo WhatsApp.
              </p>
              <Button
                href={whatsappUrl('Olá! Tenho uma dúvida sobre a Aura Estética.')}
                variant="link"
                icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
              >
                Tirar uma dúvida
              </Button>
            </Reveal>
          </div>
        </div>

        <Reveal className="lg:col-span-7 lg:col-start-6">
          {faq.map((f) => (
            <FAQItem
              key={f.id}
              id={f.id}
              question={f.question}
              answer={f.answer}
              open={openId === f.id}
              onToggle={() => setOpenId((cur) => (cur === f.id ? null : f.id))}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
