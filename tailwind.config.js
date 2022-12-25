/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        edygDark: {
          "primary": "#4C50DD",
          "secondary": "#8141DB",
          "accent": "#FFCD3B",
          "neutral": "#000000",
          "base-100": "#121221",
          "info": "#3C97D7",
          "success": "#34E362",
          "warning": "#FFCD3B",
          "error": "#F87272",
        },
      }
    ],
  },
  plugins: [
    require("daisyui"),
  ],
}
