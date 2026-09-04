import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--bg-card)",
        "card-hover": "var(--bg-card-hover)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "accent-dim": "var(--accent-dim)",
        ink: "var(--text)",
        dim: "var(--text-dim)",
        bright: "var(--text-bright)",
        line: "var(--border)",
      },
      maxWidth: { site: "1200px" },
    },
  },
  plugins: [],
};

export default config;
