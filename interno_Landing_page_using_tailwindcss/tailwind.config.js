/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "50px",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Serif Display", "serif"],
      },

      colors: {
        main: "#C2FBEF",
        secend: "#80FFEC",
        heading_Color: "#8E4A49",
        text_color: "#191919",
      }
    },
  },
  plugins: [],
}

