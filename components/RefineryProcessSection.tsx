"use client";

import { useEffect, useRef, useState } from "react";

const VALUE_CHAIN = [
  { id: "supply", label: "Crude Supply", sublabel: "85M BPD", color: "#b45309" },
  { id: "transport1", label: "Transportation", sublabel: "Pipeline/Tanker", color: "#92400e" },
  { id: "storage", label: "Crude Storage", sublabel: "Tank Farm", color: "#78350f" },
  { id: "refinery", label: "Refinery", sublabel: "Operations", color: "#f97316", isMain: true },
  { id: "products", label: "Raw Products", sublabel: "Gasoline/Diesel/Jet", color: "#22c55e" },
  { id: "blending", label: "Blending", sublabel: "Quality Control", color: "#10b981" },
  { id: "terminals", label: "Terminals", sublabel: "Distribution", color: "#14b8a6" },
  { id: "transport2", label: "Transport", sublabel: "Truck/Rail", color: "#0d9488" },
  { id: "retail", label: "Retail", sublabel: "Gas Stations", color: "#34d399" },
];

const STAGES = [
  { number: 1, title: "Supply", description: "Crude oil sourced globally, transported by tanker and pipeline to storage facilities.", accent: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", glow: "#f59e0b" },
  { number: 2, title: "Refining", description: "Complex chemical processes separate, crack, and treat crude into valuable products.", accent: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", glow: "#f97316" },
  { number: 3, title: "Blending", description: "Products are precisely blended to meet specifications for gasoline, diesel, and jet fuel.", accent: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "#10b981" },
  { number: 4, title: "Distribution", description: "Finished fuels flow to terminals, trucks, and retail stations worldwide.", accent: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20", glow: "#14b8a6" },
];

export default function RefineryProcessSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0;
          const id = setInterval(() => {
            count++;
            setVisibleCount(count);
            if (count >= VALUE_CHAIN.length) clearInterval(id);
          }, 350);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isVisible = (index: number) => visibleCount > index;

  return (
    <section id="refinery-process" ref={sectionRef} className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/[0.03] rounded-full blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">From Crude to Consumer</p>
          <div className="section-divider mb-6" />
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Transforming Energy for the World</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            85,000,000 barrels flow through this journey every day — powering civilization.
          </p>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block mb-12">
          <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
            <svg viewBox="0 0 1100 400" className="w-full h-auto" role="img" aria-label="Petroleum value chain from crude to retail with AI orchestration">
              <defs>
                <filter id="glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <filter id="glowStrong"><feGaussianBlur stdDeviation="8" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <filter id="rps-glow12"><feGaussianBlur stdDeviation="12" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#f97316" /><stop offset="50%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#fef3c7" />
                </linearGradient>
                <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#b45309" /><stop offset="35%" stopColor="#f97316" /><stop offset="65%" stopColor="#22c55e" /><stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                <linearGradient id="brainGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#172b56" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="rps-scanGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                  <stop offset="30%" stopColor="#f97316" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#22c55e" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* ═══ ATMOSPHERIC BACKGROUND DOTS ═══ */}
              <g aria-hidden="true">
                {Array.from({ length: 20 }).map((_, i) => {
                  const dotX = 50 + (i % 10) * 105;
                  const dotY = 30 + Math.floor(i / 10) * 310;
                  return (
                    <circle key={`bg-dot-${i}`} cx={dotX} cy={dotY} r="1.5" fill="#172b56" opacity="0.08">
                      <animate attributeName="opacity" values="0.04;0.15;0.04" dur={`${3 + (i % 4) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
                      <animate attributeName="r" values="1;2.5;1" dur={`${3 + (i % 4) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
                    </circle>
                  );
                })}
              </g>

              {/* ═══ Optamax ORCHESTRATOR (Above Value Chain) ═══ */}
              <g className={`transition-all duration-700 ${visibleCount > 0 ? "opacity-100" : "opacity-0"}`}>
                {/* Outer pulse ring */}
                <circle cx={550} cy={70} r={55} fill="none" stroke="url(#brainGrad)" strokeWidth="0.5" strokeOpacity="0.08">
                  <animate attributeName="r" values="55;70;55" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="strokeOpacity" values="0.08;0;0.08" dur="6s" repeatCount="indefinite" />
                </circle>
                {/* Inner pulse ring */}
                <circle cx={550} cy={70} r={40} fill="none" stroke="url(#brainGrad)" strokeWidth="1" strokeOpacity="0.15">
                  <animate attributeName="r" values="40;55;40" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="strokeOpacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" />
                </circle>
                
                {/* Main brain circle */}
                <circle cx={550} cy={70} r={35} fill="rgba(15,23,42,0.9)" stroke="url(#brainGrad)" strokeWidth="2" filter="url(#glow)" />
                
                {/* Neural cross-connections */}
                {[0, 1, 2].map(i => {
                  const a1 = (i * 60 - 90) * Math.PI / 180;
                  const a2 = ((i + 3) * 60 - 90) * Math.PI / 180;
                  const x1 = 550 + Math.cos(a1) * 20;
                  const y1 = 70 + Math.sin(a1) * 20;
                  const x2 = 550 + Math.cos(a2) * 20;
                  const y2 = 70 + Math.sin(a2) * 20;
                  return (
                    <line key={`cross-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#172b56" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2 3">
                      <animate attributeName="strokeOpacity" values="0.08;0.2;0.08" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                    </line>
                  );
                })}

                {/* Neural nodes */}
                {[0, 1, 2, 3, 4, 5].map(i => {
                  const angle = (i * 60 - 90) * Math.PI / 180;
                  const nx = 550 + Math.cos(angle) * 20;
                  const ny = 70 + Math.sin(angle) * 20;
                  return (
                    <g key={`neural-${i}`}>
                      <line x1={550} y1={70} x2={nx} y2={ny} stroke="#172b56" strokeWidth="1" strokeOpacity="0.3" />
                      <circle cx={nx} cy={ny} r="2.5" fill="#172b56" opacity="0.5">
                        <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  );
                })}
                
                {/* Center core */}
                <circle cx={550} cy={70} r="5" fill="url(#brainGrad)" opacity="0.7">
                  <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Labels */}
                <text x={550} y={66} textAnchor="middle" fill="white" fontSize="10" fontWeight="700">Optamax</text>
                <text x={550} y={78} textAnchor="middle" fill="#172b56" fontSize="7" fontWeight="600">ORCHESTRATOR</text>
              </g>

              {/* ═══ DATA FLOW: VALUE CHAIN → BRAIN (3-layer pipes) ═══ */}
              {VALUE_CHAIN.map((stage, i) => {
                const stageX = 60 + i * 120;
                const visible = isVisible(i);
                const flowPath = `M ${stageX},220 L 550,105`;
                return (
                  <g key={`flow-up-${stage.id}`} className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
                    <line x1={stageX} y1={220} x2={550} y2={105} stroke={stage.color} strokeWidth="3" strokeOpacity="0.06" strokeLinecap="round" />
                    <line x1={stageX} y1={220} x2={550} y2={105} stroke={stage.color} strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
                    <line x1={stageX} y1={220} x2={550} y2={105} stroke={stage.color} strokeWidth="1" strokeLinecap="round" strokeDasharray="4 8" className="refinery-pipe" style={{ animationDelay: `${i * 0.2}s` }} />
                    {[0, 1, 2].map(j => (
                      <circle key={j} r={j === 0 ? 2.5 : 1.5} fill={stage.color} opacity={j === 0 ? 0.7 : 0.3} filter={j === 0 ? undefined : "url(#glow)"}>
                        <animateMotion dur={`${3 + i * 0.2 + j * 0.6}s`} repeatCount="indefinite" begin={`${i * 0.3 + j * 0.8}s`} path={flowPath} />
                      </circle>
                    ))}
                  </g>
                );
              })}

              {/* Title bar */}
              <text x={550} y={155} textAnchor="middle" fill="white" fontSize="12" fontWeight="700" opacity="0.5" letterSpacing="0.15em">
                PETROLEUM VALUE CHAIN
              </text>
              <line x1={200} y1={168} x2={900} y2={168} stroke="url(#flowGrad)" strokeWidth="2" strokeOpacity="0.2" />

              {/* Main flow line (3-layer pipe) */}
              <path d="M 60,260 L 1040,260" stroke="url(#flowGrad)" strokeWidth="8" strokeOpacity="0.06" fill="none" strokeLinecap="round" />
              <path d="M 60,260 L 1040,260" stroke="url(#flowGrad)" strokeWidth="3" strokeOpacity="0.2" fill="none" strokeLinecap="round" />
              <path d="M 60,260 L 1040,260" stroke="url(#flowGrad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 10" className="refinery-pipe" />
              
              {/* Horizontal scan beam */}
              <rect y={248} width="80" height="24" fill="url(#rps-scanGrad)" rx="4">
                <animateMotion dur="6s" repeatCount="indefinite" path="M -80,0 L 1120,0" />
              </rect>
              
              {/* Animated flow particles */}
              {[0,1,2,3,4].map(i => (
                <circle key={i} r="4" fill="url(#flowGrad)" opacity="0.6" filter="url(#glow)">
                  <animateMotion dur={`${4 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.8}s`} path="M 60,260 L 1040,260" />
                </circle>
              ))}

              {/* Arrows between stages (3-layer pipes) */}
              {VALUE_CHAIN.slice(0, -1).map((stage, i) => {
                const x1 = 75 + i * 120;
                const x2 = x1 + 90;
                const visible = isVisible(i);
                const arrowPath = `M ${x1},260 L ${x2},260`;
                return (
                  <g key={`arrow-${i}`} className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
                    <line x1={x1} y1={260} x2={x2} y2={260} stroke={stage.color} strokeWidth="5" strokeOpacity="0.06" strokeLinecap="round" />
                    <line x1={x1} y1={260} x2={x2} y2={260} stroke={stage.color} strokeWidth="2" strokeOpacity="0.25" strokeLinecap="round" />
                    <line x1={x1} y1={260} x2={x2} y2={260} stroke={stage.color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" className="refinery-pipe" style={{ animationDelay: `${i * 0.15}s` }} />
                    <polygon points={`${x2-8},255 ${x2},260 ${x2-8},265`} fill={stage.color} opacity="0.5">
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
                    </polygon>
                    {[0,1,2].map(j => (
                      <circle key={j} r={j === 0 ? 2.5 : 1.5} fill={stage.color} opacity={j === 0 ? 0.8 : 0.35} filter={j === 0 ? undefined : "url(#glow)"}>
                        <animateMotion dur={`${1.5 + j * 0.4}s`} repeatCount="indefinite" begin={`${j * 0.5}s`} path={arrowPath} />
                      </circle>
                    ))}
                  </g>
                );
              })}

              {/* Stage Icons */}
              {VALUE_CHAIN.map((stage, i) => {
                const cx = 60 + i * 120;
                const visible = isVisible(i);
                const isHovered = hoveredId === stage.id;
                const isMain = stage.isMain;
                
                return (
                  <g key={stage.id} 
                    className={`transition-all duration-500 cursor-pointer ${visible ? "opacity-100" : "opacity-0"}`}
                    style={{ transform: visible ? "translateY(0)" : "translateY(20px)" }}
                    onMouseEnter={() => setHoveredId(stage.id)}
                    onMouseLeave={() => setHoveredId(null)}>
                    
                    {/* Icon background circle */}
                    <circle cx={cx} cy={260} r={isMain ? 38 : 32} 
                      fill="rgba(15,23,42,0.8)" 
                      stroke={stage.color} 
                      strokeWidth={isHovered ? 2.5 : 1.5} 
                      strokeOpacity={isHovered ? 0.9 : 0.4}
                      filter={isHovered ? "url(#glowStrong)" : undefined}
                      className="transition-all duration-300" />
                    
                    {/* Pulsing ring (main always, others on hover) */}
                    {(isMain || isHovered) && (
                      <circle cx={cx} cy={260} r={isMain ? 42 : 36} fill="none" stroke={stage.color} strokeWidth="1" strokeOpacity="0.3">
                        <animate attributeName="r" values={isMain ? "42;50;42" : "36;44;36"} dur="3s" repeatCount="indefinite" />
                        <animate attributeName="strokeOpacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
                      </circle>
                    )}
                    {isMain && (
                      <circle cx={cx} cy={260} r={52} fill="none" stroke={stage.color} strokeWidth="0.5" strokeOpacity="0.15">
                        <animate attributeName="r" values="52;62;52" dur="5s" repeatCount="indefinite" />
                        <animate attributeName="strokeOpacity" values="0.15;0;0.15" dur="5s" repeatCount="indefinite" />
                      </circle>
                    )}

                    {/* Icon content */}
                    {renderIcon(stage.id, cx, 260, stage.color, isMain ?? false)}
                    
                    {/* Labels */}
                    <text x={cx} y={315} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" opacity={isHovered ? 1 : 0.8}>
                      {stage.label}
                    </text>
                    <text x={cx} y={330} textAnchor="middle" fill={stage.color} fontSize="9" fontWeight="500" opacity={isHovered ? 0.9 : 0.5}>
                      {stage.sublabel}
                    </text>
                  </g>
                );
              })}

            </svg>
          </div>
        </div>

        {/* Mobile: Cards */}
        <div className="lg:hidden mb-8">
          <div className="space-y-3">
            {STAGES.map((stage, idx) => (
              <div key={stage.number} className={`reveal flex items-start gap-4 p-5 rounded-2xl border ${stage.border} ${stage.bg} backdrop-blur-sm`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className={`relative flex-shrink-0 w-12 h-12 rounded-full ${stage.bg} border-2 ${stage.border} flex items-center justify-center`}>
                  <span className={`font-black text-xl ${stage.accent}`}>{stage.number}</span>
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${stage.accent} mb-1`}>{stage.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Stage cards */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {STAGES.map((stage, idx) => (
            <div key={stage.number} className={`reveal group relative p-6 rounded-2xl border ${stage.border} bg-navy-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`} style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 50% 0%, ${stage.glow}10, transparent 70%)` }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${stage.bg} border ${stage.border} flex items-center justify-center`}>
                    <span className={`font-black text-xl ${stage.accent}`}>{stage.number}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm">{stage.title}</h4>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderIcon(id: string, cx: number, cy: number, color: string, isMain: boolean) {
  const size = isMain ? 22 : 18;
  const _x = cx - size / 2;
  const _y = cy - size / 2;

  switch (id) {
    case "supply":
      return (
        <g>
          {/* Oil derrick */}
          <path d={`M ${cx-8},${cy+10} L ${cx-4},${cy-12} L ${cx+4},${cy-12} L ${cx+8},${cy+10} Z`} fill="none" stroke={color} strokeWidth="1.5" opacity="0.8" />
          <line x1={cx} y1={cy-12} x2={cx} y2={cy-18} stroke={color} strokeWidth="1.5" opacity="0.8" />
          <circle cx={cx} cy={cy+5} r="3" fill={color} opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      );
    case "transport1":
      return (
        <g>
          {/* Tanker ship */}
          <path d={`M ${cx-12},${cy+2} L ${cx-12},${cy-4} L ${cx+8},${cy-4} L ${cx+12},${cy+2} Z`} fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
          <rect x={cx-8} y={cy-10} width="8" height="6" rx="1" fill={color} opacity="0.5" />
          <path d={`M ${cx-14},${cy+6} Q ${cx},${cy+3} ${cx+14},${cy+6}`} fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.4">
            <animate attributeName="d" values={`M ${cx-14},${cy+6} Q ${cx},${cy+3} ${cx+14},${cy+6};M ${cx-14},${cy+6} Q ${cx},${cy+9} ${cx+14},${cy+6};M ${cx-14},${cy+6} Q ${cx},${cy+3} ${cx+14},${cy+6}`} dur="2s" repeatCount="indefinite" />
          </path>
        </g>
      );
    case "storage":
      return (
        <g>
          {/* Storage tanks */}
          {[-8, 4].map((offset, i) => (
            <g key={i}>
              <ellipse cx={cx + offset} cy={cy - 8} rx="6" ry="2" fill={color} opacity="0.2" stroke={color} strokeWidth="0.5" />
              <rect x={cx + offset - 6} y={cy - 8} width="12" height="14" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" />
              <ellipse cx={cx + offset} cy={cy + 6} rx="6" ry="2" fill={color} opacity="0.1" />
              <rect x={cx + offset - 5} y={cy - 2} width="10" height="7" fill={color} opacity="0.25">
                <animate attributeName="height" values="5;9;5" dur={`${3 + i}s`} repeatCount="indefinite" />
                <animate attributeName="y" values={`${cy};${cy - 4};${cy}`} dur={`${3 + i}s`} repeatCount="indefinite" />
              </rect>
            </g>
          ))}
        </g>
      );
    case "refinery":
      return (
        <g>
          {/* Distillation tower */}
          <rect x={cx - 6} y={cy - 18} width="12" height="32" rx="2" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
          {[0, 1, 2, 3].map(i => (
            <line key={i} x1={cx - 4} y1={cy - 14 + i * 8} x2={cx + 4} y2={cy - 14 + i * 8} stroke={color} strokeWidth="0.5" opacity="0.5" />
          ))}
          {/* Reactor */}
          <rect x={cx + 8} y={cy - 5} width="10" height="12" rx="2" fill={color} opacity="0.3" stroke={color} strokeWidth="0.8" />
          {/* Flames */}
          {[0, 1, 2].map(i => (
            <ellipse key={i} cx={cx + 13} cy={cy - 8 - i * 3} rx="2" ry="3" fill="url(#flameGrad)" opacity="0.7">
              <animate attributeName="ry" values="2;4;2" dur={`${0.3 + i * 0.1}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur={`${0.4 + i * 0.1}s`} repeatCount="indefinite" />
            </ellipse>
          ))}
          {/* Steam */}
          {[0, 1].map(i => (
            <circle key={i} cx={cx - 2 + i * 4} cy={cy - 20} r="3" fill="white" opacity="0.1">
              <animate attributeName="cy" values={`${cy - 20};${cy - 35};${cy - 20}`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.15;0;0.15" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="2;6;2" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      );
    case "products":
      return (
        <g>
          {/* Multiple product tanks */}
          {[-10, -2, 6].map((offset, i) => {
            const tankColor = i === 0 ? "#22c55e" : i === 1 ? "#fbbf24" : "#d97706";
            return (
              <g key={i}>
                <ellipse cx={cx + offset} cy={cy - 6} rx="4" ry="1.5" fill={tankColor} opacity="0.3" />
                <rect x={cx + offset - 4} y={cy - 6} width="8" height="12" fill={tankColor} opacity="0.2" stroke={tankColor} strokeWidth="0.5" />
                <ellipse cx={cx + offset} cy={cy + 6} rx="4" ry="1.5" fill={tankColor} opacity="0.15" />
              </g>
            );
          })}
        </g>
      );
    case "blending":
      return (
        <g>
          {/* Blending tank with swirl */}
          <ellipse cx={cx} cy={cy - 10} rx="10" ry="3" fill={color} opacity="0.2" stroke={color} strokeWidth="0.5" />
          <rect x={cx - 10} y={cy - 10} width="20" height="18" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" />
          <ellipse cx={cx} cy={cy + 8} rx="10" ry="3" fill={color} opacity="0.1" />
          {/* Swirl animation */}
          <circle cx={cx} cy={cy} r="5" fill="none" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
      );
    case "terminals":
      return (
        <g>
          {/* Terminal tank farm */}
          {[-9, 0, 9].map((offset, i) => (
            <g key={i}>
              <ellipse cx={cx + offset} cy={cy - 5} rx="5" ry="2" fill={color} opacity="0.25" />
              <rect x={cx + offset - 5} y={cy - 5} width="10" height="12" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" />
              <ellipse cx={cx + offset} cy={cy + 7} rx="5" ry="2" fill={color} opacity="0.1" />
            </g>
          ))}
        </g>
      );
    case "transport2":
      return (
        <g>
          {/* Fuel truck */}
          <rect x={cx - 14} y={cy - 6} width="18" height="10" rx="2" fill={color} opacity="0.3" stroke={color} strokeWidth="0.8" />
          <rect x={cx + 4} y={cy - 3} width="8" height="7" rx="1" fill={color} opacity="0.2" stroke={color} strokeWidth="0.5" />
          <circle cx={cx - 8} cy={cy + 6} r="3" fill="rgba(50,50,50,0.6)" stroke="rgba(100,100,100,0.5)" strokeWidth="1" />
          <circle cx={cx + 2} cy={cy + 6} r="3" fill="rgba(50,50,50,0.6)" stroke="rgba(100,100,100,0.5)" strokeWidth="1" />
          <circle cx={cx + 9} cy={cy + 6} r="2.5" fill="rgba(50,50,50,0.6)" stroke="rgba(100,100,100,0.5)" strokeWidth="1" />
          {/* Motion lines */}
          {[0, 1, 2].map(i => (
            <line key={i} x1={cx - 18 - i * 4} y1={cy - 3 + i * 2} x2={cx - 22 - i * 4} y2={cy - 3 + i * 2} stroke={color} strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.1;0.4;0.1" dur="0.6s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
            </line>
          ))}
        </g>
      );
    case "retail":
      return (
        <g>
          {/* Gas station */}
          <rect x={cx - 12} y={cy - 14} width="24" height="4" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="0.5" />
          <rect x={cx - 10} y={cy - 10} width="2" height="16" fill="rgba(100,100,100,0.4)" />
          <rect x={cx + 8} y={cy - 10} width="2" height="16" fill="rgba(100,100,100,0.4)" />
          {/* Pumps */}
          {[-6, 0, 6].map((offset, i) => {
            const pumpColor = i === 0 ? "#22c55e" : i === 1 ? "#fbbf24" : "#d97706";
            return (
              <g key={i}>
                <rect x={cx + offset - 3} y={cy - 4} width="6" height="10" rx="1" fill="rgba(15,23,42,0.8)" stroke={pumpColor} strokeWidth="0.5" />
                <rect x={cx + offset - 2} y={cy - 2} width="4" height="3" fill={pumpColor} opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${1.2 + i * 0.2}s`} repeatCount="indefinite" />
                </rect>
              </g>
            );
          })}
        </g>
      );
    default:
      return <circle cx={cx} cy={cy} r="15" fill={color} opacity="0.3" />;
  }
}
