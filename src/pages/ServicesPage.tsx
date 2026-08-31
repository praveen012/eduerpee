import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="IT Services"
        description="End-to-end IT services from EduErpee Technology: web and mobile development, UI/UX design, AI & chatbot development, cloud & DevOps, and digital marketing."
        path="/services"
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
