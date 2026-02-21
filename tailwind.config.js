/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        diwani: ["'Aref Ruqaa'", "'Amiri'", "serif"],
        amiri: ["'Amiri'", "serif"],
        cairo: ["'Cairo'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
