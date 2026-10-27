# Washertroubleshoot SG

Standalone React + Vite website for Washertroubleshoot SG, a Singapore washing machine repair service.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Install and run

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` compiles the app, then prerenders every route to static HTML (with SEO tags, schema, sitemap.xml and 404.html) via `scripts/prerender.mjs`. Deploy the `dist` folder. `netlify.toml` configures HTTPS/www redirects, security + cache headers and the 404 page.

## SEO

- Titles, descriptions, canonicals and schema live in `src/lib/route-seo.ts` and `src/lib/seo.ts`.
- When adding a page: add a route in `App.tsx`, an entry in `route-seo.ts` (`staticRoutes` or the data files), and rebuild; the sitemap updates automatically.
- See `docs/SEO-CHANGELOG.md` and `docs/BACKLINK-STRATEGY.md`.

## Included features

- Existing Washertroubleshoot SG home, services, about, blog, contact, privacy, and terms pages
- Brands We Service links and dedicated brand repair pages
- Problems We Solve links and dedicated problem pages
- WhatsApp service request forms with pre-filled messages
- Existing phone, WhatsApp, Google Ads conversion tracking, and Clarity setup