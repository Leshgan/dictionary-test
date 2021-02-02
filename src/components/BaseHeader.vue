<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }" exact>
        <span>Word Keeper</span>
      </router-link>
      <router-link :to="{ name: 'Favorites' }">
        <star-icon class="icon star-icon"/>
        Starred Words
      </router-link>
    </nav>
  </header>
</template>

<script>
import StarIcon from '@/assets/star-selected.svg';

export default {
  name: 'BaseHeader',
  components: {
    StarIcon,
  },
}
</script>
