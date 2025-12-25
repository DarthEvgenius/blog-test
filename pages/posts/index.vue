<template>
<div>
  <!-- posts {{ posts }} -->

  <BlogSection />
</div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';

const store = usePostsStore()
// const { posts } = storeToRefs(store)
</script>

<style module lang='scss'>

</style>
