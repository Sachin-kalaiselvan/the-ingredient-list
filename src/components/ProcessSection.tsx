import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  const steps = [
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

  return (
    <section className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
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
              {steps.map((step, index) => (
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

                  {/* Arrow connector (except last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-20 hidden lg:block">
                      <div className="text-primary/40 transition-colors duration-300 group-hover:text-primary/60">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    </div>
                  )}
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
            {steps.map((step, index) => (
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
            <a href="https://cal.com/threxa/threxa-free-audit" target="_blank" rel="noreferrer">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
