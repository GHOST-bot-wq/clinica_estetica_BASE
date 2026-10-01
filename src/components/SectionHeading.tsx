import { Reveal, RevealLines } from './Reveal';
import { cn } from '../lib/cn';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string[];
  tone?: 'light' | 'dark';
  size?: 'md' | 'lg';
  className?: string;
}

const sizeClass = {
  md: '[font-size:clamp(2.25rem,4.4vw,4rem)]',
  lg: '[font-size:clamp(2.5rem,5.6vw,5.5rem)]',
};

export default function SectionHeading({
  index,
  label,
  title,
  tone = 'light',
  size = 'md',
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal>
        <p
          className={cn(
            'mb-8 flex items-center gap-4 text-[11px] uppercase tracking-[0.24em]',
            tone === 'dark' ? 'text-ivory/65' : 'text-muted',
          )}
        >
          <span className="tabular-nums">{index}</span>
          <span aria-hidden="true" className="h-px w-10 bg-current opacity-40" />
          <span>{label}</span>
        </p>
      </Reveal>
      <RevealLines
        lines={title}
        className={cn('font-serif leading-[1.04] tracking-[-0.015em]', sizeClass[size])}
      />
    </div>
  );
}
