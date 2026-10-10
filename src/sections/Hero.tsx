import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import Media from '../components/Media';
import { RevealLines } from '../components/Reveal';
import { slots } from '../data/media';
import { ease } from '../lib/animation';
import { whatsappUrl } from '../lib/whatsapp';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden">
      <div className="container-x grid min-h-[100svh] items-center gap-12 pb-16 pt-28 lg:grid-cols-12 lg:gap-10 lg:pb-12 lg:pt-24">
        <div className="lg:col-span-6">
          <motion.p
            className="mb-7 text-[11px] uppercase tracking-[0.26em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            Estética avançada · Goiânia, GO
          </motion.p>

          <RevealLines
            as="h1"
            immediate
            delay={0.25}
            lines={['Beleza natural.', 'Cuidado em', 'cada detalhe.']}
            className="font-serif leading-[1] tracking-[-0.02em] [font-size:clamp(2.5rem,9.5vw,3.75rem)] lg:[font-size:clamp(3.5rem,6.2vw,6.25rem)]"
          />

          <motion.p
            className="mt-8 max-w-[42ch] text-[16px] leading-[1.7] text-muted sm:text-[17px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.75 }}
          >
            Avaliação individual e protocolos personalizados para cuidar da sua pele e valorizar os
            seus traços, sem exageros.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
          >
            <Button
              href={whatsappUrl()}
              size="lg"
              magnetic
              className="w-full sm:w-auto"
              icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
            >
              Agendar avaliação
            </Button>
            <Button href="#tratamentos" variant="link" className="self-center sm:self-auto">
              Conhecer tratamentos
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 text-center text-[12.5px] text-muted sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease, delay: 1.1 }}
          >
            Atendimento com hora marcada · Avaliação sem compromisso
          </motion.p>
        </div>

        <div className="relative mx-auto w-full max-w-[480px] lg:col-span-6 lg:max-w-none lg:pl-10">
          <div
            aria-hidden="true"
            className="absolute left-3 top-3 h-full w-full rounded-t-[999px] border border-champagne/70 sm:left-5 sm:top-5 lg:left-[3.75rem] lg:w-[calc(100%-2.5rem)]"
          />
          <motion.div
            className="relative"
            style={{ y: imageY }}
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.4, ease, delay: 0.2 }}
          >
            <Media {...slots.hero} tone="a" shape="arch" priority className="aspect-[4/5] w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
