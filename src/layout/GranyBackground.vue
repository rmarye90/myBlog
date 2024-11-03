<script setup lang="ts">
// GrainyBackground.vue
import { ref } from 'vue'

// Vous pouvez ajuster ces valeurs selon vos besoins
const baseColor = ref('#ffffff')
</script>

<template>
  <div class="relative min-h-screen w-full">
    <!-- Conteneur principal avec la couleur de fond de base -->
    <div class="absolute inset-0" :style="{ backgroundColor: baseColor }"></div>
    
    <!-- Filtre SVG pour créer l'effet de grain -->
    <svg class="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
         xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.80"
          numOctaves="4" 
          stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>

    <!-- Contenu de votre page -->
    <div class="relative z-10">
      <slot></slot>
    </div>
  </div>
</template>

<style>
/* Optionnel : Animation subtile pour donner plus de vie à la texture */
@keyframes subtle-motion {
  0% { transform: translate(0, 0); }
  50% { transform: translate(1px, 1px); }
  100% { transform: translate(0, 0); }
}

.animate-grain {
  animation: subtle-motion 8s infinite;
}
</style>