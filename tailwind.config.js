/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi : ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pacifico : ["Pacifico", "cursive"],
        courgette : ["Courgette", "cursive"],
        oswald: ["Oswald", "sans-serif"]
      }
    },
  },
  plugins: [],
}