"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  {
    number: 1,
    title: "Atmospheric Distillation",
    description: "Crude oil is superheated in a furnace, then fed into a towering column. As vapors rise, different hydrocarbons condense at different heights — separating into naphtha, kerosene, and heavy oils.",
    accent: "text-primary-400",
    bg: "bg-primary-500/10",
    border: "border-primary-500/20",
    glow: "#5B9A8B",
  },
  {
    number: 2,
    title: "Vacuum Distillation",
    description: "The heaviest residue drops further into a vacuum column, where reduced pressure lets even more valuable oils boil off without thermal cracking.",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    glow: "#f59e0b",
  },
  {
    number: 3,
    title: "Cracking & Treatment",
    description: "Heavy molecules are broken apart in catalytic crackers and hydrocrackers, then purified through hydrotreaters — transforming low-value residue into high-value fuels.",
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "#f97316",
  },
  {
    number: 4,
    title: "Blending & Finishing",
    description: "Treated streams are precisely blended to create gasoline, diesel, and jet fuel — each meeting exact market specifications.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "#34d399",
  },
];

const PIPES = [
  { id: "crude-in", d: "M 0,195 C 40,195 50,195 80,195", color: "#b45309", w: 5 },
  { id: "atm-naph", d: "M 145,100 C 180,100 200,100 240,80 C 260,70 280,65 310,65", color: "#4ade80", w: 3 },
  { id: "atm-kero", d: "M 145,160 C 200,160 220,160 260,155 C 280,152 295,150 310,150", color: "#fb923c", w: 3 },
  { id: "atm-heavy", d: "M 145,220 C 180,220 200,230 220,260 C 230,275 235,285 240,300", color: "#92400e", w: 3 },
  { id: "atm-resid", d: "M 110,270 C 110,290 110,300 110,320", color: "#78350f", w: 3 },
  { id: "naph-reform", d: "M 355,65 C 380,65 400,65 430,65", color: "#4ade80", w: 2.5 },
  { id: "reform-gblend", d: "M 475,65 C 510,65 530,80 540,120 C 545,140 548,155 555,165", color: "#22c55e", w: 2.5 },
  { id: "kero-iso", d: "M 355,150 C 380,150 400,150 430,150", color: "#fb923c", w: 2.5 },
  { id: "iso-gblend", d: "M 475,150 C 510,150 530,155 555,160", color: "#86efac", w: 2 },
  { id: "fcc-ght", d: "M 290,310 C 320,310 350,300 380,290 C 400,283 410,275 430,270", color: "#ea580c", w: 2.5 },
  { id: "ght-gblend", d: "M 475,270 C 510,270 530,240 540,200 C 545,185 550,175 555,170", color: "#f97316", w: 2 },
  { id: "vac-hck", d: "M 135,400 C 160,400 180,395 200,385 C 215,378 225,370 240,365", color: "#a16207", w: 2.5 },
  { id: "hck-dht", d: "M 290,365 C 320,365 340,365 370,365", color: "#d97706", w: 2.5 },
  { id: "dht-dblend", d: "M 415,365 C 450,365 490,365 555,365", color: "#d97706", w: 2.5 },
  { id: "vac-coker", d: "M 110,430 C 110,445 115,455 140,465 C 160,472 190,475 220,475", color: "#451a03", w: 2 },
  { id: "coker-dht", d: "M 270,465 C 300,455 340,430 380,400 C 390,393 395,385 395,375", color: "#78350f", w: 2 },
];

