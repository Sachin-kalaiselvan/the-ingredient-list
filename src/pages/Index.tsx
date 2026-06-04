import { useEffect, useRef, useState } from "react";
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
  Zap,
  MessageSquare,
  BookOpen,
  ChevronDown,
  ArrowUp,
  MessageCircle,
  Send,
  Plus,
  Minus,
  Shield,
  Linkedin,
  MapPin,
  ExternalLink,
  Workflow,
  SearchCheck,
} from "lucide-react";

import tilLogo from "@/assets/til-logo.png";
import projectJkp from "@/assets/project-jkpadmalaya.png";
import projectSierra from "@/assets/project-sierra.png";
import projectThrexa from "@/assets/project-threxa.png";
import projectSmartPackaging from "@/assets/project-smartpackaging.png";
import thexaLogo from "@/assets/threxa-logo.png";
import sierraLogo from "@/assets/sierra-logo.jpeg";
import smartPackagingLogo from "@/assets/smart_packaging_solutions_logo.jpeg";
import jkpLogo from "@/assets/jkp-padmalaya-logo.png";

import { Button } from "@/components/ui/button";

// ─────────────────────────────────────────────
// CASE STUDIES
// ─────────────────────────────────────────────
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
      description:
        "A 13-year-old manufacturing company with zero online presence — losing RFQs to competitors, no way to showcase 500+ brand clients, no trust signals for new prospects.",
    },
    solution: {
      description:
        "Conversion-optimised B2B site built around the buyer journey — capabilities, certifications, client portfolio, and a streamlined RFQ flow that routes enquiries automatically.",
    },
    results: [
      { metric: "+40%", label: "RFQ conversion", description: "Within 3 months of launch", icon: TrendingUp },
      { metric: "2.5×", label: "Organic traffic", description: "Targeted SEO strategy", icon: Globe },
      { metric: "500+", label: "Clients featured", description: "Now searchable online", icon: Users },
      { metric: "24/7", label: "Lead capture", description: "Automated RFQ routing", icon: Zap },
    ],
    achievements: [
      "Positioned as Bengaluru's most trusted B2B packaging partner",
      "RFQ routing automation saves 3+ hours of manual follow-up weekly",
      "Built SEO foundation now ranking on 45+ high-intent keywords",
      "Average deal size increased after clarifying product range online",
    ],
    image: projectSmartPackaging,
    tech_stack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vercel", "Google Analytics 4"],
    cta_text: "Visit Live Site",
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
      description:
        "A premium farmstay in Kerala's spice country with a genuinely special experience — but no digital presence to match. Bookings came only through word of mouth. Competing against established luxury chains with no online credibility.",
    },
    solution: {
      description:
        "Editorial-grade website built around immersive storytelling — cinematic imagery, heritage narrative, and a two-step booking flow that removes all friction between discovery and reservation.",
    },
    results: [
      { metric: "+212%", label: "Booking conversions", description: "Year-over-year", icon: TrendingUp },
      { metric: "4.9/5", label: "Guest rating", description: "Consistently maintained", icon: Star },
      { metric: "4+ min", label: "Time on site", description: "Up from under 1 minute", icon: Clock },
      { metric: "45%", label: "Direct bookings", description: "Through site vs OTAs", icon: BarChart3 },
    ],
    achievements: [
      "Positioned as Kerala's most premium heritage farmstay experience",
      "Email nurture sequence increased repeat bookings by 28%",
      "Reduced OTA dependency — saving commission costs significantly",
      "Brand now referenced in travel editorial and review platforms",
    ],
    image: projectJkp,
    tech_stack: ["React", "Next.js", "Framer Motion", "Stripe", "Mailchimp", "Vercel"],
    cta_text: "Visit Live Site",
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
      description:
        "An Indian UAV systems manufacturer with serious technical capability — but no digital presence that reflected it. Procurement teams in global markets couldn't find or evaluate them. Every RFP response was manual and slow.",
    },
    solution: {
      description:
        "Export-ready enterprise site built to communicate technical credibility — compliance certifications, government project case studies, precise product documentation, and a qualification system that pre-filters enquiries.",
    },
    results: [
      { metric: "11", label: "Countries reached", description: "New international markets", icon: Globe },
      { metric: "3.4×", label: "Qualified RFQs", description: "From international prospects", icon: TrendingUp },
      { metric: "$2.3M", label: "Pipeline generated", description: "In the first 6 months", icon: BarChart3 },
      { metric: "−85%", label: "RFP response time", description: "3 weeks → 2 days", icon: Zap },
    ],
    achievements: [
      "Established credibility as a serious aerospace systems vendor globally",
      "Secured contracts in 4 new international markets",
      "Technical content strategy built domain authority in niche keywords",
      "Automated pre-qualification saves over 20 hours of sales time monthly",
    ],
    image: projectSierra,
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Salesforce", "SendGrid", "Vercel"],
    cta_text: "Visit Live Site",
    cta_link: "https://sierraaerospace.in/",
  },
  {
    id: 4,
    name: "Threxa",
    logo: thexaLogo,
    industry: "SaaS & Commerce Automation",
    year: "2025",
    duration: "16 weeks",
    url: "threxa.theingredientlist.co",
    href: "https://threxa.theingredientlist.co/",
    challenge: {
      description:
        "Indian D2C brands run on 6+ disconnected tools — Shopify, Tally, WhatsApp, Razorpay, Shiprocket — that don't talk to each other. The result: data silos, manual reconciliation, 15+ hours of administrative overhead every week.",
    },
    solution: {
      description:
        "Threxa is our in-house automation platform — the integration layer for Indian commerce. Native connections to every tool in the D2C stack, a no-code workflow builder, and a unified dashboard that replaces the spreadsheet juggling.",
    },
    results: [
      { metric: "15+ hrs", label: "Saved per week", description: "Per customer on admin", icon: Clock },
      { metric: "2×", label: "Faster processing", description: "Automated vs manual", icon: Zap },
      { metric: "$1.4M", label: "Pipeline value", description: "D2C brand interest", icon: BarChart3 },
      { metric: "35%", label: "Cost reduction", description: "In operational overhead", icon: TrendingUp },
    ],
    achievements: [
      "Only integrated automation platform built specifically for Indian D2C",
      "Enables brands to scale operations without proportional headcount growth",
      "WhatsApp automation reduces customer service response time by 60%",
      "Positioned as essential infrastructure — not optional tooling",
    ],
    image: projectThrexa,
    tech_stack: ["Node.js", "React", "PostgreSQL", "Redis", "n8n", "AWS", "Twilio"],
    cta_text: "Explore Threxa",
    cta_link: "https://threxa.theingredientlist.co/",
  },
];

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
const services = [
  { icon: Palette, title: "Brand & Identity", copy: "Logos, type systems, and visual languages that hold their own at every scale." },
  { icon: Layers, title: "Product Design", copy: "Web and product surfaces that feel inevitable — quiet, considered, alive." },
  { icon: Code2, title: "Engineering", copy: "Fast, accessible, conversion-tuned builds. Shipped without drama." },
];

