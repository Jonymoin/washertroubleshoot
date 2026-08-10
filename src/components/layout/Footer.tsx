import { Link } from "wouter";
import { Wrench, PhoneCall, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg text-primary">
                <img
      src="/logo.webp"
      alt="Washertroubleshoot Singapore"
      className="w-10 h-10 object-contain"
    />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white tracking-tight">Washertroubleshoot</span>
                <span className="text-primary font-bold text-xs uppercase tracking-wider">Singapore</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your reliable neighborhood washing machine repair experts in Singapore. We fix all major brands with transparent pricing and guaranteed workmanship.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Repair Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Tips & Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy-policy</Link></li>
              <li><Link href="/terms&condition" className="hover:text-primary transition-colors">Terms&Condition</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">Not Draining / Spinning</li>
              <li className="text-slate-400">Strange Noises</li>
              <li className="text-slate-400">Water Leaks</li>
              <li className="text-slate-400">Error Codes</li>
              <li className="text-slate-400">Drum Replacements</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white">Call Us</span>
                  <a href="tel:+6584130016" className="hover:text-primary transition-colors">+65 8413 0016</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white">WhatsApp</span>
                  <a href="https://wa.me/6584130016" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+65 8413 0016</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white">Email</span>
                  <a href="mailto:washertroubleshootsg@gmail.com" className="hover:text-primary transition-colors break-all">washertroubleshootsg@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white">Hours</span>
                  <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white">Service Area</span>
                  <span>Islandwide Singapore</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Washertroubleshoot SG. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
