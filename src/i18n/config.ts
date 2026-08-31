export interface LanguageDef {
  code: string;
  label: string;
  nativeLabel: string;
  dir: "ltr" | "rtl";
  /** true if a full dictionary module exists in src/i18n/locales */
  implemented: boolean;
}

// Full list requested for the site's architecture. Urdu intentionally excluded.
// `implemented: true` languages ship a real dictionary in this build; the rest
// are wired into the language switcher and routing so a translation file can
// be dropped into src/i18n/locales and flipped on without touching the UI.
export const languages: LanguageDef[] = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr", implemented: true },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", dir: "ltr", implemented: true },
  { code: "es", label: "Spanish", nativeLabel: "Español", dir: "ltr", implemented: true },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl", implemented: true },
  { code: "fr", label: "French", nativeLabel: "Français", dir: "ltr", implemented: false },
  { code: "de", label: "German", nativeLabel: "Deutsch", dir: "ltr", implemented: false },
  { code: "pt", label: "Portuguese", nativeLabel: "Português", dir: "ltr", implemented: false },
  { code: "it", label: "Italian", nativeLabel: "Italiano", dir: "ltr", implemented: false },
  { code: "nl", label: "Dutch", nativeLabel: "Nederlands", dir: "ltr", implemented: false },
  { code: "ru", label: "Russian", nativeLabel: "Русский", dir: "ltr", implemented: false },
  { code: "zh", label: "Chinese", nativeLabel: "中文", dir: "ltr", implemented: false },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", dir: "ltr", implemented: false },
  { code: "ko", label: "Korean", nativeLabel: "한국어", dir: "ltr", implemented: false },
  { code: "tr", label: "Turkish", nativeLabel: "Türkçe", dir: "ltr", implemented: false },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa Indonesia", dir: "ltr", implemented: false },
  { code: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt", dir: "ltr", implemented: false },
  { code: "th", label: "Thai", nativeLabel: "ไทย", dir: "ltr", implemented: false },
  { code: "bn", label: "Bengali", nativeLabel: "বাংলা", dir: "ltr", implemented: false },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी", dir: "ltr", implemented: false },
  { code: "gu", label: "Gujarati", nativeLabel: "ગુજરાતી", dir: "ltr", implemented: false },
  { code: "ta", label: "Tamil", nativeLabel: "தமிழ்", dir: "ltr", implemented: false },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు", dir: "ltr", implemented: false },
  { code: "kn", label: "Kannada", nativeLabel: "ಕನ್ನಡ", dir: "ltr", implemented: false },
  { code: "ml", label: "Malayalam", nativeLabel: "മലയാളം", dir: "ltr", implemented: false },
  { code: "pa", label: "Punjabi", nativeLabel: "ਪੰਜਾਬੀ", dir: "ltr", implemented: false },
];

export const defaultLanguage = "en";

export const rtlLanguages = new Set(languages.filter((l) => l.dir === "rtl").map((l) => l.code));
