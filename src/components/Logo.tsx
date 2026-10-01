import { cn } from '../lib/cn';

export default function Logo({ tone = 'light', className }: { tone?: 'light' | 'dark'; className?: string }) {
  return (
    <a
      href="#inicio"
      aria-label="Aura Estética — voltar ao início"
      className={cn('inline-block leading-none', tone === 'dark' ? 'text-ivory' : 'text-ink', className)}
    >
      <span className="block font-serif text-[1.75rem] tracking-[0.32em]">AURA</span>
      <span className="mt-1.5 block text-[9px] uppercase tracking-[0.52em]">Estética</span>
    </a>
  );
}
