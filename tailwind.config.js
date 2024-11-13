/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: "#2da888",
        headerhover: "#1b6451",

      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require('daisyui'),],

}

