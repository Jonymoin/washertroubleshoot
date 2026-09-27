import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { articles } from "./blog-data";
import { findEntry, problems } from "./repair-data";
import { useSEO } from "@/hooks/useSEO";
import { breadcrumbListJsonLd } from "@/lib/seo";

export default function Blog() {
  useSEO({
    title: "Washing Machine Troubleshooting Tips & Advice | Washertroubleshoot SG",
    description:
      "Practical washing machine troubleshooting and maintenance tips from Washertroubleshoot SG — drainage issues, error codes, cleaning, and repair-vs-replace advice.",
    path: "/blog",
    jsonLd: breadcrumbListJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  });

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
            {articles.map((article, idx) => {
              const relatedProblem = article.relatedProblemSlug
                ? findEntry(problems, article.relatedProblemSlug)
                : undefined;

              return (
              <motion.article 
                key={article.slug}
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
                  <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </h2>
                
                <p className="text-lg text-slate-600 font-medium mb-6">
                  {article.summary}
                </p>
                
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p>{article.content}</p>
                </div>

                {relatedProblem && (
                  <p className="mt-6 text-sm text-slate-500">
                    Related guide: <Link href={`/problems/${relatedProblem.slug}`} className="font-semibold text-primary hover:underline">{relatedProblem.name}</Link>
                  </p>
                )}
                
                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Wrench className="w-5 h-5" />
                    <span>Need help with this?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link href={`/blog/${article.slug}`} className="text-sm font-semibold text-primary hover:underline">
                      Read full article
                    </Link>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">Contact Technician</Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
              );
            })}
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
