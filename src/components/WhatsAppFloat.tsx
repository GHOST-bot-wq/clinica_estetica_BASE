import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp';

export default function WhatsAppFloat() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 500));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-5 z-40 grid size-[52px] place-items-center rounded-full bg-ink text-ivory shadow-[0_10px_30px_-14px_rgba(31,27,24,0.55)] transition-colors duration-500 hover:bg-champagne-deep"
          style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
        >
          <MessageCircle className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
