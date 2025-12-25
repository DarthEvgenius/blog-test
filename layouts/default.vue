<template>
  <div class="wrapper">
    <Header class="header" />

    <main class="main">
      <slot />
    </main>
    
    <footer class="footer">footer</footer>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.wrapper {
  padding-inline: max(7.7vw, 1rem);
}
.header {}
.main {}
.footer {}
</style>
