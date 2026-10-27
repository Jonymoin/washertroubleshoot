// Post-build step: turns the client-side SPA into static, crawlable HTML.
//  - writes dist/<route>/index.html for every route with the real <title>,
//    meta description, canonical, Open Graph / Twitter tags, JSON-LD and the
//    fully rendered page content (one <h1>, headings, links, alt text)
//  - writes dist/404.html (noindex, served with a real 404 status)
//  - writes dist/sitemap.xml (also refreshed in public/sitemap.xml)
// The browser then hydrates the markup, so the design/behaviour is unchanged.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const ssrFile = ["entry-server.js", "entry-server.mjs"]
  .map((f) => path.join(ssrDir, f))
  .find((f) => fs.existsSync(f));
if (!ssrFile) throw new Error("SSR bundle not found. Run `npm run build`.");

const { getRoutes, renderRoute, renderNotFound, buildSitemap } = await import(
  pathToFileURL(ssrFile).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const START = "<!--seo:start-->";
const END = "<!--seo:end-->";
if (!template.includes(START) || !template.includes(END) || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html is missing the seo markers or the #root element.");
}

const HERO_PRELOAD =
  '<link rel="preload" as="image" href="/hero-laundry.webp" type="image/webp" fetchpriority="high" />';

function page({ head, html, preload, route }) {
  const a = template.indexOf(START);
  const b = template.indexOf(END) + END.length;
  let out = template.slice(0, a) + `${START}\n    ${head}\n    ${END}` + template.slice(b);
  if (preload) out = out.replace("</head>", `    ${preload}\n  </head>`);
  return out.replace('<div id="root"></div>', `<div id="root" data-route="${route}">${html}</div>`);
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

let count = 0;
for (const route of getRoutes()) {
  const html = renderRoute(route.path);
  const out = page({
    head: route.head,
    html,
    preload: route.path === "/" ? HERO_PRELOAD : "",
    route: route.path,
  });
  const file = route.path === "/" ? path.join(dist, "index.html") : path.join(dist, route.path, "index.html");
  write(file, out);
  count++;
}

const nf = renderNotFound();
write(path.join(dist, "404.html"), page({ head: nf.head, html: nf.html, route: "*404" }));

const sitemap = buildSitemap();
write(path.join(dist, "sitemap.xml"), sitemap);
write(path.join(root, "public", "sitemap.xml"), sitemap);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${count} routes + 404.html + sitemap.xml`);
