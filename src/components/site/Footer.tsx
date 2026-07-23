import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { trackConversion } from "@/lib/track";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-brand-foreground">W</span>
            <span>WasherTroubleShootSG</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Singapore's trusted washing machine repair specialists. Fast, affordable, same-day service — 7 days a week.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand-glow">
            <Clock className="h-3.5 w-3.5" /> Open 7 days a week
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">Pages</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-brand-glow">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-glow">Services</Link></li>
            <li><Link to="/common-problems" className="hover:text-brand-glow">Common Problems</Link></li>
            <li><Link to="/brands" className="hover:text-brand-glow">Brands</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">More</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/coverage-areas" className="hover:text-brand-glow">Coverage Areas</Link></li>
            <li><Link to="/reviews" className="hover:text-brand-glow">Reviews</Link></li>
            <li><Link to="/faqs" className="hover:text-brand-glow">FAQs</Link></li>
            <li><Link to="/about" className="hover:text-brand-glow">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-glow">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-brand-glow">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-brand-glow">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a href="tel:+6584130016" onClick={() => trackConversion("footer_call")} className="flex items-center gap-2 hover:text-brand-glow">
                <Phone className="h-4 w-4 text-brand-glow" /> +65 8413 0016
              </a>
            </li>
            <li>
              <a href="https://wa.me/6584130016" target="_blank" rel="noopener" onClick={() => trackConversion("footer_whatsapp")} className="flex items-center gap-2 hover:text-brand-glow">
                <MessageCircle className="h-4 w-4 text-brand-glow" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:washertroubleshootsg@gmail.com" onClick={() => trackConversion("footer_email")} className="flex items-center gap-2 hover:text-brand-glow break-all">
                <Mail className="h-4 w-4 text-brand-glow" /> washertroubleshootsg@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-glow" /> Islandwide Singapore
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} WasherTroubleShootSG. All rights reserved.
      </div>
    </footer>
  );
}
