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
        glow: "0 0 15px rgba(83,207,96,0.3)", // Use a greenish glow from our primary
      },
      colors: {
        black: "#1a1a1a",
        white: "#fefefe",
        // Natural green primary palette, representing growth and sustainability
        primary: {
          50: "#e2f9e1",
          100: "#c7f4c8",
          200: "#a9ecac",
          300: "#8ae593",
          400: "#6bdc78",
          500: "#53cf60", // Main brand green – fresh and organic
          600: "#3cb849",
          700: "#2ea333",
          800: "#259a29",
          900: "#1d8223",
          950: "#116316",
        },
        // Warm earthy secondary palette, evoking soil and natural materials
        secondary: {
          50: "#faf6f4",
          100: "#f4e7e0",
          200: "#e8cec1",
          300: "#dbc5a0",
          400: "#cfbb80",
          500: "#c4b160", // Main brand brown – reliable and grounded
          600: "#a8944c",
          700: "#8a7438",
          800: "#6d5626",
          900: "#593d18",
          950: "#422d10",
        },
        // Earthy warm neutrals remain the same for balance
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
        // Success/error states remain unchanged
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
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
        // Accent colors – use a wheat gold and a cool sky blue for contrast if needed
        accent: {
          gold: "#facc15", // For highlights
          amber: "#fbbf24", // Warm accent
          teal: "#0d9488",  // Cool balance
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
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(83,207,96,0.7)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(83,207,96,0.4)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s infinite",
        "fade-in": "fade-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
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
