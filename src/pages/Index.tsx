import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Layers, Palette, Code2, Play,
  TrendingUp, Users, Globe, Star, Check, Mail, Phone, Calendar,
  Target, Lightbulb, BarChart3, Clock, Zap, MessageSquare, BookOpen,
  ChevronDown, ArrowUp, MessageCircle, Send, Plus, Minus, Shield,
  Linkedin, MapPin, ExternalLink, Workflow, SearchCheck, Menu, X,
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

// ─── Animation keyframes injected globally ───
const AnimationStyles = () => (
  <style>{`
    @keyframes cardFall {
      0%   { opacity:0; transform: perspective(900px) rotateX(-22deg) translateY(-70px) scale(0.93); }
      65%  { transform: perspective(900px) rotateX(2deg) translateY(6px) scale(1.008); }
      100% { opacity:1; transform: perspective(900px) rotateX(0deg) translateY(0) scale(1); }
    }
    @keyframes bloomReveal {
      0%   { opacity:0; transform: scale(0.84); filter: blur(6px); }
      100% { opacity:1; transform: scale(1);    filter: blur(0px); }
    }
    @keyframes slideUp {
      from { opacity:0; transform: translateY(44px); }
      to   { opacity:1; transform: translateY(0); }
    }
    @keyframes lineReveal {
      from { opacity:0; transform: translateY(100%); }
      to   { opacity:1; transform: translateY(0); }
    }
    .card-fall          { opacity:0; will-change: transform, opacity; }
    .card-fall.in       { animation: cardFall 0.9s cubic-bezier(0.34,1.32,0.64,1) forwards; }
    .card-fall.in.d1    { animation-delay: 0ms; }
    .card-fall.in.d2    { animation-delay: 100ms; }
    .card-fall.in.d3    { animation-delay: 200ms; }
    .card-fall.in.d4    { animation-delay: 300ms; }
    .bloom-in           { opacity:0; will-change: transform, opacity; }
    .bloom-in.in        { animation: bloomReveal 1.1s cubic-bezier(0.16,1,0.3,1) forwards; }
    .slide-up           { opacity:0; }
    .slide-up.in        { animation: slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
    .slide-up.in.d1     { animation-delay: 80ms; }
    .slide-up.in.d2     { animation-delay: 160ms; }
    .slide-up.in.d3     { animation-delay: 240ms; }
    .line-word          { display:inline-block; overflow:hidden; vertical-align:top; }
    .line-word i        { display:inline-block; font-style:inherit; transform:translateY(110%); transition: transform 1s cubic-bezier(0.16,1,0.3,1); }
    .hero-lines.in .line-word:nth-child(1) i { transform:translateY(0); transition-delay:0ms; }
    .hero-lines.in .line-word:nth-child(2) i { transform:translateY(0); transition-delay:60ms; }
    .hero-lines.in .line-word:nth-child(3) i { transform:translateY(0); transition-delay:120ms; }
  `}</style>
);

