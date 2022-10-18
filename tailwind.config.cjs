/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1650px",
      },

      fontFamily: {
        sans: ["Oswald", "sans-serif"],
      },
      animation: {
        pop: "pop 250ms",
      },
      keyframes: {
        pop: {
          "0%": {
            transform: "scale(1)",
          },

          "50%": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
