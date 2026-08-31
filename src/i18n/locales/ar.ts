import type { Dictionary } from "./en";

// Arabic — right-to-left. Reviewed for direction only; extend with a
// professional linguistic review before shipping to production.
const ar: Dictionary = {
  nav: {
    solutions: "الحلول",
    services: "الخدمات",
    industries: "القطاعات",
    technologies: "التقنيات",
    company: "الشركة",
    contact: "تواصل معنا",
    getConsultation: "استشارة مجانية",
    bookDemo: "احجز عرضًا تجريبيًا",
  },
  hero: {
    eyebrow: "الذكاء الاصطناعي · Microsoft Azure · ERP مخصص · برمجيات",
    headlinePart1: "ابنِ بذكاء.",
    headlinePart2: "أتمِت بسرعة.",
    headlinePart3: "انمُ بلا حدود.",
    subhead:
      "تساعد EduErpee Technology الشركات على تحويل الأفكار إلى حلول رقمية آمنة وقابلة للتوسع وذكية — من البرمجيات المخصصة ومنصات ERP إلى الذكاء الاصطناعي والسحابة والأتمتة.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "استكشف الحلول",
  },
  trust: { heading: "موثوق به من شركات في مختلف القطاعات" },
  clientShowcase: {
    eyebrow: "عملاؤنا",
    heading: "شركات ساعدناها على بناء تقنية أفضل",
    description: "عملاء حقيقيون، شراكات حقيقية — من منصات التجارة الإلكترونية إلى المؤسسات التعليمية.",
  },
  about: {
    eyebrow: "عن EduErpee",
    heading: "تقنية تحل مشكلات الأعمال الحقيقية",
    description:
      "شركة EduErpee Technology Private Limited مزوّد متكامل لحلول تقنية المعلومات، متخصصة في تطوير الذكاء الاصطناعي وحلول Microsoft Azure السحابية وأنظمة ERP المخصصة وتعزيز فرق تقنية المعلومات (IT Staff Augmentation) — شريك موثوق لأكثر من 100 مؤسسة في قطاعات التعليم والرعاية الصحية والتجزئة والشركات.",
  },
  solutions: {
    eyebrow: "منتجات جاهزة للتشغيل",
    heading: "حلول تقنية مصممة حول عملك",
    description: "توقف عن الدفع مقابل ميزات لا تحتاجها. كل منتج مبني لعمليات تجارية حقيقية، ويمكن تخصيصه بالكامل ليطابق طريقة عمل فريقك.",
    exploreCta: "استكشف الحل",
  },
  services: { eyebrow: "خدمات تقنية معلومات شاملة", heading: "كل خدمة رقمية تحت سقف واحد" },
  industries: { eyebrow: "القطاعات التي نخدمها", heading: "حللنا مشكلات في قطاعك" },
  technologies: {
    eyebrow: "المنظومة التقنية",
    heading: "تقنية مثبتة الجدوى، اختيرت من أجل الاستمرارية",
    description: "أدوات اختيرت للأداء والأمان وسهولة الصيانة على المدى الطويل — لا لمجرد كونها رائجة هذا الفصل.",
  },
  why: {
    eyebrow: "لماذا EduErpee",
    heading: "شريكك التقني، لا مجرد مورّد",
    description: "شركة محلية في أوتار براديش، تتحدث EduErpee لغة العميل، وتفهم السوق، ويمكنها زيارتك شخصيًا عند الحاجة.",
  },
  process: { eyebrow: "عملية بسيطة", heading: "من أول اتصال إلى الإطلاق في خمس خطوات" },
  testimonials: { eyebrow: "عملاء سعداء", heading: "شركات حقيقية، نتائج حقيقية", viewAll: "عرض كل قصص النجاح" },
  team: { eyebrow: "قيادتنا", heading: "الفريق وراء نجاحك" },
  caseStudies: { eyebrow: "دراسات الحالة", heading: "شركات حقيقية، نتائج حقيقية" },
  globalPresence: {
    eyebrow: "تسليم عالمي",
    heading: "تقنية بلا حدود",
    description: "نقدّم حلولاً تقنية للشركات عبر الحدود والقطاعات والمناطق الزمنية — بمكاتب مسجلة وفروع في أوتار براديش، الهند.",
  },
  footerCta: {
    heading: "هل أنت مستعد لتحويل عملك؟",
    description: "لنبنِ معًا تقنية آمنة وقابلة للتوسع وذكية تدفع عملك إلى الأمام.",
    primary: "ابدأ مشروعك",
    secondary: "تحدث مع خبير",
  },
  ecosystem: { exploreService: "استكشف الخدمة ←" },
  legal: {
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    cookie: "سياسة ملفات تعريف الارتباط",
    disclaimer: "إخلاء المسؤولية",
    refund: "سياسة الاسترداد",
  },
  contact: {
    eyebrow: "تواصل معنا",
    heading: "لنبنِ شيئًا رائعًا معًا",
    sub: "احجز عرضًا تجريبيًا مجانيًا، أو ناقش متطلباتك، أو زُر أحد مكاتبنا. نرد خلال 24 ساعة.",
    formHeading: "اطلب استشارة مجانية",
    name: "الاسم الكامل",
    company: "اسم الشركة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    country: "الدولة",
    serviceRequired: "الخدمة المطلوبة",
    budget: "نطاق الميزانية",
    message: "رسالتك",
    submit: "إرسال الطلب",
    submitting: "جارٍ الإرسال…",
    success: "شكرًا — تم استلام طلبك. سنتواصل معك خلال 24 ساعة.",
  },
  footer: {
    tagline: "بسّط. أتمِت. انمُ.",
    solutions: "الحلول",
    services: "الخدمات",
    company: "الشركة",
    contact: "تواصل",
    legal: "قانوني",
    rights: "جميع الحقوق محفوظة.",
    newsletter: "اشترك لتصلك تحديثات المنتج ورؤى تقنية.",
    subscribe: "اشترك",
  },
  notFound: { heading: "يبدو أن هذه الصفحة سلكت طريقًا مختلفًا.", cta: "العودة إلى الرئيسية" },
};

export default ar;
