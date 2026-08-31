import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n/I18nProvider";
import { languages } from "@/i18n/config";

const SITE_URL = "https://www.eduerpee.com";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: Record<string, unknown>;
}

export function SEO({ title, description, path = "/", jsonLd }: SEOProps) {
  const { lang, dir } = useI18n();
  const canonical = `${SITE_URL}/${lang}${path === "/" ? "" : path}`;

  return (
    <Helmet>
      <html lang={lang} dir={dir} />
      <title>{`${title} | EduErpee Technology`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {languages
        .filter((l) => l.implemented)
        .map((l) => (
          <link
            key={l.code}
            rel="alternate"
            hrefLang={l.code}
            href={`${SITE_URL}/${l.code}${path === "/" ? "" : path}`}
          />
        ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en${path === "/" ? "" : path}`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="EduErpee Technology" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
