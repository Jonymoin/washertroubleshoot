import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wrench, ArrowLeft } from "lucide-react";
import { articles, findArticle } from "./blog-data";
import { findEntry, problems } from "./repair-data";
import { useSEO } from "@/hooks/useSEO";
import { blogPostSeo, notFoundSeo } from "@/lib/route-seo";
import NotFound from "./not-found";

export default function BlogPost({ slug }: { slug?: string }) {
  const article = findArticle(slug);
  const relatedProblem = article?.relatedProblemSlug
    ? findEntry(problems, article.relatedProblemSlug)
    : undefined;

  // Called unconditionally (rules of hooks); falls back to the noindex 404 config.
  useSEO((slug && blogPostSeo(slug)) || notFoundSeo);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Tips & Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
            <span>{article.readTime}</span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {article.title}
          </h1>
          <p
            className="text-lg md:text-xl text-slate-300"
          >
            {article.summary}
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <article className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100">
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
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Contact Technician</Link>
              </Button>
            </div>
          </article>

          <div className="mt-10 text-center">
            <p className="mb-3 text-sm text-slate-500">
              More tips:{" "}
              {articles
                .filter((other) => other.slug !== article.slug)
                .map((other, index, list) => (
                  <span key={other.slug}>
                    <Link href={`/blog/${other.slug}`} className="font-semibold text-primary hover:underline">{other.title}</Link>
                    {index < list.length - 1 ? " · " : ""}
                  </span>
                ))}
            </p>
            <Link href="/blog" className="text-primary font-semibold hover:underline">See all troubleshooting tips</Link>
            <span className="mx-2 text-slate-300">|</span>
            <Link href="/services" className="text-primary font-semibold hover:underline">Washing machine repair services</Link>
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
