import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, Sun, Moon, ChevronDown, Globe2 } from "lucide-react";
import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { Icon } from "@/utils/icon";
import { primaryNav } from "@/data/nav";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/hooks/useTheme";
import { trackEvent } from "@/utils/analytics";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const { t, lang, languages, currentLanguage, setLanguage } = useI18n();
  const { theme, toggle } = useTheme();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const withLang = (href: string) => `/${lang}${href === "/" ? "" : href}`;

  const openWithDelay = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeWithDelay = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mist-50/90 dark:bg-navy-950/90 backdrop-blur-md border-b border-ink-900/8 dark:border-white/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex min-h-[56px] items-center justify-between py-0.5">
        <Link to={withLang("/")} className="flex items-center shrink-0">
          <img src="/logo-light.svg" alt="EduErpee Technology" className="h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && openWithDelay(item.label)}
              onMouseLeave={() => item.children && closeWithDelay()}
            >
              <NavLink
                to={withLang(item.href)}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-md px-3.5 py-2 text-[14px] font-medium transition-colors ${
                    isActive
                      ? "text-brand-orange"
                      : "text-ink-700 dark:text-mist-200/90 hover:text-brand-orange"
                  }`
                }
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </NavLink>

              {item.children && openMenu === item.label && (
                <div
                  className={`absolute top-full mt-1 w-[560px] rounded-lg border border-ink-900/8 dark:border-white/10 bg-white dark:bg-navy-900 p-3 shadow-xl shadow-ink-900/10 ${
                    // Edge-aware anchoring: items in the first half of the
                    // nav anchor to their own left edge, items in the
                    // second half anchor to their own right edge — a
                    // fixed-width dropdown centered under a trigger near
                    // either edge of the viewport (like the first nav
                    // item) otherwise clips off-screen, hiding content
                    // rather than just looking imperfectly centered.
                    index < primaryNav.length / 2 ? "left-0" : "right-0"
                  }`}
                  onMouseEnter={() => openWithDelay(item.label)}
                  onMouseLeave={closeWithDelay}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={withLang(child.href)}
                        className="flex items-start gap-3 rounded-md p-3 hover:bg-mist-100 dark:hover:bg-white/5 transition-colors"
                      >
                        {child.icon && (
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange">
                            <Icon name={child.icon} className="h-4 w-4" />
                          </span>
                        )}
                        <span className="text-[13.5px] font-medium text-ink-800 dark:text-mist-200 leading-snug">
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button
            aria-label="Search"
            className="rounded-md p-2 text-ink-700 dark:text-mist-200 hover:bg-ink-900/5 dark:hover:bg-white/10 transition-colors"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-[13px] font-medium text-ink-700 dark:text-mist-200 hover:bg-ink-900/5 dark:hover:bg-white/10 transition-colors"
            >
              <Globe2 className="h-4 w-4" />
              {currentLanguage.code.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 max-h-80 w-56 overflow-y-auto rounded-lg border border-ink-900/8 dark:border-white/10 bg-white dark:bg-navy-900 p-1.5 shadow-xl">
                {languages
                  .filter((l) => l.implemented)
                  .map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-[13px] transition-colors ${
                        l.code === lang
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "text-ink-700 dark:text-mist-200 hover:bg-mist-100 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>{l.nativeLabel}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>

          <button
            aria-label="Toggle dark mode"
            onClick={toggle}
            className="rounded-md p-2 text-ink-700 dark:text-mist-200 hover:bg-ink-900/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>

          <CTAButton
            href={withLang("/contact")}
            size="md"
            icon={false}
            variant="secondary"
            onClick={() => trackEvent("cta_click", { cta: "header_book_demo" })}
          >
            {t.nav.bookDemo}
          </CTAButton>
          <CTAButton
            href={withLang("/contact")}
            size="md"
            onClick={() => trackEvent("cta_click", { cta: "header_get_consultation" })}
          >
            {t.nav.getConsultation}
          </CTAButton>
        </div>

        <button
          className="lg:hidden rounded-md p-2 text-ink-800 dark:text-mist-100"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-ink-900/8 dark:border-white/10 bg-mist-50 dark:bg-navy-950">
          <Container className="py-4 flex flex-col gap-1">
            {primaryNav.map((item) => (
              <div key={item.label}>
                <Link
                  to={withLang(item.href)}
                  className="block py-2.5 text-[15px] font-medium text-ink-800 dark:text-mist-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-3 border-l border-ink-900/10 dark:border-white/10 ml-1 mb-2 flex flex-col gap-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={withLang(c.href)}
                        className="py-1.5 text-[13.5px] text-ink-500 dark:text-mist-200/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 mt-3">
              <CTAButton
                href={withLang("/contact")}
                className="flex-1 justify-center"
                icon={false}
                onClick={() => {
                  trackEvent("cta_click", { cta: "header_mobile_get_consultation" });
                  setMobileOpen(false);
                }}
              >
                {t.nav.getConsultation}
              </CTAButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
