import { useMemo } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { blogPostTranslations } from "@/data/blogPostTranslations";

/**
 * English (blogPosts.ts) is the single source of truth for shape/slug/date/
 * author. This overlays the current language's translated title, description,
 * category and body from blogPostTranslations.ts, the same fallback pattern
 * as useLocalizedContent.ts — a post or language missing a translation
 * silently falls back to English rather than breaking the page.
 */
export function useLocalizedBlogPosts(): BlogPost[] {
  const { lang } = useI18n();
  return useMemo(
    () =>
      blogPosts.map((post) => {
        const o = blogPostTranslations[post.slug]?.[lang];
        return o ? { ...post, title: o.title, description: o.description, category: o.category, readTime: o.readTime, body: o.body } : post;
      }),
    [lang],
  );
}

export function useLocalizedBlogPost(slug: string | undefined): BlogPost | undefined {
  const { lang } = useI18n();
  return useMemo(() => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return undefined;
    const o = blogPostTranslations[post.slug]?.[lang];
    return o ? { ...post, title: o.title, description: o.description, category: o.category, readTime: o.readTime, body: o.body } : post;
  }, [slug, lang]);
}
