import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageview } from "@/utils/analytics";

export function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageview(location.pathname + location.search, document.title);
  }, [location.pathname, location.search]);

  return null;
}
