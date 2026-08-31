import { useParams, Navigate, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Icon } from "@/utils/icon";
import { solutions } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const solution = solutions.find((s) => s.href === `/solutions/${slug}`);

  if (!solution) return <Navigate to={`/${lang}/404`} replace />;

  return (
    <>
      <SEO
        title={solution.title}
        description={solution.description}
        path={solution.href}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: `EduErpee ${solution.title}`,
          applicationCategory: "BusinessApplication",
          description: solution.description,
          offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
        }}
      />
      <PageHero
        eyebrow="Solution"
        title={solution.title}
        description={solution.description}
        icon={<Icon name={solution.icon} className="h-6 w-6" />}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-mist-100">
                The problem
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500 dark:text-mist-200/70">
                Manual, spreadsheet-driven or disconnected processes slow teams down and create
                errors that are expensive to fix later. {solution.title} replaces that patchwork
                with one connected system.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-mist-100">
                Key features
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {solution.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[13.5px] text-ink-700 dark:text-mist-200/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-mist-100">
                Deployment
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500 dark:text-mist-200/70">
                Deployed on cloud or on-premise, whichever fits — with an Android companion app,
                staff training and 24/7 support included after go-live.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-mist-100">FAQ</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-[13.5px] font-medium text-ink-800 dark:text-mist-200">
                    How long does setup take?
                  </h3>
                  <p className="mt-1 text-[13px] text-ink-500 dark:text-mist-200/65">
                    Most clients are live within days, including data migration and staff training.
                  </p>
                </div>
                <div>
                  <h3 className="text-[13.5px] font-medium text-ink-800 dark:text-mist-200">
                    Can it be customised to our workflow?
                  </h3>
                  <p className="mt-1 text-[13px] text-ink-500 dark:text-mist-200/65">
                    Yes — every product is fully customisable to match existing processes rather
                    than forcing a rebuild of how the business operates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-ink-900/10 dark:border-white/10 p-6 h-fit">
            <h3 className="font-display text-[15px] font-semibold text-ink-900 dark:text-mist-100">
              Book a free demo
            </h3>
            <p className="mt-2 text-[13px] text-ink-500 dark:text-mist-200/70">
              See {solution.title} configured for a business like yours — no commitment required.
            </p>
            <CTAButton href={`/${lang}/contact`} className="mt-5 w-full justify-center">
              Book Free Demo
            </CTAButton>
            <Link
              to={`/${lang}/solutions`}
              className="mt-3 block text-center text-[12.5px] text-ink-500 dark:text-mist-200/60 hover:text-brand-orange"
            >
              ← Back to all solutions
            </Link>
          </aside>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
