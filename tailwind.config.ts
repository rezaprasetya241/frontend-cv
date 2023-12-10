import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // backgroundBio: {
      //   "border-radius": "10px",
      //   background: "rgba(196, 196, 196, 0.30)",
      // },
      colors: {
        backgroundBio: "rgba(196, 196, 196, 0.30)",
        gray: "#CECACA",
        brown: "#545454",
        notes: "#73808D",
      },
    },
  },
  plugins: [],
};
export default config;
