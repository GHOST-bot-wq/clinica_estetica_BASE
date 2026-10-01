import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import Media from '../components/Media';
import { Reveal, RevealLines } from '../components/Reveal';
import { slots } from '../data/media';
import { whatsappUrl } from '../lib/whatsapp';

export default function Signature() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [reduce ? 1 : 1.18, 1]);
  const floatA = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 60, reduce ? 0 : -60]);
  const floatB = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -30, reduce ? 0 : 70]);

  return (
    <section
      id="signature"
      ref={ref}
      className="on-dark section relative overflow-hidden bg-night pb-32 text-ivory md:pb-44 lg:pb-52"
    >
      <div className="container-x">
        <Reveal>
          <p className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-ivory/65">
            <span className="tabular-nums">03</span>
            <span aria-hidden="true" className="h-px w-10 bg-current opacity-40" />
            <span>Protocolo Signature</span>
          </p>
        </Reveal>

        <div className="grid items-end gap-0 lg:grid-cols-12">
          <div className="relative lg:col-span-9 lg:col-start-1 lg:row-start-1">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11]">
              <motion.div className="absolute inset-0" style={{ scale }}>
                <Media {...slots.signature} tone="f" caption="" className="h-full w-full" />
              </motion.div>

              <motion.div
                aria-hidden="true"
                style={{ y: floatA }}
                className="absolute right-[8%] top-[10%] size-24 rounded-full border border-ivory/40 md:size-32"
              />
              <motion.p
                style={{ y: floatB }}
                className="absolute bottom-[12%] left-[6%] rounded-full border border-ivory/30 bg-ink/25 px-4 py-2 text-[12px] text-ivory backdrop-blur-md"
              >
                Tecnologia + toque manual
              </motion.p>
            </div>
          </div>

          <div className="relative z-10 bg-night pt-10 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:translate-y-24 lg:p-12 lg:pb-0 lg:pr-0">
            <RevealLines
              lines={['A arte de cuidar', 'de cada detalhe.']}
              className="font-serif leading-[1.04] tracking-[-0.015em] [font-size:clamp(2.4rem,4.6vw,4.25rem)]"
            />
            <Reveal delay={0.1} className="mt-8">
              <p className="max-w-[44ch] text-[16px] leading-[1.75] text-ivory/75">
                Um protocolo que une avaliação detalhada, tecnologia e toque manual, em sessões
                planejadas do início ao fim. Cada etapa é explicada antes de acontecer, e nada é
                indicado sem avaliação prévia.
              </p>
              <ul className="mt-8 space-y-2 text-[13px] text-ivory/65">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-champagne" />
                  Plano individual, definido em avaliação
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-champagne" />
                  Acompanhamento ao longo de todo o ciclo
                </li>
              </ul>
              <div className="mt-10">
                <Button
                  href={whatsappUrl('Olá! Gostaria de conhecer o Protocolo Signature da Aura Estética.')}
                  variant="light"
                  icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
                >
                  Conhecer o protocolo
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
