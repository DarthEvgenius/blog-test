// export default defineEventHandler(async (event) => {
//   const config = useRuntimeConfig();
//   const id = getRouterParam(event, 'id')
//   const res = await $fetch(`${config.public.apiBase}/qtim-test-work/posts/${id}`);
//   return res;
// })

// server/api/entries/index.get.ts
import type { Post } from '~/types'
import { isPost } from '~/server/utils/api'

export default defineEventHandler(async (event): Promise<{ post: Post }> => {
  const config = useRuntimeConfig()
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Post ID is required'
    })
  }

  const res = await $fetch(`${config.public.apiBase}/qtim-test-work/posts/${id}`)
  
  // Validate response type
  if (!isPost(res)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found'
    })
  }
  
  return { post: res }
})