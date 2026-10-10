import type { MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { cn } from '../lib/cn';

type Variant = 'primary' | 'outline' | 'light' | 'outlineLight' | 'link';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  external?: boolean;
  magnetic?: boolean;
  className?: string;
  onClick?: () => void;
}

const styles: Record<Exclude<Variant, 'link'>, { base: string; fill: string }> = {
  primary: { base: 'bg-ink text-ivory hover:text-ink', fill: 'bg-nude' },
  outline: { base: 'border border-ink/25 text-ink hover:text-ivory', fill: 'bg-ink' },
  light: { base: 'bg-ivory text-ink', fill: 'bg-champagne' },
  outlineLight: { base: 'border border-ivory/30 text-ivory hover:text-ink', fill: 'bg-ivory' },
};

const sizes = {
  sm: 'min-h-[44px] px-6 text-[12.5px]',
  md: 'min-h-[52px] px-8 text-[13px]',
  lg: 'min-h-[60px] px-10 text-[14px]',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  external,
  magnetic = false,
  className,
  onClick,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const isExternal = external ?? /^https?:/.test(href);
  const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  if (variant === 'link') {
    return (
      <a
        href={href}
        onClick={onClick}
        {...linkProps}
        className={cn(
          "link-underline relative inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] after:absolute after:-inset-x-2 after:-inset-y-3 after:content-['']",
          className,
        )}
      >
        {children}
        {icon}
      </a>
    );
  }

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!magnetic || reduce) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.14);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.2);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const s = styles[variant];

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={magnetic ? { x, y } : undefined}
      {...linkProps}
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium tracking-[0.06em] transition-colors duration-500 ease-out-expo',
        sizes[size],
        s.base,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 translate-y-full rounded-[inherit] transition-transform duration-500 ease-out-expo group-hover:translate-y-0',
          s.fill,
        )}
      />
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {icon}
      </span>
    </motion.a>
  );
}
