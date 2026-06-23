import { ArrowLeft, ArrowRight, Check, Clock, Zap, Shield, Star, MessageCircle, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import tilLogo from "@/assets/til-logo.png";

const CAL = "https://cal.com/threxa/threxa-free-audit";
const WA  = "https://wa.me/917483992418?text=Hi%20Sachin%2C%20I%27d%20like%20to%20apply%20for%20the%20Threxa%20POC%20offer.";

const workflows = [
  { name: "Order → Tally invoice", desc: "Every Shopify order creates a Tally invoice automatically. No manual data entry.", time: "3 seconds" },
  { name: "WhatsApp order confirmation", desc: "Customer gets a WhatsApp message the moment their order is confirmed. No team action needed.", time: "Instant" },
  { name: "Cart abandonment recovery", desc: "3-message WhatsApp sequence fires automatically when a cart is abandoned. Recovers 5–8% of lost revenue.", time: "60 min delay" },
  { name: "Shiprocket label + tracking", desc: "Shiprocket label generated and tracking link sent to customer automatically on dispatch.", time: "On dispatch" },
  { name: "Review request", desc: "3 days after delivery, a personalised review request goes out via WhatsApp. No manual follow-up.", time: "3 days post-delivery" },
  { name: "COD order confirmation", desc: "COD orders get a WhatsApp confirmation call/message before dispatch. Reduces RTO significantly.", time: "On order" },
];

const steps = [
  { n: "01", title: "Book a free 20-minute call", body: "Tell us your current stack — Shopify, Tally, WhatsApp, Shiprocket — and which part of your operations is burning the most time." },
  { n: "02", title: "We map your first workflow", body: "Within 48 hours, you receive a visual map of exactly what Threxa will automate for your brand — specific to your stack, your order volume, and your team." },
  { n: "03", title: "We build it. You watch it run.", body: "We build and deploy your first workflow in 5 working days. You see it run on real orders before you pay a single rupee." },
  { n: "04", title: "Pay only when it works", body: "After 30 days of the workflow running successfully, you decide whether to continue. If you don't see value, you pay nothing. No contracts, no pressure." },
];

const faqs = [
  { q: "What counts as 'working'?", a: "The workflow processes your actual orders automatically without you or your team doing anything manually. If it runs correctly on real orders for 30 days, it's working." },
  { q: "Which workflow do I get for free?", a: "You choose. The most popular first workflow is Shopify → Tally invoice automation, but we build whatever your biggest manual ops pain is — WhatsApp confirmations, cart recovery, Shiprocket automation." },
  { q: "What happens after 30 days?", a: "You move to the Launch plan (₹15,000/mo) which includes 3 workflows, monitoring, maintenance, and failure alerts. Or you add more workflows à la carte. No obligation to continue." },
  { q: "How many POC slots do you take per month?", a: "Three. This is not artificial scarcity — building and deploying a custom workflow properly takes focused time, and we don't cut corners." },
  { q: "Do I need a developer?", a: "No. We build and manage everything. You give us read access to your Shopify store and we handle the rest. Your team does nothing technical." },
  { q: "What stack do you support?", a: "Shopify, Tally, WhatsApp Business API, Shiprocket, Razorpay, Google Sheets, and most tools your D2C brand already uses. If you're unsure, ask on the call." },
];

const FreeAudit = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background px-6 py-5 lg:px-10">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <a href="/" className="group flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            <span className="text-sm font-medium">Back</span>
          </a>
          <a href="/"><img src={tilLogo} alt="The Ingredient List" className="h-10 w-auto object-contain mix-blend-multiply" /></a>
          <a href="https://threxa.theingredientlist.co" target="_blank" rel="noreferrer" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">Threxa Platform →</a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 lg:px-10 lg:py-28 text-center bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 til-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium text-muted-foreground mb-8 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            3 POC slots available this month
          </div>
          <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Your first workflow,{" "}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">built free.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-8 max-w-2xl mx-auto mb-10">
            We build one automation workflow for your D2C brand at no cost. You watch it run on real orders for 30 days. Pay only when you've seen it work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild variant="brand" size="lg" className="rounded-full px-8">
              <a href={CAL} target="_blank" rel="noreferrer">Book your free 20-minute call <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <a href={WA} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-primary/40">
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp Sachin directly
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> No contract</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Pay only when it works</span>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-6 py-20 lg:px-10 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">What gets built</p>
            <h2 className="font-brand text-3xl sm:text-4xl font-extrabold">Choose your first workflow.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Pick the one that saves the most time today. We build it, deploy it, and monitor it — completely done for you.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflows.map((w) => (
              <div key={w.name} className="rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/40 hover:bg-card transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-brand text-sm font-extrabold text-foreground">{w.name}</h3>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    <Zap className="h-3 w-3" /> {w.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-6">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 lg:px-10 border-t border-border bg-gradient-warm">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">The process</p>
            <h2 className="font-brand text-3xl sm:text-4xl font-extrabold">How the POC works.</h2>
          </div>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.n} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl border border-border/50 bg-card flex items-center justify-center font-brand text-sm font-extrabold text-primary group-hover:border-primary/40 transition-colors">
                  {s.n}
                </div>
                <div className="pt-2">
                  <h3 className="font-brand text-lg font-extrabold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-7">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="px-6 py-20 lg:px-10 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Clock, title: "5 working days to build", body: "Your first workflow is live in 5 business days from our first call. Not weeks. Not months." },
              { icon: Shield, title: "Pay only when it works", body: "30 days of real-order processing. If the automation doesn't run correctly, you owe nothing." },
              { icon: Star, title: "Managed forever after", body: "We monitor, maintain, and fix every workflow. If something breaks, we fix it before you notice." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border/50 bg-card/50 p-8 text-center hover:border-primary/40 transition-all">
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Icon className="h-5 w-5 text-primary" /></div>
                <h3 className="font-brand text-base font-extrabold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-6">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 lg:px-10 border-t border-border bg-gradient-warm">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Questions</p>
            <h2 className="font-brand text-3xl sm:text-4xl font-extrabold">Everything you want to know.</h2>
          </div>
          <div className="divide-y divide-border/50">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left">
                  <span className="font-brand text-base font-extrabold text-foreground">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-4 w-4 flex-shrink-0 text-primary" /> : <ChevronDown className="h-4 w-4 flex-shrink-0 text-muted-foreground" />}
                </button>
                {openFaq === i && <p className="pb-5 text-sm leading-7 text-muted-foreground pr-10">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 lg:px-10 border-t border-border text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-brand text-3xl sm:text-4xl font-extrabold mb-6">3 slots left this month.</h2>
          <p className="text-muted-foreground mb-10 text-lg">A 20-minute call to show you exactly what gets automated. No pitch. Just the work.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild variant="brand" size="lg" className="rounded-full px-8">
              <a href={CAL} target="_blank" rel="noreferrer">Book the free call <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <a href={WA} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-primary/40">
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp instead
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} The Ingredient List. Bengaluru, India.</p>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="mailto:sachin@theingredientlist.co" className="hover:text-foreground transition-colors">sachin@theingredientlist.co</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default FreeAudit;