export default function Refinery101Section() {
  const [activeUnit, setActiveUnit] = useState<string | null>(null);
  const [visibleStage, setVisibleStage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let s = 1;
          const id = setInterval(() => {
            setVisibleStage(s);
            s++;
            if (s > 5) clearInterval(id);
          }, 700);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const show = (stage: number) => visibleStage >= stage;

  const renderProcessUnit = (id: string, label: string, x: number, y: number, w: number, h: number) => {
    const isActive = activeUnit === id;
    const cx = x + w / 2;
    const cy = y + h / 2;

    switch (id) {
      case "nht":
      case "kht":
      case "ght":
      case "dht":
        return (
          <g>
            <ellipse cx={x + 6} cy={cy} rx={6} ry={h * 0.35} fill="url(#r101-reactorGrad)" stroke="rgba(91,154,139,0.2)" strokeWidth={0.8} />
            <rect x={x + 6} y={y + 4} width={w - 12} height={h - 8} rx={2} fill="url(#r101-reactorGrad)" stroke={isActive ? "rgba(91,154,139,0.7)" : "rgba(91,154,139,0.2)"} strokeWidth={isActive ? 1.5 : 0.8} filter={isActive ? "url(#r101-glow8)" : undefined} className="transition-all duration-300" />
            <ellipse cx={x + w - 6} cy={cy} rx={6} ry={h * 0.35} fill="url(#r101-reactorGrad)" stroke="rgba(91,154,139,0.2)" strokeWidth={0.8} />
            {[0, 1, 2].map(i => (
              <line key={i} x1={x + 12} y1={y + 10 + i * 10} x2={x + w - 12} y2={y + 10 + i * 10} stroke="rgba(91,154,139,0.08)" strokeWidth={0.5} strokeDasharray="2 2" />
            ))}
            <circle cx={x + 8} cy={y - 2} r={3} fill="url(#r101-h2Grad)" opacity={0.7}>
              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x={x + 6} y={y - 6} fill="#60a5fa" fontSize={5} fontWeight={600} opacity={0.6}>H₂</text>
            {[0, 1].map(i => (
              <circle key={i} cx={x + 10 + i * 4} cy={y + 2} r={1.5} fill="#60a5fa" opacity={0.4}>
                <animate attributeName="cy" values={`${y + 2};${cy};${y + h - 4}`} dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
                <animate attributeName="opacity" values="0.5;0.2;0" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
              </circle>
            ))}
            <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="central" className="refinery-unit-label" fontSize={6}>{label}</text>
          </g>
        );

      case "ref":
        return (
          <g>
            <ellipse cx={cx} cy={y + 4} rx={w * 0.35} ry={4} fill="url(#r101-catalystGrad)" stroke="rgba(251,146,60,0.25)" strokeWidth={0.8} />
            <rect x={x + 8} y={y + 4} width={w - 16} height={h - 8} rx={2} fill="url(#r101-catalystGrad)" stroke={isActive ? "rgba(251,146,60,0.7)" : "rgba(251,146,60,0.25)"} strokeWidth={isActive ? 1.5 : 0.8} filter={isActive ? "url(#r101-glow8)" : undefined} className="transition-all duration-300" />
            <ellipse cx={cx} cy={y + h - 4} rx={w * 0.35} ry={3} fill="rgba(251,146,60,0.05)" stroke="rgba(251,146,60,0.15)" strokeWidth={0.8} />
            {[0, 1, 2].map(i => (
              <g key={i}>
                <line x1={x + 12} y1={y + 12 + i * 9} x2={x + w - 12} y2={y + 12 + i * 9} stroke="rgba(251,146,60,0.15)" strokeWidth={0.6} />
                <circle cx={cx} cy={y + 12 + i * 9} r={1.2} fill="#fb923c" opacity={0.4}>
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${1.2 + i * 0.2}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
            {[0, 1].map(i => (
              <ellipse key={i} cx={cx + (i === 0 ? -4 : 4)} cy={y - 2} rx={2} ry={3} fill="url(#r101-flameGrad)" opacity={0.5}>
                <animate attributeName="ry" values="2;4;2" dur={`${0.4 + i * 0.1}s`} repeatCount="indefinite" />
              </ellipse>
            ))}
            <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="central" className="refinery-unit-label" fontSize={6}>{label}</text>
          </g>
        );

      case "iso":
        return (
          <g>
            <ellipse cx={cx} cy={y + 5} rx={w * 0.38} ry={5} fill="url(#r101-reactorGrad)" stroke="rgba(91,154,139,0.2)" strokeWidth={0.8} />
            <rect x={x + 6} y={y + 5} width={w - 12} height={h - 10} rx={3} fill="url(#r101-reactorGrad)" stroke={isActive ? "rgba(91,154,139,0.7)" : "rgba(91,154,139,0.2)"} strokeWidth={isActive ? 1.5 : 0.8} filter={isActive ? "url(#r101-glow8)" : undefined} className="transition-all duration-300" />
            <ellipse cx={cx} cy={y + h - 5} rx={w * 0.38} ry={4} fill="rgba(91,154,139,0.04)" stroke="rgba(91,154,139,0.15)" strokeWidth={0.8} />
            <path d={`M ${cx - 8},${cy - 4} L ${cx},${cy - 8} L ${cx + 8},${cy - 4}`} fill="none" stroke="rgba(134,239,172,0.4)" strokeWidth={1} />
            <path d={`M ${cx - 10},${cy + 4} L ${cx - 4},${cy} L ${cx + 4},${cy} L ${cx + 10},${cy + 4}`} fill="none" stroke="rgba(134,239,172,0.4)" strokeWidth={1} />
            <circle cx={cx} cy={cy - 2} r={2} fill="#86efac" opacity={0.3}>
              <animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x={cx} y={cy + 8} textAnchor="middle" dominantBaseline="central" className="refinery-unit-label" fontSize={7}>{label}</text>
          </g>
        );

      case "fcc":
        return (
          <g>
            <rect x={x + 2} y={y + 8} width={14} height={h - 12} rx={2} fill="url(#r101-catalystGrad)" stroke="rgba(234,88,12,0.3)" strokeWidth={0.8} />
            <ellipse cx={x + 9} cy={y + 8} rx={7} ry={3} fill="url(#r101-catalystGrad)" stroke="rgba(234,88,12,0.25)" strokeWidth={0.6} />
            <rect x={x + 20} y={y + 2} width={w - 24} height={h - 6} rx={3} fill="url(#r101-heatGrad)" stroke={isActive ? "rgba(234,88,12,0.7)" : "rgba(234,88,12,0.3)"} strokeWidth={isActive ? 1.5 : 0.8} filter={isActive ? "url(#r101-glow8)" : undefined} className="transition-all duration-300" />
            <line x1={x + 16} y1={cy} x2={x + 20} y2={cy} stroke="rgba(234,88,12,0.4)" strokeWidth={2} />
            {[0, 1, 2].map(i => (
              <circle key={i} cx={x + 9} cy={y + h - 6} r={1.5} fill="#ea580c" opacity={0.5}>
                <animate attributeName="cy" values={`${y + h - 6};${y + 12};${y + h - 6}`} dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} />
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} />
              </circle>
            ))}
            {[0, 1].map(i => (
              <ellipse key={i} cx={x + w - 8 + i * 4} cy={y - 2} rx={2} ry={4} fill="url(#r101-flameGrad)" opacity={0.6}>
                <animate attributeName="ry" values="3;5;3" dur={`${0.35 + i * 0.1}s`} repeatCount="indefinite" />
              </ellipse>
            ))}
            <text x={cx + 4} y={cy + 2} textAnchor="middle" dominantBaseline="central" className="refinery-unit-label" fontSize={7}>{label}</text>
          </g>
        );

      case "hck":
        return (
          <g>
            <rect x={x + 2} y={y + 2} width={w - 4} height={h - 4} rx={4} fill="rgba(15,23,42,0.5)" stroke={isActive ? "rgba(217,119,6,0.7)" : "rgba(217,119,6,0.25)"} strokeWidth={isActive ? 2.5 : 1.5} filter={isActive ? "url(#r101-glow8)" : undefined} className="transition-all duration-300" />
            <rect x={x + 5} y={y + 5} width={w - 10} height={h - 10} rx={2} fill="url(#r101-heatGrad)" stroke="rgba(217,119,6,0.15)" strokeWidth={0.5} />
            {[0, 1, 2].map(i => (
              <line key={i} x1={x + 10} y1={y + 12 + i * 9} x2={x + w - 10} y2={y + 12 + i * 9} stroke="rgba(217,119,6,0.12)" strokeWidth={0.6} strokeDasharray="3 2" />
            ))}
            <circle cx={x + 10} cy={y - 3} r={3.5} fill="url(#r101-h2Grad)" opacity={0.8}>
              <animate attributeName="r" values="2.5;4;2.5" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <text x={x + 8} y={y - 8} fill="#60a5fa" fontSize={5} fontWeight={600} opacity={0.7}>H₂</text>
            {[0, 1, 2].map(i => (
              <circle key={i} cx={x + 12 + i * 5} cy={y + 3} r={1.2} fill="#60a5fa" opacity={0.5}>
                <animate attributeName="cy" values={`${y + 3};${cy};${y + h - 5}`} dur={`${1.3 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
                <animate attributeName="opacity" values="0.6;0.25;0" dur={`${1.3 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
              </circle>
            ))}
            <text x={cx} y={cy + 2} textAnchor="middle" dominantBaseline="central" className="refinery-unit-label" fontSize={6}>{label}</text>
          </g>
        );

      case "cok":
        return (
          <g>
            {[0, 1].map(i => {
              const drumX = x + 4 + i * 22;
              const isActiveDrum = i === 0;
              return (
                <g key={i}>
                  <ellipse cx={drumX + 10} cy={y + 5} rx={10} ry={4} fill="url(#r101-cokeGrad)" stroke="rgba(120,53,15,0.3)" strokeWidth={0.8} />
                  <rect x={drumX} y={y + 5} width={20} height={h - 10} rx={2} fill="url(#r101-cokeGrad)" stroke={isActive ? "rgba(120,53,15,0.6)" : "rgba(120,53,15,0.3)"} strokeWidth={isActive ? 1.5 : 0.8} filter={isActive ? "url(#r101-glow8)" : undefined} className="transition-all duration-300" />
                  <ellipse cx={drumX + 10} cy={y + h - 5} rx={10} ry={3} fill="rgba(69,26,3,0.2)" stroke="rgba(120,53,15,0.2)" strokeWidth={0.6} />
                  {isActiveDrum && [0, 1].map(j => (
                    <circle key={j} cx={drumX + 8 + j * 4} cy={y + 2} r={3} fill="url(#r101-steamGrad)">
                      <animate attributeName="cy" values={`${y + 2};${y - 10};${y - 20}`} dur={`${2.5 + j * 0.4}s`} repeatCount="indefinite" begin={`${j * 0.8}s`} />
                      <animate attributeName="opacity" values="0.25;0.1;0" dur={`${2.5 + j * 0.4}s`} repeatCount="indefinite" begin={`${j * 0.8}s`} />
                      <animate attributeName="r" values="2;5;8" dur={`${2.5 + j * 0.4}s`} repeatCount="indefinite" begin={`${j * 0.8}s`} />
                    </circle>
                  ))}
                </g>
              );
            })}
            <line x1={x + 14} y1={y + h - 2} x2={x + 36} y2={y + h - 2} stroke="rgba(120,53,15,0.4)" strokeWidth={2} />
            <circle cx={x + 25} cy={y + h - 2} r={2} fill="#78350f" opacity={0.5} />
            <text x={cx} y={cy + 2} textAnchor="middle" dominantBaseline="central" className="refinery-unit-label" fontSize={7}>{label}</text>
          </g>
        );

      default:
        return (
          <g>
            <rect x={x} y={y} width={w} height={h} rx={6} fill="rgba(15,23,42,0.7)" stroke={isActive ? "rgba(91,154,139,0.7)" : "rgba(91,154,139,0.2)"} strokeWidth={isActive ? 2 : 1} filter={isActive ? "url(#r101-glow8)" : undefined} className="transition-all duration-300" />
            {isActive && <rect x={x} y={y} width={w} height={h} rx={6} fill="rgba(91,154,139,0.06)" />}
            <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="central" className="refinery-unit-label" fontSize={7}>{label}</text>
          </g>
        );
    }
  };

  return (
    <section id="refinery-101" ref={sectionRef} className="relative py-24 lg:py-36 bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">Refinery 101</p>
          <div className="section-divider mb-6" />
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-5">How a Refinery Works</h2>
          <p className="text-white/50 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
            Crude oil flows through four stages of transformation — from raw material to the fuels that power the world. This is the system R2E optimizes.
          </p>
        </div>

        <div className="hidden lg:block mb-16">
          <div className="relative mx-auto" style={{ maxWidth: 720 }}>
            <svg viewBox="-10 -10 640 520" className="w-full h-auto" role="img" aria-label="Animated refinery process flow diagram">
              <defs>
                <filter id="r101-glow8"><feGaussianBlur stdDeviation="8" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <filter id="r101-glow4"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <filter id="r101-glow12"><feGaussianBlur stdDeviation="12" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <linearGradient id="r101-flameGrad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#f97316" /><stop offset="50%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#fef3c7" />
                </linearGradient>
                <linearGradient id="r101-towerGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(91,154,139,0.15)" /><stop offset="100%" stopColor="rgba(91,154,139,0.03)" />
                </linearGradient>
                <radialGradient id="r101-steamGrad"><stop offset="0%" stopColor="white" stopOpacity="0.15" /><stop offset="100%" stopColor="white" stopOpacity="0" /></radialGradient>
                <linearGradient id="r101-reactorGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(91,154,139,0.12)" /><stop offset="50%" stopColor="rgba(91,154,139,0.08)" /><stop offset="100%" stopColor="rgba(91,154,139,0.12)" />
                </linearGradient>
                <linearGradient id="r101-heatGrad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" /><stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="r101-h2Grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="r101-catalystGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(251,146,60,0.15)" /><stop offset="100%" stopColor="rgba(234,88,12,0.05)" />
                </linearGradient>
                <radialGradient id="r101-cokeGrad"><stop offset="0%" stopColor="rgba(120,53,15,0.4)" /><stop offset="100%" stopColor="rgba(69,26,3,0.2)" /></radialGradient>
              </defs>

              {PIPES.map((p, i) => (
                <g key={p.id} className={`refinery-pipe-group ${show(i < 5 ? 1 : i < 11 ? 3 : 2) ? "refinery-revealed" : "refinery-hidden"}`}>
                  <path d={p.d} fill="none" stroke={p.color} strokeWidth={p.w + 2} strokeOpacity={0.06} strokeLinecap="round" />
                  <path d={p.d} fill="none" stroke={p.color} strokeWidth={p.w} strokeOpacity={0.25} strokeLinecap="round" />
                  <path d={p.d} fill="none" stroke={p.color} strokeWidth={p.w} strokeLinecap="round" strokeDasharray="6 10" className="refinery-pipe" style={{ animationDelay: `${i * 0.2}s` }} />
                  {[0, 1, 2].map(j => (
                    <circle key={j} r={p.w * 0.6 + j * 0.3} fill={p.color} opacity={j === 0 ? 0.9 : 0.3} filter={j === 0 ? undefined : "url(#r101-glow4)"}>
                      <animateMotion dur={`${2.5 + j * 0.8}s`} repeatCount="indefinite" begin={`${i * 0.2 + j * 0.9}s`} path={p.d} />
                    </circle>
                  ))}
                </g>
              ))}

              <g className={`refinery-pipe-group ${show(1) ? "refinery-revealed" : "refinery-hidden"}`}>
                <rect x={55} y={175} width={30} height={40} rx={3} fill="rgba(120,53,15,0.4)" stroke="rgba(251,146,60,0.3)" strokeWidth={1} />
                {[0,1,2,3,4].map(i => (
                  <ellipse key={i} cx={70} cy={210 - i * 4} rx={3 + Math.random() * 3} ry={5 + Math.random() * 4} fill="url(#r101-flameGrad)" opacity={0.7}>
                    <animate attributeName="ry" values={`${4+i};${7+i};${4+i}`} dur={`${0.4+i*0.1}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur={`${0.5+i*0.15}s`} repeatCount="indefinite" />
                  </ellipse>
                ))}
                <text x={70} y={225} textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize={7} fontWeight={600}>FURNACE</text>
              </g>

              <g className={`refinery-unit ${show(1) ? "refinery-revealed" : "refinery-hidden"}`} onMouseEnter={() => setActiveUnit("atm")} onMouseLeave={() => setActiveUnit(null)} tabIndex={0} role="img" aria-label="Atmospheric distillation column">
                <ellipse cx={115} cy={75} rx={28} ry={8} fill="url(#r101-towerGrad)" stroke="rgba(91,154,139,0.25)" strokeWidth={1} />
                <rect x={87} y={75} width={56} height={195} rx={2} fill="url(#r101-towerGrad)" stroke="rgba(91,154,139,0.25)" strokeWidth={1} className={activeUnit === "atm" ? "refinery-unit-active" : ""} />
                <ellipse cx={115} cy={270} rx={28} ry={6} fill="rgba(91,154,139,0.06)" stroke="rgba(91,154,139,0.2)" strokeWidth={1} />
                {Array.from({length: 8}).map((_, i) => (
                  <g key={i}>
                    <line x1={92} y1={95 + i * 22} x2={138} y2={95 + i * 22} stroke="rgba(91,154,139,0.12)" strokeWidth={0.7} />
                    <circle cx={115} cy={95 + i * 22} r={1.5} fill="#5B9A8B" opacity={0.3}>
                      <animate attributeName="opacity" values="0.15;0.5;0.15" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.15}s`} />
                      <animate attributeName="r" values="1;2.5;1" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.15}s`} />
                    </circle>
                  </g>
                ))}
                {[0,1,2].map(i => (
                  <circle key={i} cx={110 + i * 5} cy={70} r={6} fill="url(#r101-steamGrad)">
                    <animate attributeName="cy" values="70;40;10" dur={`${3+i*0.5}s`} repeatCount="indefinite" begin={`${i*1}s`} />
                    <animate attributeName="opacity" values="0.2;0.08;0" dur={`${3+i*0.5}s`} repeatCount="indefinite" begin={`${i*1}s`} />
                    <animate attributeName="r" values="4;10;16" dur={`${3+i*0.5}s`} repeatCount="indefinite" begin={`${i*1}s`} />
                  </circle>
                ))}
                <text x={115} y={168} textAnchor="middle" className="refinery-unit-label" fontSize={8}>ATM</text>
                <text x={115} y={180} textAnchor="middle" className="refinery-unit-label" fontSize={7}>DISTILLATION</text>
              </g>

              <g className={`refinery-unit ${show(2) ? "refinery-revealed" : "refinery-hidden"}`} onMouseEnter={() => setActiveUnit("vac")} onMouseLeave={() => setActiveUnit(null)} tabIndex={0} role="img" aria-label="Vacuum distillation column">
                <ellipse cx={115} cy={335} rx={22} ry={6} fill="url(#r101-towerGrad)" stroke="rgba(91,154,139,0.2)" strokeWidth={1} />
                <rect x={93} y={335} width={44} height={100} rx={2} fill="url(#r101-towerGrad)" stroke="rgba(91,154,139,0.2)" strokeWidth={1} className={activeUnit === "vac" ? "refinery-unit-active" : ""} />
                <ellipse cx={115} cy={435} rx={22} ry={5} fill="rgba(91,154,139,0.04)" stroke="rgba(91,154,139,0.15)" strokeWidth={1} />
                {Array.from({length: 4}).map((_, i) => (
                  <line key={i} x1={97} y1={355 + i * 22} x2={133} y2={355 + i * 22} stroke="rgba(91,154,139,0.1)" strokeWidth={0.7} />
                ))}
                <text x={115} y={385} textAnchor="middle" className="refinery-unit-label" fontSize={7}>VACUUM</text>
                <text x={115} y={395} textAnchor="middle" className="refinery-unit-label" fontSize={7}>DIST</text>
              </g>

              {[
                { id: "nht", label: "NAPHTHA HT", x: 310, y: 45, w: 45, h: 40 },
                { id: "ref", label: "REFORMER", x: 430, y: 45, w: 45, h: 40 },
                { id: "kht", label: "KERO HT", x: 310, y: 130, w: 45, h: 40 },
                { id: "iso", label: "ISOM", x: 430, y: 130, w: 45, h: 40 },
                { id: "fcc", label: "FCC", x: 245, y: 285, w: 50, h: 50 },
                { id: "ght", label: "GAS HT", x: 430, y: 250, w: 45, h: 40 },
                { id: "hck", label: "H-CRACK", x: 245, y: 345, w: 50, h: 40 },
                { id: "dht", label: "DIESEL HT", x: 370, y: 345, w: 45, h: 40 },
                { id: "cok", label: "COKER", x: 220, y: 455, w: 50, h: 35 },
              ].map(u => (
                <g key={u.id} className={`refinery-unit ${show(3) ? "refinery-revealed" : "refinery-hidden"}`} onMouseEnter={() => setActiveUnit(u.id)} onMouseLeave={() => setActiveUnit(null)} tabIndex={0} role="img" aria-label={u.label}>
                  {renderProcessUnit(u.id, u.label, u.x, u.y, u.w, u.h)}
                </g>
              ))}

              {[
                { id: "gbl", label: "GASOLINE", x: 555, y: 140, color: "#22c55e" },
                { id: "dbl", label: "DIESEL", x: 555, y: 340, color: "#d97706" },
              ].map(t => (
                <g key={t.id} className={`refinery-unit ${show(4) ? "refinery-revealed" : "refinery-hidden"}`} onMouseEnter={() => setActiveUnit(t.id)} onMouseLeave={() => setActiveUnit(null)} tabIndex={0} role="img" aria-label={`${t.label} blending`}>
                  <ellipse cx={t.x + 25} cy={t.y} rx={25} ry={7} fill="rgba(15,23,42,0.6)" stroke={t.color} strokeOpacity={0.3} strokeWidth={1} />
                  <rect x={t.x} y={t.y} width={50} height={45} rx={2} fill="rgba(15,23,42,0.6)" stroke={t.color} strokeOpacity={activeUnit === t.id ? 0.7 : 0.25} strokeWidth={activeUnit === t.id ? 2 : 1} filter={activeUnit === t.id ? "url(#r101-glow8)" : undefined} className="transition-all duration-300" />
                  <ellipse cx={t.x + 25} cy={t.y + 45} rx={25} ry={5} fill="rgba(15,23,42,0.3)" stroke={t.color} strokeOpacity={0.2} strokeWidth={1} />
                  <rect x={t.x + 2} y={t.y + 20} width={46} height={24} rx={1} fill={t.color} fillOpacity={0.08}>
                    <animate attributeName="y" values={`${t.y + 30};${t.y + 18};${t.y + 30}`} dur="4s" repeatCount="indefinite" />
                    <animate attributeName="height" values="14;26;14" dur="4s" repeatCount="indefinite" />
                  </rect>
                  <circle cx={t.x + 25} cy={t.y + 28} r="8" fill="none" stroke={t.color} strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.3">
                    <animateTransform attributeName="transform" type="rotate" from={`0 ${t.x + 25} ${t.y + 28}`} to={`360 ${t.x + 25} ${t.y + 28}`} dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={t.x + 25} cy={t.y + 28} r="4" fill="none" stroke={t.color} strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" from={`360 ${t.x + 25} ${t.y + 28}`} to={`0 ${t.x + 25} ${t.y + 28}`} dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <text x={t.x + 25} y={t.y + 22} textAnchor="middle" fill={t.color} fontSize={7} fontWeight={700} opacity={0.8}>{t.label}</text>
                  <text x={t.x + 25} y={t.y + 33} textAnchor="middle" className="refinery-unit-label" fontSize={6}>BLEND</text>
                  <line x1={t.x + 50} y1={t.y + 22} x2={t.x + 68} y2={t.y + 22} stroke={t.color} strokeWidth={2} strokeOpacity={0.4} />
                  <polygon points={`${t.x+68},${t.y+17} ${t.x+76},${t.y+22} ${t.x+68},${t.y+27}`} fill={t.color} opacity={0.5}>
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
                  </polygon>
                </g>
              ))}

              <g className={show(1) ? "refinery-revealed" : "refinery-hidden"}>
                <text x={5} y={15} fill="#5B9A8B" fontSize={9} fontWeight={800} opacity={0.5} letterSpacing="0.1em">1 SEPARATION</text>
              </g>
              <g className={show(3) ? "refinery-revealed" : "refinery-hidden"}>
                <text x={245} y={15} fill="#f97316" fontSize={9} fontWeight={800} opacity={0.5} letterSpacing="0.1em">2 CONVERSION &amp; TREATMENT</text>
              </g>
              <g className={show(4) ? "refinery-revealed" : "refinery-hidden"}>
                <text x={550} y={15} fill="#34d399" fontSize={9} fontWeight={800} opacity={0.5} letterSpacing="0.1em">3 BLENDING</text>
              </g>

              <g className={show(1) ? "refinery-revealed" : "refinery-hidden"}>
                <text x={2} y={188} fill="#b45309" fontSize={8} fontWeight={700} opacity={0.6}>CRUDE</text>
                <text x={6} y={198} fill="#b45309" fontSize={8} fontWeight={700} opacity={0.6}>OIL</text>
                <polygon points="35,191 45,195 35,199" fill="#b45309" opacity={0.5}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
                </polygon>
              </g>

            </svg>
          </div>
        </div>

        <div className="lg:hidden mb-12">
          <div className="space-y-4">
            {STAGES.map((stage, idx) => (
              <div key={stage.number} className={`reveal flex items-start gap-4 p-5 rounded-2xl border ${stage.border} ${stage.bg} backdrop-blur-sm`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className={`relative flex-shrink-0 w-12 h-12 rounded-full ${stage.bg} border-2 ${stage.border} flex items-center justify-center`}>
                  <span className={`font-black text-xl ${stage.accent}`}>{stage.number}</span>
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ borderColor: stage.glow, borderWidth: 1 }} />
                </div>
                <div>
                  <h4 className={`font-bold text-base ${stage.accent} mb-1`}>{stage.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
