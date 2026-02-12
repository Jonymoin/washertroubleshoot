import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/washing2.webp',
      title: 'Expert Washing Machine Repair',
      subtitle: 'Professional technicians ready to fix all brands and models across Singapore'
    },
    {
      image: '/washing3.webp',
      title: 'Same-Day Service Available',
      subtitle: 'Quick response time with emergency repair service - We come to you!'
    },
    {
      image: '/washing4.webp',
      title: 'Affordable & Transparent Pricing',
      subtitle: 'No hidden charges. Free diagnosis with upfront quotation before any work'
    },
    {
      image: '/washing8.webp',
      title: '100% Satisfaction Guaranteed',
      subtitle: 'Quality repairs with warranty. Trusted by thousands of happy customers'
    }
  ];

  const handleClick = () => {
    console.log('Button clicked');
  };

  const whatsappLink = `https://wa.me/6584130016?text=${encodeURIComponent('Hello! I need help with washing machine repair.')}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg transition-all duration-500">
            {slides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md transition-all duration-500">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+6585301773"
              onClick={handleClick}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>+65 8530 1773</span>
            </a>

            <a
              href={whatsappLink}
              onClick={handleClick}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;