import React, { useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Calendar,
  MessageSquare,
  AlertCircle,
  Search,
  Phone,
} from "lucide-react";

export interface BrandItem {
  name: string;
  logoText: string;
  country: string;
  category: "European" | "Korean & Japanese" | "American & Global";
  desc: string;
  errorCodes?: { code: string; meaning: string }[];
}

export const DEFAULT_BRANDS: BrandItem[] = [
  {
    name: "Bosch",
    logoText: "BOSCH",
    country: "Germany",
    category: "European",
    desc: "German engineered front-load washers known for EcoSilence Drive motors and VarioDrum technology. Common repairs include drain pump clearing, door seal gaskets, and motor carbon brush replacements.",
    errorCodes: [
      { code: "E18 / F18", meaning: "Drain pump blocked or filter clogged" },
      { code: "E23 / F23", meaning: "Aquastop leak sensor triggered" },
      { code: "E16 / F16", meaning: "Door latch lock switch failure" },
      { code: "E29 / F29", meaning: "Water intake solenoid valve fault" },
    ],
  },
  {
    name: "Samsung",
    logoText: "SAMSUNG",
    country: "South Korea",
    category: "Korean & Japanese",
    desc: "Popular digital inverter front & top loaders with AddWash doors and EcoBubble technology. Frequently serviced for water drainage issues, vibration damper rods, and PCB control board faults.",
    errorCodes: [
      { code: "4E / 4C", meaning: "Water supply timeout or valve blocked" },
      { code: "5E / 5C", meaning: "Drain error - water remains in drum" },
      { code: "UE / UB", meaning: "Unbalanced tub load during spin" },
      { code: "dE / dC", meaning: "Door open or lock switch failure" },
    ],
  },
  {
    name: "LG",
    logoText: "LG",
    country: "South Korea",
    category: "Korean & Japanese",
    desc: "Direct Drive 6 Motion washing machines and TurboWash combos. Expert repairs for hall sensors, drain pump motors, drum bearings, and water inlet valve replacements.",
    errorCodes: [
      { code: "OE", meaning: "Drain hose or pump blockage error" },
      { code: "IE", meaning: "Water inlet level timeout error" },
      { code: "UE", meaning: "Unbalanced load sensor triggered" },
      { code: "LE", meaning: "Direct Drive motor lock or overload" },
    ],
  },
  {
    name: "Electrolux",
    logoText: "Electrolux",
    country: "Sweden",
    category: "European",
    desc: "High-efficiency UltraMix and VapourCare front-load washers. Specialized solutions for door rubber bellows leaks, drum belt slippage, and main board EEPROM programming.",
    errorCodes: [
      { code: "E10 / E11", meaning: "Water fill failure or tap closed" },
      { code: "E20 / E21", meaning: "Drain filter obstruction or pump fault" },
      { code: "E40 / E41", meaning: "Door interlock safety open error" },
      { code: "E90 / E91", meaning: "Communication failure with display board" },
    ],
  },
  {
    name: "Panasonic",
    logoText: "Panasonic",
    country: "Japan",
    category: "Korean & Japanese",
    desc: "Durable ActiveFoam and Econavi top and front-loading washing machines. We repair gearboxes, drain tractor motors, lid safety sensors, and intake valves.",
    errorCodes: [
      { code: "U11", meaning: "Draining fault - check lint trap" },
      { code: "U12", meaning: "Top door lid open during spin" },
      { code: "U14", meaning: "Water supply intake timeout" },
      { code: "H01", meaning: "Water level pressure sensor error" },
    ],
  },
  {
    name: "Hitachi",
    logoText: "HITACHI",
    country: "Japan",
    category: "Korean & Japanese",
    desc: "Auto Self Clean top and front load washers. Specialist service for pulsator drive belts, suspension springs, drain valves, and main PCB modules.",
    errorCodes: [
      { code: "C01", meaning: "Water intake supply error" },
      { code: "C02", meaning: "Drainage malfunction within time limit" },
      { code: "C04", meaning: "Unbalanced tub vibration sensor" },
      { code: "C08", meaning: "Lid lock safety switch error" },
    ],
  },
  {
    name: "Toshiba",
    logoText: "TOSHIBA",
    country: "Japan",
    category: "Korean & Japanese",
    desc: "GreatWaves technology washers and washer-dryer combos. On-site repairs for spin motors, capacitor starters, pressure switches, and control buttons.",
    errorCodes: [
      { code: "E1", meaning: "Drainage failure / pump clogged" },
      { code: "E2", meaning: "Door lid safety lock fault" },
      { code: "E3", meaning: "Unbalanced spin drum warning" },
      { code: "E5", meaning: "Water supply timeout or valve error" },
    ],
  },
  {
    name: "Miele",
    logoText: "Miele",
    country: "Germany",
    category: "European",
    desc: "Premium Honeycomb drum washers engineered for longevity. Full diagnostic and repair service using original Miele spare parts, heater elements, and NTC sensors.",
    errorCodes: [
      { code: "F11", meaning: "Drainage obstruction or pump fault" },
      { code: "F20", meaning: "Heating failure - element or sensor" },
      { code: "Waterproof", meaning: "Internal drip tray flood sensor tripped" },
    ],
  },
  {
    name: "Whirlpool",
    logoText: "Whirlpool",
    country: "USA",
    category: "American & Global",
    desc: "6th Sense front and top load washers. Repairs for drive couplers, shift actuators, agitators, water valves, and electronic control units.",
    errorCodes: [
      { code: "F0E2", meaning: "Over-sudsing condition detected" },
      { code: "F5E2", meaning: "Door lock failing to lock" },
      { code: "F8E1", meaning: "No water inlet pressure" },
    ],
  },
  {
    name: "Fisher & Paykel",
    logoText: "Fisher&Paykel",
    country: "New Zealand",
    category: "American & Global",
    desc: "SmartDrive direct drive agitator and front-load washers. Experts in rotor/stator position sensors, pump cartridges, and display modules.",
    errorCodes: [
      { code: "Fault 37", meaning: "Water level sensor out of range" },
      { code: "Fault 130", meaning: "Motor direct drive controller fault" },
      { code: "Fault 230", meaning: "Drain pump circuit disconnected" },
    ],
  },
  {
    name: "Sharp",
    logoText: "SHARP",
    country: "Japan",
    category: "Korean & Japanese",
    desc: "Holeless tub top-loaders and front-load series. Fast troubleshooting for drain valve motors, belt tension, level sensors, and door locks.",
  },
  {
    name: "Zanussi / Ariston",
    logoText: "ZANUSSI",
    country: "Italy",
    category: "European",
    desc: "Reliable European compact washing machines. Repairs for drum bearings, carbon brushes, heating rods, and door handle triggers.",
  },
];

