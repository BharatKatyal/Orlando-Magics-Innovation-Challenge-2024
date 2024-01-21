/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        magic_blue: "#020403",
        magic_blue_light: "#0A0E13",
      },
    },
  },
  plugins: [],
};
