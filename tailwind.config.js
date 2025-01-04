/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // nouvelle animation shimmer pour le squelette de chargement
      keyframes: {
        shimmer: { "100%": { transform: "translateX(100%)" } }, // déplace le gradient de gauche à droite
      },
      animation: { shimmer: "shimmer 1.5s infinite" }, // applique l'animation shimmer en boucle pendant 1.5s
    },
  },
  plugins: [],
};
