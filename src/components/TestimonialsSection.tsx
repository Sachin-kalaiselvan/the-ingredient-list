import { Star, Check } from "lucide-react";

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
  {
    label: "Client Satisfaction",
    value: "4.9/5",
    description: "Average rating across all projects",
  },
  {
    label: "Average Timeline",
    value: "2-4 weeks",
    description: "From kickoff to launch",
  },
  {
    label: "Direct Founder",
    value: "100%",
    description: "Lead involvement on every project",
  },
  {
    label: "Custom Built",
    value: "0%",
    description: "Template usage - everything custom",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
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

        {/* Testimonials Grid - 2 columns */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
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

        {/* Trust Markers - Professional Grid */}
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
  );
}