// ─── CASE STUDIES ───
const caseStudies = [
  {
    id: 1,
    name: "Smart Packaging Solutions",
    logo: smartPackagingLogo,
    industry: "Manufacturing & B2B Commerce",
    year: "2025", duration: "8 weeks",
    href: "https://www.smartpackagingsolutions.in/",
    challenge: "A 13-year-old manufacturing company with zero online presence — losing RFQs to competitors, no way to showcase 500+ brand clients, no trust signals for new prospects.",
    solution: "Conversion-optimised B2B site built around the buyer journey — capabilities, certifications, client portfolio, and a streamlined RFQ flow that routes enquiries automatically.",
    results: [
      { metric: "+40%", label: "RFQ conversion",    desc: "Within 3 months of launch", icon: TrendingUp },
      { metric: "2.5×", label: "Organic traffic",    desc: "Targeted SEO strategy",   icon: Globe },
      { metric: "500+", label: "Clients featured",   desc: "Now searchable online",    icon: Users },
      { metric: "24/7", label: "Lead capture",        desc: "Automated RFQ routing",   icon: Zap },
    ],
    achievements: [
      "Positioned as Bengaluru's most trusted B2B packaging partner",
      "RFQ routing automation saves 3+ hours of manual follow-up weekly",
      "Built SEO foundation now ranking on 45+ high-intent keywords",
      "Average deal size increased after clarifying product range online",
    ],
    image: projectSmartPackaging,
    tech: ["React","TypeScript","Tailwind CSS","Next.js","Vercel","GA4"],
    cta: "Visit Live Site",
    tilt: "-2deg",
  },
  {
    id: 2,
    name: "JKP Padmalaya",
    logo: jkpLogo,
    industry: "Luxury Hospitality & Tourism",
    year: "2025", duration: "10 weeks",
    href: "https://jkpadmalaya.com",
    challenge: "A premium farmstay in Kerala's spice country with a genuinely special experience — but no digital presence to match. Bookings came only through word of mouth.",
    solution: "Editorial-grade website built around immersive storytelling — cinematic imagery, heritage narrative, and a two-step booking flow that removes all friction between discovery and reservation.",
    results: [
      { metric: "+212%", label: "Booking conversions", desc: "Year-over-year",          icon: TrendingUp },
      { metric: "4.9/5", label: "Guest rating",         desc: "Consistently maintained",icon: Star },
      { metric: "4+ min", label: "Time on site",        desc: "Up from under 1 minute", icon: Clock },
      { metric: "45%",   label: "Direct bookings",      desc: "Through site vs OTAs",   icon: BarChart3 },
    ],
    achievements: [
      "Positioned as Kerala's most premium heritage farmstay experience",
      "Email nurture sequence increased repeat bookings by 28%",
      "Reduced OTA dependency — saving commission costs significantly",
      "Brand now referenced in travel editorial and review platforms",
    ],
    image: projectJkp,
    tech: ["React","Next.js","Framer Motion","Stripe","Mailchimp","Vercel"],
    cta: "Visit Live Site",
    tilt: "1.5deg",
  },
  {
    id: 3,
    name: "Sierra Aerospace",
    logo: sierraLogo,
    industry: "Enterprise B2B & Aerospace",
    year: "2025", duration: "12 weeks",
    href: "https://sierraaerospace.in/",
    challenge: "An Indian UAV systems manufacturer with serious technical capability — but no digital presence that reflected it. Procurement teams in global markets couldn't find or evaluate them.",
    solution: "Export-ready enterprise site built to communicate technical credibility — compliance certifications, government project case studies, precise product documentation, and a qualification system that pre-filters enquiries.",
    results: [
      { metric: "11",    label: "Countries reached",  desc: "New international markets", icon: Globe },
      { metric: "3.4×", label: "Qualified RFQs",      desc: "From intl. prospects",      icon: TrendingUp },
      { metric: "$2.3M", label: "Pipeline generated", desc: "First 6 months",            icon: BarChart3 },
      { metric: "−85%", label: "RFP response time",   desc: "3 weeks → 2 days",          icon: Zap },
    ],
    achievements: [
      "Established credibility as a serious aerospace systems vendor globally",
      "Secured contracts in 4 new international markets",
      "Technical content strategy built domain authority in niche keywords",
      "Automated pre-qualification saves 20+ hours of sales time monthly",
    ],
    image: projectSierra,
    tech: ["Next.js","TypeScript","Tailwind","Salesforce","SendGrid","Vercel"],
    cta: "Visit Live Site",
    tilt: "-1deg",
  },
  {
    id: 4,
    name: "Threxa",
    logo: thexaLogo,
    industry: "SaaS & Commerce Automation",
    year: "2025", duration: "16 weeks",
    href: "https://threxa.theingredientlist.co/",
    challenge: "Indian D2C brands run on 6+ disconnected tools that don't talk to each other. The result: data silos, manual reconciliation, 15+ hours of administrative overhead every week.",
    solution: "Threxa is our in-house automation platform — the integration layer for Indian commerce. Native connections to every tool in the D2C stack, a no-code workflow builder, and a unified dashboard.",
    results: [
      { metric: "15+ hrs", label: "Saved per week",    desc: "Per customer on admin",   icon: Clock },
      { metric: "2×",     label: "Faster processing",  desc: "Automated vs manual",     icon: Zap },
      { metric: "$1.4M",  label: "Pipeline value",     desc: "D2C brand interest",      icon: BarChart3 },
      { metric: "35%",    label: "Cost reduction",     desc: "In operational overhead", icon: TrendingUp },
    ],
    achievements: [
      "Only integrated automation platform built specifically for Indian D2C",
      "Enables brands to scale operations without proportional headcount growth",
      "WhatsApp automation reduces customer service response time by 60%",
      "Positioned as essential infrastructure — not optional tooling",
    ],
    image: projectThrexa,
    tech: ["Node.js","React","PostgreSQL","Redis","n8n","AWS","Twilio"],
    cta: "Explore Threxa",
    tilt: "2deg",
  },
];

// ─── SERVICES ───
const services = [
  { icon: Palette, title: "Brand & Identity",  copy: "Logos, type systems, and visual languages that hold their own at every scale." },
  { icon: Layers,  title: "Product Design",    copy: "Web and product surfaces that feel inevitable — quiet, considered, alive." },
  { icon: Code2,   title: "Engineering",       copy: "Fast, accessible, conversion-tuned builds. Shipped without drama." },
];

// ─── PRINCIPLES ───
const principles = [
  { icon: Target,       title: "Fewer projects. Better work.",    body: "I take on a small number of projects each quarter. Quality demands attention." },
  { icon: MessageSquare,title: "Honest before comfortable.",      body: "If your strategy has a flaw, I'll say so. You're paying for judgment, not just execution." },
  { icon: Lightbulb,    title: "Strategy first. Always.",         body: "Most studios jump to design. I start with the business problem. That question drives every decision." },
  { icon: Zap,          title: "Speed without shortcuts.",        body: "I move fast because I think clearly — not because I cut corners." },
];

// ─── APPROACH ───
const approachPillars = [
  { number: "01", title: "I start with your business, not your brief.",      body: "Before I open a design tool, I need to understand your customers, your competitors, and what actually moves the needle for you." },
  { number: "02", title: "I challenge the assumptions in the room.",          body: "The best work happens when both sides push back. I'm here to help you figure out what's worth building." },
  { number: "03", title: "I communicate like a person, not an agency.",       body: "No status decks. No ticket systems. You'll hear from me directly, with clear thinking and honest timelines." },
  { number: "04", title: "I measure what ships, not what's presented.",       body: "What matters is what the site does after it's live. I build with conversion in mind from day one." },
];

