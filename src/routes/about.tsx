import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { Wrench, ShieldCheck, Clock, Users, Award, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — WasherTroubleShootSG | Washing Machine Repair Singapore" },
      { name: "description", content: "Learn about WasherTroubleShootSG — Singapore's trusted washing machine repair specialists with certified technicians, transparent pricing and same-day islandwide service." },
      { property: "og:title", content: "About WasherTroubleShootSG" },
      { property: "og:description", content: "Certified washing machine repair specialists serving Singapore islandwide, 7 days a week." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

const VALUES = [
  { icon: Wrench, title: "Specialists, Not Generalists", desc: "We only fix washing machines and washer-dryers — that focus makes us fast and accurate." },
  { icon: ShieldCheck, title: "Transparent Pricing", desc: "Quotation before work starts. No hidden fees, no surprise charges." },
  { icon: Clock, title: "Same-Day Response", desc: "Most jobs completed the same day, 7 days a week including public holidays." },
  { icon: Users, title: "Courteous Technicians", desc: "Trained, uniformed and respectful of your home — shoe covers and clean-up included." },
  { icon: Award, title: "Warranty Backed", desc: "Every part we replace and every hour of labour is covered by a service warranty." },
  { icon: MapPin, title: "Islandwide Coverage", desc: "From Woodlands to Tuas, Punggol to Sentosa — we serve every neighbourhood in Singapore." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Singapore's Trusted Washer Repair Team"
        gradientWord="Trusted"
        description="WasherTroubleShootSG is a Singapore-based washing machine repair specialist. We've helped thousands of households and businesses get their laundry back on track — quickly, honestly and affordably."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-none text-foreground/80">
          <h2 className="font-display text-3xl font-bold text-foreground">Our Story</h2>
          <p>
            WasherTroubleShootSG was founded with a simple mission: give Singapore households a
            reliable, no-nonsense washing machine repair service they can trust. After years of
            hearing the same frustrations — technicians who don't turn up, vague quotes that
            balloon on invoice day, and "repairs" that fail within a week — we built a service
            that fixes those problems as seriously as it fixes machines.
          </p>
          <p>
            Today, our certified technicians service every major brand sold in Singapore —
            Samsung, LG, Bosch, Electrolux, Panasonic, Toshiba, Hitachi, Whirlpool, Miele,
            Siemens, Midea, Fisher &amp; Paykel, Haier, Sharp, Beko and more. Whether it's an
            HDB unit in Tampines, a condo in Orchard or a landed home in Bukit Timah, our team
            arrives on time, diagnoses the fault clearly, and quotes before any work begins.
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground">Why Households Choose Us</h2>
          <p>
            Washing machines are one of the hardest-working appliances in a Singapore home —
            humidity, hard water and heavy usage all take their toll. When yours breaks down,
            you need someone who can diagnose accurately, source genuine parts, and fix it right
            the first time. That's what we do, every day.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">What We Stand For</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-brand/50 hover:shadow-lg">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-brand-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
