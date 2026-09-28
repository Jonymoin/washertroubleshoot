import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackGoogleAdsConversion } from "@/lib/googleAds";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Tips & Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent background page scrolling while menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg text-white group-hover:bg-primary/90 transition-colors">
              <img
                src="/logo.webp"
                alt="Washertroubleshoot Singapore"
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-slate-900 tracking-tight">
                Washertroubleshoot
              </span>

              <span className="text-primary font-bold text-xs uppercase tracking-wider">
                Singapore
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location === link.href
                        ? "text-primary"
                        : "text-slate-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a
                  href="https://wa.me/6584130016"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackGoogleAdsConversion}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU
          IMPORTANT: This is OUTSIDE the header
         ========================================================= */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9998] bg-slate-900/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed top-0 right-0 bottom-0 z-[9999] flex w-[85%] max-w-sm flex-col bg-white shadow-2xl md:hidden"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <span className="text-lg font-bold text-slate-900">
                  Menu
                </span>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-5 py-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        location === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col gap-3 border-t border-slate-100 p-6">
                <Button
                  className="w-full bg-accent hover:bg-accent/90"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://wa.me/6584130016"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackGoogleAdsConversion}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a
                    href="tel:+6584130016"
                    onClick={trackGoogleAdsConversion}
                  >
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Call +65 8413 0016
                  </a>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}