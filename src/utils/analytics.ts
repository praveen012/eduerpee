declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

let gaLoaded = false;
let clarityLoaded = false;

/**
 * Injects gtag.js and initializes GA4. Call only after the person has
 * granted analytics consent (see CookieBanner.tsx) — never on page load
 * unconditionally. No-ops safely if VITE_GA4_MEASUREMENT_ID isn't set
 * (e.g. in local dev before a real property exists), so nothing breaks
 * before a real Measurement ID is configured.
 */
export function loadAnalytics() {
  loadGA4();
  loadClarity();
}

function loadGA4() {
  if (gaLoaded || !GA_ID || typeof window === "undefined") return;
  gaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  // send_page_view disabled — this is an SPA, pageviews are sent manually
  // per route change via trackPageview() (see RouteTracker.tsx), otherwise
  // GA4 only sees the very first load and every client-side navigation is
  // invisible to it.
  window.gtag("config", GA_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

/** Microsoft Clarity — free heatmaps/session recordings. Same consent
 *  gating and no-op-if-unconfigured behavior as loadGA4(). */
function loadClarity() {
  if (clarityLoaded || !CLARITY_ID || typeof window === "undefined") return;
  clarityLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(script);
}

export function isAnalyticsLoaded() {
  return gaLoaded;
}

/** Send a pageview for the given path — call on every client-side route change. */
export function trackPageview(path: string, title?: string) {
  if (!gaLoaded || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

/**
 * Send a custom GA4 event. Use for meaningful conversion signals — CTA
 * clicks, service/solution card clicks, contact form submissions — not
 * every possible interaction. Params are optional extra context (e.g.
 * which service was clicked) shown as event parameters in GA4 reports.
 */
export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (!gaLoaded || !window.gtag) return;
  window.gtag("event", name, params);
}