// ─────────────────────────────────────────────
// PHILOSOPHY PRINCIPLES
// ─────────────────────────────────────────────
const principles = [
  {
    icon: Target,
    title: "Fewer projects. Better work.",
    body: "I take on a small number of projects each quarter. Not because of capacity — because quality demands attention. When I'm working on your project, it has my full focus.",
  },
  {
    icon: MessageSquare,
    title: "Honest before comfortable.",
    body: "If your strategy has a flaw, I'll say so. If a feature isn't worth building, we won't build it. You're paying for judgment, not just execution.",
  },
  {
    icon: Lightbulb,
    title: "Strategy first. Always.",
    body: "Most studios jump to design. I start with the business problem. What does success look like for you? That question drives every decision.",
  },
  {
    icon: Zap,
    title: "Speed without shortcuts.",
    body: "I move fast because I think clearly — not because I cut corners. Clear thinking at the start means no rebuilds halfway through.",
  },
];

// ─────────────────────────────────────────────
// APPROACH PILLARS (How I Work)
// ─────────────────────────────────────────────
const approachPillars = [
  {
    number: "01",
    title: "I start with your business, not your brief.",
    body: "Before I open a design tool, I need to understand your customers, your competitors, and what actually moves the needle for you. A beautiful site that doesn't convert is just expensive decoration.",
  },
  {
    number: "02",
    title: "I challenge the assumptions in the room.",
    body: "The best work happens when both sides push back. I'm not here to execute whatever you hand me — I'm here to help you figure out what's actually worth building and what isn't.",
  },
  {
    number: "03",
    title: "I communicate like a person, not an agency.",
    body: "No status decks. No ticket systems. You'll hear from me directly, with clear thinking and honest timelines. If something changes, I tell you before it's a problem.",
  },
  {
    number: "04",
    title: "I measure what ships, not what's presented.",
    body: "Pitches are easy. What matters is what the site does after it's live. I build with conversion and performance in mind from day one — not as an afterthought.",
  },
];

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Smart Packaging Solutions",
    role: "Director",
    testimonial:
      "Sachin transformed our online presence completely. The website not only looks premium but converts — within 3 months we saw 40% more qualified RFQs. The entire process was transparent and communication was exceptional.",
    project: "Website Redesign",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "JKP Padmalaya",
    role: "Co-Founder",
    testimonial:
      "Working with The Ingredient List was a turning point for our farmstay business. The website captures exactly what our guests feel when they arrive. Bookings increased by 212% in the first quarter.",
    project: "Luxury Hospitality Website",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Patel",
    company: "Sierra Aerospace",
    role: "VP Marketing",
    testimonial:
      "They built us an enterprise-grade site that communicates our technical expertise to global markets. We're now active in 11 countries. The strategic depth they brought to positioning was unlike anything we'd experienced before.",
    project: "Enterprise Marketing Site",
    rating: 5,
  },
  {
    id: 4,
    name: "Ananya Desai",
    company: "D2C Commerce Brand",
    role: "CEO",
    testimonial:
      "The automation workflows Sachin built save us 15+ hours a week. Shopify, Tally, WhatsApp — all connected and working. What I valued most was that he pushed back on what we didn't need and focused on what would actually help.",
    project: "Workflow Automation",
    rating: 5,
  },
];

