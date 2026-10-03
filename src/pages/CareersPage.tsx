import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { useI18n } from "@/i18n/I18nProvider";

export default function CareersPage() {
  const { lang } = useI18n();
  return (
    <>
      <SEO
        title="Careers"
        description="Careers at EduErpee Technology Private Limited."
        path="/careers"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Careers at EduErpee Technology",
          url: "https://www.eduerpee.com/en/careers",
          description: "No open positions are listed right now. Reach out directly and we'll keep you in mind.",
          isPartOf: { "@type": "Organization", name: "EduErpee Technology Private Limited", url: "https://www.eduerpee.com" },
        }}
      />
      <PageHero eyebrow="Careers" title="Build Your Career With EduErpee" description="Open roles are not published on this site yet." />
      <section className="py-16 sm:py-24">
        <Container className="text-center">
          <p className="text-[14px] text-ink-500 dark:text-mist-200/70">
            No open positions are listed right now. Reach out directly and we'll keep you in mind.
          </p>
          <CTAButton href={`/${lang}/contact`} className="mt-6 mx-auto">
            Get in Touch
          </CTAButton>
        </Container>
      </section>
    </>
  );
}
