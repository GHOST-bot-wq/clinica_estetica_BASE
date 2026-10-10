import { Star } from 'lucide-react';
import type { Review as TestimonialData } from '../data/reviews';

export default function Testimonial({ item }: { item: TestimonialData }) {
  return (
    <figure className="flex h-full w-[82vw] shrink-0 select-none flex-col justify-between border-t border-ink/20 pt-8 sm:w-[420px]">
      <div>
        <div className="mb-8 flex gap-1 text-champagne-deep" role="img" aria-label="Avaliação 5 de 5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-current" strokeWidth={0} aria-hidden="true" />
          ))}
        </div>
        <blockquote className="font-serif text-[1.7rem] leading-[1.25] md:text-[2rem]">
          “{item.quote}”
        </blockquote>
      </div>
      <figcaption className="mt-10 text-[13px] leading-relaxed">
        <span className="block font-medium">
          {item.name}
          {item.age ? `, ${item.age}` : ''}
        </span>
        <span className="block text-muted">{item.treatment}</span>
      </figcaption>
    </figure>
  );
}
