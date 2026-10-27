// Build-time (SSR) entry used ONLY by scripts/prerender.mjs.
import { renderToString } from "react-dom/server";
import App from "./App";
import { buildHeadModel, headModelToHtml, absoluteUrl, SITE_URL, SITE_LASTMOD } from "./lib/seo";
import { getAllRoutes, notFoundSeo } from "./lib/route-seo";
import { articles } from "./pages/blog-data";

export function getRoutes() {
  return getAllRoutes().map((seo) => ({
    path: seo.path,
    head: headModelToHtml(buildHeadModel(seo)),
    seo,
  }));
}

export function renderRoute(path: string) {
  return renderToString(<App ssrPath={path} />);
}

export function renderNotFound() {
  return {
    html: renderToString(<App ssrPath="/404" />),
    head: headModelToHtml(buildHeadModel(notFoundSeo)),
  };
}

export function buildSitemap() {
  const lastmodFor = (path: string) => {
    const post = articles.find((a) => `/blog/${a.slug}` === path);
    return post ? post.isoDate : SITE_LASTMOD;
  };
  const urls = getAllRoutes()
    .map(
      (r) =>
        `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${lastmodFor(r.path)}</lastmod>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export { SITE_URL };
