import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, Send, CheckCircle2, X } from "lucide-react";

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-md w-full rounded-3xl p-8 text-center overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(20,25,35,0.98) 0%, rgba(13,17,23,0.99) 100%)",
            border: "1px solid rgba(249,115,22,0.3)",
            boxShadow: "0 0 60px rgba(249,115,22,0.2), 0 25px 50px rgba(0,0,0,0.6)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div className="blob bg-orange-500/20 w-[250px] h-[250px] top-[-80px] right-[-80px]" />
            <div className="blob bg-teal-500/15 w-[200px] h-[200px] bottom-[-60px] left-[-60px]" />
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            data-testid="button-close-modal"
          >
            <X className="w-4 h-4 text-white/60" />
          </button>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2, damping: 15, stiffness: 300 }}
            className="relative z-10 mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #f97316, #eab308)",
              boxShadow: "0 0 40px rgba(249,115,22,0.5)",
            }}
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </motion.div>

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-white mb-2"
            >
              Enquiry Sent!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 mb-6 leading-relaxed"
            >
              Thank you for reaching out! Our team will contact you shortly.
              For the fastest response, WhatsApp us directly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://wa.me/6584130016?text=Hi%2C%20I%20need%20washing%20machine%20repair%20help"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-white font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(90deg, #f97316, #eab308)",
                  boxShadow: "0 0 20px rgba(249,115,22,0.3)",
                }}
                data-testid="button-whatsapp-success"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Now
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-5 rounded-xl text-white/70 font-semibold border border-white/10 hover:bg-white/5 transition-all"
                data-testid="button-close-success"
              >
                Close
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", brand: "", problem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setForm({ name: "", phone: "", brand: "", problem: "" });
    }, 1200);
  };

  return (
    <>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

      <section id="contact" className="py-24 relative border-t border-border/30">
        <div className="blob bg-teal-600/10 w-[400px] h-[400px] bottom-[10%] right-[-150px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Book Your Repair Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground/70 max-w-2xl mx-auto"
            >
              Get in touch via WhatsApp for the fastest response, or fill out our online form.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col gap-5">
              <motion.a
                href="https://wa.me/6584130016?text=Hi%2C%20I%20need%20washing%20machine%20repair%20help"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative p-7 rounded-3xl overflow-hidden group transition-all"
                style={{
                  background: "linear-gradient(145deg, rgba(37,211,102,0.08), rgba(13,17,23,0.9))",
                  border: "1px solid rgba(37,211,102,0.25)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 30px rgba(37,211,102,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                data-testid="link-whatsapp-contact"
              >
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ border: "1px solid rgba(37,211,102,0.4)" }}
                />
                <div className="absolute right-0 top-0 w-36 h-36 bg-green-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-green-500/20 transition-colors" />
                <div className="flex items-center gap-5 relative z-10">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center">
                      <FaWhatsapp className="w-8 h-8 text-[#25D366]" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl border border-[#25D366]/50"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-white">WhatsApp Us</h3>
                    <p className="text-lg font-semibold text-white mb-1">+65 8413 0016</p>
                    <p className="text-sm text-green-400 font-medium">Fastest response — usually within minutes</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+6584130016"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative p-7 rounded-3xl overflow-hidden group transition-all"
                style={{
                  background: "linear-gradient(145deg, rgba(6,182,212,0.08), rgba(13,17,23,0.9))",
                  border: "1px solid rgba(6,182,212,0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                data-testid="link-call-contact"
              >
                <div className="absolute right-0 top-0 w-36 h-36 bg-teal-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-teal-500/20 transition-colors" />
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-white">Call Us</h3>
                    <p className="text-lg font-semibold text-white mb-1">+65 8413 0016</p>
                    <p className="text-sm text-foreground/50">Available during business hours</p>
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(234,179,8,0.05))",
                  border: "1px solid rgba(249,115,22,0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <p className="text-sm text-foreground/60 leading-relaxed">
                  <span className="text-orange-400 font-semibold">Operating Hours:</span> Mon–Sun, 9am–8pm including Public Holidays. Same-day bookings available!
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(13,17,23,0.95))",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[60px] rounded-full pointer-events-none" />
              <h3 className="text-2xl font-bold mb-6 relative z-10">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/70">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.border = "1px solid rgba(249,115,22,0.5)")}
                    onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                    placeholder="John Doe"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground/70">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.border = "1px solid rgba(249,115,22,0.5)")}
                    onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                    placeholder="+65 8413 0016"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <label htmlFor="brand" className="block text-sm font-medium mb-2 text-foreground/70">Washer Brand</label>
                  <select
                    id="brand"
                    required
                    value={form.brand}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: form.brand ? "white" : "rgba(255,255,255,0.3)",
                    }}
                    onFocus={(e) => (e.target.style.border = "1px solid rgba(249,115,22,0.5)")}
                    onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                    data-testid="select-brand"
                  >
                    <option value="" disabled style={{ background: "#0d1117" }}>Select Brand</option>
                    {["Samsung", "LG", "Bosch", "Panasonic", "Mitsubishi", "Electrolux", "Hitachi", "Sharp", "Toshiba", "Haier", "Whirlpool", "Fisher & Paykel", "Miele", "Smeg", "Other"].map((b) => (
                      <option key={b} value={b} style={{ background: "#0d1117" }}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="problem" className="block text-sm font-medium mb-2 text-foreground/70">Problem Description</label>
                  <textarea
                    id="problem"
                    required
                    rows={3}
                    value={form.problem}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all resize-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.border = "1px solid rgba(249,115,22,0.5)")}
                    onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                    placeholder="Tell us what's wrong with your washer..."
                    data-testid="textarea-problem"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full mt-2 py-4 px-6 flex items-center justify-center gap-2 font-semibold text-white rounded-xl disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                  style={{
                    background: "linear-gradient(90deg, #f97316, #eab308)",
                    boxShadow: "0 0 25px rgba(249,115,22,0.3)",
                  }}
                  data-testid="button-submit-enquiry"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
