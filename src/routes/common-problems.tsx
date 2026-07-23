import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { PROBLEMS } from "@/components/site/data";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/common-problems")({
  head: () => ({
    meta: [
      { title: "Common Washing Machine Problems in Singapore | WasherTroubleShootSG" },
      { name: "description", content: "Common washing machine faults we fix — not spinning, not draining, leaking, loud noises, error codes and more. Same-day service islandwide." },
      { property: "og:title", content: "Common Washing Machine Problems | WasherTroubleShootSG" },
      { property: "og:description", content: "Common washer faults we fix across Singapore." },
      { property: "og:url", content: "/common-problems" },
    ],
    links: [{ rel: "canonical", href: "/common-problems" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Common Problems"
        title="Common Washing Machine Problems"
        gradientWord="Problems"
        description="Recognise the symptoms of a failing washing machine — and know exactly which fault we can fix today."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-xl">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
