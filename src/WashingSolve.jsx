import React, { useState , useEffect } from 'react';
import { Phone, MessageCircle, Wrench, Droplets, AlertCircle, Volume2, DoorOpen, Zap, Wind, Power, Code, Hammer, CheckCircle, Clock, Award, DollarSign, MapPin, Mail, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import HeroIntro from './HeroIntro';

export default function WasherRepairWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: '',
    message: ''
  });

  const phoneNumber = '+6584130016';
  const email = 'WasherTroubleshootsg@gmail.com';

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    { icon: <Wrench className="w-12 h-12" />, title: 'Washer Not Spinning', desc: 'Motor or belt issues causing spin failure. We diagnose and fix it quickly.' },
    { icon: <Droplets className="w-12 h-12" />, title: 'Water Leakage', desc: 'Leaking from hoses, pumps, or seals. We stop the leak and prevent damage.' },
    { icon: <AlertCircle className="w-12 h-12" />, title: 'Machine Not Draining', desc: 'Clogged pumps or drain issues. We ensure proper water drainage.' },
    { icon: <Volume2 className="w-12 h-12" />, title: 'Strange Noises', desc: 'Unusual sounds during operation. We identify and eliminate the noise source.' },
    { icon: <DoorOpen className="w-12 h-12" />, title: 'Door Not Opening', desc: 'Lock mechanism problems. We safely open and repair the door system.' },
    { icon: <Zap className="w-12 h-12" />, title: 'Power/Electrical Issues', desc: 'No power or electrical faults. We restore safe electrical operation.' },
    { icon: <Wind className="w-12 h-12" />, title: 'Vibration & Shaking', desc: 'Excessive movement during spin. We balance and stabilize your machine.' },
    { icon: <Power className="w-12 h-12" />, title: 'Not Starting', desc: 'Complete failure to start. We diagnose and resolve startup problems.' },
    { icon: <Code className="w-12 h-12" />, title: 'Error Codes', desc: 'Display showing error messages. We decode and fix the underlying issue.' },
    { icon: <Hammer className="w-12 h-12" />, title: 'General Malfunctions', desc: 'Any other washing machine problem. Our experts can handle it all.' }
  ];

  const faqs = [
    {
      q: 'How much does washing machine repair cost in Singapore?',
      a: 'Our repair services range from SGD $50 to $160 depending on the issue. We provide transparent pricing with no hidden charges. Simple fixes start at $50, while more complex repairs may cost up to $160.'
    },
    {
      q: 'How long does a repair usually take?',
      a: 'Most repairs are completed within 1-2 hours on the same visit. Complex issues may require additional time or a follow-up visit, but we always aim for quick turnaround to minimize your inconvenience.'
    },
    {
      q: 'Do you repair all brands of washing machines?',
      a: 'Yes! We repair all major brands including Samsung, LG, Electrolux, Bosch, Whirlpool, Panasonic, Midea, and more. Our technicians are trained to handle both front-load and top-load machines.'
    },
    {
      q: 'Is there any extra fee for inspection?',
      a: 'No, inspection is included in our service call. We diagnose the problem and provide you with a clear quote before proceeding with any repairs. You only pay if you approve the repair.'
    },
    {
      q: 'Do you provide same-day service?',
      a: 'Yes, we offer same-day service across Singapore subject to availability. Call us at +65 8413 0016 or WhatsApp us to check our schedule and book an appointment.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I need washing machine repair.%0AName: ${formData.name}%0APhone: ${formData.phone}%0AIssue: ${formData.issue}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${whatsappMessage}`, '_blank');
  };
    const reportConversion = (url) => {
  const callback = () => {
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: "AW-17619132152/VlBACJSN7aUbEPi9utFB",
      value: 1.0,
      currency: "USD",
      event_callback: callback,
    });
  } else {
    callback();
  }
  return false;
};
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Fixed Header */}
      {/* Fixed top buttons */}
<div className="fixed top-0 w-full bg-gray-900 flex justify-around py-3 z-50 shadow-md">
  <a
    href={`tel:${phoneNumber}`}
    onClick={(e) => {
      e.preventDefault();
      reportConversion(`tel:${phoneNumber}`);
    }}
    className="bg-orange-500 hover:bg-orange-600 px-3 sm:px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 text-white"
  >
    <Phone className="w-4 h-4" />
    <span>Call Now</span>
  </a>

  <a
    href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`}
    onClick={(e) => {
      e.preventDefault();
      reportConversion(`https://wa.me/${phoneNumber.replace(/\+/g, "")}`);
    }}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 px-3 sm:px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 text-white"
  >
    <MessageCircle className="w-4 h-4" />
    <span>WhatsApp</span>
  </a>
