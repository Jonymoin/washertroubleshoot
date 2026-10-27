// Single source of truth for every route's SEO data (title, description,
// canonical path, JSON-LD). Used by the pages (via `useSEO`) and by the
// build-time prerenderer + sitemap generator.

import {
  SITE_NAME,
  buildDescription,
  buildTitle,
  breadcrumbListJsonLd,
  itemListJsonLd,
  serviceJsonLd,
  articleJsonLd,
  webPageJsonLd,
  type SeoConfig,
} from "@/lib/seo";
import { brands, problems, findEntry, type RepairEntry } from "@/pages/repair-data";
import { articles, findArticle } from "@/pages/blog-data";

/** Optional hand-written meta descriptions where the on-page intro is too long. */
const descriptionOverrides: Record<string, string> = {
  "deep-cleaning-service":
    "Professional washing machine deep cleaning in Singapore. We remove mould, odour and detergent buildup at your home. WhatsApp or call +65 8413 0016.",
};

export function repairEntrySeo(entry: RepairEntry, kind: "brand" | "problem"): SeoConfig {
  const path = kind === "brand" ? `/brands/${entry.slug}` : `/problems/${entry.slug}`;
  const description =
    descriptionOverrides[entry.slug] ?? buildDescription(entry.intro);

  return {
    title: buildTitle(entry.title),
    description,
    path,
    jsonLd: [
      serviceJsonLd({
        name: entry.title,
        description: entry.intro,
        path,
        brand: kind === "brand" ? entry.name : undefined,
      }),
      breadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: entry.title, path },
      ]),
    ],
  };
}

export function blogPostSeo(slug: string): SeoConfig | undefined {
  const article = findArticle(slug);
  if (!article) return undefined;
  const path = `/blog/${article.slug}`;
  const suffixes = [
    ` Tips from the ${SITE_NAME} repair team in Singapore.`,
    ` Tips from the ${SITE_NAME} team.`,
    ` Tips from ${SITE_NAME}.`,
  ];
  const description =
    article.summary +
    (suffixes.find((x) => article.summary.length + x.length <= 160) ?? "");
  return {
    title: buildTitle(article.title),
    description,
    path,
    ogType: "article",
    publishedTime: article.isoDate,
    jsonLd: [
      articleJsonLd({
        title: article.title,
        description: article.summary,
        path,
        datePublished: article.isoDate,
      }),
      breadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: article.title, path },
      ]),
    ],
  };
}

export const notFoundSeo: SeoConfig = {
  title: "Page Not Found | Washertroubleshoot SG",
  description:
    "The page you are looking for could not be found. Browse our washing machine repair services in Singapore or contact us on WhatsApp.",
  path: "/404",
  noindex: true,
};

