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
    url: "jkpadmalaya.com",
    href: "https://jkpadmalaya.com",
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
    title: "How AI Automation Saves Businesses Hours Every Week",
    summary: "Eliminate repetitive tasks and free up your team to focus on growth.",
    category: "Automation",
    readTime: "8 min",
    slug: "ai-automation-saves-hours",
  },
  {
    id: 2,
    title: "The Anatomy of a High-Converting Website",
    summary: "Learn what separates websites that generate leads from those that don't.",
    category: "Design",
    readTime: "10 min",
    slug: "high-converting-website",
  },
  {
    id: 3,
    title: "Choosing Your Tech Stack: A Strategic Guide",
    summary: "Frontend, backend, hosting — decisions that affect performance and scale.",
    category: "Technology",
    readTime: "12 min",
    slug: "tech-stack-guide",
  },
  {
    id: 4,
    title: "When Should You Invest in Automation?",
    summary: "Signs, ROI calculations, and exactly when to make the investment.",
    category: "Strategy",
    readTime: "9 min",
    slug: "when-to-automate",
  },
];

const categoryColors: Record<string, string> = {
  Automation: "bg-purple-100/50 text-purple-700 border-purple-200/50",
  Design: "bg-orange-100/50 text-orange-700 border-orange-200/50",
  Technology: "bg-green-100/50 text-green-700 border-green-200/50",
  Strategy: "bg-pink-100/50 text-pink-700 border-pink-200/50",
};

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Smart Packaging Solutions",
    role: "Founder & Director",
    testimonial:
      "Sachin transformed our online presence completely. The website not only looks premium but converts like crazy. Within 3 months, we saw 40% more qualified RFQs. The entire process was transparent and communication was exceptional.",
    project: "Website Redesign",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "JKP Padmalaya",
    role: "Co-Founder",
    testimonial:
      "Working with The Ingredient List was a game-changer for our farmstay business. The website captures the essence of our brand beautifully. Our booking rate increased by 212% in the first quarter. Highly recommend!",
    project: "Luxury Hospitality Website",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Patel",
    company: "Sierra Aerospace",
    role: "VP Marketing",
    testimonial:
      "The team built us an enterprise-grade website that perfectly communicates our technical expertise to global markets. We now have clients in 11 countries. The attention to detail and understanding of B2B positioning was incredible.",
    project: "Enterprise Marketing Site",
    rating: 5,
  },
  {
    id: 4,
    name: "Ananya Desai",
    company: "D2C Commerce Brand",
    role: "CEO",
    testimonial:
      "The automation workflows Sachin built saved us 15+ hours per week. Our Shopify + Tally + WhatsApp integration is seamless. The founder-led approach means we got genuine strategy, not generic solutions.",
    project: "Workflow Automation",
    rating: 5,
  },
];

const trustMarkers = [
  { label: "Client Satisfaction", value: "4.9/5", description: "Average rating across all projects" },
  { label: "Average Timeline", value: "2-4 weeks", description: "From kickoff to launch" },
  { label: "Direct Founder", value: "100%", description: "Lead involvement on every project" },
  { label: "Custom Built", value: "0%", description: "Template usage - everything custom" },
];

const pricing = [
  {
    name: "Starter",
    price: "₹16,000",
    period: "One-time",
    duration: "1–2 weeks",
    description: "Perfect for validating your idea quickly.",
    features: [
      { label: "Single landing page", details: "Hero, features, CTA" },
      { label: "Mobile responsive design", details: "Optimized for all devices" },
      { label: "Basic SEO setup", details: "Meta tags, sitemaps, indexing" },
      { label: "Contact form", details: "Email notifications included" },
      { label: "Performance optimization", details: "Fast load times guaranteed" },
    ],
    notIncluded: [
      "Custom integrations",
      "Automation workflows",
      "Analytics dashboard",
    ],
    bestFor: "MVPs, Portfolios, Landing Pages",
  },
  {
    name: "Growth",
    price: "₹35,000",
    period: "One-time",
    duration: "2–3 weeks",
    description: "For businesses serious about conversions.",
    featured: true,
    features: [
      { label: "5+ page website", details: "Home, About, Services, Pricing, Contact" },
      { label: "Conversion optimization", details: "Strategic CTA placement, lead capture" },
      { label: "Advanced SEO", details: "Keyword strategy, content optimization, schema markup" },
      { label: "Analytics integration", details: "Google Analytics 4 + conversion tracking" },
      { label: "API integration", details: "Connect to your existing tools" },
      { label: "Direct founder involvement", details: "Strategy + delivery by Sachin" },
    ],
    notIncluded: [
      "Custom backend systems",
      "Automation workflows",
      "Advanced integrations",
    ],
    bestFor: "SaaS, E-Commerce, Service Businesses",
  },
  {
    name: "Professional",
    price: "₹60,000+",
    period: "Project-based",
    duration: "3–4 weeks",
    description: "For complex requirements and custom solutions.",
    features: [
      { label: "Custom feature development", details: "Dashboard, user accounts, CMS" },
      { label: "Database + backend", details: "Scalable infrastructure, API endpoints" },
      { label: "Advanced automation", details: "Shopify + Tally + WhatsApp workflows" },
      { label: "Multiple integrations", details: "CRM, payment, shipping, accounting sync" },
      { label: "Performance audit", details: "Load testing, optimization, security review" },
      { label: "Extended support", details: "1 month post-launch assistance" },
    ],
    notIncluded: [],
    bestFor: "Enterprise, D2C Brands, Complex Systems",
  },
];

