/** @type {import('tailwindcss').Config} */
const gradients = {
  primary_300_400: "linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)",
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        //roboto: ["Roboto"],
        notosans: ["Noto Sans JP "],
        inter: ["Inter"],
      },
      backgroundImage: {
        img1: "url(http://localhost:3000/static/media/hero.538f2665c079a1f5d397.png)",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
      },
      colors: {
        light: "#FFFFFF",
        primary: "#16405B",
        primary_300: "#FFCC21",
        primary_400: "#FF963C",
        primary_500: "#EA6C00",
        primary_300_400: gradients.primary_300_400,
        secondary: "#8FE9D0",
        dark_600: "#2E2E2E",
        dark_500_text: "#414141",
        gray_400_text: "#777777",
        // ---------------------
        myColor: "#b5e107",
        colorBlack: "black",
        colorHerderHover: "#fd7e14",
        colorAuth: "#9b9b9b",
        colorBtnBuy: "#fb4226",
        bgRate: "rgba(12, 27, 54, 0.8)",
        darkBlue_1: "#3B447A",
        darkBlue_2: "#222B5F",
        darkBlue_3: "#0A0F19",
        darkBlue_4: "#101826",
        mediumSlateBlue: "#6C62E2",
        lightBlue_1: "#F3F1FE",
        lightBlue_2: "#ADBDE3",
        white: "#FFFFFF",
        black: "#000000",
        BlueClound: "#2F327D",
        OrangeClound: "#F48C06",
      },
      height: {
        128: "32rem",
        header: "64px",
      },
    },
    screens: {
      laptop: "770px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
