import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── YHI Brand ────────────────────────────── */
        forest:        "#1B3A2D",
        "forest-light":"#2A5144",
        moss:          "#4A7C5C",
        wheat:         "#E8D5B5",
        ivory:         "#F8F5EF",
        linen:         "#EFE7DA",
        cream:         "#FAF8F4",
        charcoal:      "#1A1A18",
        graphite:      "#2A2825",
        taupe:         "#82776A",
        bronze:        "#A47652",
        smoke:         "#D8D0C3",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(25, 24, 23, 0.14)",
        card:     "0 8px 30px rgba(25, 24, 23, 0.07)",
        "card-hover": "0 16px 40px rgba(25, 24, 23, 0.12)",
      },
      borderRadius: {
        card: "12px",
      },
      keyframes: {
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.4s ease-out",
        "fade-in":  "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
