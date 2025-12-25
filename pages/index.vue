<template>
  <div class="hero">
    <NuxtImg
      class="hero__image"
      src="/images/qtim.png"
      alt="qtim"
      format="webp"
      densities="1x 2x"
      preload
      fit="inside"
      width="720"
      height="214"
    />

    <NuxtLink
      to="/posts"
      class="hero__link"
    >
      QTIM — тестовое задание
    </NuxtLink>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.hero {
  padding-block: 3rem;
  display: grid;
  place-items: center;
  gap: 8vw;
}

.hero__image {
  width: 720px;
  height: 214px;
  max-width: 100%;
}

.hero__link {
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.6;
  }
}
</style>
