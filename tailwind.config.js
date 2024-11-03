/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from '@iconify/tailwind';

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
    addDynamicIconSelectors(),
  ],
}
