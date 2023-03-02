/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'Light-red': '#FF5757',
      'Orangey-yellow': '#FFB01F',
      'Green-teal': '#00BD91',
      'Cobalt-blue': '#1125D4',
      'white': '#FFFFFF',
      'Pale-blue': '#EBF1FF',
      'Light-lavender': '#C8C7FF',
      'Dark-gray-blue': '#303B5A',
      'gradient-blue-1': '#7857FF',
      'gradient-blue-2': '#2E2BE9',
      'gradient-circle-blue-1': '#4E21CA',
      'gradient-circle-blue-2': '#2E2BE9'
    },
    extend: {
      fontFamily: {
        'sans': ['"Hanken Grotesk"']
      }
    },
  },
  plugins: [],
}
