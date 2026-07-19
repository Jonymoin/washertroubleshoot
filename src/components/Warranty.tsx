import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Warranty() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden glass-panel border border-orange-500/20"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Every Repair Backed by Our <span className="text-gradient-primary">30-Day Warranty</span></h2>
              <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
                We stand behind the quality of our work. If the same issue recurs within 30 days of your repair, we'll come back and fix it at no extra cost. Your peace of mind is our priority.
              </p>
            </div>
            
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 flex items-center justify-center rounded-full bg-gradient-primary p-1 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-orange-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}