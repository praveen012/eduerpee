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
      />
      <PageHero eyebrow="Technology Ecosystem" title="Industry-Proven Technology, Selected For Longevity" />
      <TechStackSection />
      <FooterCTA />
    </>
  );
}
