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
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);

  return (
    <section id="inicio" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <div className="container-x grid min-h-[100svh] items-center gap-14 pb-24 pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-28">
        <motion.div className="lg:col-span-7" style={{ y: textY }}>
          <motion.p
            className="mb-8 text-[11px] uppercase tracking-[0.26em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
          >
            Estética avançada • Goiânia
          </motion.p>

          <RevealLines
            as="h1"
            immediate
            delay={0.3}
            lines={['Sua beleza,', 'elevada à sua', 'melhor versão.']}
            className="font-serif leading-[0.98] tracking-[-0.02em] [font-size:clamp(3rem,7.4vw,7.25rem)]"
          />

          <motion.p
            className="mt-10 max-w-[44ch] text-[17px] leading-[1.7] text-muted md:text-[18px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.85 }}
          >
            Protocolos personalizados para realçar seus traços, cuidar da sua pele e transformar sua
            relação com o espelho.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1 }}
          >
            <Button
              href={whatsappUrl()}
              size="lg"
              magnetic
              icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
            >
              Agendar avaliação
            </Button>
            <Button href="#tratamentos" variant="link">
              Conhecer tratamentos
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-t-[999px] border border-champagne/45 lg:-inset-7"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-t-[999px] border border-champagne/25 lg:-inset-14"
          />
          <motion.div
            className="relative"
            style={{ y: imageY }}
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.5, ease, delay: 0.25 }}
          >
            <Media
              {...slots.hero}
              tone="a"
              shape="arch"
              parallax={36}
              priority
              className="aspect-[4/5] w-full"
            />
          </motion.div>
          <motion.p
            className="absolute -bottom-2 left-0 hidden bg-ivory px-4 py-3 text-[12px] leading-snug sm:block lg:-left-10 lg:bottom-14"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.3 }}
          >
            <span className="block font-medium">Avaliação individual</span>
            <span className="block text-muted">Sem pressa, sem compromisso</span>
          </motion.p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-6 hidden items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-muted md:flex md:left-10 lg:left-16"
      >
        <span className="relative block h-12 w-px overflow-hidden bg-ink/15">
          <span className="absolute inset-0 animate-scroll-line bg-ink" />
        </span>
        Role para explorar
      </div>
    </section>
  );
}
