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
} from "lucide-react";

import tilLogo from "@/assets/til-logo.png";
import projectJkp from "@/assets/project-jkpadmalaya.png";
import projectSierra from "@/assets/project-sierra.png";
import projectThrexa from "@/assets/project-threxa.png";
import { Button } from "@/components/ui/button";

const projects = [
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
      "The integration layer for Indian commerce — orchestrating Shopify, Tally, Razorpay, Shiprocket and WhatsApp into one calm operating system.",
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

const stats = [
  { value: "30+", label: "Brands shaped" },
  { value: "8 yrs", label: "Crafting digital" },
  { value: "100%", label: "In-house build" },
];

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
          <a href="#top" className="group flex items-center gap-3">
            <img
              src={tilLogo}
              alt="The Ingredient List"
              className="h-14 w-14 rounded-full object-contain ring-1 ring-border bg-card/70 p-1 shadow-card backdrop-blur-md transition-transform duration-500 group-hover:rotate-3 md:h-16 md:w-16"
            />
            <span className="hidden font-brand text-base font-extrabold tracking-tight sm:inline">
              The Ingredient List
            </span>
          </a>
          <nav className="hidden items-center gap-10 text-sm font-medium text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#studio" className="transition-colors hover:text-foreground">Studio</a>
          </nav>
          <Button variant="glass" size="sm" className="hidden rounded-full md:inline-flex">Start a project</Button>
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
            The Ingredient List is a small studio shaping brands, products and stories for ambitious founders — from heritage farmstays to aerospace and commerce infrastructure.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="brand" size="lg" className="rounded-full px-7">
              See our work <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="lg" className="rounded-full px-7">
              <Play className="h-4 w-4" /> Watch the reel
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
                  {/* Browser-framed mockup */}
                  <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
                    {/* glow */}
                    <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25" aria-hidden="true" />

                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform duration-700 ease-out hover:-translate-y-1"
                    >
                      {/* browser chrome */}
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

                    {/* floating stat card */}
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

                    {/* floating chip */}
                    <div className={`absolute ${reversed ? "-right-3 lg:-right-6" : "-left-3 lg:-left-6"} -top-3 hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-card sm:inline-flex`}>
                      <p.chip.icon className="h-3.5 w-3.5 text-primary" />
                      {p.chip.label}
                    </div>
                  </div>

                  {/* copy */}
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
        </div>
      </section>

      {/* STUDIO / CTA */}
      <section id="studio" className="relative bg-gradient-warm px-6 py-32 lg:px-10">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-15 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="relative mx-auto mb-10 flex h-32 w-32 items-center justify-center">
            <div className="ring-glow absolute inset-0 rounded-full" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-border bg-card shadow-card">
              <img src={tilLogo} alt="" className="h-24 w-24 rounded-full object-contain p-1.5" />
            </div>
          </div>
          <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-6xl">
            Have something <span className="text-gradient-brand">worth building</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            We take on a handful of partners each quarter. If you're shaping something thoughtful, we'd love to hear about it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="brand" size="lg" className="rounded-full px-8">
              Start a project <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="lg" className="rounded-full px-8">
              hello@theingredientlist.co
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={tilLogo} alt="The Ingredient List" className="h-10 w-10 rounded-full object-contain ring-1 ring-border bg-card p-1" />
            <span className="font-brand text-sm font-extrabold tracking-tight text-foreground">The Ingredient List</span>
          </div>
          <p>© {new Date().getFullYear()} The Ingredient List. Crafted in-house.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
