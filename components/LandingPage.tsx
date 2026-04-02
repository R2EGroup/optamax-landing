"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Brain,
  Shield,
  BarChart3,
  Layers,
  CheckCircle,
  XCircle,
  Zap,
  Menu,
  X,
  ArrowRight,
  Upload,
  Map,
  Play,
  TrendingUp,
  Globe,
  Factory,
  Fuel,
  FlaskConical,
  DollarSign,
  Clock,
  Award,
  Search,
  Eye,
  Tag,
  Fingerprint,
  FileText,
  FileSpreadsheet,
  Presentation,
  PenTool,
  Table2,
  ImageIcon,
  MessageSquare,
  Star,
  ArrowDown,
  ChevronDown,
  Settings,
  Lock,
  Database,
  ShieldAlert,
  UserCheck,
  Gauge,
  Siren,
} from "lucide-react";
import Refinery101Section from "./Refinery101Section";
import RefineryProcessSection from "./RefineryProcessSection";
import AIAgentsFlowSection from "./AIAgentsFlowSection";

/* ─────────────────────────── helpers ─────────────────────────── */

const NAV_LINKS = [
  { label: "How It Works", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Refinery 101", href: "#refinery-101" },
  { label: "Results", href: "#results" },
  { label: "Security", href: "#security" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/* ─────────────────────────── component ─────────────────────────── */

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Intersection Observer for scroll-reveal ── */
  useEffect(() => {
    const revealClasses = [
      "reveal",
      "reveal-left",
      "reveal-right",
      "reveal-scale",
      "reveal-stagger",
    ];
    const selector = revealClasses.map((c) => `.${c}`).join(",");
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Navbar scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy-900 overflow-x-hidden">
      {/* ── JSON-LD Structured Data for SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://r2egroup.com/#organization",
                name: "R2E Group",
                url: "https://r2egroup.com",
                logo: "https://r2egroup.com/wp-content/uploads/2022/08/2.png",
                description:
                  "R2E Group is a global energy advisory firm founded in 2005. Advisors average 25+ years of experience in oil & gas operations, strategy, consulting, and executive management.",
                foundingDate: "2005",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "2245 Texas Drive, Suite 300",
                  addressLocality: "Sugar Land",
                  addressRegion: "TX",
                  postalCode: "77479",
                  addressCountry: "US",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-281-220-1083",
                  email: "contact@r2egroup.com",
                  contactType: "sales",
                },
                sameAs: [
                  "https://www.linkedin.com/company/r2e-group",
                  "https://www.youtube.com/channel/UCva7Y_ARHlIULybCqdo3LJg",
                ],
              },
              {
                "@type": "SoftwareApplication",
                name: "R2E AI",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description:
                  "AI-powered decision intelligence platform for downstream refinery operations. Converts 20+ years of elite energy advisory expertise into on-demand operational intelligence.",
                url: "https://ai.r2egroup.com",
                provider: { "@id": "https://r2egroup.com/#organization" },
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Contact for enterprise pricing",
                },
              },
              {
                "@type": "WebSite",
                url: "https://ai.r2egroup.com",
                name: "R2E AI",
                publisher: { "@id": "https://r2egroup.com/#organization" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is R2E AI?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "R2E AI is the Refinery Operating System — an AI-powered decision intelligence platform that converts 20+ years of elite refinery advisory expertise into on-demand operational intelligence for downstream operations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does R2E AI improve refinery operations?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "R2E AI ingests unstructured refinery data, maps it to proven decision frameworks developed over decades, executes decisions with human-in-the-loop control, and continuously learns from live production outcomes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What results has R2E Group delivered?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "R2E Group has delivered billions in operational margin lift across clients, including $500M+/yr in manufacturing transformation, $300M+/yr in value chain transformation, and $200M+ in inventory optimization.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      {/* ================================================================
          NAVBAR
          ================================================================ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2"
          >
            <div className="h-10 flex items-center">
              <Image
                src="/r2e-group-logo.png"
                alt="R2E AI"
                width={100}
                height={58}
                priority
                className="h-10 w-auto object-contain"
              />
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href.slice(1))}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://ai.r2egroup.com/login"
              className="ml-2 px-5 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-colors"
            >
              Sign In
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-navy-950/95 backdrop-blur-md border-t border-white/10 px-6 pb-6 space-y-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => {
                  scrollTo(l.href.slice(1));
                  setMobileOpen(false);
                }}
                className="block w-full text-left text-white/80 hover:text-white py-2"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://ai.r2egroup.com/login"
              className="block w-full text-center px-5 py-3 rounded-lg bg-primary-500 text-white font-semibold"
            >
              Sign In
            </a>
          </div>
        )}
      </nav>

      {/* ================================================================
          HERO
          ================================================================ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center bg-navy-950 text-white overflow-hidden"
      >
        {/* Grid bg */}
        <div className="hero-grid absolute inset-0" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />

        {/* Glow orbs */}
        <div
          className="glow-orb w-[500px] h-[500px] bg-primary-500/20 -top-40 -right-40"
          style={{ position: "absolute" }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] bg-primary-400/15 bottom-20 -left-32"
          style={{ position: "absolute", animationDelay: "1.5s" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
          <div className="mb-8 flex justify-center">
            <Image
              src="/r2e-group-logo.png"
              alt="R2E"
              width={220}
              height={128}
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
            Resources 2 Energy
            <br />
            Operating System
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            AI-powered decision intelligence for downstream operations.
            Decades of elite energy advisory expertise, now available on demand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:contact@r2egroup.com"
              className="px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-lg transition-colors flex items-center gap-2"
            >
              Schedule a Demo <ArrowRight size={18} />
            </a>
            <a
              href="https://ai.r2egroup.com/login"
              className="px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/60 text-white font-semibold text-lg transition-colors"
            >
              Sign In
            </a>
          </div>

          {/* Stats */}
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "Billions", label: "In Margin Lift Delivered" },
              { value: "1,700+", label: "Years Combined Energy Experience" },
              { value: "50+", label: "Elite Industry Specialists" },
            ].map((s) => (
              <div
                key={s.label}
                className="landing-card-dark px-6 py-5 text-center"
              >
                <div className="stat-number text-3xl text-primary-400 mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TRUSTED BY — CLIENT LOGO CAROUSEL
          ================================================================ */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-navy-400 uppercase mb-8">
            Trusted by Leading Energy Companies
          </p>
          <div className="logo-carousel-wrapper">
            <div className="logo-carousel">
              {[
                { src: "/clients/delta.png", alt: "Delta" },
                { src: "/clients/andeavor.png", alt: "Andeavor" },
                { src: "/clients/hmel.png", alt: "HMEL" },
                { src: "/clients/knpc.png", alt: "KNPC" },
                { src: "/clients/husky-energy.png", alt: "Husky Energy" },
                { src: "/clients/citgo.png", alt: "Citgo" },
                { src: "/clients/delta.png", alt: "Delta" },
                { src: "/clients/andeavor.png", alt: "Andeavor" },
                { src: "/clients/hmel.png", alt: "HMEL" },
                { src: "/clients/knpc.png", alt: "KNPC" },
                { src: "/clients/husky-energy.png", alt: "Husky Energy" },
                { src: "/clients/citgo.png", alt: "Citgo" },
              ].map((logo, i) => (
                <div
                  key={`${logo.alt}-${i}`}
                  className="logo-carousel-item flex-shrink-0 flex items-center justify-center px-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS — HORIZONTAL 3-COLUMN FLOW
          ================================================================ */}
      <section id="platform" className="py-24 lg:py-40 bg-navy-900 text-white overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6">

          {/* Section header */}
          <div className="reveal text-center mb-16 lg:mb-24">
            <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">
              How It Works
            </p>
            <div className="section-divider mb-6" />
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-5">
              From Your Data to Margin Lift
            </h2>
            <p className="text-white/50 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
              Best-in-the-world energy system optimization, powered by decades
              of world-class data from real-world implementations.
            </p>
          </div>

          {/* ═══ 3-COLUMN HORIZONTAL LAYOUT (desktop) / VERTICAL STACK (mobile) ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr_auto_1fr] items-stretch gap-0">

            {/* ────── LEFT COLUMN: YOUR DATA ────── */}
            <div className="reveal-left flex flex-col items-center text-center lg:py-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-5">
                <Upload className="text-primary-400" size={16} />
                <span className="text-primary-400 text-xs font-bold uppercase tracking-widest">Data In</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Your Data</h3>
              <p className="text-white/50 text-sm mb-6">Your refinery archive, fully understood</p>

              <div className="grid grid-cols-2 gap-3 mb-6 w-full max-w-xs">
                {[
                  { Icon: FileText, label: "Reports & Studies" },
                  { Icon: Table2, label: "LP Models & Economics" },
                  { Icon: FileSpreadsheet, label: "Technical Documents" },
                  { Icon: Presentation, label: "Presentations" },
                  { Icon: FlaskConical, label: "Test Run & Lab Data" },
                  { Icon: ImageIcon, label: "Photos & Diagrams" },
                  { Icon: PenTool, label: "P&IDs & Process Flows" },
                ].map((item) => (
                  <div key={item.label} className="landing-card-dark px-3 py-3 text-center">
                    <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center mx-auto mb-2">
                      <item.Icon className="text-primary-400" size={18} />
                    </div>
                    <p className="text-white/60 text-xs font-medium leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="px-4 py-3 rounded-xl bg-navy-800/60 border border-primary-500/15 max-w-xs">
                <p className="text-primary-300/90 text-xs italic leading-relaxed">
                  &ldquo;All your data. Any source. Unstructured. Just as it is.
                  We use it all — something that was never possible before.&rdquo;
                </p>
              </div>
            </div>

            {/* ────── ARROW: Data In → AI Engine (desktop: horizontal, mobile: vertical) ────── */}
            <div className="hidden lg:flex flex-col items-center justify-center px-3">
              <div className="relative flex items-center">
                <div className="flow-arrow-h animate-flow-right w-16" />
                <div className="flow-arrow-h-head" />
                <span className="flow-arrow-h-label text-primary-400/60 text-[10px] font-bold uppercase tracking-widest">Data In</span>
              </div>
            </div>
            <div className="flex lg:hidden flex-col items-center my-4">
              <div className="flow-connector animate-flow-down" style={{ height: 50 }} />
              <div className="flow-connector-arrow" />
            </div>

            {/* ────── CENTER COLUMN: R2E AI ENGINE ────── */}
            <div className="reveal-scale relative">
              <div className="ai-engine-glow animate-border-glow relative overflow-hidden bg-navy-950/80 p-6 lg:p-10">

                {/* Animation Layer 1: Orbiting particles */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                  {[
                    { size: 4, delay: "0s", duration: "10s", opacity: 0.6 },
                    { size: 3, delay: "2s", duration: "14s", opacity: 0.4 },
                    { size: 5, delay: "4s", duration: "18s", opacity: 0.5 },
                    { size: 3, delay: "1s", duration: "12s", opacity: 0.3 },
                    { size: 4, delay: "6s", duration: "16s", opacity: 0.5 },
                    { size: 2, delay: "3s", duration: "20s", opacity: 0.3 },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="ai-engine-particle"
                      style={{
                        top: "50%",
                        left: "50%",
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        animation: `${i % 2 === 0 ? "orbit" : "orbitReverse"} ${p.duration} linear infinite`,
                        animationDelay: p.delay,
                      }}
                    />
                  ))}
                </div>

                {/* Animation Layer 2: Neural network grid dots */}
                <div className="neural-grid" aria-hidden="true">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="neural-dot animate-neuron-pulse"
                      style={{
                        left: `${5 + (i % 6) * 18}%`,
                        top: `${8 + Math.floor(i / 6) * 20}%`,
                        animationDelay: `${(i * 0.4) % 3}s`,
                        animationDuration: `${2.5 + (i % 3)}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Animation Layer 3: Vertical data stream lines */}
                {[15, 30, 50, 70, 85].map((left, i) => (
                  <div
                    key={i}
                    className="data-stream-line animate-data-stream"
                    style={{
                      left: `${left}%`,
                      opacity: 0.06 + (i % 3) * 0.03,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${2.5 + i * 0.3}s`,
                    }}
                    aria-hidden="true"
                  />
                ))}

                {/* R2E AI Title */}
                <div className="relative z-10 text-center mb-8">
                  <h3 className="text-5xl lg:text-7xl font-black gradient-text mb-2">
                    R2E AI
                  </h3>
                  <p className="text-primary-400/80 text-base lg:text-lg font-semibold tracking-wide">
                    Industry-Leading Refinery Intelligence
                  </p>
                </div>

                {/* Processing Pipeline with scan beam */}
                <div className="relative z-10 mb-8">
                  <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase text-center mb-4">
                    How We Process Your Data
                  </p>
                  <div className="relative">
                    <div className="scan-beam animate-scan-beam" aria-hidden="true" />
                    <div className="space-y-2">
                      {[
                        { Icon: Search, title: "Smart Text Extraction", desc: "Reads every page, table, formula, and image" },
                        { Icon: Eye, title: "AI Vision", desc: "Understands your engineering diagrams and P&IDs" },
                        { Icon: Layers, title: "Intelligent Chunking", desc: "Organizes documents into searchable knowledge" },
                        { Icon: Tag, title: "Auto-Tagging", desc: "Classifies every piece across 16 refinery categories" },
                        { Icon: Fingerprint, title: "Digital Fingerprinting", desc: "All your data secured in a world-class private database" },
                      ].map((step, i) => (
                        <div key={step.title} className="flex items-center gap-3 pipeline-step-glow rounded-lg p-3 hover:bg-white/[0.03] transition-all">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                            <step.Icon className="text-primary-400" size={18} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-white font-semibold text-sm">{step.title}</h4>
                            <p className="text-white/40 text-xs leading-snug">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The R2E Intelligence */}
                <div className="relative z-10">
                  <div className="landing-card-dark p-5">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                        <Brain className="text-primary-400" size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">The World&apos;s Deepest Refinery Intelligence</h4>
                        <p className="text-white/30 text-[10px] leading-snug">Your data, assessed against 20+ years of elite advisory expertise</p>
                      </div>
                    </div>
                    <ol className="space-y-1.5">
                      {[
                        "Ask anything about your data \u2014 instant answers from your entire document archive",
                        "Every answer benchmarked against world-leading refinery optimization expertise",
                        "Pinpoints what matters for your specific operation",
                        "Generates actionable recommendations tailored to your refinery",
                        "Surfaces hidden margin and efficiency opportunities others miss",
                      ].map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/40 text-xs leading-snug">
                          <span className="w-4 h-4 rounded-full bg-primary-500/15 text-primary-400 text-[10px] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* ────── ARROW: AI Engine → Decisions Out (desktop: horizontal, mobile: vertical) ────── */}
            <div className="hidden lg:flex flex-col items-center justify-center px-3">
              <div className="relative flex items-center">
                <div className="flow-arrow-h animate-flow-right w-16" />
                <div className="flow-arrow-h-head" />
                <span className="flow-arrow-h-label text-amber-400/60 text-[10px] font-bold uppercase tracking-widest">Decisions Out</span>
              </div>
            </div>
            <div className="flex lg:hidden flex-col items-center my-4">
              <div className="flow-connector animate-flow-down" style={{ height: 50 }} />
              <div className="flow-connector-arrow" />
            </div>

            {/* ────── RIGHT COLUMN: MARGIN LIFT DECISIONS ────── */}
            <div className="reveal-right flex flex-col items-center text-center lg:py-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-5">
                <TrendingUp className="text-amber-400" size={16} />
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Decisions Out</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Margin Lift Decisions</h3>
              <p className="text-white/50 text-sm mb-6">What you get back</p>

              {/* Benefits */}
              <div className="space-y-2 mb-6 w-full max-w-xs">
                {[
                  { Icon: CheckCircle, text: "Every fact cited to source documents" },
                  { Icon: Zap, text: "Proactive suggestions for deeper analysis" },
                  { Icon: Globe, text: "Cross-project comparisons and insights" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-2 text-left px-3 py-2 rounded-lg bg-navy-800/40">
                    <b.Icon className="text-amber-400 flex-shrink-0" size={14} />
                    <span className="text-white/55 text-xs">{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables grid */}
              <div className="grid grid-cols-2 gap-2 mb-5 w-full max-w-xs">
                {[
                  { title: "Assessment", gold: false },
                  { title: "Operational Diagnostic", gold: false },
                  { title: "Transformation Roadmap", gold: false },
                  { title: "Engagement Proposal", gold: false },
                  { title: "Margin Deep-Dive", gold: true },
                  { title: "LP Optimization", gold: true },
                ].map((d) => (
                  <div key={d.title} className={`px-3 py-2.5 rounded-xl text-center transition-all ${d.gold ? "gold-accent-card" : "landing-card-dark"}`}>
                    <div className="flex items-center justify-center gap-1">
                      {d.gold && <Star className="text-amber-400" size={12} fill="currentColor" />}
                      <span className={`text-xs font-semibold ${d.gold ? "text-amber-300" : "text-white/70"}`}>{d.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Margin Lift Callout */}
              <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 w-full max-w-xs text-left">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="text-amber-400" size={16} />
                  <span className="text-amber-300 font-bold text-xs">Margin Lift Outputs</span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Quantified $/bbl and $/year improvements",
                    "Quick wins vs. strategic investments",
                    "NPV-prioritized recommendations",
                    "Backed by your historical data",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-white/50 text-[11px]">
                      <CheckCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          CAPABILITIES
          ================================================================ */}
      <section id="capabilities" className="py-6 lg:py-8 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="reveal mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-400 mb-3">
              Capabilities
            </p>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Full Value Chain Intelligence
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-4">
              From crude selection to wholesale marketing — the same expertise
              R2E has deployed across hundreds of engagements, now available
              as an AI-powered platform.
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              {
                Icon: BarChart3,
                title: "Planning & Optimization",
                desc: "LP model reviews, constraint management, and production planning — 30+ model reviews conducted with 10-100x ROI on fees",
              },
              {
                Icon: DollarSign,
                title: "Gross Margin Improvement",
                desc: "End-to-end programs that identify and capture margin across feedstock selection, blending, and product placement",
              },
              {
                Icon: Fuel,
                title: "Feedstock Trading & Selection",
                desc: "Optimize crude purchases and feedstock economics with advanced scheduling and breakeven analysis",
              },
              {
                Icon: Layers,
                title: "Hydrocarbon Accounting",
                desc: "Loss control programs for 50+ refineries, petrochemical plants, and LNG facilities worldwide",
              },
              {
                Icon: Factory,
                title: "Operational Excellence",
                desc: "Routine maintenance diagnostics, staffing optimization, and performance management systems",
              },
              {
                Icon: FlaskConical,
                title: "Blending Optimization",
                desc: "Gasoline, diesel, and crude blending programs that consistently deliver 10-20x annual returns on fees",
              },
            ].map((item) => (
              <div key={item.title} className="landing-card-dark p-6 text-left">
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                  <item.Icon className="text-primary-400" size={22} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal max-w-2xl mx-auto">
            <p className="text-white/70 font-medium mb-2">
              Built on proprietary databases, methods, templates, and
              benchmarks developed across hundreds of client engagements.
            </p>
            <p className="text-white/45 italic">
              This is not theoretical knowledge. This is how refineries actually
              run.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          REFINERY 101 — DETAILED PROCESS DIAGRAM
          ================================================================ */}
      <Refinery101Section />

      {/* ================================================================
          PETROLEUM VALUE CHAIN — HORIZONTAL FLOW
          ================================================================ */}
      <RefineryProcessSection />

      {/* ================================================================
          AI AGENTS FLOW — ORCHESTRATION VISUALIZATION
          ================================================================ */}
      <AIAgentsFlowSection />

      {/* ================================================================
          ENTERPRISE SECURITY
          ================================================================ */}
      <section id="security" className="py-20 lg:py-28 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="reveal text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-400 mb-3">
              Enterprise Security
            </p>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5">
              Your Proprietary Data.
              <br />
              Fortress-Level Protection.
            </h2>
            <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
              Energy companies trust us with their most sensitive operational
              data. We protect it with fully isolated databases, world-class
              encryption, and an automated threat response system that locks
              down your environment in seconds&nbsp;&mdash; not hours.
            </p>
          </div>

          {/* Primary Feature Cards */}
          <div className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                Icon: Database,
                title: "Your Data. Your Database. Completely Isolated.",
                desc: "Every client\u2019s data lives in its own fully isolated, private database. No shared storage, no co-mingled records, no cross-client exposure \u2014 ever. Your proprietary operational intelligence is walled off at every layer.",
              },
              {
                Icon: Lock,
                title: "World-Class Encryption, End to End",
                desc: "Industry-leading encryption protects your data at rest and in flight. Encryption keys rotate automatically, managed in dedicated hardware-backed vaults. From the moment your data enters the platform to the moment it reaches your screen \u2014 it\u2019s locked down.",
              },
              {
                Icon: ShieldAlert,
                title: "Automated Threat Detection & Instant Lockdown",
                desc: "Our always-on security engine watches for threats around the clock across multiple attack vectors. If something looks wrong, the entire environment locks down in seconds \u2014 storage, database, and all active sessions sealed simultaneously.",
              },
            ].map((item) => (
              <div key={item.title} className="landing-card-dark p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto mb-5">
                  <item.Icon className="text-primary-400" size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary Detail Cards */}
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              {
                Icon: Fingerprint,
                title: "Zero-Trust Architecture",
                desc: "Every request verified. Every action authorized. Every session validated. Nothing is implicitly trusted.",
              },
              {
                Icon: Shield,
                title: "Proprietary Data Vault",
                desc: "Your documents are stored in a secure vault accessible only through controlled, audited channels with real-time exfiltration monitoring.",
              },
              {
                Icon: Eye,
                title: "Complete Audit Trail",
                desc: "Every search, every view, every download \u2014 logged and timestamped. Full forensic traceability with tamper-proof record keeping.",
              },
              {
                Icon: UserCheck,
                title: "Invitation-Only Access",
                desc: "No public sign-up page. Every user is vetted and invited by your administrator. Privileged operations require multi-factor authentication.",
              },
              {
                Icon: Gauge,
                title: "Adaptive Abuse Prevention",
                desc: "Intelligent rate controls detect and block abnormal activity patterns while keeping your team\u2019s legitimate workflows running at full speed.",
              },
              {
                Icon: Siren,
                title: "Rapid Incident Response",
                desc: "Automated containment with multi-channel admin alerting. Structured recovery runbooks ensure your team is back online fast, every time.",
              },
            ].map((item) => (
              <div key={item.title} className="landing-card-dark p-5 text-left">
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                  <item.Icon className="text-primary-400" size={22} />
                </div>
                <h3 className="text-white font-semibold text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Strip */}
          <div className="reveal flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "End-to-End Encrypted",
              "Isolated Per-Client Databases",
              "Real-Time Threat Monitoring",
              "Instant Automated Lockdown",
              "Full Audit Trail",
            ].map((badge, i) => (
              <span key={badge} className="flex items-center gap-2 text-primary-400 text-sm font-semibold">
                {i > 0 && <span className="text-white/20">&bull;</span>}
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CHALLENGES & SOLUTIONS
          ================================================================ */}
      <section id="challenges" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-500 mb-3">
              The Challenge
            </p>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900">
              Sound Familiar?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pain points */}
            <div className="reveal-left">
              <h3 className="text-lg font-semibold text-navy-900 mb-1">
                Today&rsquo;s Reality
              </h3>
              <div className="w-12 h-0.5 bg-red-400 mb-6" />
              <div className="space-y-4">
                {[
                  "Legacy planning tools that can't keep up with operations",
                  "Critical knowledge trapped in spreadsheets and email chains",
                  "Weeks-long studies to answer urgent optimization questions",
                  "No safe way to bring AI into production environments",
                ].map((pain) => (
                  <div
                    key={pain}
                    className="flex items-start gap-3 p-4 rounded-xl border border-red-100 bg-red-50/50"
                  >
                    <XCircle
                      className="text-red-400 shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-navy-700">{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* R2E delivers */}
            <div className="reveal-right">
              <h3 className="text-lg font-semibold text-navy-900 mb-1">
                With R2E AI
              </h3>
              <div className="w-12 h-0.5 bg-primary-500 mb-6" />
              <div className="space-y-4">
                {[
                  "Decision-grade answers in minutes, not weeks",
                  "All your operational knowledge unified and searchable",
                  "AI recommendations grounded in proven refinery frameworks",
                  "Human-in-the-loop control at every step -- safe by design",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 p-4 rounded-xl border border-primary-100 bg-primary-50/50"
                  >
                    <CheckCircle
                      className="text-primary-500 shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-navy-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          IMPACT BY THE NUMBERS
          ================================================================ */}
      <section id="impact" className="py-20 lg:py-28 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="reveal mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-400 mb-3">
              Impact
            </p>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              By the Numbers
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              { value: "Billions", label: "In Margin Lift Delivered" },
              { value: "1,700+", label: "Years Combined Experience" },
              { value: "Hundreds", label: "Hydrocarbon Accounting Programs" },
              { value: "Hundreds", label: "LP Model Reviews Conducted" },
            ].map((s) => (
              <div key={s.label} className="landing-card-dark p-6 text-center">
                <div className="gradient-text text-3xl lg:text-4xl font-black mb-2">
                  {s.value}
                </div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="reveal text-white/30 text-sm italic">
            Results measured from actual production outcomes across clients in
            the Americas, Europe, Middle East, and Asia.
          </p>
        </div>
      </section>

      {/* ================================================================
          CASE STUDY — RESULTS
          ================================================================ */}
      <section id="results" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-500 mb-3">
              Proven Track Record
            </p>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900">
              Real Results from Real Operations
            </h2>
            <p className="text-navy-500 max-w-2xl mx-auto mt-4">
              Our success stories span every segment of the hydrocarbon value
              chain, with measurable outcomes delivered to some of the world&rsquo;s
              largest energy companies.
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                value: "$500M+/yr",
                title: "Manufacturing Transformation",
                desc: "Gross margin improvement roadmap for a major integrated oil company — identifying and capturing opportunities across feedstock, blending, and constraint management.",
              },
              {
                value: "$300M+/yr",
                title: "Value Chain Transformation",
                desc: "Multi-year program transforming a downstream business from wellhead to wholesale marketing, including planning, trading, risk management, and performance monitoring.",
              },
              {
                value: "$200M+",
                title: "Inventory Optimization",
                desc: "One-time hydrocarbon working capital reduction for a North American integrated oil company, with ongoing annual benefits from reduced price exposure.",
              },
              {
                value: "$100M+/yr",
                title: "Feedstock Trading & Selection",
                desc: "Benchmarking study and process improvement for crude oil trading practices, delivering material improvement in feedstock economics.",
              },
              {
                value: "$50M+/yr",
                title: "Middle East Value Chain",
                desc: "Created and stood up a value chain optimization group across three Middle Eastern refineries, improving crude purchasing and product sales decisions.",
              },
              {
                value: "$50M+/yr",
                title: "Maintenance Cost Reduction",
                desc: "Diagnostic of routine maintenance practices at a major refinery, delivering a two-year roadmap that captured significant annual savings.",
              },
            ].map((story) => (
              <div key={story.title} className="landing-card p-6 border-t-2 border-primary-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="gradient-text text-2xl font-black mb-2">
                  {story.value}
                </div>
                <h3 className="font-semibold text-navy-900 text-lg mb-2">
                  {story.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {story.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal text-center">
            <p className="text-navy-500 text-sm italic">
              LP model reviews alone consistently generate 10-100x fees in
              identified benefits with specific, actionable recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHAT R2E IS — ABOUT
          ================================================================ */}
      <section id="about" className="py-20 lg:py-28 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <div className="reveal-left">
              <p className="text-xs font-bold tracking-widest uppercase text-primary-400 mb-3">
                About R2E
              </p>
              <div className="section-divider mb-8 !mx-0" />
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                From Elite Advisory to AI-Powered Operations
              </h2>
              <p className="text-white/60 mb-4 leading-relaxed">
                Founded in 2005, R2E Group has spent two decades helping the
                world&rsquo;s largest energy and petrochemical companies optimize
                every link in the hydrocarbon value chain — from wellhead to
                wholesale marketing.
              </p>
              <p className="text-white/60 mb-6 leading-relaxed">
                Now, R2E AI converts that proven expertise into a decision
                intelligence platform deployed directly into live refinery
                operations. Our advisors average 25+ years of hands-on
                experience in oil &amp; gas operations, strategy, and executive
                management — and their knowledge is embedded in every
                recommendation the platform delivers.
              </p>
              <blockquote className="border-l-4 border-primary-500 pl-5 text-white/70 italic text-lg">
                &ldquo;R2E has delivered billions in operational margin lift
                across clients worldwide. We operate where small decisions move
                hundreds of millions of dollars.&rdquo;
              </blockquote>
            </div>

            {/* Right — 2×2 icon grid */}
            <div className="reveal-right">
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    Icon: Brain,
                    title: "Decision Intelligence",
                    desc: "AI grounded in decades of real refinery decision-making",
                  },
                  {
                    Icon: Globe,
                    title: "Global Reach",
                    desc: "Offices in the Americas, Europe, and Asia serving clients worldwide",
                  },
                  {
                    Icon: Award,
                    title: "25+ Year Avg Experience",
                    desc: "Advisors who have walked in your shoes at the highest levels",
                  },
                  {
                    Icon: Shield,
                    title: "Production-Grade",
                    desc: "Human-in-the-loop control on every recommendation",
                  },
                ].map((item) => (
                  <div key={item.title} className="landing-card-dark p-5">
                    <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <item.Icon className="text-primary-400" size={22} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/45 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY R2E
          ================================================================ */}
      <section id="why" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-500 mb-3">
              Why R2E
            </p>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900">
              Why Energy Companies Choose R2E
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-14">
            <div className="reveal-stagger space-y-3">
              {[
                {
                  Icon: Award,
                  title: "Advisors who average 25+ years walking in your shoes",
                },
                {
                  Icon: Clock,
                  title: "Uncommon results, fast — not months of scoping, immediate value",
                },
                {
                  Icon: Globe,
                  title: "Global reach with offices in the Americas, Europe, and Asia",
                },
                {
                  Icon: Zap,
                  title: "Right professionals, right time — discreet, effective delivery",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-5 p-5 rounded-xl hover:bg-gray-50 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <item.Icon className="text-navy-700" size={28} />
                  </div>
                  <p className="font-medium text-navy-800 text-lg">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="reveal max-w-3xl mx-auto border-l-4 border-primary-500 pl-6">
            <p className="text-lg text-navy-700 italic leading-relaxed">
              &ldquo;R2E Group helps clients achieve uncommon results — fast.
              Our unique delivery model brings just the right professionals to
              you at the right time, working discreetly and effectively with
              your team.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ================================================================
          ENTERPRISE SECURITY
          ================================================================ */}
      <section id="security" className="py-20 lg:py-28 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="reveal text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-400 mb-3">
              Enterprise Security
            </p>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5">
              Your Proprietary Data.
              <br />
              Fortress-Level Protection.
            </h2>
            <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
              Energy companies trust us with their most sensitive operational
              data. We protect it with fully isolated databases, world-class
              encryption, and an automated threat response system that locks
              down your environment in seconds&nbsp;&mdash; not hours.
            </p>
          </div>

          {/* Primary Feature Cards — Big 3 */}
          <div className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                Icon: Database,
                title: "Your Data. Your Database. Completely Isolated.",
                desc: "Every client\u2019s data lives in its own fully isolated, private database. No shared storage, no co-mingled records, no cross-client exposure \u2014 ever. Your proprietary operational intelligence is walled off at every layer.",
              },
              {
                Icon: Lock,
                title: "World-Class Encryption, End to End",
                desc: "Industry-leading encryption protects your data at rest and in flight. Encryption keys rotate automatically, managed in dedicated hardware-backed vaults. From the moment your data enters the platform to the moment it reaches your screen \u2014 it\u2019s locked down.",
              },
              {
                Icon: ShieldAlert,
                title: "Automated Threat Detection & Instant Lockdown",
                desc: "Our always-on security engine watches for threats around the clock across multiple attack vectors. If something looks wrong, the entire environment locks down in seconds \u2014 storage, database, and all active sessions sealed simultaneously.",
              },
            ].map((item) => (
              <div key={item.title} className="landing-card-dark p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto mb-5">
                  <item.Icon className="text-primary-400" size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary Detail Cards — 6 Pillars */}
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              {
                Icon: Fingerprint,
                title: "Zero-Trust Architecture",
                desc: "Every request verified. Every action authorized. Every session validated. Nothing is implicitly trusted.",
              },
              {
                Icon: Shield,
                title: "Proprietary Data Vault",
                desc: "Your documents are stored in a secure vault accessible only through controlled, audited channels with real-time exfiltration monitoring.",
              },
              {
                Icon: Eye,
                title: "Complete Audit Trail",
                desc: "Every search, every view, every download \u2014 logged and timestamped. Full forensic traceability with tamper-proof record keeping.",
              },
              {
                Icon: UserCheck,
                title: "Invitation-Only Access",
                desc: "No public sign-up page. Every user is vetted and invited by your administrator. Privileged operations require multi-factor authentication.",
              },
              {
                Icon: Gauge,
                title: "Adaptive Abuse Prevention",
                desc: "Intelligent rate controls detect and block abnormal activity patterns while keeping your team\u2019s legitimate workflows running at full speed.",
              },
              {
                Icon: Siren,
                title: "Rapid Incident Response",
                desc: "Automated containment with multi-channel admin alerting. Structured recovery runbooks ensure your team is back online fast, every time.",
              },
            ].map((item) => (
              <div key={item.title} className="landing-card-dark p-5 text-left">
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                  <item.Icon className="text-primary-400" size={22} />
                </div>
                <h3 className="text-white font-semibold text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Strip */}
          <div className="reveal flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "End-to-End Encrypted",
              "Isolated Per-Client Databases",
              "Real-Time Threat Monitoring",
              "Instant Automated Lockdown",
              "Full Audit Trail",
            ].map((badge, i) => (
              <span key={badge} className="flex items-center gap-2 text-primary-400 text-sm font-semibold">
                {i > 0 && <span className="text-white/20">&bull;</span>}
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER CTA + FOOTER
          ================================================================ */}
      <section id="contact" className="bg-navy-950 text-white">
        {/* CTA */}
        <div className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="reveal">
              <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-6">
                Ready to Get Started?
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
                Stop guessing. Start operating
                <br className="hidden sm:block" /> with decision-grade intelligence.
              </h2>
              <p className="text-white/50 max-w-xl mx-auto mb-10">
                See how R2E AI can transform your refinery&rsquo;s planning,
                optimization, and day-to-day decision-making.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@r2egroup.com"
                  className="px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-lg transition-colors flex items-center gap-2"
                >
                  Schedule a Demo <ArrowRight size={18} />
                </a>
                <a
                  href="https://ai.r2egroup.com/login"
                  className="px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/60 text-white font-semibold text-lg transition-colors"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-white/40">
              <div>
                <p className="text-white/60 font-medium mb-1">R2E Group</p>
                <p>2245 Texas Drive, Suite 300</p>
                <p>Sugar Land, Texas 77479</p>
                <p className="mt-1">
                  <a href="tel:+12812201083" className="hover:text-white/70 transition-colors">
                    +1.281.220.1083
                  </a>
                  {" "}|{" "}
                  <a href="mailto:contact@r2egroup.com" className="hover:text-white/70 transition-colors">
                    contact@r2egroup.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <a href="https://r2egroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                  r2egroup.com
                </a>
                <a href="#" className="hover:text-white/70 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white/70 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 text-xs text-white/30">
              &copy; 2026 R2E Group. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
