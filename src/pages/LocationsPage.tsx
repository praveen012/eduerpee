import { MapPin, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { contactInfo } from "@/data/content";
import {
  purvanchalGroup,
  delhiNcrGroup,
  internationalMarkets,
  internationalSchemaAreaServed,
  locationFaqs,
  type ServiceAreaGroup,
} from "@/data/locations";

const SITE_URL = "https://www.eduerpee.com";

function officeLocalBusinessJsonLd(group: ServiceAreaGroup, office: { address: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `EduErpee Technology – ${group.heading}`,
    url: `${SITE_URL}/en/locations`,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: { "@type": "PostalAddress", streetAddress: office.address, addressCountry: "IN" },
    areaServed: group.schemaAreaServed,
  };
}

function RegionGroup({ group }: { group: ServiceAreaGroup }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-mist-100">
        {group.heading}
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
        {group.intro}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {group.cities.map((city) => (
          <div
            key={city.name}
            className="flex items-start gap-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm px-4 py-3.5"
          >
            <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-orange" />
            <div>
              <p className="text-[13.5px] font-semibold text-ink-800 dark:text-mist-100">{city.name}</p>
              <p className="mt-0.5 text-[12.5px] leading-snug text-ink-500 dark:text-mist-200/60">{city.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LocationsPage() {
  const azamgarhOffice = contactInfo.offices[0];
  const greaterNoidaOffice = contactInfo.offices[1];

  const jsonLd = [
    officeLocalBusinessJsonLd(purvanchalGroup, azamgarhOffice),
    officeLocalBusinessJsonLd(delhiNcrGroup, greaterNoidaOffice),
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "EduErpee Technology Private Limited",
      url: `${SITE_URL}/en/locations`,
      areaServed: internationalSchemaAreaServed,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: locationFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <>
      <SEO
        title="Areas We Serve: Purvanchal, Delhi NCR & International Clients"
        description="EduErpee Technology serves Azamgarh, Varanasi, Gorakhpur, Lucknow, Jaunpur, Mau and Delhi NCR with on-site support, plus remote delivery for clients across the USA, EU, UAE and the Gulf."
        path="/locations"
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="Where We Work"
        title="Serving Purvanchal, Delhi NCR & Clients Worldwide"
        description="On-site support near our Azamgarh and Greater Noida offices, remote delivery everywhere else — including international clients."
      />

      <section className="py-16 sm:py-24">
        <Container className="space-y-16">
          <RegionGroup group={purvanchalGroup} />
          <RegionGroup group={delhiNcrGroup} />

          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-mist-100">
              International: USA, EU, UAE &amp; the Gulf
            </h2>
            <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
              EduErpee delivers AI, ERP, web/mobile and staff-augmentation projects remotely for clients
              outside India. There's no physical office in these regions today — delivery is remote-first,
              with overlapping working hours and English-speaking project teams.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {internationalMarkets.map((m) => (
                <div
                  key={m.name}
                  className="flex items-start gap-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm px-4 py-3.5"
                >
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-orange" />
                  <div>
                    <p className="text-[13.5px] font-semibold text-ink-800 dark:text-mist-100">{m.name}</p>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-ink-500 dark:text-mist-200/60">{m.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-mist-100/60 dark:bg-navy-900/30">
        <Container>
          <SectionHeader eyebrow="FAQ" heading="Office locations, answered honestly" align="center" />
          <div className="mx-auto mt-10 max-w-2xl space-y-5">
            {locationFaqs.map((f) => (
              <div
                key={f.question}
                className="rounded-lg border border-ink-900/10 dark:border-white/10 bg-white/90 dark:bg-navy-900/90 p-5"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-brand-orange" />
                  <p className="text-[14px] font-semibold text-ink-800 dark:text-mist-100">{f.question}</p>
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
