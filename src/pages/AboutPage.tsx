import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { About } from "@/components/sections/About";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="EduErpee Technology Private Limited — a decade-old IT partner delivering ERP, software, cloud and AI solutions for 100+ businesses across USA, EU and India."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About EduErpee Technology",
          url: "https://www.eduerpee.com/en/about",
          mainEntity: {
            "@type": "Organization",
            name: "EduErpee Technology Private Limited",
            url: "https://www.eduerpee.com",
            description:
              "A trusted IT partner delivering innovative software solutions for over a decade — ERP, software, cloud and AI for businesses across USA, EU and India.",
          },
        }}
      />
      <PageHero
        eyebrow="About EduErpee"
        title="Technology That Solves Real Business Problems"
        description="A trusted IT partner delivering innovative software solutions for over a decade."
      />
      <About />
      <WhyUsSection />
      <TeamSection />
      <FooterCTA />
    </>
  );
}
