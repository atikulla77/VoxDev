/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",

      desktop1: "700px",
      desktop2: "530px",
      desktop3: "400px",
      desktop4: "360px",
    },
  },
  plugins: [],
};
