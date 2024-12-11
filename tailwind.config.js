/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      quadrary: "#2C2744",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
      "rose-100": "#ffe0ee",
      'yellow-text-gradient': 'linear-gradient(90deg, #f59e0b, #fbbf24)',
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
      '3d': 'inset -5px -5px 10px rgba(255, 255, 255, 0.6), inset 5px 5px 15px rgba(0, 0, 0, 0.2), 5px 5px 15px rgba(0, 0, 0, 0.3)',
    },
    screens: {
      xs:{min: "374px", max: "450px"},
      sml: { min: "451px", max: "810px" },
      xll: { min: "1260px", max: "1440px" },
    },
    height: {
      80: "20rem",
      100: "25rem",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
      '3d-ball': 'radial-gradient(circle, #ffffff, #d9d9d9, #b3b3b3)',
    },
  },
};
export const plugins = [];