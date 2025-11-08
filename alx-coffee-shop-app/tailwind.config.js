/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/preset");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          primary: "#C67C4E",
          dark: "#2F2D2C",
          cream: "#F9F5F2",
        },
      },
    },
  },
  presets: [nativewind],
  plugins: [],
};
