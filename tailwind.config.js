/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        stencil: ['"Stardos Stencil"', "serif"],
        quantico: ['"Quantico"', "sans-serif"],
      },
      colors: {
        "custom-gray": "#4d4d4d",
        "custom-green": "#2ECC71",
      },
    },
  },
  plugins: [],
};
