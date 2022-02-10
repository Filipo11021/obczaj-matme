const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        'primary': "#f0b504",
        'secondary': "#F4CA4C",
        'grey': '#EBE9E9'
      },
    },
  },
  plugins: [
    plugin(({addVariant}) => {
      addVariant('eighth', '&:nth-child(8)')
      addVariant('second', '&:nth-child(2)')
    })
  ],
};
