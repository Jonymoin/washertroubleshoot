import { motion } from "framer-motion";
import { Shield, Award, Users, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Washertroubleshoot SG
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300"
          >
            Your trusted neighborhood washing machine repair experts serving homes across Singapore with honesty and technical excellence.
          </motion.p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/technician.webp" 
                  alt="Technician at work" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
                <img 
                  src="/hero-laundry.webp" 
                  alt="Clean washing machine" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Washertroubleshoot SG started with a simple mission: to provide honest, reliable, and reasonably priced appliance repair to Singaporean households. 
                </p>
                <p>
                  We noticed that many homeowners were quick to throw away perfectly good washing machines just because of a minor faulty part, often because finding a trustworthy repairman was too difficult. We set out to change that.
                </p>
                <p>
                  Today, we are proud to be a trusted name in local appliance repair. Our philosophy remains unchanged: we treat every home with respect, we diagnose problems accurately, and we only fix what actually needs fixing.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-4xl font-extrabold text-primary mb-2">10+</h4>
                  <p className="font-medium text-slate-900">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-primary mb-2">5000+</h4>
                  <p className="font-medium text-slate-900">Machines Fixed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-slate-600">
              We know you have choices when it comes to appliance repair. Here is why thousands of Singaporeans trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Honest Diagnostics",
                desc: "We tell you exactly what's wrong. If it's cheaper to buy a new machine than to repair the old one, we'll tell you upfront."
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "Trained Expertise",
                desc: "Our technicians stay up-to-date with the latest models and electronics for all major brands."
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-primary" />,
                title: "Respect for Your Home",
                desc: "We work cleanly, protect your floors, and clean up the area after the repair is completed."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Friendly Service",
                desc: "We believe good service comes with a smile. We're happy to explain the issue and how to prevent it in the future."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
              >
                <div className="mb-4 bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to get your washer working?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Don't let laundry pile up. Contact our friendly team today and we'll have your machine running smoothly in no time.
          </p>
          <Button size="lg" className="rounded-full px-8 py-6 text-lg" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
