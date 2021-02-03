<template>
  <div class="list">
    <v-word
      v-for="(word, index) in words"
      :key="`${word.word}-${index}`"
      :word="word"
    />
  </div>
</template>

<script>
import VWord from '@/components/VWord';
import { filter } from '@/mixins/filter';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: { VWord },
  mixins: [filter],
  computed: {
    ...mapState({
      words: state => state.words,
    }),
  },
};
</script>
