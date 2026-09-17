import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { trackConversion } from "@/lib/track";

export default function WhatsAppFab() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100%-24px)] max-w-md gap-3">
      
      {/* Call Now Button */}
      <a
        href="tel:+6584130016"
        onClick={() => trackConversion("call_click")}
        aria-label="Call us now"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl active:scale-95"
      >
        <FaPhoneAlt size={18} />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6584130016"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion("whatsapp_click")}
        aria-label="Chat on WhatsApp"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-xl active:scale-95"
      >
        <FaWhatsapp size={22} />
        <span>WhatsApp</span>
      </a>

    </div>
  );
}