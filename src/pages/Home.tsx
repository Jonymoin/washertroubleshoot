import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackGoogleAdsConversion } from "@/lib/googleAds";
import { useSEO } from "@/hooks/useSEO";

import { 
   
  Clock, 
  ShieldCheck, 
  ThumbsUp, 
  CheckCircle2, 
  PhoneCall, 
  Mail,
  MessageCircle,
  MapPin
} from "lucide-react";
import { brands, problems } from "./repair-data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
  

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),

  phone: z.string().min(8, {
    message: "Valid phone number is required",
  }),

  email: z
    .string()
    .email({
      message: "Valid email is required",
    })
    .optional()
    .or(z.literal("")),

  brand: z.string().min(1, {
    message: "Please select a brand",
  }),

  problem: z.string().min(10, {
    message: "Please describe the problem briefly",
  }),
});
export default function Home() {
  useSEO({
    title: "Washing Machine Repair Singapore | Washertroubleshoot SG",
    description:
      "Fast, reliable washing machine repair across Singapore. Washertroubleshoot SG repairs all major brands at home with transparent pricing — WhatsApp or call for same-day service.",
    path: "/",
  });
  const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),

  defaultValues: {
    name: "",
    phone: "",
    email: "",
    brand: "",
    problem: "",
  },
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    toast.error("Form configuration error", {
      description:
        "The form is not configured correctly. Please contact us directly by phone or WhatsApp.",
    });

    return;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        access_key: accessKey,

        subject: "New Washing Machine Repair Inquiry",

        from_name: "WasherTroubleshoot SG Website",

        name: values.name,

        phone: values.phone,

        email: values.email || "",

        brand: values.brand,

        problem: values.problem,

        ...(values.email
          ? {
              replyto: values.email,
            }
          : {}),
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Inquiry sent successfully!", {
        description:
          "Thank you. Our technician will contact you shortly.",
      });

      form.reset();
    } else {
      throw new Error(
        result.message || "Unable to submit the form."
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);

    toast.error("Unable to send your inquiry", {
      description:
        "Please try again or contact us directly by WhatsApp or phone.",
    });
  }
}

const isSubmitting = form.formState.isSubmitting;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
  src="/hero-laundry.webp"
  alt="washing machine repair"
  width="1200"
  height="800"
  fetchPriority="high"
  decoding="async"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <div>
              <div className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Top Rated Washing Machine Repair in Singapore
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Washing Machine Repair Service
              </h1>
              <h3 className="text-2xl font-semibold mb-6 text-lime-400">Give Your Washing Machine a Second Life.</h3>
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
                Don't buy a new washing machine just because yours has a problem. With expert diagnosis and professional repair, your existing washer can get back to performing like new. Save money, extend your machine's lifespan, and get back to hassle-free laundry.
              </p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Button
  size="lg"
  className="text-lg px-8 py-6 rounded-full bg-slate-900 text-lime-400 hover:bg-amber-400 hover:text-black">
  <a
    href="https://wa.me/6584130016"
    target="_blank"
    rel="noopener noreferrer"
    onClick={trackGoogleAdsConversion}
  >
    <span className="relative block overflow-hidden">
      <span className="relative block ">
        WhatsApp Us Now
      </span>
    </span>
  </a>
</Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-white/10 hover:bg-white/50 text-white border-white/30 backdrop-blur-sm" asChild>
                  <a href="tel:+6584130016" onClick={trackGoogleAdsConversion}>
                    <PhoneCall className="mr-2 h-5 w-5" />
                    +65 8413 0016
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="text-green-400 w-5 h-5" /> Same-day Service
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="text-green-400 w-5 h-5" /> All Brands
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="text-green-400 w-5 h-5" /> Transparent Pricing
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">Need a quick answer?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-slate-600">Find practical next steps for the symptom you are seeing, then book a technician if it is not safe or simple to resolve.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problems.slice(0, 10).map((problem) => (
              <Link key={problem.slug} href={`/problems/${problem.slug}`} className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-[#00182e] text-[#e9ff00] p-5 hover:border-primary hover:bg-[#e9ff00] hover:text-[#00182e] transition-colors">
                <span className="font-semibold text-[#e9ff00] group-hover:text-[#00182e]">{problem.name}</span>
                <span aria-hidden="true" className="text-primary text-xl">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#e9ff00] px-8 py-4 rounded-3xl text-xl text-black">
                <Link href="/services" className="text-primary font-semibold hover:underline">See every problem we repair</Link>
            </button>
           </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Singaporeans Trust Us</h2>
            <p className="text-lg text-slate-600">We've built our reputation on honesty, expertise, and showing up when we say we will.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10 text-primary" />,
                title: "Prompt & Punctual",
                desc: "We value your time. We arrive within the scheduled window and aim to fix most issues on the first visit."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "Expert Technicians",
                desc: "Our team has years of experience diagnosing and repairing all major washing machine brands and models."
              },
              {
                icon: <ThumbsUp className="w-10 h-10 text-primary" />,
                title: "Honest Pricing",
                desc: "No hidden fees. We provide a clear quote before any work begins, so you know exactly what you're paying for."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       
        <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
             <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/technician.webp" 
                alt="Washing machine technician" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
               decoding="async"
              />
            </motion.div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">Brands we know</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Brands We Service</h2>
              <p className="text-lg text-slate-600 mt-3 max-w-2xl">From everyday front-loaders to premium models, our technicians repair the brands found in Singapore homes.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">View all services <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} className="bg-[#00182e] border border-slate-200 shadow-2xl rounded-xl px-4 py-5 text-center font-bold text-[#e9ff00] hover:border-primary hover:text-white hover:shadow-2xl hover:bg-black transition-all">
                {brand.name}
                <p className="text-white hover:text-red-500 text-[10px]">Know more</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      {/* Services Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
           
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/technician1.webp"
                alt="Washing machine technician" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">Islandwide coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Washing Machine Repair Across Singapore</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our technicians provide convenient in-home washing machine repair across Singapore. Tell us your location and washer problem, and we will arrange a suitable visit.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {[
                  "Tampines", "Bedok", "Pasir Ris", "Punggol", "Sengkang", "Hougang",
                  "Ang Mo Kio", "Bishan", "Toa Payoh", "Serangoon", "Yishun", "Woodlands",
                  "Bukit Batok", "Jurong East", "Clementi", "Queenstown", "Bukit Merah", "Orchard"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 rounded-lg border border-primary/10 bg-primary/5 px-3 py-2.5 text-sm font-semibold text-slate-700">
                    <MapPin className="h-4 w-4 shrink-0 text-[#00ff04e0]" />
                    {area}
                  </div>
                ))}
              </div>
              
             <Button size="lg"
  className="bg-blue-600 text-white hover:bg-black"
>
  <Link href="/contact">
    <span
      className=""
    >
      Book Service in Your Area
    </span>
  </Link>
</Button>
            </motion.div>
          </div>
        </div>
      </section>

     

    
     {/* Our Working Process */}
<section className="py-20 bg-slate-900 text-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our Washing Machine Repair Process in Singapore
      </h2>
      <p className="text-slate-400 text-lg">
        We provide fast, reliable, and professional washing machine repair
        services across Singapore. From diagnosis to final testing, our
        experienced technicians follow a proven process to ensure your washer
        is repaired correctly and efficiently.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

      {[
        {
          image: "/working1.webp",
          title: "1. Service Request",
          alt: "Washing machine repair service request Singapore",
          text: "Contact us via phone or WhatsApp to describe your washing machine issue. We assist customers throughout Singapore with all major washer brands."
        },
        {
          image: "/working2.webp",
          title: "2. Inspection & Diagnosis",
          alt: "Technician inspecting washing machine in Singapore",
          text: "Our technician performs a detailed inspection to identify faults such as drainage issues, spinning problems, leaks, unusual noises, or electrical faults."
        },
        {
          image: "/working3.webp",
          title: "3. Transparent Quotation",
          alt: "Washing machine repair quotation Singapore",
          text: "After diagnosing the problem, we provide a clear repair quotation with no hidden charges, allowing you to make an informed decision."
        },
        {
          image: "/working4.webp",
          title: "4. Professional Repair",
          alt: "Professional washing machine repair service Singapore",
          text: "Using quality replacement parts and industry best practices, our technicians repair your washing machine quickly and safely."
        },
        {
          image: "/working5.webp",
          title: "5. Testing & Completion",
          alt: "Testing repaired washing machine Singapore",
          text: "We thoroughly test the machine to ensure everything works perfectly before completing the service and providing maintenance recommendations."
        }
      ].map((step, idx) => (
        <motion.div
          key={idx}
          
          className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-accent transition-all duration-300"
        >
          <img
            src={step.image}
            alt={step.alt}
            loading="lazy"
            decoding="async"

            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-white">
              {step.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              {step.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-16 max-w-4xl mx-auto text-center">
      <p className="text-slate-400 leading-relaxed">
        Whether your washing machine is not spinning, leaking water, making
        unusual noises, failing to drain, or displaying error codes, our
        experienced technicians are ready to help. We repair front-load,
        top-load, and washer-dryer units from leading brands including Samsung,
        LG, Bosch, Electrolux, Panasonic, Toshiba, Sharp, Hitachi, Midea, and
        more. Our goal is to provide affordable and dependable washing machine
        repair services throughout Singapore with fast response times and
        customer satisfaction guaranteed.
      </p>
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Your Washing Machine Fixed Today?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Contact us now for a quick diagnosis and transparent quote. We cover all areas in Singapore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-black hover:bg-[#0ccaf0e0] text-white shadow-xl border-none" asChild>
              <a href="https://wa.me/6584130016"   onClick={trackGoogleAdsConversion}
 target="_blank" rel="noopener noreferrer">
                WhatsApp +65 8413 0016
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-12 py-6 rounded-full bg-[#05044cfd] hover:bg-black text-white border-white border-2" asChild>
              <Link href="/contact">View Service Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
           className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-24"
  style={{ backgroundImage: "url('/gm.webp')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#00182e]/80" />

  <div className="container relative z-10 mx-auto px-4 md:px-6">
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl"
    >

      {/* তোমার পুরো Card + Form এখানে থাকবে */}
      <Card className="overflow-hidden border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl">
                {/* Form Header */}
                <div className="border-b border-white/15 bg-white/10 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white">
                    Book a Repair
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Fill in the details below and our technician will
                    contact you shortly.
                  </p>
                </div>

                <CardContent className="p-6 md:p-8">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      {/* Name + Phone */}
                      <div className="grid gap-5 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Name
                              </FormLabel>

                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Your name"
                                  className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/40 backdrop-blur-sm focus:border-white/40 focus:bg-white/15"
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Phone Number
                              </FormLabel>

                              <FormControl>
                                <Input
                                  {...field}
                                  type="tel"
                                  placeholder="+65 XXXX XXXX"
                                  className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/40 backdrop-blur-sm focus:border-white/40 focus:bg-white/15"
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Email
                              <span className="ml-1 text-white/40">
                                (Optional)
                              </span>
                            </FormLabel>

                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="your@email.com"
                                className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/40 backdrop-blur-sm focus:border-white/40 focus:bg-white/15"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Brand */}
                     {/* Brand */}
<FormField
control={form.control}
name="brand"
render={({ field }) => ( <FormItem> <FormLabel className="text-white">
Washing Machine Brand </FormLabel>

```
  <FormControl>
    <Input
      {...field}
      placeholder="Enter your machine brand"
      className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/40 backdrop-blur-sm focus:border-white/40 focus:bg-white/15"
    />
  </FormControl>

  <FormMessage />
</FormItem>


)}
/>


                      {/* Problem */}
                      <FormField
                        control={form.control}
                        name="problem"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Washing Machine Problem
                            </FormLabel>

                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Please describe the problem. For example: machine not spinning, not draining, leaking water, making noise..."
                                className="min-h-[140px] resize-none border-white/20 bg-white/10 text-white placeholder:text-white/40 backdrop-blur-sm focus:border-white/40 focus:bg-white/15"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 w-full bg-lime-600 text-base font-semibold text-white shadow-lg border-0 transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting
                          ? "Sending..."
                          : "Send Repair Inquiry"}
                      </Button>

                      <p className="text-center text-xs leading-5 text-white/50">
                        Your information will only be used to contact you
                        regarding your washing machine repair request.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>

    </motion.div>
  </div>
</section>
              <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-10 md:py-24"
  style={{ backgroundImage: "url('/gm1.webp')" }}>
                  <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="space-y-5 lg:col-span-2"
                            >
                              <div className="mb-7">
                                <h2 className="text-3xl text-center font-bold text-white">
                                  Get in Touch
                                </h2>
                
                                <p className="mt-3 leading-7 text-white/70">
                                  Have a washing machine problem? Contact our team and
                                  tell us what is happening. We will get back to you
                                  as soon as possible.
                                </p>
                              </div>
                
                              {/* WhatsApp */}
                              <a
                                href="https://wa.me/6584130016"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={trackGoogleAdsConversion}
                                className="group block"
                              >
                                <Card className="border border-white/15 bg-white/10 shadow-xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15">
                                  <CardContent className="flex items-center gap-4 p-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                                      <MessageCircle className="h-6 w-6" />
                                    </div>
                
                                    <div>
                                      <p className="text-sm text-white/60">
                                        WhatsApp
                                      </p>
                
                                      <p className="font-semibold text-white">
                                        +65 8413 0016
                                      </p>
                
                                      <p className="text-sm text-green-400">
                                        Chat with us
                                      </p>
                                    </div>
                                  </CardContent>
                                </Card>
                              </a>
                
                              {/* Phone */}
                              <a
                                href="tel:+6584130016"
                                onClick={trackGoogleAdsConversion}
                                className="group block"
                              >
                                <Card className="border border-white/15 bg-white/10 shadow-xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15">
                                  <CardContent className="flex items-center gap-4 p-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                                      <PhoneCall className="h-6 w-6" />
                                    </div>
                
                                    <div>
                                      <p className="text-sm text-white/60">
                                        Call Us
                                      </p>
                
                                      <p className="font-semibold text-white">
                                        +65 8413 0016
                                      </p>
                
                                      <p className="text-sm text-red-400">
                                        Call now
                                      </p>
                                    </div>
                                  </CardContent>
                                </Card>
                              </a>
                
                              {/* Email */}
                              <a
                                href="mailto:washertroubleshootsg@gmail.com"
                                className="group block"
                              >
                                <Card className="border border-white/15 bg-white/10 shadow-xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15">
                                  <CardContent className="flex items-center gap-4 p-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                                      <Mail className="h-6 w-6" />
                                    </div>
                
                                    <div className="min-w-0">
                                      <p className="text-sm text-white/60">
                                        Email
                                      </p>
                
                                      <p className="break-all font-semibold text-white">
                                        washertroubleshootsg@gmail.com
                                      </p>
                                    </div>
                                  </CardContent>
                                </Card>
                              </a>
                
                              {/* Service Hours */}
                              <Card className="border border-white/15 bg-white/10 shadow-xl backdrop-blur-xl">
                                <CardContent className="flex items-center gap-4 p-5">
                                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                                    <Clock className="h-6 w-6" />
                                  </div>
                
                                  <div>
                                    <p className="text-sm text-white/60">
                                      Service Hours
                                    </p>
                
                                    <p className="font-semibold text-white">
                                      Mon - Sun
                                    </p>
                
                                    <p className="text-sm text-white/70">
                                      Contact us for availability
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                
                              {/* Location */}
                              <Card className="border border-white/15 bg-white/10 shadow-xl backdrop-blur-xl">
                                <CardContent className="flex items-center gap-4 p-5">
                                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                                    <MapPin className="h-6 w-6" />
                                  </div>
                
                                  <div>
                                    <p className="text-sm text-white/60">
                                      Service Area
                                    </p>
                
                                    <p className="font-semibold text-white">
                                      Singapore
                                    </p>
                
                                    <p className="text-sm text-white/70">
                                      Islandwide service
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
              </section>
              
            <div/>
            <div/>
      
    </div>
  );
}
