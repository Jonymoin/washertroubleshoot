import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { trackConversion } from "@/lib/track";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Washing Machine Repair Singapore | WasherTroubleShootSG" },
      { name: "description", content: "Contact WasherTroubleShootSG for fast washing machine repair in Singapore. Call or WhatsApp +65 8413 0016 — open 7 days a week." },
      { property: "og:title", content: "Contact | WasherTroubleShootSG" },
      { property: "og:description", content: "Call or WhatsApp +65 8413 0016 — open 7 days a week." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Book a Repair Today"
        gradientWord="Today"
        description="Reach us anytime — we operate 7 days a week including Sundays and public holidays."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a href="tel:+6584130016" onClick={() => trackConversion("contact_page_call")} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-brand-foreground"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="font-display text-lg font-semibold">+65 8413 0016</div>
              </div>
            </a>
            <a href="https://wa.me/6584130016" target="_blank" rel="noopener" onClick={() => trackConversion("contact_page_whatsapp")} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-brand-foreground"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-display text-lg font-semibold">+65 8413 0016</div>
              </div>
            </a>
            <a href="mailto:washertroubleshootsg@gmail.com" onClick={() => trackConversion("contact_page_email")} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-brand-foreground"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="break-all font-display text-base font-semibold">washertroubleshootsg@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand"><Clock className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="font-display text-lg font-semibold">Open 7 Days a Week</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Coverage</div>
                <div className="font-display text-lg font-semibold">Islandwide Singapore</div>
              </div>
            </div>
          </div>

          <form
            className="rounded-3xl border border-border bg-card p-6 lg:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              trackConversion("contact_form_submit");
              setSent(true);
            }}
          >
            <h2 className="font-display text-2xl font-bold">Request a callback</h2>
            <p className="mt-1 text-sm text-muted-foreground">We'll reach out within minutes during operating hours.</p>
            <div className="mt-6 space-y-4">
              <input required placeholder="Your name" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
              <input required type="tel" placeholder="Phone number" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
              <input placeholder="Washer brand & model" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
              <textarea rows={4} placeholder="Describe the problem" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
              <button
                type="submit"
                onClick={() => trackConversion("contact_form_button")}
                className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/30 transition hover:opacity-90"
              >
                Send request
              </button>
              {sent && (
                <p className="text-center text-sm font-medium text-brand">Thanks — we'll be in touch shortly.</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
