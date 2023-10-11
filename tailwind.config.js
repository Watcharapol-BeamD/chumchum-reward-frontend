/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt','sans-serif'],
        Rampart: ["Rampart One", "sans-serif"],
        'Pixelify-Sans':['Pixelify Sans',"sans-serif"]
      },
    },
  },
  plugins: [],
};
