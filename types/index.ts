export type Post = {
  id: string
  createdAt: string
  title: string
  preview: string
  image: string
  description: string
}

export type PostInList = Pick<Post, 'preview' | 'image' | 'title' | 'id'>
