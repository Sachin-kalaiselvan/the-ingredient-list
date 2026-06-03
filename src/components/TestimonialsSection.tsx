import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Smart Packaging Solutions",
    role: "Founder & Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
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
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
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
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    testimonial:
      "The automation workflows Sachin built saved us 15+ hours per week. Our Shopify + Tally + WhatsApp integration is seamless. The founder-led approach means we got genuine strategy, not generic solutions.",
    project: "Workflow Automation",
    rating: 5,
  },
  {
    id: 5,
    name: "Arjun Singh",
    company: "Tech Startup",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    testimonial:
      "From discovery to launch, everything was handled professionally. The team understood our vision immediately and delivered a website that sells our product better than we could have imagined. ROI was positive within 6 weeks.",
    project: "SaaS Landing Page",
    rating: 5,
  },
  {
    id: 6,
    name: "Sneha Gupta",
    company: "E-Commerce Collective",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    testimonial:
      "Best decision we made this year. The website not only looks incredible but the custom integrations work flawlessly. Customer support is outstanding and responsive. Worth every rupee spent.",
    project: "Full-Stack E-Commerce",
    rating: 5,
  },
];

const trustMarkers = [
  {
    icon: "★★★★★",
    label: "Client Satisfaction",
    description: "Average 4.9/5 rating",
  },
  {
    icon: "⚡",
    label: "Fast Communication",
    description: "48-hour response time",
  },
  {
    icon: "👨‍💼",
    label: "Founder-Led Execution",
    description: "Direct involvement on every project",
  },
  {
    icon: "🎯",
    label: "Custom Solutions",
    description: "No templates, no shortcuts",
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

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-glow hover:from-card/90 hover:to-card/60 hover:-translate-y-1 lg:p-8"
            >
              {/* Star Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 flex-1 text-sm leading-7 text-muted-foreground italic">
                "{testimonial.testimonial}"
              </p>

              {/* Divider */}
              <div className="mb-6 h-px bg-gradient-to-r from-border/0 via-border/50 to-border/0" />

              {/* Client Info */}
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Client Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-brand text-sm font-extrabold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs font-medium text-primary/80">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Project Tag (Optional) */}
              {testimonial.project && (
                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-xs font-medium text-muted-foreground/70">
                    {testimonial.project}
                  </p>
                </div>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
            </article>
          ))}
        </div>

        {/* Trust Markers Bar */}
        <div className="rounded-3xl border border-border/50 bg-gradient-to-r from-card/60 via-card/50 to-card/60 p-8 shadow-card backdrop-blur-sm lg:p-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trustMarkers.map((marker, index) => (
              <div key={index} className="text-center">
                <div className="mb-3 text-3xl font-bold text-gradient-brand">
                  {marker.icon}
                </div>
                <h3 className="font-brand text-sm font-extrabold text-foreground mb-1">
                  {marker.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {marker.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            💬 Have a success story? We'd love to feature you.{" "}
            <a
              href="mailto:theingredientlist.co@gmail.com"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
