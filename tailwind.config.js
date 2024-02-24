/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,src}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#EB3349",
        violet: "#1B0637",
        white: "#FAFAFA",
        orange: "#F45C43",
        indigo: "#380D71",
        black: "#252525",
      },
    },
  },
  plugins: [],
};
