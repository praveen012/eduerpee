import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/common/Container";
import { useI18n } from "@/i18n/I18nProvider";
import { contactInfo } from "@/data/content";
import { primaryNav } from "@/data/nav";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from "@/components/common/SocialIcons";

export function Footer() {
  const { t, lang } = useI18n();
  const withLang = (href: string) => `/${lang}${href === "/" ? "" : href}`;
  const solutions = primaryNav.find((n) => n.label === "Solutions")?.children ?? [];
  const services = primaryNav.find((n) => n.label === "Services")?.children ?? [];

  return (
    <footer className="bg-navy-950 text-mist-200">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <img src="/logo-wordmark-dark.png" alt="EduErpee Technology" className="h-11 w-auto" />
            <p className="mt-4 text-[13.5px] leading-relaxed text-mist-200/60 max-w-xs">
              {t.footer.tagline} EduErpee Technology Private Limited delivers ERP, software, cloud and
              AI solutions for businesses across USA, EU and India.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-md bg-white/5 p-2 hover:bg-[var(--color-copper)] hover:text-white transition-colors">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md bg-white/5 p-2 hover:bg-[var(--color-copper)] hover:text-white transition-colors">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md bg-white/5 p-2 hover:bg-[var(--color-copper)] hover:text-white transition-colors">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-md bg-white/5 p-2 hover:bg-[var(--color-copper)] hover:text-white transition-colors">
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-md bg-white/5 p-2 hover:bg-[var(--color-copper)] hover:text-white transition-colors">
                <WhatsappIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-200/40">
              {t.footer.solutions}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {solutions.map((s) => (
                <li key={s.label}>
                  <Link to={withLang(s.href)} className="text-[13.5px] text-mist-200/70 hover:text-brand-orange transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-200/40">
              {t.footer.services}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={withLang(s.href)} className="text-[13.5px] text-mist-200/70 hover:text-brand-orange transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-200/40">
              {t.footer.company}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                ["About Us", "/about"],
                ["Locations", "/locations"],
                ["Case Studies", "/case-studies"],
                ["Our Team", "/team"],
                ["Careers", "/careers"],
                ["Blog", "/blog"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={withLang(href)} className="text-[13.5px] text-mist-200/70 hover:text-brand-orange transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-200/40">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-[13.5px] text-mist-200/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-orange" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>{contactInfo.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-orange" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-orange" />
                <span>Azamgarh &amp; Greater Noida, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-mist-200/40">
            © {new Date().getFullYear()} EduErpee Technology Private Limited. {t.footer.rights}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-mist-200/50">
            <Link to={withLang("/privacy-policy")} className="hover:text-mist-100">Privacy Policy</Link>
            <Link to={withLang("/terms-and-conditions")} className="hover:text-mist-100">Terms &amp; Conditions</Link>
            <Link to={withLang("/cookie-policy")} className="hover:text-mist-100">Cookie Policy</Link>
            <Link to={withLang("/disclaimer")} className="hover:text-mist-100">Disclaimer</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
