import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { BackToTop } from "@/components/common/BackToTop";
import { CookieBanner } from "@/components/common/CookieBanner";
import { I18nProvider } from "@/i18n/I18nProvider";
import { LanguageSuggestionBanner } from "@/i18n/LanguageSuggestionBanner";
import { RouteTracker } from "@/utils/RouteTracker";

export default function RootLayout() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col bg-mist-50 dark:bg-navy-950">
        <RouteTracker />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded-md focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <LanguageSuggestionBanner />
        <Header />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <CookieBanner />
      </div>
    </I18nProvider>
  );
}