const integrations = [
  "Shopify", "Tally", "Razorpay", "Shiprocket", "WhatsApp", "Slack", "Stripe", "Supabase",
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
            <a href="#testimonials" className="transition-colors hover:text-foreground">Testimonials</a>
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
      <section id="process" className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
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
      <section id="insights" className="relative border-t border-border bg-background px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-14 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Knowledge
                </span>
              </div>
              <h2 className="font-brand text-3xl font-extrabold lg:text-4xl">
                <span className="text-gradient-brand">Insights</span>
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full hidden md:inline-flex"
            >
              <a href="/insights">
                View All
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Articles Grid - 2x2 */}
          <div className="grid gap-6 md:grid-cols-2 mb-10">
            {articles.map((article, idx) => (
              <a
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/30 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-md hover:-translate-y-0.5 opacity-0 translate-y-6 animate-in"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {/* Category Badge */}
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      categoryColors[article.category] ||
                      "bg-gray-100/50 text-gray-700 border-gray-200/50"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-brand text-lg font-extrabold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {article.summary}
                </p>

                {/* Link */}
                <div className="text-sm font-semibold text-primary group-hover:gap-1 flex items-center gap-0 transition-all">
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
            ))}
          </div>

          {/* CTA - Mobile and fallback */}
          <div className="flex justify-center md:hidden">
            <Button
              asChild
              variant="brand"
              size="sm"
              className="rounded-full"
            >
              <a href="/insights">
                Explore All Insights
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              Trusted by Businesses{" "}
              <span className="text-gradient-brand">Building for Growth</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Real feedback from founders and teams we've worked with.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-20">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                ref={addRef}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-glow hover:from-card/90 hover:to-card/60 hover:-translate-y-1 opacity-0 translate-y-6 animate-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Star Rating */}
                <div className="mb-5 flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-8 flex-1 text-sm leading-7 text-muted-foreground italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Divider */}
                <div className="mb-6 h-px bg-gradient-to-r from-border/0 via-border/40 to-border/0" />

                {/* Client Info - Simplified */}
                <div className="space-y-1">
                  <h3 className="font-brand text-sm font-extrabold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at <span className="font-semibold text-primary/80">{testimonial.company}</span>
                  </p>
                  {testimonial.project && (
                    <p className="text-xs font-medium text-muted-foreground/60 pt-2">
                      Project: {testimonial.project}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Trust Markers Bar */}
          <div className="rounded-2xl border border-border/40 bg-card/50 p-8 shadow-card backdrop-blur-sm lg:p-12">
            <h3 className="font-brand text-lg font-extrabold text-foreground mb-8 text-center">
              Why Businesses Trust Us
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {trustMarkers.map((marker, index) => (
                <div key={index} className="relative">
                  {/* Top line accent */}
                  <div className="absolute -top-1 left-0 h-1 w-8 bg-gradient-to-r from-primary to-orange-500" />
                  
                  <div className="pt-4">
                    <div className="mb-2 text-2xl font-extrabold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                      {marker.value}
                    </div>
                    <h4 className="font-brand text-sm font-extrabold text-foreground mb-1">
                      {marker.label}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {marker.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-5xl mb-4">
              Simple, Transparent <span className="text-gradient-brand">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick the plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            {pricing.map((tier, i) => (
              <article
                key={tier.name}
                ref={addRef}
                className={`relative rounded-2xl border p-8 transition-all duration-300 overflow-hidden opacity-0 translate-y-6 animate-in ${
                  tier.featured
                    ? "border-primary/40 bg-card shadow-glow ring-1 ring-primary/20 lg:-translate-y-4"
                    : "border-border/50 bg-card/50 shadow-card hover:border-primary/20 hover:shadow-sm"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Featured Badge */}
                {tier.featured && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-b-xl bg-gradient-to-r from-primary to-orange-500 px-4 py-1 text-xs font-extrabold text-white uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className={tier.featured ? "pt-6" : ""}>
                  <h3 className="font-brand text-2xl font-extrabold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 h-10">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-brand text-4xl font-extrabold text-gradient-brand">
                        {tier.price}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Delivery: {tier.duration}
                    </p>
                  </div>

                  {/* Best For */}
                  <div className="mb-6 p-3 rounded-lg bg-muted/30 border border-border/30">
                    <p className="text-xs font-semibold text-foreground mb-1">Best for:</p>
                    <p className="text-xs text-muted-foreground">{tier.bestFor}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 space-y-3 border-t border-border/30 pt-6">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          {feature.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {feature.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Not Included */}
                {tier.notIncluded.length > 0 && (
                  <div className="mb-6 pb-6 border-b border-border/30 space-y-2">
                    {tier.notIncluded.map((item, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground/60 line-through">
                        {item}
                      </p>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <Button
                  asChild
                  variant={tier.featured ? "brand" : "outline"}
                  className="w-full rounded-lg"
                >
                  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`${tier.name} Package Inquiry`)}`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </article>
            ))}
          </div>

          {/* Payment Terms */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              <span className="font-semibold text-foreground">50% to kickoff</span> · 50% on launch
            </p>
            <p>
              <span className="font-semibold text-foreground">UPI, Bank Transfer, Credit Card</span> accepted · GST invoiced
            </p>
          </div>
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
