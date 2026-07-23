import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { REVIEWS } from "@/components/site/data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Washing Machine Repair Singapore | WasherTroubleShootSG" },
      { name: "description", content: "Real reviews from Singapore households who trust WasherTroubleShootSG for fast, honest washing machine repairs." },
      { property: "og:title", content: "Customer Reviews | WasherTroubleShootSG" },
      { property: "og:description", content: "5-star reviews from Singapore households." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Reviews"
        title="What Our Customers Say"
        gradientWord="Customers"
        description="Hundreds of Singapore households have trusted us with their washing machine repairs. Here's what they say."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-xl">
              <div className="flex text-brand">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm text-foreground/85">"{r.text}"</p>
              <div className="mt-4 text-sm font-semibold">{r.name} <span className="text-muted-foreground">— {r.area}</span></div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
