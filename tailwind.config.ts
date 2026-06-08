import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        talco: {
          bg: "#030303",
          surface: "#0A0A0F",
          card: "rgba(13, 13, 20, 0.7)",
          border: "rgba(255, 255, 255, 0.08)",
          accent: "#8B5CF6",
          accent2: "#3B82F6",
          muted: "#475569",
          text: "#fcfcfd",
          sub: "#94a3b8",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "text-shimmer": "text-shimmer 8s ease infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
        },
        "text-shimmer": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
