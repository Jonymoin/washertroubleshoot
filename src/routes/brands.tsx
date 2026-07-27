import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Brands } from "@/components/site/Brands";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Washing Machine Brands We Repair Singapore | Bosch, Samsung, LG" },
      {
        name: "description",
        content:
          "Expert repair for all washer brands in Singapore: Bosch, Samsung, LG, Electrolux, Panasonic, Hitachi, Toshiba, Whirlpool, Miele, Fisher & Paykel.",
      },
      { property: "og:title", content: "Brands We Repair | WasherTroubleShootSG" },
      {
        property: "og:description",
        content: "Genuine spare parts and 90-day warranty across every major washing machine brand in Singapore.",
      },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <div className="bg-black pb-16">
        <Brands />
      </div>
    </SiteLayout>
  );
}
