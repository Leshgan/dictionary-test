<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }" exact>
        <span>Word Keeper</span>
      </router-link>
      <router-link :to="{ name: 'Favorites' }">
        <v-star active />
        Starred Words
      </router-link>
    </nav>
  </header>
</template>

<script>
import VStar from '@/components/VStar';

export default {
  name: 'BaseHeader',
  components: { VStar },
};
</script>
