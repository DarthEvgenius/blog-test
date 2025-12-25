<template>
<section class="blog">
  <h1 class="blog__title">Articles</h1>
  
  <div v-if="isLoading">Loading...</div>

  <BlogList v-else />
</section>
</template>

<script setup lang='ts'>
const postsStore = usePostsStore()

await callOnce(
  'posts-store-init',
  async() => {
    await postsStore.fetchPosts()
  },
  { mode: 'navigation'}
)

const isLoading = computed(() => postsStore.isLoading)


</script>

<style scoped>
.blog {
  padding-top: 8.3vw;
  padding-bottom: 9.7vw;
  margin-inline: auto;
  max-width: 1217px;
}

.blog__title {
  margin-bottom: 2.5rem;
  font-size: var(--fz-xl);
  line-height: 1;
}
</style>
