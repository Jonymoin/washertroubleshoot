import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { trackGoogleAdsConversion } from "@/lib/googleAds";

export default function WhatsAppFab() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100%-24px)] max-w-md gap-3">
      
      {/* Call Now Button */}
      <a
        href="tel:+6584130016"
        onClick={trackGoogleAdsConversion}
        aria-label="Call us now"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
      >
        <FaPhoneAlt size={18} />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6584130016"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackGoogleAdsConversion}
        aria-label="Chat on WhatsApp"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-xl active:scale-95"
      >
        <FaWhatsapp size={22} />
        <span>WhatsApp</span>
      </a>

    </div>
  );
}