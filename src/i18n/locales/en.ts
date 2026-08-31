export interface Dictionary {
  nav: {
    solutions: string;
    services: string;
    industries: string;
    technologies: string;
    company: string;
    contact: string;
    getConsultation: string;
    bookDemo: string;
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trust: { heading: string };
  clientShowcase: { eyebrow: string; heading: string; description: string };
  about: { eyebrow: string; heading: string; description: string };
  solutions: { eyebrow: string; heading: string; description: string; exploreCta: string };
  services: { eyebrow: string; heading: string };
  industries: { eyebrow: string; heading: string };
  technologies: { eyebrow: string; heading: string; description: string };
  why: { eyebrow: string; heading: string; description: string };
  process: { eyebrow: string; heading: string };
  testimonials: { eyebrow: string; heading: string; viewAll: string };
  team: { eyebrow: string; heading: string };
  caseStudies: { eyebrow: string; heading: string };
  globalPresence: { eyebrow: string; heading: string; description: string };
  footerCta: { heading: string; description: string; primary: string; secondary: string };
  ecosystem: { exploreService: string };
  legal: { privacy: string; terms: string; cookie: string; disclaimer: string; refund: string };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    formHeading: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    serviceRequired: string;
    budget: string;
    message: string;
    submit: string;
    submitting: string;
    success: string;
  };
  footer: {
    tagline: string;
    solutions: string;
    services: string;
    company: string;
    contact: string;
    legal: string;
    rights: string;
    newsletter: string;
    subscribe: string;
  };
  notFound: { heading: string; cta: string };
}

const en: Dictionary = {
  nav: {
    solutions: "Solutions",
    services: "Services",
    industries: "Industries",
    technologies: "Technologies",
    company: "Company",
    contact: "Contact",
    getConsultation: "Get Free Consultation",
    bookDemo: "Book a Demo",
  },
  hero: {
    eyebrow: "AI · Microsoft Azure · Custom ERP · Software",
    headlinePart1: "Build Smarter.",
    headlinePart2: "Automate Faster.",
    headlinePart3: "Grow Without Limits.",
    subhead:
      "EduErpee Technology helps businesses transform ideas into secure, scalable and intelligent digital solutions — from custom software and ERP platforms to AI, cloud and automation.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "Explore Solutions",
  },
  trust: {
    heading: "Trusted by Businesses Across Industries",
  },
  clientShowcase: {
    eyebrow: "Our Clients",
    heading: "Businesses We've Helped Build Better Technology",
    description: "Real clients, real partnerships — from e-commerce platforms to educational institutions.",
  },
  about: {
    eyebrow: "About EduErpee",
    heading: "Technology That Solves Real Business Problems",
    description:
      "EduErpee Technology Private Limited is a full-service IT solutions provider specialising in AI development, Microsoft Azure cloud solutions, custom ERP systems and IT staff augmentation — grown into a trusted partner for 100+ organisations across education, healthcare, retail and enterprise sectors.",
  },
  solutions: {
    eyebrow: "Ready-to-Deploy Products",
    heading: "Technology Solutions Built Around Your Business",
    description:
      "Stop paying for features that don't fit. Every product below is built for real business operations and can be fully customised to match how a team actually works.",
    exploreCta: "Explore Solution",
  },
  services: {
    eyebrow: "End-to-End IT Services",
    heading: "Every Digital Service Under One Roof",
  },
  industries: {
    eyebrow: "Industries We Serve",
    heading: "We've Solved Problems In Your Industry",
  },
  technologies: {
    eyebrow: "Technology Ecosystem",
    heading: "Industry-Proven Technology, Selected For Longevity",
    description: "Tools chosen for performance, security and long-term maintainability — not what's trending this quarter.",
  },
  why: {
    eyebrow: "Why Choose EduErpee",
    heading: "Your Technology Partner, Not Just Another Vendor",
    description:
      "Local to Uttar Pradesh, EduErpee speaks the client's language, understands the market, and can visit in person whenever needed.",
  },
  process: {
    eyebrow: "Simple Process",
    heading: "From First Call to Go-Live in Five Steps",
  },
  testimonials: {
    eyebrow: "Happy Customers",
    heading: "Real Businesses, Real Results",
    viewAll: "View All Success Stories",
  },
  team: {
    eyebrow: "Our Leadership",
    heading: "The People Behind Your Success",
  },
  caseStudies: {
    eyebrow: "Case Studies",
    heading: "Real Businesses, Real Results",
  },
  globalPresence: {
    eyebrow: "Global Delivery",
    heading: "Technology Without Borders",
    description:
      "Delivering technology solutions for businesses across borders, industries and time zones — with registered and branch offices in Uttar Pradesh, India.",
  },
  footerCta: {
    heading: "Ready to Transform Your Business?",
    description: "Let's build secure, scalable and intelligent technology that moves the business forward.",
    primary: "Start Your Project",
    secondary: "Talk to an Expert",
  },
  ecosystem: {
    exploreService: "Explore Service →",
  },
  legal: {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    cookie: "Cookie Policy",
    disclaimer: "Disclaimer",
    refund: "Refund Policy",
  },
  contact: {
    eyebrow: "Get in Touch",
    heading: "Let's Build Something Amazing Together",
    sub: "Book a free demo, discuss your requirements, or visit an office. We respond within 24 hours.",
    formHeading: "Request a Free Consultation",
    name: "Full Name",
    company: "Company Name",
    email: "Email Address",
    phone: "Phone Number",
    country: "Country",
    serviceRequired: "Service Required",
    budget: "Budget Range",
    message: "Your Message",
    submit: "Send My Request",
    submitting: "Sending…",
    success: "Thanks — your request has been received. We'll be in touch within 24 hours.",
  },
  footer: {
    tagline: "Simplify. Automate. Grow.",
    solutions: "Solutions",
    services: "Services",
    company: "Company",
    contact: "Contact",
    legal: "Legal",
    rights: "All rights reserved.",
    newsletter: "Subscribe for product updates and technology insights.",
    subscribe: "Subscribe",
  },
  notFound: {
    heading: "Looks like this page took a different route.",
    cta: "Back to Home",
  },
};

export default en;
