import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { services } from "@/data/content";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="IT Services"
        description="EduErpee Technology: web & mobile development, UI/UX, AI development with Claude & OpenAI, cloud & DevOps (Azure), digital marketing and IT consulting."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "IT Services",
          url: "https://www.eduerpee.com/en/services",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.description,
                url: `https://www.eduerpee.com/en${s.href}`,
                provider: { "@type": "Organization", name: "EduErpee Technology Private Limited" },
              },
            })),
          },
        }}
      />
      <PageHero
        eyebrow="Services"
        title="Every Digital Service Under One Roof"
        description="From a simple website to a full enterprise ERP — one team handles every part of the digital presence, operations and growth."
      />
      <ServicesSection />
      <FooterCTA />
    </>
  );
}
