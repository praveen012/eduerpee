import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useI18n } from "@/i18n/I18nProvider";

const regions = ["India", "USA", "Europe", "Middle East", "Asia-Pacific"];

export function GlobalPresenceSection() {
  const { t } = useI18n();
  return (
    <section className="py-20 sm:py-28 bg-navy-950">
      <Container>
        <SectionHeader
          eyebrow={t.globalPresence.eyebrow}
          heading={t.globalPresence.heading}
          description={t.globalPresence.description}
          light
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {regions.map((r) => (
            <span
              key={r}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-mist-100"
            >
              {r}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-xl text-[12.5px] text-mist-200/50">
          "Global Delivery" means EduErpee builds and supports software for clients in these regions
          remotely. Physical offices currently operate only in Azamgarh and Greater Noida, Uttar
          Pradesh, India.
        </p>
      </Container>
    </section>
  );
}
