# SEO changelog

## Rendering (biggest technical SEO win)
The site was a client-side SPA, so crawlers and social scrapers saw an almost empty page and the same title/OG tags everywhere. `npm run build` now **prerenders all 41 routes + 404** to static HTML (`dist/<route>/index.html`) with the real title, description, canonical, Open Graph/Twitter tags, JSON-LD, H1, headings, images and internal links. The browser then hydrates it, so design and behaviour are unchanged.

## Requested items
| Item | Done |
|---|---|
| sitemap.xml | Generated at build from the route list (41 URLs, truthful `lastmod`; blog posts use their publish date). |
| robots.txt | `Allow: /` + sitemap reference. |
| noindex | None on any real page. Only `/404` (the not-found page) carries `noindex`, which is correct. |
| Canonical tags | Every page, absolute URL, no trailing slash (home is `/`). |
| Meta titles / descriptions | Unique per page. Titles ≤ 60 chars, descriptions 110–160 chars. Single source: `src/lib/route-seo.ts`. |
| One H1 per page | Verified on all 42 pages. |
| Heading hierarchy | No skipped levels (Home `h3` tagline → `p`; About stat `h4` → `p`; footer headings `h3` → `h2`). Classes unchanged, so visuals are identical. |
| Alt text | Descriptive alt on every content image; purely decorative background images keep `alt=""` (correct a11y practice). |
| Schema | Sitewide `LocalBusiness` + `WebSite`; per page `WebPage`/`AboutPage`/`ContactPage`/`CollectionPage`, `BreadcrumbList`, `Service` (brand pages include `brand`), `BlogPosting`, `ItemList`. No invented ratings/addresses. |
| Internal links | Contextual brand/problem/blog/services links in Home, About, blog posts; "Other brands / problems" link row on every repair page; "Brands We Repair" footer row; useful 404 page. |
| Broken links | Fixed `/favicon.svg` and `/opengraph.jpg` (both 404 before); `<button><a>` invalid nesting; nested `<main>`; developer text on the 404 page; "Privacy-policy" label. Build-time audit: 0 broken internal links/assets. |
| Images | Resized/recompressed (e.g. working1 76→30 KB, working3 102→47 KB, technician 106→74 KB); favicon 45→4 KB; width/height on all images (no layout shift). |
| Core Web Vitals | framer-motion removed (JS 628→522 KB, gzip 188→153 KB); unused Google Font removed (it was never applied → no render-blocking request); hero image preloaded with working `fetchpriority` (React 18 silently ignored the camelCase prop); content is in the HTML so LCP doesn't wait for JS; cache headers. |
| Mobile | Bigger menu tap target, footer no longer hidden behind the fixed Call/WhatsApp bar, `theme-color`, drawer rebuilt with CSS. |
| HTTPS | `upgrade-insecure-requests`, forced http→https and www→apex 301s, HSTS and security headers (`netlify.toml`). |
| URL slugs | Already clean/lowercase/hyphenated. Legacy `/terms&condition` → 301 to `/terms-and-conditions`; `/index.html` → `/`. |
| OG image | `public/opengraph.jpg` (1200×630) + `og:image:width/height/alt`, Twitter large card. |
| Backlinks | `docs/BACKLINK-STRATEGY.md`. |

## Design
No visual redesign. framer-motion removed as requested; scroll/entrance fade-in animations no longer play. The mobile drawer still slides in (CSS). A few small text links were added for internal linking.
