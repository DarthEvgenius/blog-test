<template>
  <ul class="list">
    <li
      v-for="post in posts"
      :key="post.id"
      class="list__item"
    >
      <BlogCard
        :image-src="post.image"
        :alt-text="post.title"
        :text="post.preview"
        :id="post.id"
      />
    </li>
  </ul>
</template>

<script setup lang='ts'>
  const postsStore = usePostsStore()

  const posts = computed(() => postsStore.posts)
  const post = computed(() => postsStore.currentPost)

  // const randomLinks = useState('random-image-links', () => generateRandomLinks(86))

  // function generateRandomLinks(count: number): string[] {
  //   const links: string[] = []

  //   while (links.length < count) {
  //     const randomNumber = Math.floor(Math.random() * count)
  //     const link = `https://picsum.photos/280/280?random=${randomNumber}`
  //     links.push(link)
  //   }

  //   return links
  // }
</script>

<style scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    column-gap: 2rem;
    row-gap: 3.75rem;
  }

  .list__item {

  }
</style>
