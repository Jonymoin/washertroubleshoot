import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — WasherTroubleShootSG" },
      { name: "description", content: "How WasherTroubleShootSG collects, uses and protects your personal data in line with Singapore's Personal Data Protection Act (PDPA)." },
      { property: "og:title", content: "Privacy Policy | WasherTroubleShootSG" },
      { property: "og:description", content: "Our PDPA-aligned privacy practices for customers in Singapore." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains what information WasherTroubleShootSG collects, how we use it, and the choices you have. It is maintained by WasherTroubleShootSG and applies to this website and our repair services."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" })}</p>

          <h2>1. Who We Are</h2>
          <p>
            WasherTroubleShootSG ("we", "us", "our") is a washing machine repair service
            operating in Singapore. You can contact us at{" "}
            <a href="mailto:washertroubleshootsg@gmail.com" className="text-brand hover:underline">washertroubleshootsg@gmail.com</a>{" "}
            or on +65 8413 0016.
          </p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Contact details</strong> you provide when booking — name, phone number, email and service address.</li>
            <li><strong>Service details</strong> — appliance brand, model, described fault and any photos you send.</li>
            <li><strong>Website usage data</strong> — pages viewed, device type and approximate location, collected via Google Analytics, Google Ads and Microsoft Clarity.</li>
            <li><strong>Payment records</strong> — invoice history; we do not store card numbers.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To schedule, deliver and follow up on repair jobs.</li>
            <li>To send appointment confirmations, invoices and warranty details.</li>
            <li>To improve our website, marketing and customer service.</li>
            <li>To comply with legal, tax and regulatory obligations in Singapore.</li>
          </ul>

          <h2>4. Cookies &amp; Analytics</h2>
          <p>
            This website uses cookies and similar technologies from Google (Analytics and Ads)
            and Microsoft Clarity to understand how visitors interact with our pages and to
            measure the performance of our advertising. You can disable cookies in your browser
            settings. Doing so may affect some website features.
          </p>

          <h2>5. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We share information only with:
          </p>
          <ul>
            <li>Our technicians assigned to your job.</li>
            <li>Service providers who help us operate the business (hosting, analytics, messaging).</li>
            <li>Authorities where required by Singapore law.</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We keep service records for as long as needed to honour warranties, resolve disputes
            and meet legal requirements — typically up to 5 years after your last interaction.
          </p>

          <h2>7. Your Rights Under the PDPA</h2>
          <p>
            Under Singapore's Personal Data Protection Act, you may request access to, or
            correction of, the personal data we hold about you, and you may withdraw consent to
            our use of your data. Email{" "}
            <a href="mailto:washertroubleshootsg@gmail.com" className="text-brand hover:underline">washertroubleshootsg@gmail.com</a>{" "}
            and we will respond within a reasonable time.
          </p>

          <h2>8. Security</h2>
          <p>
            We take reasonable administrative, technical and physical measures to protect the
            personal data we hold from unauthorised access, disclosure or loss.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The "Last updated" date above shows
            when it was last revised.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about this policy? Email{" "}
            <a href="mailto:washertroubleshootsg@gmail.com" className="text-brand hover:underline">washertroubleshootsg@gmail.com</a>{" "}
            or call +65 8413 0016.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
