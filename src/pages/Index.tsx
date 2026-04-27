import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  Globe2,
  LineChart,
  LockKeyhole,
  Play,
  SmilePlus,
  Star,
  Users2,
  Workflow,
  Zap,
} from "lucide-react";

import analyticsPhoto from "@/assets/business-analytics.jpg";
import brandBoard from "@/assets/threxa-brand-board.png";
import teamPhoto from "@/assets/team-collaboration.jpg";
import threxaIcon from "@/assets/threxa-icon.png";
import threxaLogo from "@/assets/threxa-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const metrics = [
  { value: "42%", label: "more time with customers" },
  { value: "18k", label: "thoughtful workflows shipped" },
  { value: "99.9%", label: "reliable workdays" },
];

const features = [
  { icon: Workflow, title: "Gentle workflows", copy: "Bring approvals, tasks, files, and client handoffs together without making work feel heavy." },
  { icon: BarChart3, title: "Clear progress", copy: "See customer health, team focus, and revenue momentum in language everyone understands." },
  { icon: LockKeyhole, title: "Trusted by design", copy: "Give every teammate the right access with secure spaces that still feel welcoming." },
];

const activity = [
  "“Threxa made our customer work feel lighter without losing the numbers we care about.”",
  "“Our team finally has one place that feels clear, calm, and genuinely useful.”",
  "“The onboarding flow helped us move faster while still sounding human to every customer.”",
  "“It gives leadership the full picture without turning the product into another cold dashboard.”",
];

const dashboardRows = [
  { label: "Expansion pipeline", value: "$248k", progress: "78%" },
  { label: "Customer onboarding", value: "32 teams", progress: "64%" },
  { label: "Renewal confidence", value: "91%", progress: "91%" },
];

