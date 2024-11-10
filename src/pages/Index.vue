<script setup lang="ts">
import { useFormatDate } from '@/composables/useFormatDate'
import { useFetchPosts } from '@/composables/useFetchPosts'
import { useRouter } from 'vue-router'

const { posts } = useFetchPosts(3)

const router = useRouter()

const goToPost = (id: number) => {
  router.push(`/posts/${id}`)
}



</script>

<template>
  <h1 class="mt-20 p-2 text-6xl text-primary-light dark:text-primary-dark text-center font-playwrite">
    Hello, future !
  </h1>
  <div class="bg-transparent py-24 sm:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8"
    >
      <article class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        <time
          :datetime="useFormatDate(posts[0]?.created_at).formatedDate"
          class="font-playwrite block text-sm/6 text-text-light dark:text-text-dark"
          >{{ useFormatDate(posts[0]?.created_at).formatedDate }}</time
        >
        <h2
          id="featured-post"
          class="mt-4 text-pretty text-3xl font-semibold font-playwrite tracking-tight text-titreSecondary-light dark:text-titreSecondary-dark sm:text-4xl"
        >
          {{ posts[0]?.title }}
        </h2>
        <p class="line-clamp-3 mt-4 text-lg/8 text-text-light dark:text-text-dark">
          {{ posts[0]?.content }}
        </p>
        <div
          class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col"
        >
          <div class="flex">
            <a
              href="#"
              @click="goToPost(posts[0]?.id)"
              class="text-sm/6 font-semibold text-lien-light dark:text-lien-dark hover:text-lien-dark dark:hover:text-lien-light"
              aria-describedby="featured-post"
              >Continue reading <span aria-hidden="true">&rarr;</span></a
            >
          </div>
          <div class="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
            <a
              href="#"
              class="flex gap-x-2.5 text-sm/6 font-semibold text-titreSecondary-light dark:text-titreSecondary-dark"
            >
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="h-6 w-6 flex-none rounded-full"
              />
              Michael Foster
            </a>
          </div>
        </div>
      </article>

      <div>
        <div
          v-for="(post, index) in posts"
          :key="post.id"
        >
          <div v-if="index !== 0" class="-my-12">
            <article class="py-12">
              <div class="group relative max-w-xl">
                <time
                  :datetime="useFormatDate(posts[0]?.created_at).formatedDate"
                  class="font-playwrite block text-sm/6 text-text-light dark:text-text-dark"
                  >{{ useFormatDate(posts[0]?.created_at).formatedDate }}</time
                >
                <h2
                  class="font-playwrite mt-2 text-lg font-semibold text-titreSecondary-light dark:text-titreSecondary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark"
                >
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    {{ post.title }}
                  </a>
                </h2>
                <p class="line-clamp-3 mt-4 text-sm/6 text-text-light dark:text-text-dark">
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
                    class="h-6 w-6 flex-none rounded-full bg-transparent"
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
  </div>
</template>
