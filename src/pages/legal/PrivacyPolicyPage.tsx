import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function PrivacyPolicyPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.privacy} path="/privacy-policy">
      <p>
        This placeholder Privacy Policy explains, at a high level, what a production version needs to
        cover. It is not a substitute for legal advice — have counsel review the final text before
        publishing.
      </p>
      <p>
        EduErpee Technology Private Limited ("EduErpee", "we", "us") collects information submitted
        through contact and demo request forms — name, company, email, phone, country, service
        interest and message content — solely to respond to enquiries and deliver requested services.
      </p>
      <p>
        We do not sell personal data. Optional analytics and marketing cookies are only loaded after
        consent is given via the cookie banner, in line with the categories described in our{" "}
        <a href="/en/cookie-policy" className="underline">Cookie Policy</a>.
      </p>
      <p>
        For any privacy request, contact <a href="mailto:support@eduerpee.com" className="underline">support@eduerpee.com</a>.
      </p>
    </LegalPage>
  );
}