// ─────────────────────────────────────────────
// TRUST MARKERS
// ─────────────────────────────────────────────
const trustMarkers = [
  { label: "Client Satisfaction", value: "4.9/5", description: "Average rating across all projects" },
  { label: "Average Timeline", value: "2–4 wks", description: "From kickoff to live site" },
  { label: "On-Time Delivery", value: "100%", description: "Every project shipped on schedule" },
  { label: "Custom Built", value: "0%", description: "Template usage — everything bespoke" },
];

// ─────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────
const pricing = [
  {
    name: "Starter",
    price: "₹16,000",
    period: "One-time",
    duration: "1–2 weeks",
    description: "For validating an idea fast.",
    features: [
      { label: "Single landing page", details: "Hero, features, CTA" },
      { label: "Mobile responsive", details: "Optimised for all devices" },
      { label: "Basic SEO setup", details: "Meta tags, sitemaps, indexing" },
      { label: "Contact form", details: "Email notifications included" },
      { label: "Performance optimised", details: "Fast load times guaranteed" },
    ],
    notIncluded: ["Custom integrations", "Automation workflows", "Analytics dashboard"],
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
      { label: "Conversion strategy", details: "CTA placement, lead capture, flow design" },
      { label: "Advanced SEO", details: "Keyword strategy, schema markup, content" },
      { label: "Analytics setup", details: "Google Analytics 4 + conversion tracking" },
      { label: "API integration", details: "Connect to your existing tools" },
      { label: "Post-launch support", details: "2 weeks of refinements after go-live" },
    ],
    notIncluded: ["Custom backend", "Automation workflows", "Advanced integrations"],
    bestFor: "SaaS, E-Commerce, Service Businesses",
  },
  {
    name: "Professional",
    price: "₹60,000+",
    period: "Project-based",
    duration: "3–4 weeks",
    description: "For complex builds and custom systems.",
    features: [
      { label: "Custom feature development", details: "Dashboards, user accounts, CMS" },
      { label: "Database + backend", details: "Scalable infrastructure, API endpoints" },
      { label: "Advanced automation", details: "Shopify + Tally + WhatsApp workflows" },
      { label: "Multiple integrations", details: "CRM, payments, shipping, accounting" },
      { label: "Performance audit", details: "Load testing, optimisation, security" },
      { label: "Extended support", details: "1 month post-launch" },
    ],
    notIncluded: [],
    bestFor: "Enterprise, D2C Brands, Complex Systems",
  },
];

const integrations = ["Shopify", "Tally", "Razorpay", "Shiprocket", "WhatsApp", "Slack", "Stripe", "Supabase"];
const stats = [
  { value: "30+", label: "Brands shaped" },
  { value: "8 yrs", label: "Crafting digital" },
  { value: "100%", label: "In-house build" },
];

const EMAIL = "theingredientlist.co@gmail.com";
const WHATSAPP = "+91 74839 92418";
const CAL = "https://cal.com/threxa/design-audit";
const LINKEDIN = "https://linkedin.com/in/sachinjk11";

// ─────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────
const faqs = [
  {
    q: "How much does a project cost?",
    a: "Pricing depends on scope and complexity. Starter projects begin at ₹16,000, growth websites at ₹35,000, and professional builds at ₹60,000+. Every engagement starts with a free strategy call where I'll give you a clear estimate before anything is agreed. No vague quotes, no hidden costs.",
  },
  {
    q: "How long does a website take?",
    a: "Most websites are delivered in 1–4 weeks. A landing page takes 1–2 weeks. A multi-page growth site takes 2–3 weeks. Complex builds with custom backend or automation workflows take 3–6 weeks. You'll get a precise timeline in writing before we begin.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Every project includes post-launch support for 30 days. Beyond that, ongoing maintenance, performance monitoring, and content updates are available as a monthly retainer. Most clients stay on after launch — the relationship doesn't end at go-live.",
  },
  {
    q: "Can you redesign existing websites?",
    a: "Absolutely. Redesigns are often where the most value is unlocked — an existing site has real user data that informs what to change. I'll audit your current site, identify what's hurting conversions, and build something that performs better from day one.",
  },
  {
    q: "Do you build automation systems?",
    a: "Yes — through Threxa, my automation platform built specifically for Indian businesses. I connect Shopify, Tally, WhatsApp, Razorpay, Shiprocket and more. Automation workflows, RFQ routing, inventory syncing, customer communication — all built without code on your end.",
  },
  {
    q: "Do you provide hosting?",
    a: "Sites are deployed to Vercel (fast, reliable, globally distributed) by default. I handle setup and configuration. You own the hosting account — no lock-in. Domains are managed separately through your preferred registrar. I'll walk you through everything.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes. While I'm based in Bengaluru and specialize in Indian market businesses, I work with clients internationally. Communication happens over email, WhatsApp, or video call. Payment is accepted via international bank transfer, Wise, or Stripe.",
  },
  {
    q: "What happens after launch?",
    a: "Launch is where most agencies disappear. I don't. Post-launch includes: 30 days of support, performance monitoring, SEO indexing confirmation, and a 2-week check-in call to review early metrics. Clients on retainer get ongoing improvements tracked in a shared roadmap.",
  },
];

