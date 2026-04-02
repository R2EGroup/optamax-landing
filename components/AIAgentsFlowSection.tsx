"use client";

import { useEffect, useRef, useState } from "react";

const DATA_SOURCES = [
  { id: "etrm", label: "ETRM", sublabel: "Trading & Risk", color: "#f59e0b" },
  { id: "sales", label: "Sales", sublabel: "Forecasting", color: "#f97316" },
  { id: "planning", label: "Planning", sublabel: "Value Chain", color: "#ef4444" },
  { id: "pricing", label: "Pricing", sublabel: "Analytics", color: "#8b5cf6" },
  { id: "accounting", label: "Accounting", sublabel: "Finance", color: "#3b82f6" },
  { id: "operations", label: "Operations", sublabel: "Refinery", color: "#10b981" },
];

const AI_AGENTS = [
  { id: "supply", label: "Supply", color: "#b45309" },
  { id: "refinery", label: "Refinery", color: "#f97316" },
  { id: "blending", label: "Blending", color: "#10b981" },
  { id: "distribution", label: "Distribution", color: "#14b8a6" },
];

const DECISION_OUTPUTS = [
  { id: "margin", label: "Margin Optimization", value: "Maximize Value", color: "#22c55e" },
  { id: "schedule", label: "Schedule Optimization", value: "Faster Cycles", color: "#3b82f6" },
  { id: "quality", label: "Quality Assurance", value: "On-Spec Product", color: "#8b5cf6" },
  { id: "logistics", label: "Logistics Efficiency", value: "Reduced Costs", color: "#14b8a6" },
];

