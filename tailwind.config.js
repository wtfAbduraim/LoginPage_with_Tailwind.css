/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteSmoke: "#F5F5F5",
        green: "rgba(4, 195, 92, 1)",
        midnight: "rgba(45, 55, 72, 1)",
        darkBlue: "rgba(44, 82, 130, 1)",
        grey: "rgba(74, 85, 104, 1)",
        blue: "rgb(30, 144, 255)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
