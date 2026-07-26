import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackConversion } from "@/lib/track";

export function FloatingCTA() {
  return (
    <>
      {/* Call Button - Bottom Left */}
      <div className="fixed bottom-5 left-5 z-40">
        <a
          href="tel:+6584130016"
          onClick={() => trackConversion("floating_call")}
          aria-label="Call us"
          className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-white shadow-xl shadow-red-600/40 transition hover:scale-105"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* WhatsApp Button - Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/6584130016"
          target="_blank"
          rel="noopener"
          onClick={() => trackConversion("floating_whatsapp")}
          aria-label="WhatsApp us"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/50 transition hover:scale-105"
        >
          <FaWhatsapp className="h-8 w-8" />
        </a>
      </div>
    </>
  );
}