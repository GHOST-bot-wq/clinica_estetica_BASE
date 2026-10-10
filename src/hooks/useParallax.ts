import type { RefObject } from 'react';
import { useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';

/**
 * Deslocamento vertical sutil (em px) conforme o elemento atravessa a viewport.
 * Respeita prefers-reduced-motion (distância zero).
 */
export function useParallax(ref: RefObject<HTMLElement>, distance = 40): MotionValue<number> {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const small = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
  const d = reduce ? 0 : small ? distance * 0.5 : distance;
  return useTransform(scrollYProgress, [0, 1], [-d, d]);
}
