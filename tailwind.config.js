/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif',
        itim: 'Itim, ui-serif',
        playwrite: 'Playwrite GB S, ui-serif',
      }
    },
  },
  plugins: [
  ],
}
