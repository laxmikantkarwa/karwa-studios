import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Material 3 Dark Theme Palette (Example)
        surface: {
          DEFAULT: "#121212",
          container: "#1e1e1e",
          "container-high": "#2a2a2a",
        },
        "on-surface": "#E2E2E2",
        "on-surface-variant": "#C4C7C9",
        outline: "#434748",
        "outline-variant": "#434748",
        primary: "#A8C7FA", // Light Blue
        secondary: "#AFC8FA", // Light Blue Variant
        "on-primary": "#00315C",
        "on-secondary": "#203960",
      },
      fontFamily: {
        sans: ['"SF Pro Text"', '"SF Pro Icons"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
