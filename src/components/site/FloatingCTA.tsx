import { MessageCircle, Phone } from "lucide-react";
import { trackConversion } from "@/lib/track";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/6584130016"
        target="_blank"
        rel="noopener"
        onClick={() => trackConversion("floating_whatsapp")}
        aria-label="WhatsApp us"
        className="grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-foreground shadow-xl shadow-brand/40 transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+6584130016"
        onClick={() => trackConversion("floating_call")}
        aria-label="Call us"
        className="grid h-14 w-14 place-items-center rounded-full bg-black text-white shadow-xl shadow-black/30 transition hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
