// Shared SEO constants, head-tag builders and JSON-LD (structured data) builders.
// Framework-free so it is used by BOTH the runtime `useSEO` hook and the
// build-time prerenderer (src/entry-server.tsx -> scripts/prerender.mjs).

export const SITE_URL = "https://washertroubleshootsg.com";
export const SITE_NAME = "Washertroubleshoot SG";
export const BUSINESS_PHONE = "+65 8413 0016";
export const BUSINESS_PHONE_E164 = "+6584130016";
export const BUSINESS_EMAIL = "washertroubleshootsg@gmail.com";
export const OG_IMAGE = `${SITE_URL}/opengraph.jpg`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  "Washertroubleshoot SG technician repairing a washing machine in Singapore";
export const SITE_LOCALE = "en_SG";

/** Single, truthful "last modified" date used in sitemap.xml. Bump when content changes. */
export const SITE_LASTMOD = "2026-10-27";

export type JsonLd = Record<string, unknown>;

export interface SeoConfig {
  title: string;
  description: string;
  /** Site-relative canonical path, e.g. "/services". */
  path: string;
  image?: string;
  imageAlt?: string;
  ogType?: "website" | "article";
  jsonLd?: JsonLd | JsonLd[];
  /** Only ever true for the 404 page. */
  noindex?: boolean;
  /** ISO date, used for article:published_time. */
  publishedTime?: string;
}

