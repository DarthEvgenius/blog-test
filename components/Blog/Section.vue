<template>
<section class="wrapper">
  <h1>Articles</h1>
  
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
.wrapper {
  margin-inline: auto;
  max-width: 1217px;
}
</style>
