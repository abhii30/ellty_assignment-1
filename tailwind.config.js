/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FFCE22",
      "primary-faded": "#FFD84D",
      secondary: "#BDBDBD",
      "secondary-faded": "#CDCDCD",
      blue: "#2469F6",
      "blue-faded": "#5087F8",
      "blue-light": "#90caf9",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
