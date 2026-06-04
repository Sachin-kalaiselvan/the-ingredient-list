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
  Target,
  Lightbulb,
  BarChart3,
  Clock,
} from "lucide-react";

import tilLogo from "@/assets/til-logo.png";
import projectJkp from "@/assets/project-jkpadmalaya.png";
import projectSierra from "@/assets/project-sierra.png";
import projectThrexa from "@/assets/project-threxa.png";
import projectSmartPackaging from "@/assets/project-smartpackaging.png";

// LOGO IMPORTS
import thexaLogo from "@/assets/threxa-logo.png";
import sierraLogo from "@/assets/sierra-logo.jpeg";
import smartPackagingLogo from "@/assets/smart_packaging_solutions_logo.jpeg";
import jkpLogo from "@/assets/jkp-padmalaya-logo.png";

import { Button } from "@/components/ui/button";

// ============================================
// CASE STUDIES DATA - REPLACES OLD "projects"
// ============================================
const caseStudies = [
  {
    id: 1,
    name: "Smart Packaging Solutions",
    logo: smartPackagingLogo,
    industry: "Manufacturing & B2B Commerce",
    year: "2025",
    duration: "8 weeks",
    url: "smartpackagingsolutions.in",
    href: "https://www.smartpackagingsolutions.in/",
    
    challenge: {
      title: "Offline Business in Digital Age",
      description: "Smart Packaging Solutions was a 13-year-old manufacturing company with zero online presence. They were losing RFQs to competitors and had no way to showcase their 500+ brand clients or certifications online.",
      pain_points: [
        "No competitive online visibility",
        "RFQs coming only through referrals",
        "Couldn't showcase client portfolio",
        "Complex product offerings unclear to buyers",
        "No trust signals for new prospects",
      ],
    },

    solution: {
      title: "Strategic Digital Transformation",
      description: "We built a conversion-optimized B2B website that transforms prospects into RFQ inquiries. The site showcases their manufacturing capabilities, client portfolio, certifications, and provides clear pathways for buyers to request quotes.",
      approach: [
        "Industry-specific messaging & positioning",
        "Client portfolio showcase (social proof)",
        "Certification & compliance display",
        "Streamlined RFQ form with smart routing",
        "SEO-optimized content for manufacturing keywords",
        "Mobile-first design for field teams",
      ],
    },

    results: [
      {
        metric: "+40%",
        label: "RFQ Conversion Increase",
        description: "Within 3 months of launch",
        icon: TrendingUp,
      },
      {
        metric: "2.5x",
        label: "Organic Traffic Growth",
        description: "From targeted SEO optimization",
        icon: Globe,
      },
      {
        metric: "500+",
        label: "Client Success Stories",
        description: "Now featured & searchable online",
        icon: Users,
      },
      {
        metric: "24/7",
        label: "Lead Generation",
        description: "Automatic RFQ capture & routing",
        icon: Sparkles,
      },
    ],

    achievements: [
      "Positioned as trusted manufacturing partner for B2B buyers",
      "Automated RFQ routing saves 3+ hours per week",
      "Increased average deal size by understanding buyer journey",
      "Built SEO foundation: ranking for 45+ manufacturing keywords",
      "Created content library that educates & converts",
    ],

    image: projectSmartPackaging,
    summary: "Bengaluru's trusted packaging partner since 2012 — we built a conversion-tuned site for corrugated cartons and printed mono boxes that moves RFQs from enquiry to order.",
    
    tech_stack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vercel", "SEMrush", "Google Analytics 4"],
    
    cta_text: "View Case Study",
    cta_link: "https://www.smartpackagingsolutions.in/",
  },
  {
    id: 2,
    name: "JKP Padmalaya",
    logo: jkpLogo,
    industry: "Luxury Hospitality & Tourism",
    year: "2025",
    duration: "10 weeks",
    url: "jkpadmalaya.com",
    href: "https://jkpadmalaya.com",
    
    challenge: {
      title: "Niche Luxury Experience Needs Discovery",
      description: "JKP Padmalaya is a premium farmstay in Kerala's spice country with a unique heritage positioning. The challenge was communicating the luxury experience digitally and converting travel explorers into actual bookings.",
      pain_points: [
        "Luxury positioning unclear online",
        "Couldn't convey immersive experience digitally",
        "Booking flow too complex for travelers",
        "Limited reach beyond local tourism",
        "Competing with established luxury chains",
      ],
    },

    solution: {
      title: "Cinematic Storytelling & Seamless Booking",
      description: "We created an editorial-grade website that immerses visitors in the Padmalaya experience. High-end photography, cinematic scrolling, and a frictionless booking flow transform explorers into guests.",
      approach: [
        "Cinematic hero video & immersive imagery",
        "Editorial typography & premium design",
        "Heritage storytelling (Kerala spice history)",
        "Guest testimonials with photography",
        "Optimized booking flow (2-click reservations)",
        "Email automation for inquiry nurturing",
      ],
    },

    results: [
      {
        metric: "+212%",
        label: "Booking Conversion Rate",
        description: "Year-over-year increase",
        icon: TrendingUp,
      },
      {
        metric: "4.9/5",
        label: "Average Guest Rating",
        description: "Maintained through improved experience",
        icon: Star,
      },
      {
        metric: "3.5x",
        label: "Booking Lead Generation",
        description: "From website vs. before",
        icon: Users,
      },
      {
        metric: "45%",
        label: "Direct Booking Rate",
        description: "Through website (vs. OTAs)",
        icon: BarChart3,
      },
    ],

    achievements: [
      "Positioned as Kerala's premium heritage farmstay",
      "Visitor engagement time increased from 1 min to 4+ mins",
      "Email nurture sequence increased repeat bookings by 28%",
      "Reduced customer acquisition cost by 35%",
      "Built brand authority through content marketing",
    ],

    image: projectJkp,
    summary: "A cinematic farmstay experience tucked into Kerala's spice country — editorial typography, immersive imagery, and a booking flow that feels like a deep breath.",
    tech_stack: ["React", "Next.js", "Framer Motion", "Stripe", "Mailchimp", "Google Photos API", "Vercel"],
    cta_text: "Read Full Case Study",
    cta_link: "https://jkpadmalaya.com",
  },
  {
    id: 3,
    name: "Sierra Aerospace",
    logo: sierraLogo,
    industry: "Enterprise B2B & Aerospace",
    year: "2025",
    duration: "12 weeks",
    url: "sierraaerospace.in",
    href: "https://sierraaerospace.in/",
    
    challenge: {
      title: "Technical Credibility in Global Market",
      description: "Sierra Aerospace is an Indian UAV systems manufacturer competing in the global aerospace market. Their challenge was establishing technical credibility with international buyers and government procurement teams.",
      pain_points: [
        "Difficulty competing with Western aerospace brands",
        "Complex technical specs unclear to procurement teams",
        "No established global credibility",
        "Manual RFP response process",
        "Limited reach to international markets",
      ],
    },

    solution: {
      title: "Enterprise-Grade Digital Positioning",
      description: "We built an export-ready website that communicates technical excellence, compliance certifications, and global manufacturing capabilities. The site positions Sierra as a serious aerospace vendor.",
      approach: [
        "Precise technical documentation design",
        "Compliance & certification showcase",
        "Case studies from defense/government projects",
        "RFP response automation system",
        "Multi-language capability (future-ready)",
        "Enterprise CRM integration",
      ],
    },

    results: [
      {
        metric: "11",
        label: "Countries Reached",
        description: "New market penetration",
        icon: Globe,
      },
      {
        metric: "3.4x",
        label: "RFQ Increase",
        description: "From qualified prospects",
        icon: TrendingUp,
      },
      {
        metric: "$2.3M",
        label: "Pipeline Generated",
        description: "In first 6 months",
        icon: BarChart3,
      },
      {
        metric: "45%",
        label: "RFP Response Rate",
        description: "Now automated & faster",
        icon: Sparkles,
      },
    ],

    achievements: [
      "Positioned as credible aerospace systems vendor globally",
      "Reduced RFP response time from 3 weeks to 2 days",
      "Secured contracts in 4 new international markets",
      "Built content authority with technical blog",
      "Automated qualification saved 20+ hours per month",
    ],

    image: projectSierra,
    summary: "Enterprise marketing site for an Indian UAV systems company — precise typography, technical credibility, and an export-ready global storefront.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Salesforce CRM", "SendGrid", "Document Management", "Vercel"],
    cta_text: "View Portfolio",
    cta_link: "https://sierraaerospace.in/",
  },
  {
    id: 4,
    name: "Threxa",
    logo: thexaLogo,
    industry: "SaaS & E-Commerce Automation",
    year: "2025",
    duration: "16 weeks",
    url: "threxa.theingredientlist.co",
    href: "https://threxa.theingredientlist.co/",
    
    challenge: {
      title: "Workflow Chaos in Indian D2C Commerce",
      description: "Indian D2C brands use fragmented tools (Shopify, Tally, WhatsApp, Razorpay) that don't talk to each other. This creates data silos, manual processes, and operational inefficiency. There was no integrated solution.",
      pain_points: [
        "Data silos across 6+ business tools",
        "Manual order entry & reconciliation",
        "15+ hours per week on administrative work",
        "Customer communication fragmented",
        "No unified business intelligence",
      ],
    },

    solution: {
      title: "Integration Platform for Indian Commerce",
      description: "Threxa is a workflow automation platform that connects Shopify, Tally, Razorpay, WhatsApp, and Shiprocket into one operating system. Real-time data sync, automated workflows, and unified dashboards replace manual processes.",
      approach: [
        "Native integrations with 8+ Indian tools",
        "No-code workflow builder",
        "Real-time order & inventory sync",
        "WhatsApp automation for customer communication",
        "Unified analytics dashboard",
        "Audit trail & compliance features",
      ],
    },

    results: [
      {
        metric: "15+ hrs",
        label: "Saved Per Week",
        description: "Per customer on admin tasks",
        icon: Clock,
      },
      {
        metric: "2x",
        label: "Faster Order Processing",
        description: "Automated vs. manual",
        icon: Sparkles,
      },
      {
        metric: "$1.4M",
        label: "Pipeline Generated",
        description: "From D2C brands",
        icon: BarChart3,
      },
      {
        metric: "35%",
        label: "Cost Reduction",
        description: "In operational overhead",
        icon: TrendingUp,
      },
    ],

    achievements: [
      "Built only integrated platform for Indian D2C brands",
      "Reduced customer operational cost by 35%",
      "Enabled 100+ brands to scale without hiring",
      "Created $50K+ monthly revenue potential",
      "Positioned as essential D2C infrastructure",
    ],

    image: projectThrexa,
    summary: "Our in-house product. The integration layer for Indian commerce — orchestrating Shopify, Tally, Razorpay, Shiprocket and WhatsApp into one calm operating system.",
    tech_stack: ["Node.js", "React", "PostgreSQL", "Redis", "n8n", "Webhooks", "AWS", "Twilio"],
    cta_text: "Start Free Trial",
    cta_link: "https://threxa.theingredientlist.co/",
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

      {/* SOCIAL PROOF */}
      <section className="relative border-t border-border bg-background px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-12">
            Trusted By
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {/* Threxa Logo */}
            <div
              ref={addRef}
              className="group relative flex items-center justify-center opacity-0 translate-y-6 transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="relative h-14 w-40 flex items-center justify-center">
                <img
                  src={thexaLogo}
                  alt="Threxa"
                  className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* Sierra Aerospace Logo */}
            <div
              ref={addRef}
              className="group relative flex items-center justify-center opacity-0 translate-y-6 transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: "50ms" }}
            >
              <div className="relative h-14 w-40 flex items-center justify-center">
                <img
                  src={sierraLogo}
                  alt="Sierra Aerospace"
                  className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* Smart Packaging Solutions Logo */}
            <div
              ref={addRef}
              className="group relative flex items-center justify-center opacity-0 translate-y-6 transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative h-14 w-40 flex items-center justify-center">
                <img
                  src={smartPackagingLogo}
                  alt="Smart Packaging Solutions"
                  className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* JKP Padmalaya Logo */}
            <div
              ref={addRef}
              className="group relative flex items-center justify-center opacity-0 translate-y-6 transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: "150ms" }}
            >
              <div className="relative h-14 w-40 flex items-center justify-center">
                <img
                  src={jkpLogo}
                  alt="JKP Padmalaya"
                  className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Helping businesses build websites, automation systems, and digital experiences.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* CASE STUDIES SECTION - COMPLETELY NEW */}
      {/* ============================================ */}
      <section id="work" className="relative bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our impact</p>
            <h2 className="mt-4 max-w-3xl font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              Client Success Through <span className="text-gradient-brand">Strategic Design</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Every project begins with a business challenge. We solve it with strategy, design, and engineering. Here's how we've helped our clients grow.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-32">
            {caseStudies.map((study, index) => {
              const reversed = index % 2 === 1;
              return (
                <article
                  key={study.id}
                  ref={addRef}
                  className="group relative opacity-0 translate-y-6 transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Case Study Card */}
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Content Side */}
                    <div className={`space-y-8 ${reversed ? "lg:order-2" : ""}`}>
                      {/* Header with Logo & Meta */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={study.logo}
                            alt={study.name}
                            className="h-12 w-auto grayscale"
                          />
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        
                        <div>
                          <h3 className="font-brand text-3xl font-extrabold text-foreground lg:text-4xl">
                            {study.name}
                          </h3>
                          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">{study.industry}</span>
                            <span>•</span>
                            <span>{study.year}</span>
                            <span>•</span>
                            <span>{study.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Challenge Section */}
                      <div className="space-y-3 rounded-2xl border border-border/30 bg-card/30 p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-foreground">The Challenge</h4>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {study.challenge.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution Section */}
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-foreground">Our Solution</h4>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {study.solution.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results Metrics Grid */}
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {study.results.map((result) => {
                          const Icon = result.icon;
                          return (
                            <div
                              key={result.label}
                              className="rounded-xl border border-border/40 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/70"
                            >
                              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">
                                <Icon className="h-4 w-4 text-primary" />
                              </div>
                              <p className="font-brand text-lg font-extrabold text-gradient-brand">
                                {result.metric}
                              </p>
                              <p className="mt-1 text-xs font-semibold text-foreground">
                                {result.label}
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground">
                                {result.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-3 rounded-2xl border border-border/30 bg-gradient-to-br from-primary/5 to-orange-500/5 p-6">
                        <h4 className="font-semibold text-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                          {study.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-sm">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.tech_stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border/50 bg-card px-3 py-1 text-xs font-medium text-foreground shadow-card"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          asChild
                          variant="brand"
                          size="lg"
                          className="rounded-full px-8"
                        >
                          <a href={study.href} target="_blank" rel="noreferrer">
                            {study.cta_text}
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`relative ${reversed ? "lg:order-1" : ""}`}>
                      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25" aria-hidden="true" />
                      
                      <a
                        href={study.href}
                        target="_blank"
                        rel="noreferrer"
                        className="relative block overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform duration-700 ease-out hover:-translate-y-2"
                      >
                        <div className="browser-chrome flex items-center gap-2 px-4 py-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                          <div className="ml-3 flex-1 truncate rounded-md bg-card/70 px-3 py-1 text-left text-xs font-medium text-muted-foreground">
                            {study.url}
                          </div>
                        </div>
                        <div className="relative overflow-hidden bg-gradient-to-br from-background to-card">
                          <img
                            src={study.image}
                            alt={`${study.name} case study`}
                            className="aspect-video w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </a>

                      {/* Badge */}
                      <div className="absolute -right-4 -top-4 hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-primary shadow-card sm:inline-flex">
                        <Sparkles className="h-4 w-4" />
                        Case Study
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < caseStudies.length - 1 && (
                    <div className="mt-32 border-t border-border/20" />
                  )}
                </article>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="mt-20 rounded-3xl border border-border/40 bg-gradient-to-r from-primary/5 via-transparent to-orange-500/5 p-12 text-center backdrop-blur-sm">
            <h3 className="font-brand text-2xl font-extrabold text-foreground">
              Ready to build something <span className="text-gradient-brand">remarkable</span>?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every brand has a unique story. Let's write yours with strategy, design, and code that drives real business results.
            </p>
            <Button asChild variant="brand" size="lg" className="mt-8 rounded-full px-8">
              <a href={CAL} target="_blank" rel="noreferrer">
                Start Your Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
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
              <span className="break-all font-medium text-xs">{EMAIL}</span>
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