export interface BrandsProps {
  title?: string;
  subtitle?: string;
  phone?: string;
  whatsappNumber?: string;
  onOpenBooking?: (service?: string, brand?: string) => void;
  brandsList?: BrandItem[];
  className?: string;
  showFilters?: boolean;
}

export const Brands: React.FC<BrandsProps> = ({
  title = "Washing Machine Brands We Repair",
  subtitle = "Genuine spare parts, specialized diagnostic tools, and 90-day warranty across all major washing machine brands in Singapore.",
  phone = "+65 8413 0016",
  whatsappNumber = "6584130016",
  onOpenBooking,
  brandsList = DEFAULT_BRANDS,
  className = "",
  showFilters = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "European", "Korean & Japanese", "American & Global"];

  const filteredBrands = brandsList.filter((brand) => {
    const matchesCategory = selectedCategory === "All" || brand.category === selectedCategory;
    const matchesSearch =
      brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.logoText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsApp = (brandName?: string) => {
    const text = brandName
      ? `Hi, I need repair for my ${brandName} washing machine in Singapore.`
      : `Hi, I have a query about washing machine repair for my brand.`;
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s+/g, "")}`;
  };

  const handleBooking = (brandName: string) => {
    if (onOpenBooking) {
      onOpenBooking("", brandName);
    } else {
      handleWhatsApp(brandName);
    }
  };

  return (
    <section className={`w-full space-y-10 px-4 py-12 text-white sm:px-6 lg:px-8 ${className}`}>
      {/* HEADER SECTION */}
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>100% Genuine Spare Parts Guaranteed</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          {title.includes("We Repair") ? (
            <>
              {title.replace("We Repair", "")}{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                We Repair
              </span>
            </>
          ) : (
            title
          )}
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
          {subtitle}
        </p>
      </div>

      {/* FILTER & SEARCH BAR */}
      {showFilters && (
        <div className="mx-auto max-w-5xl space-y-4">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-neutral-900/80 p-3 backdrop-blur-md sm:flex-row sm:p-4">
            <div className="flex w-full flex-wrap items-center justify-center gap-1.5 sm:w-auto sm:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                      : "bg-black/50 text-neutral-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brand or model..."
                className="w-full rounded-xl border border-white/15 bg-black/60 py-2 pl-9 pr-4 text-xs text-white placeholder-neutral-500 transition-colors focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* BRANDS GRID */}
      <div className="mx-auto max-w-7xl">
        {filteredBrands.length === 0 ? (
          <div className="space-y-3 rounded-2xl border border-white/10 bg-neutral-900/50 py-12 text-center">
            <AlertCircle className="mx-auto h-10 w-10 text-neutral-500" />
            <p className="text-sm font-semibold text-neutral-300">
              No brands found matching "{searchQuery}".
            </p>
            <p className="text-xs text-neutral-400">Don't worry, we repair all brands in Singapore!</p>
            <button
              onClick={() => handleWhatsApp()}
              className="mt-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-black transition-colors hover:bg-emerald-400"
            >
              Ask On WhatsApp
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBrands.map((brand) => (
              <div
                key={brand.name}
                className="group flex flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-black p-6 shadow-xl transition-all duration-300 hover:border-emerald-500/40"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="block font-sans text-2xl font-black tracking-wider text-white">
                        {brand.logoText}
                      </span>
                      <span className="block text-[10px] font-semibold text-neutral-400">
                        Origin: {brand.country}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      Ready Stock
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-neutral-300">{brand.desc}</p>

                  {brand.errorCodes && brand.errorCodes.length > 0 && (
                    <div className="mt-2 space-y-2 rounded-xl border border-white/10 bg-black/70 p-3.5">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase text-emerald-400">
                        <span className="flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5 text-emerald-400" />
                          Common {brand.name} Error Codes
                        </span>
                      </div>

                      <div className="space-y-1.5 text-[11px]">
                        {brand.errorCodes.map((ec, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-2 border-b border-white/5 pb-1 text-neutral-300 last:border-0 last:pb-0"
                          >
                            <span className="rounded bg-emerald-950/40 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                              {ec.code}
                            </span>
                            <span className="max-w-[190px] truncate text-right text-[10px] text-neutral-400">
                              {ec.meaning}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => handleBooking(brand.name)}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-emerald-500 py-2.5 text-xs font-bold text-black shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-400 group-hover:bg-emerald-400"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Book {brand.name} Repair</span>
                  </button>

                  <button
                    onClick={() => handleWhatsApp(brand.name)}
                    className="cursor-pointer rounded-xl border border-white/10 bg-neutral-800 p-2.5 text-emerald-400 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/20"
                    title={`WhatsApp about ${brand.name}`}
                  >
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER CTA BANNER */}
      <div className="mx-auto max-w-5xl pt-6">
        <div className="relative space-y-4 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-neutral-950 via-emerald-950/30 to-neutral-950 p-8 text-center shadow-2xl">
          <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-2xl" />

          <h3 className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
            <Wrench className="h-6 w-6 text-emerald-400" />
            Don't See Your Machine Brand Listed Above?
          </h3>

          <p className="mx-auto max-w-xl text-xs leading-relaxed text-neutral-300 sm:text-sm">
            We repair all brands of front-load, top-load, washer-dryers, and commercial laundry machines across
            Singapore. Our mobile service van carries multi-brand universal parts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleWhatsApp()}
              className="flex cursor-pointer items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-xs font-bold text-black shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Ask Tech Team On WhatsApp ({phone})</span>
            </button>

            <button
              onClick={handleCall}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-neutral-900 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-neutral-800"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              <span>Call Hotline {phone}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
