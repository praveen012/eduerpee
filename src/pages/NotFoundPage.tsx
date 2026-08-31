import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { ModuleMap } from "@/components/common/ModuleMap";
import { useI18n } from "@/i18n/I18nProvider";

export default function NotFoundPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[70vh] items-center bg-navy-950">
        <Container className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-brand-orange">404</span>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-white">
              {t.notFound.heading}
            </h1>
            <CTAButton href={`/${lang}/`} className="mt-7">
              {t.notFound.cta}
            </CTAButton>
          </div>
          <ModuleMap className="w-full h-auto max-w-sm mx-auto opacity-70" />
        </Container>
      </section>
    </>
  );
}
