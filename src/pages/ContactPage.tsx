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
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact EduErpee Technology",
          url: "https://www.eduerpee.com/en/contact",
          mainEntity: {
            "@type": "Organization",
            name: "EduErpee Technology Private Limited",
            url: "https://www.eduerpee.com",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: "+91-91980-42867",
              email: "support@eduerpee.com",
              areaServed: ["IN", "US", "EU", "AE"],
            },
          },
        }}
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
