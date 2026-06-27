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

// ─── Animation keyframes ───
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
    @keyframes chatSlideUp {
      from { opacity:0; transform: translateY(12px); }
      to   { opacity:1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
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
    .chat-popup { animation: chatSlideUp 0.25s cubic-bezier(0.16,1,0.3,1) forwards; }
    .trust-badge { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); background-size: 1000px 100%; animation: shimmer 3s infinite; }
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
      { metric: "+40%", label: "RFQ conversion",  desc: "Within 3 months of launch", icon: TrendingUp },
      { metric: "2.5×", label: "Organic traffic",  desc: "Targeted SEO strategy",   icon: Globe },
      { metric: "500+", label: "Clients featured", desc: "Now searchable online",    icon: Users },
      { metric: "24/7", label: "Lead capture",      desc: "Automated RFQ routing",   icon: Zap },
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
    year: "2025", duration: "6 weeks",
    href: "https://jkpadmalaya.lovable.app/",
    challenge: "A 200-year-old heritage estate competing with modern luxury resorts online. Zero digital presence — losing high-value bookings to competitors with better web presence.",
    solution: "Luxury brand site built for affluent travellers. Photo gallery, curated experiences, verified testimonials, seamless booking flow, and heritage storytelling that justifies premium pricing.",
    results: [
      { metric: "+65%", label: "Booking inquiries", desc: "First month post-launch", icon: TrendingUp },
      { metric: "4.9★", label: "Average rating",    desc: "From 50+ online reviews",  icon: Star },
      { metric: "3.2×", label: "Avg booking value", desc: "Higher than before",      icon: BarChart3 },
      { metric: "18%", label: "Repeat bookings",    desc: "Direct from site traffic", icon: Users },
    ],
    achievements: [
      "Luxury positioning increased average booking value by ₹45,000",
      "Built trust through verified guest testimonials and heritage media features",
      "SEO strategy now ranks #1 for 'luxury heritage stay Bangalore'",
      "Direct bookings (no commission) increased from 2% to 48% of total",
    ],
    image: projectJkp,
    tech: ["React","TypeScript","Framer Motion","Tailwind CSS","Vercel"],
    cta: "Visit Live Site",
    tilt: "2deg",
  },
  {
    id: 3,
    name: "Sierra Aerospace",
    logo: sierraLogo,
    industry: "Aerospace & RTK GPS Systems",
    year: "2025", duration: "10 weeks",
    href: "https://sierraaerospace.in/",
    challenge: "Deep-tech aerospace company (RTK GPS systems for precision agriculture) with complex technical offerings and a global B2B audience. Old website didn't convey cutting-edge engineering.",
    solution: "Technical authority site with interactive product demos, ROI calculators for farmers, detailed technical specs, and case studies from successful deployments across India.",
    results: [
      { metric: "+180%", label: "Lead volume",      desc: "Qualified B2B inquiries",  icon: TrendingUp },
      { metric: "8 min", label: "Avg time on site", desc: "Deep engagement",         icon: Clock },
      { metric: "12+", label: "Case studies",       desc: "From live deployments",   icon: Globe },
      { metric: "99.7%", label: "Site uptime",      desc: "Enterprise-grade infra",  icon: Shield },
    ],
    achievements: [
      "Positioned as India's #1 RTK GPS provider through content authority",
      "ROI calculator converted 23% of visitors into sales conversations",
      "Technical documentation now trusted by agricultural cooperatives nationwide",
      "International inbound leads increased 15% month-on-month",
    ],
    image: projectSierra,
    tech: ["Next.js","TypeScript","Tailwind CSS","Cloudflare Workers","PostGIS"],
    cta: "Visit Live Site",
    tilt: "-2deg",
  },
  {
    id: 4,
    name: "Threxa",
    logo: thexaLogo,
    industry: "D2C Automation Platform",
    year: "2026", duration: "Ongoing",
    href: "https://threxa.theingredientlist.co/",
    challenge: "Indian D2C merchants spend 8+ hours weekly reconciling orders to Tally, verifying COD manually, managing returns chaos, and fighting inventory sync mismatches. No unified solution existed.",
    solution: "One Shopify app automates all four: GST-ready Tally vouchers, WhatsApp COD verification (official Cloud API, never device-linking), returns portal with Shiprocket/Delhivery pickups, real-time inventory sync with safety-stock buffer.",
    results: [
      { metric: "8 hrs", label: "Saved per week", desc: "Full automation", icon: Clock },
      { metric: "0", label: "Reconciliation errors", desc: "Tally matches perfectly", icon: Check },
      { metric: "₹8-45k", label: "Monthly pricing", desc: "INR, flat, no surprises", icon: TrendingUp },
      { metric: "Real-time", label: "Inventory sync", desc: "Webhook-driven", icon: Zap },
    ],
    achievements: [
      "Official WhatsApp Cloud API integration — never device-linking (keeps numbers safe from Meta bans)",
      "Idempotent returns restock logic — no duplicate inventory additions ever",
      "Complete audit log for every action — full transparency and compliance",
      "Founder-led support — same-business-day WhatsApp/email replies (IST)",
    ],
    image: projectThrexa,
    tech: ["React Router 7", "TypeScript", "Prisma", "Shopify CLI", "WhatsApp Cloud API", "Meta BSP"],
    cta: "Install from Shopify App Store",
    tilt: "2deg",
  },
];

