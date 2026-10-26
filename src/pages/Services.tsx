import { Button } from "@/components/ui/button";
import { Wrench, Droplets, AlertTriangle, Disc, DoorOpen, Settings } from "lucide-react";
import { Link } from "wouter";
import { trackGoogleAdsConversion } from "@/lib/googleAds";
import { brands, problems } from "./repair-data";
import { useSEO } from "@/hooks/useSEO";
import { breadcrumbListJsonLd } from "@/lib/seo";

const problemIcons = [Droplets, Disc, AlertTriangle, Settings, DoorOpen, Wrench];

// 15 brand er jonno 15 ta alada solid color (Tailwind literal class, tai purge hobe na)
const brandStyles = [
  "bg-cyan-600 text-white",
  "bg-blue-600 text-white",
  "bg-violet-600 text-white",
  "bg-amber-400 text-slate-900",
  "bg-rose-600 text-white",
  "bg-emerald-600 text-white",
  "bg-indigo-600 text-white",
  "bg-pink-600 text-white",
  "bg-teal-600 text-white",
  "bg-orange-500 text-white",
  "bg-sky-600 text-white",
  "bg-fuchsia-600 text-white",
  "bg-lime-400 text-slate-900",
  "bg-red-600 text-white",
  "bg-purple-600 text-white",
];

export default function Services() {
  useSEO({
    title: "Washing Machine Repair Services in Singapore | Washertroubleshoot SG",
    description:
      "Browse washing machine repair services in Singapore by brand or problem — not draining, not spinning, leaking, noise, error codes and more. Book a technician today.",
    path: "/services",
    jsonLd: breadcrumbListJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Washing Machine Repair Services in Singapore
          </h1>
          <p className="text-lg md:text-xl text-slate-300">
            Expert diagnosis and repair for all washing machine problems. We bring your appliances back to life, saving you the cost of a replacement.
          </p>
        </div>
      </div>

      {/* Problems We Fix */}
      <section className="bg-[#00182e] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#e9ff00]">
              Need a quick answer?
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">Common Problems We Fix</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Choose the symptom that matches your washer and get practical guidance from our repair team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((prob, idx) => {
              const Icon = problemIcons[idx % problemIcons.length];
              return (
                <Link
                  key={prob.slug}
                  href={`/problems/${prob.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#002a4d] to-[#001f3a] p-8 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#e9ff00]/20 hover:ring-2 hover:ring-[#e9ff00]"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#e9ff00]/10 blur-2xl transition-all duration-500 group-hover:bg-[#e9ff00]/30" />

                  {/* number */}
                  <span className="absolute right-6 top-5 text-6xl font-black text-white/5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#e9ff00] shadow-lg">
                      <Icon className="h-7 w-7 text-[#00182e] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold leading-snug text-white">
                      {prob.name}
                    </h3>

                    <p className="leading-relaxed text-slate-300">{prob.intro}</p>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 mt-6">
                      <span className="text-sm font-bold uppercase tracking-wider text-[#e9ff00]">
                        View repair guide
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9ff00] font-bold text-[#00182e] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Brands We Service</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our technicians are trained to repair all major washing machine brands, both front-load and top-load models. We carry common spare parts to ensure quick fixes.
              </p>
              <Button asChild>
                <Link href="/contact">Check if we service yours</Link>
              </Button>
            </div>

            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
              {brands.map((brand, idx) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className={`group flex h-20 items-center justify-center rounded-xl p-4 text-center font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 ${brandStyles[idx % brandStyles.length]}`}
                >
                  {brand.name}
                  <span className="ml-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Simple Repair Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting your washing machine fixed shouldn't be a hassle. Here is how we work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "1", title: "Contact Us", desc: "Reach out via WhatsApp or call describing the issue and brand." },
                { step: "2", title: "Schedule", desc: "We'll arrange a convenient time for our technician to visit." },
                { step: "3", title: "Diagnosis", desc: "We'll inspect the machine and provide a transparent quote." },
                { step: "4", title: "Repair", desc: "Once approved, we fix the issue right then and there." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center bg-lime-500 md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none relative">
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white border-2 border-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-800 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-lime-500 hover:bg-accent/90 text-accent-foreground" asChild>
              <a
                href="https://wa.me/6584130016"
                onClick={trackGoogleAdsConversion}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Repair Now
              </a>
            </Button>
            <p className="mt-4 text-sm text-slate-500">
              Want to try a quick check first? Read our <Link href="/blog" className="font-semibold text-primary hover:underline">washing machine troubleshooting tips</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}