// ─── TESTIMONIALS ───
// IMPORTANT: These are drafted testimonials based on real project outcomes.
// Send each to the respective client for review and approval before deploying.
const testimonials = [
  {
    id: 1,
    name: "Arun Nair",
    company: "Smart Packaging Solutions",
    role: "Director of Sales",
    rating: 5,
    project: "B2B Website + RFQ Automation",
    testimonial: "We'd run this business for 13 years entirely on referrals — no real online presence. Within three months of launching the new site, we started receiving qualified inquiries from companies we'd never heard of, in cities we'd never reached. Sachin understood the B2B buyer better than most sales consultants I've hired.",
  },
  {
    id: 2,
    name: "Ajay Krishnan",
    company: "JKP Padmalaya",
    role: "Founder",
    rating: 5,
    project: "Luxury Hospitality Website",
    testimonial: "We were completely dependent on OTAs and word of mouth. The new site changed that. Direct bookings went up significantly and guests now arrive already knowing our story — they come emotionally invested before they even reach us. The quality of the experience online elevated what guests expected offline.",
  },
  {
    id: 3,
    name: "Vikram Reddy",
    company: "Sierra Aerospace",
    role: "Head of Business Development",
    rating: 5,
    project: "Enterprise Website + RFQ System",
    testimonial: "Our previous digital presence looked like a government document. We needed international procurement teams to take us seriously. What Sachin built positioned us as a credible vendor from the first impression — we started receiving inbound RFQs from markets we had never been able to reach through cold outreach alone.",
  },
];

// ─── TRUST MARKERS ───
const trustMarkers = [
  { label: "Direct access",    value: "1:1",     description: "You work with me, the founder — never a handoff or account manager." },
  { label: "Built bespoke",    value: "0%",      description: "Template usage. Every site is designed and coded from scratch." },
  { label: "Fixed scope",      value: "₹0",      description: "Surprise invoices. Price agreed before anything starts." },
  { label: "Typical timeline", value: "6–12 wks",description: "From kickoff to live, depending on scope. Held to honest dates." },
];

// ─── PRICING ───
const pricing = [
  {
    name: "Launch", price: "Custom Quote", period: "Project-based", duration: "6–8 weeks",
    description: "New brand. Fast execution. Built right from the start.",
    outcome: "Conversion-optimized website + automation foundation",
    details: [
      "Brand positioning & visual identity",
      "5–8 page website (responsive, fast)",
      "Conversion strategy & lead capture setup",
      "Basic workflow automation (WhatsApp, email)",
      "SEO fundamentals + analytics tracking",
      "30 days post-launch refinement",
    ],
    includes: "Direct communication. Zero delays. Your ideas, executed cleanly.",
    bestFor: "Early-stage D2C, Startups, New launches",
    cta: "Get a Quote",
    featured: false,
  },
  {
    name: "Scaling", price: "Custom Quote", period: "Project-based", duration: "10–12 weeks",
    description: "Growing business. Complex needs. Built for performance.",
    outcome: "Full-stack web presence + advanced automation",
    details: [
      "Complete brand system (guidelines included)",
      "10+ page website with CMS/content management",
      "Conversion optimization audit & rebuild",
      "Advanced integrations (Shopify, Tally, Razorpay)",
      "Workflow automation (multi-channel, complex rules)",
      "Performance baseline & 30-day optimization",
    ],
    includes: "Strategy-first approach. What gets built is what gets measured.",
    bestFor: "Scaling SMBs, E-Commerce, Service Businesses",
    cta: "Get a Quote",
    featured: true,
  },
  {
    name: "Enterprise", price: "Custom Quote", period: "Project-based", duration: "12+ weeks",
    description: "Enterprise scale. Custom systems. No compromises.",
    outcome: "Full ecosystem redesign + competitive advantage",
    details: [
      "Full product strategy & market positioning",
      "Bespoke web platform (unlimited complexity)",
      "Custom backend systems & databases",
      "Enterprise automation (API-first, scalable)",
      "Multi-channel integrations & orchestration",
      "Conversion intelligence & ongoing optimization",
    ],
    includes: "Partner-level engagement. Results matter more than hours billed.",
    bestFor: "Enterprise, D2C Leaders, Market Disruptors",
    cta: "Get a Quote",
    featured: false,
  },
];

const integrations = ["Shopify","Tally","Razorpay","Shiprocket","WhatsApp","Slack","Stripe","Supabase"];
const stats = [
  { value: "30+",  label: "Brands shaped" },
  { value: "8 yrs",label: "Crafting digital" },
  { value: "100%", label: "In-house build" },
];

const EMAIL   = "sachin@theingredientlist.co";
const WHATSAPP = "+91 74839 92418";
const CAL     = "https://cal.com/threxa/design-audit";
const LINKEDIN = "https://linkedin.com/in/sachinjk11";

// ─── FAQ ───
const faqs = [
  { q: "How much does a project cost?", a: "Every project is scoped and priced based on your specific requirements. Every engagement starts with a free strategy call — you'll get a clear estimate before anything is agreed, with no surprise invoices." },
  { q: "How long does a website take?", a: "Most websites are delivered in 6–12 weeks. A landing page takes 6–8 weeks. A multi-page growth site takes 10–12 weeks. Complex builds with custom backend or automation workflows take 12+ weeks. You'll get a precise timeline in writing before we begin." },
  { q: "Do you offer ongoing support?", a: "Yes. Every project includes post-launch support for 30 days. Beyond that, ongoing maintenance and content updates are available as a monthly retainer. Most clients stay on after launch." },
  { q: "Can you redesign existing websites?", a: "Absolutely. Redesigns are often where the most value is unlocked — an existing site has real user data that informs what to change. I'll audit your current site and build something that performs better from day one." },
  { q: "Do you build automation systems?", a: "Yes — through Threxa, my automation platform built specifically for Indian businesses. I connect Shopify, Tally, WhatsApp, Razorpay, Shiprocket and more. All without code on your end." },
  { q: "Do you provide hosting?", a: "Sites are deployed to Vercel by default. I handle setup and configuration. You own the hosting account — no lock-in." },
  { q: "Do you work internationally?", a: "Yes. While based in Bengaluru, I work with clients internationally. Payment is accepted via international bank transfer, Wise, or Stripe." },
  { q: "What happens after launch?", a: "Launch is where most agencies disappear. I don't. Post-launch includes 30 days of support, performance monitoring, SEO indexing confirmation, and a 2-week check-in call." },
];

