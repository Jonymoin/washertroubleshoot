import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "../ui/whatsapp-fab";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
