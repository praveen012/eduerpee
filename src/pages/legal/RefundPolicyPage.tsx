import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function RefundPolicyPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.refund} path="/refund-policy">
      <p>
        Refund terms for EduErpee Technology's products and services are defined in the specific
        proposal or service agreement signed with each client. Contact{" "}
        <a href="mailto:support@eduerpee.com" className="underline">support@eduerpee.com</a> with any
        billing question.
      </p>
    </LegalPage>
  );
}
