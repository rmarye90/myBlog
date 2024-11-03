import { supabase } from '@/lib/supabaseClient'
import { ref, onMounted } from 'vue'
import type { Post } from '@/types/Post'

export const useFetchPosts = (limit: number | null) => {
  const posts = ref<Post[]>([])

  async function getPosts() {
    if (limit) {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .order('created_at', { ascending: false })
        .limit(limit)

      posts.value = data || []
      if (error) {
        console.error('Erreur lors de la récupération des posts:', error)
      }
    } else {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .order('created_at', { ascending: false })

      posts.value = data || []
      if (error) {
        console.error('Erreur lors de la récupération des posts:', error)
      }
    }

    console.log('Posts:', posts)
  }

  onMounted(() => {
    getPosts()
  })

  return { posts }
}
