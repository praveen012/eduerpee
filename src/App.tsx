import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RootLayout from "@/components/layout/RootLayout";
import { RootRedirect } from "@/i18n/RootRedirect";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const TeamPage = lazy(() => import("@/pages/TeamPage"));
const SolutionsPage = lazy(() => import("@/pages/SolutionsPage"));
const SolutionDetailPage = lazy(() => import("@/pages/SolutionDetailPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("@/pages/ServiceDetailPage"));
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const TechnologiesPage = lazy(() => import("@/pages/TechnologiesPage"));
const CaseStudiesPage = lazy(() => import("@/pages/CaseStudiesPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/legal/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("@/pages/legal/TermsPage"));
const CookiePolicyPage = lazy(() => import("@/pages/legal/CookiePolicyPage"));
const DisclaimerPage = lazy(() => import("@/pages/legal/DisclaimerPage"));
const RefundPolicyPage = lazy(() => import("@/pages/legal/RefundPolicyPage"));

function PageFallback() {
  return <div className="min-h-[50vh]" aria-hidden="true" />;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/:lang" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="solutions" element={<SolutionsPage />} />
              <Route path="solutions/:slug" element={<SolutionDetailPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/:slug" element={<ServiceDetailPage />} />
              <Route path="industries" element={<IndustriesPage />} />
              <Route path="technologies" element={<TechnologiesPage />} />
              <Route path="case-studies" element={<CaseStudiesPage />} />
              <Route path="clients" element={<CaseStudiesPage />} />
              <Route path="products" element={<SolutionsPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="careers" element={<CareersPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="terms-and-conditions" element={<TermsPage />} />
              <Route path="cookie-policy" element={<CookiePolicyPage />} />
              <Route path="disclaimer" element={<DisclaimerPage />} />
              <Route path="refund-policy" element={<RefundPolicyPage />} />
              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/en/404" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
