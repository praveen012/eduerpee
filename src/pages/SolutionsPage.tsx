import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { solutions } from "@/data/content";

export default function SolutionsPage() {
  return (
    <>
      <SEO
        title="ERP & Software Solutions"
        description="Explore EduErpee's ready-to-deploy ERP solutions: school management, inventory, library, transportation, clinic software and custom cloud ERP."
        path="/solutions"
      />
      <PageHero
        eyebrow="Solutions"
        title="Technology Solutions Built Around Your Business"
        description="Ready-to-deploy products, each fully customisable to match how a business actually operates."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <SolutionCard key={s.id} solution={s} />
            ))}
          </div>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
