import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackConversion } from "@/lib/track";

import { 
   
  Clock, 
  ShieldCheck, 
  ThumbsUp, 
  CheckCircle2, 
  PhoneCall, 
  Star,
  MapPin
} from "lucide-react";
import { brands, problems } from "./repair-data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
  src="/hero-laundry.webp"
  alt="Clean laundry room"
  width="1200"
  height="800"
  fetchPriority="high"
  decoding="async"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                #1 Rated Washing Machine Repair in Singapore
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Fast, Reliable Washing Machine Repair.
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
                Is your washer leaking, not draining, or refusing to spin? Don't let laundry pile up. Our expert technicians fix all major brands right in your home.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full hover:bg-accent/90 text-accent-foreground shadow-lg bg-[#00ff04e0]" asChild>
                  <a href="https://wa.me/6584130016" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp_click")}>
                    WhatsApp Us Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm" asChild>
                  <a href="tel:+6584130016" onClick={() => trackConversion("call_click")}>
                    <PhoneCall className="mr-2 h-5 w-5" />
                    +65 8413 0016
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="text-green-400 w-5 h-5" /> Same-day Service
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="text-green-400 w-5 h-5" /> All Brands
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="text-green-400 w-5 h-5" /> Transparent Pricing
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Singaporeans Trust Us</h2>
            <p className="text-lg text-slate-600">We've built our reputation on honesty, expertise, and showing up when we say we will.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10 text-primary" />,
                title: "Prompt & Punctual",
                desc: "We value your time. We arrive within the scheduled window and aim to fix most issues on the first visit."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "Expert Technicians",
                desc: "Our team has years of experience diagnosing and repairing all major washing machine brands and models."
              },
              {
                icon: <ThumbsUp className="w-10 h-10 text-primary" />,
                title: "Honest Pricing",
                desc: "No hidden fees. We provide a clear quote before any work begins, so you know exactly what you're paying for."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/technician.webp" 
                alt="Washing machine technician" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">Islandwide coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Washing Machine Repair Across Singapore</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our technicians provide convenient in-home washing machine repair across Singapore. Tell us your location and washer problem, and we will arrange a suitable visit.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {[
                  "Tampines", "Bedok", "Pasir Ris", "Punggol", "Sengkang", "Hougang",
                  "Ang Mo Kio", "Bishan", "Toa Payoh", "Serangoon", "Yishun", "Woodlands",
                  "Bukit Batok", "Jurong East", "Clementi", "Queenstown", "Bukit Merah", "Orchard"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 rounded-lg border border-primary/10 bg-primary/5 px-3 py-2.5 text-sm font-semibold text-slate-700">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    {area}
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/contact">Book Service in Your Area</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">Brands we know</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Brands We Service</h2>
              <p className="text-lg text-slate-600 mt-3 max-w-2xl">From everyday front-loaders to premium models, our technicians repair the brands found in Singapore homes.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">View all services <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} className="bg-gradient-to-br from-[#071521] to-[#1769E0] border border-slate-200 rounded-xl px-4 py-5 text-center font-bold text-white hover:border-primary hover:text-primary hover:shadow-2xl hover:bg-black transition-all">
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">Need a quick answer?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-slate-600">Find practical next steps for the symptom you are seeing, then book a technician if it is not safe or simple to resolve.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problems.slice(0, 10).map((problem) => (
              <Link key={problem.slug} href={`/problems/${problem.slug}`} className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 hover:border-primary hover:bg-primary/5 transition-colors">
                <span className="font-semibold text-slate-800 group-hover:text-primary">{problem.name}</span>
                <span aria-hidden="true" className="text-primary text-xl">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8"><Link href="/services" className="text-primary font-semibold hover:underline">See every problem we repair</Link></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-slate-400 text-lg">Real reviews from homeowners across Singapore.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah L.",
                area: "Tampines",
                text: "My Samsung washer suddenly stopped spinning right before a long weekend. Washertroubleshoot came the very next morning, found the broken belt, and fixed it within an hour. Excellent service!"
              },
              {
                name: "David T.",
                area: "Clementi",
                text: "Very professional and honest. I thought my machine's motor was dead and was ready to buy a new one, but the technician found it was just a clogged pump filter. Saved me hundreds of dollars."
              },
              {
                name: "Michelle W.",
                area: "Sengkang",
                text: "Booking via WhatsApp was so easy. The technician was polite, wore a mask, and even cleaned up the floor after fixing the leak. Highly recommend them to anyone needing appliance repair."
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-slate-800 border-slate-700 h-full">
                  <CardContent className="p-8">
                    <div className="flex text-accent mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic">"{review.text}"</p>
                    <div>
                      <p className="font-bold text-white">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.area}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Your Washing Machine Fixed Today?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Contact us now for a quick diagnosis and transparent quote. We cover all areas in Singapore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl border-none" asChild>
              <a href="https://wa.me/6584130016"   onClick={() => trackConversion("whatsapp_click")}
 target="_blank" rel="noopener noreferrer">
                WhatsApp +65 8413 0016
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-red-500 hover:bg-white/10 text-white border-white border-2" asChild>
              <Link href="/contact">View Service Areas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
