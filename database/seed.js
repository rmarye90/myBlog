import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import { faker } from '@faker-js/faker/locale/fr'

dotenv.config()

const supabaseURL = process.env.VITE_SUPABASE_URL
const supabaseServiceKey = process.env.VITE_SUPABASE_SERVICE

if (!supabaseURL || !supabaseServiceKey) {
  throw new Error('Missing environment variables')
}

const supabase = createClient(supabaseURL, supabaseServiceKey)

const AUTHOR_COUNT = 3
const POSTS_PER_AUTHOR = 5

async function cleanTables() {
  try {
    console.log('Nettoyage des tables...')
    const { error: postsDeleteError } = await supabase
      .from('posts')
      .delete()
      .not('id', 'is', null)

    if (postsDeleteError)
      throw new Error(`Erreur suppression posts: ${postsDeleteError.message}`)

    const { error: authorsDeleteError } = await supabase
      .from('authors')
      .delete()
      .not('id', 'is', null)

    if (authorsDeleteError)
      throw new Error(
        `Erreur suppression authors: ${authorsDeleteError.message}`,
      )

    console.log('✓ Tables nettoyées')
  } catch (error) {
    console.error('Erreur pendant le nettoyage:', error)
    throw error
  }
}

async function seed() {
  await cleanTables()
  // Generate authors
  const authors = Array.from({ length: AUTHOR_COUNT }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
  }))

  const { data: createdAuthors, error: authorsError } = await supabase
    .from('authors')
    .insert(authors)
    .select()

  const posts = createdAuthors.flatMap((author) =>
    Array.from({ length: POSTS_PER_AUTHOR }, () => ({
      title: faker.lorem.sentence({ min: 4, max: 10}),
      content: faker.lorem.paragraph(3),
      authorId: author.id,
      created_at: faker.date.between({from: '2020-01-01', to: new Date()}).toISOString(),
    })),
  )

  console.log(posts)


}

seed()
