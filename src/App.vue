<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from '@/lib/supabaseClient'
import { Icon } from '@iconify/vue'
import GranyBackground from '@/layout/GranyBackground.vue'

console.log(supabase)
</script>

<template>
  <GranyBackground>
    <nav class="flex items-center justify-end gap-4 mr-4 p-8 text-3xl">
      <RouterLink class="hover:text-purple-600 font-semibold" to="/index"
        ><Icon
          icon="iconamoon:home-thin"
          class="icon-[iconamoon--home-thin] w-8 h-8 hover:text-purple-600"
      /></RouterLink>
      <RouterLink class="hover:text-purple-600 font-semibold px-4" to="/about"
        ><Icon
          icon="iconamoon:information-square-thin"
          class="icon-[iconamoon--home-thin] w-8 h-8 hover:text-purple-600"
      /></RouterLink>
      <RouterLink class="hover:text-purple-600 font-semibold" to="/posts"
        ><Icon
          icon="iconamoon:news-thin"
          class="icon-[iconamoon--home-thin] w-8 h-8 hover:text-purple-600"
      /></RouterLink>
    </nav>
    <RouterView />
  </GranyBackground>
</template>
