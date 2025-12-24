<template>
<div>
  post {{ id }}
</div>
</template>

<script setup lang='ts'>
const route = useRoute()
const id = route.params.id
</script>

<style module lang='scss'>

</style>
