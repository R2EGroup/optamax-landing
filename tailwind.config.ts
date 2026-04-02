import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#5B9A8B",
          600: "#4A8B7C",
          700: "#3D7A6C",
          800: "#2F5F54",
          900: "#1B4332",
        },
        navy: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#1B2838",
          950: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      fontSize: {
        "base": ["1.125rem", { lineHeight: "1.75" }],
        "lg": ["1.25rem", { lineHeight: "1.75" }],
        "xl": ["1.375rem", { lineHeight: "1.75" }],
        "2xl": ["1.625rem", { lineHeight: "1.5" }],
        "3xl": ["2rem", { lineHeight: "1.4" }],
      },
      spacing: {
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-subtle": "pulseSubtle 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.7s ease-out forwards",
        "fade-in-right": "fadeInRight 0.7s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "grid-pulse": "gridPulse 4s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "count-up": "countUp 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "orbit": "orbit 12s linear infinite",
        "orbit-reverse": "orbitReverse 15s linear infinite",
        "neuron-pulse": "neuronPulse 3s ease-in-out infinite",
        "scan-beam": "scanBeam 6s ease-in-out infinite",
        "border-glow": "borderGlow 4s ease-in-out infinite",
        "flow-down": "flowDown 2s linear infinite",
        "data-stream": "dataStream 3s linear infinite",
        "flow-right": "flowRight 2s linear infinite",
        "pipe-flow": "pipeFlow 2.5s linear infinite",
        "unit-pulse": "unitPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.08" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        orbitReverse: {
          "0%": { transform: "rotate(0deg) translateX(160px) rotate(0deg)" },
          "100%": { transform: "rotate(-360deg) translateX(160px) rotate(360deg)" },
        },
        neuronPulse: {
          "0%, 100%": { opacity: "0.08", transform: "scale(1)" },
          "50%": { opacity: "0.25", transform: "scale(1.3)" },
        },
        scanBeam: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(500%)", opacity: "0" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(91,154,139,0.1), inset 0 0 20px rgba(91,154,139,0.05)" },
          "50%": { boxShadow: "0 0 60px rgba(91,154,139,0.3), inset 0 0 40px rgba(91,154,139,0.1)" },
        },
        flowDown: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 40px" },
        },
        dataStream: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 200px" },
        },
        flowRight: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 0" },
        },
        pipeFlow: {
          "0%": { strokeDashoffset: "40" },
          "100%": { strokeDashoffset: "0" },
        },
        unitPulse: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
