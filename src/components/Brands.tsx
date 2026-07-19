import { motion } from "framer-motion";

export default function Brands() {
  const brands = [
    "Samsung", "LG", "Bosch", "Panasonic", "Mitsubishi", 
    "Electrolux", "Fisher & Paykel", "Hitachi", "Haier", 
    "Sharp", "Toshiba", "Whirlpool", "Smeg", "Miele"
  ];

  return (
    <section id="brands" className="py-20 relative border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Repair All Major Brands</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">No matter the make or model, our certified technicians have the expertise to fix it.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto"
        >
          {brands.map((brand, i) => {
            // Distribute colors based on index
            const colorClass = 
              i % 3 === 0 ? "border-orange-500/30 text-orange-100 bg-orange-500/5 hover:bg-orange-500/20" :
              i % 3 === 1 ? "border-teal-500/30 text-teal-100 bg-teal-500/5 hover:bg-teal-500/20" :
              "border-purple-500/30 text-purple-100 bg-purple-500/5 hover:bg-purple-500/20";

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                className={`px-6 py-3 rounded-full border glass-panel backdrop-blur-md transition-all cursor-default text-sm md:text-base font-medium ${colorClass}`}
              >
                {brand}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}