import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — WasherTroubleShootSG" },
      { name: "description", content: "Terms and conditions governing washing machine repair services provided by WasherTroubleShootSG in Singapore." },
      { property: "og:title", content: "Terms & Conditions | WasherTroubleShootSG" },
      { property: "og:description", content: "Service terms for our washing machine repair customers in Singapore." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms govern your use of this website and the repair services provided by WasherTroubleShootSG. By booking a service or using this site, you agree to them."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" })}</p>

          <h2>1. About Us</h2>
          <p>
            WasherTroubleShootSG ("we", "us") provides washing machine and washer-dryer repair
            services in Singapore. Contact: +65 8413 0016 ·{" "}
            <a href="mailto:washertroubleshootsg@gmail.com" className="text-brand hover:underline">washertroubleshootsg@gmail.com</a>.
          </p>

          <h2>2. Bookings &amp; Appointments</h2>
          <ul>
            <li>Bookings are confirmed once you receive a written confirmation via SMS, WhatsApp or email.</li>
            <li>Please ensure an adult (18+) is present at the appointment to authorise diagnosis and repair.</li>
            <li>If access is not provided at the confirmed time, a wasted-trip fee may apply.</li>
          </ul>

          <h2>3. Inspection &amp; Quotation</h2>
          <ul>
            <li>An inspection fee applies for on-site diagnosis and is disclosed before the visit.</li>
            <li>The inspection fee is waived when you proceed with the recommended repair.</li>
            <li>A written or verbal quotation is provided before any chargeable work begins.</li>
          </ul>

          <h2>4. Pricing &amp; Payment</h2>
          <ul>
            <li>All prices are quoted in Singapore Dollars (SGD) and are inclusive of prevailing GST where applicable.</li>
            <li>Payment is due upon completion of the repair, via PayNow, bank transfer or cash.</li>
            <li>Parts remain the property of WasherTroubleShootSG until full payment is received.</li>
          </ul>

          <h2>5. Warranty</h2>
          <ul>
            <li>We provide a service warranty on labour and replaced parts. Warranty period and scope are stated on your invoice.</li>
            <li>The warranty covers the specific fault repaired and does not cover new, unrelated faults, misuse, power surges, water damage, pest damage or tampering by third parties.</li>
            <li>Warranty is void if the appliance is subsequently serviced or opened by another party.</li>
          </ul>

          <h2>6. Customer Responsibilities</h2>
          <ul>
            <li>Provide accurate information about the appliance, fault and service address.</li>
            <li>Ensure safe access to the machine, including water and power isolation points.</li>
            <li>Move personal items and valuables away from the work area before our arrival.</li>
          </ul>

          <h2>7. Cancellations &amp; Rescheduling</h2>
          <p>
            You may reschedule or cancel a booking free of charge up to 2 hours before the
            appointment. Late cancellations or no-shows may incur a fee to cover technician
            travel time.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by Singapore law, our liability for any claim
            arising from our services is limited to the amount you paid for the specific
            service in question. We are not liable for indirect or consequential loss (such as
            loss of use, spoiled laundry or business interruption).
          </p>

          <h2>9. Website Use</h2>
          <p>
            All content on this website — text, images, logos and design — is the property of
            WasherTroubleShootSG and may not be reproduced without written permission. We may
            update or discontinue any part of the website at any time.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Republic of Singapore. Any dispute
            shall be subject to the exclusive jurisdiction of the Singapore courts.
          </p>

          <h2>11. Contact</h2>
          <p>
            For any questions about these terms, email{" "}
            <a href="mailto:washertroubleshootsg@gmail.com" className="text-brand hover:underline">washertroubleshootsg@gmail.com</a>{" "}
            or call +65 8413 0016.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
