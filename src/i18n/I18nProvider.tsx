import { createContext, useContext, useMemo, useEffect, type ReactNode } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import en, { type Dictionary } from "./locales/en";
import hi from "./locales/hi";
import es from "./locales/es";
import ar from "./locales/ar";
import { languages, defaultLanguage, type LanguageDef } from "./config";

const dictionaries: Record<string, Dictionary> = { en, hi, es, ar };

export const LANG_STORAGE_KEY = "eduerpee-lang";

interface I18nContextValue {
  lang: string;
  dir: "ltr" | "rtl";
  t: Dictionary;
  languages: LanguageDef[];
  currentLanguage: LanguageDef;
  setLanguage: (code: string) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Wrap the routed app. Reads :lang from the URL (e.g. /es/about), falls back
 * to the default language when missing or unimplemented, and exposes the
 * active dictionary + a setter that rewrites the URL prefix.
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  const { lang: routeLang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage =
    languages.find((l) => l.code === routeLang && l.implemented) ??
    languages.find((l) => l.code === defaultLanguage)!;

  const dict = dictionaries[currentLanguage.code] ?? en;

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
    document.documentElement.dir = currentLanguage.dir;
  }, [currentLanguage]);

  const setLanguage = (code: string) => {
    const target = languages.find((l) => l.code === code);
    if (!target || !target.implemented) return;
    // Persist the explicit choice so it's remembered on the next visit
    // (see the root-path redirect in App.tsx, which reads this back).
    try {
      localStorage.setItem(LANG_STORAGE_KEY, code);
    } catch {
      // localStorage can throw in private-browsing / storage-restricted
      // contexts — language still switches for this session either way.
    }
    const rest = location.pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
    navigate(`/${code}${rest === "/" ? "" : rest}${location.search}`);
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      lang: currentLanguage.code,
      dir: currentLanguage.dir,
      t: dict,
      languages,
      currentLanguage,
      setLanguage,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentLanguage.code, location.pathname]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}
