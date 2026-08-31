import { Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-navy-900 p-6">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-brand-orange text-brand-orange" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-ink-700 dark:text-mist-200/85">
        "{testimonial.quote}"
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between border-t border-ink-900/8 dark:border-white/10 pt-4">
        <div>
          <div className="text-[13.5px] font-medium text-ink-900 dark:text-mist-100">
            {testimonial.company}
          </div>
          <div className="text-[12px] text-ink-500 dark:text-mist-200/60">{testimonial.industry}</div>
        </div>
        <span className="font-mono text-[10.5px] uppercase tracking-wide text-brand-orange">
          {testimonial.solution}
        </span>
      </figcaption>
    </figure>
  );
}
