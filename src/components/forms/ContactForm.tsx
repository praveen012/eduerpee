import { useState, type FormEvent } from "react";
import { CheckCircle2, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";
import { trackEvent } from "@/utils/analytics";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  budget: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  budget: "",
  message: "",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const serviceOptions = [
  "AI Development & Automation",
  "Cloud & DevOps (Azure)",
  "IT Staff Augmentation",
  "Custom Software Development",
  "School Management System",
  "Inventory Management",
  "Library Management System",
  "Transportation Management",
  "Doctor Clinic Software",
  "Website Design & Development",
  "Mobile App Development",
  "Digital Marketing & SEO",
  "UI/UX Design",
  "ERP Consulting",
];

export function ContactForm() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!emailRe.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 8) next.phone = "Enter a valid phone number.";
    if (!form.service) next.service = "Select the service you need.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Tell us a little more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // NOTE: wire this up to a real backend endpoint (see README) — this demo
    // client only performs validation + sanitisation-ready structuring.
    // Never send secrets from the frontend; the API layer should hold the
    // CAPTCHA/Turnstile secret and rate-limit by IP.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    // The real conversion event — fires only after successful submission,
    // with which service they picked so you can see which offering
    // actually drives contact requests (e.g. AI vs. staff augmentation).
    trackEvent("generate_lead", { service_requested: form.service || "unspecified" });
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-domain-security/30 bg-domain-security/5 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-domain-security" />
        <p className="max-w-sm text-[14px] text-ink-700 dark:text-mist-200">{t.contact.success}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
      <form onSubmit={onSubmit} noValidate className="lg:col-span-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-navy-900 p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100">
          {t.contact.formHeading}
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={t.contact.name} error={errors.name}>
            <input value={form.name} onChange={update("name")} className={inputClass(!!errors.name)} />
          </Field>
          <Field label={t.contact.company}>
            <input value={form.company} onChange={update("company")} className={inputClass(false)} />
          </Field>
          <Field label={t.contact.email} error={errors.email}>
            <input type="email" value={form.email} onChange={update("email")} className={inputClass(!!errors.email)} />
          </Field>
          <Field label={t.contact.phone} error={errors.phone}>
            <input type="tel" value={form.phone} onChange={update("phone")} className={inputClass(!!errors.phone)} />
          </Field>
          <Field label={t.contact.country}>
            <input value={form.country} onChange={update("country")} className={inputClass(false)} />
          </Field>
          <Field label={t.contact.budget}>
            <select value={form.budget} onChange={update("budget")} className={inputClass(false)}>
              <option value="">Select…</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 – ₹2,00,000</option>
              <option>₹2,00,000 – ₹10,00,000</option>
              <option>Above ₹10,00,000</option>
            </select>
          </Field>
          <Field label={t.contact.serviceRequired} error={errors.service} className="sm:col-span-2">
            <select value={form.service} onChange={update("service")} className={inputClass(!!errors.service)}>
              <option value="">Select a product or service…</option>
              {serviceOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
          <Field label={t.contact.message} error={errors.message} className="sm:col-span-2">
            <textarea rows={4} value={form.message} onChange={update("message")} className={inputClass(!!errors.message)} />
          </Field>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-6 w-full rounded-md bg-brand-orange px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-orange-dark disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? t.contact.submitting : t.contact.submit}
        </button>
      </form>

      <div className="lg:col-span-2 space-y-5">
        {contactInfo.offices.map((office) => (
          <div key={office.label} className="rounded-lg border border-ink-900/10 dark:border-white/10 p-5">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-ink-900 dark:text-mist-100">
              <MapPin className="h-4 w-4 text-brand-orange" /> {office.label}
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-500 dark:text-mist-200/70">
              {office.address}
            </p>
          </div>
        ))}
        <div className="rounded-lg border border-ink-900/10 dark:border-white/10 p-5 space-y-3">
          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-[13.5px] text-ink-800 dark:text-mist-200 hover:text-brand-orange">
            <Phone className="h-4 w-4 text-brand-orange" /> {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-[13.5px] text-ink-800 dark:text-mist-200 hover:text-brand-orange">
            <Mail className="h-4 w-4 text-brand-orange" /> {contactInfo.email}
          </a>
          <a href={contactInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13.5px] text-ink-800 dark:text-mist-200 hover:text-brand-orange">
            <MessageCircle className="h-4 w-4 text-brand-orange" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border bg-mist-50 dark:bg-navy-950 px-3.5 py-2.5 text-[13.5px] text-ink-900 dark:text-mist-100 outline-none transition-colors focus:border-brand-orange ${
    hasError ? "border-red-400" : "border-ink-900/12 dark:border-white/12"
  }`;
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[12.5px] font-medium text-ink-700 dark:text-mist-200/80">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-[11.5px] text-red-500">{error}</span>}
    </label>
  );
}
