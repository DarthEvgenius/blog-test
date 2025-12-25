import { defineStore } from "pinia"
import type { Post, PostInList } from '~/types'

export const usePostsStore = defineStore("posts", () => {
  const posts = shallowRef<PostInList[]>([])
  const currentPost = shallowRef<Post | null>(null)
  
  const isLoading = shallowRef(false)
  const isInitialized = shallowRef(false)
  const api = useApi()

  const fetchPosts = async () => {
    isLoading.value = true
    try {
      const fetchedPosts = await api.getPosts()
      posts.value = fetchedPosts
      isInitialized.value = true
      console.log('Fetched posts:', fetchedPosts.length)
    } catch (error) {
      console.error('Failed to fetch posts:', error)
      posts.value = [] // Reset on error
    } finally {
      isLoading.value = false
    }
  }

    const fetchPostById = async (id: string) => {
    isLoading.value = true
    try {
      const post = await api.getPostById(id)
      currentPost.value = post
      console.log('Fetched post:', post)
    } catch (error) {
      console.error(`Failed to fetch post ${id}:`, error)
      currentPost.value = null
    } finally {
      isLoading.value = false
    }
  }

  return {
    posts,
    currentPost,
    isLoading,

    fetchPosts,
    fetchPostById,
  }
})