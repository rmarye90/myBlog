/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from '@iconify/tailwind'
import daisyui from 'daisyui'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c026d3',
        secondary: '#f9a8d4',
        tertiary: '#4b5563',
      },
      fontFamily: {
        display: 'Oswald, ui-serif',
        itim: 'Itim, ui-serif',
        playwrite: 'Playwrite GB S, ui-serif',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    daisyui,
  ],

}
