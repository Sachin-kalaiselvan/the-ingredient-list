import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  Globe2,
  LockKeyhole,
  Play,
  SmilePlus,
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
  "Maya sent a warmer onboarding plan to Northstar",
  "Atlas team celebrated a renewal milestone together",
  "Customer handoff is ready with notes, owners, and next steps",
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative bg-gradient-hero text-secondary-foreground">
        <div className="absolute inset-0 threxa-grid opacity-30" aria-hidden="true" />
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
            <img src={threxaIcon} alt="Threxa icon" className="h-10 w-14 object-contain" />
            <span className="font-brand text-lg font-bold tracking-[0.34em]">THREXA</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-secondary-foreground/72 md:flex">
            <a href="#platform" className="transition-colors hover:text-secondary-foreground">Platform</a>
            <a href="#proof" className="transition-colors hover:text-secondary-foreground">Proof</a>
            <a href="#pricing" className="transition-colors hover:text-secondary-foreground">Plans</a>
          </nav>
          <Button variant="glass" size="sm" className="hidden rounded-full md:inline-flex">Book demo</Button>
        </header>

        <div id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-16">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-surface-elevated/70 px-4 py-2 text-sm font-semibold text-secondary-foreground/82 shadow-glow backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-brand-violet" />
              Beyond limits for modern revenue teams
            </div>
            <h1 className="text-balance text-5xl font-extrabold leading-[1.02] tracking-normal text-secondary-foreground sm:text-6xl lg:text-7xl">
              The command center for high-performing SaaS operations.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-foreground/72">
              Threxa brings client work, analytics, approvals, and team execution into a polished operating system built for scale.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button variant="brand" size="lg" className="rounded-full px-7">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="lg" className="rounded-full px-7">
                <Play className="h-4 w-4" /> Watch product tour
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-l border-primary/28 pl-4">
                  <p className="font-brand text-2xl font-bold text-secondary-foreground">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-secondary-foreground/55">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:160ms]">
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-primary/25 bg-surface-elevated/74 p-3 shadow-glow backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 motion-reduce:hover:translate-y-0">
              <img src={analyticsPhoto} alt="Business analytics dashboard in a professional office" className="h-[520px] w-full rounded-[1.35rem] object-cover" />
              <div className="absolute inset-3 rounded-[1.35rem] bg-gradient-to-t from-surface via-surface/28 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-primary/20 bg-card/92 p-5 text-card-foreground shadow-soft backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-muted-foreground">Operational health</p>
                    <p className="mt-1 text-3xl font-extrabold">94.8%</p>
                  </div>
                  <div className="rounded-full bg-gradient-brand p-3 text-primary-foreground shadow-glow">
                    <Gauge className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[76, 91, 64].map((height, index) => (
                    <div key={height} className="flex h-20 items-end rounded-lg bg-muted p-1">
                      <div className="w-full rounded-md bg-gradient-brand transition-all duration-500 group-hover:brightness-110" style={{ height: `${height}%` }} aria-label={`Chart bar ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -right-5 top-12 hidden w-56 animate-float-panel rounded-2xl border border-primary/20 bg-card/95 p-4 shadow-soft backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-brand p-2 text-primary-foreground"><Zap className="h-4 w-4" /></div>
                <div>
                  <p className="text-sm font-extrabold">Automation live</p>
                  <p className="text-xs text-muted-foreground">12 tasks routed</p>
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
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-primary">One workspace</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">Professional control without the enterprise clutter.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">A realistic, boardroom-ready interface for the teams that sell, deliver, and retain customers every week.</p>
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
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-violet">Brand system</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">Same Threxa identity, refined into a credible SaaS experience.</h2>
            <div className="mt-8 space-y-4">
              {activity.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-primary/18 bg-surface-soft/70 p-4 backdrop-blur-xl">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-cyan" />
                  <p className="font-semibold text-secondary-foreground/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-primary">Scale-ready</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">Launch with the tools your team already expects.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[{ icon: Users2, text: "Client portals" }, { icon: Globe2, text: "Global dashboards" }, { icon: Zap, text: "Smart automations" }].map((item) => (
              <div key={item.text} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <item.icon className="h-7 w-7 text-primary" />
                <p className="mt-5 text-xl font-extrabold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;