import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function PrivacyPolicyPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.privacy} path="/privacy-policy">
      <p>
        EduErpee Technology Private Limited ("EduErpee", "we", "us", "our") respects your privacy.
        This policy explains what information we collect through www.eduerpee.com, why we collect it,
        how it is used and protected, and the choices you have. It applies to visitors, prospective
        clients and users of our websites, and does not cover data processed inside client-owned
        software (ERP, CRM, HRMS and similar systems) that we build or operate for individual clients —
        that data is governed by the agreement with that client.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100 mt-2">
        Information we collect
      </h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Information you provide</strong> — name, company, email address, phone number,
          country, service of interest and message content submitted through contact forms, demo
          requests, the careers page or direct correspondence.
        </li>
        <li>
          <strong>Information collected automatically</strong> — pages visited, device and browser
          type, approximate location (from IP) and referring pages, via analytics tools such as Google
          Analytics 4 and Microsoft Clarity. These are loaded only after you accept analytics cookies in
          the cookie banner — see our <a href="/en/cookie-policy" className="underline">Cookie Policy</a>.
        </li>
        <li>
          <strong>Information from third parties</strong> — if you reach us via LinkedIn, WhatsApp or a
          similar platform, we may receive the profile details that platform shares with businesses.
        </li>
      </ul>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        How we use this information
      </h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Responding to enquiries, demo requests and support questions.</li>
        <li>Preparing proposals, quotes and service agreements.</li>
        <li>Improving our website, products and service offerings.</li>
        <li>Sending service-related updates and, where you have opted in, occasional marketing communications. You can unsubscribe from marketing email at any time.</li>
        <li>Meeting legal, accounting, tax (including GST) and regulatory obligations in India.</li>
      </ul>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Sharing of information
      </h2>
      <p>
        We do not sell personal data. We share information only with: service providers who help us
        run the business (hosting, email delivery, analytics, customer support and bot-protection
        providers such as Cloudflare Turnstile), each bound by confidentiality and data-protection
        obligations; professional advisors (accountants, auditors, lawyers) where necessary; and
        authorities where required by applicable law.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Cookies
      </h2>
      <p>
        We use necessary, analytics, marketing and preference cookies. Analytics and marketing cookies
        load only after you give consent via the cookie banner. Full details, including how to change
        your choice, are in our <a href="/en/cookie-policy" className="underline">Cookie Policy</a>.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Data retention &amp; security
      </h2>
      <p>
        We retain enquiry and client data for as long as needed to provide services, meet legal and tax
        record-keeping requirements, and resolve disputes, after which it is deleted or anonymised.
        We use reasonable technical and organisational measures — encryption in transit, access
        controls and restricted internal access — to protect personal data, though no system can be
        guaranteed 100% secure.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Your rights
      </h2>
      <p>
        Depending on your location, you may have the right to access, correct, delete or port your
        personal data, or to object to or restrict certain processing. To exercise any of these rights,
        or for any privacy question, contact us at{" "}
        <a href="mailto:support@eduerpee.com" className="underline">support@eduerpee.com</a>. We will
        respond within a reasonable timeframe and in line with applicable law.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        International visitors
      </h2>
      <p>
        EduErpee is headquartered in India and serves clients in the USA, EU, UAE, the Gulf and
        elsewhere. By using this site, you understand that information you submit may be processed on
        servers located in India or other countries where our service providers operate.
      </p>

      <h2 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
        Changes to this policy
      </h2>
      <p>
        We may update this policy from time to time; the "Last updated" date above reflects the most
        recent revision. Significant changes will be reflected on this page. This policy is provided
        for transparency and is not a substitute for independent legal advice — if you need a policy
        tailored to a specific regulatory regime (e.g. GDPR, DPDP Act), have counsel review it.
      </p>
    </LegalPage>
  );
}
