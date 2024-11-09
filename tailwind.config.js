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
        primaryDark: '#4f46e5',
        secondary: '#f9a8d4',
        secondaryDark: '#38bdf8',
        tertiary: '#111827',
        tertiaryDark: '#d4d4d4',
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
