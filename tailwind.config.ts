import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./app/**/*.{ts,tsx}"], // Removed "./sanity/**/*.{ts,tsx}"
theme: {
  container: {
    center: true,
    padding: "2rem",
  },
  extend: {
    boxShadow: {
      layer: "0 35px 60px -15px rgba(0, 0, 0, 0.1)",
      soft: "0 4px 24px rgba(0, 0, 0, 0.08)",
      glow: "0 0 15px rgba(251, 191, 36, 0.3)", // Golden yellow glow from CHUI branding
      electric: "0 0 20px rgba(59, 130, 246, 0.4)", // Electric blue glow for battery elements
      power: "0 8px 32px rgba(245, 158, 11, 0.25)", // Power-focused shadow
    },
    colors: {
      black: "#0f172a", // Deeper black for automotive feel
      white: "#fefefe",
      // Professional yellow-orange primary palette - CHUI brand colors
      primary: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24", // CHUI brand yellow
        500: "#f59e0b", // Main CHUI yellow - professional yet vibrant
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03",
      },
      // Deep blue secondary palette - for reliability and trust
      secondary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6", // Professional blue for automotive industry
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      // Electric orange accent palette - for energy and power
      accent: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316", // Vibrant orange for power/energy elements
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407",
      },
      // Professional red palette - for warnings and highlights
      danger: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444", // Professional red
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      // Electric blue palette - for electrical/battery elements
      electric: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4", // Electric cyan for battery indicators
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
        950: "#083344",
      },
      // Industrial gray palette with blue undertones
      neutral: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b", // Professional industrial gray
        600: "#475569",
        700: "#334155",
        800: "#1e293b", // Dark automotive gray
        900: "#0f172a", // Deep automotive black
      },
      // Success states with green - for battery health indicators
      success: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e", // Battery health green
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      // Error states for battery warnings
      error: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444", // Battery warning red
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      // Battery-specific accent colors
      battery: {
        positive: "#fbbf24", // Gold for positive terminal
        negative: "#64748b", // Silver-gray for negative terminal
        charge: "#10b981", // Green for charged state
        discharge: "#f59e0b", // Orange for discharging
        voltage: "#3b82f6", // Blue for voltage indicators
        capacity: "#8b5cf6", // Purple for capacity indicators
      },
      // German technology inspired colors
      german: {
        engineering: "#1e40af", // Deep blue for German engineering
        quality: "#059669", // Green for quality assurance
        precision: "#7c3aed", // Purple for precision
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      heading: ["var(--font-bebas-neue)", "sans-serif"], // Strong, industrial font
      display: ["var(--font-archivo-black)", "sans-serif"], // Bold for CHUI branding
      mono: ["var(--font-jetbrains-mono)", "monospace"], // For technical specifications
    },
    fontSize: {
      display: ["4.5rem", { lineHeight: "1", fontWeight: "900" }],
      "heading-1": ["3rem", { lineHeight: "1.1", fontWeight: "800" }],
      "heading-2": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
      "technical": ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }], // For specs
    },
    keyframes: {
      // Electric pulse animation for battery elements
      "pulse-electric": {
        "0%, 100%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)" },
        "50%": { boxShadow: "0 0 20px 8px rgba(59, 130, 246, 0.4)" },
      },
      // Power glow animation
      "power-glow": {
        "0%, 100%": { boxShadow: "0 0 0 0 rgba(251, 191, 36, 0.7)" },
        "50%": { boxShadow: "0 0 25px 10px rgba(251, 191, 36, 0.4)" },
      },
      // Battery charge animation
      "charge-flow": {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "50%": { opacity: "1" },
        "100%": { transform: "translateX(100%)", opacity: "0" },
      },
      // Voltage indicator animation
      "voltage-pulse": {
        "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
        "50%": { transform: "scale(1.1)", opacity: "1" },
      },
      // Industrial fade-in
      "fade-in": {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      // Power-up animation
      "power-up": {
        "0%": { transform: "scale(0.95)", opacity: "0.5" },
        "50%": { transform: "scale(1.02)", opacity: "0.8" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
      // Battery indicator bounce
      "battery-bounce": {
        "0%, 100%": { transform: "translateY(0) scale(1)" },
        "50%": { transform: "translateY(-8px) scale(1.02)" },
      },
      // German precision animation (subtle, professional)
      "precision-float": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" },
      },
    },
    animation: {
      "pulse-electric": "pulse-electric 2s infinite",
      "power-glow": "power-glow 3s infinite",
      "charge-flow": "charge-flow 2s ease-in-out infinite",
      "voltage-pulse": "voltage-pulse 1.5s ease-in-out infinite",
      "fade-in": "fade-in 0.6s ease-out",
      "power-up": "power-up 0.8s ease-out",
      "battery-bounce": "battery-bounce 2.5s ease-in-out infinite",
      "precision-float": "precision-float 4s ease-in-out infinite",
    },
    // Custom gradients for battery themes
    backgroundImage: {
      'battery-gradient': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
      'electric-gradient': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      'power-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ea580c 100%)',
      'industrial-gradient': 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      'german-tech': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)',
    },
    // Custom spacing for battery layouts
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
    },
    // Custom border radius for industrial design
    borderRadius: {
      'xl': '1rem',
      '2xl': '1.5rem',
      'industrial': '0.5rem',
    },
  },
},
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    typography,
    plugin(function({ addUtilities }) {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".scroll-smooth": {
          "scroll-behavior": "smooth",
        },
        ".font-outline": {
          "-webkit-text-stroke": "1px currentColor",
          "text-stroke": "1px currentColor",
        },
        ".bg-radial-green": {
          "background-image": "radial-gradient(circle, rgba(83,207,96,0.1) 0%, rgba(255,255,255,0) 70%)",
        },
      });
    }),
  ],
} satisfies Config;