const auditBenefits = [
  { icon: SearchCheck, title: "Find conversion bottlenecks",   body: "Pinpoint exactly where visitors are dropping off." },
  { icon: Workflow,    title: "Discover automation gaps",       body: "Identify 3–5 workflows you could automate to save hours every week." },
  { icon: Lightbulb,  title: "UX improvements, prioritised",   body: "A ranked list of experience improvements with estimated impact." },
  { icon: BarChart3,  title: "Actionable recommendations",     body: "Every item is tied to a business outcome, not a generic checklist." },
];

// ─── COMPONENT ───
const Index = () => {
  const revealRefs   = useRef<(HTMLElement | null)[]>([]);
  const cardRefs     = useRef<(HTMLElement | null)[]>([]);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq]             = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop]         = useState(false);
  const [showChat, setShowChat]                   = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen]       = useState(false);
  const [auditForm, setAuditForm]                 = useState({ name:"", email:"", website:"", businessType:"" });
  const [auditSubmitted, setAuditSubmitted]       = useState(false);

  // scroll state
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setShowChat(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // generic reveal observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // card fall-in observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    cardRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // hero fires immediately
  useEffect(() => {
    const heroLines = document.getElementById("heroLines");
    setTimeout(() => {
      heroLines?.classList.add("in");
      document.querySelectorAll(".hero .slide-up").forEach(el => el.classList.add("in"));
    }, 200);
  }, []);

  const addRef     = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };
  const addCardRef = (el: HTMLElement | null) => { if (el && !cardRefs.current.includes(el))   cardRefs.current.push(el); };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <AnimationStyles />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative bg-gradient-hero">
        <div className="absolute inset-0 til-grid opacity-70" aria-hidden />
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-15 blur-[140px]" aria-hidden />

        {/* NAV */}
        <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10 lg:py-7">
          <a href="#top" aria-label="The Ingredient List — home" className="group -my-2 flex items-center">
            {/* LOGO: reduced from h-28 → h-10/12/14 */}
            <img
              src={tilLogo}
              alt="The Ingredient List"
              className="h-10 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.02] sm:h-11 md:h-12"
            />
          </a>
          <nav className="hidden items-center gap-10 text-sm font-medium text-muted-foreground md:flex">
            {[["#work","Work"],["#services","Services"],["#about","Studio"],["#pricing","Pricing"],["#contact","Contact"]].map(([href,label]) => (
              <a key={href} href={href} className="transition-colors hover:text-foreground">{label}</a>
            ))}
          </nav>
          <Button asChild variant="glass" size="sm" className="hidden rounded-full md:inline-flex">
            <a href={CAL} target="_blank" rel="noreferrer">Book a call</a>
          </Button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground shadow-card backdrop-blur-xl transition-colors hover:border-primary/40 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </header>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] md:hidden">
            <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} aria-hidden />
            <div className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-background shadow-2xl slide-up in">
              <div className="flex items-center justify-between border-b border-border px-6 py-6">
                <img src={tilLogo} alt="The Ingredient List" className="h-10 w-auto object-contain mix-blend-multiply" loading="lazy" />
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 px-4 py-6">
                {[["#work","Work"],["#services","Services"],["#about","Studio"],["#pricing","Pricing"],["#faq","FAQ"],["#contact","Contact"]].map(([href,label]) => (
                  <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3.5 font-brand text-lg font-bold text-foreground transition-colors hover:bg-muted">{label}</a>
                ))}
              </nav>
              <div className="mt-auto border-t border-border px-6 py-6">
                <Button asChild variant="brand" size="lg" className="w-full rounded-full">
                  <a href={CAL} target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    Book a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <a href={`https://wa.me/917483992418`} target="_blank" rel="noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40">
                  <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* HERO CONTENT */}
        <div id="top" className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-14 text-center lg:px-10 lg:pt-20">
          <div className="slide-up mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground shadow-card backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Websites · AI Systems · Automation
          </div>
          <h1 id="heroLines" className="hero-lines mx-auto max-w-5xl font-brand text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="line-word"><i>Websites and AI systems</i></span>{" "}
            <span className="line-word"><i className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">built to move the needle.</i></span>
          </h1>
          <p className="slide-up d1 mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-8 text-muted-foreground">
            I help Indian businesses launch high-performing websites and automate the busywork that slows them down — built in-house, start to finish, by one person who's accountable for the result.
          </p>
          <div className="slide-up d2 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="brand" size="lg" className="rounded-full px-7">
              <a href={CAL} target="_blank" rel="noreferrer">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="glass" size="lg" className="rounded-full px-7">
              <a href="#work"><Play className="h-4 w-4" /> View Our Work</a>
            </Button>
          </div>
          <div className="slide-up d3 mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className="font-brand text-3xl font-extrabold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────── */}
      <section className="relative border-t border-border bg-background px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {[
              { src: thexaLogo,          alt: "Threxa" },
              { src: sierraLogo,         alt: "Sierra Aerospace" },
              { src: smartPackagingLogo, alt: "Smart Packaging Solutions" },
              { src: jkpLogo,            alt: "JKP Padmalaya" },
            ].map(({ src, alt }) => (
              <div key={alt} ref={addRef as any}
                className="group flex h-14 w-40 items-center justify-center slide-up transition-all duration-500 hover:scale-110">
                <img src={src} alt={alt} loading="lazy" className="h-full w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES — FALLING CARDS ──────────────── */}
      <section id="work" className="relative bg-gradient-warm px-6 py-16 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-20">
            <p ref={addRef as any} className="slide-up text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 ref={addRef as any} className="slide-up d1 mt-4 max-w-3xl font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Work that moved the <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">needle.</span>
            </h2>
            <p ref={addRef as any} className="slide-up d2 mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
              Every engagement starts with a business challenge. Here's how they ended.
            </p>
          </div>

          {/* FALLING CARD STACK */}
          <div className="space-y-8">
            {caseStudies.map((study, index) => {
              const isExpanded = expandedCaseStudy === study.id;
              const delayClass = `d${index + 1}`;
              return (
                <article
                  key={study.id}
                  ref={addCardRef as any}
                  className={`card-fall ${delayClass} group relative overflow-hidden rounded-2xl border border-border/40 bg-white/60 cursor-pointer
                    hover:border-primary/40 hover:bg-white/70 hover:shadow-xl
                    transition-[border-color,background,box-shadow] duration-300`}
                  style={{ "--tilt": study.tilt } as React.CSSProperties}
                  onClick={() => setExpandedCaseStudy(isExpanded ? null : study.id)}
                >
                  {/* CARD HEADER — always visible */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-5">
                          <img src={study.logo} alt={study.name} loading="lazy"
                            className="h-10 w-auto transition-all duration-500 grayscale group-hover:grayscale-0" />
                          <div className="h-px flex-1 bg-border/60" />
                          <span className="text-xs font-mono text-muted-foreground/60">{study.year}</span>
                        </div>
                        <h3 className="font-brand text-2xl lg:text-3xl font-extrabold text-foreground">{study.name}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">{study.industry}</span>
                          <span>·</span>
                          <span>{study.duration}</span>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground line-clamp-2 max-w-2xl">{study.solution}</p>
                      </div>

                      {/* Metrics preview strip */}
                      <div className="hidden lg:flex flex-col items-end gap-3">
                        <div className={`flex items-center gap-2 text-xs font-medium ${isExpanded ? "text-primary" : "text-muted-foreground"} transition-colors`}>
                          {isExpanded ? "Hide details" : "View details"}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </div>
                        <div className="flex gap-4 mt-2">
                          {study.results.slice(0,2).map(r => (
                            <div key={r.label} className="text-right">
                              <div className="font-brand text-lg font-extrabold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{r.metric}</div>
                              <div className="text-xs text-muted-foreground">{r.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <ChevronDown className={`lg:hidden h-5 w-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                    </div>
                  </div>

                  {/* EXPANDED CONTENT — blooms open */}
                  {isExpanded && (
                    <div className="border-t border-border/20 bg-card/40 bloom-in in">
                      <div className="p-6 lg:p-8 space-y-8">

                        <div className="grid gap-6 lg:grid-cols-2">
                          <div className="rounded-2xl border border-border/30 bg-card/40 p-5">
                            <div className="flex gap-3">
                              <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">The Challenge</p>
                                <p className="text-sm leading-6 text-muted-foreground">{study.challenge}</p>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-border/30 bg-card/40 p-5">
                            <div className="flex gap-3">
                              <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">What I Built</p>
                                <p className="text-sm leading-6 text-muted-foreground">{study.solution}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                          {study.results.map(r => {
                            const Icon = r.icon;
                            return (
                              <div key={r.label} className="rounded-xl border border-border/40 bg-card/50 p-3 transition-all hover:border-primary/40">
                                <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-1.5"><Icon className="h-3.5 w-3.5 text-primary" /></div>
                                <p className="font-brand text-base font-extrabold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{r.metric}</p>
                                <p className="mt-0.5 text-xs font-semibold text-foreground">{r.label}</p>
                                <p className="mt-0.5 text-xs text-muted-foreground">{r.desc}</p>
                              </div>
                            );
                          })}
                        </div>

                        <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-primary/5 to-orange-500/5 p-5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Key outcomes</p>
                          <ul className="space-y-2">
                            {study.achievements.map((a, i) => (
                              <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />{a}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-1.5 items-center justify-between">
                          <div className="flex flex-wrap gap-1.5">
                            {study.tech.map(t => (
                              <span key={t} className="rounded-full border border-border/50 bg-card px-3 py-1 text-xs font-medium text-foreground">{t}</span>
                            ))}
                          </div>
                          <Button asChild variant="brand" size="sm" className="rounded-full px-6" onClick={e => e.stopPropagation()}>
                            <a href={study.href} target="_blank" rel="noreferrer">{study.cta} <ArrowUpRight className="ml-2 h-4 w-4" /></a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div ref={addRef as any} className="slide-up mt-20 rounded-3xl border border-border/40 bg-gradient-to-r from-primary/5 via-transparent to-orange-500/5 p-12 text-center">
            <h3 className="font-brand text-2xl font-extrabold">Ready to build something <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">that matters?</span></h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Every brand has a story worth telling. Let's tell yours with work that actually moves the needle.</p>
            <Button asChild variant="brand" size="lg" className="mt-8 rounded-full px-8">
              <a href={CAL} target="_blank" rel="noreferrer">Start a Conversation <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ────────────────────────────────── */}
      <section className="relative border-t border-border bg-background px-6 py-16 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div ref={addRef as any} className="slide-up">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">My Philosophy</p>
              <h2 className="mt-4 font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Fewer things, <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">done better.</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">I take on a small number of projects each quarter — not because of capacity, but because quality demands attention. Every project gets my direct involvement, my sharpest thinking, and my honest judgment.</p>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">I care about what happens after launch — the leads, the conversions, the business outcomes that actually matter to you.</p>
              <div className="mt-8 h-px w-16 bg-gradient-to-r from-primary to-orange-500" />
              <p className="mt-6 font-brand text-xl font-extrabold text-foreground">— Sachin</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {principles.map((p, i) => (
                <div key={p.title} ref={addRef as any}
                  className={`slide-up d${i+1} group rounded-2xl border border-border/20 p-6 transition-all duration-700 hover:border-primary/40 hover:bg-white/30 hover:-translate-y-1`}>
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-2.5"><p.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="font-brand text-base font-extrabold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section id="services" className="relative border-t border-border bg-gradient-warm px-6 py-16 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div ref={addRef as any} className="slide-up">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
              <h2 className="mt-4 font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                One studio. The full <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">recipe.</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">From positioning to pixels to production — no handoffs, no compromise.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <article key={s.title} ref={addCardRef as any}
                  className={`card-fall d${i+1} group rounded-2xl border border-border/20 p-6 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/30 transition-[border-color,background,transform] duration-300`}>
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-primary to-orange-500 p-3 text-primary-foreground shadow-sm">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-brand text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{s.copy}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div ref={addRef as any} className="slide-up mt-20 rounded-3xl border border-border bg-gradient-card p-8 shadow-card lg:p-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Integrations</p>
                <h3 className="mt-3 font-brand text-2xl font-extrabold lg:text-3xl">Built for the stack you already run.</h3>
                <p className="mt-3 text-sm text-muted-foreground">Native integrations across the tools Indian commerce actually runs on.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {integrations.map(tool => (
                  <span key={tool} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ────────────────────────────────── */}
      <section className="relative border-t border-border bg-gradient-warm px-6 py-16 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p ref={addRef as any} className="slide-up text-xs font-semibold uppercase tracking-[0.2em] text-primary">The approach</p>
            <h2 ref={addRef as any} className="slide-up d1 mt-4 max-w-2xl font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              How I actually <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">work with clients.</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {approachPillars.map((pillar, i) => (
              <div key={pillar.number} ref={addCardRef as any}
                className={`card-fall d${i+1} group relative overflow-hidden rounded-2xl border border-border/20 p-8 hover:border-primary/30 hover:bg-white/30 hover:-translate-y-1 transition-[border-color,background,transform] duration-300`}>
                <span className="pointer-events-none absolute right-5 top-5 z-0 font-brand text-5xl font-extrabold text-primary/[0.06] select-none">{pillar.number}</span>
                <h3 className="relative z-10 max-w-[85%] font-brand text-xl font-extrabold text-foreground leading-snug">{pillar.title}</h3>
                <p className="relative z-10 mt-4 text-sm leading-7 text-muted-foreground">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section id="testimonials" className="relative border-t border-border bg-background px-6 py-16 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p ref={addRef as any} className="slide-up text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client voices</p>
            <h2 ref={addRef as any} className="slide-up d1 mt-4 font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              What clients <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">actually say.</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <article key={t.id} ref={addCardRef as any}
                className={`card-fall d${i+1} flex flex-col rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 shadow-card backdrop-blur-sm hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-[border-color,transform,box-shadow] duration-300`}>
                <div className="mb-5 flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="mb-8 flex-1 text-sm leading-7 text-muted-foreground italic">"{t.testimonial}"</p>
                <div className="border-t border-border/40 pt-5 space-y-1">
                  <h3 className="font-brand text-sm font-extrabold text-foreground">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.role} · <span className="font-semibold text-primary/80">{t.company}</span></p>
                  <p className="text-xs text-muted-foreground/60">Project: {t.project}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Commitments */}
          <div ref={addRef as any} className="slide-up mt-20 rounded-2xl border border-border/40 bg-card/50 p-8 shadow-card lg:p-12">
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

      {/* ── STORY / ABOUT ─────────────────────────────── */}
      <section id="about" className="relative border-t border-border bg-gradient-warm px-6 py-16 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div ref={addRef as any} className="slide-up space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The studio</p>
                <h2 className="mt-4 font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Why I started <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">The Ingredient List.</span>
                </h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground">I started this because of a pattern I kept seeing: genuinely good businesses — skilled, experienced, building real things — were invisible online. Not because their work was bad. Because their digital presence didn't reflect the quality of what they actually did.</p>
              <p className="text-base leading-8 text-muted-foreground">They were losing clients to competitors with better-looking websites. The gap wasn't capability — it was presentation. That felt wrong, and fixable.</p>
              <p className="text-base leading-8 text-muted-foreground">Eight years and 30+ brands later, the same thing still drives me: getting the work right, not just getting it done.</p>
              <Button asChild variant="brand" size="lg" className="rounded-full px-8">
                <a href={CAL} target="_blank" rel="noreferrer">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>

            {/* Credentials card — BLOOMS in */}
            <div ref={addRef as any} className="bloom-in">
              <div className="rounded-3xl border border-border/40 bg-card/60 p-8 backdrop-blur-sm shadow-soft lg:p-10 space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">What you can expect</p>
                  <ul className="space-y-4">
                    {[
                      { icon: MessageSquare, title: "Direct Communication",  body: "You work with me, not a team. Every conversation is with the person building your project." },
                      { icon: Target,         title: "Strategy First",        body: "I begin by understanding your business, your market, and what success actually looks like." },
                      { icon: Zap,            title: "Built Fast, Built Right",body: "Clean code, shipped on time, zero technical debt." },
                      { icon: BookOpen,       title: "Honest Feedback",       body: "If something won't work or isn't worth building, you'll hear it from me directly." },
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
                <div className="border-t border-border/30 pt-6 flex items-center gap-4">
                  <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-orange-500 text-primary-foreground font-brand text-lg font-extrabold shadow-sm">
                    <span>SK</span>
                    <img src="/founder.jpg" alt="Sachin — founder" className="absolute inset-0 h-full w-full object-cover" onError={e => { e.currentTarget.style.display = "none"; }} loading="lazy" />
                  </div>
                  <div>
                    <p className="font-brand font-extrabold text-foreground">Sachin</p>
                    <p className="text-xs text-muted-foreground">Founder · The Ingredient List · Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────── */}
      <section id="pricing" className="relative border-t border-border bg-background px-6 py-16 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16 text-center">
            <p ref={addRef as any} className="slide-up text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Investment</p>
            <h2 ref={addRef as any} className="slide-up d1 font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              No surprises. <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Just results.</span>
            </h2>
            <p ref={addRef as any} className="slide-up d2 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
              Clear pricing based on scope. Every project starts with a strategy call.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 mb-12">
            {pricing.map((tier, i) => (
              <article key={tier.name} ref={addCardRef as any}
                className={`card-fall d${i+1} relative overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-300
                  ${tier.featured
                    ? "border-primary/50 bg-card shadow-lg ring-1 ring-primary/30 p-6 sm:p-8"
                    : "border-border/50 bg-card/50 shadow-card hover:border-primary/20 p-6 sm:p-8"
                  }`}>
                {tier.featured && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-block rounded-b-lg bg-gradient-to-r from-primary to-orange-500 px-4 py-1 text-xs font-extrabold text-white uppercase tracking-wider">Recommended</span>
                  </div>
                )}
                <div className={tier.featured ? "pt-4" : ""}>
                  <h3 className="font-brand text-2xl sm:text-3xl font-extrabold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mb-1">
                      <span className="font-brand text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{tier.price}</span>
                      <span className="text-xs text-muted-foreground">{tier.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Timeline: {tier.duration}</p>
                  </div>
                  <div className="mb-6 rounded-lg border border-border/30 bg-muted/30 p-4">
                    <p className="text-xs font-semibold text-foreground mb-1">You'll get:</p>
                    <p className="text-sm text-muted-foreground font-medium">{tier.outcome}</p>
                  </div>
                  <div className="mb-6 space-y-3 border-t border-border/30 pt-6">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-[0.1em] text-muted-foreground">Includes:</p>
                    {tier.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <p className="text-sm text-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4 border-t border-border/30 pt-4">
                    <p className="text-xs text-muted-foreground italic">"{tier.includes}"</p>
                  </div>
                  <div className="mb-6 text-xs text-muted-foreground">
                    <span className="font-semibold">Best for:</span> {tier.bestFor}
                  </div>
                  {/* FIXED: flex + items-center + justify-center + h-11 + whitespace-nowrap */}
                  <Button asChild variant={tier.featured ? "brand" : "outline"}
                    className="w-full rounded-lg flex items-center justify-center h-11 text-sm font-semibold whitespace-nowrap">
                    <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`${tier.name} Project Enquiry`)}`}>
                      {tier.cta} <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section id="faq" className="relative border-t border-border bg-background px-6 py-16 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p ref={addRef as any} className="slide-up text-xs font-semibold uppercase tracking-[0.2em] text-primary">Common questions</p>
            <h2 ref={addRef as any} className="slide-up d1 mt-4 font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          <div className="divide-y divide-border/50">
            {faqs.map((faq, i) => {
              const isOpen = expandedFaq === i;
              return (
                <div key={i} className="group">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary">
                    <span className="font-brand text-base font-extrabold text-foreground group-hover:text-primary transition-colors lg:text-lg">{faq.q}</span>
                    <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary/40 group-hover:bg-primary/5">
                      {isOpen ? <Minus className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
                    <p className="text-base leading-8 text-muted-foreground pr-14">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div ref={addRef as any} className="slide-up mt-14 rounded-2xl border border-border/30 bg-gradient-warm p-8 text-center">
            <p className="font-brand text-lg font-extrabold text-foreground">Still have questions?</p>
            <p className="mt-2 text-sm text-muted-foreground">A 15-minute call is the fastest way to get answers specific to your project.</p>
            <Button asChild variant="brand" size="sm" className="mt-6 rounded-full px-6">
              <a href={CAL} target="_blank" rel="noreferrer">Book a free call <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── AUDIT ─────────────────────────────────────── */}
      <section id="audit" className="relative border-t border-border bg-gradient-warm px-6 py-16 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary mb-6">
                <Sparkles className="h-3.5 w-3.5" /> Free · No obligation
              </div>
              <h2 ref={addRef as any} className="slide-up font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Get a Free Website <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">&amp; Automation Audit</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">I'll personally review your website and digital workflows and send back a specific, prioritised breakdown of what to fix — free, with no strings attached.</p>
              <div className="mt-10 space-y-5">
                {auditBenefits.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4 text-left">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-border/20 bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
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
            <div ref={addRef as any} className="bloom-in rounded-3xl border border-border/40 bg-white p-8 shadow-soft lg:p-10">
              {auditSubmitted ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-500 shadow-sm">
                    <Check className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-brand text-2xl font-extrabold text-foreground">Audit request received.</h3>
                  <p className="text-muted-foreground max-w-xs">I'll personally review your site and send the audit within 48 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-brand text-xl font-extrabold text-foreground mb-1">Request your free audit</h3>
                  <p className="text-sm text-muted-foreground mb-8">Takes 60 seconds. Delivered within 48 hours.</p>
                  <div className="space-y-5">
                    {[
                      { label:"Your Name",       type:"text",  key:"name",         placeholder:"Your name" },
                      { label:"Email Address",   type:"email", key:"email",        placeholder:"you@company.com" },
                      { label:"Website URL",     type:"url",   key:"website",      placeholder:"https://yourwebsite.com" },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-foreground mb-2">{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder}
                          value={auditForm[f.key as keyof typeof auditForm]}
                          onChange={e => setAuditForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-foreground mb-2">Business Type</label>
                      <select value={auditForm.businessType} onChange={e => setAuditForm(prev => ({ ...prev, businessType: e.target.value }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all">
                        <option value="" disabled>Select your business type</option>
                        <option value="ecommerce">E-Commerce / D2C Brand</option>
                        <option value="saas">SaaS / Software</option>
                        <option value="service">Service Business</option>
                        <option value="manufacturing">Manufacturing / B2B</option>
                        <option value="hospitality">Hospitality / Tourism</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <Button variant="brand" size="lg" className="w-full rounded-xl mt-2"
                      disabled={!auditForm.name || !auditForm.email}
                      onClick={() => {
                        if (auditForm.name && auditForm.email) {
                          window.open(`mailto:${EMAIL}?subject=Free Audit Request from ${encodeURIComponent(auditForm.name)}&body=Name: ${encodeURIComponent(auditForm.name)}%0AEmail: ${encodeURIComponent(auditForm.email)}%0AWebsite: ${encodeURIComponent(auditForm.website)}%0ABusiness Type: ${encodeURIComponent(auditForm.businessType)}`, "_blank");
                          setAuditSubmitted(true);
                        }
                      }}>
                      Request My Free Audit <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <section id="contact" className="relative bg-background px-6 py-20 sm:py-28 lg:px-10 lg:py-32">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-orange-500 opacity-10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 ref={addRef as any} className="slide-up font-brand text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            Have something <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">worth building?</span>
          </h2>
          <p ref={addRef as any} className="slide-up d1 mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            I take on a small number of projects each quarter. A 15-minute call costs nothing and usually answers everything.
          </p>
          <div ref={addRef as any} className="slide-up d2 mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { href: `mailto:${EMAIL}`, icon: Mail,     label: "Email",     value: EMAIL },
              { href: "https://wa.me/917483992418", icon: Phone, label: "WhatsApp", value: WHATSAPP },
              { href: CAL, icon: Calendar, label: "Calendar",  value: "cal.com/threxa" },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <c.icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{c.label}</span>
                <span className="break-all text-xs font-medium text-center">{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="border-t border-border bg-foreground text-background px-6 pt-20 pb-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">Let's work together</p>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                Ready to build something<br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">exceptional?</span>
              </h2>
            </div>
            <Button asChild size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 hover:text-foreground px-8 flex-shrink-0">
              <a href={CAL} target="_blank" rel="noreferrer">Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 mb-20">
            <div className="text-left">
              <div className="h-10 mb-5 flex items-center">
                <img src={tilLogo} alt="The Ingredient List" loading="lazy" className="h-full w-auto object-contain opacity-90" />
              </div>
              <p className="text-sm text-white/70 leading-7 mb-6">Digital design, engineering &amp; strategy for Indian businesses.</p>
              <div className="flex items-center gap-3">
                {[
                  { href: `mailto:${EMAIL}`,          icon: Mail,          label: "Email" },
                  { href: LINKEDIN,                    icon: Linkedin,      label: "LinkedIn" },
                  { href: "https://wa.me/917483992418",icon: MessageCircle, label: "WhatsApp" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-white/40 hover:text-white">
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mb-5">Services</h4>
              <ul className="space-y-3 text-sm text-white/75">
                {["Brand & Identity","Product Design","Engineering","Workflow Automation"].map(s => (
                  <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
                ))}
                <li><a href="https://threxa.theingredientlist.co/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Threxa Platform <ExternalLink className="h-3 w-3" /></a></li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mb-5">Company</h4>
              <ul className="space-y-3 text-sm text-white/75">
                {[["#work","Work"],["#about","Studio"],["#pricing","Pricing"],["#faq","FAQ"],["#audit","Free Audit"]].map(([href,label]) => (
                  <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 flex-shrink-0" /><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">{EMAIL}</a></li>
                <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 flex-shrink-0" /><a href="https://wa.me/917483992418" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{WHATSAPP}</a></li>
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /><span>Bengaluru, India</span></li>
                <li className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" /><a href={CAL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Book a strategy call</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
            <p>© {new Date().getFullYear()} The Ingredient List. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/terms"   className="hover:text-white/70 transition-colors">Terms &amp; Conditions</a>
              <a href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            </div>
            <p>Built for Indian commerce</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING ──────────────────────────────────── */}
      {showChat && (
        <button onClick={() => window.open("https://wa.me/917483992418?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20The%20Ingredient%20List.", "_blank")}
          className="fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 slide-up in"
          title="Chat on WhatsApp" aria-label="Open WhatsApp chat">
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-28 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card transition-all duration-300 hover:bg-foreground hover:text-background active:scale-95 slide-up in"
          title="Scroll to top" aria-label="Scroll to top">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </main>
  );
};

export default Index;
