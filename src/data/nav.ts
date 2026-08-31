import type { NavItem } from "@/types/content";

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "School Management ERP", href: "/solutions/school-erp", icon: "School" },
      { label: "Inventory Management", href: "/solutions/inventory-management", icon: "Package" },
      { label: "Library Management", href: "/solutions/library-management", icon: "BookOpen" },
      { label: "Transportation Management", href: "/solutions/transport-management", icon: "Bus" },
      { label: "Doctor / Clinic Software", href: "/solutions/clinic-management", icon: "Stethoscope" },
      { label: "Custom & Cloud ERP", href: "/solutions/custom-erp", icon: "Cloud" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Development & Automation", href: "/services/ai-development", icon: "Bot" },
      { label: "Cloud & DevOps (Azure)", href: "/services/cloud-devops", icon: "CloudCog" },
      { label: "IT Staff Augmentation", href: "/services/staff-augmentation", icon: "Users" },
      { label: "Website Design & Development", href: "/services/web-development", icon: "Globe" },
      { label: "Mobile App Development", href: "/services/mobile-app-development", icon: "Smartphone" },
      { label: "UI/UX Design", href: "/services/ui-ux-design", icon: "PenTool" },
      { label: "Digital Marketing & SEO", href: "/services/digital-marketing", icon: "TrendingUp" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
