import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="EduErpee builds technology for education, healthcare, retail, manufacturing, real estate, logistics and more."
        path="/industries"
      />
      <PageHero eyebrow="Industries" title="We've Solved Problems In Your Industry" />
      <IndustriesSection />
      <FooterCTA />
    </>
  );
}