/** Absolute URL for a site-relative path. Home is "/", every other URL has NO trailing slash. */
export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean.length > 1 ? clean.replace(/\/+$/, "") : clean}`;
}

/** Appends the brand to a title only when the result stays within ~60 characters. */
export function buildTitle(base: string): string {
  const full = `${base} | ${SITE_NAME}`;
  return full.length <= 60 ? full : base;
}

/**
 * Builds a meta description of roughly 120-160 characters from a page-specific
 * sentence plus the longest call-to-action that still fits.
 */
export function buildDescription(lead: string, max = 160): string {
  const ctas = [
    ` Book in-home repair across Singapore — WhatsApp or call ${BUSINESS_PHONE}.`,
    ` Book in-home repair islandwide. Call ${BUSINESS_PHONE}.`,
    ` Call ${BUSINESS_PHONE}.`,
  ];
  for (const cta of ctas) {
    if (lead.length + cta.length <= max) return `${lead}${cta}`;
  }
  return lead;
}

/* ------------------------------------------------------------------ */
/* Head tag model                                                      */
/* ------------------------------------------------------------------ */

export interface MetaTag {
  attr: "name" | "property";
  key: string;
  content: string;
}

export interface HeadModel {
  title: string;
  metas: MetaTag[];
  /** null for noindex pages (no canonical is emitted). */
  canonical: string | null;
  jsonLd: JsonLd[];
}

export function buildHeadModel(seo: SeoConfig): HeadModel {
  const url = absoluteUrl(seo.path);
  const image = seo.image ?? OG_IMAGE;
  const imageAlt = seo.imageAlt ?? OG_IMAGE_ALT;
  const isDefaultImage = image === OG_IMAGE;
  const ogType = seo.ogType ?? "website";

  const metas: MetaTag[] = [
    { attr: "name", key: "description", content: seo.description },
    {
      attr: "name",
      key: "robots",
      content: seo.noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { attr: "property", key: "og:locale", content: SITE_LOCALE },
    { attr: "property", key: "og:site_name", content: SITE_NAME },
    { attr: "property", key: "og:type", content: ogType },
    { attr: "property", key: "og:title", content: seo.title },
    { attr: "property", key: "og:description", content: seo.description },
    { attr: "property", key: "og:url", content: url },
    { attr: "property", key: "og:image", content: image },
    { attr: "property", key: "og:image:alt", content: imageAlt },
    { attr: "name", key: "twitter:card", content: "summary_large_image" },
    { attr: "name", key: "twitter:title", content: seo.title },
    { attr: "name", key: "twitter:description", content: seo.description },
    { attr: "name", key: "twitter:image", content: image },
    { attr: "name", key: "twitter:image:alt", content: imageAlt },
  ];

  if (isDefaultImage) {
    metas.push(
      { attr: "property", key: "og:image:type", content: "image/jpeg" },
      { attr: "property", key: "og:image:width", content: String(OG_IMAGE_WIDTH) },
      { attr: "property", key: "og:image:height", content: String(OG_IMAGE_HEIGHT) }
    );
  }

  if (ogType === "article" && seo.publishedTime) {
    metas.push({
      attr: "property",
      key: "article:published_time",
      content: seo.publishedTime,
    });
  }

  const ld = seo.jsonLd ? (Array.isArray(seo.jsonLd) ? seo.jsonLd : [seo.jsonLd]) : [];

  return { title: seo.title, metas, canonical: seo.noindex ? null : url, jsonLd: ld };
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Serialises JSON-LD safely for inline <script> usage. */
export const jsonLdString = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

/** Static HTML for the managed <head> region (used by the prerenderer). */
export function headModelToHtml(model: HeadModel): string {
  const lines: string[] = [];
  lines.push(`<title>${escapeHtml(model.title)}</title>`);
  for (const m of model.metas) {
    lines.push(`<meta ${m.attr}="${m.key}" content="${escapeHtml(m.content)}" />`);
  }
  if (model.canonical) {
    lines.push(`<link rel="canonical" href="${escapeHtml(model.canonical)}" />`);
  }
  lines.push(
    `<script id="localbusiness-jsonld" type="application/ld+json">${jsonLdString(siteWideJsonLd())}</script>`
  );
  if (model.jsonLd.length) {
    lines.push(
      `<script id="route-jsonld" type="application/ld+json">${jsonLdString(
        model.jsonLd.length === 1 ? model.jsonLd[0] : model.jsonLd
      )}</script>`
    );
  }
  return lines.join("\n    ");
}

/* ------------------------------------------------------------------ */
/* JSON-LD builders                                                    */
/* ------------------------------------------------------------------ */

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Site-wide structured data: LocalBusiness + WebSite, injected on every page.
 * Only facts that already appear on the website are used (no invented
 * ratings, addresses or social profiles).
 */
export function siteWideJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": BUSINESS_ID,
        name: SITE_NAME,
        alternateName: "Washertroubleshoot Singapore",
        description:
          "In-home washing machine repair and deep cleaning across Singapore for all major brands, with transparent pricing.",
        url: `${SITE_URL}/`,
        image: OG_IMAGE,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.webp`,
          width: 256,
          height: 256,
        },
        telephone: BUSINESS_PHONE_E164,
        email: BUSINESS_EMAIL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Singapore",
          addressCountry: "SG",
        },
        areaServed: { "@type": "Country", name: "Singapore" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: BUSINESS_PHONE_E164,
          contactType: "customer service",
          areaServed: "SG",
          availableLanguage: "English",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "22:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: "en-SG",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

/** Kept for backwards compatibility with earlier code. */
export const localBusinessJsonLd = siteWideJsonLd;

/** BreadcrumbList structured data for a page's position in the site hierarchy. */
export function breadcrumbListJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** WebPage-family structured data (WebPage, AboutPage, ContactPage, CollectionPage...). */
export function webPageJsonLd(opts: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  name: string;
  description: string;
  path: string;
}): JsonLd {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-SG",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
  };
}

/** Service structured data for a brand or problem repair page. */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  brand?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(opts.path)}#service`,
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    ...(opts.brand ? { brand: { "@type": "Brand", name: opts.brand } } : {}),
    image: OG_IMAGE,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: "Singapore" },
    url: absoluteUrl(opts.path),
  };
}

/** BlogPosting structured data for an individual article. */
export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}): JsonLd {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: [OG_IMAGE],
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    inLanguage: "en-SG",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` },
    },
  };
}

/** ItemList structured data (used for the services and blog index pages). */
export function itemListJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
