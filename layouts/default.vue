<template>
  <div class="wrapper">
    <Header class="header" />

    <main class="main">
      <slot />
    </main>
    
    <Footer class="footer">footer</Footer>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.wrapper {
  --main-padding: max(7.7vw, 1rem);
}
.header {
  
}
.main {
  padding-inline: var(--main-padding);
}
.footer {
  padding-inline: var(--main-padding);
}
</style>
