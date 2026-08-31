import { Navigate } from "react-router-dom";
import { languages, defaultLanguage } from "./config";
import { LANG_STORAGE_KEY } from "./I18nProvider";

function resolveInitialLanguage(): string {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && languages.some((l) => l.code === saved && l.implemented)) {
      return saved;
    }
  } catch {
    // Ignore storage access errors (private browsing, etc.) and fall
    // through to the default language.
  }
  return defaultLanguage;
}

/** Visiting "/" sends the person to their previously chosen language,
 *  remembered in localStorage, or English on a first visit. */
export function RootRedirect() {
  return <Navigate to={`/${resolveInitialLanguage()}`} replace />;
}
