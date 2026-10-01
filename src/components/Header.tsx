import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import { navigation } from '../data/navigation';
import { ease } from '../lib/animation';
import { cn } from '../lib/cn';
import { WHATSAPP_DISPLAY, whatsappUrl } from '../lib/whatsapp';

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ease-out-expo',
          open
            ? 'border-transparent bg-transparent py-5'
            : scrolled
              ? 'border-ink/[0.07] bg-ivory/75 py-3 backdrop-blur-xl'
              : 'border-transparent bg-transparent py-6',
        )}
      >
        <div className="container-x flex items-center justify-between">
          <Logo />

          <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="link-grow text-[13px] tracking-[0.04em]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={whatsappUrl()}
              size="sm"
              magnetic
              icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
              className="hidden lg:inline-flex"
            >
              Agendar avaliação
            </Button>

            <button
              type="button"
              className="relative grid size-11 place-items-center lg:hidden"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="relative block h-3 w-7" aria-hidden="true">
                <span
                  className={cn(
                    'absolute left-0 h-px w-full bg-ink transition-all duration-500 ease-out-expo',
                    open ? 'top-[6px] rotate-45' : 'top-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-px w-full bg-ink transition-all duration-500 ease-out-expo',
                    open ? 'top-[6px] -rotate-45' : 'top-[11px]',
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-0 z-40 flex flex-col bg-ivory px-6 pb-10 pt-28 lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease }}
          >
            <nav aria-label="Menu mobile">
              <ul>
                {navigation.map((item, i) => (
                  <li key={item.href} className="overflow-hidden border-b border-ink/10">
                    <motion.a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4 font-serif text-[2.5rem] leading-none"
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '100%' }}
                      transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.06 }}
                    >
                      <span className="w-6 font-sans text-[11px] tabular-nums tracking-[0.2em] text-muted">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="mt-auto space-y-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
            >
              <Button
                href={whatsappUrl()}
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
                icon={<ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
              >
                Agendar avaliação
              </Button>
              <p className="text-[13px] text-muted">
                WhatsApp {WHATSAPP_DISPLAY} · Goiânia, GO
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
