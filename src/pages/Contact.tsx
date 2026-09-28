import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { trackGoogleAdsConversion } from "@/lib/googleAds";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";
import { useSEO } from "@/hooks/useSEO";
import { breadcrumbListJsonLd } from "@/lib/seo";

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

export default function Contact() {
  useSEO({
    title: "Contact Us | Book Washing Machine Repair in Singapore",
    description:
      "Get in touch with Washertroubleshoot SG for washing machine repair in Singapore. WhatsApp or call +65 8413 0016 for a fast quote and same-day visits.",
    path: "/contact",
    jsonLd: breadcrumbListJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
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
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative overflow-hidden bg-slate-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        <div className="relative container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              WasherTroubleshoot SG
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Contact Us for Washing Machine Repair in Singapore
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Need a washing machine technician? Contact us today for
              fast assistance, repair advice and service booking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
     <section
  className="relative min-h-[700px] bg-cover bg-center bg-no-repeat py-16 md:py-24"
  style={{
    backgroundImage: `url("/navy.jpg")`,
  }}
>
  <div className="absolute inset-0 bg-black/30" />

  <div className="relative container mx-auto px-4 md:px-6">

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 lg:col-span-2"
            >
              <div className="mb-7">
                <h2 className="text-3xl font-bold text-white">
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

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
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
                      <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Washing Machine Brand
                            </FormLabel>

                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12 border-white/20 bg-white/10 text-white backdrop-blur-sm focus:border-white/40">
                                  <SelectValue placeholder="Select your machine brand" />
                                </SelectTrigger>
                              </FormControl>

                              <SelectContent>
                                <SelectItem value="Samsung">
                                  Samsung
                                </SelectItem>

                                <SelectItem value="LG">
                                  LG
                                </SelectItem>

                                <SelectItem value="Bosch">
                                  Bosch
                                </SelectItem>

                                <SelectItem value="Electrolux">
                                  Electrolux
                                </SelectItem>

                                <SelectItem value="Panasonic">
                                  Panasonic
                                </SelectItem>

                                <SelectItem value="Hitachi">
                                  Hitachi
                                </SelectItem>

                                <SelectItem value="Whirlpool">
                                  Whirlpool
                                </SelectItem>

                                <SelectItem value="Fisher & Paykel">
                                  Fisher & Paykel
                                </SelectItem>

                                <SelectItem value="Miele">
                                  Miele
                                </SelectItem>

                                <SelectItem value="Sharp">
                                  Sharp
                                </SelectItem>

                                <SelectItem value="Toshiba">
                                  Toshiba
                                </SelectItem>

                                <SelectItem value="Other">
                                  Other
                                </SelectItem>
                              </SelectContent>
                            </Select>

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
                        className="h-12 w-full bg-slate-900 text-base font-semibold text-white shadow-lg border-0 transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
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
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-slate-950 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <MapPin className="mx-auto mb-4 h-10 w-10 text-red-500" />

            <h2 className="text-3xl font-bold text-white">
              Washing Machine Repair Across Singapore
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              We provide washing machine repair services across
              Singapore. Contact us to check technician availability
              in your area.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}