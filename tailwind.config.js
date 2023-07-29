/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        glass: "rgba(255,255,255,0.25)",
        brown:"rgb(30,30,17)"
      }
    },
    backgroundImage:{
      back:"url(./assets/background.svg)"
    }
  },
  plugins: [],
}