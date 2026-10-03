import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { solutions } from "@/data/content";
import { useLocalizedContent } from "@/data/useLocalizedContent";

export default function SolutionsPage() {
  const { solutions: localizedSolutions } = useLocalizedContent();
  return (
    <>
      <SEO
        title="ERP & Software Solutions"
        description="Ready-to-deploy software from EduErpee: school, institute, HRMS, CMS, inventory, library, transport, pathology lab, hospital & clinic systems, plus custom ERP/CRM."
        path="/solutions"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "ERP & Software Solutions",
          url: "https://www.eduerpee.com/en/solutions",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: solutions.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "SoftwareApplication",
                name: s.title,
                description: s.description,
                url: `https://www.eduerpee.com/en${s.href}`,
                applicationCategory: "BusinessApplication",
              },
            })),
          },
        }}
      />
      <PageHero
        eyebrow="Solutions"
        title="Technology Solutions Built Around Your Business"
        description="Ready-to-deploy products, each fully customisable to match how a business actually operates."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {localizedSolutions.map((s) => (
              <SolutionCard key={s.id} solution={s} />
            ))}
          </div>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
