import { ArrowLeft, ArrowRight, ArrowUpRight, TrendingUp, Globe, Users, Zap, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import tilLogo from "@/assets/til-logo.png";
import smartPackagingLogo from "@/assets/smart_packaging_solutions_logo.jpeg";

const CAL = "https://cal.com/threxa/threxa-free-audit";

const results = [
  { metric: "+40%", label: "RFQ conversion rate", desc: "Within 3 months of launch", icon: TrendingUp },
  { metric: "2.5×", label: "Organic search traffic", desc: "Through targeted SEO strategy", icon: Globe },
  { metric: "500+", label: "Brand clients featured", desc: "Now searchable and discoverable online", icon: Users },
  { metric: "14 days", label: "Average RFQ response", desc: "Down from 3 weeks before the site", icon: Clock },
];

const deliverables = [
  "Conversion-optimised 8-page B2B website",
  "Automated RFQ routing system — enquiries go directly to the right team",
  "500+ brand portfolio made searchable and filterable",
  "Technical certifications and compliance documents integrated",
  "SEO foundation: 45+ high-intent keywords now ranking on Google",
  "Google Analytics 4 + Search Console setup and connected",
  "Integrated WhatsApp Business for instant RFQ follow-up",
  "Mobile-responsive across all devices",
];

const timeline = [
  { week: "Week 1–2", title: "Discovery + strategy", body: "Audited all existing materials. Mapped the B2B buyer journey from Google search to RFQ submission. Identified 3 conversion bottlenecks in the old enquiry process." },
  { week: "Week 3–4", title: "Design + architecture", body: "Built wireframes around the buyer's decision checklist — capabilities, certifications, clients, and contact. Designed the brand system to communicate 13 years of credibility without looking dated." },
  { week: "Week 5–6", title: "Development", body: "Built on Next.js with Tailwind. RFQ routing automation connected to WhatsApp and email. 500+ client logos integrated into a searchable portfolio module." },
  { week: "Week 7–8", title: "SEO + launch", body: "Technical SEO implemented. Sitemap submitted. 45 target keywords mapped and optimised. Launched with zero downtime on the existing domain." },
];

const CaseStudySmartPackaging = () => (
  <main className="min-h-screen bg-background text-foreground">
    {/* Header */}
    <header className="border-b border-border bg-background px-6 py-5 lg:px-10 sticky top-0 z-40 backdrop-blur-xl bg-background/95">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="/#work" className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> All work
        </a>
        <a href="/"><img src={tilLogo} alt="The Ingredient List" className="h-9 w-auto object-contain mix-blend-multiply" /></a>
        <Button asChild variant="brand" size="sm" className="rounded-full">
          <a href={CAL} target="_blank" rel="noreferrer">Work with us <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></a>
        </Button>
      </div>
    </header>

    {/* Hero */}
    <section className="px-6 py-20 lg:px-10 lg:py-24 border-b border-border bg-gradient-warm">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl border border-border/50 bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img src={smartPackagingLogo} alt="Smart Packaging Solutions" className="h-10 w-10 object-contain" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Case study</p>
                <h1 className="font-brand text-lg font-extrabold text-foreground">Smart Packaging Solutions</h1>
              </div>
            </div>
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              13 years invisible online.<br />
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">8 weeks to fix that.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-8 max-w-2xl">
              A Bengaluru-based B2B packaging manufacturer with 500+ brand clients and zero digital presence was losing RFQs to competitors with better-looking websites. We rebuilt their entire online presence from the ground up.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            {[["Industry","Manufacturing & B2B"],["Timeline","8 weeks"],["Year","2025"],["Stack","Next.js · Tailwind · Vercel"]].map(([l,v])=>(
              <div key={l} className="rounded-xl border border-border/50 bg-card/60 px-4 py-3 min-w-[120px]">
                <p className="text-muted-foreground mb-0.5">{l}</p>
                <p className="font-semibold text-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Results */}
    <section className="px-6 py-16 lg:px-10 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8">The results</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {results.map(r => {
            const Icon = r.icon;
            return (
              <div key={r.label} className="rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/40 transition-all">
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2"><Icon className="h-4 w-4 text-primary" /></div>
                <p className="font-brand text-3xl font-extrabold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-1">{r.metric}</p>
                <p className="text-sm font-semibold text-foreground mb-0.5">{r.label}</p>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Challenge + Solution */}
    <section className="px-6 py-20 lg:px-10 border-b border-border bg-gradient-warm">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">The problem</p>
          <h3 className="font-brand text-2xl sm:text-3xl font-extrabold mb-6 leading-tight">13 years of credibility. Zero online evidence of it.</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-7">
            <p>Smart Packaging Solutions had been operating since 2011. They had worked with over 500 brands — including major FMCG companies — and had a track record of quality and reliability that most competitors simply could not match.</p>
            <p>But none of that was online. When a procurement manager at a potential client Googled packaging manufacturers in Bengaluru, Smart Packaging did not appear. When they did find the company and visited the website, they found a static page that had not been updated in years — no client list, no capability showcase, no certifications.</p>
            <p>They were losing RFQs before the conversation even started. Competitors with inferior quality but better websites were winning the business.</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">What we built</p>
          <h3 className="font-brand text-2xl sm:text-3xl font-extrabold mb-6 leading-tight">A site built around the B2B buyer's decision checklist.</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-7">
            <p>We mapped the full B2B procurement journey — from the first Google search to the final RFQ submission. Every page, every section, every CTA was designed to move a procurement manager through that journey without friction.</p>
            <p>The centrepiece was a searchable 500+ brand portfolio that turned their biggest asset — their client list — into a visible trust signal. We also automated the RFQ routing system so every enquiry went directly to the right team member, with a WhatsApp notification, within 30 seconds of submission.</p>
            <p>The SEO foundation — technical optimisation, keyword mapping, and content structure — was built into the site architecture from day one, not bolted on after launch.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Deliverables */}
    <section className="px-6 py-20 lg:px-10 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">What was delivered</p>
            <h3 className="font-brand text-2xl sm:text-3xl font-extrabold mb-8 leading-tight">Every component of a modern B2B digital presence.</h3>
            <ul className="space-y-3">
              {deliverables.map((d, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />{d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">The timeline</p>
            <h3 className="font-brand text-2xl sm:text-3xl font-extrabold mb-8 leading-tight">8 weeks from brief to live.</h3>
            <div className="space-y-5">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 rounded-xl border border-border/50 bg-card px-3 py-2 text-xs font-semibold text-primary whitespace-nowrap">{t.week}</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{t.title}</p>
                    <p className="text-xs text-muted-foreground leading-6">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Live site CTA */}
    <section className="px-6 py-20 lg:px-10 border-b border-border bg-gradient-warm text-center">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">See it live</p>
        <h2 className="font-brand text-3xl sm:text-4xl font-extrabold mb-4">The site is live. The results are real.</h2>
        <p className="text-muted-foreground mb-8">Visit the site to see the deliverables in context — the portfolio, the RFQ flow, the capability pages.</p>
        <Button asChild variant="brand" size="lg" className="rounded-full px-8">
          <a href="https://www.smartpackagingsolutions.in" target="_blank" rel="noreferrer">Visit Smart Packaging Solutions <ArrowUpRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-24 lg:px-10 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-brand text-3xl sm:text-4xl font-extrabold mb-4">Have a similar challenge?</h2>
        <p className="text-muted-foreground mb-10 text-lg">We take on three new projects per month. A 15-minute call is the fastest way to know if we're the right fit.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="brand" size="lg" className="rounded-full px-8">
            <a href={CAL} target="_blank" rel="noreferrer">Book a free call <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="/#work">See all work</a>
          </Button>
        </div>
      </div>
    </section>

    <footer className="border-t border-border px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} The Ingredient List. Bengaluru, India.</p>
        <div className="flex gap-6">
          <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  </main>
);

export default CaseStudySmartPackaging;
