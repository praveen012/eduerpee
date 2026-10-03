import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function PrivacyPolicyPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.privacy} path="/privacy-policy">
      <p>
        This policy explains what EduErpee Technology Private Limited ("EduErpee", "we", "us")
        collects when you use this website, why, and the choices you have. It is a plain-English
        summary, not a substitute for legal advice — have counsel review the final text before
        relying on it for compliance purposes.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Information we collect</h2>
      <p>
        When you submit a contact or demo request form, we collect the details you provide —
        typically your name, company, email, phone number, country and the message or service
        interest you describe — solely to respond to your enquiry. Our contact form is protected
        by a CAPTCHA check (Cloudflare Turnstile) to reduce spam and automated abuse.
      </p>
      <p>
        We also collect limited technical data automatically, such as pages visited, approximate
        location (country/city level), device and browser type, and referring site, through
        analytics tools described below.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">How we use it</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Responding to enquiries and scheduling demos or calls</li>
        <li>Understanding which pages and services visitors find useful</li>
        <li>Improving site performance, content and security</li>
        <li>Meeting legal, accounting and regulatory obligations</li>
      </ul>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Sharing</h2>
      <p>
        We do not sell personal data. Information may be shared with service providers who help us
        run the site and respond to enquiries (for example, email delivery, hosting and analytics
        providers), bound by confidentiality obligations, or where required by law.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Cookies</h2>
      <p>
        Necessary cookies keep the site functioning. Analytics cookies (such as Google Analytics 4
        and Microsoft Clarity) and marketing cookies are only loaded after you give consent through
        the cookie banner shown on your first visit. See our{" "}
        <a href="../cookie-policy" className="underline">Cookie Policy</a> for the full breakdown by
        category, and how to change your choice at any time.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Data retention &amp; security</h2>
      <p>
        We retain enquiry and contact data only as long as needed to respond to you and meet
        accounting or legal retention requirements, after which it is deleted or anonymised. We use
        reasonable technical and organisational measures (access controls, encrypted transport) to
        protect the data we hold, though no method of transmission or storage is completely secure.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Your rights</h2>
      <p>
        You can ask us what personal data we hold about you, request a correction, or ask us to
        delete it, subject to any legal retention requirements. To make a request, contact{" "}
        <a href="mailto:support@eduerpee.com" className="underline">support@eduerpee.com</a>.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">International visitors</h2>
      <p>
        EduErpee Technology Private Limited is based in India, with offices in Azamgarh and Greater
        Noida, Uttar Pradesh, and serves clients across India, the USA and the EU. Data submitted
        through this site may be processed on servers located in different countries than your own.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100 !mt-8">Changes to this policy</h2>
      <p>
        We may update this policy from time to time to reflect changes in our practices or for legal
        reasons. Material changes will be reflected by an updated "Last updated" date on this page.
      </p>
    </LegalPage>
  );
}
