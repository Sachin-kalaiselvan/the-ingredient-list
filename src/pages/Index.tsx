import { useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Palette,
  Code2,
  Play,
  TrendingUp,
  Users,
  Globe,
  Star,
  Check,
  Mail,
  Phone,
  Calendar,
  PackageCheck,
} from "lucide-react";

import tilLogo from "@/assets/til-logo.png";
import projectJkp from "@/assets/project-jkpadmalaya.png";
import projectSierra from "@/assets/project-sierra.png";
import projectThrexa from "@/assets/project-threxa.png";
import projectSmartPackaging from "@/assets/project-smartpackaging.png";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Smart Packaging Solutions",
    tag: "Manufacturing · B2B",
    year: "2026",
    description:
      "Bengaluru's trusted packaging partner since 2012 — a conversion-tuned site for corrugated cartons and printed mono boxes that moves RFQs from enquiry to order.",
    image: projectSmartPackaging,
    url: "smartpackagingsolutions.in",
    href: "https://www.smartpackagingsolutions.in/",
    stat: { icon: PackageCheck, label: "Boxes / year", value: "2M+" },
    chip: { icon: Star, label: "500+ brands served" },
  },
  {
    name: "JKP Padmalaya",
    tag: "Hospitality · Heritage",
    year: "2025",
    description:
      "A cinematic farmstay experience tucked into Kerala's spice country — editorial typography, immersive imagery, and a booking flow that feels like a deep breath.",
    image: projectJkp,
    url: "jkpadmalaya.lovable.app",
    href: "https://jkpadmalaya.lovable.app",
    stat: { icon: Users, label: "Bookings", value: "+212%" },
    chip: { icon: Star, label: "4.9 guest score" },
  },
  {
    name: "Sierra Aerospace",
    tag: "Aerospace · B2B",
    year: "2025",
    description:
      "Enterprise marketing site for an Indian UAV systems company — precise typography, technical credibility, and an export-ready global storefront.",
    image: projectSierra,
    url: "sierraaerospace.in",
    href: "https://sierraaerospace.in/",
    stat: { icon: Globe, label: "Markets", value: "11 countries" },
    chip: { icon: TrendingUp, label: "RFQs up 3.4×" },
  },
  {
    name: "Threxa",
    tag: "Commerce · Integrations",
    year: "2026",
    description:
      "Our in-house product. The integration layer for Indian commerce — orchestrating Shopify, Tally, Razorpay, Shiprocket and WhatsApp into one calm operating system.",
    image: projectThrexa,
    url: "threxa.theingredientlist.co",
    href: "https://threxa.theingredientlist.co/",
    stat: { icon: TrendingUp, label: "Pipeline", value: "$1.4M" },
    chip: { icon: Sparkles, label: "Pre-launch" },
  },
];

const services = [
  { icon: Palette, title: "Brand & Identity", copy: "Logos, type systems, and visual languages that hold their own at every scale." },
  { icon: Layers, title: "Product Design", copy: "Web and product surfaces that feel inevitable — quiet, considered, alive." },
  { icon: Code2, title: "Engineering", copy: "Fast, accessible, conversion-tuned builds. Shipped without drama." },
];

const integrations = [
  "Shopify", "Tally", "Razorpay", "Shiprocket", "WhatsApp", "Slack", "Stripe", "Supabase",
];

const pricing = [
  {
    name: "Starter",
    price: "₹16K – 22K",
    period: "1–2 weeks",
    description: "Ideal for MVPs and early-stage launches.",
    features: [
      "Single landing page",
      "Hero section + CTA",
      "Contact form",
      "Mobile responsive",
      "SEO fundamentals",
      "2 weeks support",
    ],
  },
  {
    name: "Growth",
    price: "₹35K – 50K",
    period: "2–3 weeks",
    description: "Perfect for SaaS and B2B businesses.",
    featured: true,
    features: [
      "5+ page marketing site",
      "Features & pricing sections",
      "Full SEO setup",
      "Analytics integration",
      "API integrations",
      "2 weeks support",
    ],
  },
  {
    name: "Professional",
    price: "₹60K – 90K",
    period: "3–4 weeks",
    description: "For enterprise and complex products.",
    features: [
      "Custom features & dashboard",
      "Database + backend",
      "Advanced animations",
      "Multiple integrations",
      "Performance & security audit",
      "4 weeks support",
    ],
  },
];

const stats = [
  { value: "30+", label: "Brands shaped" },
  { value: "8 yrs", label: "Crafting digital" },
  { value: "100%", label: "In-house build" },
];

const EMAIL = "theingredientlist.co@gmail.com";
const WHATSAPP = "+91 74839 92418";
const CAL = "https://cal.com/threxa/design-audit";

