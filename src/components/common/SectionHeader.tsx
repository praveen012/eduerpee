import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  heading: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight ${
          light ? "text-white" : "text-ink-900 dark:text-mist-100"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 text-[15px] leading-relaxed ${light ? "text-mist-200/80" : "text-ink-500 dark:text-mist-200/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
