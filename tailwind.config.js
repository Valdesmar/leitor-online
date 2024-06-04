/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cadet-gray': '#94A6AE',
        'taupe': '#413A30',
        'brown-sugar': '#C57B57',
        'bistro': '#251605',
        'bistre': '#2F1D0B',
        'coffee': '#75492E',
        'chamoisee': '#8E7956',
        'peach-yellow': '#F7DBA7',
        'burnt-umber': '#8C271E',
        'russian-violet': '#2C0735',
        'dimgray': '#6D6875',
        'jackobean': '#3E362E',
        'rosetaupe': '#926765',
        'testText': '#3E362E',
        'testBg': '#6d6875',
      }
    },
  },
  plugins: [],
}