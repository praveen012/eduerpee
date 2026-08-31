import type { Domain } from "@/types/content";

export const domainStyles: Record<Domain, { text: string; bg: string; ring: string }> = {
  brand: { text: "text-brand-orange", bg: "bg-brand-orange/10", ring: "hover:border-brand-orange/50" },
  ai: { text: "text-domain-ai", bg: "bg-domain-ai/10", ring: "hover:border-domain-ai/50" },
  cloud: { text: "text-domain-cloud", bg: "bg-domain-cloud/10", ring: "hover:border-domain-cloud/50" },
  security: { text: "text-domain-security", bg: "bg-domain-security/10", ring: "hover:border-domain-security/50" },
  enterprise: { text: "text-domain-enterprise", bg: "bg-domain-enterprise/10", ring: "hover:border-domain-enterprise/50" },
};
