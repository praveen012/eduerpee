import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TeamCard } from "@/components/cards/TeamCard";
import { useLocalizedContent } from "@/data/useLocalizedContent";
import { useI18n } from "@/i18n/I18nProvider";

export function TeamSection() {
  const { t } = useI18n();
  const { team } = useLocalizedContent();
  return (
    <section id="team" className="py-20 sm:py-28 bg-mist-100/60 dark:bg-navy-900/30">
      <Container>
        <SectionHeader eyebrow={t.team.eyebrow} heading={t.team.heading} />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </Container>
    </section>
  );
}
