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
  <h1 class="text-6xl text-purple-600 text-center font-playwrite">
    Hello, Post!
  </h1>
  <article class="mt-20 flex justify-center">
    <div class="max-w-4xl">
    <time
      :datetime="useFormatDate(post?.created_at).formatedDate"
      class="font-playwrite block text-sm/6 text-gray-600"
      >{{ useFormatDate(post?.created_at).formatedDate }}</time
    >
    <h2
      class="font-playwrite mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600"
    >
      {{ post?.title }}
    </h2>
    <p class="mt-4 text-sm/6 text-gray-600">
      {{ post?.content }}
    </p>
    </div>
  </article>
</template>
