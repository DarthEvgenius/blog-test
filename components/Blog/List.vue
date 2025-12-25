<template>
  <div>
    <ul class="list">
      <li
        v-for="post in postsToShow"
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

    <ClientOnly>
      <Pagination
        v-model:post-indecies-to-show="postIndeciesToShow"
        :total-items="posts.length"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang='ts'>
  const { posts } = storeToRefs(usePostsStore())

  const postIndeciesToShow = ref<{ start: number, end: number }>(refreshPagination())

  const postsToShow = computed(() => {
    return posts.value.slice(postIndeciesToShow.value.start, postIndeciesToShow.value.end)
  })

  function refreshPagination () {
  return { start: 0, end: 8 }
}
</script>

<style scoped>
  .list {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    column-gap: 2rem;
    row-gap: 3.75rem;
  }
</style>
