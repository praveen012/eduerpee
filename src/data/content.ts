// Content sourced from https://www.eduerpee.com/ (fetched Aug 2026).
// No clients, stats, awards or team members are invented — everything here
// is carried over from the existing EduErpee site and restructured/rewritten
// for the new information architecture.

import type {
  Solution,
  Service,
  Industry,
  ProcessStep,
  Testimonial,
  TeamMember,
  Client,
  TechCategory,
} from "@/types/content";

export const solutions: Solution[] = [
  {
    id: "school-erp",
    icon: "School",
    title: "School Management ERP",
    description:
      "Run an entire school from one dashboard — admissions to results, fees to parent communication, payroll to library — with an Android companion app included.",
    features: ["Admissions", "Attendance", "Fee Management", "Exams", "Parent Portal"],
    domain: "enterprise",
    href: "/solutions/school-erp",
  },
  {
    id: "inventory-management",
    icon: "Package",
    title: "Inventory Management",
    description:
      "Real-time stock tracking, automated purchase orders, low-stock alerts, vendor management and business reports that run automatically.",
    features: ["Stock Tracking", "PO Management", "Vendor Management", "Reports"],
    domain: "cloud",
    href: "/solutions/inventory-management",
  },
  {
    id: "library-management",
    icon: "BookOpen",
    title: "Library Management",
    description:
      "Digitise a library in days with barcode scanning, catalogue management, issue/return tracking, member management and automated fine collection.",
    features: ["Catalogue", "Barcode Scanning", "Issue / Return", "Fine Collection"],
    domain: "enterprise",
    href: "/solutions/library-management",
  },
  {
    id: "transport-management",
    icon: "Bus",
    title: "Transportation Management",
    description:
      "GPS live tracking, optimised route planning, driver management, fee collection and automated parent SMS notifications in one integrated system.",
    features: ["GPS Tracking", "Route Planning", "Driver Management", "Notifications"],
    domain: "cloud",
    href: "/solutions/transport-management",
  },
  {
    id: "clinic-software",
    icon: "Stethoscope",
    title: "Doctor / Clinic Software",
    description:
      "Complete OPD management — patient records, appointments, EMR, prescriptions, billing and medicine inventory in one dedicated system.",
    features: ["Patient Records", "EMR", "Appointments", "Billing"],
    domain: "security",
    href: "/solutions/clinic-management",
  },
  {
    id: "custom-erp",
    icon: "Cloud",
    title: "Custom & Cloud ERP",
    description:
      "A unique workflow that off-the-shelf software can't handle? Built from scratch — web, mobile, cloud-deployed and tailored to the business.",
    features: ["Custom Build", "SaaS", "Web & Mobile", "Cloud Deploy"],
    domain: "ai",
    href: "/solutions/custom-erp",
  },
];

export const services: Service[] = [
  {
    id: "web-dev",
    icon: "Globe",
    title: "Website Design & Development",
    description: "Responsive, fast websites that look premium and turn visitors into customers.",
    category: "development",
    href: "/services/web-development",
  },
  {
    id: "mobile-apps",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Native Android & iOS apps, plus cross-platform apps with Flutter and React Native.",
    category: "development",
    href: "/services/mobile-app-development",
  },
  {
    id: "ui-ux",
    icon: "PenTool",
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces that users enjoy and that drive measurable results.",
    category: "design",
    href: "/services/ui-ux-design",
  },
  {
    id: "cloud-devops",
    icon: "CloudCog",
    title: "Cloud & DevOps",
    description: "Reliable cloud hosting, CI/CD pipelines and 99.9% uptime SLAs for production systems.",
    category: "cloud",
    href: "/services/cloud-devops",
  },
  {
    id: "digital-marketing",
    icon: "TrendingUp",
    title: "Digital Marketing & SEO",
    description: "Results-driven SEO, social media management and PPC campaigns that convert.",
    category: "marketing",
    href: "/services/digital-marketing",
  },
  {
    id: "ai-chatbot",
    icon: "Bot",
    title: "AI Development & Automation",
    description: "Custom AI solutions, intelligent chatbots and workflow automation — built on OpenAI and Microsoft Azure AI to cut manual work and speed up operations.",
    category: "ai",
    href: "/services/ai-development",
  },
  {
    id: "staff-augmentation",
    icon: "Users",
    title: "IT Staff Augmentation",
    description: "Hire vetted, dedicated developers on flexible contracts to extend an in-house team — full control, no long-term hiring overhead.",
    category: "outsourcing",
    href: "/services/staff-augmentation",
  },
  {
    id: "branding",
    icon: "Tag",
    title: "Logo & Brand Identity",
    description: "Professional branding — logos, colour systems and guidelines that make a business unforgettable.",
    category: "design",
    href: "/services/branding",
  },
  {
    id: "support",
    icon: "LifeBuoy",
    title: "Maintenance & Support",
    description: "Ongoing updates, bug fixes and round-the-clock technical assistance.",
    category: "security",
    href: "/services/maintenance-support",
  },
];

