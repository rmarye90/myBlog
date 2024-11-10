/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from '@iconify/tailwind'
import daisyui from 'daisyui'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light:'#c026d3',
          dark:'#4f46e5',
        },
        text: {
          light:'#4b5563',
          dark:'#a8a29e',
        },
        titreSecondary: {
          light:'#111827',
          dark:'#d4d4d4',
        },
        lien: {
          light:'#f9a8d4',
          dark:'#38bdf8'
        },
        
        
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
