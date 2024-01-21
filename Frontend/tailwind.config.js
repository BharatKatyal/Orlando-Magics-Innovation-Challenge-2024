/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        magic_blue: "#020403",
        magic_blue_light: "#0A0E13",
        magic_blue_light_1: "#161d25",
        magic_blue_lighter: "#0560CA",
      },
      animation: {
        "down-to-up": "downToUp .3s ease-in-out",
      },
      keyframes: {
        downToUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(10%)" },
        },
      },
    },
  },
  plugins: [],
};
