/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#363958",
        "dark-2" : "#777777",
        "hero-bg": "#FFFBF0",
        "hero-orange": "#FABE4C",
        "card-bg": "#F1F1F1",
      },
      spacing: {
        "max-web-width": "1440px",
        "max-content-width": "1170px",
      },
      fontFamily : {
        "manrope" : ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
