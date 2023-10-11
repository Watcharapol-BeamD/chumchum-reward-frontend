/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        Rampart: ["Rampart One", "sans-serif"],
        "Pixelify-Sans": ["Pixelify Sans", "sans-serif"],
      },
      height: {
        13: "3.25rem",
        18: "4.5rem",
        54: "13.5rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "52rem",
      },
      width: {
        "70%": "70%",
        "30%": "30%",
        13: "3.25rem",
        18: "4.5rem",
        54: "13.5rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "52rem",
      },
    },
  },
  plugins: [],
};
