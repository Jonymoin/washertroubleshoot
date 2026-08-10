import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const articles = [
  {
    title: "Why is my washing machine not draining?",
    summary: "A common issue that can often be fixed without professional help. Learn how to check your pump filter and drain hose.",
    date: "Oct 12, 2023",
    readTime: "4 min read",
    content: "If your washing machine is full of water at the end of a cycle, the most likely culprit is a blocked pump filter. This filter catches coins, hairpins, and lint before they reach the pump. Locate the small door at the bottom front of your machine, place a towel and shallow dish underneath, and carefully unscrew the filter. Clean out any debris and replace it tightly. If this doesn't solve the issue, your drain hose might be kinked, or the pump itself may have failed, which usually requires a technician."
  },
  {
    title: "How to maintain your washing machine",
    summary: "Simple monthly maintenance tips to extend the life of your washer and prevent foul odors.",
    date: "Nov 05, 2023",
    readTime: "3 min read",
    content: "To keep your washing machine smelling fresh and running smoothly, run a hot maintenance wash (90°C) empty once a month with a specialized cleaner or white vinegar. After every wash, leave the door slightly ajar to let the drum dry out and prevent mold growth on the rubber door seal. Regularly wipe down the door seal with a damp cloth to remove detergent residue and lint. Also, occasionally remove the detergent drawer and clean it thoroughly under warm water."
  },
  {
    title: "Common washing machine error codes explained",
    summary: "What those flashing lights and numbers mean on Samsung, LG, and Bosch washing machines.",
    date: "Dec 18, 2023",
    readTime: "5 min read",
    content: "Error codes are your machine's way of telling you what's wrong. For Samsung, '4E' or '5E' usually means a draining issue, while 'UE' means an unbalanced load. On LG machines, 'OE' indicates it can't drain, and 'LE' points to a motor lock error. For Bosch, 'E18' is a pump block, and 'E21' is a motor issue. Always check your specific manual, but knowing these basics can help you decide if it's a simple fix (like rebalancing the load) or if you need to call a professional."
  },
  {
    title: "When to repair vs replace your washing machine",
    summary: "Is it worth fixing that 8-year-old washer? A guide to making the most economical decision.",
    date: "Jan 22, 2024",
    readTime: "4 min read",
    content: "A good rule of thumb is the 50% rule: if the repair costs more than 50% of the price of a new, comparable machine, and the washer is more than half through its expected lifespan (usually 10-12 years), it might be time to replace. Minor issues like blocked pumps, worn carbon brushes, or broken belts are almost always worth repairing. However, if the main control board dies on an old machine, or if the drum spider/bearings have failed (which requires a complete teardown), replacement is often the smarter financial choice."
  }
];

export default function Blog() {
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
            Appliance Tips & Advice
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300"
          >
            Helpful guides to maintain your washing machine, troubleshoot minor issues, and know when to call a professional.
          </motion.p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-12">
            {articles.map((article, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{article.readTime}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {article.title}
                </h2>
                
                <p className="text-lg text-slate-600 font-medium mb-6">
                  {article.summary}
                </p>
                
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p>{article.content}</p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Wrench className="w-5 h-5" />
                    <span>Need help with this?</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">Contact Technician</Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5 text-center border-t border-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Can't figure out the problem?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Don't risk causing more damage by trying to fix complex issues yourself. Our professional technicians are just a message away.
          </p>
          <Button className="rounded-full" asChild>
            <a href="https://wa.me/6584130016" target="_blank" rel="noopener noreferrer">
              WhatsApp for a Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
