import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryforeground: "var(--primary-foreground)",
        secondary: "var(--secondary)",
        secondaryforeground: "var(--secondary-foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)"
      },
    },
  },
  plugins: [],
} satisfies Config;
