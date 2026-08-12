import { FaWhatsapp } from "react-icons/fa";
import { trackConversion } from "@/lib/track";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/6584130016"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackConversion("whatsapp_click")}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />

      {/* Tooltip on hover for desktop */}
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Need help? WhatsApp us!
      </span>
    </a>
  );
}