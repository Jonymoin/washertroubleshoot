import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplets, AlertTriangle, Disc, DoorOpen, Settings } from "lucide-react";
import { Link } from "wouter";
import { trackConversion } from "@/lib/track";
import { brands, problems } from "./repair-data";

const problemIcons = [Droplets, Disc, AlertTriangle, Settings, DoorOpen, Wrench];
const problemStyles = [
  "from-cyan-50 to-white border-cyan-100",
  "from-blue-50 to-white border-blue-100",
  "from-violet-50 to-white border-violet-100",
  "from-amber-50 to-white border-amber-100",
  "from-rose-50 to-white border-rose-100",
  "from-emerald-50 to-white border-emerald-100",
];
const brandStyles = [
  "bg-cyan-50 border-cyan-100 hover:border-cyan-400 hover:text-cyan-700",
  "bg-blue-50 border-blue-100 hover:border-blue-400 hover:text-blue-700",
  "bg-violet-50 border-violet-100 hover:border-violet-400 hover:text-violet-700",
  "bg-amber-50 border-amber-100 hover:border-amber-400 hover:text-amber-700",
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
              Choose the symptom that matches your washer and get practical guidance from our repair team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((prob, idx) => {
              const Icon = problemIcons[idx % problemIcons.length];
              return (
              <motion.div
                key={prob.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/problems/${prob.slug}`} className="group block h-full">
                  <Card className={`h-full border bg-gradient-to-br ${problemStyles[idx % problemStyles.length]} shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all`}>
                    <CardContent className="p-8">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                        <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-primary">{prob.name}</h3>
                      <p className="leading-relaxed text-slate-600">{prob.intro}</p>
                      <span className="mt-5 inline-flex items-center text-sm font-bold text-primary">View repair guide <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
              );
            })}
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
                  key={brand.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  
                >
                  <Link
                    href={`/brands/${brand.slug}`}
                    className={`group flex h-20 items-center justify-center rounded-xl border p-4 text-center font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:shadow-md ${brandStyles[idx % brandStyles.length]}`}
                  >
                    {brand.name}
                    <span className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">→</span>
                  </Link>
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
                <div key={idx} className="flex flex-col items-center text-center bg-yellow-500 md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none relative">
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white border-2 border-primary-foreground">
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
              <a href="https://wa.me/6584130016"   onClick={() => trackConversion("whatsapp_click")}
               target="_blank" rel="noopener noreferrer">
                Book a Repair Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
