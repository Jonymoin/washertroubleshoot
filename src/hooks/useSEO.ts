import { useEffect } from "react";
import {
  buildHeadModel,
  jsonLdString,
  siteWideJsonLd,
  type SeoConfig,
} from "@/lib/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMeta(attr: "name" | "property", key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

function upsertJsonLd(id: string, json: string | null) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (json) {
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = json;
  } else if (script) {
    script.remove();
  }
}

const OPTIONAL_METAS: Array<["name" | "property", string]> = [
  ["property", "og:image:type"],
  ["property", "og:image:width"],
  ["property", "og:image:height"],
  ["property", "article:published_time"],
];

/**
 * Keeps per-route <title>, meta description, canonical, Open Graph / Twitter
 * tags and JSON-LD in sync during client-side navigation. The same tags are
 * already written into the static HTML at build time (see scripts/prerender.mjs),
 * so crawlers and social scrapers do not depend on JavaScript.
 */
export function useSEO(seo: SeoConfig) {
  const key = JSON.stringify(seo);

  useEffect(() => {
    const model = buildHeadModel(seo);

    document.title = model.title;
    model.metas.forEach((m) => upsertMeta(m.attr, m.key, m.content));
    OPTIONAL_METAS.forEach(([attr, k]) => {
      if (!model.metas.some((m) => m.key === k)) removeMeta(attr, k);
    });

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (model.canonical) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", model.canonical);
    } else if (canonical) {
      canonical.remove();
    }

    upsertJsonLd("localbusiness-jsonld", jsonLdString(siteWideJsonLd()));
    upsertJsonLd(
      "route-jsonld",
      model.jsonLd.length
        ? jsonLdString(model.jsonLd.length === 1 ? model.jsonLd[0] : model.jsonLd)
        : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
