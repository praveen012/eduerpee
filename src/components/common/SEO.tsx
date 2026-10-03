import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n/I18nProvider";
import { languages } from "@/i18n/config";

const SITE_URL = "https://www.eduerpee.com";

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Absolute URL to a page-specific share image. Defaults to the site-wide og-image.png (1200x630). */
  image?: string;
  /** Set for content pages that shouldn't be indexed (e.g. internal/empty states). Defaults to indexable. */
  noindex?: boolean;
}

export function SEO({ title, description, path = "/", jsonLd, image, noindex = false }: SEOProps) {
  const { lang, dir } = useI18n();
  const canonical = `${SITE_URL}/${lang}${path === "/" ? "" : path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang={lang} dir={dir} />
      <title>{`${title} | EduErpee Technology`}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={lang} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdList.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
