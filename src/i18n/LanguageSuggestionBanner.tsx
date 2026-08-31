import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";
import { useI18n } from "./I18nProvider";
import { LANG_STORAGE_KEY } from "./I18nProvider";

const DISMISS_KEY = "eduerpee-lang-suggestion-dismissed";

export function LanguageSuggestionBanner() {
  const { lang, languages, setLanguage } = useI18n();
  const [suggestion, setSuggestion] = useState<{ code: string; nativeLabel: string } | null>(null);

  useEffect(() => {
    try {
      // Only offer this once: skip if the person already made an explicit
      // choice (via the language menu) or already dismissed the banner.
      if (localStorage.getItem(LANG_STORAGE_KEY) || localStorage.getItem(DISMISS_KEY)) return;
    } catch {
      return;
    }

    const browserLang = (navigator.language || "en").split("-")[0];
    if (browserLang === lang) return;

    const match = languages.find((l) => l.code === browserLang && l.implemented);
    if (match) setSuggestion({ code: match.code, nativeLabel: match.nativeLabel });
    // Only check once on mount — this is a first-visit prompt, not a
    // continuous watcher.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!suggestion) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "true");
    } catch {
      /* ignore */
    }
    setSuggestion(null);
  };

  const accept = () => {
    setLanguage(suggestion.code);
    setSuggestion(null);
  };

  return (
    <div
      role="status"
      className="fixed inset-x-0 top-0 z-[60] border-b border-brand-orange/30 bg-navy-950 px-4 py-2.5 text-white"
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
        <Globe2 className="h-4 w-4 shrink-0 text-brand-orange" />
        <span className="text-[13px]">
          This site is also available in <strong>{suggestion.nativeLabel}</strong>.
        </span>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="rounded-md bg-brand-orange px-3 py-1 text-[12px] font-medium text-white hover:bg-brand-orange-dark"
          >
            {suggestion.nativeLabel}
          </button>
          <button
            onClick={dismiss}
            className="rounded-md border border-white/20 px-3 py-1 text-[12px] font-medium text-mist-200/85 hover:bg-white/10"
          >
            Keep English
          </button>
        </div>
      </div>
    </div>
  );
}