// ─────────────────────────────────────────────
// AUDIT BENEFITS
// ─────────────────────────────────────────────
const auditBenefits = [
  { icon: SearchCheck, title: "Find conversion bottlenecks", body: "Pinpoint exactly where visitors are dropping off and what's preventing them from taking action." },
  { icon: Workflow, title: "Discover automation gaps", body: "Identify 3–5 workflows you could automate to save hours of manual work every week." },
  { icon: Lightbulb, title: "UX improvements, prioritised", body: "Get a ranked list of experience improvements with estimated impact for each." },
  { icon: BarChart3, title: "Actionable recommendations", body: "A specific, prioritised report — not a generic checklist. Every item is tied to a business outcome." },
];

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
const Index = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [auditForm, setAuditForm] = useState({ name: "", email: "", website: "", businessType: "" });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setShowChat(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      { threshold: 0.1 },
    );
    revealRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* ── HERO ──────────────────────────────── */}
      <section className="relative bg-gradient-hero">
        <div className="absolute inset-0 til-grid opacity-70" aria-hidden="true" />
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-15 blur-[140px]" aria-hidden="true" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10 lg:py-9">
          <a href="#top" aria-label="The Ingredient List — home" className="group -my-2 flex items-center">
            <img src={tilLogo} alt="The Ingredient List" className="h-16 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.02] sm:h-20 md:h-24 lg:h-28" />
          </a>
          <nav className="hidden items-center gap-10 text-sm font-medium text-muted-foreground md:flex">
            {[["#work","Work"],["#services","Services"],["#about","About"],["#pricing","Pricing"],["#contact","Contact"]].map(([href,label]) => (
              <a key={href} href={href} className="transition-colors hover:text-foreground">{label}</a>
            ))}
          </nav>
          <Button asChild variant="glass" size="sm" className="hidden rounded-full md:inline-flex">
            <a href={`mailto:${EMAIL}`}>Start a project</a>
          </Button>
        </header>

        <div id="top" className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-16 text-center lg:px-10 lg:pt-24">
          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground shadow-card backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Websites · AI Systems · Automation
          </div>
          <h1 className="mx-auto max-w-5xl text-balance font-brand text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Websites and AI systems{" "}
            <span className="text-gradient-brand">built to help businesses grow</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            We help businesses launch high-performing websites, automate repetitive work, and build digital experiences that drive measurable growth.
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

      {/* ── SOCIAL PROOF ─────────────────────── */}
      <section className="relative border-t border-border bg-background px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {[
              { src: thexaLogo, alt: "Threxa", delay: "0ms" },
              { src: sierraLogo, alt: "Sierra Aerospace", delay: "50ms" },
              { src: smartPackagingLogo, alt: "Smart Packaging Solutions", delay: "100ms" },
              { src: jkpLogo, alt: "JKP Padmalaya", delay: "150ms" },
            ].map(({ src, alt, delay }) => (
              <div key={alt} ref={addRef} className="group flex h-14 w-40 items-center justify-center opacity-0 translate-y-6 transition-all duration-500 hover:scale-110" style={{ transitionDelay: delay }}>
                <img src={src} alt={alt} className="h-full w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Helping businesses build websites, automation systems, and digital experiences.
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES (EXPANDABLE) ─────────────────────── */}
      <section id="work" className="relative bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="mt-4 max-w-3xl font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              Work that moved the <span className="text-gradient-brand">needle</span>.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Every engagement starts with a business challenge. Here's how they ended.
            </p>
          </div>

          <div className="space-y-6">
            {caseStudies.map((study, index) => {
              const isExpanded = expandedCaseStudy === study.id;
              return (
                <article 
                  key={study.id} 
                  ref={addRef} 
                  className="group relative opacity-0 translate-y-6 transition-all duration-700 rounded-2xl border border-border/40 bg-white/50 overflow-hidden cursor-pointer hover:border-primary/40 hover:bg-white/60 hover:shadow-lg"
                  style={{ transitionDelay: `${index * 80}ms` }}
                  onClick={() => setExpandedCaseStudy(isExpanded ? null : study.id)}
                >
                  {/* PREVIEW - Always Visible */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        {/* Logo + Meta */}
                        <div className="flex items-center gap-4 mb-4">
                          <img src={study.logo} alt={study.name} className="h-10 w-auto transition-all duration-300 grayscale group-hover:grayscale-0" />
                          <div className="h-px flex-1 bg-border" />
                        </div>

                        {/* Title */}
                        <h3 className="font-brand text-2xl lg:text-3xl font-extrabold text-foreground">{study.name}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">{study.industry}</span>
                          <span>·</span>
                          <span>{study.year}</span>
                          <span>·</span>
                          <span>{study.duration}</span>
                        </div>

                        {/* Excerpt */}
                        <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{study.solution.description}</p>
                      </div>

                      {/* Expand Indicator */}
                      <div className="flex-shrink-0 flex items-center gap-2 text-xs text-muted-foreground font-medium">
                        <span>{isExpanded ? "Hide details" : "View details"}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </div>

                  {/* EXPANDED DETAILS */}
                  {isExpanded && (
                    <div className="border-t border-border/20 p-6 lg:p-8 bg-card/50 space-y-8 animate-in fade-in duration-300">
                      <div className="grid gap-8 lg:grid-cols-2">
                        {/* Challenge */}
                        <div className="rounded-2xl border border-border/30 bg-card/40 p-5 backdrop-blur-sm">
                          <div className="flex gap-3">
                            <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">The Challenge</p>
                              <p className="text-sm leading-6 text-muted-foreground">{study.challenge.description}</p>
                            </div>
                          </div>
                        </div>

                        {/* Solution */}
                        <div className="rounded-2xl border border-border/30 bg-card/40 p-5 backdrop-blur-sm">
                          <div className="flex gap-3">
                            <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">What We Built</p>
                              <p className="text-sm leading-6 text-muted-foreground">{study.solution.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                        {study.results.map((r) => {
                          const Icon = r.icon;
                          return (
                            <div key={r.label} className="rounded-xl border border-border/40 bg-card/50 p-3 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card">
                              <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-1.5">
                                <Icon className="h-3.5 w-3.5 text-primary" />
                              </div>
                              <p className="font-brand text-base font-extrabold text-gradient-brand">{r.metric}</p>
                              <p className="mt-0.5 text-xs font-semibold text-foreground">{r.label}</p>
                              <p className="mt-0.5 text-xs text-muted-foreground">{r.description}</p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Achievements */}
                      <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-primary/5 to-orange-500/5 p-5">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Key outcomes</p>
                        <ul className="space-y-2">
                          {study.achievements.map((a, i) => (
                            <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack + CTA */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1.5">
                          {study.tech_stack.map((t) => (
                            <span key={t} className="rounded-full border border-border/50 bg-card px-3 py-1 text-xs font-medium text-foreground shadow-card">{t}</span>
                          ))}
                        </div>
                        <Button asChild variant="brand" size="lg" className="rounded-full px-8" onClick={(e) => e.stopPropagation()}>
                          <a href={study.href} target="_blank" rel="noreferrer">
                            {study.cta_text}
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-20 rounded-3xl border border-border/40 bg-gradient-to-r from-primary/5 via-transparent to-orange-500/5 p-12 text-center">
            <h3 className="font-brand text-2xl font-extrabold">Ready to build something <span className="text-gradient-brand">that matters</span>?</h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Every brand has a story worth telling. Let's tell yours with work that actually moves the needle.</p>
            <Button asChild variant="brand" size="lg" className="mt-8 rounded-full px-8">
              <a href={CAL} target="_blank" rel="noreferrer">Start a Conversation <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── MY PHILOSOPHY ────────────────────── */}
      <section className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">

            {/* Left — the statement */}
            <div ref={addRef} className="opacity-0 translate-y-6 transition-all duration-700">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">My Philosophy</p>
              <h2 className="mt-4 font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
                I believe in doing <span className="text-gradient-brand">fewer things</span>, better.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I take on a small number of projects each quarter — not because of capacity, but because quality demands attention. Every project I accept gets my direct involvement, my sharpest thinking, and my honest judgment.
              </p>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                I don't believe in templates, safe solutions, or work that looks good in a presentation but underdelivers in the real world. I care about what happens after launch — the leads, the conversions, the business outcomes that actually matter to you.
              </p>
              <div className="mt-8 h-px w-16 bg-gradient-to-r from-primary to-orange-500" />
              <p className="mt-6 font-brand text-xl font-extrabold text-foreground">
                — Sachin
              </p>
            </div>

            {/* Right — four principles */}
            <div className="grid gap-6 sm:grid-cols-2">
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  ref={addRef}
                  className="group rounded-2xl border border-border/20 p-6 opacity-0 translate-y-6 transition-all duration-700 hover:border-primary/40 hover:bg-white/30 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-2.5">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-brand text-base font-extrabold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────── */}
      <section id="services" className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
              <h2 className="mt-4 font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
                One studio. The full <span className="text-gradient-brand">recipe</span>.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                From positioning to pixels to production — no handoffs, no compromise. One team that owns the outcome.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <article key={s.title} ref={addRef} className="group translate-y-6 rounded-2xl border border-border/20 p-6 opacity-0 transition-all duration-700 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/30" style={{ transitionDelay: `${i * 100}ms` }}>
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
                <h3 className="mt-3 font-brand text-2xl font-extrabold lg:text-3xl">Built for the stack you already run.</h3>
                <p className="mt-3 text-sm text-muted-foreground">Through Threxa, we deploy native integrations across the tools Indian commerce actually runs on.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {integrations.map((tool) => (
                  <span key={tool} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW I APPROACH WORK ──────────────── */}
      <section className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The approach</p>
            <h2 className="mt-4 max-w-2xl font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              How I actually <span className="text-gradient-brand">work with clients</span>.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Not what sounds good in a pitch. What you'll actually experience when we work together.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {approachPillars.map((pillar, i) => (
              <div
                key={pillar.number}
                ref={addRef}
                className="group relative overflow-hidden rounded-2xl border border-border/20 p-8 opacity-0 translate-y-6 transition-all duration-700 hover:border-primary/30 hover:bg-white/30 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="absolute right-6 top-6 font-brand text-5xl font-extrabold text-primary/8 select-none">
                  {pillar.number}
                </span>
                <h3 className="font-brand text-xl font-extrabold text-foreground leading-snug">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────── */}
      <section id="testimonials" className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client feedback</p>
            <h2 className="mt-4 font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              What clients say <span className="text-gradient-brand">after we've shipped</span>.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-20">
            {testimonials.map((t, i) => (
              <article key={t.id} ref={addRef} className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-glow hover:-translate-y-1 opacity-0 translate-y-6" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="mb-5 flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="mb-8 flex-1 text-sm leading-7 text-muted-foreground italic">"{t.testimonial}"</p>
                <div className="mb-6 h-px bg-gradient-to-r from-border/0 via-border/40 to-border/0" />
                <div className="space-y-1">
                  <h3 className="font-brand text-sm font-extrabold text-foreground">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.role} · <span className="font-semibold text-primary/80">{t.company}</span></p>
                  <p className="pt-1 text-xs text-muted-foreground/60">Project: {t.project}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Trust markers */}
          <div className="rounded-2xl border border-border/40 bg-card/50 p-8 shadow-card backdrop-blur-sm lg:p-12">
            <h3 className="mb-8 text-center font-brand text-lg font-extrabold text-foreground">By the numbers</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {trustMarkers.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -top-1 left-0 h-px w-8 bg-gradient-to-r from-primary to-orange-500" />
                  <div className="pt-4">
                    <div className="mb-2 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-2xl font-extrabold text-transparent">{m.value}</div>
                    <h4 className="font-brand text-sm font-extrabold text-foreground mb-1">{m.label}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE STORY ─────────────────────────── */}
      <section id="about" className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

            {/* Text */}
            <div ref={addRef} className="opacity-0 translate-y-6 transition-all duration-700 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The story</p>
                <h2 className="mt-4 font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
                  Why I started <span className="text-gradient-brand">The Ingredient List</span>.
                </h2>
              </div>

              <p className="text-lg leading-8 text-muted-foreground">
                I started this because of a pattern I kept seeing: genuinely good businesses — skilled, experienced, building real things — were invisible online. Not because their work was bad. Because their digital presence didn't reflect the quality of what they actually did.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                They were losing clients to competitors with better-looking websites and louder marketing. The gap wasn't capability — it was presentation. That felt wrong, and fixable.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                So I built The Ingredient List to do two things well: build digital experiences that actually convert, and automate the operational work that takes up time without adding value. Strategy-first. Outcome-obsessed. Built in-house from start to finish.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                Eight years and 30+ brands later, the same thing still drives me: getting the work right, not just getting it done.
              </p>

              <div className="pt-4">
                <Button asChild variant="brand" size="lg" className="rounded-full px-8 whitespace-nowrap">
                  <a href={CAL} target="_blank" rel="noreferrer">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Credentials card */}
            <div ref={addRef} className="opacity-0 translate-y-6 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
              <div className="rounded-3xl border border-border/40 bg-card/60 p-8 backdrop-blur-sm shadow-soft lg:p-10 space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">What you can expect</p>
                  <ul className="space-y-4">
                    {[
                      { icon: MessageSquare, title: "Direct Communication", body: "You work with me, not a team. Every conversation is with the person building your project—no middlemen, no delays." },
                      { icon: Target, title: "Strategy First", body: "We begin by understanding your business, your market, and what success actually looks like. Design follows strategy." },
                      { icon: Zap, title: "Built Fast, Built Right", body: "Clean code, shipped on time, zero technical debt. What you launch is what you keep—no rebuilds, no surprises." },
                      { icon: BookOpen, title: "Honest Feedback", body: "If something won't work or isn't worth building, you'll hear it from me directly. You're paying for judgment, not just execution." },
                    ].map(({ icon: Icon, title, body }) => (
                      <li key={title} className="flex gap-4">
                        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{title}</p>
                          <p className="mt-0.5 text-sm text-muted-foreground">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/30 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground font-brand font-extrabold text-lg shadow-glow">✓</div>
                    <div>
                      <p className="font-brand font-extrabold text-foreground">The Ingredient List</p>
                      <p className="text-xs text-muted-foreground">Digital design, engineering & strategy · Bengaluru</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────── */}
      <section id="pricing" className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Investment</p>
            <h2 className="mt-4 font-brand text-4xl font-extrabold leading-tight lg:text-5xl mb-4">
              Pricing that <span className="text-gradient-brand">makes sense</span>.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Clear rates, no surprises, no hidden costs. Choose the package that fits your project.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            {pricing.map((tier, i) => (
              <article key={tier.name} ref={addRef} className={`relative overflow-hidden rounded-2xl border p-8 opacity-0 translate-y-6 transition-all duration-300 ${tier.featured ? "border-primary/40 bg-card shadow-glow ring-1 ring-primary/20 lg:-translate-y-4" : "border-border/50 bg-card/50 shadow-card hover:border-primary/20"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                {tier.featured && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-b-xl bg-gradient-to-r from-primary to-orange-500 px-4 py-1 text-xs font-extrabold text-white uppercase tracking-wider">Most Popular</span>
                  </div>
                )}
                <div className={tier.featured ? "pt-6" : ""}>
                  <h3 className="font-brand text-2xl font-extrabold text-foreground mb-2">{tier.name}</h3>
                  <p className="mb-6 h-10 text-sm text-muted-foreground">{tier.description}</p>
                  <div className="mb-6">
                    <div className="mb-1 flex items-baseline gap-1">
                      <span className="font-brand text-4xl font-extrabold text-gradient-brand">{tier.price}</span>
                      <span className="text-xs text-muted-foreground">{tier.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Delivery: {tier.duration}</p>
                  </div>
                  <div className="mb-6 rounded-lg border border-border/30 bg-muted/30 p-3">
                    <p className="mb-1 text-xs font-semibold text-foreground">Best for:</p>
                    <p className="text-xs text-muted-foreground">{tier.bestFor}</p>
                  </div>
                </div>
                <div className="mb-6 space-y-3 border-t border-border/30 pt-6">
                  {tier.features.map((f, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{f.label}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{f.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {tier.notIncluded.length > 0 && (
                  <div className="mb-6 space-y-2 border-b border-border/30 pb-6">
                    {tier.notIncluded.map((item, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground/50 line-through">{item}</p>
                    ))}
                  </div>
                )}
                <Button asChild variant={tier.featured ? "brand" : "outline"} className="w-full rounded-lg">
                  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`${tier.name} Package Enquiry`)}`}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section id="faq" className="relative border-t border-border bg-background px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Common questions</p>
            <h2 className="mt-4 font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
              Frequently Asked <span className="text-gradient-brand">Questions</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Everything you need to know before starting. If something isn't covered here, ask directly.
            </p>
          </div>

          <div className="divide-y divide-border/50">
            {faqs.map((faq, i) => {
              const isOpen = expandedFaq === i;
              return (
                <div key={i} className="group">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
                  >
                    <span className="font-brand text-base font-extrabold text-foreground group-hover:text-primary transition-colors lg:text-lg">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary/40 group-hover:bg-primary/5">
                      {isOpen
                        ? <Minus className="h-4 w-4 text-primary" />
                        : <Plus className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                      }
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
                    <p className="text-base leading-8 text-muted-foreground pr-14">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl border border-border/30 bg-gradient-warm p-8 text-center">
            <p className="font-brand text-lg font-extrabold text-foreground">Still have questions?</p>
            <p className="mt-2 text-sm text-muted-foreground">A 15-minute call is the fastest way to get answers specific to your project.</p>
            <Button asChild variant="brand" size="sm" className="mt-6 rounded-full px-6">
              <a href={CAL} target="_blank" rel="noreferrer">Book a free call <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── LEAD GEN AUDIT ───────────────────── */}
      <section id="audit" className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-start">

            {/* Left — offer */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary mb-6">
                <Sparkles className="h-3.5 w-3.5" /> Free · No obligation
              </div>
              <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
                Get a Free Website <span className="text-gradient-brand">&amp; Automation Audit</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll personally review your website and digital workflows and send back a specific, prioritised breakdown of what to fix — free, with no strings attached.
              </p>

              <div className="mt-10 space-y-5">
                {auditBenefits.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4 text-left">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-border/20 bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-sm">{title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Your information is kept confidential. No spam, ever.</span>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-3xl border border-border/40 bg-white p-8 shadow-soft lg:p-10">
              {auditSubmitted ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
                    <Check className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-brand text-2xl font-extrabold text-foreground">Audit request received.</h3>
                  <p className="text-muted-foreground max-w-xs">I'll personally review your site and send the audit within 48 hours.</p>
                  <Button asChild variant="ghost" size="sm" className="rounded-full mt-2">
                    <a href={CAL} target="_blank" rel="noreferrer">Want to talk sooner? Book a call <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-brand text-xl font-extrabold text-foreground mb-1">Request your free audit</h3>
                  <p className="text-sm text-muted-foreground mb-8">Takes 60 seconds. Delivered within 48 hours.</p>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-foreground mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="Rajesh Kumar"
                        value={auditForm.name}
                        onChange={e => setAuditForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={auditForm.email}
                        onChange={e => setAuditForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-foreground mb-2">Website URL</label>
                      <input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={auditForm.website}
                        onChange={e => setAuditForm(f => ({ ...f, website: e.target.value }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-foreground mb-2">Business Type</label>
                      <select
                        value={auditForm.businessType}
                        onChange={e => setAuditForm(f => ({ ...f, businessType: e.target.value }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      >
                        <option value="" disabled>Select your business type</option>
                        <option value="ecommerce">E-Commerce / D2C Brand</option>
                        <option value="saas">SaaS / Software</option>
                        <option value="service">Service Business</option>
                        <option value="manufacturing">Manufacturing / B2B</option>
                        <option value="hospitality">Hospitality / Tourism</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <Button
                      variant="brand"
                      size="lg"
                      className="w-full rounded-xl mt-2"
                      disabled={!auditForm.name || !auditForm.email}
                      onClick={() => {
                        if (auditForm.name && auditForm.email) {
                          window.open(
                            `mailto:${EMAIL}?subject=Free Audit Request from ${encodeURIComponent(auditForm.name)}&body=Name: ${encodeURIComponent(auditForm.name)}%0AEmail: ${encodeURIComponent(auditForm.email)}%0AWebsite: ${encodeURIComponent(auditForm.website)}%0ABusiness Type: ${encodeURIComponent(auditForm.businessType)}`,
                            '_blank'
                          );
                          setAuditSubmitted(true);
                        }
                      }}
                    >
                      Request My Free Audit <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────── */}
      <section id="contact" className="relative bg-background px-6 py-32 lg:px-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-6xl">
            Have something <span className="text-gradient-brand">worth building</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            We take on a small number of projects each quarter. A 15-minute call costs nothing and usually answers everything.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <a href={`mailto:${EMAIL}`} className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Email</span>
              <span className="break-all text-xs font-medium">{EMAIL}</span>
            </a>
            <a href="https://wa.me/917483992418" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">WhatsApp</span>
              <span className="font-medium">{WHATSAPP}</span>
            </a>
            <a href={CAL} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Calendar</span>
              <span className="font-medium">cal.com/threxa</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────── */}
      <footer className="border-t border-border bg-foreground text-background px-6 pt-20 pb-10 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Footer CTA */}
          <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Let's work together</p>
              <h2 className="font-brand text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                Ready to build something<br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">exceptional?</span>
              </h2>
            </div>
            <Button asChild size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 hover:text-foreground px-8 flex-shrink-0">
              <a href={CAL} target="_blank" rel="noreferrer">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Nav columns */}
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 mb-20">

            {/* Brand */}
            <div>
              <img src={tilLogo} alt="The Ingredient List" className="h-14 w-auto object-contain mb-5" style={{ filter: "brightness(0) invert(1)" }} />
              <p className="text-sm text-white/60 leading-7 mb-6">Digital design, engineering &amp; strategy for Indian businesses. Built in Bengaluru.</p>
              <div className="flex items-center gap-3">
                <a href={`mailto:${EMAIL}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/40 hover:text-white">
                  <Mail className="h-4 w-4" />
                </a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/40 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://wa.me/917483992418" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/40 hover:text-white">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Services & Work */}
            <div className="text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Services</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#services" className="hover:text-white transition-colors">Brand &amp; Identity</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Product Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Engineering &amp; Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Workflow Automation</a></li>
                <li><a href="https://threxa.theingredientlist.co/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Threxa Platform <ExternalLink className="h-3 w-3" /></a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Company</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#audit" className="hover:text-white transition-colors">Free Audit</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">{EMAIL}</a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="https://wa.me/917483992418" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{WHATSAPP}</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Bengaluru, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href={CAL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Book a strategy call</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-white/40 sm:flex-row">
            <p>© {new Date().getFullYear()} The Ingredient List. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/terms" className="hover:text-white/70 transition-colors">Terms &amp; Conditions</a>
              <a href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            </div>
            <p>Built for Indian commerce</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING BUTTONS ──────────────────── */}
      
      {/* Floating Chat Button */}
      {showChat && (
        <button
          onClick={() => window.open(`https://wa.me/917483992418?text=Hi, I'd like to discuss a project with The Ingredient List.`, '_blank')}
          className="fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 animate-in fade-in duration-500"
          title="Chat with us on WhatsApp"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground active:scale-95 animate-in fade-in duration-500"
          title="Scroll to top"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </main>
  );
};

export default Index;
