/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'core': {
          'orange': '#F5A623',
          'gold': '#F8B84E',
          'light': '#FDF4E3',
          'dark': '#1A1A1A',
          'gray': '#4A4A4A',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
