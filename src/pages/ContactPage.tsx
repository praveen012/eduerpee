import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { useI18n } from "@/i18n/I18nProvider";

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with EduErpee Technology Private Limited — book a free demo or request a consultation. We respond within 24 hours."
        path="/contact"
      />
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.heading} description={t.contact.sub} />
      <section className="py-16 sm:py-24">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
