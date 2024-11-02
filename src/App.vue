<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="flex items-center justify-end gap-4 mr-4 p-4 text-3xl">
    <RouterLink
      class="hover:text-purple-600 font-bold border-r-4 border-black px-4"
      to="/index"
      >Home</RouterLink
    >
    <RouterLink
      class="hover:text-purple-600 font-bold border-r-4 border-black px-4"
      to="/about"
      >About</RouterLink
    >
    <RouterLink class="hover:text-purple-600 font-bold" to="/user/1"
      >User</RouterLink
    >
  </nav>
  <RouterView />
</template>
