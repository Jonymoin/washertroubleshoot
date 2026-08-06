import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { trackConversion } from "@/lib/track";
import {
  Phone, MessageCircle, ShieldCheck, Clock, Wrench, Star, MapPin, ArrowRight, CheckCircle2,
} from "lucide-react";
import { SERVICES, WHY_US, REVIEWS, AREAS, FAQS } from "@/components/site/data";
import { Brands, DEFAULT_BRANDS } from "@/components/site/Brands";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Washing Machine Repair Singapore | WasherTroubleShootSG" },
      { name: "description", content: "Same-day washing machine repair across Singapore. 7 days a week. Certified technicians for Samsung, LG, Bosch, Electrolux and all major brands. Call +65 8413 0016." },
      { property: "og:title", content: "Washing Machine Repair Singapore | WasherTroubleShootSG" },
      { property: "og:description", content: "Same-day washing machine repair in Singapore. 7 days a week. Call +65 8413 0016." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <WhyUs />
      <ServicesPreview />
      <BrandsStrip />
      <ReviewsPreview />
      <AreasPreview />
      <FAQsPreview />
      <FinalCTA />
      <ContactBlock />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--brand)_25%,transparent),transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Clock className="h-3.5 w-3.5" /> Open 7 days a week — Same-day service
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Singapore's <span className="shine-text">Trusted</span> Washing Machine Repair Specialists
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Fast, honest and warranty-backed repairs for every major brand. Book a technician in minutes — we come to you, 7 days a week including weekends and public holidays.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+6584130016"
              onClick={() => trackConversion("hero_call")}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/40 transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> Call +65 8413 0016
            </a>
            <a
              href="https://wa.me/6584130016"
              target="_blank"
              rel="noopener"
              onClick={() => trackConversion("hero_whatsapp")}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground glow-ring transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Warranty backed</div>
            <div className="flex items-center gap-2"><Wrench className="h-4 w-4 text-brand" /> All major brands</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-brand" /> 5-star reviews</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img src="/images/ws1.webp" alt="Washing machine repair technician in Singapore" className="h-full w-full object-cover" loading="eager" fetchPriority="high"
                    decoding="async"  width="800" height="600" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/70 p-4 text-white">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Same-Day Response</div>
                <div className="text-xs text-white/80">Most repairs completed on the first visit</div>
              </div>
            </div>
          </div>
          <div className="animate-float glass absolute -bottom-6 -left-6 hidden rounded-2xl p-4 sm:block glow-ring">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <div className="flex text-brand">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              4.9 / 5
            </div>
            <div className="mt-1 text-xs text-muted-foreground">from hundreds of Singapore households</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, gradientWord, sub }: { eyebrow: string; title: string; gradientWord?: string; sub?: string }) {
  const parts = gradientWord ? title.split(gradientWord) : null;
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {parts ? <>{parts[0]}<span className="text-gradient-green">{gradientWord}</span>{parts[1]}</> : title}
      </h2>
      {sub && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{sub}</p>}
    </div>
  );
}

function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHead eyebrow="Why Choose Us" title="Repairs done right — the first time" gradientWord="right" sub="We're specialists, not generalists. Every technician is trained specifically on washing machine electronics and mechanics." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((w) => (
          <div key={w.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead eyebrow="Our Services" title="Complete washing machine repair services" gradientWord="repair" sub="From front loaders to washer-dryer combos, we fix every fault — mechanical or electronic." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 8).map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            onClick={() => trackConversion("services_view_all")}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BrandsStrip() {
  return (
    <section className="bg-black py-8">
      <Brands
        subtitle="Genuine spare parts, specialized diagnostic tools, and 90-day warranty across all major washing machine brands in Singapore."
        brandsList={DEFAULT_BRANDS.slice(0, 6)}
        showFilters={false}
      />
      <div className="mt-4 text-center">
        <Link to="/brands" onClick={() => trackConversion("brands_view_all")} className="text-sm font-semibold text-brand hover:underline">
          See all brands →
        </Link>
      </div>
    </section>
  );
}


function ReviewsPreview() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-glow">
            Customer Reviews
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by <span className="shine-text">Singapore households</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {REVIEWS.slice(0, 3).map((r) => (
            <div key={r.name} className="glass-dark rounded-2xl p-6">
              <div className="flex text-brand-glow">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm text-white/85">"{r.text}"</p>
              <div className="mt-4 text-sm font-semibold">{r.name} <span className="text-white/50">— {r.area}</span></div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/reviews" onClick={() => trackConversion("reviews_view_all")} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90">
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AreasPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHead eyebrow="Service Areas" title="Islandwide across Singapore" gradientWord="Singapore" sub="We service every neighbourhood — from Woodlands to Jurong to Changi." />
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {AREAS.slice(0, 20).map((a) => (
          <span key={a} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">
            <MapPin className="h-3 w-3 text-brand" /> {a}
          </span>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/coverage-areas" onClick={() => trackConversion("areas_view_all")} className="text-sm font-semibold text-brand hover:underline">
          See all coverage areas →
        </Link>
      </div>
    </section>
  );
}

function FAQsPreview() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <SectionHead eyebrow="FAQs" title="Answers to common questions" gradientWord="common" />
        <div className="mt-10 space-y-3">
          {FAQS.slice(0, 5).map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 transition open:border-brand/50">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/faqs" onClick={() => trackConversion("faqs_view_all")} className="text-sm font-semibold text-brand hover:underline">
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-black p-10 text-white lg:p-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_80%_at_100%_0%,color-mix(in_oklab,var(--brand)_45%,transparent),transparent)]" />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Washer acting up? <span className="shine-text">Book a repair today.</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Talk to a real technician now — no bots, no long forms. Available every day of the week.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="tel:+6584130016" onClick={() => trackConversion("bottom_cta_call")} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/40 transition hover:opacity-90">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href="https://wa.me/6584130016" target="_blank" rel="noopener" onClick={() => trackConversion("bottom_cta_whatsapp")} className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white glow-ring">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
      <SectionHead eyebrow="Contact" title="Get in touch — 7 days a week" gradientWord="7 days a week" />
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <a href="tel:+6584130016" onClick={() => trackConversion("contact_block_call")} className="group rounded-2xl border border-border bg-card p-6 text-center transition hover:border-brand/50 hover:shadow-xl">
          <Phone className="mx-auto h-6 w-6 text-brand" />
          <div className="mt-3 font-semibold">Phone</div>
          <div className="mt-1 text-sm text-muted-foreground">+65 8413 0016</div>
        </a>
        <a href="https://wa.me/6584130016" target="_blank" rel="noopener" onClick={() => trackConversion("contact_block_whatsapp")} className="group rounded-2xl border border-border bg-card p-6 text-center transition hover:border-brand/50 hover:shadow-xl">
          <MessageCircle className="mx-auto h-6 w-6 text-brand" />
          <div className="mt-3 font-semibold">WhatsApp</div>
          <div className="mt-1 text-sm text-muted-foreground">+65 8413 0016</div>
        </a>
        <a href="mailto:washertroubleshootsg@gmail.com" onClick={() => trackConversion("contact_block_email")} className="group rounded-2xl border border-border bg-card p-6 text-center transition hover:border-brand/50 hover:shadow-xl">
          <MapPin className="mx-auto h-6 w-6 text-brand" />
          <div className="mt-3 font-semibold">Email</div>
          <div className="mt-1 break-all text-sm text-muted-foreground">washertroubleshootsg@gmail.com</div>
        </a>
      </div>
    </section>
  );
}
