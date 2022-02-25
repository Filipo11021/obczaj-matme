const plugin = require("tailwindcss/plugin");

const isObject = (value) => typeof value === "object";
const isString = (value) => typeof value === "string";
const isNumber = (value) => typeof value === "number";

const flattenTheme = (theme, opts = {}) => {
  if (!isObject(theme)) {
    throw new Error("The `theme` field should contains an object.");
  }

  const { prefix = "", separator = "-" } = opts;

  return Object.keys(theme).reduce((acc, key) => {
    const value = theme[key];
    if (isObject(value)) {
      return Object.assign(
        acc,
        flattenTheme(value, {
          prefix: `${prefix}${key}${separator}`,
          separator,
        })
      );
    } else if (isString(value) || isNumber(value)) {
      return Object.assign(acc, { [`${prefix}${key}`]: value });
    } else {
      return acc;
    }
  }, {});
};
//#F1B605 decorations
//2 ostatnie secondary
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
        primary: "#f0b504",
        secondary: "#F4CA4C",
        grey: "#EBE9E9",
        "testimonials-card": "#F8D05A",
        "decoration-1": "#F4CA4C",
        "decoration-2": "#F1B605",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("eighth", "&:nth-child(8)");
      addVariant("second", "&:nth-child(2)");
    }),
  ],
};
