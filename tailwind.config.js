/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      play: ['Play', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

