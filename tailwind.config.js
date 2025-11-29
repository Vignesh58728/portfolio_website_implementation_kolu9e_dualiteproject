/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A53DFF",
        secondary: "#FF8D28",
        accent: "#FDC435",
        dark: {
          DEFAULT: "#2C2C2C",
          100: "#132238",
          200: "#121216",
          300: "#09090B",
          400: "#18181B"
        },
        light: {
          DEFAULT: "#FFFFFF",
          100: "#FFFCFC",
          200: "#FFF8F8",
          300: "#EEEEEE",
          gray: "#87909D"
        }
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        michroma: ["Michroma", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
