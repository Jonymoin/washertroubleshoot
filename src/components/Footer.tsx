import { Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 pt-16 pb-8 relative overflow-hidden">
      <div className="blob bg-purple-600/10 w-[300px] h-[300px] bottom-0 left-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Washer Troubleshoot SG
              </span>
            </a>
            <p className="text-foreground/70 font-medium max-w-sm mb-6">
              Fast. Reliable. Guaranteed. Singapore's trusted choice for washing machine repairs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-foreground/70 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#problems" className="text-foreground/70 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#brands" className="text-foreground/70 hover:text-orange-400 transition-colors">Brands We Repair</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>Singapore</li>
              <li>
                <a href="tel:+6584130016" className="hover:text-teal-400 transition-colors">
                  +65 8413 0016
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6584130016"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mt-2"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} WashertroubleshootSG | Singapore Washing Machine Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
