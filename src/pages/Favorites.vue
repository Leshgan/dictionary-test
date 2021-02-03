<template>
  <div class="favorites">
    <h1 class="main-title">Starred Words</h1>
    <div class="list">
      <draggable
        v-model="words"
        :options="{ handle: '.list__item_first_burger' }"
      >
        <v-word
          v-for="(word, index) in words"
          :key="`${word.word}-${index}`"
          :word="word"
          draggable
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import VWord from '@/components/VWord';
import draggable from 'vuedraggable';
import { filter } from '@/mixins/filter';

export default {
  name: 'Favorites',
  components: { VWord, draggable },
  mixins: [filter],
  computed: {
    words: {
      get() {
        return this.$store.getters['favorites/favorites'];
      },
      set(value) {
        this.$store.commit('favorites/SET_FAVORITES', value);
      },
    },
  },
};
</script>
