import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ease } from '../lib/animation';
import { cn } from '../lib/cn';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Entrada discreta: opacidade + deslocamento curto. Usada com moderação. */
export function Reveal({ children, delay = 0, y = 16, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const lineVariants: Variants = {
  hidden: { y: '110%' },
  show: (custom: { i: number; delay: number }) => ({
    y: '0%',
    transition: { duration: 1.1, ease, delay: custom.delay + custom.i * 0.09 },
  }),
};

interface RevealLinesProps {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  /** Anima ao montar (hero) em vez de ao entrar na viewport. */
  immediate?: boolean;
}

/** Títulos revelados linha a linha por máscara — o efeito "editorial". */
export function RevealLines({
  lines,
  as = 'h2',
  className,
  delay = 0,
  immediate = false,
}: RevealLinesProps) {
  const Tag = as;
  return (
    <Tag className={className} aria-label={lines.join(' ')}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]" aria-hidden="true">
          <motion.span
            className="block"
            variants={lineVariants}
            custom={{ i, delay }}
            initial="hidden"
            animate={immediate ? 'show' : undefined}
            whileInView={immediate ? undefined : 'show'}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Imagem que se revela por máscara enquanto entra na viewport. */
export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  return (
    <motion.div
      className={cn('relative', className)}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.4, ease, delay }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 1.8, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
