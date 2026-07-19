import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
          className="mb-1 mr-1 px-4 py-2 rounded-2xl text-sm font-medium text-white shadow-lg whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, rgba(20,25,35,0.95), rgba(13,17,23,0.98))",
            border: "1px solid rgba(37,211,102,0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 15px rgba(37,211,102,0.1)",
          }}
        >
          <span className="text-green-400">Chat with us</span>
          <span className="text-white/60"> — usually replies in minutes</span>
        </motion.div>
      </motion.div>

      <motion.a
        href="https://wa.me/6584130016?text=Hi%2C%20I%20need%20washing%20machine%20repair%20help"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full text-white"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 4px 25px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0.4)",
        }}
        aria-label="Chat with us on WhatsApp"
        data-testid="button-whatsapp-float"
      >
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(37,211,102,0.4)" }}
        />
        <motion.div
          animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(37,211,102,0.25)" }}
        />
        <FaWhatsapp className="w-8 h-8 relative z-10" />
      </motion.a>
    </div>
  );
}
