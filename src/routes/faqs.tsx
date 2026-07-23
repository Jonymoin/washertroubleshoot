import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { FAQS } from "@/components/site/data";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Washing Machine Repair Singapore | WasherTroubleShootSG" },
      { name: "description", content: "Frequently asked questions about our washing machine repair service in Singapore — same-day service, brands, warranty and pricing." },
      { property: "og:title", content: "FAQs | WasherTroubleShootSG" },
      { property: "og:description", content: "Answers to common questions about our repair service." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        gradientWord="Questions"
        description="Everything you need to know about our washing machine repair service in Singapore."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 open:border-brand/50">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
