import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react"; // Simple import, safe

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/wt10.webp",
      title: "Expert Washing Machine Repair",
      subtitle: "Professional technicians ready to fix all brands and models across Singapore",
    },
    {
      image: "/wt20.webp",
      title: "Same-Day Service Available",
      subtitle: "Quick response time with emergency repair service - We come to you!",
    },
    {
      image: "/wt30.webp",
      title: "Affordable & Transparent Pricing",
      subtitle: "No hidden charges. Free diagnosis with upfront quotation before any work",
    },
    {
      image: "/wt40.webp",
      title: "100% Satisfaction Guaranteed",
      subtitle: "Quality repairs with warranty. Trusted by thousands of happy customers",
    },
  ];

  const whatsappLink = `https://wa.me/6584130016?text=${encodeURIComponent(
    "Hello! I need help with washing machine repair."
  )}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt="Washing machine repair Singapore"
          width="1920"
          height="1080"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchpriority={index === 0 ? "high" : "auto"}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {slides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+6584130016"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              +65 8413 0016
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;