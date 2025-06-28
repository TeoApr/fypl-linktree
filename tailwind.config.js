/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fypl-primary': '#532125', // Dark red/burgundy
        'fypl-accent': '#59282b', // Slightly lighter red/burgundy
        'fypl-white': '#ffffff',
        'fypl-gray': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 