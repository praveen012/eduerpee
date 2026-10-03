import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { industries } from "@/data/content";

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="EduErpee builds technology for education, healthcare, retail, manufacturing, real estate, logistics and more."
        path="/industries"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Industries We Serve",
          url: "https://www.eduerpee.com/en/industries",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: industries.map((ind, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: ind.title,
            })),
          },
        }}
      />
      <PageHero eyebrow="Industries" title="We've Solved Problems In Your Industry" />
      <IndustriesSection />
      <FooterCTA />
    </>
  );
}
