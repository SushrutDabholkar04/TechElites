/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        navy: "#0D9488",
        custom_gray: "#F6F7FB",
        custom_black:"#042228",
        custom_green:"#0D4754",
        custom_teal :"#00A599",
      },
      animation: {
        floatUp: "floatUp 2s ease-out forwards",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontFamily: {
        "new-amsterdam": ['"Comfortaa"', "sans-serif"],
      },
    },
  },
  plugins: [],
};



