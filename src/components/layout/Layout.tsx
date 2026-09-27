import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "../ui/whatsapp-fab";
import { localBusinessJsonLd } from "@/lib/seo";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Injects a single, site-wide LocalBusiness JSON-LD block once on mount.
  // Page-level structured data (Service, BreadcrumbList, Article) is
  // injected separately per-route via the useSEO hook.
  useEffect(() => {
    const scriptId = "localbusiness-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(localBusinessJsonLd());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow pt-20 flex flex-col">
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
