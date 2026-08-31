import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <Container className="relative">
        {icon && (
          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-orange/15 text-brand-orange">
            {icon}
          </span>
        )}
        <span className="eyebrow text-brand-orange">{eyebrow}</span>
        <h1 className="mt-3 max-w-2xl font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist-200/75">{description}</p>
        )}
      </Container>
    </section>
  );
}
