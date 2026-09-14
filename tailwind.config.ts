import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          teal: "#2dd4bf",
          cyan: "#22d3ee",
          blue: "#3b82f6",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(45, 212, 191, 0.35)",
        "glow-lg": "0 0 45px rgba(34, 211, 238, 0.45)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #2dd4bf, #22d3ee, #3b82f6)",
      },
    },
  },
  plugins: [],
};

export default config;
