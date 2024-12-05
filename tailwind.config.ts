import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C1E51", // Navy Blue
          light: "#10458D", // Medium Blue
        },
        accent: {
          DEFAULT: "#FFA400", // Vibrant Orange
          light: "#FFB733",
        },
        success: {
          DEFAULT: "#4CAF50",
          light: "#81C784",
        },
        neutral: {
          DEFAULT: "#494949", // Dark Gray
          light: "#CEEAF7", // Light Blue
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;