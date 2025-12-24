import type { Post } from '~/types'
import { isPostArray } from '~/server/utils/api'

export default defineEventHandler(async (event): Promise<{ posts: Post[] }> => {
  const config = useRuntimeConfig()
  const res = await $fetch(`${config.public.apiBase}/qtim-test-work/posts/`)
  
  // Validate response type
  if (!isPostArray(res)) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Invalid response format'
    })
  }
  
  return { posts: res }
})