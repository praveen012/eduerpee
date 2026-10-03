import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function TermsPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.terms} path="/terms-and-conditions">
      <p>
        These Terms &amp; Conditions govern your use of the EduErpee Technology website and, at a
        high level, the engagement of our services. They are a plain-English summary and not a
        substitute for legal advice — have counsel review the final text before relying on it for
        a specific client contract.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Use of this site</h2>
      <p>
        You may browse this site and submit enquiry or demo-request forms for legitimate business
        purposes. You agree not to misuse the site — for example, attempting to bypass security
        controls, scraping content at scale, or submitting forms with false information.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Intellectual property</h2>
      <p>
        Content on this site — including branding, copy, graphics and design — belongs to EduErpee
        Technology Private Limited unless otherwise noted, and may not be reproduced, distributed
        or used commercially without written permission.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Case studies &amp; forward-looking statements</h2>
      <p>
        Case studies, client names and results described on this site reflect specific client
        engagements and are shared with permission; they illustrate what has been achieved for
        particular clients and are not a guarantee of similar results for every engagement.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Third-party links</h2>
      <p>
        This site may link to third-party websites (for example, client sites referenced in our
        case studies). We do not control and are not responsible for the content or practices of
        those sites.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Disclaimer &amp; limitation of liability</h2>
      <p>
        Information on this site is provided for general informational purposes and is not a
        substitute for professional advice specific to your business or legal and regulatory
        obligations. To the extent permitted by law, EduErpee Technology Private Limited is not
        liable for any loss arising from reliance on this website's content.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Governing law</h2>
      <p>
        These Terms are governed by the laws of India, and any disputes arising from use of this
        site will be subject to the exclusive jurisdiction of the courts of Uttar Pradesh, India.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Service engagements</h2>
      <p>
        Actual service engagements — scope, pricing, timelines and deliverables — are governed by
        the specific proposal and signed agreement with each client, not by this website alone.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be reflected by an
        updated "Last updated" date on this page.
      </p>
    </LegalPage>
  );
}
