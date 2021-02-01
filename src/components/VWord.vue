<template>
  <div
    class="list__item"
    @click="showMore = !showMore"
  >
    <div
      class="list__item_first"
      :class="{'show-more': showMore}"
    >
      <span class="list__item_first_word">{{ word.word }}</span>
      <span class="list__item_first_part_of_speech">{{ speechPart }}</span>
      <span class="list__item_first_value">
        <p v-for="value in description" :key="value">{{ value }}</p>
      </span>
      <span class="list__item_first_icon">
        <button
          class="list__item_star-button"
          @click.stop="toggleFavorite"
        >
          <star-icon v-if="!inFavorites" class="icon star-icon" />
          <star-selected-icon v-else class="icon star-icon" />
        </button>
      </span>
    </div>
    <span
      v-show="showMore"
      class=x
    >
      {{ word.description }}
    </span>
  </div>
</template>

<script>
import StarSelectedIcon from '@/assets/star-selected.svg';
import StarIcon from '@/assets/star.svg';
import { transformTag } from '@/utils';

export default {
  name: 'VWord',
  props: {
    word: {
      type: Object,
      required: true,
    }
  },
  components: { StarIcon, StarSelectedIcon },
  data() {
    return {
      showMore: false,

    };
  },
  computed: {
    inFavorites() {
      return false;
    },
    speechPart() {
      return this.word.tags && this.word.tags.map(transformTag).join(', ');
    },
    description() {
      if (!this.word.defs) {
        return null;
      }
      return this.showMore && this.word.defs.length > 1
        ? this.word.defs.map(def => def.split('\t'))
          .map(([tag, d]) => [transformTag(tag), d].join(', '))
        : [ this.word.defs[0].split('\t')[1] ];
    },
  },
  methods: {
    toggleFavorite() {
      //
    }
  },
}
</script>

<style scoped>

</style>
