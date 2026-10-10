import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { cn } from '../lib/cn';
import type { MediaTone } from '../data/treatments';

const tones: Record<MediaTone, string> = {
  a: 'radial-gradient(120% 90% at 30% 18%, #F6EBDF 0%, #E4CEBB 46%, #C9A892 100%)',
  b: 'radial-gradient(100% 100% at 72% 10%, #F7EFE5 0%, #EBDCCB 50%, #D3B9A3 100%)',
  c: 'linear-gradient(160deg, #F0E7DB 0%, #DDC8B3 58%, #BFA088 100%)',
  d: 'radial-gradient(90% 80% at 22% 82%, #F5ECE1 0%, #E4D1BF 55%, #CDB29B 100%)',
  e: 'linear-gradient(200deg, #F8F2E9 0%, #E9DBCC 55%, #CFB8A2 100%)',
  f: 'radial-gradient(110% 90% at 50% 0%, #F0E4D6 0%, #DAC1AC 55%, #B89A83 100%)',
};

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")";

interface MediaProps {
  src?: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  tone?: MediaTone;
  /** Texto pequeno do placeholder. Use '' para ocultar. */
  caption?: string;
  className?: string;
  /** Distância (px) do parallax interno. 0 desativa. */
  parallax?: number;
  shape?: 'rect' | 'arch';
  priority?: boolean;
}

/**
 * Receptor de imagem do site. Sem `src`, mostra um placeholder tonal editorial;
 * com `src`, renderiza a fotografia com lazy loading e srcset.
 */
export default function Media({
  src,
  srcSet,
  sizes,
  alt,
  tone = 'a',
  caption,
  className,
  parallax = 0,
  shape = 'rect',
  priority = false,
}: MediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(src) && !failed;
  const y = useParallax(ref, parallax);
  const layerClass = parallax > 0 ? 'absolute inset-x-0 -inset-y-[8%]' : 'absolute inset-0';

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden bg-nude/40', shape === 'arch' && 'rounded-t-[999px]', className)}
    >
      <motion.div className={layerClass} style={parallax > 0 ? { y } : undefined}>
        {showPhoto ? (
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover [filter:saturate(0.92)_contrast(1.02)]"
          />
        ) : (
          <div role="img" aria-label={alt} className="relative h-full w-full" style={{ background: tones[tone] }}>
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[40%] aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[40%] aspect-square w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.22] mix-blend-multiply"
              style={{ backgroundImage: grain }}
            />
          </div>
        )}
      </motion.div>
      {showPhoto && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#D8BFA6]/10 mix-blend-multiply" />
      )}
      {!showPhoto && caption !== '' && (
        <span className="pointer-events-none absolute bottom-3 left-4 right-4 font-serif text-[13px] italic text-ink/55">
          {caption ?? 'Espaço para fotografia editorial'}
        </span>
      )}
    </div>
  );
}
