import type { Post } from '~/types'


export const useApi = () => {
  const getPosts = async (): Promise<Post[]> => {
    try {
      const { data, error } = await useFetch(
        '/api/entries',
        {
          transform: (response: { posts: Post[] }) => response.posts,
        }
      )

      if (error.value) {
        throw new Error(`Fetch failed: ${error.value.message}`)
      }

      if (!data.value) {
        throw new Error('No data received from server')
      }

      return data.value
    } catch (error) {
      console.error('Error fetching posts:', error)
      return []
    }
  }

  const getPostById = async (id: string): Promise<Post | null> => {
    if (!id || typeof id !== 'string') {
      console.error('Invalid post ID provided')
      return null
    }

    try {
      const { data, error } = await useFetch<{ post: Post }>(
        `/api/entries/${id}`
      )

      if (error.value) {
        throw new Error(`Fetch failed: ${error.value.message}`)
      }

      return data.value?.post || null
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error)
      return null
    }
  }

  return {
    getPosts,
    getPostById,
  }
}