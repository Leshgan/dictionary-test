<template>
  <div class="favorites">
    <h1 class="main-title">Starred Words</h1>
    <div class="list">
      <draggable
        :value="words"
        @input="setWords"
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
import { mapGetters, mapMutations } from 'vuex';
import VWord from '@/components/VWord';
import draggable from 'vuedraggable';
import { filter } from '@/mixins/filter';

export default {
  name: 'Favorites',
  components: { VWord, draggable },
  mixins: [filter],
  computed: {
    ...mapGetters('favorites', {
      words: 'favorites',
    }),
  },
  methods: {
    ...mapMutations('favorites', {
      setWords: 'SET_FAVORITES',
    }),
  },
};
</script>
