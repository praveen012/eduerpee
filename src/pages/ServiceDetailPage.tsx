import { useParams, Navigate, Link } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Icon } from "@/utils/icon";
import { services } from "@/data/content";
import { useLocalizedContent } from "@/data/useLocalizedContent";
import { useI18n } from "@/i18n/I18nProvider";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const { services: localizedServices } = useLocalizedContent();
  const service = services.find((s) => s.href === `/services/${slug}`);
  const localizedService = localizedServices.find((s) => s.href === `/services/${slug}`);

  if (!service || !localizedService) return <Navigate to={`/${lang}/404`} replace />;

  return (
    <>
      <SEO
        title={localizedService.title}
        description={localizedService.description}
        path={service.href}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.title,
          provider: { "@type": "Organization", name: "EduErpee Technology Private Limited" },
          description: service.description,
        }}
      />
      <PageHero
        eyebrow="Service"
        title={localizedService.title}
        description={localizedService.description}
        icon={<Icon name={service.icon} className="h-6 w-6" />}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-[14px] leading-relaxed text-ink-500 dark:text-mist-200/70">
              EduErpee's {localizedService.title.toLowerCase()} team works as an extension of the business —
              transparent pricing, clear communication and delivery timelines that are actually
              kept.
            </p>
          </div>
          <aside className="rounded-lg border border-ink-900/10 dark:border-white/10 p-6 h-fit">
            <h3 className="font-display text-[15px] font-semibold text-ink-900 dark:text-mist-100">
              Get a quote
            </h3>
            <CTAButton href={`/${lang}/contact`} className="mt-4 w-full justify-center">
              Talk to an Expert
            </CTAButton>
            <Link
              to={`/${lang}/services`}
              className="mt-3 block text-center text-[12.5px] text-ink-500 dark:text-mist-200/60 hover:text-brand-orange"
            >
              ← Back to all services
            </Link>
          </aside>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
