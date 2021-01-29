<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }">Word Keeper</router-link>
      <router-link :to="{ name: 'Favorites' }">Starred Words</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
}
</script>

<style scoped>

</style>
