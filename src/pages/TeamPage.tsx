import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { TeamCard } from "@/components/cards/TeamCard";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { team } from "@/data/content";
import { useLocalizedContent } from "@/data/useLocalizedContent";

export default function TeamPage() {
  const { team: localizedTeam } = useLocalizedContent();
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the leadership team at EduErpee Technology Private Limited."
        path="/team"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Our Team",
          url: "https://www.eduerpee.com/en/team",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: team.map((m, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Person",
                name: m.name,
                jobTitle: m.role,
                description: m.bio,
                ...(m.photoUrl ? { image: `https://www.eduerpee.com${m.photoUrl}` } : {}),
                worksFor: { "@type": "Organization", name: "EduErpee Technology Private Limited" },
              },
            })),
          },
        }}
      />
      <PageHero eyebrow="Our Leadership" title="The People Behind Your Success" />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {localizedTeam.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
