import { useEffect } from "react";
import { OG_IMAGE, absoluteUrl, type JsonLd } from "@/lib/seo";

interface UseSEOOptions {
  /** Document <title>. */
  title: string;
  /** <meta name="description">. */
  description: string;
  /** Site-relative canonical path, e.g. "/services" or "/brands/samsung". */
  path: string;
  /** Absolute image URL for og:image / twitter:image. Defaults to /opengraph.jpg. */
  image?: string;
  /** Optional JSON-LD object (or array of objects) to inject for this route. */
  jsonLd?: JsonLd | JsonLd[];
  /** Set true for pages that should not be indexed (e.g. 404). */
  noindex?: boolean;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Sets per-route title, meta description, canonical link, Open Graph /
 * Twitter tags, and (optionally) a JSON-LD structured data block.
 * Designed for a client-rendered SPA with no SSR: it mutates document.head
 * on mount / whenever its inputs change.
 */
export function useSEO({ title, description, path, image = OG_IMAGE, jsonLd, noindex }: UseSEOOptions) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const url = absoluteUrl(path);

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:type", "website");

    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    const scriptId = "route-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLdKey) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = jsonLdKey;
    } else if (script) {
      script.remove();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, jsonLdKey, noindex]);
}