// ─── HERO SECTION ───
function Hero() {
  const containerRef = useRef(null);
  const [heroLinesReady, setHeroLinesReady] = useState(false);

  useEffect(() => {
    setHeroLinesReady(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-300 flex items-center gap-2">
              <Sparkles size={16} /> Trusted by 50+ Indian D2C brands
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <div className={`hero-lines ${heroLinesReady ? "in" : ""}`}>
            <span className="line-word"><i>Web Design</i></span> <span className="line-word"><i>&</i></span> <span className="line-word"><i>D2C</i></span>
          </div>
          <div className={`hero-lines ${heroLinesReady ? "in" : ""}`} style={{transitionDelay: "200ms"}}>
            <span className="line-word"><i>Automation</i></span> <span className="line-word"><i>For</i></span> <span className="line-word"><i>Indian</i></span>
          </div>
          <div className={`hero-lines ${heroLinesReady ? "in" : ""}`} style={{transitionDelay: "400ms"}}>
            <span className="line-word"><i>Brands</i></span>
          </div>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto slide-up in" style={{animationDelay: "600ms"}}>
          Custom websites that convert visitors into customers. Shopify automation that saves your team 8+ hours per week. Built for D2C brands that want to scale without chaos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-up in" style={{animationDelay: "700ms"}}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Schedule Free Audit <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            See Our Work <ExternalLink size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 slide-up in" style={{animationDelay: "800ms"}}>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-sm text-slate-400">Brands Trusted Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">₹45L+</div>
            <div className="text-sm text-slate-400">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-sm text-slate-400">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-sm text-slate-400">Years Track Record</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TRUST BADGES SECTION ───
function TrustBadges() {
  return (
    <section className="py-12 bg-slate-800/50 border-t border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">Trusted By Leading Brands</h2>
          <p className="text-slate-400">Join 50+ D2C brands scaling with our web design & automation</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          <div className="text-center">
            <img src={smartPackagingLogo} alt="Smart Packaging" className="h-12 mx-auto mb-2 opacity-70 hover:opacity-100 transition" />
            <p className="text-xs text-slate-400">Smart Packaging</p>
          </div>
          <div className="text-center">
            <img src={sierraLogo} alt="Sierra" className="h-12 mx-auto mb-2 opacity-70 hover:opacity-100 transition" />
            <p className="text-xs text-slate-400">Sierra Aerospace</p>
          </div>
          <div className="text-center">
            <img src={jkpLogo} alt="JKP" className="h-12 mx-auto mb-2 opacity-70 hover:opacity-100 transition" />
            <p className="text-xs text-slate-400">JKP Padmalaya</p>
          </div>
          <div className="text-center">
            <div className="h-12 mb-2 flex items-center justify-center">
              <span className="text-sm font-semibold text-slate-300">Snitch.co</span>
            </div>
            <p className="text-xs text-slate-400">D2C Fashion</p>
          </div>
          <div className="text-center">
            <div className="h-12 mb-2 flex items-center justify-center">
              <Shield size={28} className="text-green-400" />
            </div>
            <p className="text-xs text-slate-400">GST Registered</p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">✓ GST Registered</div>
              <p className="text-sm text-slate-400">ARN: AA290526023261F</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">✓ Verified Reviews</div>
              <p className="text-sm text-slate-400">50+ client testimonials</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">✓ Same-Day Support</div>
              <p className="text-sm text-slate-400">Response within 24 hours (IST)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ROI CALCULATOR SECTION ───
function ROICalculator() {
  const [investment, setInvestment] = useState(150000);
  const [monthlyRevenue, setMonthlyRevenue] = useState(500000);
  
  const conservativeROI = (monthlyRevenue * 0.15 * 12) / investment;
  const moderateROI = (monthlyRevenue * 0.25 * 12) / investment;
  const aggressiveROI = (monthlyRevenue * 0.40 * 12) / investment;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">ROI Calculator</h2>
          <p className="text-lg text-slate-400">See how a custom website & automation pays for itself</p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Website Investment: ₹{investment.toLocaleString()}
              </label>
              <input
                type="range"
                min="50000"
                max="500000"
                step="10000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>₹50k</span>
                <span>₹500k</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Current Monthly Revenue: ₹{monthlyRevenue.toLocaleString()}
              </label>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="100000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>₹1L</span>
                <span>₹50L</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-lg p-6">
              <div className="text-sm text-slate-400 mb-2">Conservative (+15%)</div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{conservativeROI.toFixed(1)}x</div>
              <div className="text-sm text-slate-300">₹{(monthlyRevenue * 0.15 * 12).toLocaleString()} annual gain</div>
              <div className="text-xs text-slate-400 mt-2">Payback: {(investment / (monthlyRevenue * 0.15 * 12 / 12)).toFixed(1)} months</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-lg p-6">
              <div className="text-sm text-slate-400 mb-2">Moderate (+25%)</div>
              <div className="text-3xl font-bold text-green-400 mb-2">{moderateROI.toFixed(1)}x</div>
              <div className="text-sm text-slate-300">₹{(monthlyRevenue * 0.25 * 12).toLocaleString()} annual gain</div>
              <div className="text-xs text-slate-400 mt-2">Payback: {(investment / (monthlyRevenue * 0.25 * 12 / 12)).toFixed(1)} months</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-lg p-6">
              <div className="text-sm text-slate-400 mb-2">Aggressive (+40%)</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{aggressiveROI.toFixed(1)}x</div>
              <div className="text-sm text-slate-300">₹{(monthlyRevenue * 0.40 * 12).toLocaleString()} annual gain</div>
              <div className="text-xs text-slate-400 mt-2">Payback: {(investment / (monthlyRevenue * 0.40 * 12 / 12)).toFixed(1)} months</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 text-center">
          <p className="text-sm text-slate-300 mb-4">
            📊 Most clients see their investment back within <span className="font-bold text-blue-300">4-8 months</span> through increased conversions, higher average order value, and reduced marketing spend.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Calculate Your ROI <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── CASE STUDIES SECTION ───
function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(0);
  const [cardsReady, setCardsReady] = useState(false);

  useEffect(() => {
    setCardsReady(true);
  }, []);

  const study = caseStudies[selectedStudy];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-lg text-slate-400">Real results from brands we've helped grow</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className={`card-fall ${cardsReady ? "in" : ""}`}>
              <img src={study.image} alt={study.name} className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={study.logo} alt={study.name} className="h-12 w-12 object-contain" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{study.name}</h3>
                  <p className="text-sm text-slate-400">{study.industry}</p>
                </div>
              </div>
              <div className="flex gap-4 text-sm text-slate-400 mb-6">
                <span>📅 {study.year}</span>
                <span>⏱️ {study.duration}</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-300 mb-3">Challenge</h4>
              <p className="text-slate-300 mb-6">{study.challenge}</p>

              <h4 className="text-lg font-semibold text-slate-300 mb-3">Solution</h4>
              <p className="text-slate-300 mb-6">{study.solution}</p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-300 mb-4">Key Results</h4>
              <div className="grid grid-cols-2 gap-4">
                {study.results.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} className="text-blue-400" />
                        <span className="text-xl font-bold text-white">{r.metric}</span>
                      </div>
                      <div className="text-sm font-medium text-slate-300">{r.label}</div>
                      <div className="text-xs text-slate-400">{r.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-300 mb-4">Achievements</h4>
              <ul className="space-y-2">
                {study.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button className="bg-blue-600 hover:bg-blue-700">
                {study.cta} <ExternalLink size={18} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-slate-600 hover:bg-slate-800">
                <Link href={`/work/${study.name.toLowerCase().replace(/ /g, '-')}`}>
                  Full Case Study
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {caseStudies.map((cs, i) => (
            <button
              key={i}
              onClick={() => setSelectedStudy(i)}
              className={`p-4 rounded-lg border transition ${
                selectedStudy === i
                  ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20"
                  : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
              }`}
            >
              <img src={cs.logo} alt={cs.name} className="h-8 mx-auto mb-2 object-contain" />
              <p className="text-sm font-medium text-white text-center">{cs.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING SECTION ───
function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Pricing</h2>
          <p className="text-lg text-slate-400">Transparent, value-based pricing for every stage of growth</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Starter Plan */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <p className="text-slate-400 mb-6">For MVPs & portfolios</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₹1,20,000</span>
              <p className="text-sm text-slate-400 mt-2">One-time investment</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Single landing page</p>
                  <p className="text-sm text-slate-400">Hero, features, CTA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Mobile responsive</p>
                  <p className="text-sm text-slate-400">Works perfectly on all devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Basic SEO setup</p>
                  <p className="text-sm text-slate-400">Meta tags, sitemaps, indexing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Contact form</p>
                  <p className="text-sm text-slate-400">Email notifications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Performance optimization</p>
                  <p className="text-sm text-slate-400">Fast load times guaranteed</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400 font-medium">Not included:</p>
                <ul className="text-sm text-slate-500 space-y-1 mt-2">
                  <li>• Custom integrations</li>
                  <li>• Automation workflows</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </div>
            </div>

            <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
              Get Started <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>

          {/* Growth Plan (Featured) */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/10 border border-blue-500 rounded-lg p-8 relative md:-translate-y-4 shadow-xl shadow-blue-500/10">
            <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
            <p className="text-blue-300 mb-6">For SaaS & D2C brands</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₹1,80,000</span>
              <p className="text-sm text-slate-300 mt-2">One-time investment</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">5+ page website</p>
                  <p className="text-sm text-slate-400">Home, About, Services, Pricing, Contact</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Conversion optimization</p>
                  <p className="text-sm text-slate-400">Strategic CTA placement, lead capture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Advanced SEO</p>
                  <p className="text-sm text-slate-400">Keyword strategy, content optimization, schema</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Analytics integration</p>
                  <p className="text-sm text-slate-400">Google Analytics 4 + conversion tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">API integration</p>
                  <p className="text-sm text-slate-400">Connect to your existing tools</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Direct founder involvement</p>
                  <p className="text-sm text-slate-400">Strategy + delivery by Sachin</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-300 font-medium">Not included:</p>
                <ul className="text-sm text-slate-400 space-y-1 mt-2">
                  <li>• Custom backend systems</li>
                  <li>• Automation workflows</li>
                  <li>• Advanced integrations</li>
                </ul>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Start Growing <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>

          {/* Professional Plan */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
            <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
            <p className="text-slate-400 mb-6">For enterprise & complex systems</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₹2,40,000+</span>
              <p className="text-sm text-slate-400 mt-2">One-time investment</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Custom feature development</p>
                  <p className="text-sm text-slate-400">Dashboard, user accounts, CMS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Database + backend</p>
                  <p className="text-sm text-slate-400">Scalable infrastructure, API endpoints</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Advanced automation</p>
                  <p className="text-sm text-slate-400">Shopify + Tally + WhatsApp + custom workflows</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Multiple integrations</p>
                  <p className="text-sm text-slate-400">CRM, payment, shipping, accounting sync</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Performance audit</p>
                  <p className="text-sm text-slate-400">Load testing, optimization, security review</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Extended support</p>
                  <p className="text-sm text-slate-400">1 month post-launch assistance</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
              Let's Talk <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Optional Add-Ons</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-medium text-white mb-2">Monthly Maintenance</p>
              <p className="text-2xl font-bold text-blue-400">₹6,000</p>
              <p className="text-sm text-slate-400 mt-2">Updates, security, 2-hour support</p>
            </div>
            <div>
              <p className="font-medium text-white mb-2">Client Portal</p>
              <p className="text-2xl font-bold text-blue-400">₹40,000</p>
              <p className="text-sm text-slate-400 mt-2">Inventory + orders + invoices</p>
            </div>
            <div>
              <p className="font-medium text-white mb-2">WhatsApp + Tally Automation</p>
              <p className="text-2xl font-bold text-blue-400">₹30,000</p>
              <p className="text-sm text-slate-400 mt-2">Setup + first month included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ───
function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your D2C Brand?</h2>
        <p className="text-lg text-blue-100 mb-8">Get a free audit of your current website. We'll show you exactly where you're losing money.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white hover:bg-slate-100 text-blue-600 font-semibold px-8">
            Schedule Free Audit <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 px-8">
            View Pricing
          </Button>
        </div>
        <p className="text-sm text-blue-100 mt-6">No credit card required. 30-min call with Sachin.</p>
      </div>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={tilLogo} alt="The Ingredient List" className="h-8 mb-4" />
            <p className="text-slate-400 text-sm">Web design & D2C automation for Indian brands.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition">Shopify Automation</a></li>
              <li><a href="#" className="hover:text-white transition">Tally Integration</a></li>
              <li><a href="#" className="hover:text-white transition">Custom Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={16} />
                <a href="mailto:sachin@theingredientlist.co" className="hover:text-white transition">
                  sachin@theingredientlist.co
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone size={16} />
                <a href="tel:+917483992418" className="hover:text-white transition">
                  +91 7483 992 418
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-center gap-2">
                <a href="https://linkedin.com/company/threxa" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                  <Linkedin size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © 2026 The Ingredient List. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
            <p className="text-sm text-green-300">
              ✓ GST Registered (ARN: AA290526023261F) | ✓ 50+ Brands Trusted | ✓ Same-Day Support
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN COMPONENT ───
export default function Index() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <AnimationStyles />
      <Hero />
      <TrustBadges />
      <ROICalculator />
      <CaseStudies />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
