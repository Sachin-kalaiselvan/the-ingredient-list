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
  BookOpen,
} from "lucide-react";

import tilLogo from "@/assets/til-logo.png";
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

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand business goals, challenges, audience, and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Define project scope, user journey, content structure, and technical requirements.",
  },
  {
    number: "03",
    title: "Design",
    description: "Craft a modern, conversion-focused user experience and visual identity.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop the website, automation systems, integrations, and performance optimizations.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Deploy, test, monitor, and provide ongoing improvements.",
  },
];

const articles = [
  {
    id: 1,
    title: "How AI Automation Saves Small Businesses Hours Every Week",
    summary: "Discover practical ways to eliminate repetitive tasks, reduce manual work, and free up your team to focus on strategic growth.",
    category: "Automation",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442d019cecf8e5c5b4ef1ea9d123?w=800&h=450&fit=crop",
    slug: "ai-automation-saves-hours",
  },
  {
    id: 2,
    title: "The Anatomy of a High-Converting Business Website",
    summary: "Learn the key elements that separate websites that generate leads from those that just exist. Psychology, design, and strategy combined.",
    category: "Design",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    slug: "high-converting-website-anatomy",
  },
  {
    id: 3,
    title: "5 Costly Website Mistakes Most Businesses Make",
    summary: "Avoid these common pitfalls that drain budget and kill conversions. From technical issues to UX failures—we cover what to avoid.",
    category: "Web Design",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
    slug: "costly-website-mistakes",
  },
  {
    id: 4,
    title: "Choosing the Right Tech Stack for Your Business Website",
    summary: "Frontend, backend, hosting, and tools—we break down the decisions that affect your site's performance, maintenance, and scale.",
    category: "Technology",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop",
    slug: "tech-stack-guide",
  },
  {
    id: 5,
    title: "When Should a Business Invest in Automation?",
    summary: "Is automation right for your business? We break down the signs, ROI calculations, and exactly when to make the investment.",
    category: "Strategy",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    slug: "when-to-invest-automation",
  },
];

const categoryColors: Record<string, string> = {
  Automation: "bg-purple-100 text-purple-700 border-purple-200",
  Design: "bg-orange-100 text-orange-700 border-orange-200",
  "Web Design": "bg-blue-100 text-blue-700 border-blue-200",
  Technology: "bg-green-100 text-green-700 border-green-200",
  Strategy: "bg-pink-100 text-pink-700 border-pink-200",
};

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

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10 lg:py-9">
          <a href="#top" aria-label="The Ingredient List — home" className="group -my-2 flex items-center">
            <img
              src={tilLogo}
              alt="The Ingredient List"
              className="h-16 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.02] sm:h-20 md:h-24 lg:h-28"
              style={{ marginTop: "-2px" }}
            />
          </a>
          <nav className="hidden items-center gap-10 text-sm font-medium text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#process" className="transition-colors hover:text-foreground">Process</a>
            <a href="#insights" className="transition-colors hover:text-foreground">Insights</a>
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
            Websites • AI Systems • Automation
          </div>

          <h1 className="mx-auto max-w-5xl text-balance font-brand text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Websites and AI systems{" "}
            <span className="text-gradient-brand">built to help businesses grow</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            We help businesses launch high-performing websites, automate repetitive work, and create digital experiences that drive measurable growth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="brand" size="lg" className="rounded-full px-7">
              <a href={CAL} target="_blank" rel="noreferrer">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="glass" size="lg" className="rounded-full px-7">
              <a href="#work"><Play className="h-4 w-4" /> View Our Work</a>
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
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                        <div className="ml-3 flex-1 truncate rounded-md bg-card/70 px-3 py-1 text-left text-xs font-medium text-muted-foreground">
                          {p.url}
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <img
                          src={p.image}
                          alt={`${p.name} website preview`}
                          className="aspect-video w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
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

                  <div className={reversed ? "lg:order-1" : ""}>
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

      {/* PROCESS */}
      <section id="process" className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              How We <span className="text-gradient-brand">Work</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A simple, transparent process from idea to launch.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-20 h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" aria-hidden="true" />

              {/* Steps */}
              <div className="relative grid grid-cols-5 gap-6">
                {processSteps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center">
                    {/* Step number circle */}
                    <div className="relative z-10 mb-12 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-card shadow-card transition-all duration-300 hover:border-primary/60 hover:shadow-glow">
                      <span className="font-brand text-2xl font-extrabold text-gradient-brand">{step.number}</span>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="font-brand text-xl font-extrabold text-foreground">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative space-y-8 pl-8">
              {/* Timeline line */}
              <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" aria-hidden="true" />

              {/* Steps */}
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  {/* Step number circle */}
                  <div className="absolute -left-7 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-card shadow-card">
                    <span className="font-brand text-sm font-extrabold text-gradient-brand">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                    <h3 className="font-brand text-lg font-extrabold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-20 rounded-2xl border border-border bg-gradient-card p-8 text-center shadow-card lg:p-12">
            <p className="text-lg leading-8 text-foreground">
              <span className="font-semibold">Every project is handled directly by the founder</span> to ensure quality, speed, and clear communication throughout the process.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="brand"
              size="lg"
              className="rounded-full px-8"
            >
              <a href={CAL} target="_blank" rel="noreferrer">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Knowledge</span>
            </div>
            <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              <span className="text-gradient-brand">Insights</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Thoughts, strategies, and practical guides on websites, automation, AI, and digital growth.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {articles.map((article) => (
              <article
                key={article.id}
                ref={addRef}
                className="group relative flex flex-col translate-y-6 opacity-0 overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-glow hover:-translate-y-1"
                style={{ transitionDelay: `${article.id * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-card/70">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold border ${
                        categoryColors[article.category] || "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Meta */}
                  <div className="mb-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {article.readTime}
                  </div>

                  {/* Title */}
                  <h3 className="font-brand text-lg font-extrabold leading-tight text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm leading-6 text-muted-foreground mb-6 line-clamp-2 flex-1">
                    {article.summary}
                  </p>

                  {/* Link */}
                  <a
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Featured/Curated Message */}
          <div className="mb-16 rounded-2xl border border-border bg-card p-8 text-center shadow-card lg:p-12">
            <p className="text-foreground">
              <span className="font-semibold">Curated insights</span> on building high-performing digital products, automating business workflows, and leveraging AI for growth. Written for ambitious founders and decision-makers.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              asChild
              variant="brand"
              size="lg"
              className="rounded-full px-8"
            >
              <a href="/insights">
                Explore All Insights
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center" />

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
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-10 blur-3xl" aria-hidden="true" />
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
          <img src={tilLogo} alt="The Ingredient List" className="h-16 w-auto object-contain mix-blend-multiply md:h-20" />
          <p>© {new Date().getFullYear()} The Ingredient List. Crafted in-house.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
