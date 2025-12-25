<template>
  <div class="card">
    <div class="card__content">
      <div class="card__image">
        <!-- :src="imageSrc" -->
        <NuxtImg
          :src="'/images/image.webp'"
          :alt="altText"
          format="webp"
          width="280"
          height="280"
          fit="cover"
          densities="x1 x2"
          placeholder
          placeholder-class="custom"
        />
      </div>
      
      <p class="card__text">{{ text }}</p>
    </div>

    <NuxtLink
      :to="`/posts/${id}`"
      class="card__link"
    >
      Read more
    </NuxtLink>
  </div>
</template>

<script setup lang='ts'>
const { imageSrc, altText, text, id} = defineProps<{
  imageSrc: string
  altText: string
  text: string
  id: string
}>()
</script>

<style scoped>
.card {
  position: relative;
}

.card:hover {
  .card__content {
    transform: translateY(-2.5rem);
  }
}

.card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-size: var(--fz-md);
  background-color: var(--main-bg-clr);
  position: relative;
  z-index: 2;
  will-change: transform;
  transition: transform 300ms ease;
}

.card__image {
  width: 100%;
  overflow: hidden;
}

.card__text {
  text-wrap: pretty;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.card__link {
  color: var(--clr-purple-dark);
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 200ms ease;

  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
}

.card__link:hover {
  opacity: 1;
}
</style>
