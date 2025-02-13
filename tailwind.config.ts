import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        "xs":"350px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sec: "#474554",
        acc: "#aca7cb",
        other: "#8c8c8c"
      },
    },
  },
  plugins: [],
} satisfies Config;
