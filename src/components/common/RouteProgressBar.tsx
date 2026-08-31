import { useNavigationProgress } from "@/hooks/useNavigationProgress";

/**
 * Thin animated bar shown at the top of the viewport while a navigation
 * is in flight. Driven by useNavigationProgress() (click-tracked, see
 * that file for why — Suspense's own fallback doesn't reliably show
 * during React Router's internal startTransition-wrapped navigation).
 */
export function RouteProgressBar() {
  const navigating = useNavigationProgress();

  if (!navigating) return null;

  return (
    <div
      data-testid="route-progress-bar"
      className="fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-transparent"
    >
      <div className="h-full w-1/3 animate-[routeProgress_1.1s_ease-in-out_infinite] bg-gradient-to-r from-brand-orange/40 via-brand-orange to-brand-orange/40" />
      <style>{`
        @keyframes routeProgress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
