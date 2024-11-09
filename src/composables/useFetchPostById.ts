import { supabase } from '@/lib/supabaseClient'
import { ref, onMounted } from 'vue'
import type { Post } from '@/types/Post'

export const useFetchPostById = (id: number) => {
    const post = ref<Post | null>(null)

    async function getPostById() {
        const { data, error } = await supabase
            .from('posts')
            .select()
            .eq('id', id)
            .single() // Ajout de .single() pour ne récupérer qu'un seul post

        post.value = data || null
        if (error) {
            console.error('Erreur lors de la récupération des posts:', error)
        }
        console.log(post.value)
    }

    onMounted(() => {
        getPostById()
    })

    return { post }
}