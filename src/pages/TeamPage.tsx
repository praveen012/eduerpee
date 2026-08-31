import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { TeamCard } from "@/components/cards/TeamCard";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { team } from "@/data/content";

export default function TeamPage() {
  return (
    <>
      <SEO title="Our Team" description="Meet the leadership team at EduErpee Technology Private Limited." path="/team" />
      <PageHero eyebrow="Our Leadership" title="The People Behind Your Success" />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
