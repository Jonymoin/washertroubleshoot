import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {  PhoneCall, Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackConversion } from "@/lib/track";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-slate-600"
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
              <a href="https://wa.me/6584130016" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp_click")}>
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-[70] shadow-2xl flex flex-col md:hidden"
            >
              <div className="p-5 flex items-center justify-between border-b border-slate-100">
                <span className="font-bold text-lg text-slate-900">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location === link.href 
                        ? "bg-primary/10 text-primary" 
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="p-6 border-t border-slate-100 flex flex-col gap-3">
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://wa.me/6584130016" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp_click")}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a href="tel:+6584130016" onClick={() => trackConversion("call_click")}>
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Call +65 8413 0016
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
