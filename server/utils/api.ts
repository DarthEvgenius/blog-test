import type { Post } from '~/types'

export function createApiResponse<T>(data: T, error?: any) {
  return {
    data,
    error: error || null
  }
}

// Type guard for Post
export function isPost(data: any): data is Post {
  return (
    data &&
    typeof data.id === 'string' &&
    typeof data.createdAt === 'string' &&
    typeof data.title === 'string' &&
    typeof data.preview === 'string' &&
    typeof data.image === 'string' &&
    typeof data.description === 'string'
  )
}

// Type guard for Post array
export function isPostArray(data: any): data is Post[] {
  return Array.isArray(data) && data.every(isPost)
}