<template>
<div>
  Posts {{ posts }}
  Post {{ post }}
</div>
</template>

<script setup lang='ts'>
// const { getPosts, getPostById } = useApi()
// const posts = await getPosts()
// const post = await getPostById('3')

const postsStore = usePostsStore()
await postsStore.fetchPosts()

const posts = computed(() => postsStore.posts)
const post = computed(() => postsStore.currentPost)
const isLoading = computed(() => postsStore.isLoading)

</script>

<style module lang='scss'>

</style>
