import { motion } from "framer-motion";
import { AlertTriangle, Droplets, Volume2, PowerOff, Zap, ShieldAlert, Thermometer, Info } from "lucide-react";

export default function Problems() {
  const problems = [
    {
      title: "Washer Not Spinning",
      description: "Drum won't rotate during the wash or spin cycle.",
      icon: Zap,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Water Leaking",
      description: "Puddles forming under or around the machine.",
      icon: Droplets,
      color: "from-teal-400 to-cyan-500"
    },
    {
      title: "Not Draining Properly",
      description: "Water remains in the drum after the cycle ends.",
      icon: AlertTriangle,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Error Code Showing",
      description: "Digital display flashes unknown error codes.",
      icon: Info,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Drum Making Noise",
      description: "Loud banging, grinding, or squeaking sounds.",
      icon: Volume2,
      color: "from-red-400 to-rose-500"
    },
    {
      title: "Won't Start / No Power",
      description: "Machine is completely unresponsive when turned on.",
      icon: PowerOff,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Door Won't Open/Close",
      description: "Latch is stuck or the seal is broken.",
      icon: ShieldAlert,
      color: "from-orange-400 to-amber-500"
    },
    {
      title: "Water Not Filling",
      description: "Drum stays empty even after cycle starts.",
      icon: Thermometer,
      color: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <section id="problems" className="py-20 relative border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Wrong With Your Washer?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">We diagnose and fix all common washing machine issues quickly and effectively.</p>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="glass-card p-6 rounded-2xl group hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prob.color} p-[1px] mb-4 shadow-lg`}>
                <div className="w-full h-full bg-card rounded-[11px] flex items-center justify-center">
                  <prob.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{prob.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{prob.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}