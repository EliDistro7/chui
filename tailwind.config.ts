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
      glow: "0 0 15px rgba(255,193,7,0.3)", // Golden yellow glow from TAM TAM branding
    },
    colors: {
      black: "#1a1a1a",
      white: "#fefefe",
      // Vibrant yellow primary palette - main TAM TAM brand color
      primary: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b", // Main TAM TAM yellow - bright and appetizing
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03",
      },
      // Energetic orange secondary palette - from the packaging accents
      secondary: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316", // Vibrant orange from packaging
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407",
      },
      // Bold red accent palette - from the red elements in design
      accent: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444", // Bold red from TAM TAM branding
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      // Bright blue palette - from the blue packaging elements
      info: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6", // Bright blue from packaging
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      // Warm neutrals with slight golden tint
      neutral: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
      },
      // Success states with golden yellow tint
      success: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
      },
      // Error states remain vibrant
      error: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      // Fun snack-inspired accent colors
      snack: {
        cheese: "#ffd700", // Golden cheese color
        chocolate: "#8b4513", // Rich chocolate brown
        orange: "#ff8c00", // Bright orange snack color
        strawberry: "#ff69b4", // Fun pink for berry flavors
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      heading: ["var(--font-bebas-neue)", "sans-serif"],
      display: ["var(--font-archivo-black)", "sans-serif"],
    },
    fontSize: {
      display: ["4.5rem", { lineHeight: "1", fontWeight: "900" }],
      "heading-1": ["3rem", { lineHeight: "1.1", fontWeight: "800" }],
      "heading-2": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
    },
    keyframes: {
      "pulse-glow": {
        "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,158,11,0.7)" },
        "50%": { boxShadow: "0 0 15px 5px rgba(245,158,11,0.4)" },
      },
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
      "bounce-fun": {
        "0%, 100%": { transform: "translateY(0) scale(1)" },
        "50%": { transform: "translateY(-15px) scale(1.05)" },
      },
    },
    animation: {
      "pulse-glow": "pulse-glow 2s infinite",
      "fade-in": "fade-in 0.5s ease-out",
      float: "float 3s ease-in-out infinite",
      "bounce-fun": "bounce-fun 2s ease-in-out infinite",
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
