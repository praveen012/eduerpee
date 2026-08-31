export type Domain = "brand" | "ai" | "cloud" | "security" | "enterprise";

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface Solution {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  domain: Domain;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: "development" | "ai" | "cloud" | "design" | "marketing" | "security" | "outsourcing";
  href: string;
}

export interface Industry {
  id: string;
  icon: string;
  title: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  industry: string;
  rating: number;
  quote: string;
  solution: string;
  url?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  url?: string;
  /** Path to a real logo image (e.g. "/logos/silos.png"). When unset, the
   *  client card falls back to a colored initials badge + name, so this
   *  can be added later per-client with zero code changes elsewhere. */
  logoUrl?: string;
  /** Fine-tuning multiplier for perceived logo size (default 1). Source
   *  image dimensions never determine displayed size — every logo sits in
   *  a fixed-size, centered container regardless of its file's actual
   *  width/height — this is only for the rare logo that still looks too
   *  small/large next to others after normalization (e.g. one with a lot
   *  of built-in transparent padding). Use sparingly. */
  logoScale?: number;
  /** CSS object-position for the logo image (default "center"). Only
   *  needed for unusually shaped logos that sit off-center within their
   *  own transparent bounding box. */
  logoObjectPosition?: string;
}

export interface TechCategory {
  category: string;
  icon: string;
  items: string[];
}
