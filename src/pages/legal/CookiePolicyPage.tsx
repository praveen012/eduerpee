import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function CookiePolicyPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.cookie} path="/cookie-policy">
      <p>This site uses four categories of cookies:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>Necessary</strong> — required for the site to function; always on.</li>
        <li><strong>Analytics</strong> — usage statistics (e.g. GA4, Microsoft Clarity), loaded only after consent.</li>
        <li><strong>Marketing</strong> — ad measurement (e.g. Meta Pixel), loaded only after consent.</li>
        <li><strong>Preferences</strong> — remembers settings such as language and theme.</li>
      </ul>
      <p>Consent can be changed at any time by clearing site data or via the cookie banner on first visit.</p>
    </LegalPage>
  );
}
