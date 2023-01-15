/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "rgb(129 140 248)",
        customGray: "rgb(156 163 175)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
