import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  gradientWord,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  gradientWord?: string;
}) {
  const parts = gradientWord ? title.split(gradientWord) : null;
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand/5 via-background to-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--brand)_25%,transparent),transparent)]"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center lg:px-8 lg:py-28">
        {eyebrow && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" /> {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {parts ? (
            <>
              {parts[0]}
              <span className="shine-text">{gradientWord}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
