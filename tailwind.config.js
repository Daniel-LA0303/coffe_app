/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    first: '#525252',
    second: '#414141',
    third: '#313131',
    
  },
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}