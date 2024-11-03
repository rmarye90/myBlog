<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref, onMounted } from 'vue'

interface Post {
  id: number
  title: string
  content: string
  author_id: number
  created_at: string
}

const posts = ref<Post[]>([])


async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select()
    .order('created_at', { ascending: false })
    .limit(2)

  if (error) {
    console.error('Erreur lors de la récupération des posts:', error)
  }

  posts.value = data || []
  console.log('Posts:', posts)
}

onMounted(() => {
  getPosts()
})
</script>

<template>
  <h1
    class="p-2 text-6xl text-purple-600 text-center bg-slate-300 font-playwrite"
  >
    Hello, Home!
  </h1>
  <div class="bg-white py-24 sm:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8"
    >
      <article class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        <time datetime="2020-03-16" class="block text-sm/6 text-gray-600"
          >{{posts[0]?.created_at}}</time
        >
        <h2
          id="featured-post"
          class="mt-4 text-pretty text-3xl font-semibold font-playwrite tracking-tight text-gray-900 sm:text-4xl"
        >
          We’re incredibly proud to announce we have secured $75m in Series B
        </h2>
        <p class="mt-4 text-lg/8 text-gray-600">
          Libero neque aenean tincidunt nec consequat tempor. Viverra odio id
          velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit
          viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.
        </p>
        <div
          class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col"
        >
          <div class="flex">
            <a
              href="#"
              class="text-sm/6 font-semibold text-indigo-600"
              aria-describedby="featured-post"
              >Continue reading <span aria-hidden="true">&rarr;</span></a
            >
          </div>
          <div class="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
            <a
              href="#"
              class="flex gap-x-2.5 text-sm/6 font-semibold text-gray-900"
            >
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="h-6 w-6 flex-none rounded-full bg-gray-50"
              />
              Michael Foster
            </a>
          </div>
        </div>
      </article>

      <div v-for="post in posts" :key="post.id" 
        class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0"
      >
        <div class="-my-12 divide-y divide-gray-900/10">
          <article class="py-12">
            <div class="group relative max-w-xl">
              <time datetime="2020-03-16" class="block text-sm/6 text-gray-600"
                >Mar 10, 2020</time
              >
              <h2
                class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600"
              >
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Boost your conversion rate
                </a>
              </h2>
              <p class="mt-4 text-sm/6 text-gray-600">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat consectetur nulla deserunt vel iusto
                corrupti dicta laboris incididunt.
              </p>
            </div>
            <div class="mt-4 flex">
              <a
                href="#"
                class="relative flex gap-x-2.5 text-sm/6 font-semibold text-gray-900"
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

          <!-- More posts... -->
        </div>
      </div>
    </div>
  </div>
</template>