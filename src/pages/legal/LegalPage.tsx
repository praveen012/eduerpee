import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  path,
  children,
}: {
  title: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <>
      <SEO title={title} description={`${title} for EduErpee Technology Private Limited.`} path={path} />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-mist-100">{title}</h1>
          <p className="mt-2 text-[12.5px] text-ink-500 dark:text-mist-200/50">Last updated: 30 August 2026</p>
          <div className="mt-8 prose-legal space-y-5 text-[14px] leading-relaxed text-ink-700 dark:text-mist-200/80">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
