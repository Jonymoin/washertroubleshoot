import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { BRANDS } from "@/components/site/data";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Washing Machine Brands We Repair in Singapore | WasherTroubleShootSG" },
      { name: "description", content: "We repair every major washing machine brand in Singapore — Samsung, LG, Bosch, Electrolux, Panasonic, Miele, Toshiba, Hitachi, Whirlpool and more." },
      { property: "og:title", content: "Brands We Repair | WasherTroubleShootSG" },
      { property: "og:description", content: "Every major washing machine brand — repaired in Singapore." },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Brands"
        title="Every Major Brand We Repair"
        gradientWord="Repair"
        description="Certified specialists on every leading washing machine brand sold in Singapore."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {BRANDS.map((b) => (
            <div key={b} className="rounded-2xl border border-border p-6 text-center font-display text-lg font-semibold transitio bg-green-500 hover:border-brand/50 hover:text-white">
              {b}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Brand not listed? We probably still service it — call or WhatsApp us with your model number and we'll confirm right away.
        </p>
      </section>
    </SiteLayout>
  );
}
