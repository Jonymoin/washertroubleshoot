// Shared SEO constants and JSON-LD (structured data) builders.
// Kept framework-free so it can be used from any page component
// together with the `useSEO` hook (see src/hooks/useSEO.ts).

export const SITE_URL = "https://washertroubleshootsg.com";
export const SITE_NAME = "Washertroubleshoot SG";
export const BUSINESS_PHONE = "+65 8413 0016";
export const BUSINESS_PHONE_E164 = "+6584130016";
export const BUSINESS_EMAIL = "washertroubleshootsg@gmail.com";
export const OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

export type JsonLd = Record<string, unknown>;

/** Builds an absolute URL for the given site-relative path (e.g. "/services"). */
export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** LocalBusiness structured data, injected once site-wide (see Layout.tsx). */
export function localBusinessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: OG_IMAGE,
    logo: `${SITE_URL}/logo.webp`,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    areaServed: {
      "@type": "Country",
      name: "Singapore",
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
  };
}

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

/** Service structured data for a brand or problem repair page. */
export function serviceJsonLd(opts: { name: string; description: string; path: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    url: absoluteUrl(opts.path),
  };
}

/** Article structured data for an individual blog post page. */
export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    mainEntityOfPage: absoluteUrl(opts.path),
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` },
    },
  };
}