const Index = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.12 },
    );
    revealRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative bg-gradient-hero">
        <div className="absolute inset-0 til-grid opacity-70" aria-hidden="true" />
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-15 blur-[140px]" aria-hidden="true" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="group flex items-center">
            <img
              src={tilLogo}
              alt="The Ingredient List"
              className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] md:h-16"
            />
          </a>
          <nav className="hidden items-center gap-10 text-sm font-medium text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <Button asChild variant="glass" size="sm" className="hidden rounded-full md:inline-flex">
            <a href={`mailto:${EMAIL}`}>Start a project</a>
          </Button>
        </header>

        <div id="top" className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-16 text-center lg:px-10 lg:pt-24">
          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground shadow-card backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            A design + engineering studio
          </div>

          <h1 className="mx-auto max-w-5xl text-balance font-brand text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            We build digital products{" "}
            <span className="text-gradient-brand">worth listing</span> as your best work.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            A small studio shaping brands, products and stories for ambitious founders — from heritage hospitality to aerospace and commerce infrastructure.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="brand" size="lg" className="rounded-full px-7">
              <a href="#work">See our work <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="glass" size="lg" className="rounded-full px-7">
              <a href={CAL} target="_blank" rel="noreferrer"><Play className="h-4 w-4" /> Book a 15-min call</a>
            </Button>
          </div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-brand text-3xl font-extrabold text-gradient-brand">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
              <h2 className="mt-4 max-w-2xl font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
                A list of ingredients — recently plated.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              Each project is built end-to-end by the studio — strategy, identity, design and engineering.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((p, i) => {
              const reversed = i % 2 === 1;
              return (
                <article
                  key={p.name}
                  ref={addRef}
                  className="group relative grid translate-y-6 items-center gap-12 opacity-0 transition-all duration-700 lg:grid-cols-2 lg:gap-16"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
                    <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25" aria-hidden="true" />

                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform duration-700 ease-out hover:-translate-y-1"
                    >
                      <div className="browser-chrome flex items-center gap-2 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[hsl(0_75%_65%)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[hsl(40_85%_60%)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[hsl(140_50%_55%)]" />
                        <div className="ml-3 flex-1 truncate rounded-md bg-card/70 px-3 py-1 text-left text-[11px] font-medium text-muted-foreground">
                          {p.url}
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <img
                          src={p.image}
                          alt={`${p.name} website preview`}
                          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                      </div>
                    </a>

                    <div className={`absolute ${reversed ? "-left-4 lg:-left-10" : "-right-4 lg:-right-10"} bottom-10 hidden w-56 rounded-2xl border border-border bg-card p-4 shadow-soft sm:block`}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                          <p.stat.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{p.stat.label}</p>
                          <p className="font-brand text-lg font-extrabold leading-none">{p.stat.value}</p>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute ${reversed ? "-right-3 lg:-right-6" : "-left-3 lg:-left-6"} -top-3 hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-card sm:inline-flex`}>
                      <p.chip.icon className="h-3.5 w-3.5 text-primary" />
                      {p.chip.label}
                    </div>
                  </div>

                  <div className={`${reversed ? "lg:order-1" : ""}`}>
                    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
                      <span className="text-primary">{p.tag}</span>
                      <span className="h-px w-8 bg-border" />
                      <span className="text-muted-foreground">{p.year}</span>
                    </div>
                    <h3 className="font-brand text-4xl font-extrabold leading-tight lg:text-5xl">{p.name}</h3>
                    <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">{p.description}</p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-card transition-all hover:border-primary/60 hover:text-primary hover:shadow-glow"
                    >
                      Visit live site
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
              <h2 className="mt-4 font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
                One studio. The full <span className="text-gradient-brand">recipe</span>.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                We move from positioning to pixels to production — no handoffs, no compromise. Just one team that owns the outcome.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  ref={addRef}
                  className="group translate-y-6 rounded-2xl border border-border bg-card p-6 opacity-0 shadow-card transition-all duration-700 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-brand p-3 text-primary-foreground shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-brand text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{s.copy}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Integrations strip */}
          <div className="mt-20 rounded-3xl border border-border bg-gradient-card p-8 shadow-card lg:p-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Integrations</p>
                <h3 className="mt-3 font-brand text-2xl font-extrabold lg:text-3xl">
                  Built for the stack you already run.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Through our product Threxa, we deploy native integrations across the tools Indian commerce actually runs on.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {integrations.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Transparent pricing</p>
            <h2 className="mt-4 font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              Honest scope. <span className="text-gradient-brand">Fixed price.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              No surprise invoices. Pick the engagement that fits — we'll quote the exact number before kickoff.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((tier, i) => (
              <article
                key={tier.name}
                ref={addRef}
                className={`relative translate-y-6 rounded-3xl border p-8 opacity-0 transition-all duration-700 ${
                  tier.featured
                    ? "border-primary/40 bg-card shadow-glow lg:-translate-y-4"
                    : "border-border bg-card shadow-card"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                    Most popular
                  </span>
                )}
                <h3 className="font-brand text-xl font-extrabold">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-6">
                  <p className="font-brand text-4xl font-extrabold text-gradient-brand">{tier.price}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{tier.period}</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={tier.featured ? "brand" : "glass"}
                  className="mt-8 w-full rounded-full"
                >
                  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`${tier.name} engagement`)}`}>
                    Get started <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            50% to kickoff · 50% on delivery · UPI &amp; bank transfer · GST invoiced
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-background px-6 py-32 lg:px-10">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-10 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-6xl">
            Have something <span className="text-gradient-brand">worth building</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            We take on a handful of partners each quarter. Free 15-minute consultation — no obligation.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Email</span>
              <span className="break-all font-medium">{EMAIL}</span>
            </a>
            <a
              href="https://wa.me/917483992418"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">WhatsApp</span>
              <span className="font-medium">{WHATSAPP}</span>
            </a>
            <a
              href={CAL}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Calendar</span>
              <span className="font-medium">cal.com/threxa</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-6 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <img src={tilLogo} alt="The Ingredient List" className="h-12 w-auto object-contain md:h-14" />
          <p>© {new Date().getFullYear()} The Ingredient List. Crafted in-house.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
