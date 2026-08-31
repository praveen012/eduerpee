import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

const NavigationProgressContext = createContext<boolean>(false);

/**
 * React Router wraps its internal navigation state updates in
 * `startTransition`. That's normally a good thing (keeps the UI
 * responsive), but it has a side effect worth knowing: while a lazy route
 * chunk is loading, React deliberately keeps showing the *previous*
 * page's committed content and does NOT show the Suspense fallback —
 * confirmed by intercepting a chunk request with an artificial delay and
 * polling the DOM, which showed zero fallback render across the entire
 * delay window. So a loading indicator can't be driven by Suspense here;
 * it has to be driven by the click itself.
 *
 * This listens for clicks on same-origin, non-hash internal links at the
 * document level (capture phase, so it fires before React Router's own
 * handler) and shows progress immediately — a real synchronous state
 * update, not deferred — then clears it once `useLocation()`'s pathname
 * actually changes, which only happens after React commits the new route
 * (i.e. after the chunk has loaded), so start and stop are both tied to
 * real events rather than a guessed timeout.
 */
export function NavigationProgressProvider({ children }: { children: ReactNode }) {
  const [navigating, setNavigating] = useState(false);
  const { pathname, search } = useLocation();
  const prevKey = useRef(pathname + search);

  useEffect(() => {
    const key = pathname + search;
    if (key !== prevKey.current) {
      prevKey.current = key;
      setNavigating(false);
    }
  }, [pathname, search]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("#")) return;

      const url = new URL(href, window.location.href);
      const targetKey = url.pathname + url.search;
      if (targetKey === prevKey.current) return; // same page, no real navigation

      setNavigating(true);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <NavigationProgressContext.Provider value={navigating}>{children}</NavigationProgressContext.Provider>
  );
}

export function useNavigationProgress() {
  return useContext(NavigationProgressContext);
}
