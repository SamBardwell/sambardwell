import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{ts,tsx,mdx,md}"],
  plugins: [typography],
  theme: {
    extend: {
      typography: {
        invert: {
          css: {
            a: { color: "rgb(52 211 153)" },
            "a:hover": { color: "rgb(16 185 129)" },
          },
        },
      },
    },
  },
} satisfies Config;