export default function AIAgentsFlowSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          let phase = 0;
          const id = setInterval(() => {
            phase++;
            setAnimationPhase(phase);
            if (phase >= 4) clearInterval(id);
          }, 600);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const show = (phase: number) => animationPhase >= phase;

  return (
    <section id="ai-agents" ref={sectionRef} className="relative py-24 lg:py-32 bg-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/[0.03] rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">Agentic AI</p>
          <div className="section-divider mb-6" />
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Intelligence at Every Stage</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Specialized AI agents work in concert — analyzing data, optimizing decisions, and accelerating insights across your entire value chain.
          </p>
        </div>

        {/* Desktop: Clean SVG Diagram */}
        <div className="hidden lg:block">
          <div className="relative mx-auto" style={{ maxWidth: 1000 }}>
            <svg viewBox="0 0 1000 500" className="w-full h-auto" role="img" aria-label="AI agents orchestrating petroleum value chain">
              <defs>
                <filter id="aaf-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="aaf-glowStrong">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="aaf-glow12">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="brain-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5B9A8B" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="flow-down" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#5B9A8B" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="flow-up" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#5B9A8B" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="aaf-scanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5B9A8B" stopOpacity="0" />
                  <stop offset="30%" stopColor="#5B9A8B" stopOpacity="0.12" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="70%" stopColor="#5B9A8B" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#5B9A8B" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* ═══ ATMOSPHERIC BACKGROUND DOTS ═══ */}
              <g aria-hidden="true">
                {Array.from({ length: 24 }).map((_, i) => {
                  const dotX = 60 + (i % 8) * 125;
                  const dotY = 30 + Math.floor(i / 8) * 200;
                  return (
                    <circle key={`bg-${i}`} cx={dotX} cy={dotY} r="1.5" fill="#5B9A8B" opacity="0.06">
                      <animate attributeName="opacity" values="0.03;0.12;0.03" dur={`${3 + (i % 5) * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.25}s`} />
                      <animate attributeName="r" values="1;2.5;1" dur={`${3 + (i % 5) * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.25}s`} />
                    </circle>
                  );
                })}
              </g>

              {/* ═══ VERTICAL SCAN BEAM ═══ */}
              <rect x={0} width="1000" height="50" fill="url(#aaf-scanGrad)" rx="4">
                <animateMotion dur="8s" repeatCount="indefinite" path="M 0,-50 L 0,550" />
              </rect>

              {/* ═══ ROW 1: DATA SOURCES ═══ */}
              <g className={`transition-all duration-700 ${show(1) ? "opacity-100" : "opacity-0"}`}>
                <text x={500} y={20} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity="0.35" letterSpacing="0.15em">
                  DATA SOURCES
                </text>
                {DATA_SOURCES.map((source, i) => {
                  const x = 100 + i * 160;
                  const y = 55;
                  const isHovered = hoveredId === source.id;
                  return (
                    <g key={source.id}
                      style={{ transform: show(1) ? "translateY(0)" : "translateY(-15px)", opacity: show(1) ? 1 : 0, transition: `all 0.6s ease ${i * 0.1}s` }}
                      onMouseEnter={() => setHoveredId(source.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="cursor-pointer">
                      <rect x={x - 60} y={y - 22} width={120} height={44} rx={6}
                        fill="rgba(15,23,42,0.7)"
                        stroke={source.color}
                        strokeWidth={isHovered ? 2 : 1}
                        strokeOpacity={isHovered ? 0.8 : 0.4}
                        filter={isHovered ? "url(#aaf-glowStrong)" : undefined}
                        className="transition-all duration-300" />
                      {isHovered && (
                        <rect x={x - 60} y={y - 22} width={120} height={44} rx={6} fill={source.color} fillOpacity="0.05" />
                      )}
                      <text x={x} y={y - 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="600" opacity={isHovered ? 1 : 0.85}>{source.label}</text>
                      <text x={x} y={y + 12} textAnchor="middle" fill={source.color} fontSize="9" opacity={isHovered ? 0.9 : 0.7}>{source.sublabel}</text>
                    </g>
                  );
                })}
              </g>

              {/* ═══ FLOW LINES: DATA SOURCES → BRAIN (3-layer pipes) ═══ */}
              <g className={`transition-all duration-700 ${show(1) ? "opacity-100" : "opacity-0"}`}>
                {DATA_SOURCES.map((source, i) => {
                  const x = 100 + i * 160;
                  const flowPath = `M ${x},77 L ${x},120 L 500,170`;
                  return (
                    <g key={`flow-${source.id}`}>
                      <line x1={x} y1={77} x2={x} y2={120} stroke={source.color} strokeWidth="4" strokeOpacity="0.06" strokeLinecap="round" />
                      <line x1={x} y1={77} x2={x} y2={120} stroke={source.color} strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
                      <line x1={x} y1={77} x2={x} y2={120} stroke={source.color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 6" className="refinery-pipe" style={{ animationDelay: `${i * 0.15}s` }} />
                      <line x1={x} y1={120} x2={500} y2={170} stroke={source.color} strokeWidth="4" strokeOpacity="0.06" strokeLinecap="round" />
                      <line x1={x} y1={120} x2={500} y2={170} stroke="url(#flow-down)" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
                      <line x1={x} y1={120} x2={500} y2={170} stroke="url(#flow-down)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 8" className="refinery-pipe" style={{ animationDelay: `${i * 0.2}s` }} />
                      {[0, 1, 2].map(j => (
                        <circle key={j} r={j === 0 ? 2.5 : 1.5} fill={source.color} opacity={j === 0 ? 0.7 : 0.3} filter={j === 0 ? undefined : "url(#aaf-glow)"}>
                          <animateMotion dur={`${4 + i * 0.3 + j * 0.7}s`} repeatCount="indefinite" begin={`${i * 0.5 + j * 0.9}s`} path={flowPath} />
                        </circle>
                      ))}
                    </g>
                  );
                })}
              </g>

              {/* ═══ ROW 2: CENTRAL AI BRAIN ═══ */}
              <g className={`transition-all duration-700 ${show(2) ? "opacity-100" : "opacity-0"}`}>
                {/* Outer pulse ring */}
                <circle cx={500} cy={220} r={70} fill="none" stroke="url(#brain-gradient)" strokeWidth="0.5" strokeOpacity="0.06">
                  <animate attributeName="r" values="70;85;70" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="strokeOpacity" values="0.06;0;0.06" dur="6s" repeatCount="indefinite" />
                </circle>
                {/* Inner pulse ring */}
                <circle cx={500} cy={220} r={55} fill="none" stroke="url(#brain-gradient)" strokeWidth="1" strokeOpacity="0.15">
                  <animate attributeName="r" values="55;70;55" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="strokeOpacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Main brain circle */}
                <circle cx={500} cy={220} r={48} fill="rgba(15,23,42,0.9)" stroke="url(#brain-gradient)" strokeWidth="2" filter="url(#aaf-glow)" />

                {/* Neural cross-connections */}
                {[0, 1, 2].map(i => {
                  const a1 = (i * 60 - 90) * Math.PI / 180;
                  const a2 = ((i + 3) * 60 - 90) * Math.PI / 180;
                  const x1 = 500 + Math.cos(a1) * 28;
                  const y1 = 220 + Math.sin(a1) * 28;
                  const x2 = 500 + Math.cos(a2) * 28;
                  const y2 = 220 + Math.sin(a2) * 28;
                  return (
                    <line key={`cross-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5B9A8B" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="2 3">
                      <animate attributeName="strokeOpacity" values="0.06;0.18;0.06" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                    </line>
                  );
                })}

                {/* Neural pattern - 6 nodes */}
                {[0, 1, 2, 3, 4, 5].map(i => {
                  const angle = (i * 60 - 90) * Math.PI / 180;
                  const x = 500 + Math.cos(angle) * 28;
                  const y = 220 + Math.sin(angle) * 28;
                  return (
                    <g key={i}>
                      <line x1={500} y1={220} x2={x} y2={y} stroke="#5B9A8B" strokeWidth="1" strokeOpacity="0.3" />
                      <circle cx={x} cy={y} r="3" fill="#5B9A8B" opacity="0.5">
                        <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  );
                })}

                {/* Center core */}
                <circle cx={500} cy={220} r="6" fill="url(#brain-gradient)" opacity="0.7">
                  <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Brain label */}
                <text x={500} y={216} textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Optamax</text>
                <text x={500} y={230} textAnchor="middle" fill="#5B9A8B" fontSize="8" fontWeight="600">ORCHESTRATOR</text>
              </g>

              {/* ═══ FLOW LINES: BRAIN → AGENTS (3-layer pipes) ═══ */}
              <g className={`transition-all duration-700 ${show(2) ? "opacity-100" : "opacity-0"}`}>
                {AI_AGENTS.map((agent, i) => {
                  const agentX = 275 + i * 150;
                  const flowPath = `M 500,268 L ${agentX},286`;
                  return (
                    <g key={`brain-to-agent-${agent.id}`}>
                      <line x1={500} y1={268} x2={agentX} y2={286} stroke={agent.color} strokeWidth="4" strokeOpacity="0.06" strokeLinecap="round" />
                      <line x1={500} y1={268} x2={agentX} y2={286} stroke={agent.color} strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />
                      <line x1={500} y1={268} x2={agentX} y2={286} stroke={agent.color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 6" className="refinery-pipe" style={{ animationDelay: `${i * 0.2}s` }} />
                      {[0, 1, 2].map(j => (
                        <circle key={j} r={j === 0 ? 2.5 : 1.5} fill={agent.color} opacity={j === 0 ? 0.7 : 0.3} filter={j === 0 ? undefined : "url(#aaf-glow)"}>
                          <animateMotion dur={`${2.5 + i * 0.2 + j * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.4 + j * 0.6}s`} path={flowPath} />
                        </circle>
                      ))}
                    </g>
                  );
                })}
              </g>

              {/* ═══ AGENT BADGES (Below Brain) ═══ */}
              <g className={`transition-all duration-700 ${show(2) ? "opacity-100" : "opacity-0"}`}>
                {AI_AGENTS.map((agent, i) => {
                  const x = 275 + i * 150;
                  const y = 300;
                  const isHovered = hoveredId === `agent-${agent.id}`;
                  return (
                    <g key={agent.id}
                      style={{ transform: show(2) ? "translateY(0)" : "translateY(10px)", opacity: show(2) ? 1 : 0, transition: `all 0.5s ease ${0.3 + i * 0.12}s` }}
                      onMouseEnter={() => setHoveredId(`agent-${agent.id}`)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="cursor-pointer">
                      {isHovered && (
                        <rect x={x - 52} y={y - 16} width={104} height={32} rx={16} fill="none" stroke={agent.color} strokeWidth="1" strokeOpacity="0.3">
                          <animate attributeName="strokeOpacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                        </rect>
                      )}
                      <rect x={x - 50} y={y - 14} width={100} height={28} rx={14}
                        fill="rgba(15,23,42,0.8)"
                        stroke={agent.color}
                        strokeWidth={isHovered ? 1.5 : 1}
                        strokeOpacity={isHovered ? 0.8 : 0.5}
                        filter={isHovered ? "url(#aaf-glowStrong)" : undefined}
                        className="transition-all duration-300" />
                      <circle cx={x - 32} cy={y} r="4" fill={agent.color} opacity="0.6">
                        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                      </circle>
                      <text x={x + 5} y={y + 4} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity={isHovered ? 1 : 0.85}>{agent.label}</text>
                    </g>
                  );
                })}
              </g>

              {/* ═══ FLOW LINES: AGENTS → OUTPUTS (3-layer pipes) ═══ */}
              <g className={`transition-all duration-700 ${show(3) ? "opacity-100" : "opacity-0"}`}>
                {AI_AGENTS.map((agent, i) => {
                  const agentX = 275 + i * 150;
                  const outputX = 175 + i * 220;
                  const flowPath = `M ${agentX},314 L ${outputX},410`;
                  return (
                    <g key={`agent-to-output-${agent.id}`}>
                      <line x1={agentX} y1={314} x2={outputX} y2={410} stroke={agent.color} strokeWidth="4" strokeOpacity="0.06" strokeLinecap="round" />
                      <line x1={agentX} y1={314} x2={outputX} y2={410} stroke={agent.color} strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
                      <line x1={agentX} y1={314} x2={outputX} y2={410} stroke={agent.color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 8" className="refinery-pipe" style={{ animationDelay: `${i * 0.2}s` }} />
                      {[0, 1, 2].map(j => (
                        <circle key={j} r={j === 0 ? 2.5 : 1.5} fill={agent.color} opacity={j === 0 ? 0.7 : 0.3} filter={j === 0 ? undefined : "url(#aaf-glow)"}>
                          <animateMotion dur={`${4 + i * 0.3 + j * 0.6}s`} repeatCount="indefinite" begin={`${i * 0.5 + j * 0.8}s`} path={flowPath} />
                        </circle>
                      ))}
                    </g>
                  );
                })}
              </g>

              {/* ═══ ROW 3: DECISION OUTPUTS ═══ */}
              <g className={`transition-all duration-700 ${show(4) ? "opacity-100" : "opacity-0"}`}>
                <text x={500} y={375} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity="0.35" letterSpacing="0.15em">
                  DECISION OUTPUTS
                </text>
                {DECISION_OUTPUTS.map((output, i) => {
                  const x = 175 + i * 220;
                  const y = 440;
                  const isHovered = hoveredId === `output-${output.id}`;
                  return (
                    <g key={output.id}
                      style={{ transform: show(4) ? "translateY(0)" : "translateY(15px)", opacity: show(4) ? 1 : 0, transition: `all 0.6s ease ${i * 0.12}s` }}
                      onMouseEnter={() => setHoveredId(`output-${output.id}`)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="cursor-pointer">
                      <rect x={x - 90} y={y - 30} width={180} height={60} rx={8}
                        fill="rgba(15,23,42,0.7)"
                        stroke={output.color}
                        strokeWidth={isHovered ? 1.5 : 1}
                        strokeOpacity={isHovered ? 0.7 : 0.35}
                        filter={isHovered ? "url(#aaf-glowStrong)" : undefined}
                        className="transition-all duration-300" />
                      {isHovered && (
                        <rect x={x - 90} y={y - 30} width={180} height={60} rx={8} fill={output.color} fillOpacity="0.04" />
                      )}
                      <circle cx={x - 60} cy={y} r="16" fill={output.color} opacity={isHovered ? 0.15 : 0.1}>
                        {isHovered && <animate attributeName="r" values="16;19;16" dur="2s" repeatCount="indefinite" />}
                      </circle>
                      <text x={x - 60} y={y + 4} textAnchor="middle" fill={output.color} fontSize="12" fontWeight="700">
                        {output.id === "margin" ? "$" : output.id === "schedule" ? "\u26A1" : output.id === "quality" ? "\u2713" : "\u2192"}
                      </text>
                      <text x={x + 15} y={y - 6} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity={isHovered ? 1 : 0.85}>{output.label}</text>
                      <text x={x + 15} y={y + 12} textAnchor="middle" fill={output.color} fontSize="12" fontWeight="700">{output.value}</text>
                    </g>
                  );
                })}
              </g>

            </svg>
          </div>
        </div>

        {/* Mobile: Card-based layout */}
        <div className="lg:hidden space-y-10">
          {/* Data Sources */}
          <div className={`reveal transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h4 className="text-xs font-semibold tracking-widest text-amber-400/60 uppercase mb-4 text-center">Data Sources</h4>
            <div className="grid grid-cols-3 gap-2">
              {DATA_SOURCES.map((source) => (
                <div key={source.id} className="p-3 rounded-lg bg-navy-800/50 border border-white/5 text-center">
                  <div className="text-xs font-semibold text-white/80">{source.label}</div>
                  <div className="text-[10px] text-white/40">{source.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Brain */}
          <div className={`reveal text-center transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.2s" }}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-800 border-2 border-primary-500/30 relative">
              <div className="absolute inset-0 rounded-full border border-primary-500/15 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="text-center">
                <div className="text-sm font-bold text-white">Optamax</div>
                <div className="text-[9px] text-primary-400">Orchestrator</div>
              </div>
            </div>
            <div className="mt-5 flex justify-center gap-2 flex-wrap">
              {AI_AGENTS.map((agent) => (
                <div key={agent.id} className="px-3 py-1.5 rounded-full text-[10px] font-medium" style={{ backgroundColor: `${agent.color}15`, color: agent.color, border: `1px solid ${agent.color}30` }}>
                  {agent.label}
                </div>
              ))}
            </div>
          </div>

          {/* Decision Outputs */}
          <div className={`reveal transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.4s" }}>
            <h4 className="text-xs font-semibold tracking-widest text-emerald-400/60 uppercase mb-4 text-center">Decision Outputs</h4>
            <div className="grid grid-cols-2 gap-3">
              {DECISION_OUTPUTS.map((output) => (
                <div key={output.id} className="p-4 rounded-xl bg-navy-800/50 border text-center" style={{ borderColor: `${output.color}25` }}>
                  <div className="text-xs font-semibold text-white/70 mb-1">{output.label}</div>
                  <div className="text-lg font-bold" style={{ color: output.color }}>{output.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mt-16">
          {[
            { title: "Real-time Ingestion", desc: "Continuous data flow from all business systems", color: "#f59e0b" },
            { title: "Specialized Agents", desc: "Domain experts for each value chain stage", color: "#f97316" },
            { title: "Central Orchestration", desc: "Cross-functional insights and coordination", color: "#5B9A8B" },
            { title: "Actionable Outputs", desc: "Quantified impact with clear recommendations", color: "#22c55e" },
          ].map((feature, i) => (
            <div key={feature.title} className={`reveal group relative p-6 rounded-2xl bg-navy-800/20 border border-white/5 transition-all duration-500 hover:border-white/15 hover:-translate-y-2 hover:shadow-2xl`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 50% 0%, ${feature.color}10, transparent 70%)` }} />
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full mb-4" style={{ backgroundColor: feature.color }} />
                <h4 className="text-sm font-semibold text-white mb-1.5">{feature.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
