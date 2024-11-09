<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from '@/lib/supabaseClient'
import { Icon } from '@iconify/vue'
import GranyBackground from '@/layout/GranyBackground.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'

console.log(supabase)
</script>

<template>
  <GranyBackground>
    <nav class="flex items-center justify-end gap-4 mr-4 p-8 text-3xl">
      <RouterLink aria-label="Home" to="/index"
        ><Icon
          icon="iconamoon:home-thin"
          class="w-8 h-8 hover:text-primary dark:hover:text-primaryDark "
      /></RouterLink>
      <RouterLink aria-label="About" class="px-4" to="/about"
        ><Icon
          icon="iconamoon:information-square-thin"
          aria-label="About"
          class="w-8 h-8 hover:text-primary dark:hover:text-primaryDark"
      /></RouterLink>
      <RouterLink aria-label="Posts" to="/posts"
        ><Icon
          icon="iconamoon:news-thin"
          class="w-8 h-8 hover:text-primary dark:hover:text-primaryDark"
      /></RouterLink>
      <DarkModeToggle class="text-neutral-900 dark:text-amber-300 ml-4" />
    </nav>
    <RouterView />
  </GranyBackground>
</template>
