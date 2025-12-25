<template>
<div class="post">
  <div v-if="isLoading">Loading...</div>

  <section v-else-if="currentPost">
    <h1 class="post__title">
      {{ currentPost.title }}
    </h1>
    
    <div class="post__content">
      <div class="post__image">
        <NuxtImg
          src="/images/bike.png"
          :alt="currentPost.title"
          width="1216"
          height="700"
          densities="x1 x2"
          placeholder
          format="webp"
          fit="cover"
          preload
        />
      </div>

      <div class="post__descr">
        <h2 class="post__descr--title">About</h2>

        <p class="post__descr--text">
          {{  currentPost.description }}
        </p>
      </div>
    </div>
  </section>

  <div v-else>
    Post not found
  </div>
</div>
</template>

<script setup lang='ts'>
const route = useRoute()
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id

const postsStore = usePostsStore()
const {isLoading, currentPost} = storeToRefs(postsStore)

await postsStore.fetchPostById(id)

</script>

<style scoped>
.post {
  padding-top: 9.5vw;
  padding-bottom: 6.4vw;
}

.post__title {
  margin-bottom: 2rem;
  font-size: var(--fz-xl);
  line-height: 1;
}

.post__content {
  padding-top: 40px;
}

.post__image {
  margin-bottom: 80px;
}

.post__descr {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post__descr--title {
  font-size: var(--fz-sm);
  line-height: 1;
}

.post__descr--text {
  max-width: 55%;
  font-size: var(--fz-lg);
  line-height: 1.24;
  text-wrap: pretty;
}
</style>
