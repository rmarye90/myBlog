<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue';

</script>

<template>
  <div class="relative min-h-screen w-full transition-colors duration-300">
    <div 
      class="absolute inset-0 bg-white dark:bg-gray-900 transition-colors duration-300"
    ></div>
    
    <svg 
      class="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.80"
          numOctaves="4" 
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>

    <!-- Contenu de ta page -->
    <div class="relative z-10">
      <slot></slot>
    </div>
  </div>
</template>

<style>
@keyframes subtle-motion {
  0% { transform: translate(0, 0); }
  50% { transform: translate(1px, 1px); }
  100% { transform: translate(0, 0); }
}

.animate-grain {
  animation: subtle-motion 8s infinite;
}
</style>