import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { trackConversion } from "@/lib/track";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/common-problems", label: "Problems" },
  { to: "/brands", label: "Brands" },
  { to: "/coverage-areas", label: "Coverage" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faqs", label: "FAQs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-brand-foreground">W</span>
          <span>
            Washer<span className="text-gradient-green">TroubleShoot</span>SG
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-brand" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+6584130016"
          onClick={() => trackConversion("header_call")}
          className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/30 transition hover:opacity-90 lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          +65 8413 0016
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md p-2 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-brand" }}
                inactiveProps={{ className: "text-foreground/80" }}
                className="rounded-md px-3 py-3 text-base font-medium"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+6584130016"
              onClick={() => {
                trackConversion("mobile_header_call");
                setOpen(false);
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground"
            >
              <Phone className="h-4 w-4" /> Call +65 8413 0016
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
