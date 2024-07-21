/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FFCE22",
      "primary-faded": "#FFD84D",
      secondary: "#BDBDBD",
      "secondary-faded": "#CDCDCD",
      blue: "#5087F8",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
