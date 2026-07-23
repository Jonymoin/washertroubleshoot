import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { AREAS } from "@/components/site/data";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/coverage-areas")({
  head: () => ({
    meta: [
      { title: "Service Coverage Areas Across Singapore | WasherTroubleShootSG" },
      { name: "description", content: "Islandwide washing machine repair coverage across Singapore — every HDB, condo and landed neighbourhood from Woodlands to Changi." },
      { property: "og:title", content: "Coverage Areas | WasherTroubleShootSG" },
      { property: "og:description", content: "Islandwide washing machine repair coverage across Singapore." },
      { property: "og:url", content: "/coverage-areas" },
    ],
    links: [{ rel: "canonical", href: "/coverage-areas" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Coverage"
        title="Islandwide Coverage in Singapore"
        gradientWord="Singapore"
        description="Wherever you are on the island, our technicians are just a phone call away — 7 days a week."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div key={a} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition hover:border-brand/50">
              <MapPin className="h-4 w-4 text-brand" /> {a}
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
