// Service-area content for the Locations page (src/pages/LocationsPage.tsx).
//
// Honesty rule, same as data/content.ts: EduErpee has two REAL physical
// offices — Azamgarh (registered office) and Greater Noida (Delhi NCR
// branch) — reused from `contactInfo.offices`. Every other place listed
// here (Varanasi, Gorakhpur, Lucknow, Jaunpur, Mau, USA, EU, UAE & the
// wider Gulf) is a market EduErpee is going after, not a place it has an
// office, a local team or existing local clients. Copy must always say
// "serves"/"supports remotely", never imply a local presence that doesn't
// exist — matching the disclaimer already on GlobalPresenceSection.tsx.

export interface ServiceAreaCity {
  name: string;
  note: string;
}

export interface ServiceAreaGroup {
  id: string;
  heading: string;
  intro: string;
  cities: ServiceAreaCity[];
  /** Plain-text areaServed values for this group's LocalBusiness/Organization JSON-LD node. */
  schemaAreaServed: string[];
}

export const purvanchalGroup: ServiceAreaGroup = {
  id: "purvanchal",
  heading: "Purvanchal & Eastern Uttar Pradesh",
  intro:
    "EduErpee Technology is headquartered in Azamgarh, and supports schools, clinics, retailers and growing " +
    "businesses across the wider Purvanchal region from there. On-site visits are available nearby; " +
    "everywhere else in the region is served remotely with the same setup, support and training.",
  cities: [
    { name: "Azamgarh", note: "Registered office (HQ) — on-site support available." },
    { name: "Varanasi", note: "Remote delivery, on-site visits available on request." },
    { name: "Gorakhpur", note: "Remote delivery, on-site visits available on request." },
    { name: "Lucknow", note: "Remote delivery, on-site visits available on request." },
    { name: "Jaunpur", note: "Remote delivery, on-site visits available on request." },
    { name: "Mau", note: "Remote delivery, on-site visits available on request." },
  ],
  schemaAreaServed: ["Azamgarh", "Varanasi", "Gorakhpur", "Lucknow", "Jaunpur", "Mau", "Purvanchal"],
};

export const delhiNcrGroup: ServiceAreaGroup = {
  id: "delhi-ncr",
  heading: "Delhi NCR",
  intro:
    "A branch office in Greater Noida puts EduErpee's team within reach of Delhi NCR for in-person " +
    "meetings, demos and on-site rollout, alongside the same remote support used everywhere else.",
  cities: [{ name: "Greater Noida", note: "Branch office — on-site support available across Delhi NCR." }],
  schemaAreaServed: ["Delhi NCR", "Greater Noida"],
};

export interface InternationalMarket {
  name: string;
  note: string;
}

export const internationalMarkets: InternationalMarket[] = [
  { name: "United States", note: "Remote delivery with overlapping working hours and English-speaking teams." },
  { name: "European Union", note: "Remote delivery, GDPR-aware data handling on request." },
  { name: "United Arab Emirates", note: "Remote delivery, available for scheduled on-site visits for larger engagements." },
  { name: "Gulf Cooperation Council (GCC)", note: "Covers Saudi Arabia, Qatar, Kuwait, Bahrain and Oman — remote delivery." },
];

export const internationalSchemaAreaServed = [
  "United States",
  "European Union",
  "United Arab Emirates",
  "Gulf Cooperation Council (GCC)",
];

export const locationFaqs = [
  {
    question: "Does EduErpee have a physical office in Varanasi, Gorakhpur, Lucknow, Jaunpur or Mau?",
    answer:
      "Not yet — EduErpee's only physical offices are the registered office in Azamgarh and the branch " +
      "office in Greater Noida (Delhi NCR). Clients in Varanasi, Gorakhpur, Lucknow, Jaunpur and Mau are " +
      "supported remotely, with on-site visits available on request from the Azamgarh team.",
  },
  {
    question: "Can EduErpee support clients in the USA, EU, UAE or the wider Gulf region?",
    answer:
      "Yes. EduErpee delivers AI, ERP, web/mobile development and IT staff augmentation remotely for " +
      "clients in the United States, the European Union, the UAE and the GCC countries, with overlapping " +
      "working hours and English-speaking project teams. There is no local office in these regions today.",
  },
  {
    question: "Where is EduErpee Technology registered and headquartered?",
    answer:
      "EduErpee Technology Private Limited is registered in Azamgarh, Uttar Pradesh, India, with a branch " +
      "office in Greater Noida.",
  },
];
