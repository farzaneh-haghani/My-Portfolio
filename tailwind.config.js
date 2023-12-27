const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#262626",
        light: "#fff",
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};
