<template>
<div>
  <!-- posts {{ posts }} -->

  <Blog />
</div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';

const store = usePostsStore()
// const { posts } = storeToRefs(store)
</script>

<style module lang='scss'>

</style>
