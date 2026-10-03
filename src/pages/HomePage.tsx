import { SEO } from "@/components/common/SEO";
import { Hero } from "@/components/sections/Hero";
import { ClientShowcase3D } from "@/components/sections/ClientShowcase3D";
import { About } from "@/components/sections/About";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { GlobalPresenceSection } from "@/components/sections/GlobalPresenceSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EduErpee Technology Private Limited",
    url: "https://www.eduerpee.com",
    logo: "https://www.eduerpee.com/logo.png",
    email: "support@eduerpee.com",
    telephone: "+91-91980-42867",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "519/216A, KATRA, Mubarak Pur",
        addressLocality: "Azamgarh",
        addressRegion: "Uttar Pradesh",
        postalCode: "276404",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Lower Ground Floor, Near Shiva Smart City-2, Talabpur Dadri",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "203207",
        addressCountry: "IN",
      },
    ],
    // On-site support near Azamgarh/Greater Noida; remote delivery for every other area listed —
    // see src/data/locations.ts and the Locations page (/locations) for the honest breakdown.
    areaServed: [
      "Azamgarh",
      "Varanasi",
      "Gorakhpur",
      "Lucknow",
      "Jaunpur",
      "Mau",
      "Delhi NCR",
      "United States",
      "European Union",
      "United Arab Emirates",
      "Gulf Cooperation Council (GCC)",
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61589485346019",
      "https://instagram.com/eduerpeetechnology",
      "https://www.linkedin.com/company/eduerpee-technology",
      "https://www.youtube.com/@EduerpeeTechnology",
    ],
  };

  return (
    <>
      <SEO
        title="AI Development, Azure Cloud & IT Staff Augmentation"
        description="EduErpee Technology Private Limited delivers AI development, Microsoft Azure cloud solutions, custom ERP systems and IT staff augmentation for schools, healthcare, retail and enterprise businesses across USA, EU and India."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <ClientShowcase3D />
      <About />
      <SolutionsSection />
      <ServicesSection />
      <TechStackSection />
      <IndustriesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamSection />
      <GlobalPresenceSection />
      <FooterCTA />
    </>
  );
}
