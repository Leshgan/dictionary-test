<template>
  <div class="list">
    <v-word
        v-for="word in words"
        :key="word.word"
        :word="word"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VWord from '@/components/VWord';
import { filter } from '@/mixins/filter';

export default {
  name: 'Favorites',
  components: { VWord },
  mixins: [ filter ],
  computed: {
    ...mapGetters({
      words: 'favorites/favorites',
    }),
  },
}
</script>

<style scoped>

</style>
