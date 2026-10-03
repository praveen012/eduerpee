import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { BlueprintField } from "@/components/common/BlueprintField";

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
      <BlueprintField />
      <Container className="relative">
        {icon && (
          <span
            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md"
            style={{ background: "color-mix(in srgb, var(--color-copper) 15%, transparent)", color: "var(--color-copper)" }}
          >
            {icon}
          </span>
        )}
        <span className="inline-flex items-center gap-2 font-body text-[13px]" style={{ color: "var(--color-graphite)" }}>
          <span className="h-[5px] w-[5px] rounded-full" style={{ background: "var(--color-copper)" }} />
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-2xl font-display text-3xl sm:text-5xl font-semibold tracking-tight" style={{ color: "var(--color-vellum)" }}>
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed" style={{ color: "var(--color-graphite)" }}>{description}</p>
        )}
      </Container>
    </section>
  );
}
