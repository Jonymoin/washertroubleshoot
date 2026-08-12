import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PhoneCall, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackConversion } from "@/lib/track";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(8, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }).optional().or(z.literal("")),
  brand: z.string().min(1, { message: "Please select a brand" }),
  problem: z.string().min(10, { message: "Please describe the problem briefly" }),
});

export default function Contact() {
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, this would send an API request
    toast.success("Inquiry sent successfully!", {
      description: "Our technician will contact you shortly to arrange a visit.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300"
          >
            Get in touch for a quick quote or to schedule a repair visit. We're ready to help.
          </motion.p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <p className="text-slate-600 mb-8">
                  The fastest way to reach us is via WhatsApp. You can also call us directly or fill out the form for non-urgent inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-full text-accent shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                      <p className="text-slate-600 text-sm mb-2">Fastest response time</p>
                      <a href="https://wa.me/6584130016"   onClick={() => trackConversion("whatsapp_click")}
                            target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                        +65 8413 0016
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                      <p className="text-slate-600 text-sm mb-2">Speak directly to a technician</p>
                      <a href="tel:+6584130016"   onClick={() => trackConversion("call_click")}
 className="text-primary font-medium hover:underline">
                        +65 8413 0016
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                      <a href="mailto:washertroubleshootsg@gmail.com" className="text-primary font-medium hover:underline break-all text-sm">
                        washertroubleshootsg@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <Card className="border-none shadow-md overflow-hidden">
                <div className="bg-primary p-6 text-white">
                  <h3 className="text-xl font-bold">Request a Service Callback</h3>
                  <p className="opacity-90 text-sm mt-1">Fill out the details below and we'll get back to you shortly.</p>
                </div>
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. John Tan" {...field} />
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
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 8123 4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address (Optional)</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="brand"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Machine Brand</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select brand" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="samsung">Samsung</SelectItem>
                                  <SelectItem value="lg">LG</SelectItem>
                                  <SelectItem value="bosch">Bosch</SelectItem>
                                  <SelectItem value="panasonic">Panasonic</SelectItem>
                                  <SelectItem value="electrolux">Electrolux</SelectItem>
                                  <SelectItem value="other">Other / Not Sure</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="problem"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Describe the Problem</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="E.g. The machine is not draining water and shows an error code '5E'." 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full text-base bg-green-500 py-6">
                        Submit Inquiry
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/5 rounded-full mb-6 text-primary">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Coverage Area</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            We provide islandwide washing machine repair services across Singapore. No matter where you live, our technicians can reach you.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-slate-700 font-medium">
            <div className="bg-slate-50 py-3 rounded-lg">North</div>
            <div className="bg-slate-50 py-3 rounded-lg">South</div>
            <div className="bg-slate-50 py-3 rounded-lg">East</div>
            <div className="bg-slate-50 py-3 rounded-lg">West</div>
            <div className="bg-slate-50 py-3 rounded-lg">Central</div>
          </div>
        </div>
      </section>
    </div>
  );
}
