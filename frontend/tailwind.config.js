/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:"#1C1C27",
        bgLight: "#1C1E27",
        primary:"#854CE6",
        text_primary:"#F2F3F4",
        text_primary1:"#adb5bd",
        text_secondary:"#b1b2b3",
        card:"#171721",
        card_light: '#191924',
        button:"#854CE6",
        white:"#FFFFFF",
        black:"#000000",
        text: "#C8CFD8",
        text1: "#F2F5F7",
        text2: "#626970",
        text3: "#575C66",
        text4: "#854ce6"

      },
      fonts: {
        title: "Space Grotesk, sans-serif",
        main: "Space Grotesk, sans-serif"
      },
    },
    screens: {
      'lg': {'max': '2023px'},
  

      'sm': {'max': '639px'},
      
    },
  },
  plugins: [],
}
