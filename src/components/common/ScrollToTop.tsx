import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router does NOT reset scroll position on navigation by default —
 * clicking a header/footer link while scrolled halfway down the current
 * page leaves the browser at that same scroll position on the new page,
 * which is exactly the "did my click work?" confusion being reported.
 * Mounted once inside RootLayout (which persists across route changes,
 * only its <Outlet/> content swaps), so this fires on every pathname
 * change without re-mounting.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
