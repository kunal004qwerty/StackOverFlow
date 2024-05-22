/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        dark_bg_1:'#3a3a3a',
        dark_bg_2:'#232629',
      }
    },
  },
  plugins: [],
}