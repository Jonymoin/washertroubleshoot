import { motion } from "framer-motion";
import { Award, Clock, Wrench, DollarSign, ShieldCheck, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Certified & Experienced",
      desc: "All our technicians are trained and certified",
      icon: Award,
      accent: "text-orange-400",
      borderHover: "hover:border-orange-500/50"
    },
    {
      title: "Same-Day Service",
      desc: "We respond fast, often within hours",
      icon: Clock,
      accent: "text-teal-400",
      borderHover: "hover:border-teal-500/50"
    },
    {
      title: "All Major Brands",
      desc: "Samsung, LG, Bosch, Panasonic and more",
      icon: Wrench,
      accent: "text-purple-400",
      borderHover: "hover:border-purple-500/50"
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees — upfront quotes before we start",
      icon: DollarSign,
      accent: "text-green-400",
      borderHover: "hover:border-green-500/50"
    },
    {
      title: "30-Day Warranty",
      desc: "Every repair backed by our warranty",
      icon: ShieldCheck,
      accent: "text-blue-400",
      borderHover: "hover:border-blue-500/50"
    },
    {
      title: "Island-wide Coverage",
      desc: "Serving all areas across Singapore",
      icon: MapPin,
      accent: "text-pink-400",
      borderHover: "hover:border-pink-500/50"
    }
  ];

  return (
    <section className="py-24 relative border-t border-border/30 overflow-hidden">
      <div className="blob bg-orange-600/10 w-[400px] h-[400px] top-[20%] left-[-150px]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">We deliver reliable, fast, and professional appliance repair services.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`glass-card p-6 rounded-2xl flex items-start gap-4 group transition-colors duration-300 border border-border/50 ${reason.borderHover}`}
            >
              <div className="p-3 rounded-xl bg-card border border-border/50 group-hover:bg-white/5 transition-colors">
                <reason.icon className={`w-6 h-6 ${reason.accent}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm text-foreground/70">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}