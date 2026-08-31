import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function DisclaimerPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.disclaimer} path="/disclaimer">
      <p>
        Information on this website is provided for general informational purposes. While EduErpee
        Technology Private Limited works to keep content accurate and current, no warranty is made
        about completeness or reliability of any information, product description or case study
        result presented.
      </p>
    </LegalPage>
  );
}
