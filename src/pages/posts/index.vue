<script setup lang="ts">
import { useFetchPosts } from '@/composables/useFetchPosts'
import { useFormatDate } from '@/composables/useFormatDate'

const { posts } = useFetchPosts(null)
</script>

<template>
  <h1 class="p-2 text-6xl text-primary-light dark:text-primary-dark text-center font-playwrite">
    Hello, Folks !
  </h1>
  <div class="bg-transparent py-24 sm:py-32">
    <div class="mx-auto w-full">
      <div
        v-for="post in posts"
        :key="post.id"
        class="mx-auto w-full max-w-4xl pt-12 sm:pt-16 lg:pt-0"
      >
        <div class="w-[1200px] mx-auto -my-12">
          <article class="mx-auto py-12">
            <div class="group relative max-w-4xl">
              <time
                :datetime="useFormatDate(posts[0]?.created_at).formatedDate"
                class="font-playwrite block text-sm/6 text-titreSecondary-light dark:text-titreSecondary-dark"
                >{{ useFormatDate(posts[0]?.created_at).formatedDate }}</time
              >
              <h2
                class="font-playwrite mt-2 text-lg font-semibold text-titreSecondary-light dark:text-titreSecondary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark cursor-pointer"
              >
                <a href="#">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </a>
              </h2>
              <p class="mt-4 text-sm/6 text-text-light dark:text-text-dark">
                {{ post.content }}
              </p>
            </div>
            <div class="mt-4 flex">
              <a
                href="#"
                class="relative flex gap-x-2.5 text-sm/6 font-semibold text-titreSecondary-light dark:text-titreSecondary-dark"
              >
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                Lindsay Walton
              </a>
            </div>
          </article>
        </div>
        <!-- More posts... -->
      </div>
    </div>
  </div>
</template>
