/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Prepared for Dark Mode implementation
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ready for typography customization
      },
    },
  },
  plugins: [],
}
