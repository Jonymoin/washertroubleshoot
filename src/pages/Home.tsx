import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import WhyChooseUs from "@/components/WhyChooseUs";
import Warranty from "@/components/Warranty";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <WhyChooseUs />
        <Warranty />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}