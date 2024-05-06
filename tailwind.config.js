// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // single component styles
    "./node_modules/@nextui-org/theme/dist/components/button.js", 
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1.125rem", // text-medium
          large: "2rem", // text-large
        },
      }, // common layout tokens (applied to all themes)
      themes: {
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            // background: "#cb9eb5", // or DEFAULT
            background: "#1F1F1F",
            foreground: "#cb9eb5", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          }, 
        },
        // ... custom themes
      },
    }),
  ],
};
