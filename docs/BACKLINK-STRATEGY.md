# Backlink Strategy: Washertroubleshoot SG

Goal: rank for "washing machine repair Singapore", brand + problem searches ("Samsung washing machine repair Singapore", "washing machine not draining"), and appear in the Google local pack. Backlinks only work on top of the on-site work already done in this build; the local pack depends heavily on your Google Business Profile.

**Rules (Google spam policies):** no paid links, no link networks/PBNs, no mass directory submissions, no comment/forum spam, no fake reviews. Earn or legitimately place every link. Aim for relevance and local trust over volume.

---

## Phase 1: Foundations (Week 1–2) — local trust signals

Keep **NAP consistent everywhere** (Name: *Washertroubleshoot SG*, Phone: *+65 8413 0016*, Email, Service area: *Islandwide Singapore*, same website URL `https://washertroubleshootsg.com/`).

| Action | Why |
|---|---|
| **Google Business Profile** (service-area business, category "Appliance repair service", hours 8am–10pm, services list, photos of real jobs) | Biggest local-ranking lever. Link to `/`. Add services pointing to `/services`. |
| **Bing Places** and **Apple Business Connect** | Free, authoritative, feeds Bing/Apple Maps/Siri/DuckDuckGo. |
| **Facebook Page, Instagram, TikTok, YouTube, LinkedIn page** | Brand profiles + sameAs signals. (nofollow mostly, but they rank for brand searches and drive referral traffic.) |
| Singapore business directories (e.g. Yellow Pages Singapore, StreetDirectory and similar *reputable* local listings) | Citation consistency. Pick 8–12 quality ones; skip low-quality "submit to 500 directories" services. |
| Marketplace/service listings you genuinely operate on (e.g. Carousell services) | Real traffic + a link. |

When your real social URLs exist, add them as `sameAs` in `src/lib/seo.ts` (`siteWideJsonLd`) so search engines connect the profiles.

## Phase 2: Linkable assets (Week 2–6)

Links follow content people want to cite. Build these on the site (each as a new route in `repair-data.ts` / `blog-data.ts`):

1. **"Washing machine repair cost in Singapore (2026 price guide)"** — real price ranges by fault; the single most linkable asset in this niche.
2. **Error code library** — expand the existing error-code table into one page per brand (Samsung, LG, Bosch…). Technicians, forums and DIY bloggers link to code references.
3. **Repair vs replace calculator/guide** — extends your existing article; include energy-label / e-waste angles (link out to NEA resources; useful and credible).
4. **HDB/condo maintenance checklist** (drain, hose, level, transit bolts) — attractive to town councils, MCST newsletters, property blogs.
5. **Original photos/video** of real jobs (before/after drum cleaning). Image and video embeds earn attribution links.

## Phase 3: Outreach (Week 4–12)

| Tactic | How |
|---|---|
| **Supplier / partner links** | Ask spare-part suppliers, appliance retailers and cleaning companies you work with for a "recommended repair partner" mention. |
| **Property & renovation ecosystem** | Interior designers, renovation contractors, property agents and condo managing agents: offer a referral arrangement and a resource-page link. |
| **Local sponsorships** | Community events, RC/neighbourhood newsletters, school fairs: sponsor links from local `.sg` / community sites are highly relevant. |
| **Digital PR** | Pitch data-led stories to Singapore home/lifestyle media: e.g. "Most common washing-machine faults in Singapore homes" from your own job data. Use journalist-request platforms (HARO-style services) to answer questions as a repair expert. |
| **Guest articles** | Singapore home, parenting and lifestyle blogs: practical maintenance tips with one contextual link to the matching problem page. |
| **Community participation (no spam)** | Answer real questions on Reddit (r/singapore, r/askSingapore), HardwareZone and Facebook groups with genuinely helpful advice; link only when it directly helps and the rules allow. |
| **Unlinked brand mentions** | Search `"Washertroubleshoot"` monthly; ask sites that mention you without a link to add one. |
| **Broken-link building** | Find dead links on Singapore home-care/"how to fix a washing machine" resource pages; offer your matching guide as a replacement. |

## Anchor-text & target-page plan

Keep it natural (roughly): 40–50% branded ("Washertroubleshoot SG", URL), 20–30% partial-match ("washing machine repair in Singapore", "this Samsung repair guide"), 10–15% generic ("here", "this guide"), <10% exact match.

| Link to… | Use for |
|---|---|
| `/` | Brand mentions, directories, social profiles |
| `/services` | Hub link from partner/resource pages |
| `/problems/<slug>` | Guest articles & forum answers about that exact fault |
| `/brands/<slug>` | Brand-specific communities, retailers, parts suppliers |
| `/blog/<slug>` | Digital PR, resource pages |

## Reviews (supports local rankings and conversions)

After each job, send a short WhatsApp message with your Google review link. Reply to every review. Never buy or fake reviews.

## 90-day timeline

| Weeks | Focus | Target |
|---|---|---|
| 1–2 | GBP, Bing, Apple, social, 8–12 citations | 15+ consistent citations |
| 3–6 | Publish price guide + 2 error-code pages; first partner asks | 3–5 relevant links |
| 7–10 | Digital PR + guest posts + sponsorships | 5–8 more links |
| 11–13 | Review results, double down on what earned links | 15–25 total quality links, 30+ Google reviews |

## Measurement

- **Google Search Console:** submit `https://washertroubleshootsg.com/sitemap.xml`, monitor Links report, impressions/clicks per query and page, Core Web Vitals.
- **Google Business Profile insights:** calls, direction requests, messages.
- Track: referring domains (count & relevance), rankings for ~20 target keywords, calls/WhatsApp clicks (already tracked via Google Ads conversion events).
- **Monthly:** audit new links; only if you find clearly spammy/manipulative links pointing at you, use Google's disavow tool. Don't disavow routinely.

## What to avoid

Buying links, PBNs, link exchanges at scale, auto-generated directory blasts, exact-match anchor stuffing, and fake reviews. These risk manual actions that can remove the site from results.
