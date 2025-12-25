<template>
<div class="header">
  <NuxtLink to="/" class="header__logo">
    <NuxtImg
      src="/images/logo.png"
      alt="Logo"
      format="webp"
      densities="1x 2x"
      preload
      width="84"
      height="25"
    />
  </NuxtLink>
  
  <ul class="header__navigaiton navigation">
    <li class="navigation__item">
      <NuxtLink to="/posts">Works</NuxtLink>
    </li>
    <li class="navigation__item">
      <NuxtLink to="/posts">About</NuxtLink>
    </li>
  </ul>

  <div class="header__controls controls">
    <button class="controls__lang">
      <NuxtImg
        src="/images/language.png"
        format="webp"
        width="52"
        height="52"
        densities="1x 2x"
      />
    </button>
    <button class="controls__action">
      Let's work
    </button>
  </div>
</div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.header {
  width: 100vw;
  padding-inline: 40px;
  padding-block: 35px;
  display: flex;
  align-items: center;
}

.header__logo {
  margin-right: auto;
  display: inline-block;
  width: 84px;
  height: 25px;
}

.navigation {
  margin-right: 91px;
  display: flex;
  gap: 5rem;
}

.navigation__item {
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.7;
  }
}

.controls {
  display: flex;
  gap: 16px;
}

.controls__lang {
  width: 52px;
  height: 52px;
}

.controls__action {
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black-dark);
  border-radius: 999px;
  color: var(--clr-white);
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.8;
  }
}
</style>
