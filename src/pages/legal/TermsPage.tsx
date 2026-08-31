import { LegalPage } from "./LegalPage";
import { useI18n } from "@/i18n/I18nProvider";

export default function TermsPage() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.terms} path="/terms-and-conditions">
      <p>
        These placeholder Terms &amp; Conditions govern use of the EduErpee Technology website and
        engagement of its services. Replace with counsel-reviewed terms before production launch.
      </p>
      <p>
        Content on this site — including branding, copy and design — belongs to EduErpee Technology
        Private Limited unless otherwise noted, and may not be reproduced without permission.
      </p>
      <p>
        Service engagements are governed by the specific proposal and agreement signed with each
        client, not by this website alone.
      </p>
    </LegalPage>
  );
}