export const industries: Industry[] = [
  { id: "healthcare", icon: "HeartPulse", title: "Healthcare & Clinics" },
  { id: "education", icon: "GraduationCap", title: "Education & Colleges" },
  { id: "retail", icon: "ShoppingBag", title: "Retail & E-Commerce" },
  { id: "manufacturing", icon: "Factory", title: "Manufacturing" },
  { id: "fintech", icon: "Landmark", title: "Banking & FinTech" },
  { id: "real-estate", icon: "Building2", title: "Real Estate" },
  { id: "logistics", icon: "Truck", title: "Transport & Logistics" },
  { id: "food", icon: "UtensilsCrossed", title: "Food & Restaurants" },
  { id: "hospitality", icon: "Hotel", title: "Hotels & Hospitality" },
  { id: "legal", icon: "Scale", title: "Legal & Compliance" },
  { id: "agriculture", icon: "Leaf", title: "Agriculture & AgriTech" },
  { id: "government", icon: "Landmark", title: "Government & NGO" },
  { id: "ai-analytics", icon: "BrainCircuit", title: "AI & Data Analytics" },
  { id: "supply-chain", icon: "Boxes", title: "Supply Chain" },
  { id: "sports", icon: "Trophy", title: "Sports & Events" },
  { id: "insurance", icon: "ShieldCheck", title: "Insurance & Lending" },
  { id: "media", icon: "Clapperboard", title: "Gaming & Media" },
  { id: "telecom", icon: "Radio", title: "Telecom & IoT" },
  { id: "saas", icon: "Layers", title: "Custom SaaS Platforms" },
];

export const processSteps: ProcessStep[] = [
  { step: 1, title: "Free Site Visit", description: "We come to you, understand your exact requirements, and assess your needs — completely free, no commitment." },
  { step: 2, title: "Design & Quote", description: "A custom proposal with a fully transparent quote. No hidden charges, no surprises." },
  { step: 3, title: "You Choose", description: "Pick your features, configurations and integrations. We build it exactly the way you want it." },
  { step: 4, title: "We Build & Deploy", description: "Our team builds and deploys your system with precision — minimal disruption to your operations." },
  { step: 5, title: "Train & Support", description: "Full staff training, a complete walkthrough and dedicated 24/7 support long after go-live." },
];

