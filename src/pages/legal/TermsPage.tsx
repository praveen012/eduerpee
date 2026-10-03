import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function TermsPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.terms} path="/terms-and-conditions">
      <p>
        These Terms &amp; Conditions ("Terms") govern your use of www.eduerpee.com (the "Site"),
        operated by EduErpee Technology Private Limited ("EduErpee", "we", "us", "our"). By browsing
        the Site or submitting a form on it, you agree to these Terms. They cover use of the website
        only — actual service engagements (ERP, CRM, HRMS, AI, software, cloud, mobile or web
        development) are governed by the specific proposal and service agreement signed with each
        client, not by this page alone, and where the two conflict, the signed agreement controls.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100 mt-2">
        Use of the Site
      </h2>
      <p>
        You may browse the Site and submit enquiries for lawful business purposes. You agree not to
        misuse the Site — including attempting to gain unauthorised access to it or any connected
        system, scraping content at scale, interfering with its operation, or submitting false or
        malicious information through its forms.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Intellectual property
      </h2>
      <p>
        All content on this Site — including text, graphics, logos, the EduErpee name and mark, product
        screenshots, and the underlying design and code — is owned by EduErpee Technology Private
        Limited or its licensors, unless otherwise noted, and is protected by applicable intellectual
        property law. You may not reproduce, distribute or create derivative works from it without our
        prior written permission.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Case studies, figures &amp; forward-looking statements
      </h2>
      <p>
        Client names, testimonials, metrics and case studies on the Site reflect outcomes reported to
        us for specific engagements and are shared with permission; they illustrate typical results and
        are not a guarantee that any future engagement will achieve the same outcome. Product
        descriptions, pricing indications and timelines on the Site are general and subject to change —
        the binding scope, deliverables, pricing and timeline for any engagement are set out in the
        signed proposal or agreement.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Third-party links &amp; services
      </h2>
      <p>
        The Site may link to third-party sites (e.g. social profiles) or embed third-party services
        (e.g. analytics, bot protection, payment or scheduling tools). We are not responsible for the
        content, availability or practices of third-party sites, which are governed by their own terms
        and privacy policies.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Disclaimer &amp; limitation of liability
      </h2>
      <p>
        The Site and its content are provided "as is", without warranties of any kind, to the fullest
        extent permitted by law. See our{" "}
        <a href="/en/disclaimer" className="underline">Disclaimer</a> for more. To the extent permitted
        by applicable law, EduErpee is not liable for indirect, incidental or consequential loss arising
        from use of the Site; this does not limit liability that cannot be excluded under applicable
        law, or liability arising under a signed service agreement.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Governing law
      </h2>
      <p>
        These Terms are governed by the laws of India. Any dispute arising from use of this Site will be
        subject to the exclusive jurisdiction of the courts having jurisdiction over EduErpee's
        registered office in Uttar Pradesh, India, without prejudice to any dispute-resolution clause in
        a signed client agreement, which takes precedence for that engagement.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Changes to these Terms
      </h2>
      <p>
        We may update these Terms from time to time; the "Last updated" date above reflects the most
        recent revision. Continued use of the Site after a change constitutes acceptance of the updated
        Terms. For questions, contact{" "}
        <a href="mailto:support@eduerpee.com" className="underline">support@eduerpee.com</a>.
      </p>
    </LegalPage>
  );
}