</div>
    <header className="w-full bg-red-600 text-white shadow-lg mt-16 sm:mt-14">
  <div className="max-w-7xl mx-auto px-4 py-3">
    <div className="flex justify-between items-center gap-3">
      <div className="flex items-center gap-3">
        <Wrench className="w-8 h-8" />
        <h1 className="text-xl md:text-2xl font-bold">Washertroubleshoot SG</h1>
      </div>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-red-700 hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors sm:hidden"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    <nav className="mt-3 border-t border-blue-600 pt-3 hidden sm:block">
      <ul className="flex justify-center gap-6 flex-wrap text-sm md:text-base">
        {['home', 'about', 'services', 'pricing', 'faqs', 'contact'].map(section => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className="hover:text-yellow-300 transition-colors capitalize font-medium"
            >
              {section === 'faqs' ? 'FAQs' : section.replace('-', ' ')}
            </button>
          </li>
        ))}
      </ul>
    </nav>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <nav className="mt-3 border-t border-blue-600 pt-3 sm:hidden">
        <ul className="flex flex-col gap-3 text-base">
          {['home', 'about', 'services', 'pricing', 'faqs', 'contact'].map(section => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="hover:text-yellow-300 transition-colors capitalize font-medium w-full text-left py-2"
              >
                {section === 'faqs' ? 'FAQs' : section.replace('-', ' ')}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    )}
  </div>
</header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Affordable & Professional<br/>Washing Machine Repair in Singapore</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Fast, Reliable, and Budget-Friendly – Prices from $50 to $160 only.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`tel:${phoneNumber}`} className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg">
              <Phone className="w-6 h-6" />
              Call Now
            </a>
            <a href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`}  onClick={(e) => {
          e.preventDefault();
          reportConversion(`https://wa.me/${phoneNumber.replace(/\+/g, "")}`);
        }} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg">
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
        <HeroIntro />
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Washertroubleshoot SG</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                At Washertroubleshoot SG, we are Singapore's trusted washing machine repair specialists. With years of experience in the industry, our team of professional technicians is dedicated to providing fast, reliable, and affordable repair services across all areas of Singapore.
              </p>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                We understand how important your washing machine is to your daily routine. That's why we prioritize quick response times and efficient repairs to get your appliance back in working order as soon as possible.
              </p>
              <p className="text-lg font-semibold text-white">
                We solve almost all types of washing machine issues across Singapore.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">What Sets Us Apart</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Experienced and certified technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Affordable rates from $50 to $160</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Same-day service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">All brands and models serviced</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Repair Services</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">We fix all types of washing machine problems quickly and professionally</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-red-500">
                <div className="text-red-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Transparent Pricing</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">No hidden charges. Affordable service you can trust.</p>
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 md:p-12 rounded-2xl shadow-lg border-2 border-blue-700">
            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">$50 - $160</div>
              <div className="text-xl text-gray-300">Per Repair Service</div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$50-$80</div>
                <div className="text-gray-300">Simple Repairs</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$80-$120</div>
                <div className="text-gray-300">Standard Repairs</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$160</div>
                <div className="text-gray-300">Complex Repairs</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span> Diagnostic and inspection</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Transparent pricing before work begins</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>No hidden charges or surprise fees</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Affordable rates across all services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Washertroubleshoot SG?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white text-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional & Skilled</h3>
              <p className="text-blue-100">Our certified technicians have years of experience and expertise in all washing machine repairs.</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Pricing</h3>
              <p className="text-blue-100">Quality service at budget-friendly rates from $50 to $160 with no hidden charges.</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Response</h3>
              <p className="text-blue-100">Quick service across Singapore with same-day appointments available for your convenience.</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">All Problems Solved</h3>
              <p className="text-blue-100">We handle almost all types of washing machine issues, all brands, all models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left bg-blue-900 hover:bg-blue-800 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-gray-800">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Phone & WhatsApp</div>
                    <a href={`tel:${phoneNumber}`} className="text-blue-300 hover:text-blue-200 text-lg">{phoneNumber}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href={`mailto:${email}`} className="text-blue-300 hover:text-blue-200">{email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Service Area</div>
                    <div className="text-gray-300">All areas across Singapore</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-900 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-white mb-2">Need Immediate Assistance?</h4>
                <p className="text-gray-300 mb-4">Contact us now for fast and reliable washing machine repair service!</p>
                <div className="flex gap-3">
                  <a href={`tel:${phoneNumber}`} className="bg-red-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`}  target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold inline-flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+65 XXXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Issue *</label>
                  <input
                    type="text"
                    required
                    value={formData.issue}
                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Washer not spinning"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Additional details about your washing machine problem..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6" />
                Washertroubleshoot SG
              </h3>
              <p className="text-gray-400">Professional washing machine repair service across Singapore. Fast, reliable, and affordable.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
  <li><a href="https://washertroubleshootsg.com/#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
  <li><a href="https://washertroubleshootsg.com/#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
  <li><a href="https://washertroubleshootsg.com/#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
  <li><a href="https://washertroubleshootsg.com/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
  <li><a href="https://washertroubleshootsg.com/#faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
  <li><a href="https://washertroubleshootsg.com/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
</ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${phoneNumber}`} className="hover:text-white">{phoneNumber}</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp Us</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${email}`} className="hover:text-white break-all">{email}</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Singapore</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Washertroubleshoot SG. All rights reserved. | Professional Washing Machine Repair Service in Singapore</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all transform hover:scale-110 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}