const staticRoutes: Record<string, SeoConfig> = {
  "/": {
    title: "Washing Machine Repair Singapore | Washertroubleshoot SG",
    description:
      "Fast, reliable washing machine repair across Singapore. All major brands fixed at home with transparent pricing — WhatsApp or call for same-day service.",
    path: "/",
    jsonLd: webPageJsonLd({
      name: "Washing Machine Repair Singapore",
      description:
        "In-home washing machine repair and deep cleaning across Singapore for all major brands.",
      path: "/",
    }),
  },
  "/services": {
    title: "Washing Machine Repair Services Singapore",
    description:
      "Browse washing machine repair services in Singapore by brand or problem: not draining, not spinning, leaking, noise, error codes and more. Book today.",
    path: "/services",
    jsonLd: [
      webPageJsonLd({
        type: "CollectionPage",
        name: "Washing Machine Repair Services in Singapore",
        description:
          "Washing machine repair services in Singapore by brand and by problem.",
        path: "/services",
      }),
      breadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
      itemListJsonLd([
        ...problems.map((p) => ({ name: p.name, path: `/problems/${p.slug}` })),
        ...brands.map((b) => ({ name: b.title, path: `/brands/${b.slug}` })),
      ]),
    ],
  },
  "/about": {
    title: "About Washertroubleshoot SG | Washing Machine Repair",
    description:
      "Meet Washertroubleshoot SG, a trusted washing machine repair team helping homes across Singapore with honest diagnostics and quality workmanship.",
    path: "/about",
    jsonLd: [
      webPageJsonLd({
        type: "AboutPage",
        name: "About Washertroubleshoot SG",
        description:
          "A trusted washing machine repair team helping homes across Singapore.",
        path: "/about",
      }),
      breadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  },
  "/contact": {
    title: "Contact Us | Book Washing Machine Repair Singapore",
    description:
      "Contact Washertroubleshoot SG for washing machine repair in Singapore. WhatsApp or call +65 8413 0016 for a fast quote and same-day visits.",
    path: "/contact",
    jsonLd: [
      webPageJsonLd({
        type: "ContactPage",
        name: "Contact Washertroubleshoot SG",
        description:
          "Contact us for washing machine repair in Singapore by WhatsApp, phone or email.",
        path: "/contact",
      }),
      breadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  },
  "/blog": {
    title: "Washing Machine Troubleshooting Tips & Advice",
    description:
      "Practical washing machine troubleshooting and maintenance tips from Washertroubleshoot SG: drainage issues, error codes, cleaning and repair-vs-replace advice.",
    path: "/blog",
    jsonLd: [
      webPageJsonLd({
        type: "CollectionPage",
        name: "Washing Machine Troubleshooting Tips & Advice",
        description:
          "Troubleshooting and maintenance guides for washing machines in Singapore.",
        path: "/blog",
      }),
      breadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
      itemListJsonLd(articles.map((a) => ({ name: a.title, path: `/blog/${a.slug}` }))),
    ],
  },
  "/privacy-policy": {
    title: "Privacy Policy | Washertroubleshoot SG",
    description:
      "Read how Washertroubleshoot SG collects, uses and protects your personal data when you use our washing machine repair services in Singapore.",
    path: "/privacy-policy",
    jsonLd: [
      webPageJsonLd({
        name: "Privacy Policy",
        description: "How Washertroubleshoot SG handles your personal data.",
        path: "/privacy-policy",
      }),
      breadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ]),
    ],
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Washertroubleshoot SG",
    description:
      "Terms and conditions governing the use of the Washertroubleshoot SG website and washing machine repair services in Singapore.",
    path: "/terms-and-conditions",
    jsonLd: [
      webPageJsonLd({
        name: "Terms & Conditions",
        description: "Terms for using Washertroubleshoot SG services.",
        path: "/terms-and-conditions",
      }),
      breadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "Terms & Conditions", path: "/terms-and-conditions" },
      ]),
    ],
  },
};

/** SEO config for a static route. Throws on unknown paths so typos fail loudly. */
export function staticSeo(path: string): SeoConfig {
  const seo = staticRoutes[path];
  if (!seo) throw new Error(`No SEO config for static route: ${path}`);
  return seo;
}

export function brandSeo(slug: string): SeoConfig {
  const entry = findEntry(brands, slug);
  if (!entry) throw new Error(`Unknown brand: ${slug}`);
  return repairEntrySeo(entry, "brand");
}

export function problemSeo(slug: string): SeoConfig {
  const entry = findEntry(problems, slug);
  if (!entry) throw new Error(`Unknown problem: ${slug}`);
  return repairEntrySeo(entry, "problem");
}

/** Every indexable route (used by the sitemap + prerenderer). */
export function getAllRoutes(): SeoConfig[] {
  return [
    ...Object.values(staticRoutes),
    ...articles.map((a) => blogPostSeo(a.slug)!),
    ...brands.map((b) => repairEntrySeo(b, "brand")),
    ...problems.map((p) => repairEntrySeo(p, "problem")),
  ];
}
