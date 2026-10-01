import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import { Reveal, RevealLines } from '../components/Reveal';
import { useParallax } from '../hooks/useParallax';
import { whatsappUrl } from '../lib/whatsapp';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const y = useParallax(ref, 60);

  return (
    <section
      id="agendar"
      ref={ref}
      className="on-dark section relative overflow-hidden bg-ink text-ivory"
    >
      <motion.div
        aria-hidden="true"
        style={{ y }}
        className="pointer-events-none absolute -right-[18%] top-1/2 aspect-square w-[min(120vw,980px)] -translate-y-1/2"
      >
        <div className="absolute inset-0 animate-breathe rounded-full border border-champagne/25" />
        <div className="absolute inset-[14%] animate-breathe rounded-full border border-champagne/20 [animation-delay:-4s]" />
        <div className="absolute inset-[28%] animate-breathe rounded-full border border-champagne/15 [animation-delay:-8s]" />
        <div
          className="absolute inset-[34%] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(205,186,150,0.22) 0%, rgba(205,186,150,0) 68%)' }}
        />
      </motion.div>

      <div className="container-x relative z-10 py-8 lg:py-16">
        <Reveal>
          <p className="mb-10 text-[11px] uppercase tracking-[0.24em] text-ivory/65">Agende sua avaliação</p>
        </Reveal>

        <RevealLines
          lines={['Seu próximo capítulo', 'começa com você.']}
          className="font-serif leading-[1] tracking-[-0.02em] [font-size:clamp(2.9rem,7.6vw,7.25rem)]"
        />

        <Reveal delay={0.1} className="mt-10">
          <p className="max-w-[44ch] text-[18px] leading-[1.7] text-ivory/75">
            Agende uma avaliação e descubra uma experiência de estética pensada para você.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              href={whatsappUrl()}
              variant="light"
              size="lg"
              magnetic
              icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
            >
              Agendar avaliação
            </Button>
            <Button
              href={whatsappUrl('Olá! Gostaria de conversar com a equipe da Aura Estética pelo WhatsApp.')}
              variant="outlineLight"
              size="lg"
              icon={<MessageCircle className="size-4" strokeWidth={1.5} aria-hidden="true" />}
            >
              Falar pelo WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-[13px] text-ivory/65">Atendimento personalizado • Sem compromisso</p>
        </Reveal>
      </div>
    </section>
  );
}
