import type { Post, PostInList } from '~/types'
import { isPostArray } from '~/server/utils/api'

export default defineEventHandler(async (event): Promise<{ posts: PostInList[] }> => {
  const config = useRuntimeConfig()
  const res = await $fetch(`${config.apiBase}${config.public.apiPath}/posts/`)
  
  // Validate response type
  if (!isPostArray(res)) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Invalid response format'
    })
  }

  const postsInList: PostInList[] = res.map(({ id, preview, image, title }) => ({ id, preview, image, title }))
  
  return { posts: postsInList }
})