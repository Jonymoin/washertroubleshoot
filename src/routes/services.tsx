import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { SERVICES } from "@/components/site/data";
import { trackConversion } from "@/lib/track";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Washing Machine Repair Services in Singapore | WasherTroubleShootSG" },
      { name: "description", content: "Full range of washing machine repair services in Singapore — front load, top load, washer-dryer combos, leak fixes, PCB repair and more." },
      { property: "og:title", content: "Our Services | WasherTroubleShootSG" },
      { property: "og:description", content: "Front load, top load, combo, PCB and leak repairs across Singapore." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Complete Washing Machine Repair Services"
        gradientWord="Repair"
        description="From simple leaks to full electronic diagnostics — our specialists handle every washing machine problem in Singapore, 7 days a week."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-black p-10 text-center text-white">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Not sure what's wrong with your washer?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">Send us a quick message and we'll diagnose over the phone before dispatching a technician.</p>
          <a href="tel:+6584130016" onClick={() => trackConversion("services_page_call")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground">
            <Phone className="h-4 w-4" /> Call +65 8413 0016
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