export const techStack: TechCategory[] = [
  { category: "Frontend", icon: "MonitorSmartphone", items: ["React.js", "Next.js", "Vue.js", "Flutter", "Angular", "TypeScript"] },
  { category: "Backend", icon: "Server", items: ["Node.js", "Python / FastAPI", ".NET Core", "Java Spring", "Go / Gin", "GraphQL"] },
  { category: "Database", icon: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Firebase"] },
  { category: "Cloud / DevOps", icon: "Cloud", items: ["Microsoft Azure", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "AI & ML", icon: "Sparkles", items: ["Azure AI / Azure OpenAI", "OpenAI / GPT-4", "LangChain", "Hugging Face", "TensorFlow", "Vector DBs"] },
];

export const clients: Client[] = [
  { id: "silos", name: "Silos", industry: "E-Commerce Platform", url: "https://silos.in" },
  { id: "buildtone", name: "BuildTone", industry: "Real Estate", url: "https://www.buildtone.in" },
  { id: "limitless-hunch", name: "Limitless Hunch", industry: "Wholesale", url: "https://www.limitlesshunch.co.in" },
  { id: "limitless-interior", name: "Limitless Interior", industry: "Interior Design", url: "https://limitless-interior.vercel.app/" },
  { id: "vsd-college", name: "VSD College", industry: "Education ERP" },
  { id: "future-group", name: "Future Group", industry: "Coaching ERP" },
];

export const testimonials: Testimonial[] = [
  {
    id: "silos",
    name: "Silos",
    company: "Silos",
    industry: "E-Commerce",
    rating: 5,
    quote:
      "EduErpee built us a complete e-commerce platform. The team was fast, professional, and always available. Our online sales have grown 3x since launch.",
    solution: "Custom E-Commerce Platform",
    url: "https://silos.in",
  },
  {
    id: "buildtone",
    name: "BuildTone",
    company: "BuildTone",
    industry: "Real Estate & Construction",
    rating: 5,
    quote:
      "Our property portal looks premium and actually generates real leads now. EduErpee understood exactly what a construction business needs online.",
    solution: "Website & Property Portal",
    url: "https://www.buildtone.in",
  },
  {
    id: "limitless-hunch",
    name: "Limitless Hunch",
    company: "Limitless Hunch",
    industry: "Crockery & Gift Wholesale",
    rating: 5,
    quote:
      "The B2B wholesale portal has made ordering seamless for our retailers. Order volume increased and our team saves hours every week.",
    solution: "B2B Wholesale Portal",
    url: "https://www.limitlesshunch.co.in",
  },
  {
    id: "limitless-interior",
    name: "Limitless Interior",
    company: "Limitless Interior",
    industry: "Home Interior Design",
    rating: 5,
    quote:
      "Our interior showcase website is exactly what we envisioned. We receive regular client enquiries every week through it now.",
    solution: "Interior Showcase Website",
    url: "https://limitless-interior.vercel.app/",
  },
  {
    id: "vsd-college",
    name: "VSD College",
    company: "VSD College",
    industry: "Higher Education",
    rating: 5,
    quote:
      "Managing 1000+ students manually was a nightmare. EduErpee's college ERP — admissions, fees, library, transport — all in one. Staff productivity improved tremendously.",
    solution: "Complete College ERP",
  },
  {
    id: "future-group",
    name: "Future Group",
    company: "Future Group",
    industry: "Competitive Coaching",
    rating: 5,
    quote:
      "EduErpee's coaching ERP handles our entire student lifecycle — enrolment to performance tracking — all automated now.",
    solution: "Complete Coaching ERP",
  },
];

export const team: TeamMember[] = [
  {
    id: "sushil-jaiswal",
    name: "Sushil Jaiswal",
    role: "CEO & CTO",
    bio: "Leads EduErpee's vision, strategy and technology innovation, overseeing business operations and technology development.",
  },
  {
    id: "priya-kumari",
    name: "Priya Kumari",
    role: "Director – Human Resources",
    bio: "Leads HR planning, talent acquisition and team building, driving EduErpee's operational excellence and growth.",
  },
  {
    id: "uday-shankar-pandey",
    name: "Uday Shankar Pandey",
    role: "Chief Marketing Officer",
    bio: "Oversees digital marketing, branding, product promotion and market research, working closely with sales and product teams to drive growth.",
  },
  {
    id: "mridu-pandey",
    name: "Mridu Pandey",
    role: "Business Development Manager",
    bio: "Bridges business challenges and technology solutions by understanding client requirements and market trends.",
  },
  {
    id: "dharmendra-singh",
    name: "Dharmendra Singh",
    role: "Client Relationship Manager",
    bio: "Acts as the bridge between clients and technical teams, ensuring smooth communication and timely delivery.",
  },
  {
    id: "anil-jaiswal",
    name: "Anil Jaiswal",
    role: "Operations Delivery Manager",
    bio: "Ensures seamless execution of IT projects, aligning operational strategy with client expectations from resourcing through delivery.",
  },
];

export const trustStats = [
  { label: "Happy Clients", value: "100+" },
  { label: "Years Building", value: "10+" },
  { label: "Ready Products", value: "6+" },
  { label: "Support", value: "24/7" },
  { label: "Across Time Zones", value: "Global" },
];

export const contactInfo = {
  phone: "+91 96501 43654",
  email: "support@eduerpee.com",
  offices: [
    {
      label: "Registered Office",
      address: "519/216A, KATRA, Mubarak Pur, Azamgarh – Sadar, Uttar Pradesh, India – 276404",
    },
    {
      label: "Branch – Greater Noida",
      address: "Lower Ground Floor, Near Shiva Smart City-2, Talabpur Dadri, Gr. Noida, Uttar Pradesh – 203207",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61589485346019",
    instagram: "https://instagram.com/eduerpeetechnology",
    whatsapp: "https://wa.me/919650143654",
  },
};

export const whyChooseUs = [
  { title: "Affordable Without Cutting Corners", description: "Enterprise-grade software at prices that make sense for SMEs, schools and hospitals — no bloatware, only what's needed." },
  { title: "Built for India, GST-Compliant", description: "Hindi & English interface, GST billing, UPI payment support and local compliance built in from day one." },
  { title: "Fast Setup — Live in Days, Not Months", description: "Most clients go live within days. We handle setup, data migration, training and onboarding." },
  { title: "Local Offices, Real In-Person Support", description: "Branches in Azamgarh and Greater Noida — when on-site support is needed, the team comes to you." },
];
