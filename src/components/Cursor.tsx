import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Anel que acompanha o mouse (apenas desktop com ponteiro preciso).
 * Cresce sobre links/botões e mostra um rótulo quando o elemento tem data-cursor="...".
 */
export default function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 34, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 34, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setEnabled(mq.matches);
    if (!mq.matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const withLabel = target?.closest<HTMLElement>('[data-cursor]');
      if (withLabel) {
        setLabel(withLabel.dataset.cursor ?? null);
        setHover(true);
        return;
      }
      setLabel(null);
      setHover(Boolean(target?.closest('a, button')));
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  const size = label ? 84 : hover ? 46 : 18;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-[10px] uppercase tracking-[0.18em] text-black"
        animate={{
          width: size,
          height: size,
          backgroundColor: label ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
