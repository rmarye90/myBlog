<script setup lang="ts">
import { useFetchPostById } from '@/composables/useFetchPostById'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useFormatDate } from '@/composables/useFormatDate'

const route = useRoute('/posts/[id]')

const postId = route.params.id

const { post } = useFetchPostById(Number(postId))

watchEffect(() => {
  console.log(post.value)
})
</script>

<template>
  <h1 class="text-6xl text-primary-light dark:text-primary-dark text-center font-playwrite">
    Hello, Post!
  </h1>
  <article class="mt-20 flex justify-center">
    <div class="max-w-4xl">
    <time
      :datetime="useFormatDate(post?.created_at).formatedDate"
      class="font-playwrite block text-sm/6 text-text-light dark:text-text-dark"
      >{{ useFormatDate(post?.created_at).formatedDate }}</time
    >
    <h2
      class="font-playwrite mt-2 text-lg font-semibold text-titreSecondary-light dark:text-titreSecondary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark"
    >
      {{ post?.title }}
    </h2>
    <p class="mt-4 text-sm/6 text-text-light dark:text-text-dark">
      {{ post?.content }}
    </p>
    </div>
  </article>
</template>
