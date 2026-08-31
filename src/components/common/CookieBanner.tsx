import { useEffect, useState } from "react";
import { loadAnalytics } from "@/utils/analytics";

type Consent = { necessary: true; analytics: boolean; marketing: boolean; preferences: boolean };

const STORAGE_KEY = "eduerpee-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false, preferences: false });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }
    // Returning visitor who already granted analytics consent — load it
    // now rather than only on the "Accept"/"Save" click, which only fires
    // once, on the very first visit.
    try {
      const consent = JSON.parse(stored) as Consent;
      if (consent.analytics) loadAnalytics();
    } catch {
      // Malformed stored value — treat as no consent and re-ask.
      setVisible(true);
    }
  }, []);

  const save = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    // Marketing scripts (Meta Pixel, etc.) would load here too, the same
    // way — gated on consent.marketing, following the same pattern as
    // loadAnalytics() below.
    if (consent.analytics) loadAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-900/10 dark:border-white/10 bg-white/95 dark:bg-navy-900/95 backdrop-blur p-4 sm:p-5">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-ink-700 dark:text-mist-200/80 max-w-xl">
          We use cookies to run this site and, with consent, for analytics and marketing. See our{" "}
          <a href="/en/cookie-policy" className="underline">Cookie Policy</a>.
        </p>
        <div className="flex flex-wrap gap-2">
          {customizing ? (
            <>
              {(["analytics", "marketing", "preferences"] as const).map((key) => (
                <label key={key} className="flex items-center gap-1.5 text-[12px] text-ink-700 dark:text-mist-200/80">
                  <input
                    type="checkbox"
                    checked={prefs[key]}
                    onChange={(e) => setPrefs((p) => ({ ...p, [key]: e.target.checked }))}
                  />
                  {key}
                </label>
              ))}
              <button
                onClick={() => save({ necessary: true, ...prefs })}
                className="rounded-md bg-brand-orange px-3 py-1.5 text-[12px] font-medium text-white"
              >
                Save preferences
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => save({ necessary: true, analytics: false, marketing: false, preferences: false })}
                className="rounded-md border border-ink-900/15 dark:border-white/15 px-3 py-1.5 text-[12px] font-medium text-ink-700 dark:text-mist-200"
              >
                Reject optional
              </button>
              <button
                onClick={() => setCustomizing(true)}
                className="rounded-md border border-ink-900/15 dark:border-white/15 px-3 py-1.5 text-[12px] font-medium text-ink-700 dark:text-mist-200"
              >
                Customize
              </button>
              <button
                onClick={() => save({ necessary: true, analytics: true, marketing: true, preferences: true })}
                className="rounded-md bg-brand-orange px-3 py-1.5 text-[12px] font-medium text-white"
              >
                Accept all
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
