import { useEffect, useState, type FormEvent } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, MessageCircle, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { trackConversion } from "@/lib/track";
import { commonErrorCodes, type RepairEntry } from "./repair-data";

const phone = "+65 8413 0016";
const waNumber = "6584130016";

export default function RepairDetail({ entry, kind }: { entry: RepairEntry; kind: "brand" | "problem" }) {
  const [form, setForm] = useState({ name: "", phone: "", brand: kind === "brand" ? entry.name : "", problem: kind === "problem" ? entry.name : "", message: "" });
  useEffect(() => {
    document.title = `${entry.title} | Washertroubleshoot SG`;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", `${entry.intro} Call ${phone} for in-home washing machine repair across Singapore.`);
  }, [entry]);

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const openWhatsApp = (label: string, text: string) => {
    trackConversion(label);
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Hello Washertroubleshoot SG, I would like to request a repair.
Name: ${form.name}
Phone: ${form.phone}
Brand: ${form.brand || "Not sure"}
Problem: ${form.problem}${form.message ? `
Message: ${form.message}` : ""}`;
    openWhatsApp("service_form_whatsapp", text);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <section className="bg-slate-900 py-16 text-white md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/80"><Wrench className="h-4 w-4 text-primary" /> {kind === "brand" ? "Brand repair" : "Problem diagnosis"}</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{entry.title}</h1>
            <p className="text-lg leading-relaxed text-slate-300 md:text-xl">{entry.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-full bg-green-500 px-7 text-accent-foreground hover:bg-accent/90" asChild>
                <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp_click")}><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp for a quote</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-red-500 px-7 text-white hover:bg-white/20" asChild>
                <a href="tel:+6584130016" onClick={() => trackConversion("call_click")}><PhoneCall className="mr-2 h-5 w-5" /> Call {phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-primary">What to look for</p>
              <h2 className="mb-5 text-3xl font-bold text-slate-900">Common symptoms</h2>
              <div className="space-y-3">
                {entry.symptoms.map((symptom) => <div key={symptom} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" /><span className="font-medium text-slate-700">{symptom}</span></div>)}
              </div>
            </div>
            <Card className="border-none shadow-md">
              <CardContent className="p-7 md:p-8">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">Likely causes</h2>
                <p className="mb-5 leading-relaxed text-slate-600">A washing machine has several safety systems, so the same symptom can have different causes. Our technician checks the machine before recommending a repair.</p>
                <ul className="space-y-4">{entry.causes.map((cause) => <li key={cause} className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />{cause}</li>)}</ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-primary">Safe first steps</p>
              <h2 className="mb-5 text-3xl font-bold text-slate-900">What you can check</h2>
              <ul className="space-y-4">{entry.tips.map((tip, index) => <li key={tip} className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span><span className="leading-relaxed text-slate-600">{tip}</span></li>)}</ul>
              <div className="mt-8 flex items-start gap-3 rounded-xl bg-primary/5 p-5 text-sm text-slate-700"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Only carry out checks that are safe and accessible. Unplug the machine before touching filters or hoses.</span></div>
            </div>
            <Card className="border-none shadow-lg">
              <div className="bg-primary p-6 text-white"><h2 className="text-2xl font-bold">Request a service visit</h2><p className="mt-1 text-sm text-white/80">Tell us a little about the washer. We will reply on WhatsApp.</p></div>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-semibold text-slate-700">Name<input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" /></label>
                    <label className="text-sm font-semibold text-slate-700">Phone<input required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="8XXX XXXX" className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" /></label>
                  </div>
                  <label className="block text-sm font-semibold text-slate-700">Brand<input value={form.brand} onChange={(e) => update("brand", e.target.value)} placeholder="e.g. Samsung or not sure" className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" /></label>
                  <label className="block text-sm font-semibold text-slate-700">Problem<input required value={form.problem} onChange={(e) => update("problem", e.target.value)} placeholder="What is the washer doing?" className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" /></label>
                  <label className="block text-sm font-semibold text-slate-700">Message <span className="font-normal text-slate-400">(optional)</span><Textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Model number, error code, or anything else helpful" className="mt-2 min-h-[95px]" /></label>
                  <Button type="submit" size="lg" className="w-full bg-green-500 text-accent-foreground hover:bg-accent/90"><MessageCircle className="mr-2 h-5 w-5" /> Send details on WhatsApp</Button>
                  <p className="text-center text-xs text-slate-500">Your details open in WhatsApp as a pre-filled message. No online payment required.</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {kind === "problem" && entry.slug === "showing-an-error-code" && (
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-primary">Quick reference</p>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Common Washing Machine Error Codes</h2>
              <p className="leading-relaxed text-slate-600">
                These are common starting points, but codes can change by model and series. Share the exact code and model number with our technician so we can diagnose the real cause.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {commonErrorCodes.map((errorCode) => (
                <div key={`${errorCode.brands}-${errorCode.code}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span className="rounded-lg bg-primary/10 px-3 py-1.5 font-mono text-lg font-bold text-primary">{errorCode.code}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">{errorCode.brands}</span>
                  </div>
                  <p className="mt-4 leading-relaxed text-slate-600">{errorCode.meaning}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
              <strong>Safety note:</strong> If you smell burning, see smoke, or notice water near electrical parts, switch off the washer at the wall and close the water tap. Do not keep resetting the error.
            </div>
          </div>
        </section>
      )}

      <section className="py-14 text-center">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Need help with another washer issue?</h2>
        <Link href={kind === "brand" ? "/services" : "/services"} className="inline-flex items-center font-semibold text-primary hover:underline">See all repair services <ArrowRight className="ml-2 h-4 w-4" /></Link>
      </section>
    </div>
  );
}