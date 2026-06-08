import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F1F1F1",
        border: "#E2E3E6",
        violet: "#5A3FFF",
        green: "#00A05C",
        orange: "#FE6645",
        ember: "#F45C3B",
      },
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
        gilroy: ['"Gilroy"', '"Space Grotesk"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 20px rgba(0,0,0,0.04)",
        lift: "0 26px 50px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
