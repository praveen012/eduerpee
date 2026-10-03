import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function TechnologiesPage() {
  return (
    <>
      <SEO
        title="Technology Stack"
        description="The frontend, backend, database, cloud and AI technologies EduErpee Technology builds with."
        path="/technologies"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Technology Stack",
          url: "https://www.eduerpee.com/en/technologies",
          description: "The frontend, backend, database, cloud and AI technologies EduErpee Technology builds with.",
          isPartOf: { "@type": "Organization", name: "EduErpee Technology Private Limited", url: "https://www.eduerpee.com" },
        }}
      />
      <PageHero eyebrow="Technology Ecosystem" title="Industry-Proven Technology, Selected For Longevity" />
      <TechStackSection />
      <FooterCTA />
    </>
  );
}
