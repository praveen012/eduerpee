export interface HoloPanel {
  id: string;
  label: string;
  status: string;
}

// Decorative only — never real, unverified business metrics.
export const holoPanels: HoloPanel[] = [
  { id: "ai-engine", label: "AI ENGINE", status: "ACTIVE" },
  { id: "erp-core", label: "ERP CORE", status: "CONNECTED" },
  { id: "cloud", label: "CLOUD", status: "ONLINE" },
  { id: "automation", label: "AUTOMATION", status: "ACTIVE" },
  { id: "security", label: "SECURITY", status: "PROTECTED" },
];
