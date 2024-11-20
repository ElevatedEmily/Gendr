import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s ease-in-out infinite", // Smooth in and out
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" }, // Start
          "50%": { backgroundPosition: "100% 50%" }, // End of forward cycle
          "100%": { backgroundPosition: "0% 50%" }, // Reverse back to start
        },
      },
      backgroundSize: {
        gradient: "200% 200%", // Extend background size for smoother effect
      },
      colors: {
        pinkTrans: "#FF6F91", // Brighter, bolder pink
        // Vibrant pink
        blueTrans: "#5BCEFA", // Vibrant blue
        whiteTrans: "#FFFFFF", // Pure white
      },
    },
  },
  plugins: [],
} satisfies Config;