const plans = [
  { name: "Start", price: "$29", detail: "For small SaaS teams finding rhythm", perks: ["3 workspaces", "Customer notes", "Simple analytics"] },
  { name: "Grow", price: "$79", detail: "For teams ready to scale with care", perks: ["Unlimited projects", "Team dashboards", "Priority support"], featured: true },
  { name: "Scale", price: "Custom", detail: "For mature teams with complex workflows", perks: ["Advanced controls", "Dedicated onboarding", "Custom reporting"] },
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative bg-gradient-hero text-foreground">
        <div className="absolute inset-0 threxa-grid opacity-20" aria-hidden="true" />
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
            <img src={threxaIcon} alt="Threxa icon" className="h-10 w-14 object-contain" />
            <span className="font-brand text-lg font-extrabold tracking-[0.18em]">THREXA</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#platform" className="transition-colors hover:text-foreground">Platform</a>
            <a href="#proof" className="transition-colors hover:text-foreground">Proof</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Plans</a>
          </nav>
          <Button asChild variant="glass" size="sm" className="hidden rounded-full md:inline-flex"><Link to="/login">Login</Link></Button>
        </header>

        <div id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-16">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-card/85 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-soft backdrop-blur-xl">
              <SmilePlus className="h-4 w-4 text-primary" />
              Built with care for growing SaaS teams
            </div>
            <h1 className="text-balance text-5xl font-extrabold leading-[1.04] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              A calmer way to run your SaaS business.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              Threxa helps teams care for customers, share progress, and keep momentum without losing the human side of work.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="brand" size="lg" className="rounded-full px-7">
                <Link to="/login">Start free trial <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="glass" size="lg" className="rounded-full px-7">
                <Play className="h-4 w-4" /> Watch product tour
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-l border-primary/28 pl-4">
                  <p className="font-brand text-2xl font-extrabold text-foreground">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:160ms]">
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-primary/15 bg-card/76 p-3 shadow-soft backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 motion-reduce:hover:translate-y-0">
              <img src={teamPhoto} alt="SaaS team collaborating in a warm modern office" className="h-[520px] w-full rounded-[1.35rem] object-cover" />
              <div className="absolute inset-3 rounded-[1.35rem] bg-gradient-to-t from-foreground/45 via-foreground/8 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-primary/15 bg-card/94 p-5 text-card-foreground shadow-soft backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-muted-foreground">Workspace momentum</p>
                    <p className="mt-1 text-3xl font-extrabold">12 launches</p>
                  </div>
                  <div className="rounded-full bg-gradient-brand p-3 text-primary-foreground shadow-glow">
                    <LineChart className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[72, 88, 61].map((height, index) => (
                    <div key={height} className="flex h-20 items-end rounded-lg bg-muted p-1">
                      <div className="w-full rounded-md bg-gradient-brand transition-all duration-500 group-hover:brightness-110" style={{ height: `${height}%` }} aria-label={`Chart bar ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -right-5 top-12 hidden w-56 animate-float-panel rounded-2xl border border-primary/15 bg-card/95 p-4 shadow-soft backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-brand p-2 text-primary-foreground"><Zap className="h-4 w-4" /></div>
                <div>
                  <p className="text-sm font-extrabold">Follow-up ready</p>
                  <p className="text-xs text-muted-foreground">Demo space live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <img src={threxaLogo} alt="Threxa Beyond Limits logo" className="mb-8 h-auto w-72 object-contain" />
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">One thoughtful workspace</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">Software that feels like it was made by people, for people.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">A professional SaaS experience with warm visuals, clear decisions, and just enough structure to help teams do their best work.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="group rounded-2xl border border-border bg-gradient-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 motion-reduce:hover:translate-y-0">
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-brand p-3 text-primary-foreground shadow-glow">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-extrabold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.copy}</p>
                  <ChevronRight className="mt-5 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-secondary px-6 py-20 text-secondary-foreground lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-[1.75rem] border border-primary/18 bg-surface-elevated p-5 shadow-glow">
            <img src={brandBoard} alt="Threxa brand system with logo, colors, and professional mockups" className="rounded-[1.25rem] object-cover" />
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">Brand with warmth</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">Same Threxa identity, now softened into something customers can trust.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {activity.map((item) => (
                <figure key={item} className="rounded-2xl border border-primary/18 bg-surface-soft/70 p-5 backdrop-blur-xl">
                  <div className="mb-4 flex gap-1 text-primary">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="font-semibold leading-7 text-secondary-foreground/82">{item}</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">Interactive product view</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">A dashboard that helps people decide, not just stare at charts.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Track onboarding, renewals, expansion, and team focus in a workspace that feels alive and approachable.</p>
          </div>
          <div className="rounded-[1.75rem] border border-primary/15 bg-card p-5 shadow-soft">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-muted-foreground">Revenue workspace</p>
                <p className="text-3xl font-extrabold">$1.2m in motion</p>
              </div>
              <Button asChild variant="brand" className="rounded-full">
                <Link to="/login">Open app</Link>
              </Button>
            </div>
            <div className="space-y-4">
              {dashboardRows.map((row) => (
                <div key={row.label} className="rounded-2xl bg-secondary p-4">
                  <div className="flex items-center justify-between gap-4 text-sm font-extrabold">
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-card">
                    <div className="h-full rounded-full bg-gradient-brand" style={{ width: row.progress }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-secondary px-6 py-20 text-secondary-foreground lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">Made to grow</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">Simple plans with room for every stage.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`rounded-2xl border p-6 shadow-soft ${plan.featured ? "border-primary/35 bg-card" : "border-primary/14 bg-surface-soft/70"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold">{plan.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">{plan.detail}</p>
                  </div>
                  {plan.featured ? <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-extrabold text-primary-foreground">Popular</span> : null}
                </div>
                <p className="mt-8 text-4xl font-extrabold">{plan.price}<span className="text-sm text-muted-foreground">{plan.price === "Custom" ? "" : "/mo"}</span></p>
                <ul className="mt-6 space-y-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> {perk}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;