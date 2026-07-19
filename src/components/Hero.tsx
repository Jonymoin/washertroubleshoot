import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, CheckCircle2, Clock, ShieldCheck, Wrench } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: CheckCircle2, text: "500+ Repairs Done" },
    { icon: Clock, text: "Same-Day Service" },
    { icon: ShieldCheck, text: "30-Day Warranty" },
    { icon: Wrench, text: "All Major Brands" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="blob bg-purple-600/20 w-[500px] h-[500px] top-[-100px] left-[-100px]" />
      <div className="blob bg-teal-500/20 w-[400px] h-[400px] top-[20%] right-[-50px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-orange-500/30 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">Available Today in Singapore</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Singapore's #1 <br />
            <span className="text-gradient-primary">Washing Machine</span> <br />
            Repair Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Same-day repair, certified technicians, 30-day warranty. We fix all major brands island-wide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://wa.me/6584130016?text=Hi%2C%20I%20need%20washing%20machine%20repair%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-primary rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all hover:-translate-y-1"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us Now
            </a>
            <a
              href="tel:+6584130016"
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 text-base font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded-full hover:bg-teal-500/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center gap-3 text-center group hover:border-orange-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                  <stat.icon className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-sm font-medium text-foreground/90">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}