import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplets, AlertTriangle, Disc, DoorOpen, Settings, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const problems = [
  {
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "Not Draining or Leaking",
    desc: "Water left in the drum after a cycle or leaking onto the floor. Often caused by clogged pump filters, faulty drain pumps, or broken door seals."
  },
  {
    icon: <Disc className="w-8 h-8 text-primary" />,
    title: "Not Spinning",
    desc: "Clothes come out soaking wet. This could be due to a broken drive belt, worn-out motor carbon brushes, or an unbalanced load sensor issue."
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-primary" />,
    title: "Strange Noises",
    desc: "Loud banging, grinding, or screeching sounds during the wash or spin cycle. Usually indicates worn drum bearings or foreign objects trapped in the drum."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Error Codes",
    desc: "Flashing lights or error codes on the display panel. We can decipher what these codes mean for all major brands and fix the underlying issue."
  },
  {
    icon: <DoorOpen className="w-8 h-8 text-primary" />,
    title: "Door Won't Open",
    desc: "The cycle has finished but the door remains locked. This is typically a faulty door interlock mechanism or a control board issue."
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "No Power / Won't Start",
    desc: "The machine is completely dead or refuses to start a cycle. Could be an issue with the main control module, power cable, or door switch."
  }
];

const brands = [
  "Samsung", "LG", "Bosch", "Panasonic", "Toshiba", 
  "Electrolux", "Hitachi", "Whirlpool", "Sharp", "Mitsubishi",
  "Miele", "Fisher & Paykel"
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Repair Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300"
          >
            Expert diagnosis and repair for all washing machine problems. We bring your appliances back to life, saving you the cost of a replacement.
          </motion.p>
        </div>
      </div>

      {/* Problems We Fix */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Problems We Fix</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              If your washing machine is exhibiting any of these symptoms, it's time to call in the experts before the problem gets worse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-8">
                    <div className="mb-6 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center">
                      {prob.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{prob.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{prob.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Brands We Service</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our technicians are trained to repair all major washing machine brands, both front-load and top-load models. We carry common spare parts to ensure quick fixes.
              </p>
              <Button asChild>
                <Link href="/contact">Check if we service yours</Link>
              </Button>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
              {brands.map((brand, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center font-semibold text-slate-700 flex items-center justify-center h-20"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Simple Repair Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting your washing machine fixed shouldn't be a hassle. Here is how we work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "1", title: "Contact Us", desc: "Reach out via WhatsApp or call describing the issue and brand." },
                { step: "2", title: "Schedule", desc: "We'll arrange a convenient time for our technician to visit." },
                { step: "3", title: "Diagnosis", desc: "We'll inspect the machine and provide a transparent quote." },
                { step: "4", title: "Repair", desc: "Once approved, we fix the issue right then and there." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white border-2 border-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="https://wa.me/6584130016" target="_blank" rel="noopener noreferrer">
                Book a Repair Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
